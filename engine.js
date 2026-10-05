window.Engine03=(function(){
const BANNED=/\b(resolver|context|state|flag|mode|variable|available action|developer|prompt|token|database|not enough established context)\b/i;
function initialKnowledge(){return{locations:{"St. Bartholomew's":"EXPLORED","Rectory":"EXPLORED","Cemetery":"KNOWN","Downtown":"KNOWN","Sheriff's Office":"KNOWN","Clinic":"KNOWN","Reservoir":"KNOWN"},routes:{"St. Bartholomew's|Rectory":"EXPLORED","St. Bartholomew's|Downtown":"KNOWN"},facts:[]}}
function knows(k,name){return !!(k.locations&&k.locations[name])}
function safeNarration(text){let t=String(text||"");if(BANNED.test(t))return"Nothing about the scene changes immediately. Malric can only act on what he can presently see, hear, remember, or reasonably infer.";return t}
function validateMove(world,k,from,to){if(!knows(k,to))return{ok:false,reason:"UNKNOWN_DESTINATION"};let L=world.locations[from];if(!L||!(L.exits||[]).includes(to))return{ok:false,reason:"NO_KNOWN_ROUTE"};return{ok:true}}
function discover(k,name,status){if(!k.locations[name])k.locations[name]=status||"DISCOVERED"}
function discoverRoute(k,a,b,status){let key=a+"|"+b;if(!k.routes[key])k.routes[key]=status||"DISCOVERED"}
function validateNpcPresence(state,npc){return state.scene&&state.scene.npc===npc||state.npcs&&state.npcs[npc]&&state.npcs[npc].loc===state.loc}
function rollGate(action){return /\b(force|break|climb|jump|sneak|shoot|fight|pick lock|persuade|lie convincingly)\b/i.test(action)}
function metaknowledge(action,k){let q=action.toLowerCase();let hidden=["sublevel 4","redwater","glasslake","beacon chamber","old whisper"];return hidden.find(x=>q.includes(x)&&!(k.facts||[]).some(f=>f.toLowerCase().includes(x)))||null}
function invariant(result){result.narration=safeNarration(result.narration);return result}
return{initialKnowledge,knows,safeNarration,validateMove,discover,discoverRoute,validateNpcPresence,rollGate,metaknowledge,invariant}})();