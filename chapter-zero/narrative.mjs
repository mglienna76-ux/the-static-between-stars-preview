// Authored narration for deterministic, approved Chapter Zero outcomes.
export const SCENES={
mercer_accept:"The phone is warm against Malric's ear. Mercer wastes little time on greetings. Emily Vance is missing, he says, and her family has begun to fear the worst. Beneath his clipped explanation is something Malric has rarely heard from the sheriff: uncertainty. When Malric agrees to help, Mercer lets out a breath and gives him what little he knows. The church around him remains quiet. The voice from the corridor does not return.",
mercer_decline:"Mercer falls silent long enough for the rain to begin tapping the windows. He doesn't argue. He says he'll keep looking for Emily and ends the call with a tired thanks. The screen goes dark, but the church has not grown any less strange.",
anna_stairs:"The sound comes again from the service corridor, softer this time, nearly lost beneath the first hard drops of rain. Malric follows it past the sacristy. The air smells of floor wax and damp plaster. At the far end, a service door stands slightly ajar. Beyond it, concrete stairs descend into darkness. Nothing in the stairwell moves.",
basement_enter:"The steps are narrow and worn shallow at their centers. With each one, the familiar noises of the sanctuary fade. At the bottom, a bare bulb shines over metal shelving and water-marked walls. The basement smells of old cardboard and stone that never quite dries.",
church_return:"The church air feels warmer after the basement. Rain beats steadily against the high windows, and the sanctuary lamps burn where Malric left them. The service door settles into its frame behind him.",
bulletin:"The parish bulletin is pinned beneath a curling plastic cover. Mass times, pantry donations, cemetery cleanup: the ordinary business of people helping one another endure the week. Near the bottom, a note thanks volunteers for moving older parish records after last month's water leak. The small announcement seems almost apologetic beside the larger print above it.",
gabriel_records:"Father Reed sets aside what he is doing. He explains that a leak damaged several boxes of old parish material, most of it routine paperwork. Some records were moved below until there was room to sort them. He does not embellish the story, but he is willing to answer questions.",
gabriel_anna:"Gabriel listens without interrupting. Somewhere behind him, the old pipes knock once. He does not claim to have heard the voice, and he does not dismiss the account. He asks what, precisely, Malric heard.",
anna_appears:"A figure stands beyond the storage shelves, where the weak bulb leaves the wall in shadow. The outline is familiar: the turn of the shoulders, the way one hand hangs slightly open. Yet the cold in the room seems to have gathered around it. Whatever stands there has the appearance of Anna. That is all the evidence allows.",
anna_test:"The figure answers with a detail from years ago. It is close enough to hurt, and wrong in a way that cannot be blamed on distance or time. For a moment, only the low electrical hum of the bulb fills the basement."
};
export function narrationFor(command,previous,next,fallback){const a=String(command||"").toLowerCase(),loc=next.location;
if(previous.mercer==="pending"&&next.mercer==="accepted")return SCENES.mercer_accept;
if(previous.mercer==="pending"&&next.mercer==="declined")return SCENES.mercer_decline;
if(previous.anna==="voice"&&next.anna==="stairs_discovered")return SCENES.anna_stairs;
if(previous.location==="church"&&loc==="basement")return SCENES.basement_enter;
if(previous.location==="basement"&&loc==="church")return SCENES.church_return;
if(a.includes("bulletin")&&a.startsWith("read"))return SCENES.bulletin+"\n\n"+fallback;
if(a.includes("father reed")||a.includes("gabriel")){if(/anna|voice/.test(a))return SCENES.gabriel_anna;if(/record|water|box/.test(a))return SCENES.gabriel_records}
if(!previous.clues.includes("anna_observed")&&next.clues.includes("anna_observed"))return SCENES.anna_appears;
if(!previous.clues.includes("anna_tested")&&next.clues.includes("anna_tested"))return SCENES.anna_test;
return fallback;
}