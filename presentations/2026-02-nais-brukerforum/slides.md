---
theme: default
title: nais Brukerforum — Februar 2026
titleTemplate: '%s'
info: |
  ## nais Brukerforum
  Februar 2026
author: nais
keywords: nais, platform, kubernetes, brukerforum
favicon: /logos/nais-v2-rosa.svg
htmlAttrs:
  lang: 'no'
class: text-center
drawings:
  persist: false
transition: slide-left
mdc: true
hideInToc: true
layout: cover
routerMode: hash
fonts:
  sans: 'Inter'
  serif: 'Poppins'
  mono: 'JetBrains Mono'
---

<!-- Slide 1: Cover -->

::logo::
<div class="flex justify-center">
  <img src="/logos/nais-v2-rosa.svg" alt="nais" class="h-40" />
</div>

::default::
<h1 class="text-5xl font-black mt-4">Brukerforum</h1>
<p class="text-xl mt-2" style="color: var(--nais-text-secondary)">Februar 2026</p>

---
layout: default
---

<!-- Slide 2: Velkommen -->

::header::
<h1 class="text-3xl font-bold">Velkommen!</h1>
<p class="subtitle">Årets første Nais brukerforum</p>

::default::
<div class="flex flex-col items-center mt-6 gap-6">
  <p class="text-lg text-center" style="max-width: 700px; color: var(--nais-text-secondary);">
    En felles møteplass for alle organisasjoner som bruker Nais-plattformen.
  </p>
  <div class="flex items-center gap-10 mt-4">
    <div class="nais-card flex items-center gap-4 px-8 py-5">
      <img src="/logos/nais-v2-ssb.svg" alt="SSB" class="h-14" />
      <span class="font-semibold text-lg">SSB</span>
    </div>
    <div class="nais-card flex items-center gap-4 px-8 py-5">
      <img src="/logos/nais-v2-ldir.svg" alt="Landbruksdirektoratet" class="h-14" />
      <span class="font-semibold text-lg">Ldir</span>
    </div>
    <div class="nais-card flex items-center gap-4 px-8 py-5">
      <img src="/logos/nais-v2-atil.svg" alt="Arbeidstilsynet" class="h-14" />
      <span class="font-semibold text-lg">Atil</span>
    </div>
  </div>
</div>

---
layout: default
---

<!-- Slide 3: Agenda -->

::header::
<h1 class="text-3xl font-bold">Agenda</h1>
<div class="gradient-bar"></div>

::default::
<div class="flex flex-col items-center mt-6">
  <div class="flex items-center justify-center" style="width: 880px;">
    <div style="width: 240px; display: flex; justify-content: center;">
      <div class="section-number" style="width: 3.5rem; height: 3.5rem; font-size: 1.5rem;">1</div>
    </div>
    <div class="flex items-center" style="width: 80px;">
      <div style="flex: 1; height: 3px; background: linear-gradient(to right, var(--nais-accent), #3b82f6); border-radius: 2px;"></div>
      <div class="i-carbon-chevron-right text-lg" style="color: #3b82f6; margin-left: -4px;"></div>
    </div>
    <div style="width: 240px; display: flex; justify-content: center;">
      <div class="section-number" style="width: 3.5rem; height: 3.5rem; font-size: 1.5rem; background: #3b82f6;">2</div>
    </div>
    <div class="flex items-center" style="width: 80px;">
      <div style="flex: 1; height: 3px; background: linear-gradient(to right, #3b82f6, #10b981); border-radius: 2px;"></div>
      <div class="i-carbon-chevron-right text-lg" style="color: #10b981; margin-left: -4px;"></div>
    </div>
    <div style="width: 240px; display: flex; justify-content: center;">
      <div class="section-number" style="width: 3.5rem; height: 3.5rem; font-size: 1.5rem; background: #10b981;">3</div>
    </div>
  </div>
  <div class="flex justify-center mt-5" style="width: 880px;">
    <div class="flex flex-col items-center text-center" style="width: 240px;">
      <div class="mb-2" style="width: 3px; height: 20px; background: var(--nais-accent); border-radius: 2px;"></div>
      <h3 class="text-lg font-bold">Rundt bordet</h3>
      <p class="text-xs mt-1" style="color: var(--nais-text-secondary);">Hver organisasjon deler status fra sin side</p>
      <span class="chip accent mt-3">Status</span>
    </div>
    <div style="width: 80px;"></div>
    <div class="flex flex-col items-center text-center" style="width: 240px;">
      <div class="mb-2" style="width: 3px; height: 20px; background: #3b82f6; border-radius: 2px;"></div>
      <h3 class="text-lg font-bold">Foredrag</h3>
      <p class="text-xs mt-1" style="color: var(--nais-text-secondary);">Nyheter fra Nais-teamet + demo</p>
      <span class="chip blue mt-3">Presentasjon</span>
    </div>
    <div style="width: 80px;"></div>
    <div class="flex flex-col items-center text-center" style="width: 240px;">
      <div class="mb-2" style="width: 3px; height: 20px; background: #10b981; border-radius: 2px;"></div>
      <h3 class="text-lg font-bold">Diskusjon</h3>
      <p class="text-xs mt-1" style="color: var(--nais-text-secondary);">Spørsmål og åpen diskusjon i plenum</p>
      <span class="chip green mt-3">Plenum</span>
    </div>
  </div>
