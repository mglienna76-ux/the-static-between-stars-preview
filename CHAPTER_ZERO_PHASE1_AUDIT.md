# Chapter Zero — Phase 1 Freeze and Audit
Date: 2026-10-21
Scope: read-only assessment of original Preview; work on this audit branch only.
Frozen baseline: main @ 9ea7f06acc6533b51387943fe663c51f41b429eb (2026-10-12).
Do not merge Phase 2 gameplay changes into main without explicit approval.

## Evidence
- Existing repo includes 12 test files and GitHub Actions workflow; last commit check concluded success.
- Vercel latest inspected deployment for that SHA reported READY. Neither establishes an end-to-end playable opening.
- Browser game uses index.html, app.js, game.js and window-global scripts.
- Engine contract documents knowledge/route/agency invariants.
- Deterministic API resolver, LLM semantic resolver, and AI GM API coexist.
- Story graph, Director, Static, NPC schedules and Day-1 content are implemented but not proven integrated across a full playthrough.

## Critical findings
P0: Opening decisions and route discovery have repeatedly produced client resolver exceptions and validator NO_ROUTE/UNKNOWN_LOCATION; no automated full opening-to-ending acceptance test.
P0: State mutation in game.js is incremental; exceptions can leave partially mutated in-memory state. Save/restore and idempotence need transactional tests.
P0: Story node awards can be triggered by approximate phrase matching rather than verified world outcomes, risking undeserved discoveries.
P1: AI GM scope and deterministic resolver overlap, creating divergent results for equivalent actions.
P1: Current npm test validates many units but lacks mandatory browser navigation, fresh/restore UI, and complete chapter playthrough tests.
P1: Readable/searchable world objects are incomplete outside the initial church/rectory.
P1: NPC identity and presence contracts have had string-vs-object inconsistencies.
P2: Static and Director pressure rely on heuristics not authoritative story events.
P2: Horizontal tab overflow, UI polish, audiovisual effects, and 14 additional characters should wait.

## Keep / refactor / defer
KEEP: canon/world and timeline material; story bible; Engine 0.3 invariant principles; NPC knowledge/schedules; authored node graph; Static concept; test history.
REFACTOR: action pipeline into single deterministic state transition; explicit scene affordances and canonical IDs; object interactions; validated conversation outcomes; transactional save/restore; browser tests.
DEFER: full open world, other characters, Days 0–7, AI-controlled world mutation, extra effects, multiple expansive endings.

## Chapter Zero boundaries (proposal; not yet implemented)
Malric only; one evening; Church, Rectory, Cemetery; 3 connected threads; multiple achievable outcomes; explicit finish condition. The AI may interpret/narrate approved results but must not independently create world state.

## Phase 1 exit criteria
1. Original main SHA and Preview deployment recorded; freeze branch created.
2. Module inventory and failure register completed.
3. Chapter Zero scope and acceptance gates approved.
4. No gameplay code changed in Phase 1.
5. Phase 2 work proceeds only on an isolated implementation branch.

## Phase 2 acceptance gates
- Every ordinary action either resolves with in-world feedback or an actionable, safe refusal.
- No blank screens, leaked engine diagnostics, duplicate story awards, or state corruption.
- Canonical NPC/route/knowledge validation across opening and ending.
- Seven UI views work on fresh and restored saves.
- Full start-to-ending automated scenarios for at least three endings.
- Manual 45–90 minute playthrough with no blocking failures.
