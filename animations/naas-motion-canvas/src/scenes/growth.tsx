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

const R = 34; // hex radius
const TEAMS = 150;

// Axial hex coordinates sorted by ring, centre excluded.
const cells: {x: number; y: number; ring: number}[] = [];
for (let q = -9; q <= 9; q++)
  for (let r = -9; r <= 9; r++) {
    const ring = (Math.abs(q) + Math.abs(r) + Math.abs(q + r)) / 2;
    if (ring === 0 || ring > 8) continue;
    const gap = R * 1.4;
    cells.push({x: gap * Math.sqrt(3) * (q + r / 2), y: gap * 1.5 * r, ring});
  }
cells.sort((a, b) => a.ring - b.ring || Math.atan2(a.y, a.x) - Math.atan2(b.y, b.x));
const teams = cells.slice(0, TEAMS);

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
    <Node ref={world} scale={2.4} y={40}>
      {teams.map(c => (
        <Line
          ref={l => lines.push(l)}
          points={[[0, 0], [c.x, c.y]]}
          stroke={ACCENT}
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
          rotation={30}
          fill={HEX_FILL}
          stroke={HEX_STROKE}
          lineWidth={2}
          scale={0}
        />
      ))}
      <Polygon
        ref={core}
        sides={6}
        size={R * 2.6}
        rotation={30}
        fill={ACCENT}
        stroke={'#ff7a8a'}
        lineWidth={3}
        shadowColor={ACCENT}
        shadowBlur={0}
        scale={0}
      >
        <Txt ref={coreLabel} text="nais" fill={TEXT} fontWeight={700} fontSize={26} rotation={-30} opacity={0} />
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
    world().y(-55, grow + 1.8, easeInOutCubic),
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
          hexes[i].stroke(ACCENT, 0.15).to(HEX_STROKE, 0.9),
          hexes[i].fill('#3b1a24', 0.15).to(HEX_FILL, 0.9),
        ),
      ),
    ),
  );

  // 3. Finish: pulse through the network
  yield* all(
    core().shadowBlur(160, 0.5).to(90, 0.8),
    core().fill(ACCENT_DARK, 0.5).to(ACCENT, 0.8),
    ...lines.map(l => l.opacity(0.9, 0.5).to(0.35, 0.8)),
    ...hexes.map((h, i) => delay((teams[i].ring - 1) * 0.06, all(h.stroke(ACCENT, 0.3).to(HEX_STROKE, 0.6), h.fill('#3b1a24', 0.3).to(HEX_FILL, 0.6)))),
  );
  yield* waitFor(0.8);
});