</div>

---
layout: default
---

<!-- Slide 4: Runde rundt bordet -->

::header::
<h1 class="text-3xl font-bold">Runde rundt bordet</h1>
<div class="gradient-bar"></div>

::default::
<div class="flex justify-center mt-4">
  <div class="grid grid-cols-3 gap-5" style="max-width: 900px; width: 100%;">
    <div class="nais-card flex flex-col items-center text-center px-5 py-6">
      <div class="icon-badge accent">
        <span class="i-carbon-roadmap text-xl"></span>
      </div>
      <div style="height: 3.5rem; display: flex; align-items: end; margin-top: 0.75rem;">
        <h3 class="text-base font-bold">Onboarding & migrering</h3>
      </div>
      <p class="text-xs mt-3" style="color: var(--nais-text-secondary);">Hva er status for onboarding av teams og migrering av applikasjoner?</p>
    </div>
    <div class="nais-card flex flex-col items-center text-center px-5 py-6">
      <div class="icon-badge amber">
        <span class="i-carbon-warning-hex text-xl"></span>
      </div>
      <div style="height: 3.5rem; display: flex; align-items: end; margin-top: 0.75rem;">
        <h3 class="text-base font-bold">Utfordringer & erfaringer</h3>
      </div>
      <p class="text-xs mt-3" style="color: var(--nais-text-secondary);">Er det noen utfordringer vi bør være klar over og kan bistå med?</p>
    </div>
    <div class="nais-card flex flex-col items-center text-center px-5 py-6">
      <div class="icon-badge purple">
        <span class="i-carbon-idea text-xl"></span>
      </div>
      <div style="height: 3.5rem; display: flex; align-items: end; margin-top: 0.75rem;">
        <h3 class="text-base font-bold">Ønsker for foredrag</h3>
      </div>
      <p class="text-xs mt-3" style="color: var(--nais-text-secondary);">Hvilke temaer kan det være ønskelig å ta opp som foredrag eller diskusjoner?</p>
    </div>
  </div>
</div>
<div class="flex justify-center mt-5">
  <div class="callout text-sm" style="max-width: 700px;">
    Vi håper hver organisasjon kan dele litt muntlig status — dette er en uformell runde.
  </div>
</div>

---
layout: default
---

<!-- Slide 5: Siste 6 måneder – Oversikt -->

::header::
<h1 class="text-3xl font-bold">Siste 6 måneder</h1>
<div class="gradient-bar"></div>

