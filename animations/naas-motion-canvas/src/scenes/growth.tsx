import {Line, Node, Polygon, Rect, Txt, makeScene2D} from '@motion-canvas/2d';
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

const R = 34; // hex radius (centre to vertex)
const RINGS = 6; // full rings around the centre: 6 + 12 + ... + 36 = 126 hexes

// Pointy-top hexes on an axial grid. Polygon's first vertex points up, so no
// rotation is needed and grid spacing matches the shape.
const gap = R * 1.4;
const cells: {x: number; y: number; ring: number; angle: number; tenant?: Tenant}[] = [];
for (let q = -RINGS; q <= RINGS; q++)
  for (let r = -RINGS; r <= RINGS; r++) {
    const ring = (Math.abs(q) + Math.abs(r) + Math.abs(q + r)) / 2;
    if (ring === 0 || ring > RINGS) continue;
    const x = gap * Math.sqrt(3) * (q + r / 2);
    const y = gap * 1.5 * r;
    // Clockwise from straight up, 0..2π.
    const angle = (Math.atan2(x, -y) + Math.PI * 2) % (Math.PI * 2);
    cells.push({x, y, ring, angle});
  }

// NaaS tenants, apps per tenant from Grafana 2026-10-21. One hex ≈ 41 apps,
// at least one hex each. Each tenant gets a contiguous wedge.
type Tenant = {name: string; apps: number; fill: string; stroke: string};
const TENANTS: Tenant[] = [
  {name: 'Nav', apps: 4684, fill: HEX_FILL, stroke: HEX_STROKE},
  {name: 'SSB', apps: 292, fill: '#2a1a2e', stroke: '#9d3b5a'},
  {name: 'Landbruksdirektoratet', apps: 164, fill: '#2e1a22', stroke: '#c2415d'},
  {name: 'Arbeidstilsynet', apps: 72, fill: '#331b20', stroke: '#e8607a'},
];
const total = TENANTS.reduce((a, t) => a + t.apps, 0);
const counts = TENANTS.map(t => Math.max(1, Math.round((t.apps / total) * cells.length)));
counts[0] += cells.length - counts.reduce((a, b) => a + b, 0);
cells.sort((a, b) => a.angle - b.angle || a.ring - b.ring);
let at = 0;
TENANTS.forEach((t, i) => {
  for (let k = 0; k < counts[i]; k++) cells[at++].tenant = t;
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
  const lines: Line[] = [];

  const nTeams = createSignal(0);
  const nApps = createSignal(0);
  const nDeploys = createSignal(0);
  const fmt = (v: number) => Math.round(v).toLocaleString('nb-NO').replace(/\s/g, '\u202f');

  view.add(
    <Node ref={world} scale={2.4} y={-45}>
      {teams.map(c => (
        <Line
          ref={l => lines.push(l)}
          points={[[0, 0], [c.x, c.y]]}
          stroke={c.tenant.name === 'Nav' ? ACCENT : c.tenant.stroke}
          lineWidth={2}
          opacity={0.35}
          end={0}
        />
      ))}
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
        size={R * 2.6}
        fill={ACCENT}
        stroke={'#ff7a8a'}
        lineWidth={3}
        shadowColor={ACCENT}
        shadowBlur={0}
        scale={0}
      >
        <Txt ref={coreLabel} text="nais" fill={TEXT} fontWeight={700} fontSize={26} opacity={0} />
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
    counter(nTeams, 'etater', -560),
    counter(nApps, 'applikasjoner', 0),
    counter(nDeploys, 'deployer per uke (Nav, alle miljøer)', 560, '≈'),
  ] as Rect[];
  // Dark band behind the counters so hexes never fight the numbers.
  const band = (
    <Rect width={1920} height={260} y={410} opacity={0}
      fill={'#0b1120'} shadowColor={'#0b1120'} shadowBlur={80} />
  ) as Rect;
  const topBand = (
    <Rect width={1920} height={200} y={-500} opacity={0}
      fill={'#0b1120'} shadowColor={'#0b1120'} shadowBlur={80} />
  ) as Rect;
  view.add([band, topBand]);
  view.add(counters);
  view.add(
    <Txt ref={title} text={"4 etater, 5\u202f212 apper"} y={-450} fill={TEXT}
      fontSize={64} fontWeight={700} opacity={0} />,
  );

  const legend = (
    <Rect layout direction="row" gap={40} y={-375} opacity={0}>
      {TENANTS.map(t => (
        <Rect layout direction="row" gap={12} alignItems="center">
          <Polygon sides={6} size={26} fill={t.fill} stroke={t.stroke} lineWidth={3} />
          <Txt text={t.name} fill={MUTED} fontSize={26} fontFamily="Inter, sans-serif" />
        </Rect>
      ))}
    </Rect>
  ) as Rect;
  view.add(legend);

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
    world().scale(0.62, grow + 1.8, easeInOutCubic),
        band.opacity(1, 0.6),
    topBand.opacity(1, 0.6),
    sequence(0.12, ...counters.map(c => c.opacity(1, 0.6))),
    nTeams(4, grow, easeOutCubic),
    nApps(5212, grow + 0.6, easeOutCubic),
    nDeploys(21500, grow + 1.0, easeOutCubic),
    sequence(
      grow / TEAMS,
      ...teams.map((_, i) =>
        all(
          lines[i].end(1, 0.5, easeOutExpo),
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
    ...lines.map(l => l.opacity(0.9, 0.5).to(0.35, 0.8)),
    ...hexes.map((h, i) => delay((teams[i].ring - 1) * 0.06, all(h.stroke(ACCENT, 0.3).to(teams[i].tenant.stroke, 0.6), h.fill(FLASH, 0.3).to(teams[i].tenant.fill, 0.6)))),
  );
  yield* legend.opacity(1, 0.6);
  yield* waitFor(0.8);
});
