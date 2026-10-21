// Canonical narrative continuity derived from verified state only.
export function continuity(state){
const facts=[];
if(state.mercer==="accepted")facts.push("Mercer is expecting Malric's help with Emily Vance.");
if(state.mercer==="declined")facts.push("Mercer is continuing the search without Malric.");
if(state.clues.includes("service_stair"))facts.push("Malric has located the service stair below St. Bartholomew's.");
if(state.clues.includes("water_damage"))facts.push("Older parish records were moved after a water leak.");
if(state.clues.includes("record_boxes"))facts.push("Water-stained parish boxes were found in the basement.");
if(state.clues.includes("aqua_term"))facts.push("An old parish ledger contains the words Aqua Heresis.");
if(state.clues.includes("anna_observed"))facts.push("A physical figure resembling Anna appeared in the basement; identity unverified.");
if(state.clues.includes("anna_tested"))facts.push("One of the figure's remembered details did not match.");
return facts}
export function transitionContext(before,after){
const old=new Set(continuity(before)),now=continuity(after);
return{newFacts:now.filter(x=>!old.has(x)),knownFacts:now,locationChanged:before.location!==after.location,priorLocation:before.location,currentLocation:after.location}
}
