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
              <div class="tile" :class="ke ? 'bad' : 'ok'">
                <b>{{ ke }}</b
                ><small>Known exploited</small>
              </div>
              <div class="tile ok"><b>0</b><small>Alerts firing</small></div>
              <div class="tile warn">
                <b>+4&#8239;%</b><small>Cost vs last month</small>
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
              <span>Cloud SQL 2</span><span>Buckets 1</span><span>Valkey 1</span
              ><span>Kafka Topics 3</span>
            </div>
          </div>
          <div>
            <h5>Latest activity</h5>
            <div v-for="a in ACTIVITY" :key="a.text" class="activity">
              <span class="i-carbon-cube" />
              <div>
                <p>{{ a.text }}</p>
                <small>{{ a.when }}</small>
              </div>
            </div>
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
          <span v-for="s in COST" :key="s.name"
            ><i :style="{ background: s.color }" />{{ s.name }}</span
          >
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
            :class="{ target: a === 'min-app' }"
          >
            <span class="mono">{{ a }}</span
            ><span>prod</span><span class="green">● Running</span>
          </div>
        </div>
      </section>

      <!-- App overview -->
      <section v-show="view === 'app'" class="view">
        <h2>min-app <em>prod</em></h2>
        <div class="tabs">
          <span
            v-for="t in TABS"
            :key="t"
            :class="{ on: t === 'Overview' }"
            :data-tab="t"
            >{{ t }}</span
          >
        </div>
        <div class="cols">
          <div>
            <h5>Application health</h5>
            <div class="tiles">
              <div class="tile ok"><b>0</b><small>Issues</small></div>
              <div class="tile" :class="ke ? 'bad' : 'ok'">
                <b>{{ ke }}</b
                ><small>Known exploited</small>
              </div>
              <div class="tile ok"><b>2/2</b><small>Instances</small></div>
              <div class="tile ok">
                <b>+2&#8239;%</b><small>Cost vs last month</small>
              </div>
            </div>
          </div>
          <div>
            <h5>Latest deployment <span class="badge">Success</span></h5>
            <p class="act">2 hours ago</p>
            <h5>Persistence</h5>
            <p class="act mono">min-app-db (Cloud SQL)</p>
            <p class="act mono">min-app-vedlegg (bucket)</p>
            <p class="act mono">min_app_stats (BigQuery)</p>
          </div>
        </div>
      </section>

      <!-- App vulnerabilities -->
      <section v-show="view === 'vulns'" class="view">
        <h2>min-app <em>prod</em></h2>
        <div class="tabs">
          <span
            v-for="t in TABS"
            :key="t"
            :class="{ on: t === 'Vulnerabilities' }"
            >{{ t }}</span
          >
        </div>
        <div class="cols">
          <div>
            <h5>Priority</h5>
            <div class="ke" :class="{ bad: ke }">{{ ke }} Known exploited</div>
            <div class="prio">
              <span>{{ ke }} High</span><span>0 Elevated</span
              ><span>2 Monitor</span>
            </div>
            <h5 v-if="!detail">CVSS severity</h5>
            <div v-if="!detail" class="tiles three">
              <div class="tile" :class="ke ? 'bad' : 'ok'">
                <b>{{ ke }}</b
                ><small>Critical</small>
              </div>
              <div class="tile ok"><b>0</b><small>High</small></div>
              <div class="tile ok"><b>2</b><small>Medium</small></div>
            </div>
            <div v-if="ke" class="finding" data-finding>
              <span class="kev">Known exploited</span> CVE-2026-XXXXX ·
              eksempel-lib
            </div>
            <div v-if="detail && ke" class="detail">
              <div>
                <small>Package</small><code>pkg:npm/eksempel-lib@1.4.2</code>
              </div>
              <div><small>Fix available</small><code>1.4.3</code></div>
              <div>
                <span class="pill hi">Priority: High</span
                ><span class="pill">Internet-facing</span>
              </div>
            </div>
          </div>
          <div class="image">
            <div v-if="scanning" class="scan">Scanning new image…</div>

            <h5>Image</h5>
            <small>Tag</small>
            <p class="mono">
              {{ ke ? "2026.10.14-a1b2c3" : "2026.10.21-d4e5f6" }}
            </p>
            <p v-if="!ke && fixed" class="fixed">✓ Vulnerability resolved</p>
          </div>
        </div>
      </section>

      <section v-show="view === 'deploys'" class="view">
        <h2>min-app <em>prod</em></h2>
        <div class="tabs">
          <span
            v-for="t in TABS"
            :key="t"
            :class="{ on: t === 'Deployments' }"
            :data-tab3="t"
            >{{ t }}</span
          >
        </div>
        <div class="table">
          <div class="th">
            <span>Image tag</span><span>State</span><span>When</span>
          </div>
          <div class="tr">
            <span class="mono">2026.10.21-d4e5f6</span>
            <span :class="deploy === 'success' ? 'green' : 'amber'">{{
              deploy === "success" ? "● Success" : "● Running"
            }}</span>
            <span>just now</span>
          </div>
          <div class="tr">
            <span class="mono">2026.10.14-a1b2c3</span
            ><span class="green">● Success</span><span>7 days ago</span>
          </div>
        </div>
      </section>

      <div v-if="story === 'vulns'" class="overlay pr-wrap">
        <small class="ann">Utenfor Console · GitHub</small>
        <PrCard
          compact
          title="Bump eksempel-lib from 1.4.2 to 1.4.3"
          :number="57"
        />
      </div>
      <div v-if="story === 'vulns'" class="overlay pipe">
        <small class="ann">Utenfor Console · GitHub Actions</small>
        <div class="steps">
          <span>Build</span><span>SBOM</span><span>Signering</span
          ><span>Deploy</span>
        </div>
      </div>
    </div>
    <template #overlay><Cursor ref="cur" /></template>
  </BrowserFrame>
