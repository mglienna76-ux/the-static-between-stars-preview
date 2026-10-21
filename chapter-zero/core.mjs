// Chapter Zero deterministic foundation. No AI-generated world mutations.
export const VERSION=1;
export const ROOMS={
 church:{name:"St. Bartholomew's",exits:["rectory","basement","cemetery"]},
 rectory:{name:"Rectory",exits:["church"]},
 basement:{name:"Church Basement",exits:["church","archive"]},
 archive:{name:"Parish Archive",exits:["basement"]},
 cemetery:{name:"Cemetery",exits:["church"]}
};
export function freshState(){return{schemaVersion:VERSION,minute:1122,location:"church",knownRooms:["church","rectory","cemetery"],knownRoutes:["church:rectory","church:cemetery"],access:[],mercer:"pending",anna:"voice",clues:[],journal:["6:42 PM — Evening begins."],committedActions:[],lastOutcome:null}}
function canonical(s){return String(s||"").toLowerCase().trim().replace(/[.!?]+$/,"").replace(/^(?:the|a)\s+/,"")}
function resolveRoom(s){let x=canonical(s);return Object.keys(ROOMS).find(k=>k===x||canonical(ROOMS[k].name)===x)||({downstairs:"basement",upstairs:"church","down stairs":"basement","up stairs":"church","parish archive":"archive"})[x]||null}
function link(a,b){return [a,b].sort().join(":")}
export function migrate(raw){if(!raw||typeof raw!=="object")return freshState();if(raw.schemaVersion!==VERSION)throw new Error("UNSUPPORTED_SAVE_VERSION");let s=structuredClone(raw);if(!ROOMS[s.location])throw new Error("INVALID_SAVE_LOCATION");for(const k of ["knownRooms","knownRoutes","access","clues","journal","committedActions"])if(!Array.isArray(s[k]))throw new Error("INVALID_SAVE_"+k);return s}
function result(s,narration,changed=false){return{state:s,narration,changed}}
export function step(input,command,actionId){let s=migrate(input),a=canonical(command),id=String(actionId||"");if(!id)return result(s,"An action identifier is required.");if(s.committedActions.includes(id))return result(s,"That action has already been resolved.");let n=structuredClone(s),text="",changed=false;
if(/^(?:agree|accept|yes)(?:\s+(?:to|with))?(?:\s+mercer(?:'s)?(?:\s+favor)?)?$/.test(a)||/^(?:agree to|accept) mercer's favor$/.test(a)){if(n.mercer==="pending"){n.mercer="accepted";text="You agree to help Mercer investigate Emily Vance's disappearance. He confirms the details over the phone.";changed=true}else text="You have already answered Mercer."}
else if(/^(?:decline|refuse)(?:\s+mercer(?:'s)?(?:\s+favor)?)?$/.test(a)){if(n.mercer==="pending"){n.mercer="declined";text="You decline Mercer's request. He says he will continue without you.";changed=true}else text="Your answer to Mercer has already been recorded."}
else if(/^(?:follow|investigate)(?:\s+anna's)?\s+voice$/.test(a)||a==="follow anna's voice"){if(n.anna==="voice"){n.anna="stairs_discovered";if(!n.knownRooms.includes("basement"))n.knownRooms.push("basement");let route=link("church","basement");if(!n.knownRoutes.includes(route))n.knownRoutes.push(route);if(!n.clues.includes("service_stair"))n.clues.push("service_stair");text="The voice draws you to a service door. Beyond it, a narrow concrete stair descends beneath the church.";changed=true}else text="You already know where the service stairs lead."}
else if(/^(?:go|walk|head|move|climb|descend)(?:\s+to)?\s+(.+)$/.test(a)){let m=a.match(/^(?:go|walk|head|move|climb|descend)(?:\s+to)?\s+(.+)$/),dest=resolveRoom(m[1]);if(!dest)text="You cannot identify a reachable destination from here.";else if(dest===n.location)text="You are already here.";else if(!ROOMS[n.location].exits.includes(dest)||!n.knownRooms.includes(dest)||!n.knownRoutes.includes(link(n.location,dest)))text="You have not established a usable route there.";else if(dest==="archive"&&!n.access.includes("archive"))text="The archive is secured; you need access before entering.";else{n.location=dest;n.minute+=dest==="cemetery"?2:1;text="You make your way to "+ROOMS[dest].name+".";changed=true}}
else if(a==="look"||a==="look around")text="You take in "+ROOMS[n.location].name+" and its immediate surroundings.";
else text="You can attempt that, but nothing in the immediate surroundings provides a clear result.";
if(changed){n.committedActions.push(id);n.journal.push(text);n.lastOutcome={actionId:id,command,narration:text};}return result(n,text,changed)}
