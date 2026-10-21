// Chapter Zero canonical objects, conversations, and verified evidence.
export const OBJECTS={
 church:{
 bulletin:{aliases:["parish bulletin","bulletin"],read:"ST. BARTHOLOMEW'S PARISH. Sunday Mass: 8:00 AM and 10:30 AM. Confession: Saturday, 3:30–4:30 PM. Food pantry collection this Friday. Cemetery cleanup Saturday at 9:00 AM. Father Gabriel Reed thanks volunteers for moving older parish records following last month's water leak.",clue:"water_damage"},
 phone:{aliases:["sacristy phone","phone"],examine:"A corded telephone beside a handwritten list of parish numbers."},
 service_door:{aliases:["service door","service doors"],examine:"A plain wooden service door near the rear corridor."},
 stairs:{aliases:["stairs","stairway","service stairs"],examine:"A narrow concrete stair descends into the church's lower level.",requires:"service_stair"},
 pews:{aliases:["pews","pew"],examine:"Rows of worn wooden pews face the altar."}},
 rectory:{
 calendar:{aliases:["parish calendar","calendar"],read:"The calendar lists Masses, confession, a food pantry collection, cemetery cleanup and a diocesan records call."},
 telephone:{aliases:["telephone","phone"],examine:"A telephone rests beside a pad for messages."},
 desk:{aliases:["desk","gabriel's desk"],examine:"Parish correspondence and administrative paperwork are arranged across the desk."},
 correspondence:{aliases:["correspondence","letters"],read:"Routine diocesan correspondence and parish notices. Nothing here establishes an extraordinary claim."},
 keys:{aliases:["keys","parish keys"],examine:"A ring of labeled parish keys remains under Gabriel's control."}},
 basement:{
 sink:{aliases:["utility sink","sink"],examine:"A stained utility sink beneath exposed plumbing."},
 shelves:{aliases:["shelves","storage shelves"],examine:"Metal shelves hold cleaning supplies and stacked cartons."},
 boxes:{aliases:["parish boxes","moved parish boxes","boxes"],examine:"Water-stained boxes contain older parish paperwork.",clue:"record_boxes"},
 stains:{aliases:["water stains","stains"],examine:"Discolored tide marks show where water once stood.",clue:"water_damage"},
 archive_door:{aliases:["archive door","door to archive"],examine:"A secured door leads into the parish records room."}},
 archive:{
 ledgers:{aliases:["ledgers","old ledgers","ledger"],read:"An older parish ledger includes the term Aqua Heresis among historical references to water and bereavement.",clue:"aqua_term"},
 register:{aliases:["damaged register","register"],examine:"A water-damaged register has swollen pages and illegible sections."},
 letters:{aliases:["diocesan correspondence","letters"],read:"The correspondence concerns records preservation and parish administration."},
 table:{aliases:["work table","table"],examine:"A work table holds blotting paper and a desk lamp."}},
 cemetery:{
 markers:{aliases:["grave markers","markers","gravestones"],read:"Names and dates mark generations of parish burials."},
 wall:{aliases:["rear church wall","church wall"],examine:"Weathered masonry faces the cemetery grounds."},
 shed:{aliases:["maintenance shed","shed door"],examine:"A locked maintenance shed contains groundskeeping equipment."}}
};
export const PEOPLE={gabriel:{aliases:["father reed","father gabriel reed","gabriel","father gabriel"],rooms:["church","rectory"],topics:{records:"Some older parish records were moved after water damage. I can show you the boxes if you wish.",anna:"I cannot say what you heard. Tell me exactly what happened, and we can examine it together.",archive:"The archive is secured. I can grant supervised access if you explain what you hope to find.",default:"Father Reed listens carefully and asks what concerns you."}}};
export function identifyObject(room,phrase){let q=String(phrase||"").toLowerCase().replace(/^(?:the|a)\s+/,"").trim();return Object.entries(OBJECTS[room]||{}).find(([id,o])=>id===q||o.aliases.some(x=>x===q))||null}
export function identifyPerson(phrase){let q=String(phrase||"").toLowerCase().replace(/^(?:to|with|the)\s+/,"").trim();return Object.entries(PEOPLE).find(([id,p])=>id===q||p.aliases.includes(q))||null}
export function evidenceFor(action,room,object){if(object?.clue&&((action==="read"&&object.read)||(action==="examine"&&object.examine)||(action==="search"&&object.examine)))return object.clue;return null}
