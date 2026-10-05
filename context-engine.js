window.ContextEngine=(function(){
function fresh(){return{activeNpc:null,lastPerson:null,lastObject:null,lastLocation:null,topic:null,lastAction:null,lastTarget:null,pendingThreshold:null,visibleObjects:[],turns:[]}}
function ensure(s){if(!s.context)s.context=fresh();return s.context}
function remember(s,action,outcome){let c=ensure(s),scene=s.scene||{};c.activeNpc=scene.mode==="CONVERSATION"?scene.npc:c.activeNpc;if(scene.npc)c.lastPerson=scene.npc;if(scene.subject)c.topic=scene.subject;if(outcome&&outcome.location&&outcome.location!==s.loc)c.lastLocation=outcome.location;if(outcome&&outcome.scene&&outcome.scene.subject)c.topic=outcome.scene.subject;c.lastAction=action;if(outcome&&outcome.core&&outcome.core.target)c.lastTarget=outcome.core.target;c.turns.push({action,person:c.lastPerson,object:c.lastObject,topic:c.topic});if(c.turns.length>12)c.turns.shift();return c}
function bind(raw,s){let c=ensure(s),a=String(raw||"").trim(),low=a.toLowerCase();let out={raw:a,bound:a,bindings:{},confidence:1};
if(/\b(her|she)\b/.test(low)&&c.activeNpc){out.bindings.person=c.activeNpc;out.bound=a.replace(/\bher\b/gi,c.activeNpc).replace(/\bshe\b/gi,c.activeNpc)}
if(/\b(him|he)\b/.test(low)&&c.lastPerson){out.bindings.person=c.lastPerson;out.bound=out.bound.replace(/\bhim\b/gi,c.lastPerson).replace(/\bhe\b/gi,c.lastPerson)}
if(/\b(it|that)\b/.test(low)&&c.lastObject){out.bindings.object=c.lastObject;out.bound=out.bound.replace(/\bit\b/gi,c.lastObject).replace(/\bthat\b/gi,c.lastObject)}
if(/\bthere\b/.test(low)&&c.lastLocation){out.bindings.location=c.lastLocation;out.bound=out.bound.replace(/\bthere\b/gi,c.lastLocation)}
if(/^(why|how|where|when|what|who)\b/i.test(a)&&c.activeNpc){out.bindings.person=c.activeNpc;out.bindings.conversation=true}
if(/^(continue|keep going|go on|proceed)$/i.test(a)&&c.pendingThreshold){out.bindings.threshold=c.pendingThreshold}
if(/^(do (it|that) again|again|repeat)$/i.test(a)&&c.lastAction){out.bound=c.lastAction;out.bindings.repeat=true}
return out}
function setVisible(s,items){ensure(s).visibleObjects=Array.from(new Set(items||[]))}
function setObject(s,obj){ensure(s).lastObject=obj}
function threshold(s,x){ensure(s).pendingThreshold=x}
function clearThreshold(s){ensure(s).pendingThreshold=null}
return{fresh,ensure,remember,bind,setVisible,setObject,threshold,clearThreshold}})();