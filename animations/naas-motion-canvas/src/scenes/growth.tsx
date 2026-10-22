import {Node, Polygon, Rect, Txt, makeScene2D} from '@motion-canvas/2d';
import {NORWAY, SPACING} from '../norway';
import {
  all,
  createRef,
  createSignal,
  delay,
  easeInOutCubic,
  easeOutBack,
  easeOutCubic,
  easeOutExpo,
  sequence,
  waitFor,
} from '@motion-canvas/core';

// Brand colours from presentations/2026-08-nais-as-a-service/style.css
const ACCENT = '#e8384f';
const ACCENT_DARK = '#dc2626';
const TEXT = '#f8fafc';
const MUTED = '#94a3b8';
const HEX_FILL = '#1e293b';
const HEX_STROKE = '#334155';

// Hexes fill an outline of mainland Norway.
const R = SPACING / (Math.sqrt(3) * 1.4); // hex radius, same gap ratio as before
// The hub sits at the geometric centre of Norway (mean of all cells), and the
// country grows outward from there.
const MX = NORWAY.reduce((a, c) => a + c[0], 0) / NORWAY.length;
const MY = NORWAY.reduce((a, c) => a + c[1], 0) / NORWAY.length;
// Snap to the land cell nearest the mean, so the hub sits on land.
const [CX, CY] = NORWAY.reduce((b, c) => (Math.hypot(c[0] - MX, c[1] - MY) < Math.hypot(b[0] - MX, b[1] - MY) ? c : b));
const SHIFTED = NORWAY.map(([x, y]) => [x - CX, y - CY] as [number, number]);
const cells: {x: number; y: number; ring: number; angle: number; tenant?: Tenant}[] = SHIFTED.filter(([x, y]) => x !== 0 || y !== 0).map(([x, y]) => ({
  x,
  y,
  // "ring" = distance band from the centre.
  ring: Math.round(Math.hypot(x, y) / SPACING),
  angle: (Math.atan2(x, -y) + Math.PI * 2) % (Math.PI * 2),
}));
// Final zoom: the whole country fits between the title and the counters.
const FIT = 0.62;
// Framing: centre of the country's bounding box, used for the final camera.
const BOX = {
  x: (Math.min(...SHIFTED.map((c) => c[0])) + Math.max(...SHIFTED.map((c) => c[0]))) / 2,
  y: (Math.min(...SHIFTED.map((c) => c[1])) + Math.max(...SHIFTED.map((c) => c[1]))) / 2,
};

// NaaS tenants, apps per tenant from Grafana 2026-10-21. One hex ≈ 41 apps,
// at least one hex each. Small tenants are scattered across the honeycomb.
type Tenant = {name: string; apps: number; fill: string; stroke: string};
const TENANTS: Tenant[] = [
  {name: 'Nav', apps: 4684, fill: HEX_FILL, stroke: HEX_STROKE},
  {name: 'SSB', apps: 292, fill: '#3a1a26', stroke: '#e8607a'},
  {name: 'Landbruksdirektoratet', apps: 164, fill: '#33280f', stroke: '#e0a43a'},
  {name: 'Arbeidstilsynet', apps: 72, fill: '#0f2e2e', stroke: '#3fb8a8'},
  // KS Digital and Novari have signed but run no apps yet, so they get no hexes.
];
const total = TENANTS.reduce((a, t) => a + t.apps, 0);
const counts = TENANTS.map(t => Math.max(1, Math.round((t.apps / total) * cells.length)));
counts[0] += cells.length - counts.reduce((a, b) => a + b, 0);
// Even spread: walk the cells in angle order and drop small-tenant hexes at
// evenly spaced positions, offset by a fixed seed so renders are stable.
cells.sort((a, b) => a.angle - b.angle || a.ring - b.ring);
cells.forEach(c => (c.tenant = TENANTS[0]));
const small = TENANTS.slice(1).flatMap((t, i) => Array(counts[i + 1]).fill(t));
const order = [0, 7, 3, 10, 1, 8, 5, 12, 2, 9, 4, 11, 6]; // seeded interleave
small.forEach((t, k) => {
  const slot = order[k % order.length];
  const idx = Math.floor(((slot + 0.5) / order.length) * cells.length);
  let j = idx;
  while (cells[j].tenant !== TENANTS[0] || cells[j].ring < 1) j = (j + 1) % cells.length;
  cells[j].tenant = t;
});
// Grow ring by ring, clockwise within each ring.
const teams = [...cells].sort((a, b) => a.ring - b.ring || a.angle - b.angle);
const TEAMS = teams.length;
const FLASH = '#3b1a24';

