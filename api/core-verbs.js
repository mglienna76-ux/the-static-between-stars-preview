export function coreVerb(raw,scene={}){let s=String(raw||"").trim(),a=s.toLowerCase(),m;
const exact=(re,verb)=>{let x=a.match(re);return x?{verb,target:(x[1]||"").trim()||null,raw:s,deterministic:true}:null};
return exact(/^(?:look|l|look around|observe|survey)$/,"LOOK")||
exact(/^(?:examine|inspect|x)\s+(.+)$/,"EXAMINE")||
exact(/^(?:search|search for|look for)\s*(.*)$/,"SEARCH")||
exact(/^(?:go|walk|head|move|travel)(?:\s+to)?\s+(.+)$/,"GO")||
exact(/^(?:enter|go in|go inside)(?:\s+(.+))?$/,"ENTER")||
exact(/^(?:exit|leave|go out|get out)(?:\s+(.+))?$/,"EXIT")||
exact(/^(?:open)\s+(.+)$/,"OPEN")||
exact(/^(?:close|shut)\s+(.+)$/,"CLOSE")||
exact(/^(?:take|get|pick up|grab)\s+(.+)$/,"TAKE")||
exact(/^(?:drop|put down)\s+(.+)$/,"DROP")||
exact(/^(?:use)\s+(.+)$/,"USE")||
exact(/^(?:talk to|speak to|talk with|speak with)\s+(.+)$/,"TALK")||
exact(/^(?:ask)\s+(.+)$/,"ASK")||
exact(/^(?:wait|wait here|stay put)(?:\s+(.*))?$/,"WAIT")||
exact(/^(?:rest|sit and rest|go to sleep|sleep)$/,"REST")||
exact(/^(?:inventory|inv|i)$/,"INVENTORY")||
exact(/^(?:map)$/,"MAP")||
exact(/^(?:journal|log)$/,"JOURNAL")||
exact(/^(?:continue|keep going|go on|proceed|follow it|follow the voice)$/,"CONTINUE")||
exact(/^(?:go )?(upstairs|downstairs|up|down|inside|outside)$/,"GO")||
null}