::default::
<div class="flex justify-center mt-2">
  <div class="grid grid-cols-3 gap-4" style="max-width: 920px; width: 100%;">
    <div class="feature-card flex items-start gap-3" style="min-height: 5rem;">
      <div class="icon-badge accent" style="width: 2.25rem; height: 2.25rem; flex-shrink: 0;">
        <span class="i-carbon-data-base text-lg"></span>
      </div>
      <div>
        <h3 class="text-sm font-bold" style="min-height: 1.25rem;">Postgres Operator</h3>
        <p class="text-xs mt-0.5" style="color: var(--nais-text-secondary);">3 faser levert — Dawn, Day & Rise</p>
      </div>
    </div>
    <div class="feature-card blue flex items-start gap-3" style="min-height: 5rem;">
      <div class="icon-badge blue" style="width: 2.25rem; height: 2.25rem; flex-shrink: 0;">
        <span class="i-carbon-container-services text-lg"></span>
      </div>
      <div>
        <h3 class="text-sm font-bold" style="min-height: 1.25rem;">Valkey & OpenSearch</h3>
        <p class="text-xs mt-0.5" style="color: var(--nais-text-secondary);">Nå managed via Nais API</p>
      </div>
    </div>
    <div class="feature-card green flex items-start gap-3" style="min-height: 5rem;">
      <div class="icon-badge green" style="width: 2.25rem; height: 2.25rem; flex-shrink: 0;">
        <span class="i-carbon-locked text-lg"></span>
      </div>
      <div>
        <h3 class="text-sm font-bold" style="min-height: 1.25rem;">Zitadel v4</h3>
        <p class="text-xs mt-0.5" style="color: var(--nais-text-secondary);">Oppgradert IAM-løsning</p>
      </div>
    </div>
    <div class="feature-card purple flex items-start gap-3" style="min-height: 5rem;">
      <div class="icon-badge purple" style="width: 2.25rem; height: 2.25rem; flex-shrink: 0;">
        <span class="i-carbon-kubernetes text-lg"></span>
      </div>
      <div>
        <h3 class="text-sm font-bold" style="min-height: 1.25rem;">Cluster-oppgradering</h3>
        <p class="text-xs mt-0.5" style="color: var(--nais-text-secondary);">Mer stabil automatisk oppgradering</p>
      </div>
    </div>
    <div class="feature-card amber flex items-start gap-3" style="min-height: 5rem;">
      <div class="icon-badge amber" style="width: 2.25rem; height: 2.25rem; flex-shrink: 0;">
        <span class="i-carbon-network-3 text-lg"></span>
      </div>
      <div>
        <h3 class="text-sm font-bold" style="min-height: 1.25rem;">FQDN-policy</h3>
        <p class="text-xs mt-0.5" style="color: var(--nais-text-secondary);">Bedre håndtering av multi-IP hosts</p>
      </div>
    </div>
    <div class="feature-card flex items-start gap-3" style="min-height: 5rem;">
      <div class="icon-badge accent" style="width: 2.25rem; height: 2.25rem; flex-shrink: 0;">
        <span class="i-carbon-clean text-lg"></span>
      </div>
      <div>
        <h3 class="text-sm font-bold" style="min-height: 1.25rem;">Naisjob-opprydding</h3>
        <p class="text-xs mt-0.5" style="color: var(--nais-text-secondary);">Automatisk cleanup av ad-hoc jobs</p>
      </div>
    </div>
  </div>
</div>

---
layout: default
---

<!-- Slide 6: Postgres Operator -->

::header::
<h1 class="text-3xl font-bold">Postgres Operator</h1>
<p class="subtitle">Kostnadseffektive, robuste databaser</p>

