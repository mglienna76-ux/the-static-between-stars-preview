// Scene observations are authored, state-aware, and do not grant evidence.
export const SCENE_DESCRIPTIONS={
church:"The sanctuary is long and dim, its dark wooden pews divided by a narrow central aisle. Rain traces the tall windows, turning the lamps into blurred reflections. The parish bulletin hangs near the entrance; beyond the sacristy lies the service corridor. A doorway leads to the rectory, and the main doors open toward the cemetery. Father Gabriel's work continues somewhere nearby.",
rectory:"The rectory is modest and warm. A telephone rests beside a pad for messages, and the parish calendar is marked with appointments and ordinary obligations. Gabriel's desk carries letters and correspondence. The hall leads back to the church.",
basement:"A bare bulb throws an uneven circle of light over metal storage shelves. Water marks stain the masonry; an old utility sink stands beneath exposed pipes. Cardboard boxes have been stacked away from the dampest wall. A secured archive door waits beyond them, while the concrete stairs return to the church.",
archive:"Old ledgers, damaged registers and diocesan correspondence occupy shelves around a narrow work table. The room smells of paper, dust and the mineral damp of the basement. The door leads back to the storage area.",
cemetery:"Wet grass lies between generations of grave markers. Rain darkens the stone and gathers in the worn lettering. A maintenance shed stands beyond the path, and the rear wall of St. Bartholomew's rises above the grounds. The church entrance remains within reach."
};
export function describeScene(s){
 let text=SCENE_DESCRIPTIONS[s.location]||"The surroundings offer no clear details.";
 if(s.location==="church"){
  if(s.clues.includes("anna_observed"))text+=" The service corridor looks unchanged, although the figure Malric saw below remains a recent and verifiable memory.";
  else if(s.clues.includes("service_stair"))text+=" The service door stands where he found it; he now knows the stairway descends to the basement.";
  else text+=" From the service corridor comes no further voice, though its earlier sound remains unexplained.";
  if(s.mercer==="accepted")text+=" Mercer is waiting for help with Emily Vance.";
  if(s.mercer==="declined")text+=" Mercer has continued the search without Malric.";
 }
 if(s.location==="basement"&&s.clues.includes("anna_observed"))text+=" Near the far wall is the place where the figure resembling Anna appeared; its identity remains unproven.";
 if(s.location==="archive"&&s.clues.includes("aqua_term"))text+=" The ledger containing the words Aqua Heresis lies among the records.";
 return text;
}
