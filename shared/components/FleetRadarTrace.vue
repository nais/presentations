<!-- Live fleet-radar trace for one agent job. Same look as FleetRuntimeDemo (fleet-live.css). Sketch only: made-up data. -->
<script setup>
  import { ref } from 'vue'
  import './fleet-live.css'
  import { useLiveTicker } from './fleet-live.js'

  const TRACES = [
    {
      agent: 'aksel-studio/proto-3',
      color: '#a78bfa',
      who: 'Ola N.',
      rows: [
        ['start', 'Ola N. starter jobben fra Aksel Studio', 'ok'],
        ['regel', 'agentprofilen er godkjent og gyldig', 'ok'],
        ['modell', 'Vertex AI i teamets prosjekt · testdata', 'ok'],
        ['verktøy', 'dolly · søk etter testpersoner (lesing)', 'ok'],
        ['regel', 'dolly · bestill er skriving: krever ja', 'venter'],
        ['godkjent', 'Ola N. sa ja i appen', 'ok'],
        ['slutt', 'artefakt levert · sandkassen slettet', 'ok'],
      ],
    },
    {
      agent: 'nais/forklar-3',
      color: '#64b9de',
      who: 'Emil T.',
      rows: [
        ['start', 'Emil T. spør fra Nais Console', 'ok'],
        ['regel', 'agentprofilen er godkjent og gyldig', 'ok'],
        ['modell', 'Vertex AI i teamets prosjekt · interne data', 'ok'],
        ['verktøy', 'github · les manifestet (lesing)', 'ok'],
        ['regel', 'github · skriv er utenfor profilen', 'avvist'],
        ['svar', 'agenten foreslår en PR i stedet', 'ok'],
        ['slutt', 'svar levert · ingen endring gjort', 'ok'],
      ],
    },
  ]
  const SLOTS = 7

  const trace = ref(0)
  const shown = ref(SLOTS)
  const traceId = ref('4bf92f35')
  const t0 = ref(11)
  function tick() {
    if (shown.value < SLOTS + 3) {
      shown.value++ // the three extra ticks hold the finished trace on screen
      return
    }
    trace.value = (trace.value + 1) % TRACES.length
    traceId.value = Math.floor(Math.random() * 0xffffffff)
      .toString(16)
      .padStart(8, '0')
    t0.value = 10 + Math.floor(Math.random() * 40)
    shown.value = 1
  }

  const time = (i) =>
    '10:' +
    String(t0.value + Math.floor(i * 0.6)).padStart(2, '0') +
    ':' +
    String((i * 7 + 11) % 60).padStart(2, '0')

  // Each visit to the slide replays the trace from its first row
  useLiveTicker(tick, 1300, () => (shown.value = 1))
</script>

<template>
  <div class="frt fl-panel" :style="{ '--c': TRACES[trace].color }">
    <div class="fl-top"><span class="fl-live" /> fleet-radar · én agentjobb</div>
    <div class="frt-meta">
      <span class="fl-ellipsis"><b>agent</b> {{ TRACES[trace].agent }}</span>
      <span class="fl-ellipsis"><b>startet av</b> {{ TRACES[trace].who }}</span>
      <span class="fl-ellipsis"><b>trace-ID</b> {{ traceId }}</span>
    </div>
    <ol class="frt-rows">
      <li v-for="(r, i) in TRACES[trace].rows" :key="i" :class="{ on: i < shown }">
        <time>{{ time(i) }}</time>
        <span class="frt-k" :class="r[0]">{{ r[0] }}</span>
        <span class="fl-ellipsis">{{ r[1] }}</span>
        <span class="frt-s" :class="r[2]"><i class="fl-dot" />{{ r[2] }}</span>
      </li>
    </ol>
  </div>
</template>

<style>
  .frt {
    display: flex;
    flex-direction: column;
    gap: 7px;
    width: 100%;
    height: 250px;
    padding: 10px 12px;
    overflow: hidden;
    font-size: 10px;
  }

  .frt-meta {
    display: grid;
    grid-template-columns: 1.4fr 1fr 1fr;
    gap: 8px;
    height: 14px;
    color: var(--c);
  }

  .frt-meta b {
    font-weight: 400;
    color: #6e7d73;
  }

  .frt-rows {
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .frt-rows li {
    display: grid;
    grid-template-columns: 58px 62px minmax(0, 1fr) 58px;
    align-items: center;
    gap: 8px;
    height: 22px;
    margin: 0;
    padding: 0 8px;
    border: 1px solid #243028;
    border-radius: 6px;
    background: #111612;
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  .frt-rows li.on {
    opacity: 1;
  }

  .frt-rows li > .fl-ellipsis {
    color: #e4ebe6;
  }

  .frt-rows time {
    color: #6e7d73;
  }

  .frt-k {
    height: 15px;
    line-height: 13px;
    border: 1px solid #243028;
    border-radius: 4px;
    text-align: center;
    color: #9aa89f;
  }

  .frt-k.regel {
    color: #c4b5fd;
  }

  .frt-k.modell {
    color: #64b9de;
  }

  .frt-k.verktøy {
    color: #61d76b;
  }

  .frt-k.godkjent,
  .frt-k.svar {
    color: #f3f17b;
  }

  .frt-s {
    display: flex;
    align-items: center;
    gap: 5px;
    color: #61d76b;
  }

  .frt-s .fl-dot {
    background: currentColor;
  }

  .frt-s.venter {
    color: #f3f17b;
  }

  .frt-s.avvist {
    color: #e77cb2;
  }
</style>
