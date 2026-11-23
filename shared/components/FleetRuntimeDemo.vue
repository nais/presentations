<!-- Adapted from agent-substrate/substrate site demo (site/layouts/_shortcodes/home.html), Apache-2.0 -->
<script setup>
  import { onScopeDispose, reactive, ref } from 'vue'
  import './fleet-live.css'
  import { useLiveTicker } from './fleet-live.js'

  const DOTS = 84
  const TEAMS = {
    'aksel-studio': {
      color: '#a78bfa',
      glow: 'rgba(167, 139, 250, 0.5)',
      job: 'proto',
    },
    dolly: { color: '#61d76b', glow: 'rgba(97, 215, 107, 0.5)', job: 'testdata' },
    nais: { color: '#64b9de', glow: 'rgba(100, 185, 222, 0.5)', job: 'forklar' },
    'titt-pa-ting': {
      color: '#e77cb2',
      glow: 'rgba(231, 124, 178, 0.5)',
      job: 'triage',
    },
  }
  const TEAM_NAMES = Object.keys(TEAMS)
  // Same cycle lengths and phase splits as the original demo
  const CYCLES = [5000, 6000, 7500, 10000]
  const SPLITS = {
    5000: { resume: 1200, run: 2800, suspend: 1000 },
    6000: { resume: 1350, run: 3500, suspend: 1150 },
    7500: { resume: 1500, run: 4700, suspend: 1300 },
    10000: { resume: 1700, run: 6800, suspend: 1500 },
  }
  const start = [
    {
      dot: 8,
      team: 'aksel-studio',
      state: 'running',
      width: 68,
      cycle: 5000,
      stagger: 600,
    },
    {
      dot: 23,
      team: 'dolly',
      state: 'running',
      width: 82,
      cycle: 6000,
      stagger: 1800,
    },
    {
      dot: 41,
      team: 'nais',
      state: 'resuming',
      width: 100,
      cycle: 7500,
      stagger: 1100,
    },
    {
      dot: 72,
      team: 'aksel-studio',
      state: 'suspending',
      width: 0,
      cycle: 6000,
      stagger: 900,
    },
  ]

  // Dot state: '' (suspended), 'snap' (suspended with snapshot), or { state, team }
  const dots = reactive(
    Array.from({ length: DOTS }, (_, i) => (i % 7 === 0 || i % 11 === 0 ? 'snap' : ''))
  )
  const workers = reactive(
    start.map((w, i) => ({
      id: 'worker-' + (i + 1),
      dot: w.dot,
      team: w.team,
      name: w.team + '/' + TEAMS[w.team].job + '-' + ((w.dot % 12) + 1),
      state: w.state,
      width: w.width,
      latency: 290,
      ...phase(w.cycle),
      next: 0,
      stagger: w.stagger,
    }))
  )
  workers.forEach((w) => (dots[w.dot] = { state: w.state, team: w.team }))
  const routing = ref('')

  function phase(cycle) {
    const s = SPLITS[cycle]
    return { resumeMs: s.resume, runMs: s.run, suspendMs: s.suspend }
  }

  function count(state) {
    return workers.filter((w) => w.state === state).length
  }

  function sub(w) {
    if (w.state === 'resuming') return 'våkner · ' + w.latency + ' ms'
    if (w.state === 'suspending') return 'pauses'
    return 'i sandkasse'
  }

  function pickDot() {
    const used = new Set(workers.map((w) => w.dot))
    for (let i = 0; i < 40; i++) {
      const c = Math.floor(Math.random() * DOTS)
      if (!used.has(c)) return c
    }
    return 0
  }

  function pickTeam(active) {
    const counts = Object.fromEntries(TEAM_NAMES.map((t) => [t, 0]))
    workers.forEach((w) => w !== active && counts[w.team]++)
    const underTwo = TEAM_NAMES.filter((t) => counts[t] < 2 && t !== active.team)
    const pool = underTwo.length ? underTwo : TEAM_NAMES
    return pool[Math.floor(Math.random() * pool.length)]
  }

  let routeTimer = null

  function tick() {
    const t = performance.now()
    for (const w of workers) {
      if (t < w.next) {
        if (w.state === 'running' && Math.random() < 0.25) {
          w.width = Math.max(46, Math.min(94, w.width + Math.floor(Math.random() * 17) - 8))
        }
        continue
      }
      if (w.state === 'running') {
        w.state = 'suspending'
        w.width = 0
        w.next = t + w.suspendMs
        dots[w.dot] = { state: 'suspending', team: w.team }
      } else if (w.state === 'suspending') {
        dots[w.dot] = 'snap'
        Object.assign(w, phase(CYCLES[Math.floor(Math.random() * CYCLES.length)]))
        w.dot = pickDot()
        w.team = pickTeam(w)
        w.name = w.team + '/' + TEAMS[w.team].job + '-' + ((w.dot % 12) + 1)
        w.state = 'resuming'
        w.latency = 210 + Math.floor(Math.random() * 175)
        w.width = 100
        w.next = t + w.resumeMs
        dots[w.dot] = { state: 'resuming', team: w.team }
        routing.value = w.team
        clearTimeout(routeTimer)
        routeTimer = setTimeout(() => (routing.value = ''), 550)
      } else {
        w.state = 'running'
        w.width = 54 + Math.floor(Math.random() * 38)
        w.next = t + w.runMs
        dots[w.dot] = { state: 'running', team: w.team }
      }
    }
  }

  // Reduced motion keeps the static first frame. Each visit restarts the stagger so the pods do not all switch at once
  useLiveTicker(tick, 150, () => {
    const now = performance.now()
    workers.forEach((w) => (w.next = now + w.stagger))
  })
  onScopeDispose(() => clearTimeout(routeTimer))

  const teamStyle = (team) => ({
    '--c': TEAMS[team].color,
    '--g': TEAMS[team].glow,
  })