::default::
<div class="flex flex-col items-center mt-4 gap-6">
  <div class="flex items-center justify-center" style="width: 880px;">
    <div style="width: 240px; display: flex; justify-content: center;">
      <div class="section-number" style="width: 3rem; height: 3rem; font-size: 1.1rem; background: #10b981;">
        <span class="i-carbon-checkmark text-sm"></span>
      </div>
    </div>
    <div class="flex items-center" style="width: 60px;">
      <div style="flex: 1; height: 3px; background: linear-gradient(to right, #10b981, #10b981); border-radius: 2px;"></div>
      <div class="i-carbon-chevron-right text-lg" style="color: #10b981; margin-left: -4px;"></div>
    </div>
    <div style="width: 240px; display: flex; justify-content: center;">
      <div class="section-number" style="width: 3rem; height: 3rem; font-size: 1.1rem; background: #10b981;">
        <span class="i-carbon-checkmark text-sm"></span>
      </div>
    </div>
    <div class="flex items-center" style="width: 60px;">
      <div style="flex: 1; height: 3px; background: linear-gradient(to right, #10b981, #10b981); border-radius: 2px;"></div>
      <div class="i-carbon-chevron-right text-lg" style="color: #10b981; margin-left: -4px;"></div>
    </div>
    <div style="width: 240px; display: flex; justify-content: center;">
      <div class="section-number" style="width: 3rem; height: 3rem; font-size: 1.1rem; background: #10b981;">
        <span class="i-carbon-checkmark text-sm"></span>
      </div>
    </div>
  </div>
  <div class="flex justify-center" style="width: 880px; margin-top: -0.5rem;">
    <div class="flex flex-col items-center text-center" style="width: 240px;">
      <h3 class="text-base font-bold">Dawn</h3>
      <p class="text-xs mt-1" style="color: var(--nais-text-secondary);">Lansering av Zalando-operatoren med logging, Grafana-dashboard og Console-integrasjon</p>
      <span class="chip green mt-2">Sep 2025</span>
    </div>
    <div style="width: 60px;"></div>
    <div class="flex flex-col items-center text-center" style="width: 240px;">
      <h3 class="text-base font-bold">Day</h3>
      <p class="text-xs mt-1" style="color: var(--nais-text-secondary);">Personlig databasetilgang via nais cli med OAuth2—uten å gå via applikasjonens shell</p>
      <span class="chip green mt-2">Nov 2025</span>
    </div>
    <div style="width: 60px;"></div>
    <div class="flex flex-col items-center text-center" style="width: 240px;">
      <h3 class="text-base font-bold">Rise</h3>
      <p class="text-xs mt-1" style="color: var(--nais-text-secondary);">Egen Postgres-CRD med uavhengig livssyklus fra applikasjonen og dedikert operator</p>
      <span class="chip green mt-2">Des 2025</span>
    </div>
  </div>
  <div class="callout text-sm" style="max-width: 700px;">
    Basert på Zalando Postgres Operator — erstatter Cloud SQL for nye databaser
  </div>
</div>

---
layout: default
---

<!-- Slide 7: Database Audit Logs -->

::header::
<h1 class="text-3xl font-bold">Database Audit Logs</h1>
<p class="subtitle">Sporbarhet og etterlevelse via pgaudit</p>

::default::
<div class="flex justify-center mt-2">
  <div class="flex flex-col items-center gap-5" style="max-width: 900px; width: 100%;">
    <div class="flex items-center gap-4 w-full">
      <div class="nais-card flex items-center gap-4 px-5 py-4 flex-1" style="border-left: 4px solid var(--nais-accent);">
        <div class="icon-badge accent" style="width: 2.5rem; height: 2.5rem; flex-shrink: 0;">
          <span class="i-carbon-data-base text-lg"></span>
        </div>
        <div>
          <h3 class="text-sm font-bold">Team-prosjekt</h3>
          <p class="text-xs" style="color: var(--nais-text-secondary);">pgaudit-logger lagres i teamets GCP-prosjekt med 30 dagers default-retensjon</p>
        </div>
      </div>
      <div class="i-carbon-arrow-right text-2xl" style="color: var(--nais-accent); flex-shrink: 0;"></div>
      <div class="nais-card flex items-center gap-4 px-5 py-4 flex-1" style="border-left: 4px solid #3b82f6;">
        <div class="icon-badge blue" style="width: 2.5rem; height: 2.5rem; flex-shrink: 0;">
          <span class="i-carbon-cloud-logging text-lg"></span>
        </div>
        <div>
          <h3 class="text-sm font-bold">Nais Audit Logs</h3>
          <p class="text-xs" style="color: var(--nais-text-secondary);">Overføres til sentralt audit-prosjekt — én bucket per team med 365 dagers retensjon</p>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-3 gap-4 w-full">
      <div class="nais-card flex flex-col items-center text-center gap-2 px-4 py-4">
        <div class="icon-badge green" style="width: 2.25rem; height: 2.25rem;">
          <span class="i-carbon-settings-adjust text-lg"></span>
        </div>
        <h3 class="text-sm font-bold">1. Aktiver database-flagg</h3>
        <p class="text-xs" style="color: var(--nais-text-secondary);">Sett <code>cloudsql.enable_pgaudit</code> og <code>pgaudit.log</code> i nais-spec</p>
      </div>
      <div class="nais-card flex flex-col items-center text-center gap-2 px-4 py-4">
        <div class="icon-badge purple" style="width: 2.25rem; height: 2.25rem;">
          <span class="i-carbon-terminal text-lg"></span>
        </div>
        <h3 class="text-sm font-bold">2. Kjør nais CLI</h3>
        <p class="text-xs" style="color: var(--nais-text-secondary);"><code>nais postgres enable-audit</code> oppretter pgaudit-extension og konfigurerer databasen</p>
      </div>
      <div class="nais-card flex flex-col items-center text-center gap-2 px-4 py-4">
        <div class="icon-badge amber" style="width: 2.25rem; height: 2.25rem;">
          <span class="i-carbon-locked text-lg"></span>
        </div>
        <h3 class="text-sm font-bold">Tilgang til logger</h3>
        <p class="text-xs" style="color: var(--nais-text-secondary);">Hvert team har tilgang til sine audit-logger — retensjon kan tilpasses</p>
      </div>
    </div>
    <div class="callout text-sm" style="max-width: 700px;">
      Tilgjengelig for Cloud SQL i dag — støtte for Zalando Postgres er under utvikling
    </div>
  </div>
