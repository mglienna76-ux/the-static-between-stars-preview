window.DAY1_CONTENT={
locations:{
"St. Bartholomew's":{summary:"A century-old parish church of dark timber, pale stone and practical additions accumulated over generations.",perceivable:["sanctuary","sacristy corridor","rectory door","main entrance","service corridor"],interactables:["parish bulletin","sacristy phone","service doors"]},
"Rectory":{summary:"A modest attached residence and parish office.",perceivable:["office desk","telephone","kitchen","hall to church"],interactables:["telephone","parish calendar","desk"]},
"Church Basement":{summary:"A utilitarian lower level reached by a narrow concrete stair.",perceivable:["utility sink","storage shelves","old parish boxes","water stains"],interactables:["shelves","boxes","utility sink"],discoverable:["Archive Room"]},
"Archive Room":{summary:"A cramped records room containing parish registers, diocesan correspondence and older material never digitized.",perceivable:["record shelves","work table","water-damaged ledgers"],interactables:["ledgers","files","work table"]},
"Cemetery":{summary:"The parish cemetery rises behind the church beneath old maples.",perceivable:["family plots","maintenance shed","church rear wall"],interactables:["grave markers","shed door"]},
"Downtown":{summary:"Whispering Falls' compact downtown is still active in the wet evening.",perceivable:["Main Street","storefronts","Sheriff's Office","Maggie's Diner","Gazette"],interactables:["public phone map","notice board"]},
"Sheriff's Office":{summary:"A small county law-enforcement office serving town and surrounding roads.",perceivable:["front desk","dispatch room","interview room"],interactables:["front desk","public notices"]},
"Maggie's Diner":{summary:"Warm light, coffee and grilled onions make Maggie's feel insulated from the rain outside.",perceivable:["counter","booths","community board","pay phone"],interactables:["community board","pay phone","menu"]},
"Gazette":{summary:"The Gazette occupies a narrow storefront crowded with filing cabinets and old editions.",perceivable:["newsroom","archive cabinets","Nora's desk"],interactables:["public editions","clipping index"]},
"Clinic":{summary:"Bellweather Clinic is a small outpatient facility with a busier-than-usual waiting room.",perceivable:["reception","waiting room","exam corridor"],interactables:["reception desk","public health flyers"]},
"Vance Residence":{summary:"A two-story family home made strange by police cars, unanswered questions and Emily's absence.",perceivable:["front porch","living room","hallway","stairs"],interactables:["family photographs","coat rack"],restricted:["Emily's bedroom"]},
"Reservoir":{summary:"The reservoir lies north of town behind wet trees and a low marina complex.",perceivable:["marina lot","dark water","boat slips","service road"],interactables:["marina notice board","shoreline"]}},
npcs:{
gabriel:{name:"Father Gabriel Reed",motivation:"Protect parishioners without feeding panic.",knows:["Emily is missing","Malric received Mercer's call","older parish records suffered water damage"],withholds:["Aqua Heresis material unless given reason to discuss it"],tone:"warm, observant, increasingly worried"},
mercer:{name:"Sheriff Thomas Mercer",motivation:"Find Emily and keep the case grounded.",knows:["Emily is missing","her car has not been found yet","David reports behavioral changes","Caleb is withholding something"],withholds:["details of an older Blackridge incident"],tone:"direct, tired, practical"},
david:{name:"David Vance",motivation:"Get Emily home.",knows:["Emily had been distracted","Emily mentioned seeing her mother Rachel","Emily left late"],withholds:["Rachel detail unless trust or direct questioning"],tone:"frightened, defensive"},
caleb:{name:"Caleb Vance",motivation:"Protect Emily and avoid being dismissed.",knows:["Emily believed she saw Rachel","Caleb saw someone with Emily","Emily left around 11 PM"],withholds:["identity/details of figure until he believes Malric will listen"],tone:"guarded, precise"},
maggie:{name:"Maggie Donnelly",motivation:"Keep people fed and connected.",knows:["local gossip","who has been through diner","Emily sometimes met friends there"],withholds:[],tone:"plainspoken, perceptive"},
nora:{name:"Nora Vale",motivation:"Understand what her father Samuel was investigating.",knows:["Samuel kept Blackridge notes","Emily disappearance resembles something in Samuel's files"],withholds:["Redwater until she discovers it at 8:15 PM"],tone:"skeptical, relentless"},
voss:{name:"Dr. Elena Voss",motivation:"Explain the unusual symptoms medically.",knows:["headache and tinnitus complaints are rising","patients report sleep disruption"],withholds:["patient-identifying information"],tone:"clinical, compassionate"}},
threads:{
emily:{title:"Emily Vance",discoveries:["Mercer requests Malric's help","David reports behavioral changes","Caleb saw Emily leave","Rachel apparition claim","Emily's late departure"]},
visitations:{title:"The Visitations",discoveries:["Anna's voice","physical manifestation","private knowledge","physical contact"]},
aqua:{title:"Aqua Heresis",discoveries:["term in archive","historical references","Gabriel's knowledge"]}}
};