</script>

<template>
  <div class="frd fl-panel">
    <div class="fl-top"><span class="fl-live" /> eget GKE-cluster · fleet-runtime</div>
    <div class="frd-head">
      <span class="fl-label">AGENTJOBBER</span>
      <span class="frd-meta"
        >{{ DOTS }} jobber · <b class="fl-num r">{{ count('running') }}</b> kjører ·
        <b class="fl-num w">{{ count('resuming') }}</b> våkner ·
        <b class="fl-num s">{{ count('suspending') }}</b> pauses</span
      >
    </div>
    <div class="frd-dots">
      <span
        v-for="(d, i) in dots"
        :key="i"
        class="frd-dot"
        :class="typeof d === 'object' ? d.state : d"
        :style="typeof d === 'object' ? teamStyle(d.team) : null"
      />
    </div>
    <div class="frd-router">
      <i /><span
        class="frd-pill"
        :class="{ on: routing }"
        :style="routing ? teamStyle(routing) : null"
        >henter kommandoer fra fleet-control</span
      ><i />
    </div>
    <div class="frd-head">
      <span class="fl-label">KLARE WORKER-PODER</span
      ><span class="frd-meta">{{ workers.length }} poder · én jobb hver</span>
    </div>
    <div class="frd-pods">
      <div
        v-for="w in workers"
        :key="w.id"
        class="frd-pod"
        :class="w.state"
        :style="teamStyle(w.team)"
      >
        <div class="frd-pod-top">
          <span class="fl-ellipsis">{{ w.id }}</span><i />
        </div>
        <b class="fl-ellipsis">{{ w.name }}</b>
        <small class="fl-ellipsis">{{ sub(w) }}</small>
        <div class="frd-track">
          <div :style="{ transform: `scaleX(${w.width / 100})` }" />
        </div>
      </div>
    </div>
    <div class="frd-legend">
      <span v-for="(t, name) in TEAMS" :key="name"
        ><i :style="{ background: t.color }" />{{ name }}</span
      >
    </div>
  </div>
</template>

