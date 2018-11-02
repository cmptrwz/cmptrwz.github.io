// Fandom-specific type
fantypes["Constellations"] = {};
fantypes["Constellations"].hero_group = [
	{name:"Brushstroke and Good Dog",simple_name:"Brushstroke",article:"a"},
];
fantypes["Constellations"].hero = [
	{name:"Brushstroke",article:"a",possessive:"her",item:"flute",itemarticle:"a flute",group:fantypes["Constellations"].hero_group[0]},
	{name:"Good Dog",article:"a",possessive:"her",item:"sake",itemarticle:"some sake",mask:"no",group:fantypes["Constellations"].hero_group[0]},
	{name:"Chessman",article:"a",possessive:"his",item:"Chimera miniature",itemarticle:"a Chimera miniature",group:basetypes.hero_group[0]},
];
fantypes["Constellations"].professional = [
	"shrine maidens",
	"grandmothers",
	"good dogs",
	"ex-gang-members",
];
fantypes["Constellations"].other_group = [
	{name:BS([{search:"waka"}]),displayname:"Waka",simple_name:"Waka",pronoun:"him"}, // No members or supermembers intentionally here
];
fantypes["Constellations"].waka = [
	"a mysterious man with a phony French accent",
	"a mysterious man with a French accent and a lightsaber",
	"a mysterious man with a French accent and wings on his hat",
];
fantypes["Constellations"].locations = [
	{name:"Pawprint Shrine",at:"at",to:"to"},
	{name:"Coil's Bond Villain Barbie Dream House",at:"in",to:"into"}, //TODO: remove if you add this to basetypes
	{name:"the side of the Medhall building",at:"on",to:"onto"},
];
fantypes["Constellations"].thingy = [
	{name:"paintbrush",article:"a"},
	{name:"paint set",article:"a"},
	{name:"mini-fridge",article:"a"},
	{name:BS([{search:"hero",property:"name",saveas:"tmini",notmatch:"theme"},"tabletop miniature"])},
];
fantypes["Constellations"].thingytrait = [
	{text:"specially-painted",article:"a"},
	{text:"demon-repelling",article:"a"},
];
fantypes["Constellations"].activity = [
	BS(["covering",{search:"locations",property:"name"},"in paint"]),
	BS(["throwing an impromptu block party",{search:"locations",property:"at",saveas:"loc"},{saved:"loc",property:"name"}]),
];
fantypes["Constellations"].clothing = [
	"a kimono",
	"a paint-splattered apron",
	"a Local 433 jacket",
	"the only shirt Lung ever owned",
];
fantypes["Constellations"].swingthing = [
	{name:"giant paintbrush",article:"a"},
	{name:"string of rosary beads",article:"a"},
	{name:"invisible cutting tool or something",article:"an"},
	{name:"lightning bolt",article:"a"},
];
fantypes["Constellations"].crittertrait = [
	{text:"paint-covered",article:"a"},
	{text:"monstrous",article:"a"},
	{text:"holy",article:"a"},
	{text:"solar-powered",article:"a"},
];
fantypes["Constellations"].substance = [
	"ink",
	"paint",
	"concentrated solar energy",
];
fantypes["Constellations"].thirdparty = [
	"my local gang boss",
	"my canine archnemesis",
];
fantypes["Constellations"].personcrimepast = [
	"given a friendship bracelet by",
	"sold alcohol without a license by",
	"tripped by",
	"bitten by",
	"sneezed on by",
	"invited to tea by",
];
fantypes["Constellations"].propertycrimepast = [
	"tastefully but illegally painted",
	"peed on",
	"repurposed as an Ofuda",
	"used as a weapon",
];
fantypes["Constellations"].qualitymodifier = [
	{text:"commissioned",article:"a"},
];
fantypes["Constellations"].number = [
	"eight",
	"several hundred",
];
fantypes["Constellations"].unit = [
	"doggy-bags",
	"trees-full",
];
fantypes["Constellations"].time = [
	"the next Cherry Blossom festival",
	"the day Lung finally wears a shirt",
	"the day my next credit card bill is paid",
];
fantypes["Constellations"].restraint = [
	"flash-baked concrete shoes",
];
fantypes["Constellations"].worldeffect = [
	"lightning bolts from cloudless skies",
	"extra sunlight over the entire city",
	"ridiculous coincidences",
	BS(["blooming flowers wherever",{saved:"triggered",property:"possessive"},"feet touch"]),
	"gusts of wind at opportune moments",
	"spontaneous block parties",
	"fireworks out of thin air",
	"paint that repairs damaged structures",
];
fantypes["Constellations"].hair = [
	"white-haired",
];
fantypes["Constellations"].untypedpowers = [
	"of the Sun",
];
fantypes["Constellations"].power = [
	{pc:"master",text:BS(["to compel people to scratch behind",{saved:"triggered",property:"possessive"},"ears"])},
	{pc:"master",text:BS(["to compel people to rub",{saved:"triggered",property:"possessive"},"belly"])},
];
fantypes["Constellations"].someheroproblemlist = [
	"stole someone's bike",
	"intends to create a second Lord's Market",
	"lost Sane Table privileges for the rest of the year",
	"was put through Master/Stranger protocols again",
];
fantypes["Constellations"].writtenwork = [
	"a ceremony guide",
	"a cultural expose",
	"an event advertisement",
];
fantypes["Constellations"].food = [
	"melon bread",
	"meatloaf",
	"rice",
	"matcha cake",
];
fantypes["Constellations"].masterstranger = [
	BS([{search:"hero",property:"name",filter:{type:"nomatch",property:"name",value:"Miss Militia"}},"drunk-driving Miss Militia's bike"]),
];
