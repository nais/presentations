# Nais: shipped 2025-11-01 .. 2026-11-05

Method: `git log origin/HEAD --since=2025-11-01` on local clones (fetched) of system, api, api-reconcilers, console-frontend, cli, liberator, doc. blog had 0 commits. gh search not used.
V = verified from commit subject/file in source. I = inferred (from subject wording or design doc, not confirmed shipped/in prod).

## 1. Ranked changes

1. **Nais Postgres (CloudNativePG) GA-ish: nais.io/v1 Postgres, `uses`, branches** — 2026-09/10. liberator 36e40c0 "nais postgres v1 w/uses", 9bac2b5, 36d40ea (branch); system 6220397 "Flytte Postgres til nais.io/v1 (#536)"; doc e848e8fd "feat: nais postgres (#907)". V. (prod readiness: I)
2. **Postgres branches / point-in-time recovery as branches** — 2026-10. api de03773a "branch operations (#540)", 620fe670; cli c16cafda "add branch commands (#790)", ae83c162 relative recovery time. V
3. **Console: CNPG Postgres management** (create/update, labels, insights, query insights, Loki logs, extensions/config) — 2026-10/11. console-frontend fa06937a (#646), 25891ed1, 841a3183, b4001228; api af91b133, d23462e4. V
4. **CLI: `nais postgres` promoted to root, CloudSQL split into `nais cloudsql`, migration commands removed** — 2026-10. cli 0d0b3afe (#807, breaking), 19ac3e5e (#784), dbaee361 (#796, breaking). V
5. **Personal DBA access to Postgres (pgaccess, maintain level, via relay/proxy; env/JSON output)** — 2025-11 -> 2026-11. system a1273d4 "Day of the Operator (personlig tilgang)"; api 49d23ab8 (#526), 1ae348cb (#593); cli 74ea0d7b, 7bf7b825, 37fd397c. V
6. **Zalando Postgres operator era ended in API** — earlier operator work 2025-12/2026-02 (system 8871e8a, 3362114, cad216c), removed from API 2026-10 (api 603d75f0 "remove zalando (#534)"). V (tenant migration completeness: I; system 0647ea3 "Postgres migration dashboard")
7. **`nais apply` (alpha -> root): native manifests/CRDs, --set/mixins, dry-run, wait, Config resources, list overrides** — 2026-04..10. cli fba1ff30, a69c3daa, 1e659bd1, ba65ef8f, a18ea5bd (#751), 95d13bed. V
8. **Ad hoc mutations: `nais app set image/env/replicas`, rollback, app delete; API updateApplication/updateJob** — 2026-05..07. cli ef69e1dd (#731), 0c6d11fb (#737), dbf28c48 (#752); api b01080da (#443), d0029c11. V
9. **Nais MCP server in CLI (schema-driven GraphQL tools, secret filtering, localhost default)** — 2025-12, hardened 2026-10. cli 1593c534, fe648d87, 16fc1e93, 6ddc986a. V. Also system areas/observability/grafana-mcp-server (I: status unknown)
10. **Vulnerability prioritisation (v13s model, EPSS/KEV, internet exposure, CVE impact counts, bulk suppression, label filter)** — 2026-04..11. system f10686e, 6365687; api 5fd4fb17 (#452), 504b76c6 (#510), 9d931a5e (#440), 3adc0f61, 6a5018ef; console 94c33ed9, 9048f4f7. V
11. **Elevation (just-in-time) for viewing secret values, with justification + activity log; team viewer role** — 2026-01. api 8c913e89, 0f8e6af7, 38994be5; console cd2fb320; cli c7c934cf. V
12. **Logs: Loki explorer replaces app/job/Postgres log viewers; default logs per environment** — 2026-11. console 69e544d9 (#696), bf51f245 (#698), 97cba3d5 (legacy fallback); api 91904279 (#605). V
13. **Ingress: nginx -> HAProxy migration** — 2026-04..06. api 614a8a48, de9a526f; console 420d4cab, 99669131; system areas/cluster/haproxy-migrering.md ("gjennomført i periode 2-26"). V
14. **Metrics backend: Prometheus -> Mimir** — 2026-01. api bf708721 "bytter til Mimir service"; system areas/observability/mimir-*.md. V (completion: I)
15. **Config (ConfigMap) management + binary secrets/configs in Console & CLI** — 2026-03/04. console 8571c136, ce969d77; cli 89299749, 228046cb, 472c6021. V
16. **Global service accounts in Console/API (workload SA bindings, activity log); static SAs removed** — 2026-05..10. console b1c891ad (#432); api 4b44d27c, 511371bc, adee96ac (#579). V
17. **Activity log overhaul (K8s resource changes, dedicated page, filters, workload events split)** — 2026-04..10. console 3fcf77a7, 03831b3c (#626); api f7cba588 (#576). V
18. **Labels across resources + facet filters (Console, CLI, API)** — 2026-06. api a9108a6f (#456); console 56683adb, 8c79ef13; cli 4ad4af66. V
19. **Valkey/OpenSearch out of alpha + self-service: version change, cluster mode, DB count, OpenSearch 3.6, migration to new model** — 2026-03..09. cli 4c67ead1, c887ff2b; api 7276bad4 (#524), a1737d3b (#497), 3d019acf; console 57e81e81, 8076f022; system c65b226. V
20. **Kafka: native ACLs, topic grants/revoke via API, credentials CLI (incl. streams), 365-day creds, Kafka 3.9 then v4** — 2025-12..2026-09. system 8f82d36, e982d89, e475764; api 2f68e859 (#514), f28721b7, 99f79865; cli 979b4bc1, df80ea8d. V (Kafka v4 rollout status: I)
21. **Instance introspection & restart-loop detection (`nais app status/env/files`, instance groups page)** — 2026-04..06. api 23c1d2a5, 7a36229c; cli 909dd8f3; console fab24fc7. V
22. **Unleash self-service: release channels, delete, toggle on/off** — 2026-01..09. console ac2b96c0, c2deb1ad; api 95909dd0, 0832c12e. V
23. **CLI auth/UX: nais.io login with tenant selection, autologin pre-run, prompts/choices for args, naisdevice wait for gateways** — 2026-10/11. cli 9ec20929, b033db15, bb4e8550, 54c9b426. V
24. **Grafana alerting per team (provisioned folders/policies, pilot)** — 2026-10/11. api-reconcilers f45db14, f62436a, 401a974. V (pilot only)
25. **Nais APM links in Console; Elastic APM removed** — 2026-04. console cfb0fbcb; doc 9f0b12bb. V
Also: liberator AnsattportenClient CRD (2026-08, c073649) V; Entra federated identity creds (4a88a48) V; Console a11y/security headers, accessibility statement (2026-06/08) V; new-version notification (console ac1ae15e) V.

## 2. In progress / stated direction (system/areas initiatives; I unless noted)
- Helhetlig retning for Console (redesign of front page/team overview): areas/console/helhetlig-retning-for-console.md (added 2026-04, system 512635d) V that doc exists.
- CLI/Console parity: areas/cli/cli-console-parity.md (#300). Ad hoc "nais set" pattern: areas/api/nais-set-pattern.md.
- Phase out static service accounts in Nais API: areas/api/fase-ut-statiske-service-accounts-i-nais-api.md (api adee96ac suggests done, I).
- GCP exit analysis ("alternatives to US vendors"): areas/meta/gcp-exit-analyse.md, areas/meta/exit-analyse/.
- Postgres follow-up: CNPG 1.30 upgrade, pgaudit, zalando disaster backup, Postgres migration dashboard: areas/persistence/*.md.
- Kafka tiered storage, Kafka cost in Console, remove Valkey via Application, remove shared AivenApp secret: areas/persistence/.
- FSS migration / Oracle: areas/api/fss-migrering-oracle.md, kartlegging-fss.md. GKE autoupgrade: areas/cluster/autoupgrade. fqdn-policy (api-reconcilers 2ea1e3b).
- Felles Loki / Loki standard / team logs: areas/observability/.
- nais build, deploy without image, lead time in nais deploy: areas/api/.
- ADRs (areas/meta/adr) mostly old (000-012); no new ADR verified in period.

## 3. Deprecations / breaking changes for tenants
- Zalando Postgres -> Nais Postgres (CNPG, nais.io/v1); legacy workload config retained (liberator 7de526c). V removal from API; tenant migration I.
- CLI: `nais alpha postgres` -> `nais postgres`; old cloudsql postgres commands -> `nais cloudsql`; cloudsql migration commands removed (cli #807, #784, #796). Postgres flags --namespace/--context -> --team/--environment (cli d2ced83c). V
- Secure logs removed (liberator 7c1c402 deprecation msg, 2026-01; doc 9b3c1e94). V
- KrakenD deprecated as feature (doc b44d5002 2026-08; system 8fa7d6b). V
- Elastic -> OpenSearch done; Elastic APM removed (doc 9f0b12bb). V
- nginx ingress classes -> HAProxy (I whether tenants must change ingressClass).
- OpenSearch/Valkey automatic migration to new list model; remove manually configured serviceintegrations (console 8076f022, doc 6b7ca43e). V
- BigQuery spec.project deprecated/removed (liberator d210b35, c38020b); AzureAdApplication .spec.secretProtected removed (ce35ac8); old deprecated fields deleted (26b7bdc). V
- Deploy keys reconciler removed (api-reconcilers 35e58d2, 2025-12) — I: tenants on team deploy keys moved to OIDC/new image flow (doc c0a9b86d). 
- Legacy vulnerability issue types removed, replaced by WorkloadProblem/priority (api d4fdb074, 09e52d89). V
- `nais aiven` commands replaced by credentials commands (doc c97841be). V
