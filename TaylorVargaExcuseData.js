// Fandom-specific type
fantypes["Taylor Varga"] = {};
fantypes["Taylor Varga"].other_group = [
	{name:"the DWU",member:"a member of",supermembers:"superpowered members of",simple_name:"DWU"},
];
fantypes["Taylor Varga"].hero_group = [
	{name:"the Family",member:"a member of",supermembers:"superpowered members of",simple_name:"Family",article:"a"},
];
fantypes["Taylor Varga"].hero = [
	{name:"Saurial",article:"a",possessive:"her",item:"eggs",itemarticle:"some eggs",mask:"no",group:fantypes["Taylor Varga"].hero_group[0]},
	{name:"Raptaur",article:"a",possessive:"her",item:"hammer",itemarticle:"a hammer",mask:"no",group:fantypes["Taylor Varga"].hero_group[0]},
	{name:"Kaiju",article:"a",possessive:"her",item:"hardhat",itemarticle:"a hardhat",mask:"no",group:fantypes["Taylor Varga"].hero_group[0]},
	{name:"Ianthe",article:"an",possessive:"her",item:"onions",itemarticle:"some onions",mask:"no",group:fantypes["Taylor Varga"].hero_group[0]},
	{name:"Metis",article:"a",possessive:"her",item:"smirk",itemarticle:"a smirk",mask:"no",group:fantypes["Taylor Varga"].hero_group[0]},
	{name:"Umihebi",article:"an",possessive:"her",item:"probe",itemarticle:"a probe",mask:"no",group:fantypes["Taylor Varga"].hero_group[0]},
];
fantypes["Taylor Varga"].locations = [
	{name:"the BBFO office",at:"at",to:"to"},
];
fantypes["Taylor Varga"].restraint = [
	"EDM handcuffs",
];
fantypes["Taylor Varga"].substance = [
	"EDM",
	"Tabasco sauce",
];
fantypes["Taylor Varga"].swingthing = [
	{name:"Tac-Smack",article:"a"},
];
fantypes["Taylor Varga"].qualitymodifier = [
	{text:"Family-approved",article:"a"},
];
fantypes["Taylor Varga"].worldeffect = [
	"the Family's non-euclidian playspace",
];
fantypes["Taylor Varga"].masterstranger = [
	BS([{search:"hero",property:"name",filter:{type:"nomatch",property:"name",value:"Raptaur"}},"riding Raptaur through the city"]),
];
