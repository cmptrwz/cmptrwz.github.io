generate_modes = [
	{name:'Points',base:'base_points',button:'Generate point event',intro:'A few moments ago...'},
	{name:'Bulk Points',base:'base_points',button:'Generate bulk point events',bulk:10,search:true},
];

basetypes.base_points = [
	BS([{search:"staff",saveas:"staff",property:"name",append:":"},{search:"student",saveas:"student"},{search:"fromto"}]),
];

basetypes.staff = [
	{name:"Snape",fromprop:["house","SnapeFrom"],toprop:["house","SnapeTo"]},
	{name:"McGonagall"},
	{name:"Dumbledore"},
	{name:"Flitwick"},
	{name:"Sprout"},
	{name:"Hagrid"},
];

// This probably has names it shouldn't. I don't care right now. :p
basetypes.student = [
	{name:"Alicia Spinnet",article:"a",possessive:"her",house:"Gryffindor",SnapeTo:"Slytherin"},
	{name:"Andrew Kirke",article:"a",possessive:"his",house:"Gryffindor",SnapeTo:"Slytherin"},
	{name:"Angelina Johnson",article:"a",possessive:"her",house:"Gryffindor",SnapeTo:"Slytherin"},
	{name:"Colin Creevey",article:"a",possessive:"his",house:"Gryffindor",SnapeTo:"Slytherin"},
	{name:"Cormac McLaggen",article:"a",possessive:"his",house:"Gryffindor",SnapeTo:"Slytherin"},
	{name:"Dean Thomas",article:"a",possessive:"his",house:"Gryffindor",SnapeTo:"Slytherin"},
	{name:"Demelza Robins",article:"a",possessive:"her",house:"Gryffindor",SnapeTo:"Slytherin"},
	{name:"Dennis Creevey",article:"a",possessive:"his",house:"Gryffindor",SnapeTo:"Slytherin"},
	{name:"Euan Abercrombie",article:"a",possessive:"his",house:"Gryffindor",SnapeTo:"Slytherin"},
	{name:"Fred Weasley",article:"a",possessive:"his",house:"Gryffindor",SnapeTo:"Slytherin"},
	{name:"George Weasley",article:"a",possessive:"his",house:"Gryffindor",SnapeTo:"Slytherin"},
	{name:"Ginny Weasley",article:"a",possessive:"her",house:"Gryffindor",SnapeTo:"Slytherin"},
	{name:"Harry Potter",article:"a",possessive:"his",house:"Gryffindor",SnapeTo:"Slytherin"},
	{name:"Hermione Granger",article:"a",possessive:"her",house:"Gryffindor",SnapeTo:"Slytherin"},
	{name:"Jack Sloper",article:"a",possessive:"his",house:"Gryffindor",SnapeTo:"Slytherin"},
	{name:"Jimmy Peakes",article:"a",possessive:"his",house:"Gryffindor",SnapeTo:"Slytherin"},
	{name:"Katie Bell",article:"a",possessive:"her",house:"Gryffindor",SnapeTo:"Slytherin"},
	{name:"Lavender Brown",article:"a",possessive:"her",house:"Gryffindor",SnapeTo:"Slytherin"},
	{name:"Lee Jordan",article:"a",possessive:"his",house:"Gryffindor",SnapeTo:"Slytherin"},
	{name:"Mary Macdonald",article:"a",possessive:"her",house:"Gryffindor",SnapeTo:"Slytherin"},
	{name:"Natalie McDonald",article:"a",possessive:"her",house:"Gryffindor",SnapeTo:"Slytherin"},
	{name:"Neville Longbottom",article:"a",possessive:"his",house:"Gryffindor",SnapeTo:"Slytherin"},
	{name:"Oliver Wood",article:"a",possessive:"his",house:"Gryffindor",SnapeTo:"Slytherin"},
	{name:"Parvati Patil",article:"a",possessive:"her",house:"Gryffindor",SnapeTo:"Slytherin"},
	{name:"Percy Weasley",article:"a",possessive:"his",house:"Gryffindor",SnapeTo:"Slytherin"},
	{name:"Ritchie Coote",article:"a",possessive:"his",house:"Gryffindor",SnapeTo:"Slytherin"},
	{name:"Romilda Vane",article:"a",possessive:"her",house:"Gryffindor",SnapeTo:"Slytherin"},
	{name:"Ron Weasley",article:"a",possessive:"his",house:"Gryffindor",SnapeTo:"Slytherin"},
	{name:"Seamus Finnigan",article:"a",possessive:"his",house:"Gryffindor",SnapeTo:"Slytherin"},
	{name:"Cedric Diggory",article:"a",possessive:"his",house:"Hufflepuff"},
	{name:"Eleanor Branstone",article:"a",possessive:"her",house:"Hufflepuff"},
	{name:"Eloise Midgeon",article:"a",possessive:"her",house:"Hufflepuff"},
	{name:"Ernie Macmillan",article:"a",possessive:"his",house:"Hufflepuff"},
	{name:"Hannah Abbott",article:"a",possessive:"her",house:"Hufflepuff"},
	{name:"Justin Finch-Fletchley",article:"a",possessive:"his",house:"Hufflepuff"},
	{name:"Kevin Whitby",article:"a",possessive:"his",house:"Hufflepuff"},
	{name:"Laura Madley",article:"a",possessive:"her",house:"Hufflepuff"},
	{name:"Nymphadora Tonks",article:"a",possessive:"her",house:"Hufflepuff"},
	{name:"Owen Cauldwell",article:"a",possessive:"his",house:"Hufflepuff"},
	{name:"Rose Zeller",article:"a",possessive:"her",house:"Hufflepuff"},
	{name:"Susan Bones",article:"a",possessive:"her",house:"Hufflepuff"},
	{name:"Zacharias Smith",article:"a",possessive:"his",house:"Hufflepuff"},
	{name:"Anthony Goldstein",article:"a",possessive:"his",house:"Ravenclaw"},
	{name:"Cho Chang",article:"a",possessive:"her",house:"Ravenclaw"},
	{name:"Eddie Carmichael",article:"a",possessive:"his",house:"Ravenclaw"},
	{name:"Lisa Turpin",article:"a",possessive:"her",house:"Ravenclaw"},
	{name:"Luna Lovegood",article:"a",possessive:"her",house:"Ravenclaw"},
	{name:"Mandy Brocklehurst",article:"a",possessive:"her",house:"Ravenclaw"},
	{name:"Marcus Belby",article:"a",possessive:"his",house:"Ravenclaw"},
	{name:"Marietta Edgecombe",article:"a",possessive:"her",house:"Ravenclaw"},
	{name:"Michael Corner",article:"a",possessive:"his",house:"Ravenclaw"},
	{name:"Orla Quirke",article:"a",possessive:"her",house:"Ravenclaw"},
	{name:"Padma Patil",article:"a",possessive:"her",house:"Ravenclaw"},
	{name:"Penelope Clearwater",article:"a",possessive:"her",house:"Ravenclaw"},
	{name:"Roger Davies",article:"a",possessive:"his",house:"Ravenclaw"},
	{name:"Stewart Ackerley",article:"a",possessive:"his",house:"Ravenclaw"},
	{name:"Terry Boot",article:"a",possessive:"his",house:"Ravenclaw"},
	{name:"Adrian Pucey",article:"a",possessive:"his",house:"Slytherin",SnapeFrom:"Gryffindor"},
	{name:"Blaise Zabini",article:"a",possessive:"his",house:"Slytherin",SnapeFrom:"Gryffindor"},
	{name:"Draco Malfoy",article:"a",possessive:"his",house:"Slytherin",SnapeFrom:"Gryffindor"},
	{name:"Graham Pritchard",article:"a",possessive:"his",house:"Slytherin",SnapeFrom:"Gryffindor"},
	{name:"Gregory Goyle",article:"a",possessive:"his",house:"Slytherin",SnapeFrom:"Gryffindor"},
	{name:"Malcolm Baddock",article:"a",possessive:"his",house:"Slytherin",SnapeFrom:"Gryffindor"},
	{name:"Marcus Flint",article:"a",possessive:"his",house:"Slytherin",SnapeFrom:"Gryffindor"},
	{name:"Miles Bletchley",article:"a",possessive:"his",house:"Slytherin",SnapeFrom:"Gryffindor"},
	{name:"Millicent Bullstrode",article:"a",possessive:"her",house:"Slytherin",SnapeFrom:"Gryffindor"},
	{name:"Pansy Parkinson",article:"a",possessive:"her",house:"Slytherin",SnapeFrom:"Gryffindor"},
	{name:"Terence Higgs",article:"a",possessive:"his",house:"Slytherin",SnapeFrom:"Gryffindor"},
	{name:"Theodore Nott",article:"a",possessive:"his",house:"Slytherin",SnapeFrom:"Gryffindor"},
	{name:"Vincent Crabbe",article:"a",possessive:"his",house:"Slytherin",SnapeFrom:"Gryffindor"},
];

