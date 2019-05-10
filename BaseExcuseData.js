// Excuse Type Data
// Advanced Selection Groups
advanced_selectors = [
	{name:'Type of Person',category:'base_excuse',min:1},
	{name:'Hero Groups',category:'hero_group',properties:['displayname','name'],min:1},
	{name:'Heroes',category:'hero',properties:['name'],min:3},
	{name:'Villain Groups',category:'villain_group',properties:['displayname','name'],min:2},
	{name:'Villains',category:'villain',properties:['name'],min:3},
	{name:'Other Groups',category:'other_group',properties:['displayname','name']},
	{name:'Other Parahumans',category:'other_parahuman',properties:['name']},
	{name:'Villain or Other Groups',category:'nonhero_group',hide:true,min:2},
];
// Generation modes
generate_modes = [
	{name:'Excuses',base:'base_excuse',button:'Generate excuse',intro:'In order to conceal the true purpose of your visit to the PRT building,	say the following to the nice lady at the reception desk:'},
	{name:'Bulk Excuses',base:'base_excuse',button:'Generate bulk excuses',bulk:10,search:true},
	{name:'Powers',base:'yourpower',button:'Generate power',intro:'You have triggered with the following power:'},
	{name:'Bulk Powers',base:'yourpower',button:'Generate bulk powers',bulk:10,search:true},
];
// Dynamic types
dynamic_types = {
	somehero:{includebase:true,members:['hero']},
	somevillain:{includebase:true,members:['villain']},
	someparahuman:{members:['hero','villain','other_parahuman']},
	any_group:{members:['hero_group','villain_group','other_group']},
	nonhero_group:{members:['villain_group','other_group']},
};
// Base Type Data
basetypes.base_excuse = [
	[100,BS(["I'm a concerned citizen. I'm here to",{search:"citizenexcuse"}]),"Concerned Citizen"],
	[100,BS(["I'm a victim of crime. I'm here to",{search:"victimcomplaint"}]),"Victim of Crime"],
	[8,BS(["I'm a marketing consultant. I'm here to",{search:"marketingreason"}]),"Marketing Consultant"],
	[10,BS(["I'm a reporter. I'm here to",{search:"reporterreason"}]),"Reporter"],
	[5,BS(["I'm a writer. I'm here to",{search:"writerreason"}]),"Writer"],
	[2,BS(["I'm a janitor. I'm here to",{search:"janitorreason"}]),"Janitor"],
	[2,BS(["I have a message from",{search:"nonhero_group",property:"name"},"which says that",{search:"hero",saveas:"hero",property:"name"},"won't see",{saved:"hero",property:"possessive"},{saved:"hero",property:"item"},"again unless",{search:"ransom"},"delivered to",{search:"locations",property:"name"},"by",{search:"time"}]),"Messenger"],
	[2,BS(["I'm a repairman. I'm here to",{search:"repairmanreason"}]),"Repairman"],
	[10,BS(["I'm the chosen representative of an angry mob. We're here to",{search:"angrymob"}]),"Angry Mob"],
	[10,BS(["I'm",{search:"memberofgang",append:"."},"I'm here to",{search:"gangmemberreason"}]),"Gang Member"],
];
basetypes.someparahumanorgroup = [
	BS([{search:"someparahuman",property:"name",notmatch:["villain","hero"]}]),
	BS([{search:"any_group",property:"name",notmatch:["villain","hero"],notmatchproperty:"group"}]),
];
basetypes.someparahumanendbringerorgroup = [
	BS([{search:"someparahuman",property:"name",notmatch:["villain","hero"]}]),
	BS([{search:"any_group",property:"name",notmatch:["villain","hero"],notmatchproperty:"group",filter:{type:"nomatch",property:"name",value:BS([{saved:"mygang",property:"name"}])}}]), //edit was required to prevent "I'm a member of x, I'm here to turn myself in after seeing x going on an enthusiastic[...]". There's probably a better way to do it. -94000130FFF70000
	BS([{search:"endbringer",property:"name"}]),
];
// Ok, this is before hero so that we can reference it in hero
basetypes.hero_group = [
	{name:"the Protectorate",member:"a member of",supermembers:"members of",simple_name:"Protectorate",article:"a"},
	{name:"the Wards",member:"a member of",supermembers:"members of",simple_name:"Wards",article:"a"},
	{name:"the PRT",member:"a member of",supermembers:"members of",simple_name:"PRT",article:"a"},
	{name:"New Wave",member:"a member of",supermembers:"members of",simple_name:"New Wave",article:"a"},
	{name:"the Guild",member:"a member of",supermembers:"superpowered members of",simple_name:"Guild",article:"a"},
	{name:"an independent hero",tested:"no",simple_name:"Independent",article:"an"},
];
basetypes.hero = [
	{name:"Armsmaster",article:"an",possessive:"his",item:"halberd",itemarticle:"a halberd",group:basetypes.hero_group[0]},
	{name:"Alexandria",article:"an",possessive:"her",item:"library",itemarticle:"a library",group:basetypes.hero_group[0]},
	{name:"Eidolon",article:"an",possessive:"his",item:"fish tank",itemarticle:"a fish tank",group:basetypes.hero_group[0]},
	{name:"Legend",article:"a",possessive:"his",item:["son","husband"],itemarticle:["a son","a husband"],group:basetypes.hero_group[0]},
	{name:"Chevalier",article:"a",possessive:"his",item:"cannonblade",itemarticle:"a cannonblade",group:basetypes.hero_group[0]},
	{name:"Miss Militia",article:"a",possessive:"her",item:["bazooka","AK47"],itemarticle:["a bazooka","an AK47"],group:basetypes.hero_group[0]},
	{name:"Mouse Protector",article:"a",possessive:"her",item:"ham and cheese",itemarticle:"some ham and cheese",group:basetypes.hero_group[5]},
	{name:"Myrddin",article:"a",possessive:"his",item:"wand",itemarticle:"a wand",group:basetypes.hero_group[0]},
	{name:"Chubster",article:"a",possessive:"his",item:"bacon",itemarticle:"some bacon",group:basetypes.hero_group[0]},
	{name:"Dauntless",article:"a",possessive:"his",item:["arc lance","pair of boots"],itemarticle:["an arc lance","a pair of boots"],group:basetypes.hero_group[0]},
	{name:"Narwhal",article:"a",possessive:"her",item:"bust",itemarticle:"a bust",mask:"no",group:basetypes.hero_group[4]},
	{name:"Glory Girl",article:"a",possessive:"her",item:"tiara",itemarticle:"a tiara",mask:"no",group:basetypes.hero_group[3]},
	{name:"Battery",article:"a",possessive:"her",item:"charger",itemarticle:"a charger",group:basetypes.hero_group[0]},
	{name:"Assault",article:"an",possessive:"his",item:"pepper",itemarticle:"a pepper",group:basetypes.hero_group[0]},
	{name:"Velocity",article:"a",possessive:"his",item:"coffee mug",itemarticle:"a coffee mug",group:basetypes.hero_group[0]},
	{name:"Dragon",article:"a",possessive:"her",item:"top secret suit",itemarticle:"a top secret suit",mask:"no",group:basetypes.hero_group[4]},
	{name:"Panacea",article:"a",possessive:"her",item:"robe",itemarticle:"a robe",mask:"no",group:basetypes.hero_group[3]},
	{name:"Triumph",article:"a",possessive:"his",item:"megaphone",itemarticle:"a megaphone",group:basetypes.hero_group[0]},
	{name:"Aegis",article:"an",possessive:"his",item:"redundancy",itemarticle:"a redundancy",group:basetypes.hero_group[1]},
	{name:"Clockblocker",article:"a",possessive:"his",item:["paper","stopwatch"],itemarticle:["some paper","a stopwatch"],group:basetypes.hero_group[1]},
	{name:"Kid Win",article:"a",possessive:"his",item:["hoverboard","Alternator Cannon"],itemarticle:["a hoverboard","an Alternator Cannon"],group:basetypes.hero_group[1]},
	{name:"Gallant",article:"a",possessive:"his",item:"power armor",itemarticle:"some power armor",group:basetypes.hero_group[1]},
	{name:"Vista",article:"a",possessive:"her",item:"artwork",itemarticle:"some artwork",mask:"no",group:basetypes.hero_group[1]},
];
// And this is before villain so that we can reference it in villain
basetypes.villain_group = [
	{name:"the Empire 88",member:"a member of",supermembers:"superpowered members of",simple_name:"Nazi",article:"a",type:"gang"},
	{name:"the Azn Bad Boys",member:"a member of",supermembers:"superpowered members of",simple_name:"Asian",article:"an",type:"gang"},
	{name:"the Merchants",member:"a member of",supermembers:"superpowered members of",simple_name:"Merchant",article:"a",type:"gang"},
	{name:"the Slaughterhouse 9",member:"a member of",supermembers:"members of",simple_name:"Slaughterhouse",article:"a"},
	{name:"the Dragonslayers",member:"a member of",supermembers:"superpowered members of",simple_name:"Dragonslayer",article:"a",type:"gang"},
	{name:"the Teeth",member:"a member of",supermembers:"superpowered members of",simple_name:"Teeth",article:"a",type:"gang"},
	{name:"an independent villain",tested:"no",simple_name:"Independent",article:"an"},
];
basetypes.villain = [
	{name:"Lung",article:"a",possessive:"his",item:["dragon mask","La-Z-Boy"],itemarticle:["a dragon mask","a La-Z-Boy"],group:basetypes.villain_group[1]},
	{name:"Oni Lee",article:"an",possessive:"his",item:"grenade",itemarticle:"a grenade",group:basetypes.villain_group[1]},
	{name:"Bakuda",article:"a",possessive:"her",item:BS([{search:"bomb_property",property:"text"},"bomb"]),itemarticle:BS([{search:"bomb_property",property:"text",wantarticle:true},"bomb"]),group:basetypes.villain_group[1]},
	{name:"Kaiser",article:"a",possessive:"his",item:"throne",itemarticle:"a throne",group:basetypes.villain_group[0]},
	{name:"Hookwolf",article:"a",possessive:"his",item:"kicked puppy",itemarticle:"a kicked puppy",group:basetypes.villain_group[0]},
	{name:"Stormtiger",article:"a",possessive:"his",item:"tiger mask",itemarticle:"a tiger mask",group:basetypes.villain_group[0]},
	{name:"Rune",article:"a",possessive:"her",item:"stone slab",itemarticle:"a stone slab",group:basetypes.villain_group[0]},
	{name:"Night",article:"a",possessive:"her",item:"cloak",itemarticle:"a cloak",group:basetypes.villain_group[0]},
	{name:"Fog",article:"a",possessive:"his",item:"blazer",itemarticle:"a blazer",group:basetypes.villain_group[0]},
	{name:"Crusader",article:"a",possessive:"his",item:"ghost",itemarticle:"a ghost",group:basetypes.villain_group[0]},
	{name:"Skidmark",article:"a",possessive:"his",item:"bong",itemarticle:"a bong",group:basetypes.villain_group[2]},
	{name:"Squealer",article:"a",possessive:"her",item:"tank",itemarticle:"a tank",group:basetypes.villain_group[2]},
	{name:"Mush",article:"a",possessive:"his",item:"garbage pile",itemarticle:"a garbage pile",group:basetypes.villain_group[2]},
	{name:"Bonesaw",article:"a",possessive:"her",item:"spider-bot",itemarticle:"a spider-bot",group:basetypes.villain_group[3]},
	{name:"Jack Slash",article:"a",possessive:"his",item:"pocket knife",itemarticle:"a pocket knife",group:basetypes.villain_group[3]},
	{name:"Saint",article:"a",possessive:"his",item:"control console",itemarticle:"a control console",group:basetypes.villain_group[4]},
	{name:"Uber",article:"an",possessive:"his",item:"whatchamacallit",itemarticle:"a whatchamacallit",group:basetypes.villain_group[6]},
	{name:"Leet",article:"a",possessive:"his",item:"gizmo",itemarticle:"a gizmo",group:basetypes.villain_group[6]},
	{name:"Crawler",article:"a",possessive:"his",item:"tentacles",itemarticle:"some tentacles",group:basetypes.villain_group[3]},
	{name:"Mannequin",article:"a",possessive:"his",item:"chains",itemarticle:"some chains",group:basetypes.villain_group[3]},
	{name:"the Siberian",article:"a",possessive:"her",item:"stripes",itemarticle:"some stripes",group:basetypes.villain_group[3]},
	{name:"Shatterbird",article:"a",possessive:"her",item:"wings",itemarticle:"some wings",group:basetypes.villain_group[3]},
	{name:"Burnscar",article:"a",possessive:"her",item:"lighter",itemarticle:"a lighter",group:basetypes.villain_group[3]},
	{name:"Hatchet Face",article:"a",possessive:"his",item:"axe",itemarticle:"an axe",group:basetypes.villain_group[3]},
	{name:"Purity",article:"a",possessive:"her",item:"corona",itemarticle:"a corona",group:basetypes.villain_group[6]},
	//todo: Alabaster (what item?), Victor, Othala, Krieg, whoever else is in the E88 i forgot, cherish? (save for Canon?) Might want to use weighting on some of these. -94000130FFF70000
];
// And other groups
basetypes.other_group = [
	{name:BS([{search:"contessa"}]),displayname:"Contessa",simple_name:"Mysterious Woman",pronoun:"her"}, // No members or supermembers intentionally here
	{name:"some meddling teenagers in a van",member:"a member of",supermembers:"superpowered members of",simple_name:"Teenager"},
	{name:"the local chapter of the Hell's Angels",member:"a member of",supermembers:"superpowered members of",simple_name:"Biker",type:"gang"},
	{name:"the Girl Scouts' cookie-selling brigade",member:"a member of",supermembers:"superpowered members of",simple_name:"Girl Scout",type:"gang"},
	{name:"the League of Door to Door Salesmen",member:"a member of",supermembers:"superpowered members of",simple_name:"Salesmen",type:"gang"},
	{name:"an angry swarm of BEES",member:"a member of",supermembers:"superpowered members of",simple_name:"Bee"},
];
basetypes.other_parahuman = [
	{name:"Parian",article:"an",possessive:"her",item:"giant plush doll",itemarticle:"a giant plush doll",group:undefined},
];
basetypes.endbringer = [
	[100,{name:BS([{search:"zizname"}])},"Ziz/Smirgh"],
	[100,{name:BS([{search:"leviname"}])},"Leviathan/Jormungandr"],
	[100,{name:BS([{search:"behename"}])},"Behemoth/Hadhayosh"],
	[10,{name:"Khonsu"},"Khonsu"],
	[10,{name:"Tohu"},"Tohu"],
	[10,{name:"Bohu"},"Bohu"],
	[10,{name:"Tohu and Bohu",has:"have",plural:"yes"},"The Twins"],
	[25,{name:"all three Endbringers",has:"have",plural:"yes"},"All Three"],
];
basetypes.zizname = [
	[75,"the Simurgh"],
	[25,"Ziz"],
];
basetypes.leviname = [
	[95,"Leviathan"],
	[5,"Jormungandr"],
];
basetypes.behename = [
	[95,"Behemoth"],
	[5,"Hadhayosh"],
];
basetypes.bomb_property = [
	{text:"atomic",article:"an"},
	{text:"black hole",article:"a"},
	{text:"cream pie",article:"a"},
	{text:"electric",article:"an"},
	{text:"fire",article:"a"},
	{text:"ice",article:"an"},
	{text:"liquification",article:"a"},
	{text:"nuclear",article:"a"},
	{text:"pain",article:"a"},
	{text:"paint",article:"a"},
	{text:"shrapnel",article:"a"},
	{text:"time loop",article:"a"},
	{text:"tinkertech",article:"a"},
	{text:"EMP",article:"an"},
];
basetypes.professional = [
	"accountants",
	"auto mechanics",
	"clowns",
	"pro wrestlers",
	"divorce lawyers",
	"barbers",
	"nightclub bouncers",
	"mimes",
	"scuba divers",
	"quantum mechanics",
	"bank executives",
	"janitors",
	"government agents",
	"mailmen",
	"burger flippers",
	"dock workers",
	"single parents",
	"PHO spammers",
];
basetypes.contessa = [
	"a mysterious unnaturally competent woman in a suit",
	"a mysterious unnaturally competent woman wearing a fedora",
];
basetypes.master = [
	"Regent",
	"Pretender",
	"Heartbreaker",
	"Canary",
];
basetypes.locations = [
	{name:"the nearby park",at:"in",to:"into"},
	{name:"the beach",at:"at",to:"to"},
	{name:"Fugly Bob's",at:"at",to:"to"},
	{name:"EndVaultTech's board meeting room",at:"in",to:"into"},
	{name:"the local retirement home",at:"at",to:"to"},
	{name:"my neighborhood",at:"in",to:"into"},
	{name:"my mailbox",at:"in",to:"into"},
	{name:"my chimney",at:"in",to:"into"},
	{name:"my roof",at:"on",to:"onto"},
	{name:"the rusted hulk of a ship",at:"in",to:"into"},
	{name:"the post office",at:"in",to:"into"},
	{name:BS([{search:"schools"}]),at:"inside",to:"into"},
	{name:BS(["the",{search:"schools"},"girls' locker room"]),at:"in",to:"into"},
	{name:"the local swimming pool",at:"in",to:"into"},
	{name:"a seedy hotel room",at:"in",to:"into"},
	{name:"Somer's Rock",at:"in",to:"into"},
	{name:"my neighbor's closet",at:"in",to:"into"},
	{name:"my closet",at:"in",to:"into"},
	{name:"the Rig",at:"in",to:"into"},
	{name:"the Birdcage",at:"in",to:"into"},
	{name:"Archer's Bridge",at:"under",to:"to beneath"},
	{name:"a dark alley",at:"in",to:"into"},
	{name:"the Boardwalk",at:"at",to:"to"},
	{name:"the Docks",at:"at",to:"to"},
	{name:"my street",at:"on",to:"onto"},
	{name:"Brockton General Hospital",at:"at",to:"to"},
];
//todo: at/to pairs like i did with swingverbs -94000130FFF70000
basetypes.schools = [
	"Winslow High",
	"Arcadia High",
	"Clarendon High",
	"Immaculata High",
];
basetypes.thingy = [
	{name:"wristwatch",article:"a"},
	{name:"underwear"},
	{name:"necktie",article:"a"},
	{name:"lunchbox",article:"a"},
	{name:"wallet",article:"a"},
	{name:"cellphone",article:"a"},
	{name:"baseball cap",article:"a"},
	{name:"monocle",article:"a"},
	{name:"waffle",article:"a"},
	{name:"buzzsaw",article:"a"},
	{name:"saucepan",article:"a"},
	{name:"HDMI cable",article:"a"},
	{name:"sock",article:"a"},
	{name:"toaster oven",article:"a"},
	{name:"muffin",article:"a"},
	{name:"t-shirt",article:"a"},
	{name:"belt and suspenders",article:"a"},
	{name:"vase",article:"a"},
	{name:"sippy cup",article:"a"},
	{name:"beer coaster",article:"a"},
	{name:"vegetable peeler",article:"a"},
	{name:"fruit juicer",article:"a"},
	{name:"blender",article:"a"},
	{name:"fedora",article:"a"},
	{name:BS([{search:"hero",property:"name",saved:"doll",saveas:"doll",notmatch:"theme"},"doll"]),article:BS([{search:"hero",property:"article",saved:"doll",saveas:"doll",notmatch:"theme"}])},
	{name:BS([{search:"hero",property:"name",saved:"afigure",saveas:"afigure",notmatch:"theme"},"action figure"]),article:BS([{search:"hero",property:"article",saved:"afigure",saveas:"afigure",notmatch:"theme"}])},
	{name:BS([{search:"hero",property:"name",saved:"plushie",saveas:"plushie",notmatch:"theme"},"plushie"]),article:BS([{search:"hero",property:"article",saved:"plushie",saveas:"plushie",notmatch:"theme"}])},
	{name:"Holy Grail",article:"the"},
	{name:"hat",article:"a"},
];
basetypes.thingytrait = [
	{text:"radioactive",article:"a"},
	{text:"thermonuclear",article:"a"},
	{text:"ballistic",article:"a"},
	{text:"tactical",article:"a"},
	{text:"AI-controlled",article:"an"},
	{text:"antimatter",article:"an"},
	{text:"monomolecular",article:"a"},
	{text:"futuristic",article:"a"},
	{text:"alternate",article:"an"},
	{text:"metallic",article:"a"},
	{text:"non-stick",article:"a"},
	{text:"autotuned",article:"an"},
	{text:"shrinking",article:"a"},
	{text:"uncontrollable",article:"an"},
	{text:"self-steering",article:"a"},
	{text:"vibrating",article:"a"},
	{text:"anti-rust",article:"an"},
	{text:"self-lubricating",article:"a"},
	{text:"fractal-based",article:"a"},
	{text:"multi-dimensional",article:"a"},
];
basetypes.activity = [
	"mauling random passers-by",
	BS(["setting up a muffin stall",{search:"locations",property:"at",saveas:"loc"},{saved:"loc",property:"name"}]),
	BS(["spraypainting suggestive graffiti",{search:"locations",property:"at",saveas:"loc"},{saved:"loc",property:"name"}]),
	BS(["writing sappy love notes to",{search:"hero",property:"name"}]),
	BS(["auditioning for a movie role as",{search:"hero",property:"name"}]),
	BS(["setting up an online dating profile for",{search:"endbringer",property:"name"}]),
	"acting out the Who's on First sketch",
	"tracking mud all over the office",
	"howling majestically to the moon",
	"twerking",
	BS([{search:"dance"}]),
	BS(["planking",{search:"locations",property:"at",saveas:"loc"},{saved:"loc",property:"name"}]),
	BS(["dressing up as",{search:"endbringer",property:"name"}]),
	"robbing a local convenience store",
	"staring at the sun",
	BS(["playing Dungeons and Dragons with",{search:"hero",saveas:"hero1",property:"name",append:","},
		{search:"hero",saveas:"hero2",property:"name",append:",",notmatch:"hero1"}, "and",
		{search:"hero",saveas:"hero3",property:"name",notmatch:["hero1","hero2"]}]),
	"screaming loud enough to wake the dead",
];
basetypes.clothing = [
	"a top-hat",
	"a PRT uniform",
	"a police uniform",
	"nothing but a smile",
	"a topless bikini",
	"strategically placed Christmas ornaments",
	"aviator sunglasses",
	"a black hoodie",
	"a red and white striped beanie",
	"a ten gallon hat and cowboy boots",
	"a three piece suit",
	"copious amounts of whipped cream",
	"a battleship",
	"a doge costume",
	"a spider costume",
	BS([{search:"hero",property:"name",append:"'s",filter:{type:"nomatch",property:"mask",value:"no"}},"mask"]),
	"Dragon's suit as a mask",
	"nothing but a full-body tattoo",
	BS([{search:"critter",property:"name",wantarticle:true},"mask"]),
	"nothing but heart-print underwear",
];
//verb usage: {search:"swingthing",saveas:"swingthingy"},{search:"swingverbs",filter:{type:"match",property:"verb",value:BS([{saved:"swingthingy",property:"verb",checkfor:"yes",ifnot:"swinging"}])},saveas:"swingverb"}
//then pull the verb's associated words from swingverb. -94000130FFF70000
basetypes.swingthing = [
	{name:"fish",article:"a"},
	{name:"backpack",article:"a"},
	{name:"cat",article:"a"},
	{name:"herring",article:"a"},
	{name:"Nerf-bat",article:"a"},
	{name:"clue-bat",article:"a"},
	{name:"squeaky toy mallet",article:"a"},
	{name:"inflatable pool toy",article:"an"},
	{name:"golf club",article:"a"},
	{name:"obviously fake foam sword",article:"an"},
	{name:"croquet mallet",article:"a"},
	{name:"inflatable baseball bat",article:"an"},
	{name:"bottle",article:"a"},
	{name:"nailbat",article:"a"},
	{name:"brickbat",article:"a"},
	{name:"football bat",article:"a"},
	{name:"folding chair",article:"a"},
	{name:"brick",article:"a"},
	{name:BS([{search:"critter",saved:"swingcritter",saveas:"swingcritter",property:"name"}])},
	{name:"laser pointer",article:"a",verb:["swinging","pointing"]},
	{name:"math textbook",article:"a"},
	{name:"impractically huge anime sword",article:"an"},
	{name:"fake magic wand",article:"a",verb:["swinging","pointing"]},
	{name:"real magic wand",article:"a",verb:["swinging","pointing","aiming"]},
	{name:"waffle iron",article:"a"},
	{name:"number 2 pencil",article:"a"},
	{name:"rolled-up newspaper",article:"a"},
	{name:"revolver",article:"a",verb:["swinging","aiming","firing"]},
	{name:"shotgun",article:"a",verb:["swinging","aiming","firing"]},
];
basetypes.swingverbs = [
	{verb:"swinging",range:"anyone within reach",hit:"hit"},
	{verb:"pointing",range:"everyone in sight",hit:["hit","threatened","attacked"]},
	{verb:"aiming",range:"everyone in sight",hit:["threatened","shot"]},
	{verb:"firing",range:["everyone in sight","everything that moves"],hit:"shot"},
];
basetypes.critter = [
	{name:"kitten",plural:"kittens",article:"a"},
	{name:"squirrel",plural:"squirrels",article:"a"},
	{name:"puppy",plural:"puppies",article:"a"},
	{name:"hedgehog",plural:"hedgehogs",article:"a"},
	{name:"pony",plural:"ponies",article:"a"},
	{name:"unicorn",plural:"unicorns",article:"an"},
	{name:"bullet ant",plural:"bullet ants",article:"a"},
	{name:"antelope",plural:"antelopes",article:"an"},
	{name:"sugar ant",plural:"sugar ants",article:"a"},
	{name:"black widow spider",plural:"black widow spiders",article:"a"},
	{name:"bear cub",plural:"bear cubs",article:"a"},
	{name:"honey badger",plural:"honey badgers",article:"a"},
	{name:"tentacle monster",plural:"tentacle monsters",article:"a"},
	{name:"patented Blasto monstrosity",plural:"patented Blasto monstrosities",article:"a"},
	{name:"platypus",plural:["platypus","platypuses","platypi","platypodes"],article:"a"},
	{name:"pegasus",plural:"pegasi",article:"a"},
	{name:"parrot",plural:"parrots",article:"a"},
	{name:"eagle",plural:"eagles",article:"an"},
	{name:"armadillo",plural:"armadillos",article:"an"},
	{name:"pet rock",plural:"pet rocks",article:"a"},
	{name:"turtle",plural:"turtles",article:"a"},
	{name:"shark",plural:"sharks",article:"a"},
	{name:["rabbit","wabbit"],plural:["rabbits","wabbits"],article:"a"},
];
basetypes.crittertrait = [
	{text:"pink",article:"a"},
	{text:"sapient",article:"a"},
	{text:"flying",article:"a"},
	{text:"tentacled",article:"a"},
	{text:"angry",article:"an"},
	{text:"insectoid",article:"an"},
	{text:"gargantuan",article:"a"},
	{text:"glittery",article:"a"},
	{text:"long-toothed",article:"a"},
	{text:"slimy",article:"a"},
	{text:"skinny",article:"a"},
	{text:"eldrich",article:"an"},
];
basetypes.substance = [
	"ice cream",
	"candy",
	"cocaine",
	"psychic energy",
	"liquid nitrogen",
	"radioactive sludge",
	"jello",
	"clay",
	"solidified air",
	"orphans' tears",
	"hot buttered popcorn",
	"coffee beans",
	"powdered water",
	"bubbly champagne",
	"solid clouds",
	"aerogel",
	"terracotta",
	BS(["powdered",{search:"endbringer",property:"name",filter:{type:"nomatch",property:"plural",value:"yes"}},"figurines"]),
	BS(["liquified",{search:"critter",property:"name"},"flesh"]),
	"thioacetone",
	"blood",
	"knives",
];
basetypes.thirdparty = [
	BS(["my pet",{search:"critter",property:"name"}]),
	"my son",
	"my daughter",
	"my evil twin",
	"your mom",
	"my red-headed stepchild",
	"my brother",
	"my sister",
	"my cousin",
];
basetypes.personcrimepast = [
	"pranked by",
	"chased by",
	"wolf-whistled by",
	"racially slurred by",
	BS(["asked on a date by",{saved:"nonhero_group",property:"member",checkfor:"yes"}]),
	"tickled by",
	"glared at by",
	"winked at by",
	"ignored by",
	"recruited by",
	BS(["teleported",{search:"locations",saveas:"loc",property:"to"},{saved:"loc",property:"name"},"by"]),
	"sent to the future by",
	BS(["mindswapped with",{saved:"nonhero_group",property:"member",checkfor:"yes"}]),
	BS(["mistaken for",{saved:"nonhero_group",property:"member",checkfor:"yes"}]),
	BS(["made to wear the signs of",{search:"villain_group",property:"name",notmatch:"nonhero_group"},"by"]),
	"trolled by",
];
basetypes.propertycrimepast = [
	"stolen",
	"defaced",
	"ruined with spilled lemonade",
	"vandalised",
	"spray painted",
	"replaced with a mirror image",
	"sent to Earth Aleph",
	"hidden in the Boat Graveyard",
	BS(["fed to",{search:"thirdparty"}]),
	"chipped",
	"tarnished",
	"hidden in a school locker",
];
basetypes.valuemodifier = [
	{text:"vintage",article:"a"},
	{text:"antique",article:"an"},
	{text:"priceless",article:"a"},
	{text:"overpriced",article:"an"},
	{text:"one-of-a-kind",article:"a"},
	{text:"rare",article:"a"},
	{text:"limited edition",article:"a"},
	{text:"autographed",article:"an"},
	{text:"heirloom",article:"a"},
	{text:"foil",article:"a"},
	{text:"unique",article:"a"},
	{text:"authorized",article:"an"},
	{text:"unauthorized",article:"an"},
	{text:"authentic",article:"an"},
];
basetypes.qualitymodifier = [
	{text:"tinkertech",article:"a"},
	{text:"handcrafted",article:"a"},
	{text:"masterwork",article:"a"},
	{text:BS([{search:"hero",property:"name",append:"-approved"}])},
	{text:BS([{search:"any_group",property:"simple_name",append:"-tested",filter:{type:"nomatch",property:"tested",value:"no"}}])},
	{text:"customized",article:"a"},
	{text:"dwarven",article:"a"},
	{text:"restored",article:"a"},
	{text:"recycled",article:"a"},
	{text:"damaged",article:"a"},
];
basetypes.theme = [
	BS([{search:"hero",property:"name",append:"-themed",notmatch:["doll","afigure","plushie","tmini"],saveas:"theme"}]),
];
basetypes.number = [
	"a dozen",
	"a baker's dozen",
	"thirty-four",
	"five",
	"over nine thousand",
	"forty",
	"fifteen million",
	"one mirrion",
	"pi",
	"the correct number of",
	"enough",
	"zero",
	"aleph-null",
	"forty-two times the square root of negative one",
];
basetypes.unit = [
	"buckets",
	"teaspoons",
	"units",
	"packets",
	"baggies",
	"lunchboxes",
	"crates",
	"boxcars",
	"Pacific Oceans",
	"moon units",
	"upturned bowler hats",
	"pints",
	"liters",
	"litres",
	"gallons",
	"tons",
	"tonnes",
];
basetypes.time = [
	"midnight",
	"Friday",
	"close of business",
	"the next full moon",
	"the end of the big match",
	"the time it takes me to count to ten",
	"the next Endbringer attack",
	"lunchtime",
	"teatime",
	"the end of school holidays",
	"my birthday",
	"Christmas",
	"the time the cows come home",
	"the day before the election",
];
basetypes.restraint = [
	"chains",
	"a straight-jacket",
	"a blindfold",
	"whipped cream",
	"a bodybag",
];
basetypes.restraintmanner = [
	"carefully",
	"properly",
	"sensibly",
	"logically",
	"tenderly",
	"absolutely",
];
basetypes.worldeffect = [
	"appropriate theme music",
	"inappropriate theme music",
	"everyone's most hated earworms",
	"the Inception BWONG at dramatic moments",
	"Kung Fu movie captions",
	"the Lost City of Atlantis",
	"disco lights",
	"the sound of drums",
];
basetypes.triggered = [
	{name:"I",possessive:"my",has:"have",nominative:"I",object:"me",consumes:"consume"},
	{name:"my pet",possessive:"its",has:"has",nominative:"it",object:"it",consumes:"consumes"},
	{name:"my daughter",possessive:"her",has:"has",nominative:"she",object:"her",consumes:"consumes"},
	{name:"my son",possessive:"his",has:"has",nominative:"he",object:"him",consumes:"consumes"},
];
basetypes.youtriggered = [
	{name:"You",possessive:"your",has:"have",nominative:"you",object:"you",consumes:"consume"},
];
basetypes.yourpowerprefix = [
	{text:"You have triggered with the",powertypes:["blaster","breaker","brute","changer","master","mover","shaker","stranger","striker","thinker","tinker","trump","unspecified"]},
	{text:"After a long ordeal you have triggered with the",powertypes:["tinker"]},
	{text:"The sudden crisis you had to deal with caused you to trigger with the",powertypes:["thinker"]},
	{text:"For no apparent reason you have gained the",powertypes:["unspecified"]},
	{text:"Your recent exposure to a parahuman battle has granted you the",powertypes:["trump"]},
	{text:"Being trapped in a hostile environment has caused you to trigger with the",powertypes:["shaker"]},
	{text:"After numerous injuries you have triggered with the",powertypes:["brute"]},
	{text:"Thanks to your isolation you have triggered with the",powertypes:["master"]},
	{text:"That long-range threat you just encountered caused you to trigger with the",powertypes:["blaster"]},
];
basetypes.yourpower = [
	BS([
		{search:"youtriggered",saveas:"triggered"},
		{search:"power",saveas:"power"},
		{search:"thingy",saveas:"thingy"},
		{search:"yourpowerprefix",property:"text",filter:{type:"match",property:"powertypes",value:BS([{saved:"power",property:"pc",checkfor:"yes",ifnot:"unspecified"}])}},
		{saved:"power",property:"pc",checkfor:"yes",append:" type power",ifnot:"Power"},{saved:"power",property:"text"}
	]),
];
basetypes.bodypart = [
	"ears",
	"toes",
	"eyes",
	"navel",
	"nostrils",
	"armpits",
	"kneecaps",
	"elbows",
	"ponytail",
	"back hair",
	"fingers",
	"palms",
	"forehead",
	"fists",
];
basetypes.firstborns = [
	"sons",
	"daughters",
	"children",
];
basetypes.dance = [
	"flamenco dancing",
	"disco dancing",
	"tango dancing",
	"samba dancing",
	"conga dancing",
	"breakdancing",
	"interpretive dancing",
];
basetypes.grow = [
	"tentacles",
	"teeth",
	"antennae",
	"eyestalks",
	"an epic beard",
	BS([{search:"substance"},"spikes"]),
	"extra arms",
	"extra legs",
	"extra heads",
	"horns",
];
basetypes.hair = [
	"redheaded",
	"bald",
	"mohawk sporting",
	"mullet bearing",
];
basetypes.powerclothes = [
	"yarmulkas",
	"top hats",
	"flip-flops",
	"togas",
];
basetypes.untypedpowers = [
	"of Greyskull",
	"of Positive Thinking",
	"of One",
	"of Two",
	"of Ten",
	"of Rock",
	"of Voodoo",
	"of Trolling",
	"to die",
];
basetypes.changepeopleto = [
	"emos",
	"goths",
	"grandparents",
	"line dancers",
	"lizard people",
	"mimes",
	"opera singers",
	"toddlers",
	"unathletic nerds",
	"yodellers",
	"fanfiction writers",
];
basetypes.speechtype = [
	"in puns",
	"in iambic pentameter",
	"in pig latin",
	"like a pirate",
	"like a crack whore",
	"in Klingon",
	"in meaningless gibberish",
	"in hissing noises",
];
basetypes.beatvalues = [
	"at an eating contest",
	"at four dimensional chess",
	"into a bloody mess",
	"into submission",
	"on a gameshow",
	"to a pulp",
	"to the last discounted lunch",
	"with a man-portable wave motion gun",
	BS(["with",{search:"swingthing",property:"name",wantarticle:true}]),
];
basetypes.power = [
	{pc:"blaster",text:BS(["of slaughtering firstborn",{search:"firstborns"}])},
	{pc:"blaster",text:BS(["to disintegrate any",{search:"thingy",property:"name"},"in",{saved:"triggered",property:"possessive"},"attack's blast radius"])},
	{pc:"blaster",text:BS(["to shoot",{search:"substance"},"out of",{saved:"triggered",property:"possessive"},{search:"bodypart"}])},
	{pc:"blaster",text:BS(["to temporarily turn people into",{search:"changepeopleto"}])},
	{pc:"breaker",text:BS(["to turn into a living mass of",{search:"substance"}])},
	{pc:"breaker",text:BS(["to",{search:"while_effect"},"while",{search:"while_action"}])},
	{pc:"brute",text:BS(["to be usable as a battering ram when held by",{saved:"triggered",property:"possessive"},{search:"bodypart"}])},
	{pc:"changer",text:BS(["to exactly impersonate",{search:"hero",property:"name"},"whenever",{saved:"triggered",property:"nominative"},{saved:"triggered",property:"consumes"},{search:"substance"}])},
	{pc:"changer",text:BS(["to grow",{search:"grow"},"out of",{saved:"triggered",property:"possessive"},{search:"bodypart"}])},
	{pc:"changer",text:BS(["to turn into a giant",{search:"crittertrait",property:"text",filter:{type:"nomatch",property:"text",value:"gargantuan"}},{search:"critter",property:"name"}])},
	{pc:"master",text:BS(["to befriend people by beating them",{search:"beatvalues"}])},
	{pc:"master",text:BS(["to cause people to speak",{search:"speechtype"},"until",{search:"time"}])},
	{pc:"master",text:BS(["to create golems made of",{search:"substance"}])},
	{pc:"master",text:BS(["to project",{search:"thingy",saveas:"thingy",property:"article",checkfor:"yes",forcea_an:"an"},"indestructible animate",{search:"thingytrait",property:"text"},{saved:"thingy",property:"name"}])},
	{pc:"mover",text:BS(["of extreme",{search:"dance"}])},
	{pc:"shaker",text:BS(["to conjure",{search:"worldeffect"}])},
	{pc:"shaker",text:BS(["to create large quantities of ",{search:"substance"}])},
	{pc:"shaker",text:"to cause ambient noise to be all wrong in the area"},
	{pc:"stranger",text:BS(["to become invisible to",{search:"hair"},{search:"professional"},"wearing",{search:"powerclothes"}])},
	{pc:"striker",text:BS(["to turn any",{search:"thingy",saveas:"touchthingy",property:"name"},"into",{search:"moddedthingy",wantarticle:true},"until",{search:"time"}])},
	{pc:"thinker",text:"of acutely artful and aimless alliteration"},
	{pc:"thinker",text:"of outlandish excuse creation"},
	{pc:"thinker",text:BS(["of",{search:"critter",property:"name"},"migratory pattern prediction"])},
	{pc:"tinker",text:BS(["of",{search:"crittertrait",property:"text"},{search:"critter",property:"name"},"cloning"])},
	{pc:"tinker",text:BS(["of",{search:"thingytrait",property:"text"},{search:"thingy",property:"name"},"construction"])},
	{pc:"trump",text:BS(["to imbue any",{search:"critter",property:"name",saveas:"trumpcritter"},"with the",{search:"subpower",saveas:"subpower",property:"pc",checkfor:"yes",append:" type power",ifnot:"Power"},{saved:"subpower",property:"text"}])},
	{text:BS([{search:"untypedpowers"}])},
];
basetypes.subpower = [
	{pc:"changer",text:"to shrink down to half their original size"},
	{pc:"changer",text:"to grow to double their original size"},
	{pc:"changer",text:BS(["to change into",{search:"critter",notmatch:"trumptrigger",property:"name",wantarticle:true}])},
	{pc:"changer",text:BS(["to change into",{search:"thingy",saveas:"thingy"},{search:"moddedthingy",wantarticle:true}])},
	{pc:"master",text:BS(["to compel people that touch it to engage in",{search:"dance"}])},
	{pc:"mover",text:BS(["of extreme",{search:"dance"}])},
	{pc:"shaker",text:BS(["to conjure",{search:"worldeffect"}])},
	{text:BS([{search:"untypedpowers"}])},
];
basetypes.gender = [
	{possessive:"her",nominative:"she"},
	{possessive:"his",nominative:"he"},
];
basetypes.moddedthingy = [
	BS([{search:"valuemodifier",property:"text"},{search:"qualitymodifier",property:"text"},{search:"theme"},{saved:"thingy",search:"thingy",saveas:"thingy",property:"name"}]),
	BS([{search:"valuemodifier",property:"text"},{search:"qualitymodifier",property:"text"},{saved:"thingy",search:"thingy",saveas:"thingy",property:"name"}]),
];
basetypes.somehero = [
	{name:BS([
		{search:"triggered",saveas:"triggered",filter:{type:"nomatch",property:"name",value:"I"}},
		{search:"power",saveas:"power"},
		{search:"thingy",saveas:"thingy"},
		,"the new hero with the",{saved:"power",property:"pc",checkfor:"yes",append:" type power",ifnot:"Power"},{saved:"power",property:"text"}
		]),
		possessive:BS([{saved:"triggered",property:"possessive"}]),
		item:BS([{search:"moddedthingy"}]),
		itemarticle:BS({search:"moddedthingy",wantarticle:true}),
	}
];
basetypes.somevillain = [
	{name:BS([
		{search:"triggered",saveas:"triggered",filter:{type:"nomatch",property:"name",value:"I"}},
		{search:"power",saveas:"power"},
		{search:"thingy",saveas:"thingy"},
		,"the new villain with the",{saved:"power",property:"pc",checkfor:"yes",append:" type power",ifnot:"Power"},{saved:"power",property:"text"}
		]),
		possessive:BS([{saved:"triggered",property:"possessive"}]),
		item:BS([{search:"moddedthingy"}]),
		itemarticle:BS({searh:"moddedthingy",wantarticle:true}),
	}
];
basetypes.someheroproblemlist = [
	"is pregnant",
	"has a drug problem",
	BS(["is faking",{saved:"hero",property:"possessive"},"powers"]),
	"is an evil clone",
	BS(["bought",{saved:"hero",property:"possessive"},"powers"]),
	"was drunk and disorderly",
	"is working overtime far too often",
	"is from the future",
	"is the fourth Endbringer",
	"is retiring in two days",
	"is my father",
	"is your mom",
	"is secretly the Space Pope",
	"suffers from the delusion that the world is fiction",
	"is secretly Director Costa-Brown",
	BS(["is being controlled by",{search:"master"}]),
	"never existed",
	BS(["is a Time Lord and",{saved:"hero",property:"possessive"},{saved:"hero",property:"item"},"is",{saved:"hero",property:"possessive"},"TARDIS"]),
	"died in the last Endbringer battle",
	"is the Butcher",
	"is an AI",
	"is an S-class threat",
	"was a Ziz-bomb all along",
];
basetypes.someheroproblem = [
	BS([{search:"somehero",saveas:"hero",property:"name"},{search:"someheroproblemlist"}]),
];
basetypes.citizenexcuse = [
	BS(["hand over",{search:"critter",property:"article",saveas:"critter",forcea_an:"a"},"tinkertech",{search:"thingytrait",property:"text",min:0,max:2},{saved:"critter",property:"name"},"that I found",{search:"activity"}]),
	BS(["hand over",{search:"thingy",saveas:"thingy",property:"article",checkfor:"yes",forcea_an:"a"},"tinkertech",{search:"thingytrait",property:"text",min:0,max:2},{saved:"thingy",property:"name"},"that I found",{search:"locations",saveas:"loc",property:"at"},{saved:"loc",property:"name"}]),
	BS(["report a gang fight between",{search:"nonhero_group",property:"name",saveas:"nonhero_group1"},"and",{search:"nonhero_group",property:"name",notmatch:"nonhero_group1"}]),
	BS([{search:"any_group",saveas:"any_group"},"report",{saved:"any_group",property:"supermembers",checkfor:"yes"},{saved:"any_group",property:"name"},"loitering",{search:"locations",saveas:"loc",property:"at"},{saved:"loc",property:"name"}]),
	BS(["report that",{search:"triggered",saveas:"triggered",property:"name"},{saved:"triggered",property:"has"},"triggered with the",{search:"power",saveas:"power",property:"pc",checkfor:"yes",append:" type power",ifnot:"Power"},{saved:"power",property:"text"}]),
	BS(["report that",{search:"endbringer",property:"name",saveas:"endbringer"},{saved:"endbringer",property:"has",checkfor:"yes",ifnot:"has"},"been sighted",{search:"locations",saveas:"loc",property:"at"},{saved:"loc",property:"name"}]),
	BS(["report that",{search:"endbringer",property:"name",filter:{type:"nomatch",property:"plural",value:"yes"},saveas:"endbringer"},{saved:"endbringer",property:"has",checkfor:"yes",ifnot:"has"},"been sighted",{search:"locations",saveas:"loc",property:"at"},{saved:"loc",property:"name"},"wearing",{search:"clothing"}]),//"I'm a concerned citizen. I'm here to report that all three Endbringers have been sighted in the Rig wearing a topless bikini." <- this will no longer happen. -94000130FFF70000
	//That being said, perhaps it would work better if clothing was adjusted to support singular and plural. Can probably use a BS in ifnot: to make it singular if the endbringer isn't tagged as plural.
	BS(["report overhearing a suspicious conversation between",{search:"somehero",property:"name"},"and",{search:"nonhero_group",property:"member",checkfor:"yes",saveas:"nonhero_group"},{saved:"nonhero_group",property:"name"},{search:"locations",saveas:"loc",property:"at"},{saved:"loc",property:"name"}]),
	BS(["report a",{search:"game"},"between",{search:"hero",property:"name",saveas:"hero1"},"and",{search:"hero",property:"name",notmatch:"hero1",saveas:"hero2"},"over which of them gets to fight",{search:"any_group",property:"name",notmatch:["hero1","hero2"],notmatchproperty:"group",}]),
	BS(["report that",{search:"hero",saveas:"hero1",property:"name",append:","},
		{search:"hero",saveas:"hero2",property:"name",append:",",notmatch:"hero1"}, "and",
		{search:"hero",saveas:"hero3",property:"name",notmatch:["hero1","hero2"]},
		"were seen walking down the street with", {saved:"hero3",property:"itemarticle",append:","},
		{saved:"hero1",property:"itemarticle",append:","}, "and",  {saved:"hero2",property:"itemarticle",append:","},"respectively"]),
	BS(["report that",{search:"villain",saveas:"villain1",property:"name",append:","},
		{search:"villain",saveas:"villain2",property:"name",append:",",notmatch:"villain1"}, "and",
		{search:"villain",saveas:"villain3",property:"name",notmatch:["villain1","villain2"]},
		"were seen walking down the street with", {saved:"villain2",property:"itemarticle",append:","},
		{saved:"villain3",property:"itemarticle",append:","}, "and", {saved:"villain1",property:"itemarticle",append:","},"respectively"]),
	BS(["turn myself in for Master/Stranger screening after seeing",{search:"masterstranger"}]),
	BS(["report",{search:"shrine_type",property:"text",wantarticle:true},"shrine to",{search:"someparahumanendbringerorgroup"},{search:"locations",saveas:"location",property:"at"},{saved:"location",property:"name"}]),
	BS(["report spotting",{search:"someparahuman",property:"name"},"going on an enthusiastic walk",{search:"locations",saveas:"loc",property:"at"},{saved:"loc",property:"name"}]),
];
basetypes.masterstranger = [
	BS([{search:"someparahuman",property:"name"},"bathing in",{search:"substance"}]),
	BS([{search:"hero",property:"name"},"making out with",{search:"villain",property:"name"},{search:"locations",saveas:"location",property:"at"},{saved:"location",property:"name"}]),
	BS([{search:"endbringer",saveas:"endbringer1",property:"name",filter:{type:"nomatch",property:"plural",value:"yes"}},{search:"dance"},"with",{search:"endbringer",notmatch:"endbringer1",property:"name",filter:{type:"nomatch",property:"plural",value:"yes"}},{search:"locations",saveas:"location",property:"at"},{saved:"location",property:"name"}]),
	BS([{search:"someparahuman",property:"name",saveas:"parahuman"},"go by with",{search:"gobywith"}]),
];
//not currently used
basetypes.bathsubstance = [
	[100,BS([{search:"substance"}])],
	[1,"an unrealistically sensual way"],
];
basetypes.shrine_type = [
	{text:"creepy",article:"a"},
	{text:"tasteless",article:"a"},
	{text:"insulting",article:"an"},
	{text:"well preserved",article:"a"},
];
basetypes.game = [
	"thumb war",
	"round of rock/paper/scissors",
	"round of poker",
];
basetypes.humaninterest = [
	"build sympathy for the human we all know lies",
	"expose the monster",
];
basetypes.reporterreason = [
	BS(["discuss the recent victory of",{search:"somehero",property:"name"},"against",{search:"nonhero_group",property:"name"}]),
	BS(["interview",{search:"somehero",property:"name"},"about the recent spate of",{search:"critter",property:"name"},"abductions"]),
	BS(["interview",{search:"somehero",property:"name"},"about the recent wave of hate crime against",{search:"professional"}]),
	BS(["discuss the use of",{search:"substance"},"by",{search:"somehero",property:"name"},"against",{search:"nonhero_group",property:"name"}]),
	BS(["discuss the use of",{search:"substance"},"by",{search:"somevillain",property:"name"},"against",{search:"hero_group",property:"name"}]),
	BS(["ask whether",{search:"somehero",property:"name"},"left",{search:"moddedthingy",wantarticle:true},{search:"locations",saveas:"loc",property:"at"},{saved:"loc",property:"name"}]),
	BS([{search:"triggered",saveas:"triggered",filter:{type:"nomatch",property:"name",value:"I"}},{search:"power",saveas:"power"},"ask whether the new cape who has the",{saved:"power",property:"pc",checkfor:"yes",append:" type power",ifnot:"Power"},{saved:"power",property:"text"},"and wears",{search:"clothing"},"is a hero or a villain"]),
	BS(["interview",{search:"somehero",property:"name"},"about the recent outbreak of",{search:"thingy",property:"name"},"theft"]),
	BS(["inquire about the rumours which imply that",{search:"someheroproblem"}]),
	BS(["do research for a human interest piece to",{search:"humaninterest"},"behind",{search:"hero",property:"name",append:"'s"},"mask"]),
	BS(["investigate the hint of a rumor of",{search:"hero",property:"name"},"having possibly dropped",{search:"thingy",property:"name",wantarticle:true}]),
	BS(["investigate the hint of a rumor of",{search:"hero",property:"name",saveas:"hero"},"having possibly dropped",{saved:"hero",property:"possessive"},{saved:"hero",property:"item"}]),
	BS(["inquire about",{search:"hero",property:"name",append:"'s"},"motivations for going on an enthusiastic walk",{search:"locations",saveas:"loc",property:"at"},{saved:"loc",property:"name"}]),
];
basetypes.villainbehavior = [
	BS([{search:"swingthing",saveas:"swingthingy"},{search:"swingverbs",filter:{type:"match",property:"verb",value:BS([{saved:"swingthingy",property:"verb",checkfor:"yes",ifnot:"swinging"}])},saveas:"swingverb"},{saved:"swingverb",property:"hit"},"me with",{saved:"swingthingy",property:"name",wantarticle:true}]),
	BS(["was last seen",{search:"locations",saveas:"loc",property:"at"},{saved:"loc",property:"name"},"and is",{search:"swingthing",saveas:"swingthingy"},{search:"swingverbs",filter:{type:"match",property:"verb",value:BS([{saved:"swingthingy",property:"verb",checkfor:"yes",ifnot:"swinging"}])},saveas:"swingverb"},{saved:"swingverb",property:"verb"},{saved:"swingthingy",property:"name",wantarticle:true},"at",{saved:"swingverb",property:"range"}]),
];
basetypes.victimcomplaint = [
	BS(["complain that my",{search:"moddedthingy"},"has been",{search:"propertycrimepast"},"by",{search:"nonhero_group",property:"name"}]),
	BS([{search:"nonhero_group",saveas:"nonhero_group"},"complain that",{search:"thirdparty"},"has been",{search:"personcrimepast"},{saved:"nonhero_group",property:"name"}]),
	BS(["complain that",{search:"thirdparty"},"has been hypnotised by",{search:"nonhero_group",property:"name"},"into",{search:"activity"}]),
	BS(["complain that a villain wearing",{search:"clothing"},{search:"villainbehavior"}]),
	BS(["reclaim my stolen",{search:"moddedthingy"}]),
	BS(["complain that",{search:"somevillain",property:"name",saveas:"villain"},"stole my",{search:"moddedthingy"},"while fighting",{search:"someparahumanorgroup"}]),
	BS(["complain that",{search:"someparahuman",property:"name",saveas:"parahuman"},"accidentally gave my",{search:"moddedthingy"},"to",{search:"any_group",property:"name",notmatch:"parahuman",notmatchproperty:"group"}]),
];
basetypes.writtenwork = [
	"a cookbook",
	"a propaganda pamphlet",
	"a philosophical treatise",
	"a bildungsroman",
	"a romance novel",
	"a dendrology textbook",
	"a bestselling self-help series",
	"a galactic guide for hitchikers",
	"the new edition of Parahumanology for Dummies",
	"an urban fantasy",
	"a poem",
	BS(["the unofficial reveal-all biography of",{search:"hero",property:"name"}]),
];
basetypes.food = [
	"spaghetti",
	"chocolate",
	"licorice",
];
basetypes.ransom = [
	BS([{search:"number"},{search:"unit"},"of",{search:"substance"},"are"]),
	BS([{search:"somehero",property:"name"},{search:"restraintmanner",prepend:"("},"restrained in",{search:"restraint",append:")"},"is"]),
	BS(["the only",{search:"moddedthingy"},"in the world is"]),
	BS([{search:"valuemodifier",property:"text",wantarticle:true},{search:"thingytrait",property:"text"},{search:"swingthing",property:"name"},"is"]),
	BS([{search:"crittertrait",property:"text",wantarticle:true},{search:"critter",property:"name"},"and a helicopter full of",{search:"food"},"are"]),
];
basetypes.angrymob = [
	BS(["demand that",{search:"hero",property:"name",saveas:"hero"},"turn over",{saved:"hero",property:"possessive"},{saved:"hero",property:"item"},"for",{search:"itemaction"}]),
	BS(["request",{search:"hero_group",property:"name",append:"'s"},"assistance as we hunt down",{search:"nonhero_group",property:"name",saveas:"nonhero_group"},"to stop",{saved:"nonhero_group",property:"pronoun",checkfor:"yes",ifnot:"them"},"from",{search:"activity"}]),
];
basetypes.itemaction = [
	"examination",
	"radiation testing",
	"DNA testing",
];
basetypes.gangmember = [
	BS(["after seeing",{search:"someparahumanendbringerorgroup"},"going on an enthusiastic walk through our territory"]),
	BS(["to avoid the wrath of",{search:"somevillain",property:"name",saveas:"villain"},"after another member of the gang stole",{saved:"villain",property:"possessive"},{saved:"villain",property:"item"}]),
	BS(["to throw myself on your mercy after another member of the gang stole",{search:"hero",property:"name",append:"'s",saveas:"hero"},{saved:"hero",property:"item"}]),
];