</template>

<script setup>
import { computed, ref } from "vue";
import gsap from "gsap";
import BrowserFrame from "./BrowserFrame.vue";
import Cursor from "./Cursor.vue";
import PrCard from "./PrCard.vue";
import { cursorClick, useSteps } from "./motion.js";

// story "team": team overview -> Cost. story "app": Applications -> one app.
// story "tour": both in one walk (team -> Cost -> Applications -> app).
// story "vulns": finding -> dependency PR -> build and deploy -> rescan and resolved.
const props = defineProps({
  // Slide click where this component starts (when it shares a slide).
  offset: { type: Number, default: 0 },
  story: { type: String, required: true },
});

const ACTIVITY = [
  { text: "min-app updated in prod", when: "12 minutes ago" },
  { text: "worker updated in dev", when: "1 hour ago" },
  { text: "frontend updated in prod", when: "yesterday" },
];
const APPS = ["min-app", "frontend", "worker"];
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

const START = { team: "overview", app: "apps", vulns: "app", tour: "overview" };
const view = ref(START[props.story]);
const ke = ref(1);
const fixed = ref(false);
const detail = ref(false);
const deploy = ref("none");
const scanning = ref(false);

const frame = computed(() => {
  const app = ["team-eksempel", "Applications", "min-app"];
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
      url: "console.nais.io/team/team-eksempel/prod/app/min-app",
      active: "Applications",
      crumbs: app,
    },
    deploys: {
      url: "console.nais.io/team/team-eksempel/prod/app/min-app/deployments",
      active: "Applications",
      crumbs: [...app, "Deployments"],
    },
    vulns: {
      url: "console.nais.io/team/team-eksempel/prod/app/min-app/vulnerabilities",
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
      (n) => n.textContent.trim() === label,
    );
  const base = {
    view: START[props.story],
    ke: 1,
    fixed: false,
    detail: false,
    deploy: "none",
    scanning: false,
  };
  const marks = [{ t: 0, s: base }];
  const mark = (s) =>
    marks.push({ t: tl.duration(), s: { ...marks.at(-1).s, ...s } });
  tl.from(root.value, { autoAlpha: 0, duration: 0.4 }).addLabel("s0");
  if (props.story === "team") {
    cursorClick(tl, cur.value.$el, root.value.closest(".body"), () =>
      navItem("Cost"),
    );
    mark({ view: "cost" });
    tl.from(q(".area"), { autoAlpha: 0, duration: 0.5 }).addLabel("s1");
  } else if (props.story === "tour") {
    // Team view -> cost -> Applications -> one app, in one continuous walk.
    cursorClick(tl, cur.value.$el, root.value.closest(".body"), () =>
      navItem("Cost"),
    );
    mark({ view: "cost" });
    tl.from(q(".area"), { autoAlpha: 0, duration: 0.5 }).addLabel("s1");
    cursorClick(tl, cur.value.$el, root.value.closest(".body"), () =>
      navItem("Applications"),
    );
    mark({ view: "apps" });
    tl.to({}, { duration: 0.4 }).addLabel("s2");
    cursorClick(tl, cur.value.$el, root.value, () => q(".tr.target"));
    mark({ view: "app" });
    tl.to({}, { duration: 0.4 }).addLabel("s3");
  } else if (props.story === "app") {
    cursorClick(tl, cur.value.$el, root.value, () => q(".tr.target"));
    mark({ view: "app" });
    tl.to({}, { duration: 0.4 }).addLabel("s1");
  } else {
    // 1: open the finding. 2: dependency PR. 3: build and deploy. 4: rescan.
    const pr = q(".pr-wrap");
    const pipe = q(".pipe");
    gsap.set([pr, pipe], { autoAlpha: 0, x: 40 });
    gsap.set(pr.querySelector(".deployed"), { display: "none" });
    cursorClick(tl, cur.value.$el, root.value, () =>
      q('[data-tab="Vulnerabilities"]'),
    );
    mark({ view: "vulns" });
    tl.to({}, { duration: 0.3 });
    cursorClick(tl, cur.value.$el, root.value, () => q(".finding") || q(".ke"));
    mark({ detail: true });
    tl.to({}, { duration: 0.3 }).addLabel("s1");
    tl.to(pr, { autoAlpha: 1, x: 0 })
      .to(pr.querySelectorAll(".dotc"), {
        backgroundColor: "#3fb950",
        color: "#34d399",
        stagger: 0.3,
        duration: 0.3,
      })
      .set(pr.querySelector(".state.open"), { display: "none" })
      .set(pr.querySelector(".state.merged"), { display: "inline" })
      .addLabel("s2");
    tl.to(pr, { autoAlpha: 0, x: 40, duration: 0.3 }).to(
      pipe,
      { autoAlpha: 1, x: 0 },
      "<",
    );
    tl.to(pipe.querySelectorAll(".steps span"), {
      backgroundColor: "#ff3377",
      color: "#fff",
      stagger: 0.25,
      duration: 0.25,
    });
    mark({ view: "deploys", deploy: "running", detail: false });
    tl.to({}, { duration: 0.8 });
    mark({ deploy: "success" });
    tl.to(pipe, { autoAlpha: 0, x: 40, duration: 0.3 }).addLabel("s3");
    cursorClick(tl, cur.value.$el, root.value, () =>
      q('[data-tab3="Vulnerabilities"]'),
    );
    mark({ view: "vulns", scanning: true });
    tl.to({}, { duration: 1 });
    mark({ scanning: false, ke: 0, fixed: true });
    tl.to({}, { duration: 0.4 }).addLabel("s4");
  }
  tl.eventCallback("onUpdate", () => {
    const m = [...marks].reverse().find((x) => tl.time() >= x.t - 0.001);
    view.value = m.s.view;
    ke.value = m.s.ke;
    fixed.value = m.s.fixed;
    detail.value = m.s.detail;
    deploy.value = m.s.deploy;
    scanning.value = m.s.scanning;
  });
  return tl;
}, props.offset);
</script>