export default makeScene2D(function* (view) {
  view.fill('#0b1120');
  view.fontFamily('Poppins, Inter, sans-serif');

  const world = createRef<Node>();
  const core = createRef<Polygon>();
  const coreLabel = createRef<Txt>();
  const title = createRef<Txt>();
  const hexes: Polygon[] = [];

  const nTeams = createSignal(0);
  const nApps = createSignal(0);
  const nDeploys = createSignal(0);
  const fmt = (v: number) => Math.round(v).toLocaleString('nb-NO').replace(/\s/g, '\u202f');

  view.add(
    <Node ref={world} scale={2.4} y={-45}>
      {teams.map(c => (
        <Polygon
          ref={p => hexes.push(p)}
          x={c.x}
          y={c.y}
          sides={6}
          size={R * 2}
          fill={c.tenant.fill}
          stroke={c.tenant.stroke}
          lineWidth={2}
          scale={0}
        />
      ))}
      <Polygon
        ref={core}
        sides={6}
        size={64}
        fill={ACCENT}
        stroke={'#ff7a8a'}
        lineWidth={3}
        shadowColor={ACCENT}
        shadowBlur={0}
        scale={0}
      >
        <Txt ref={coreLabel} text="nais" fill={TEXT} fontWeight={700} fontSize={18} opacity={0} />
      </Polygon>
    </Node>,
  );

  const counter = (value: () => number, label: string, x: number, prefix = '') => (
    <Rect layout direction="column" alignItems="center" x={x} y={420} opacity={0} gap={4}>
      <Txt text={() => prefix + fmt(value())} fill={TEXT} fontSize={84} fontWeight={700} shadowColor={ACCENT} shadowBlur={30} />
      <Txt text={label} fill={MUTED} fontSize={28} fontFamily="Inter, sans-serif" />
    </Rect>
  );
  const counters = [
    counter(nTeams, 'tenants', -560),
    counter(nApps, 'applikasjoner', 0),
    counter(nDeploys, 'deployer per uke (Nav, alle miljøer)', 560, '≈'),
  ] as Rect[];
  // Dark band behind the counters so hexes never fight the numbers.
  const band = (
    <Rect width={1920} height={200} y={430} opacity={0}
      fill={'#0b1120'} shadowColor={'#0b1120'} shadowBlur={80} />
  ) as Rect;
  const topBand = (
    <Rect width={1920} height={120} y={-500} opacity={0}
      fill={'#0b1120'} shadowColor={'#0b1120'} shadowBlur={80} />
  ) as Rect;
  view.add([band, topBand]);
  view.add(counters);
  view.add(
    <Txt ref={title} text={"6 tenants, 5\u202f212 apper"} y={-450} fill={TEXT}
      fontSize={64} fontWeight={700} opacity={0} />,
  );


  // 1. Platform appears
  yield* all(
    core().scale(1, 0.9, easeOutBack),
    core().shadowBlur(90, 1.2, easeOutCubic),
    delay(0.4, coreLabel().opacity(1, 0.5)),
    delay(0.3, title().opacity(1, 0.8)),
    delay(0.3, title().y(-460, 0.8, easeOutCubic)),
  );

  // 2. Teams grow outwards, wired to the platform, while the camera pulls back
  const grow = 5.2;
  yield* all(
    world().scale(FIT, grow + 1.8, easeInOutCubic),
    world().x(-BOX.x * FIT, grow + 1.8, easeInOutCubic),
    world().y(-40 - BOX.y * FIT, grow + 1.8, easeInOutCubic),
        sequence(0.12, ...counters.map(c => c.opacity(1, 0.6))),
    nTeams(6, grow, easeOutCubic),
    nApps(5212, grow + 0.6, easeOutCubic),
    nDeploys(21500, grow + 1.0, easeOutCubic),
    sequence(
      grow / TEAMS,
      ...teams.map((_, i) =>
        all(
          hexes[i].scale(1, 0.55, easeOutBack),
          hexes[i].stroke(ACCENT, 0.15).to(teams[i].tenant.stroke, 0.9),
          hexes[i].fill(FLASH, 0.15).to(teams[i].tenant.fill, 0.9),
        ),
      ),
    ),
  );

  // 3. Finish: pulse through the network
  yield* all(
    core().shadowBlur(160, 0.5).to(90, 0.8),
    core().fill(ACCENT_DARK, 0.5).to(ACCENT, 0.8),
    ...hexes.map((h, i) => delay(teams[i].ring * 0.03, all(h.stroke(ACCENT, 0.3).to(teams[i].tenant.stroke, 0.6), h.fill(FLASH, 0.3).to(teams[i].tenant.fill, 0.6)))),
  );
  // A second ripple from Oslo through the whole country.
  yield* all(
    ...hexes.map((h, i) => delay(teams[i].ring * 0.03, all(h.stroke(ACCENT, 0.3).to(teams[i].tenant.stroke, 0.6), h.fill(FLASH, 0.3).to(teams[i].tenant.fill, 0.6)))),
  );
  yield* waitFor(0.8);
});