</div>

---
layout: default
---

<!-- Slide 8: Console & Managed Services -->

::header::
<h1 class="text-3xl font-bold">Console & Managed Services</h1>
<p class="subtitle">Sårbarhetshåndtering og nye managed services</p>

::default::
<div class="flex justify-center mt-2">
  <div class="grid grid-cols-2 gap-5" style="max-width: 880px; width: 100%;">
    <div class="flex flex-col">
      <div class="feature-card purple mb-4" style="min-height: 180px;">
        <h3 class="text-base font-bold mb-3">Vulnerability Management</h3>
        <ul class="text-sm space-y-2" style="color: var(--nais-text-secondary); list-style: none; padding: 0;">
          <li class="flex items-start gap-2"><span class="i-carbon-checkmark-filled text-sm mt-0.5" style="color: var(--nais-success);"></span> CVSS-score integrasjon</li>
          <li class="flex items-start gap-2"><span class="i-carbon-checkmark-filled text-sm mt-0.5" style="color: var(--nais-success);"></span> Mean Time To Fix historikk</li>
          <li class="flex items-start gap-2"><span class="i-carbon-checkmark-filled text-sm mt-0.5" style="color: var(--nais-success);"></span> Filtrering nais-system namespaces</li>
        </ul>
      </div>
      <div style="border-radius: 8px; overflow: hidden; border: 1px solid var(--nais-border);">
        <img src="/images/26-02-nais-console-vulnerabilities.png" alt="Vulnerability dashboard" style="width: 100%; display: block;" />
      </div>
    </div>
    <div class="flex flex-col">
      <div class="feature-card green mb-4" style="min-height: 180px;">
        <h3 class="text-base font-bold mb-3">Valkey, OpenSearch & Kafka</h3>
        <ul class="text-sm space-y-2" style="color: var(--nais-text-secondary); list-style: none; padding: 0;">
          <li class="flex items-start gap-2"><span class="i-carbon-checkmark-filled text-sm mt-0.5" style="color: var(--nais-success);"></span> Valkey: livssyklus, metrics, keyspace</li>
          <li class="flex items-start gap-2"><span class="i-carbon-checkmark-filled text-sm mt-0.5" style="color: var(--nais-success);"></span> OpenSearch v3 via Nais API</li>
          <li class="flex items-start gap-2"><span class="i-carbon-checkmark-filled text-sm mt-0.5" style="color: var(--nais-success);"></span> Kafka Native ACL</li>
        </ul>
      </div>
      <div style="border-radius: 8px; overflow: hidden; border: 1px solid var(--nais-border);">
        <img src="/images/26-02-nais-console-opensearch.png" alt="OpenSearch i Console" style="width: 100%; display: block;" />
      </div>
    </div>
  </div>
