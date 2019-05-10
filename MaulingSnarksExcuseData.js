// Fandom-specific type
fantypes["Mauling Snarks"] = {};
fantypes["Mauling Snarks"].hero = [
	{name:"Maul",article:"a",possessive:"her",item:["maul","wok","entrenching tool","sword","stop sign","manhole cover"],itemarticle:["a maul","a wok","an entrenching tool","a sword","a stop sign","a manhole cover"],group:basetypes.hero_group[1]},
	{name:"Hulder",article:"a",possessive:"her",item:"chocolate",itemarticle:"some chocolate",group:basetypes.hero_group[1]},
	{name:"Mycroft",article:"a",possessive:"her",item:["laptop","burner phone"],itemarticle:["a laptop","a burner phone"],group:basetypes.hero_group[1]},
	{name:"Countdown",article:"a",possessive:"her",item:BS([{search:"bomb_property",property:"text"},"bomb"]),itemarticle:BS([{search:"bomb_property",property:"text",wantarticle:true},"bomb"]),group:basetypes.hero_group[0]},
	{name:"Reknit",article:"a",possessive:"his",item:"pensieve",itemarticle:"a pensieve",group:basetypes.hero_group[0]}, //the pensieve is the holoprojector with all his best memories with Uber :(
	{name:"Wrench Wraith",article:"a",possessive:"her",item:["tank","wrench","jet-ski","truck"],itemarticle:["a tank","a wrench","a jet-ski","a truck"],group:basetypes.hero_group[0]},
];
fantypes["Mauling Snarks"].villain = [
	{name:"Ekaki",article:"an",possessive:"her",item:["paintbrush","paint"],itemarticle:["a paintbrush","some paint"],group:basetypes.villain_group[1]},
];
fantypes["Mauling Snarks"].other_parahuman = [
	{name:"Weathergirl",article:"a",possessive:"her",item:"music player",itemarticle:"a music player",group:undefined},
];
fantypes["Mauling Snarks"].contessa = [
	"an unnaturally competent woman in a bathing suit and fedora",
];
fantypes["Mauling Snarks"].swingthing = [
	{name:"maul",article:"a"},
	{name:"wok",article:"a"},
	{name:"entrenching tool",article:"an"},
	{name:"stop sign",article:"a"},
	{name:"bastard sword",article:"a"},
	{name:"manhole cover",article:"a"},
	{name:"tinkertech railgun",article:"a",verb:["swinging","aiming","firing"]},
];
fantypes["Mauling Snarks"].thingy = [
	{name:"rose bush",article:"a"},
	{name:"moped",article:"a"},
	{name:"tablet",article:"a"},
	{name:"visor",article:"a"},
	{name:"scanning machine",article:"a"},
	{name:"holoprojector",article:"a"},
];
fantypes["Mauling Snarks"].masterstranger = [
	BS(["a demonic duck playing announcer for",{search:"hero_group",property:"name",append:"'s"},"PR event"]),
];
fantypes["Mauling Snarks"].bomb_property = [
	{text:"Containment Foam",article:"a"},
	{text:"anti-time-loop",article:"an"},
];
fantypes["Mauling Snarks"].professional = [
	"parahuman psychologists",
	"weather forecasters",
];
fantypes["Mauling Snarks"].someheroproblemlist = [
	"is ridiculously wealthy",
	"is recovering in the hospital, AGAIN",
	"ate an entire Challenger",
	"earned another recruitment bonus",
	"got a gift basket from Squad Leader Tagg",
	"killed The Butcher for real",
	"is rebranding as an anti-hero",
];
//from Mauling Canon.
fantypes["Mauling Snarks"].endbringer = [
	[1,{name:BS([{search:"bombardname"}])},"Barrage/FSM"],
];
fantypes["Mauling Snarks"].bombardname = [
	[95,"Barrage"],
	[5,"the Flying Spaghetti Monster"],
];
