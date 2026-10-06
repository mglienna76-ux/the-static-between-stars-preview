window.StaticSystem=(function(){
const LEVELS=["QUIET","STIRRING","RESONANT","PULLING","CONVERGENCE"];
function score(d,outcome,state){let n=d?.layer==="DIRECT"?55:d?.layer==="ADJACENT"?30:10;n+=Math.min(20,Number(d?.pressure||0)*5);if((outcome?.discoveries||[]).length)n+=12;if((outcome?.factsLearned||[]).length)n+=10;if((outcome?.evidenceAdded||[]).length)n+=12;if(outcome?.rollRequired)n+=5;if((state?.worldEscalation||0)>=60)n+=8;return Math.max(0,Math.min(100,n))}
function level(n){return n>=85?"CONVERGENCE":n>=65?"PULLING":n>=45?"RESONANT":n>=20?"STIRRING":"QUIET"}
function resolve(d,outcome,state){let n=score(d,outcome,state),next=level(n),reason="narrative_proximity",spike=false,silent=false;
let flags=state?.staticFlags||{};
if(flags.forceSilent){next="SILENT";silent=true;reason=flags.silentReason||"authored_silence"}
else if(flags.forceSpike){next=flags.spikeLevel||"PULLING";spike=true;reason=flags.spikeReason||"authored_spike"}
return{level:next,score:n,spike,silent,reason}}
function apply(state,r){state.staticState=r.level;state.staticScore=r.score;state.staticHistory=state.staticHistory||[];state.staticHistory.push({min:state.min,level:r.level,reason:r.reason});if(state.staticHistory.length>20)state.staticHistory.shift();if(state.staticFlags){delete state.staticFlags.forceSilent;delete state.staticFlags.forceSpike}return state}
return{LEVELS,score,level,resolve,apply}})();