</div>

---
layout: default
---

<!-- Slide 9: De lange linjene – Denne perioden -->

::header::
<h1 class="text-3xl font-bold">De lange linjene mot sommeren</h1>
<p class="subtitle">Denne perioden</p>

::default::
<div class="flex justify-center mt-2">
  <div class="flex flex-col items-center gap-5" style="max-width: 920px; width: 100%;">
    <div class="flex gap-3 w-full">
      <div class="chip accent"><span class="i-carbon-unlocked text-xs"></span> Redusere leverandørbindinger</div>
      <div class="chip blue"><span class="i-carbon-user-flow text-xs"></span> Forenkle brukerflyt</div>
      <div class="chip green"><span class="i-carbon-piggy-bank text-xs"></span> Redusere kostnader</div>
      <div class="chip purple"><span class="i-carbon-gui text-xs"></span> Enhetlig brukeropplevelse</div>
    </div>
    <div class="grid grid-cols-3 gap-5 w-full">
      <div class="nais-card flex flex-col gap-3 px-5 py-5" style="border-top: 4px solid var(--nais-accent);">
        <h3 class="text-base font-bold">CloudSQL → Nais Postgres</h3>
        <ul class="text-xs space-y-1.5" style="color: var(--nais-text-secondary); list-style: none; padding: 0;">
          <li class="flex items-start gap-2"><span class="i-carbon-checkmark-filled text-xs mt-0.5" style="color: var(--nais-success);"></span> Redusere avhengighet til Google</li>
          <li class="flex items-start gap-2"><span class="i-carbon-checkmark-filled text-xs mt-0.5" style="color: var(--nais-success);"></span> Øke portabilitet</li>
          <li class="flex items-start gap-2"><span class="i-carbon-checkmark-filled text-xs mt-0.5" style="color: var(--nais-success);"></span> Redusere kostnader</li>
        </ul>
      </div>
      <div class="nais-card flex flex-col gap-3 px-5 py-5" style="border-top: 4px solid #3b82f6;">
        <h3 class="text-base font-bold">Prometheus → Mimir</h3>
        <ul class="text-xs space-y-1.5" style="color: var(--nais-text-secondary); list-style: none; padding: 0;">
          <li class="flex items-start gap-2"><span class="i-carbon-checkmark-filled text-xs mt-0.5" style="color: var(--nais-success);"></span> Redusere kostnader</li>
          <li class="flex items-start gap-2"><span class="i-carbon-checkmark-filled text-xs mt-0.5" style="color: var(--nais-success);"></span> Forenkle oppsett</li>
        </ul>
      </div>
      <div class="nais-card flex flex-col gap-3 px-5 py-5" style="border-top: 4px solid #10b981;">
        <h3 class="text-base font-bold">Ressursstyring i API</h3>
        <ul class="text-xs space-y-1.5" style="color: var(--nais-text-secondary); list-style: none; padding: 0;">
          <li class="flex items-start gap-2"><span class="i-carbon-checkmark-filled text-xs mt-0.5" style="color: var(--nais-success);"></span> Ressursstyring gjennom Nais API</li>
          <li class="flex items-start gap-2"><span class="i-carbon-checkmark-filled text-xs mt-0.5" style="color: var(--nais-success);"></span> Redusere kostnader</li>
        </ul>
      </div>
    </div>
  </div>
</div>

---
layout: default
---

<!-- Slide 10: De lange linjene – Neste periode -->

::header::
<h1 class="text-3xl font-bold">De lange linjene mot sommeren</h1>
<p class="subtitle">Neste periode?</p>

