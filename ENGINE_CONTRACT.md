# The Static Between Stars — Engine Contract 0.3

## Authority layers
1. WORLD_TRUTH is canonical and immutable except explicit world-state mutations.
2. CHARACTER_KNOWLEDGE contains only facts/locations/routes the active character has learned.
3. PLAYER_INPUT may contain metaknowledge; input never silently promotes it to character knowledge.
4. SCENE_STATE contains current location, present NPCs, perceivable objects, active conversation, danger and pending rolls.

## Resolution pipeline
INPUT → INTENT → SCENE → KNOWLEDGE → WORLD VALIDATION → ROLL GATE → CONSEQUENCE → STATE MUTATION → SAFE NARRATION.

## Invariants
- Unknown geography is never named, mapped or offered before discovery.
- Movement follows canonical routes. No teleporting.
- Discovery stops at the first materially new unknown unless the player's action clearly continues farther and doing so is physically possible.
- Narrator never invents PC dialogue, thoughts, beliefs, consent, motives or decisions.
- NPC dialogue may respond only from NPC knowledge, motives and current state.
- Internal terms never reach narration: resolver, context, state, flag, mode, variable, available action, developer, prompt, token, database.
- Failed/unrecognized intent is expressed in-world without exposing implementation.
- Ordinary certain actions do not roll. Rolls require meaningful uncertainty + meaningful consequence.
- Roll result is resolved against the exact pending action; it cannot mutate into a different action.
- Time always advances by the resolved action's cost.
- Items/resources are persistent and cannot respawn unless world rules explicitly replenish them.
- NPC presence is validated before conversation/interaction.
- Character map renders CHARACTER_KNOWLEDGE only.
- Case files render established character knowledge only.
- Metaknowledge may be spoken/attempted, but NPC/world reactions cannot pretend the character previously learned it.
- All state mutations are returned structurally; narration itself never changes state.
- Player-safe narration must be derivable from approved consequence + perceivable facts.

## Scene modes
FREE_ACTION, CONVERSATION, INVESTIGATION, TRAVEL, ROLL_PENDING, DANGER, INTERRUPTION.

## Discovery states
UNKNOWN → RUMORED/KNOWN → DISCOVERED → EXPLORED.
Routes have the same independent lifecycle.

## Required opening invariants
- "Agree to favor" keeps Malric with Mercer; Anna/basement does not auto-occur.
- "Follow the voice" reveals only the next perceivable route/threshold; it cannot assume the player knows a basement exists.
- "Talk to Anna" enters persistent CONVERSATION without inventing Malric's words.
- "Go upstairs" ends Anna conversation and moves only via an established route.
- "Look around" reveals only perceivable scene contents.
- "Go to Blackridge Sublevel 4" cannot reveal whether that unknown location exists.
- Internal diagnostics never appear in player-facing output.
