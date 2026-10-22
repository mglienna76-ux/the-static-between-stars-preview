// Scene continuity uses only established facts and physical transitions.
export function sceneCarry(before,after,command){
 const a=String(command||"").toLowerCase(),parts=[];
 if(before.location!==after.location){
  if(before.location==="church"&&after.location==="basement"&&before.clues.includes("service_stair"))parts.push("Above, the service door separates the basement from the sanctuary and the rain.");
  if(before.location==="basement"&&after.location==="church"&&before.clues.includes("anna_observed"))parts.push("The image of the figure among the shelves remains difficult to set aside.");
  if(after.location==="rectory"&&before.mercer!=="pending")parts.push("Mercer's call has left its own unfinished business in the quiet rooms.");
 }
 if(before.location===after.location&&a.includes("record")&&before.clues.includes("water_damage"))parts.push("The earlier notice about the water-damaged records gives the subject a familiar weight.");
 return parts.join(" ");
}
export function composeScene(before,after,command,narration){
 const carry=sceneCarry(before,after,command);
 return carry?String(narration||"")+"\n\n"+carry:String(narration||"");
}
