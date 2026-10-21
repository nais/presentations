<template>
  <BrowserFrame :url="frame.url" :active="frame.active" :crumbs="frame.crumbs">
    <div ref="root" class="mock" data-motion-self>
      <!-- Team overview -->
      <section v-show="view === 'overview'" class="view">
        <h2>team-eksempel</h2>
        <div class="cols">
          <div>
            <h5>Team health</h5>
            <div class="tiles">
              <div class="tile ok"><b>0</b><small>Issues</small></div>
              <div class="tile ok"><b>0</b><small>Vulnerabilities</small></div>
              <div class="tile ok"><b>0</b><small>Alerts firing</small></div>
              <div class="tile warn">
                <b>+4 %</b><small>Cost vs last month</small>
              </div>
            </div>
            <h5>Inventory</h5>
            <div class="inv">
              <div class="box">
                <b>Applications 6</b><small>● 6 running</small>
              </div>
              <div class="box"><b>Jobs 2</b><small>● 2 completed</small></div>
            </div>
            <div class="chips">
              <span>Cloud SQL 2</span><span>Buckets 1</span><span>Valkey 1</span><span>Kafka Topics 3</span><span>Secrets 5</span>
            </div>
          </div>
          <div>
            <h5>Latest activity</h5>
            <p v-for="a in ACTIVITY" :key="a" class="act">{{ a }}</p>
          </div>
        </div>
      </section>

      <!-- Team cost -->
      <section v-show="view === 'cost'" class="view">
        <h2>Cost</h2>
        <svg viewBox="0 0 400 150" class="area" aria-hidden="true">
          <line
            v-for="y in [20, 60, 100, 140]"
            :key="y"
            x1="30"
            x2="400"
            :y1="y"
            :y2="y"
            class="gl"
          />
          <path v-for="s in COST" :key="s.name" :d="s.d" :fill="s.color" />
          <text
            v-for="(d, i) in ['1. sep', '15. sep', '1. okt', '15. okt']"
            :key="d"
            :x="30 + i * 110"
            y="150"
            class="tk"
          >
            {{ d }}
          </text>
        </svg>
        <div class="legend">
          <span v-for="s in COST" :key="s.name"><i :style="{ background: s.color }" />{{ s.name }}</span>
        </div>
      </section>

      <!-- Applications list -->
      <section v-show="view === 'apps'" class="view">
        <h2>Applications</h2>
        <div class="table">
          <div class="th">
            <span>Name</span><span>Environment</span><span>State</span>
          </div>
          <div
            v-for="a in APPS"
            :key="a"
            class="tr"
            :class="{ target: a === 'api-soknad' }"
          >
            <span class="mono">{{ a }}</span><span>prod</span><span class="green">● Running</span>
          </div>
        </div>
      </section>

      <!-- App overview -->
      <section v-show="view === 'app'" class="view">
        <h2>api-soknad <em>prod</em></h2>
        <div class="tabs">
          <span
            v-for="t in TABS"
            :key="t"
            :class="{ on: t === 'Overview' }"
            :data-tab="t"
          >{{ t }}</span>
        </div>
        <div class="cols">
          <div>
            <h5>Application health</h5>
            <div class="tiles">
              <div class="tile ok"><b>0</b><small>Issues</small></div>
              <div class="tile" :class="ke ? 'bad' : 'ok'">
                <b>{{ ke }}</b><small>Known exploited</small>
              </div>
              <div class="tile ok"><b>2/2</b><small>Instances</small></div>
              <div class="tile ok">
                <b>+2 %</b><small>Cost vs last month</small>
              </div>
            </div>
          </div>
          <div>
            <h5>Latest deployment <span class="badge">Success</span></h5>
            <p class="act">for 2 timer siden</p>
            <h5>Persistence</h5>
            <p class="act mono">soknad-db (Cloud SQL)</p>
            <p class="act mono">soknad-vedlegg (bucket)</p>
            <p class="act mono">soknad_stats (BigQuery)</p>
          </div>
        </div>
      </section>

      <!-- App vulnerabilities -->
      <section v-show="view === 'vulns'" class="view">
        <h2>api-soknad <em>prod</em></h2>
        <div class="tabs">
          <span
            v-for="t in TABS"
            :key="t"
            :class="{ on: t === 'Vulnerabilities' }"
          >{{ t }}</span>
        </div>
        <div class="cols">
          <div>
            <h5>Priority</h5>
            <div class="ke" :class="{ bad: ke }">{{ ke }} Known exploited</div>
            <div class="prio">
              <span>{{ ke }} High</span><span>0 Elevated</span><span>2 Monitor</span>
            </div>
            <h5>CVSS severity</h5>
            <div class="tiles three">
              <div class="tile" :class="ke ? 'bad' : 'ok'">
                <b>{{ ke }}</b><small>Critical</small>
              </div>
              <div class="tile ok"><b>0</b><small>High</small></div>
              <div class="tile ok"><b>2</b><small>Medium</small></div>
            </div>
          </div>
          <div class="image">
            <h5>Image</h5>
            <small>Tag</small>
            <p class="mono">
              {{ ke ? "2026.10.14-a1b2c3" : "2026.10.21-d4e5f6" }}
            </p>
            <p v-if="!ke && fixed" class="fixed">
              ✓ Avhengighet oppdatert og deployet
            </p>
          </div>
        </div>
      </section>

      <p class="note">Illustrasjon</p>
      <Cursor ref="cur" />
    </div>
  </BrowserFrame>
