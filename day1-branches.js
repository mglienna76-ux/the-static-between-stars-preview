window.DAY1_BRANCHES={
emily:{
start:"mercer_call",
nodes:{
mercer_call:{ways:["accept help","decline","ask questions","ignore call"],effects:{accept:["mercer_cooperation"],decline:["mercer_proceeds_alone"],ignore:["mercer_proceeds_alone"]}},
vance_visit:{requires:["knowledge:Mercer asks Malric to help with Emily Vance"],ways:["interview David","interview Caleb","observe home","ask to see Emily's room","leave"],effects:{}},
david_rachel:{requires:["David trust or direct Rachel question"],learn:["Emily claimed to see Rachel"],risks:["reinforcing apparition increases David vulnerability"]},
caleb_timeline:{requires:["Caleb trust"],learn:["Emily left near 11 PM","figure accompanied Emily"],unlocks:["caleb_wrongness"]},
caleb_wrongness:{requires:["Caleb trust>=1"],learn:["figure resembled Rachel but behaved incorrectly"],effects:["investigation+","visitations cross-link"]},
nora_path:{ways:["visit Gazette","meet at Maggie's","share evidence"],timeGate:1215,learn:["Redwater only after Nora discovers it"]},
clinic_path:{timeGate:1290,ways:["speak to Voss","bring physical evidence","ask about symptoms"],learn:["symptom cluster"]},
reservoir_path:{ways:["visit marina","inspect public shoreline","check notice board"],learn:["Emily marina connection only if established by evidence"]}}},
anna:{
first_contact:{trigger:"follow voice",stages:["hear voice","discover service door","discover stairs","choose descend","encounter figure"],neverAutoAdvance:true},
encounter:{ways:["speak","question","test memory","touch","photograph","pray","attack","leave","get Gabriel","ignore"],memory:true},
outcomes:{engage:"Anna learns which emotional tactics affect Malric.",test:"Malric may gain evidence of inconsistency.",touch:"Physicality established without proving identity.",photograph:"Ambiguous artifact can be shown to others.",pray:"No simple exorcism result.",leave:"Anna remains unresolved and can reappear later.",witness:"Anna may withdraw before witness arrives.",attack:"Manifestation destabilizes/withdraws; relationship changes."}},
midnight:{at:1440,effects:["freeze Day -1","preserve NPC/world state","generate Day -1 journal summary","prepare Day 0 handoff"],doesNotTrigger:"2:17 AM event"}};
