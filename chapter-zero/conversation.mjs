// Gabriel's responses depend on verified evidence and the player's chosen disclosure.
export function gabrielResponse(state,topic){
 const t=String(topic||"").toLowerCase();
 if(/anna|voice|figure|basement|what i saw/.test(t)){
  if(state.clues.includes("anna_tested"))return "Father Reed waits until Malric has finished describing the detail that did not match. The rain rattles the window behind him. 'A familiar face and a familiar voice are not proof,' he says. 'If you want me to help, tell me what you observed. Not what it claims to be.'";
  if(state.clues.includes("anna_observed"))return "Gabriel's expression changes when Malric describes the figure among the shelves. He does not call it Anna. 'You saw someone down there,' he says carefully. 'That matters. What did she do?'";
  if(state.clues.includes("service_stair"))return "Gabriel looks toward the service corridor. 'You heard the voice near the stairs?' he asks. He makes no claim to have heard it himself.";
  return "Gabriel listens without interruption. 'Tell me what you heard,' he says. 'I won't pretend to know what it means.'";
 }
 if(/record|water|box|archive/.test(t)){
  if(state.clues.includes("aqua_term"))return "Gabriel studies the words Aqua Heresis on the page. 'I don't know what the writer intended,' he says. 'We should establish the date and the source before deciding what it means.'";
  if(state.clues.includes("record_boxes"))return "Gabriel nods at the description of the boxes. 'Those were moved after the leak. Some material is older than our current catalog.'";
  return "Gabriel sets his papers aside. 'There was a leak. We moved what we could save. Most of it is ordinary parish business.'";
 }
 return null;
}
