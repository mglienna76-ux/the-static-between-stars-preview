// Chapter Zero verified story progression. No phrase-matched node awards.
export const NODES={
 M0:{requires:[],clues:[],event:"mercer_answered"},
 M1:{requires:["M0"],clues:[],event:"mercer_decided"},
 V0:{requires:[],clues:["service_stair"]},
 V1:{requires:["V0"],event:"basement_entered"},
 V2:{requires:["V1"],clues:["anna_observed"]},
 V3:{requires:["V2"],clues:["anna_tested"]},
 A0:{requires:[],clues:["water_damage"]},
 A1:{requires:["A0"],clues:["record_boxes"]},
 A2:{requires:["A1"],event:"archive_entered"},
 A3:{requires:["A2"],clues:["aqua_term"]},
 K1:{requires:["V2"],clues:["aqua_term"]},
 K2:{requires:["A3"],clues:["anna_tested"]}
};
export const ENDINGS={
 witness:{requires:["K1"],choice:"share",epilogue:"You share the evidence with Father Reed. He agrees to help you seek an independent witness. Outside attention now threatens whatever has been hiding here."},
 private:{requires:["V2"],choice:"keep",epilogue:"You keep the evidence close. No one else is asked to believe it tonight. You leave with more questions and fewer allies."},
 withdrawal:{requires:[],choice:"withdraw",epilogue:"You choose to step away. Mercer continues the search, and the church settles into uneasy silence. The world does not wait for your return."}
};
export function reconcileStory(state,events=[]){const s=structuredClone(state),eventSet=new Set(events),earned=[];s.storyNodes=s.storyNodes||[];for(const [id,node] of Object.entries(NODES)){if(s.storyNodes.includes(id))continue;if(!(node.requires||[]).every(r=>s.storyNodes.includes(r)))continue;if(node.event&&!eventSet.has(node.event))continue;if(node.clues&&!(node.clues.every(c=>s.clues.includes(c))))continue;if(!node.event&&!node.clues)continue;s.storyNodes.push(id);earned.push(id)}return{state:s,earned}}
export function endingEligible(s,key){const e=ENDINGS[key];return !!e&&(e.requires||[]).every(id=>s.storyNodes?.includes(id))}