::default::
<div class="flex justify-center mt-2">
  <div class="flex flex-col items-center gap-5" style="max-width: 920px; width: 100%;">
    <div class="grid grid-cols-3 gap-5 w-full">
      <div class="nais-card flex flex-col gap-3 px-5 py-5" style="border-top: 4px solid var(--nais-accent);">
        <h3 class="text-base font-bold">Google IAM → Zitadel</h3>
        <ul class="text-xs space-y-1.5" style="color: var(--nais-text-secondary); list-style: none; padding: 0;">
          <li class="flex items-start gap-2"><span class="i-carbon-checkmark-filled text-xs mt-0.5" style="color: var(--nais-success);"></span> Redusere avhengighet til Google</li>
          <li class="flex items-start gap-2"><span class="i-carbon-checkmark-filled text-xs mt-0.5" style="color: var(--nais-success);"></span> Øke portabilitet</li>
        </ul>
      </div>
      <div class="nais-card flex flex-col gap-3 px-5 py-5" style="border-top: 4px solid #3b82f6;">
        <h3 class="text-base font-bold">Entra ID → TokenX M2M</h3>
        <ul class="text-xs space-y-1.5" style="color: var(--nais-text-secondary); list-style: none; padding: 0;">
          <li class="flex items-start gap-2"><span class="i-carbon-checkmark-filled text-xs mt-0.5" style="color: var(--nais-success);"></span> Redusere avhengighet til Microsoft</li>
          <li class="flex items-start gap-2"><span class="i-carbon-checkmark-filled text-xs mt-0.5" style="color: var(--nais-success);"></span> Øke portabilitet</li>
        </ul>
      </div>
      <div class="nais-card flex flex-col gap-3 px-5 py-5" style="border-top: 4px solid #10b981;">
        <h3 class="text-base font-bold">Deploy Actions → Nais CLI</h3>
        <ul class="text-xs space-y-1.5" style="color: var(--nais-text-secondary); list-style: none; padding: 0;">
          <li class="flex items-start gap-2"><span class="i-carbon-checkmark-filled text-xs mt-0.5" style="color: var(--nais-success);"></span> Forenkle brukerflyt</li>
          <li class="flex items-start gap-2"><span class="i-carbon-checkmark-filled text-xs mt-0.5" style="color: var(--nais-success);"></span> Redusere kompleksitet</li>
        </ul>
      </div>
    </div>
    <div class="flex gap-4 w-full">
      <div class="nais-card flex items-center gap-3 px-5 py-4 flex-1" style="border-left: 4px solid #8b5cf6;">
        <div class="icon-badge purple" style="width: 2.25rem; height: 2.25rem;">
          <span class="i-carbon-warning-hex text-lg"></span>
        </div>
        <div>
          <h3 class="text-sm font-bold">Beredskapsøvelse</h3>
          <p class="text-xs" style="color: var(--nais-text-secondary);">Kontinuitetsplan for Nais-plattformen</p>
        </div>
      </div>
      <div class="nais-card flex items-center gap-3 px-5 py-4 flex-1" style="border-left: 4px solid #f59e0b;">
        <div class="icon-badge amber" style="width: 2.25rem; height: 2.25rem;">
          <span class="i-carbon-notification text-lg"></span>
        </div>
        <div>
          <h3 class="text-sm font-bold">Nais Alerts?</h3>
          <p class="text-xs" style="color: var(--nais-text-secondary);">Under vurdering</p>
        </div>
      </div>
    </div>
  </div>
</div>

---
layout: default
---

<!-- Slide 11: Elevering og Nais CLI -->

::header::
<h1 class="text-3xl font-bold">Elevering og Nais CLI</h1>
<div class="gradient-bar"></div>

::default::
<div class="flex justify-center mt-2">
  <div class="grid grid-cols-2 gap-6" style="max-width: 880px; width: 100%;">
    <div class="flex flex-col gap-4">
      <div class="feature-card flex items-start gap-4">
        <div class="icon-badge accent">
          <span class="i-carbon-upgrade text-xl"></span>
        </div>
        <div>
          <h3 class="text-base font-bold">Elevering</h3>
          <p class="text-sm mt-1" style="color: var(--nais-text-secondary);">Sikker tilgangseskalering for produksjonsmiljøer</p>
        </div>
      </div>
      <div class="feature-card blue flex items-start gap-4">
        <div class="icon-badge blue">
          <span class="i-carbon-terminal text-xl"></span>
        </div>
        <div>
          <h3 class="text-base font-bold">Nais CLI</h3>
          <p class="text-sm mt-1" style="color: var(--nais-text-secondary);">Kommandolinjeverktøy for plattforminteraksjon</p>
        </div>
      </div>
      <div class="mt-2">
        <span class="chip accent">
          <span class="i-carbon-user-avatar text-xs"></span>
          Presentert av Kyrre
        </span>
      </div>
    </div>
    <div class="flex flex-col gap-4">
      <div class="screenshot-placeholder" style="min-height: 260px;">
        <span class="i-carbon-image text-3xl" style="color: var(--nais-border);"></span>
        <span>Screenshot: Nais CLI i aksjon</span>
      </div>
    </div>
  </div>