<style scoped>
.mock {
  position: relative;
  height: 100%;
}

.view {
  font-size: 0.74rem;
}

h2 {
  margin: 0 0 0.3rem;
  font-family: "Poppins", sans-serif;
  font-size: 1.3rem;
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
  font-size: 0.66rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #334155;
}

.cols {
  display: grid;
  grid-template-columns: minmax(0, 1.6fr) minmax(0, 1fr);
  gap: 1rem;
}

.tiles {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
}

.tiles.three {
  grid-template-columns: repeat(3, 1fr);
}

.tile {
  display: flex;
  flex-direction: column;
  padding: 0.28rem 0.6rem;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
}

.tile b {
  font-size: 1.05rem;
  color: #0f172a;
}

.tile small {
  font-size: 0.66rem;
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
  gap: 0.35rem;
  margin-top: 0.45rem;
}

.chips span {
  padding: 0.05rem 0.4rem;
  border-radius: 999px;
  border: 1px solid #cbd5e1;
  font-size: 0.66rem;
}

.activity {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.6rem;
}

.activity span {
  flex: none;
  font-size: 1rem;
  color: #1d4ed8;
}

.activity p {
  margin: 0;
}

.activity small {
  color: #64748b;
  font-size: 0.64rem;
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
  height: 210px;
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
  gap: 1rem;
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
  overflow-wrap: anywhere;
  color: #15803d;
  font-weight: 700;
}

