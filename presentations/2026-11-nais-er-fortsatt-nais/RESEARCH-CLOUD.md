# Cloud dependency risk – research notes (2026-11-05)
Legend: [D]=source directly states, [I]=inferred, [S]=single/secondary source, [R]=rumour/forum

## 1. Capacity shortages 2026–27
- Microsoft CFO Amy Hood, Oct 2025 (FY26 Q1): Azure capacity-constrained through at least end of FY26 (June 2026). [D] https://www.directionsonmicrosoft.com/microsoft-q1-fy26-earnings-cloud-supply-constraints-to-last-through-at-least-june-2026/ , https://www.fool.com/earnings/call-transcripts/2025/10/29/microsoft-msft-q1-2026-earnings-call-transcript
- Apr 2026 (FY26 Q3): constraint extended "at least through 2026". [D via call summary, verify transcript] https://www.marketbeat.com/instant-alerts/microsoft-q3-earnings-call-highlights-2026-04-29/
- CBRE European outlook 2026: power and land shortages + regulation are main constraints; little speculative building; FLAP-D pricing +12% in 2026. [D] https://www.cbre.com/insights/books/european-real-estate-market-outlook-2026/data-centres
- JLL 2026: established EU hubs constrained by grid; growth moves to secondary markets incl. Oslo; big-4 hyperscaler capex ~$725bn in 2026 (+77%). [D] https://www.jll.com/en-de/newsroom/ai-boom-redraws-europes-data-centre-map-as-power-access
- GPU/AI demand crowding out general compute: [I] from MS statements + UK South reports (AMD/HPC/GPU SKUs most short). No vendor states "AI crowds out general VMs" verbatim.

## 2. Azure Norway
- No source found stating Norway East/West blocks new customers. Norway East is instead named as the *alternative* region when Switzerland North (existing customers only) and UK South are full. [D for CH/UK; Norway inference] https://www.itreseller.ch/Artikel/102110/Azure-Engpaesse_Switzerland_North_nur_fuer_Bestandskunden.html , https://www.bechtle.com/gb/news/bechtle-blog-uk/cloud/azure-uk-south-capacity-pressures
- UK South, Jan 2026: new customer subscriptions restricted, quota auto-approval disabled. [S/R – partner blogs + Reddit, no MS notice] https://www.cisilion.com/news-blog/azure-uk-south-capacity-constraints/ , https://www.datacenterdynamics.com/en/news/microsoft-azures-uk-south-region-experiences-capacity-issues-report
- Aidan Finn, June 2026 "EU Azure Regions Capacity": lists quota denied on new tenants in EU regions. [S, blog, AI-assisted] https://aidanfinn.com/?p=25002
- Petri: "Azure European regions starting to hit capacity limits" (403, undated by me). https://petri.com/microsoft-azure-european-regions-hit-capacity-limits
- Single Q&A: PostgreSQL "not available in this location for your subscription" in Norway East, undated. [R] https://learn.microsoft.com/en-us/answers/questions/92649/postgresql-norway-east

## 3. GCP / AWS Nordics
- GCP europe-north1 (Hamina, FI) since June 2018. [D] https://cloud.google.com/blog/products/gcp/gcp-arrives-in-the-nordics-with-a-new-region-in-finland
- GCP europe-north2 (Stockholm) is GA (Google's 42nd region); date not verified. [S] https://northflank.com/cloud/gcp/regions/europe-north2
- Google announced Norway (Oslo) region Oct 2022; groundbreaking of first Norwegian DC (Skien) reported; no launch confirmed. [D announce; status unverified] https://www.googlecloudpresscorner.com/2022-10-11-Google-Cloud-Announces-Plans-for-First-Cloud-Region-in-Norway-to-Accelerate-Sustainable-Digital-Transformation , https://www.itpro.com/infrastructure/data-centres/google-breaks-ground-on-its-first-norwegian-data-center-as-tech-giant-targets-99-carbon-free-operations
- AWS: no Norway region; Stockholm eu-north-1 since Dec 2018; Oslo Direct Connect only. [D] https://press.aboutamazon.com/2018/12/amazon-web-services-launches-new-region-in-sweden
- No capacity-shortage reports found for GCP europe-north1/2 or AWS Stockholm. [absence, not proof]

## 4. Sovereignty
- EU Cloud and AI Development Act (CADA), COM(2026) 502, proposed June 2026: four sovereignty assurance levels for public procurement, member-state sovereignty risk assessments, aim to triple EU DC capacity in 5–7 years. Proposal only. [D] https://digital-strategy.ec.europa.eu/en/library/proposal-cloud-and-ai-development-act-cada , https://www.taylorwessing.com/en/insights-and-events/insights/2026/06/cloud-and-ai-development-act
- Commentary that CLOUD Act may bar US providers from top tiers. [I, commentary] siliconcanals.com
- AWS European Sovereign Cloud GA 15 Jan 2026, Brandenburg, separate partition, €7.8bn; launch slipped from end-2025. [D] https://press.aboutamazon.com/aws/2026/1/aws-launches-aws-european-sovereign-cloud-and-announces-expansion-across-europe
- NSM Risiko 2026 (Feb 2026): Norway heavily dependent on a few US cloud providers; changed terms, tech failure or cyber ops could hit essential services; recommends backup/reserve solutions. [D via Altinget; read PDF to quote] https://nsm.no/getfile.php/1314962-1770630853/NSM/Filer/Dokumenter/Rapporter/Risiko%25202026.pdf , https://www.altinget.no/digital/artikkel/nsm-anbefaler-reserveloesninger-for-skytjenester-altfor-hoey-risiko
- Statsbudsjett 2026: NOK 30m for pre-project on national cloud to reduce foreign dependence. [S – search summary, verify] https://www.regjeringen.no/no/aktuelt/regjeringen-styrker-arbeidet-med-sikkerhet-og-beredskap/id3122316/
- Not researched further: Google sovereign offerings, Microsoft EU Data Boundary (completed Feb 2025, from memory, unverified here), Digdir guidance (nothing found).