</div>

---
layout: default
---

<!-- Slide 12: Diskusjon -->

::header::
<h1 class="text-3xl font-bold">Diskusjon & erfaringsdeling</h1>
<div class="gradient-bar"></div>

::default::
<div class="flex justify-center mt-4">
  <div class="grid grid-cols-3 gap-5" style="max-width: 900px; width: 100%;">
    <div class="nais-card flex flex-col items-center text-center gap-3 px-5 py-6">
      <div class="icon-badge accent">
        <span class="i-carbon-help text-xl"></span>
      </div>
      <h3 class="text-base font-bold">Spørsmål</h3>
      <p class="text-xs" style="color: var(--nais-text-secondary);">Hva lurer dere på om plattformen eller funksjonalitet?</p>
    </div>
    <div class="nais-card flex flex-col items-center text-center gap-3 px-5 py-6">
      <div class="icon-badge green">
        <span class="i-carbon-share-knowledge text-xl"></span>
      </div>
      <h3 class="text-base font-bold">Erfaringer</h3>
      <p class="text-xs" style="color: var(--nais-text-secondary);">Del erfaringer fra migrering, onboarding eller daglig bruk</p>
    </div>
    <div class="nais-card flex flex-col items-center text-center gap-3 px-5 py-6">
      <div class="icon-badge purple">
        <span class="i-carbon-lightbulb-filled text-xl"></span>
      </div>
      <h3 class="text-base font-bold">Innspill</h3>
      <p class="text-xs" style="color: var(--nais-text-secondary);">Hva ønsker dere fra Nais fremover? Nye features, forbedringer?</p>
    </div>
  </div>
</div>
<div class="flex justify-center mt-5">
  <div class="callout text-sm" style="max-width: 600px;">
    Åpen diskusjon — alle temaer er velkomne!
  </div>
</div>

---
layout: cta
---

<!-- Slide 13: Closing -->

::header::
<div class="flex flex-col items-center gap-4">
  <img src="/logos/nais-v2-rosa.svg" alt="nais" class="h-24" />
  <h1 class="text-4xl font-black">Takk for i dag!</h1>
  <div class="gradient-bar" style="width: 120px;"></div>
</div>

::default::
<div class="flex flex-col items-center gap-6">
  <p class="text-lg" style="color: var(--nais-text-secondary);">Vi gleder oss til neste brukerforum</p>
  <div class="flex items-center gap-5">
    <a class="nais-card flex items-center gap-3 px-5 py-3 no-underline" style="color: var(--nais-text); text-decoration: none;">
      <div class="icon-badge accent" style="width: 2rem; height: 2rem;">
        <span class="i-carbon-globe text-base"></span>
      </div>
      <span class="font-mono text-sm">nais.io</span>
    </a>
    <a class="nais-card flex items-center gap-3 px-5 py-3 no-underline" style="color: var(--nais-text); text-decoration: none;">
      <div class="icon-badge blue" style="width: 2rem; height: 2rem;">
        <span class="i-carbon-logo-github text-base"></span>
      </div>
      <span class="font-mono text-sm">github.com/nais</span>
    </a>
    <a class="nais-card flex items-center gap-3 px-5 py-3 no-underline" style="color: var(--nais-text); text-decoration: none;">
      <div class="icon-badge purple" style="width: 2rem; height: 2rem;">
        <span class="i-carbon-chat text-base"></span>
      </div>
      <span class="font-mono text-sm">Slack: #nais</span>
    </a>
  </div>
</div>
