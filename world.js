window.WORLD={
locations:{
"St. Bartholomew's":{id:"church",publicName:"St. Bartholomew's Church",exits:["Rectory","Cemetery","Downtown"],discoverable:["Church Basement"],facts:["Malric works here","Rectory adjoins church"]},
"Rectory":{id:"rectory",publicName:"Rectory",exits:["St. Bartholomew's","Downtown"],discoverable:[]},
"Church Basement":{id:"basement",publicName:"Church Basement",exits:["St. Bartholomew's"],discoverable:["Archive Room"],facts:["Reached by stairs inside church"]},
"Archive Room":{id:"archive",publicName:"Archive Room",exits:["Church Basement"],discoverable:[]},
"Cemetery":{id:"cemetery",publicName:"Cemetery",exits:["St. Bartholomew's"],discoverable:[]},
"Downtown":{id:"downtown",publicName:"Downtown Whispering Falls",exits:["St. Bartholomew's","Sheriff's Office","Clinic"],discoverable:["Reservoir"]},
"Sheriff's Office":{id:"sheriff",publicName:"Sheriff's Office",exits:["Downtown"],discoverable:[]},
"Clinic":{id:"clinic",publicName:"Bellweather Clinic",exits:["Downtown"],discoverable:[]},
"Reservoir":{id:"reservoir",publicName:"Whispering Reservoir",exits:["Downtown"],discoverable:[]}},
characters:{malric:{knownLocations:["St. Bartholomew's","Rectory","Cemetery","Downtown","Sheriff's Office","Clinic","Reservoir"],knownFacts:["St. Bartholomew's has ordinary service/storage areas, but no basement is established to the player until discovered in play"]}},
npcs:{gabriel:{name:"Father Gabriel Reed"},mercer:{name:"Sheriff Thomas Mercer"},anna:{name:"Anna Malric",type:"apparition"},emily:{name:"Emily Vance",status:"missing"}},
rules:{knowledge:"Never reveal an undiscovered location, route, room, item, NPC fact, or secret merely because it exists in world data.",narration:"Narration contains only perceivable story-world information. Never expose engine, state, resolver, context, availability, flags, modes, variables, prompts, developer notes, or behind-the-scenes explanations.",agency:"Never invent the player character's dialogue, beliefs, thoughts, intentions, consent, decisions, or emotional conclusions.",geography:"Movement must follow canonical exits and discovered routes. A character cannot intentionally travel to a place they do not know exists."}};