</template>

<script setup>
import { computed, ref } from "vue";
import BrowserFrame from "./BrowserFrame.vue";
import Cursor from "./Cursor.vue";
import { cursorClick, useSteps } from "./motion.js";

// story "team": team overview -> Cost. story "app": Applications -> one app.
// story "vulns": app overview with a known exploited CVE -> Vulnerabilities tab -> fixed.
const props = defineProps({
  story: { type: String, required: true },
});

const ACTIVITY = [
  "api-soknad oppdatert i prod",
  "worker oppdatert i dev",
  "frontend oppdatert i prod",
];
const APPS = ["api-soknad", "frontend", "worker"];
const TABS = [
  "Overview",
  "Instance Groups",
  "Vulnerabilities",
  "Deployments",
  "Issues",
  "Utilization",
  "Network",
  "Logs",
];
const COST = [
  {
    name: "Compute Engine",
    color: "#e7d9a6",
    d: "M30 140 L30 70 L140 66 L250 64 L400 60 L400 140 Z",
  },
  {
    name: "Cloud SQL",
    color: "#7fa7d6",
    d: "M30 140 L30 100 L140 98 L250 96 L400 94 L400 140 Z",
  },
  {
    name: "Cloud Storage",
    color: "#c98b5b",
    d: "M30 140 L30 122 L140 121 L250 120 L400 119 L400 140 Z",
  },
  {
    name: "BigQuery",
    color: "#8fc9a3",
    d: "M30 140 L30 132 L140 131 L250 132 L400 131 L400 140 Z",
  },
];

const START = { team: "overview", app: "apps", vulns: "app" };
const view = ref(START[props.story]);
const ke = ref(props.story === "vulns" ? 1 : 0);
const fixed = ref(false);

const frame = computed(() => {
  const app = ["team-eksempel", "Applications", "api-soknad"];
  return {
    overview: {
      url: "console.nais.io/team/team-eksempel",
      active: "Team Overview",
      crumbs: [],
    },
    cost: {
      url: "console.nais.io/team/team-eksempel/cost",
      active: "Cost",
      crumbs: ["team-eksempel", "Cost"],
    },
    apps: {
      url: "console.nais.io/team/team-eksempel/applications",
      active: "Applications",
      crumbs: ["team-eksempel", "Applications"],
    },
    app: {
      url: "console.nais.io/team/team-eksempel/prod/app/api-soknad",
      active: "Applications",
      crumbs: app,
    },
    vulns: {
      url: "console.nais.io/team/team-eksempel/prod/app/api-soknad/vulnerabilities",
      active: "Applications",
      crumbs: [...app, "Vulnerabilities"],
    },
  }[view.value];
});

const root = ref();
const cur = ref();

// The visible state follows the timeline position, so going backwards works.
useSteps((tl) => {
  const q = (s) => root.value.querySelector(s);
  const navItem = (label) =>
    [...root.value.closest(".browser").querySelectorAll("nav span")].find(
      (n) => n.textContent === label,
    );
  const marks = [
    { t: 0, s: { view: START[props.story], ke: ke.value, fixed: false } },
  ];
  const mark = (s) => marks.push({ t: tl.duration(), s });
  tl.from(root.value, { autoAlpha: 0, duration: 0.4 }).addLabel("s0");
  if (props.story === "team") {
    cursorClick(
      tl,
      cur.value.$el,
      root.value.closest(".body"),
      navItem("Cost"),
    );
    mark({ view: "cost", ke: 0, fixed: false });
    tl.from(q(".area"), { autoAlpha: 0, duration: 0.5 }).addLabel("s1");
  } else if (props.story === "app") {
    cursorClick(tl, cur.value.$el, root.value, q(".tr.target"));
    mark({ view: "app", ke: 0, fixed: false });
    tl.to({}, { duration: 0.4 }).addLabel("s1");
  } else {
    cursorClick(
      tl,
      cur.value.$el,
      root.value,
      q('[data-tab="Vulnerabilities"]'),
    );
    mark({ view: "vulns", ke: 1, fixed: false });
    tl.to({}, { duration: 0.4 }).addLabel("s1");
    tl.to({}, { duration: 0.6 });
    mark({ view: "vulns", ke: 0, fixed: true });
    tl.to({}, { duration: 0.4 }).addLabel("s2");
  }
  tl.eventCallback("onUpdate", () => {
    const m = [...marks].reverse().find((x) => tl.time() >= x.t - 0.001);
    view.value = m.s.view;
    ke.value = m.s.ke;
    fixed.value = m.s.fixed;
  });
  return tl;
});
</script>