<style>
  /* Fixed sizes: state changes never move anything */

  .frd {
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
    height: 272px;
    padding: 8px 10px;
    overflow: hidden;
  }

  .frd-head {
    display: flex;
    gap: 12px;
    white-space: nowrap;
    justify-content: space-between;
    align-items: baseline;
    height: 13px;
    overflow: hidden;
  }

  .frd-meta {
    color: #9aa89f;
    font-variant-numeric: tabular-nums;
    flex: none;
  }

  .frd-meta b {
    font-weight: 600;
  }

  .frd-meta .r {
    color: #61d76b;
  }

  .frd-meta .w {
    color: #64b9de;
  }

  .frd-meta .s {
    color: #f3f17b;
  }

  .frd-dots {
    display: grid;
    grid-template-columns: repeat(21, 1fr);
    gap: 3px;
  }

  .frd-dot {
    aspect-ratio: 1;
    border-radius: 2px;
    background: #1f2a22;
    box-sizing: border-box;
    transition:
      background-color 0.35s ease,
      box-shadow 0.35s ease,
      transform 0.35s ease;
    border: 1px solid transparent;
  }

  .frd-dot.snap {
    background: #2a372e;
  }

  .frd-dot.running {
    background: var(--c);
    box-shadow: 0 0 6px var(--g);
  }

  .frd-dot.resuming {
    background: color-mix(in srgb, var(--c) 28%, transparent);
    border: 1.5px solid var(--c);
    box-shadow: 0 0 8px var(--g);
  }

  .frd-dot.suspending {
    background: color-mix(in srgb, var(--c) 22%, transparent);
    border: 1px dashed var(--c);
    transform: scale(0.9);
  }

  .frd-router {
    display: flex;
    align-items: center;
    gap: 8px;
    height: 20px;
  }

  .frd-router i {
    flex: 1;
    height: 1px;
    background: #243028;
  }

  .frd-pill {
    padding: 3px 10px;
    border: 1px solid #243028;
    border-radius: 999px;
    background: #111612;
    transition:
      border-color 0.3s ease,
      box-shadow 0.3s ease;
    width: 230px;
    height: 18px;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
  }

  .frd-pill.on {
    border-color: var(--c);
    box-shadow: 0 0 12px -2px var(--g);
  }

  .frd-pods {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 5px;
  }

  .frd-pod {
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding: 5px 6px;
    border: 1px solid #243028;
    border-radius: 6px;
    background: #111612;
    transition:
      background-color 0.35s ease,
      border-color 0.35s ease;
    height: 56px;
    overflow: hidden;
    border-width: 1px;
  }

  .frd-pod b {
    font-size: 8px;
    font-weight: 500;
    color: var(--c);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .frd-pod small {
    white-space: nowrap;
    font-size: 7px;
    color: #8c9c92;
  }

  .frd-pod.resuming {
    border-color: color-mix(in srgb, var(--c) 44%, transparent);
    background: color-mix(in srgb, var(--c) 8%, #111612);
  }

  .frd-pod.resuming small {
    color: var(--c);
  }

  .frd-pod.suspending {
    border-style: dashed;
    background: #0d120e;
  }

  .frd-pod-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #6e7d73;
    font-size: 7px;
    height: 10px;
  }

  .frd-pod-top i {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: var(--c);
    flex: none;
    border: 1px solid transparent;
  }

  .frd-pod.suspending .frd-pod-top i {
    background: transparent;
    border: 1px solid var(--c);
  }

  .frd-track {
    height: 3px;
    border-radius: 2px;
    background: #1f2a22;
    overflow: hidden;
  }

  .frd-track div {
    height: 100%;
    background: var(--c);
    transform-origin: left;
    transition: transform 0.9s ease;
  }

  .frd-legend {
    display: flex;
    gap: 10px;
    color: #9aa89f;
    height: 12px;
    flex-wrap: nowrap;
    overflow: hidden;
  }

  .frd-legend i {
    display: inline-block;
    width: 7px;
    height: 7px;
    margin-right: 4px;
    border-radius: 2px;
  }

  .frd-pod b,
  .frd-pod small {
    display: block;
    height: 11px;
  }
</style>