// This is convoluted....but it works.
basetypes.fromto = [
	BS([{search:"points"},"from",
			{saved:"student",property:BS([
				{saved:"staff",property:"fromprop",checkfor:"yes",ifnot:"house"}
			]),checkfor:"yes",ifnot:BS([{saved:"student",property:"house"}])
			},"for",{saved:"student",property:"name"},{search:"bad_action",property:"text",filter:{type:"match",property:"staff",value:["Any",BS([{saved:"staff",property:"name"}])]}}]),
	BS([{search:"points"},"to",
			{saved:"student",property:BS([
				{saved:"staff",property:"toprop",checkfor:"yes",ifnot:"house"}
			]),checkfor:"yes",ifnot:BS([{saved:"student",property:"house"}])
			},"for",{saved:"student",property:"name"},{search:"good_action",property:"text",filter:{type:"match",property:"staff",value:["Any",BS([{saved:"staff",property:"name"}])]}}]),
];

basetypes.points = [
	[5,"1 point"],
	[50,"5 points"],
	[25,"10 points"],
	[10,"25 points"],
	[5,"50 points"],
	[1,"100 points"],
];

basetypes.bad_action = [
	{text:"being out after curfew",staff:"Any"},
	{text:BS(["smuggling",{search:"smuggling"},"into school"]),staff:"Any"},
	{text:"goofing off in class",staff:"Any"},
	{text:"smuggling forbidden items into school",staff:"Any"},
	{text:BS(["providing an incredibly stupid answer to a question about",{search:"classes"}]),staff:"Any"},
	{text:BS(["disrupting class",{search:"class_disrupt"}]),staff:"Any"},
	{text:BS(["entering",{search:"forbidden_location"},"without permission"]),staff:"Any"},
	{text:"escaping Madam Pomphrey while still injured",staff:"Any"},
	{text:"for an obviously incorrect answer",staff:"Any"},
	{text:"breathing too loud",staff:"Snape"},
	{text:"acting like a dunderhead",staff:"Snape"},
];

basetypes.good_action = [
	{text:"helping other students",staff:"Any"},
	{text:"saving the school from disaster",staff:"Any"},
	{text:"cleaning up after themselves",staff:"Any"},
	{text:BS(["providing a well-researched answer to a question about",{search:"classes"}]),staff:"Any"},
	{text:"for a correct answer",staff:"Any"},
];

basetypes.smuggling = [
	"a dragon",
	"forbidden items",
	"alcohol",
];

basetypes.classes = [
	"potions",
	"transfiguration",
	"charms",
	"history of magic",
	"muggle studies",
	"defense against the dark arts",
];

basetypes.class_disrupt = [
	BS(["by asking an incredibly stupid question about",{search:"classes"}]),
	"through sabotaging others",
	"via dancing across the room",
];

basetypes.forbidden_location = [
	"the forbidden forest",
	"the forbidden section of the library",
	BS(["Professor",{search:"staff",notmatch:"staff",property:"name",append:"'s"},"office"]),
];