<style scoped>
.mock {
  position: relative;
  height: 100%;
}

.view {
  font-size: 0.68rem;
}

h2 {
  margin: 0 0 0.3rem;
  font-family: "Poppins", sans-serif;
  font-size: 1.15rem;
  color: #0f172a;
}

h2 em {
  font-style: normal;
  font-size: 0.65rem;
  padding: 0.05rem 0.4rem;
  border-radius: 4px;
  background: #475569;
  color: #fff;
  vertical-align: middle;
}

h5 {
  margin: 0.45rem 0 0.25rem;
  font-size: 0.62rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #334155;
}

.cols {
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  gap: 1rem;
}

.tiles {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.8rem;
}

.tiles.three {
  grid-template-columns: repeat(3, 1fr);
}

.tile {
  display: flex;
  flex-direction: column;
  padding: 0.2rem 0.55rem;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
}

.tile b {
  font-size: 1rem;
  color: #0f172a;
}

.tile small {
  font-size: 0.6rem;
  color: #475569;
}

.tile.ok b {
  color: #15803d;
}

.tile.warn b {
  color: #b45309;
}

.tile.bad {
  border-color: #fca5a5;
  background: #fef2f2;
}

.tile.bad b {
  color: #dc2626;
}

.inv {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.8rem;
}

.box {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.3rem;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  border-bottom: 3px solid #16a34a;
}

.box small {
  color: #15803d;
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
  margin-top: 0.35rem;
}

.chips span {
  padding: 0.05rem 0.4rem;
  border-radius: 999px;
  border: 1px solid #cbd5e1;
  font-size: 0.6rem;
}

.act {
  margin: 0 0 0.3rem;
  color: #334155;
}

.mono {
  font-family: "JetBrains Mono", monospace;
}

.badge {
  margin-left: 0.3rem;
  padding: 0 0.35rem;
  border-radius: 4px;
  background: #dcfce7;
  color: #166534;
  text-transform: none;
  letter-spacing: 0;
}

.tabs {
  display: flex;
  gap: 0.7rem;
  margin: 0.1rem 0 0.3rem;
  border-bottom: 1px solid #e2e8f0;
  font-size: 0.6rem;
  color: #334155;
}

.tabs span {
  padding-bottom: 0.15rem;
  white-space: nowrap;
}

.tabs span.on {
  color: #1d4ed8;
  border-bottom: 2px solid #1d4ed8;
}

.area {
  width: 100%;
  height: 190px;
}

.gl {
  stroke: #e2e8f0;
}

.tk {
  font-size: 9px;
  fill: #64748b;
}

.legend {
  display: flex;
  gap: 1rem;
  margin-top: 0.3rem;
  color: #334155;
}

.legend i {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 2px;
  margin-right: 0.3rem;
}

.table .th,
.table .tr {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr;
  padding: 0.35rem 0.5rem;
  border-bottom: 1px solid #e2e8f0;
}

.table .th {
  font-weight: 700;
  color: #334155;
}

.green {
  color: #15803d;
}

.ke {
  padding: 0.35rem 0.6rem;
  border-radius: 8px;
  background: #f1f5f9;
  border: 1px solid #e2e8f0;
  font-weight: 700;
}

.ke.bad {
  background: #fee2e2;
  border-color: #fca5a5;
  color: #b91c1c;
}

.prio {
  display: flex;
  gap: 0.8rem;
  margin-top: 0.25rem;
  font-size: 0.62rem;
  color: #334155;
}

.image {
  padding: 0.4rem 0.6rem;
  border-radius: 10px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
}

.image p {
  margin: 0.1rem 0 0.4rem;
}

.fixed {
  color: #15803d;
  font-weight: 700;
}

.note {
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 0;
  font-size: 0.6rem;
  color: #64748b;
}
</style>