.finding {
  margin-top: 0.45rem;
  padding: 0.3rem 0.5rem;
  border-radius: 8px;
  border: 1px solid #fca5a5;
  background: #fef2f2;
  font-family: "JetBrains Mono", monospace;
  font-size: 0.64rem;
}

.kev {
  font-family: "Inter", sans-serif;
  font-weight: 700;
  color: #b91c1c;
}

.detail {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem 0.8rem;
  margin-top: 0.3rem;
  padding: 0.3rem 0.5rem;
  border-radius: 8px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  font-size: 0.64rem;
}

.detail small {
  display: block;
  color: #64748b;
}

.pill {
  display: inline-block;
  margin-right: 0.3rem;
  padding: 0 0.4rem;
  border-radius: 999px;
  background: #e2e8f0;
}

.pill.hi {
  background: #fde68a;
}

.amber {
  color: #b45309;
}

.scan {
  margin-bottom: 0.3rem;
  padding: 0.15rem 0.4rem;
  border-radius: 6px;
  background: linear-gradient(90deg, #e2e8f0, #f8fafc, #e2e8f0);
  font-size: 0.64rem;
}

.overlay {
  position: absolute;
  right: 0.4rem;
  bottom: 0.4rem;
  z-index: 5;
  width: 20rem;
  padding: 0.5rem 0.7rem;
  border-radius: 12px;
  border: 2px dashed #ff3377;
  background: #0f172a;
  color: #e2e8f0;
  font-size: 0.72rem;
  box-shadow: 0 10px 30px rgb(0 0 0 / 0.35);
}

.ann {
  display: block;
  margin-bottom: 0.25rem;
  font-size: 0.62rem;
  color: #fca5c0;
}

.checks {
  display: flex;
  gap: 0.8rem;
  margin-top: 0.3rem;
  color: #fbbf24;
}

.merged {
  display: inline-block;
  margin-top: 0.3rem;
  padding: 0 0.5rem;
  border-radius: 999px;
  background: #7c3aed;
  color: #fff;
  font-weight: 700;
}

.steps {
  display: flex;
  gap: 0.3rem;
}

.steps span {
  padding: 0.1rem 0.45rem;
  border-radius: 6px;
  background: #1e293b;
}

.note {
  position: absolute;
  right: 0;
  top: 0;
  margin: 0;
  font-size: 0.6rem;
  color: #64748b;
}
</style>
