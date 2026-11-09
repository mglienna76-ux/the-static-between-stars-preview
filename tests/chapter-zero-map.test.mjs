import assert from "node:assert/strict";
import {freshState,step,ROOMS,ROUTES} from "../chapter-zero/core.mjs";
import {viewMarkup} from "../chapter-zero/ui.mjs";

assert.deepEqual(Object.keys(ROOMS).sort(),["archive","basement","cemetery","church","rectory"]);
assert.deepEqual(Object.keys(ROUTES).sort(),["archive:basement","basement:church","cemetery:church","church:rectory"]);
for(const [key,route] of Object.entries(ROUTES)){
  assert.equal(key,[route.a,route.b].sort().join(":"),key+" is not canonical");
  assert(ROOMS[route.a].exits.includes(route.b),key+" missing forward exit");
  assert(ROOMS[route.b].exits.includes(route.a),key+" missing return exit");
  assert(Number.isInteger(route.minutes)&&route.minutes>0,key+" has invalid travel time");
}

let s=freshState();
let map=viewMarkup("Map",s);
assert(map.includes("St. Bartholomew&#39;s"));
assert(map.includes("Rectory"));
assert(map.includes("Cemetery"));
assert(!map.includes("Church Basement"));
assert(!map.includes("Parish Archive"));
assert(map.includes("St. Bartholomew&#39;s ↔ Rectory · 1 min"));
assert(map.includes("St. Bartholomew&#39;s ↔ Cemetery · 2 min"));

let r=step(s,"Follow Anna's voice","map-1");
assert(r.changed);
s=r.state;
map=viewMarkup("Map",s);
assert(map.includes("Church Basement"));
assert(map.includes("St. Bartholomew&#39;s ↔ Church Basement · 1 min"));
assert(!map.includes("Parish Archive"));

r=step(s,"Go downstairs","map-2");
assert.equal(r.state.location,"basement");
assert.equal(r.state.minute,1123);
s=r.state;

r=step(s,"Examine boxes","map-3");
assert(r.changed);
s=r.state;
map=viewMarkup("Map",s);
assert(map.includes("Parish Archive"));
assert(map.includes("Church Basement ↔ Parish Archive · 1 min"));

const blocked=step(s,"Go to archive","map-4");
assert.equal(blocked.changed,false);
assert.equal(blocked.state.location,"basement");
assert.deepEqual(blocked.state,s);

r=step(s,"Go upstairs","map-5");
assert.equal(r.state.location,"church");
assert.equal(r.state.minute,1124);
s=r.state;
r=step(s,"Talk to Gabriel about archive","map-6");
assert(r.changed);
assert(r.state.access.includes("archive"));
s=r.state;
r=step(s,"Go downstairs","map-7");
assert.equal(r.state.minute,1125);
s=r.state;
r=step(s,"Go to archive","map-8");
assert.equal(r.state.location,"archive");
assert.equal(r.state.minute,1126);
s=r.state;
r=step(s,"Go to basement","map-9");
assert.equal(r.state.location,"basement");
assert.equal(r.state.minute,1127);

const restored=structuredClone(r.state);
assert.deepEqual(restored.knownRooms,r.state.knownRooms);
assert.deepEqual(restored.knownRoutes,r.state.knownRoutes);
assert.deepEqual(restored.access,r.state.access);
console.log("CHAPTER ZERO MAP 39/39");