basetypes.while_effect = [
	"walk up the side of buildings",
	"perform incredible feats of acrobatics",
	"become immune to environmental extremes",
	BS(["spontaneously end up wearing",{search:"clothing"}]),
];
basetypes.while_action = [
	"singing",
	"engaging in a filibuster",
	"chasing road runners",
	BS(["hunting",{search:"critter",property:"plural"}]),
];
basetypes.gobywith = [
	BS([{search:"shoveitem",property:"name",wantarticle:true},"shoved up",{saved:"parahuman",property:"possessive"},"ass"]),
	BS(["a large number of",{search:"dance"},{search:"critter",property:"plural"}]),
];
basetypes.shoveitem = [
	{name:BS([{search:"crittertrait",property:"text"},{search:"critter",property:"name"}])},
	{name:BS([{search:"swingthing",property:"name"}])},
];
basetypes.marketingreason = [
	BS(["discuss the design of the new",{search:"theme"},{search:"thingy",property:"name"}]),
];
basetypes.writerreason = [
	BS(["ask some questions about",{search:"somehero",property:"name"},"as research for",{search:"writtenwork"},"I'm writing"]),
];
basetypes.janitorreason = [
	BS(["clean up a mass of",{search:"substance"},"which was spilled by",{search:"hero",property:"name"}]),
];
basetypes.repairmanreason = [
	BS(["fix the damage from the recent fight between",{search:"any_group",saveas:"any_group1",property:"name"},"and",{search:"any_group",notmatch:"any_group1",property:"name"}]),
];
basetypes.memberofgang = [
	BS([{search:"nonhero_group",filter:{type:"match",property:"type",value:"gang"},saveas:"mygang"},{saved:"mygang",property:"member",checkfor:"yes"},{saved:"mygang",property:"name"}]),
	"a member of a gang",
];
basetypes.gangmemberreason = [
	BS(["turn myself in",{search:"gangmember"}]),
];

