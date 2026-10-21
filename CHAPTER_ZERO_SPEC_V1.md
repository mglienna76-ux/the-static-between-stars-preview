# Chapter Zero — Specification v1.0 (proposed)
Phase 1, October 21, 2026. Not implemented. Scope is frozen on approval.
Baseline: main at 9ea7f06acc6533b51387943fe663c51f41b429eb.

## Play boundary
Brother Michael Malric, one evening beginning 6:42 PM, target 45–90 minutes.
Five locations: Church, Rectory, Basement, Archive, Cemetery.
Bidirectional routes: Church-Rectory (1m), Church-Basement (1m, discovery gated), Basement-Archive (1m, access gated), Church-Cemetery (2m).
No travel to the rest of Whispering Falls within Chapter Zero; attempting it produces an in-world chapter-boundary response.

## Characters
Malric: player, never auto-author dialogue, motives or consent.
Father Gabriel Reed: physically scheduled parish NPC; records, grief, witnessing.
Sheriff Thomas Mercer: phone-only, Emily's case; accepts refusal or help without teleporting player.
Anna figure: a voice is not physical presence; manifestation requires authored trigger; identity unproven.
Emily, Rachel, David, Caleb, Nora and Voss: offstage facts only.

## Objects (each must have canonical ID, aliases, location, affordances, content, requirements, repeat behavior)
Church: parish bulletin, sacristy phone, service door, stairs, pews.
Rectory: telephone, parish calendar, desk, correspondence, keys.
Basement: utility sink, shelves, moved parish boxes, water stains, archive door.
Archive: old ledgers, damaged register, diocesan correspondence, work table.
Cemetery: grave markers, rear church wall, maintenance shed door.
READ returns authored content; EXAMINE sensory facts; SEARCH inventories reachable contents; USE has defined consequence; unavailable actions explain physical limitations without exposing internal state.

## Progression
Mercer/Emily: M0 call -> M1 accept/decline/defer -> M2 verified case facts -> M3 share or withhold anomaly.
Visitations: V0 voice -> V1 stairs discovered -> V2 descend by player choice -> V3 manifestation -> V4 test/retreat/witness.
Aqua Heresis: A0 bulletin or Gabriel reveals water damage -> A1 boxes identified -> A2 archive access -> A3 read ledger term -> A4 compare historical and contemporary evidence.
Convergence K1: manifestation plus independent visitation account.
Convergence K2: historical record plus independently observed anomaly.
K3: finale eligibility after a meaningful branch outcome, not mandatory completion of all threads.
Awards only from verified world outcomes, never keyword matching; exactly once.

## Alternate routes
Refuse Mercer: follow records or Anna; no softlock.
Ignore Anna: pursue Gabriel and parish history; later authored encounter opportunity.
Avoid archive: Mercer and Anna evidence can still yield an ending.
Avoid Anna: records and Mercer decisions can still yield an ending.
Lose archive access: supervised access or alternate evidence path.
Every mandatory clue has at least two acquisition opportunities, or a finale path that bypasses it.

## Endings (proposed, to approve)
WITNESS: share independently corroborated evidence with Gabriel or Mercer; outside scrutiny follows.
PRIVATE: retain or conceal credible evidence; autonomy but less institutional help.
WITHDRAWAL: decline further involvement or reach evening deadline; events proceed without Malric.
Each ending has one persistent ending ID, a meaningful consequence, and a complete epilogue.

## State and authority
Input -> deterministic basic verb -> scene referents -> affordance and knowledge check -> authorized outcome -> validate -> atomic commit -> AI narration from approved outcome.
AI never grants clues, moves NPCs, creates routes, or changes world state.
Save schema: version, time, location, discovered routes, access, NPC presence, inventory, clues, story nodes, Mercer choice, Anna state, Static state, journal, ending ID and committed action ID.
Failed turns must preserve prior state; retries must be idempotent.

## Acceptance tests
1. All seven views render on fresh and restored saves (14 assertions).
2. Follow voice -> discover stairs -> descend -> encounter -> ascend; no route/presence errors.
3. Accept Mercer -> persist choice and journal -> reload -> no duplicate award.
4. Decline Mercer -> alternative path to ending.
5. Read bulletin -> full content and clue exactly once; consistent reread.
6. Talk to Gabriel by all established aliases; presence respected.
7. Unknown route and inaccessible object rejected in-world without mutation.
8. Complete automated playthrough for each of three endings.
9. Invalid AI output cannot mutate world or leak implementation.
10. Save/restore after every critical node, atomicity and idempotence.
11. 100 seeded varied-command sequences: no blank screens, exceptions, loops, or leaks.
12. Manual 45–90-minute playthrough on desktop and mobile without blocking failures.
No Phase 2 feature expansion until critical acceptance gates pass.

## Signoff
This is a proposed Phase 1 specification only. Do not merge or deploy gameplay changes from this document. Approval freezes Chapter Zero scope.
