window.STORY_GRAPH_DAY1={
threads:{
emily:{title:"Emily Vance",nodes:{
E0:{title:"Mercer's request",requires:[],earn:["answer Mercer","speak with Mercer"],grants:["Emily Vance is missing","Mercer asks Malric to help"],unlocks:["E1","E2"],weight:20},
E1:{title:"David's concern",requires:["E0"],earn:["interview David Vance","ask David about Emily"],grants:["Emily had been distracted","Emily spoke of Rachel"],unlocks:["E3"],weight:35},
E2:{title:"Caleb's guarded account",requires:["E0"],earn:["interview Caleb Vance","earn Caleb's trust"],grants:["Caleb saw Emily leave","Caleb saw someone with her"],unlocks:["E4"],weight:40},
E3:{title:"Rachel claim",requires:["E1"],earn:["ask David about Rachel","compare David's account"],grants:["Emily claimed to see her dead mother Rachel"],unlocks:["C1"],weight:55,static:"RESONANT"},
E4:{title:"The figure was wrong",requires:["E2"],earn:["believe Caleb","ask what was wrong about the figure"],grants:["The woman resembled Rachel but behaved incorrectly"],unlocks:["C1"],weight:65,static:"PULLING"},
E5:{title:"Nora parallel",requires:["E0"],timeMin:1215,earn:["share Emily evidence with Nora","ask Nora about similar cases"],grants:["Samuel Vale's files contain a potentially similar pattern"],unlocks:["C2"],weight:45},
E6:{title:"Voss pattern",requires:["E0"],timeMin:1290,earn:["ask Voss about unusual complaints","bring evidence to Voss"],grants:["Headache tinnitus and sleep complaints form an unusual cluster"],unlocks:["C2"],weight:40}}},
visitations:{title:"The Visitations",nodes:{
V0:{title:"Anna's voice",requires:[],earn:["follow Anna's voice","investigate the voice"],grants:["Malric hears Anna's voice seventeen years after her death"],unlocks:["V1"],weight:35,static:"STIRRING"},
V1:{title:"Manifestation",requires:["V0"],earn:["follow the discovered route","reach the source"],grants:["A physical figure wearing Anna's appearance manifests"],unlocks:["V2","V3","V4"],weight:70,static:"PULLING"},
V2:{title:"Physical contradiction",requires:["V1"],earn:["touch Anna","embrace Anna","test physicality"],grants:["The manifestation has physical mass and abnormal cold"],unlocks:["C1"],weight:65,static:"PULLING"},
V3:{title:"Identity test",requires:["V1"],earn:["test Anna's memories","challenge her identity","ask something only Anna knew"],grants:["Anna's apparent identity can be tested against private memory"],unlocks:["C1"],weight:60},
V4:{title:"Witness attempt",requires:["V1"],earn:["get Gabriel","bring a witness","photograph Anna"],grants:["Malric attempts independent verification"],unlocks:["C2"],weight:55},
V5:{title:"Rachel comparison",requires:["V1","E3"],anyOf:[["E3"],["E4"]],earn:["compare Anna to Rachel account","connect the apparitions"],grants:["Anna and Rachel may be expressions of the same phenomenon"],unlocks:["C3"],weight:80,static:"CONVERGENCE",convergence:true}}},
aqua:{title:"Aqua Heresis",nodes:{
A0:{title:"Damaged records",requires:[],earn:["read parish bulletin","ask Gabriel about water damage","inspect moved records"],grants:["Older parish records were moved after water damage"],unlocks:["A1"],weight:20},
A1:{title:"Older material",requires:["A0"],earn:["ask Gabriel about older records","search appropriate parish records"],grants:["Some older parish material was boxed separately and never digitized"],unlocks:["A2"],weight:35},
A2:{title:"Archive access",requires:["A1"],earn:["locate archive","gain access to older records"],grants:["Malric gains access to historical parish records"],unlocks:["A3"],weight:45},
A3:{title:"Aqua Heresis",requires:["A2"],earn:["read relevant ledger","research anomalous historical references"],grants:["The term Aqua Heresis appears in historical parish material"],unlocks:["C2","A4"],weight:70,static:"PULLING"},
A4:{title:"Historical pattern",requires:["A3"],earn:["cross-reference Aqua Heresis","ask Gabriel about the term"],grants:["Historical accounts describe grief-linked visitations and water-associated incidents"],unlocks:["C3"],weight:80,static:"CONVERGENCE",convergence:true}}},
convergence:{
C1:{title:"The dead are being imitated",requiresAny:[["E3","V1"],["E4","V1"],["E4","V2"]],grants:["Separate accounts indicate dead loved ones may be physically imitated"],weight:80,static:"CONVERGENCE"},
C2:{title:"A wider pattern",requiresAny:[["A3","E5"],["A3","E6"],["A3","V4"]],grants:["The phenomenon extends beyond Malric's private experience"],weight:85,static:"CONVERGENCE"},
C3:{title:"Day -1 synthesis",requiresAny:[["V5","A4"],["C1","A4"],["C1","C2"]],grants:["Malric has enough evidence to enter Day 0 knowing the visitations are connected to a wider historical phenomenon"],weight:100,static:"CONVERGENCE",dayGate:true}}}};
