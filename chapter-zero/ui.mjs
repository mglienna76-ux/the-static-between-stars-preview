import {continuity} from "./continuity.mjs";
import {narrationFor} from "./narrative.mjs";
import {OPENING} from "./opening.mjs";
import{freshState,migrate,step,ROOMS}from"./core.mjs";import{OBJECTS,PEOPLE}from"./content.mjs";
export const VIEWS=["Story","Dashboard","Map","Cases","People","Inventory","Journal"];
const KEY="sbs-chapter-zero-v1";let state,active="Story",lastText="Rain settles against the windows of St. Bartholomew's. Mercer's call waits for an answer. Somewhere within the church, a voice resembling Anna's breaks the silence.",serial=0;
const $=id=>document.getElementById(id);
function escapeText(x){return String(x??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
function restore(){try{const raw=localStorage.getItem(KEY);state=raw?migrate(JSON.parse(raw)):freshState();lastText=state.lastOutcome?.narration||lastText;$("save").textContent=raw?"Save restored":"New run"}catch(e){state=freshState();$("save").textContent="Previous save could not be restored; new run";} }
function persist(next){const json=JSON.stringify(next);localStorage.setItem(KEY,json);state=next;$("save").textContent="Saved"}
function clock(min){let h=Math.floor(min/60)%24,m=min%60;return(h%12||12)+":"+String(m).padStart(2,"0")+" "+(h>=12?"PM":"AM")}
export function viewMarkup(name,s,narration=""){const t=x=>escapeText(x),entries=a=>a.length?a.map(x=>'<div class="entry">'+t(x)+'</div>').join(""):'<p class="muted">Nothing recorded yet.</p>';
switch(name){
case"Story":return(s.committedActions.length===0?'<h3>'+t(OPENING.title)+'</h3>'+OPENING.paragraphs.map(p=>'<p>'+t(p)+'</p>').join(""):'<h2>Story</h2><p>'+t(narration||"The evening continues.")+'</p>')+(s.endingId?'<p><strong>Chapter ended: '+t(s.endingId)+'</strong></p>':'');
case"Dashboard":return'<h2>Brother Michael Malric</h2><p>Time: '+t(clock(s.minute))+'</p><p>THE STATIC — QUIET</p><p>Mercer: '+t(s.mercer)+'</p><p>Anna: '+t(s.anna)+'</p><p>Chapter: '+t(s.endingId||"in progress")+'</p>';
case"Map":return'<h2>Known Locations</h2>'+entries(s.knownRooms.map(k=>ROOMS[k]?.name||k))+'<p>Current: '+t(ROOMS[s.location]?.name)+'</p>';
case"Cases":return'<h2>Case Files</h2><p>Emily Vance · Visitations · Parish Records</p><h3>Established knowledge</h3>'+entries(continuity(s));
case"People":return'<h2>People</h2>'+entries(["Brother Michael Malric","Father Gabriel Reed","Sheriff Thomas Mercer (phone)","Anna — identity unverified"]);
case"Inventory":return'<h2>Inventory & Access</h2>'+entries(["Personal belongings remain with Malric",...s.access.map(x=>"Access: "+x)]);
case"Journal":return'<h2>Journal</h2>'+entries(s.journal);
default:return'<h2>Unknown view</h2>'}}
function render(){const s=state;$("clock").textContent="DAY -1 · "+clock(s.minute);$("place").textContent=ROOMS[s.location].name;for(const b of $("tabs").querySelectorAll("button"))b.setAttribute("aria-current",b.dataset.view===active?"page":"false");$("content").innerHTML=viewMarkup(active,s,lastText);$("command").disabled=!!s.endingId}
function setup(){restore();const nav=$("tabs");for(const name of VIEWS){const b=document.createElement("button");b.type="button";b.textContent=name;b.dataset.view=name;b.addEventListener("click",()=>{active=name;render()});nav.appendChild(b)}$("form").addEventListener("submit",e=>{e.preventDefault();const field=$("command"),command=field.value.trim();if(!command||state.endingId)return;try{const before=state,id="action-"+Date.now()+"-"+(++serial),r=step(state,command,id);if(r.changed)persist(r.state);lastText=r.changed?narrationFor(command,before,r.state,r.narration):r.narration;active="Story";field.value="";render()}catch(err){lastText="The action could not be completed. Your last saved state is intact.";active="Story";render()}});$("restart").addEventListener("click",()=>{if(!confirm("Start a new Chapter Zero game?"))return;localStorage.removeItem(KEY);state=freshState();lastText="A new evening begins at St. Bartholomew's.";active="Story";render()});render()}
if(typeof document!=="undefined")setup();
