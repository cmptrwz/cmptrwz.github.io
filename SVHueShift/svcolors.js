var SVColorSet = {
	"01":{"original":"#007aff"},
	"02":{"original":"#020304"},
	"03":{"original":"#131c26"},
	"04":{"original":"#131e28"},
	"05":{"original":"#15293b"},
	"06":{"original":"#1b2938"},
	"07":{"original":"#1f2327"},
	"08":{"original":"#203142"},
	"09":{"original":"#212830"},
	"10":{"original":"#223346"},
	"11":{"original":"#233649"},
	"12":{"original":"#24282b"},
	"13":{"original":"#243548"},
	"14":{"original":"#253b4f"},
	"15":{"original":"#283e54"},
	"16":{"original":"#28a1dd"},
	"17":{"original":"#2b2d2f"},
	"18":{"original":"#2b3846"},
	"19":{"original":"#2c4259"},
	"20":{"original":"#2c465e"},
	"21":{"original":"#2c557d"},
	"22":{"original":"#2f4a64"},
	"23":{"original":"#324c68"},
	"24":{"original":"#33495e"},
	"25":{"original":"#375573"},
	"26":{"original":"#375775"},
	"27":{"original":"#395b7c"},
	"28":{"original":"#3b4754"},
	"29":{"original":"#3c5f80"},
	"30":{"original":"#3e6386"},
	"31":{"original":"#3f658a"},
	"32":{"original":"#406588"},
	"33":{"original":"#4091fd"},
	"34":{"original":"#416486"},
	"35":{"original":"#464646"},
	"36":{"original":"#477198"},
	"37":{"original":"#486e94"},
	"38":{"original":"#496d90"},
	"39":{"original":"#49759f"},
	"40":{"original":"#4f7fad"},
	"41":{"original":"#5d8bb4"},
	"42":{"original":"#618bb4"},
	"43":{"original":"#6495c1"},
	"44":{"original":"#90a4ae"},
	"45":{"original":"#b8bbbe"},
	"46":{"original":"#afc5da"},
	"47":{"original":"#304b65"},
};

function setupSVColor() {
	var colorlist = document.getElementById('colorlist');
	Object.keys(SVColorSet).sort().forEach(function(key) {
		SVColorSet[key]["w3color"] = w3color(SVColorSet[key]["original"]);
		var tr = document.createElement('tr');
		var orgtd = document.createElement('td');
		orgtd.style.background = SVColorSet[key]["original"];
		var newtd = document.createElement('td');
		newtd.style.background = SVColorSet[key]["original"];
		SVColorSet[key]["output"] = newtd;
		tr.appendChild(orgtd);
		tr.appendChild(newtd);
		colorlist.appendChild(tr);
	});
	rotateSVColor();
}
function rotateSVColor() {
	var cssout = document.getElementById('cssout');
	var cssin = document.getElementById('cssin');
	var rotate = Number(document.getElementById('rotdeg').value);
	var tempcss = cssin.value;
	tempcss = tempcss.replace(new RegExp('\\$ROTNUM', 'g'), rotate);
	Object.keys(SVColorSet).sort().forEach(function(key) {
		var oldcolor = SVColorSet[key]["w3color"].toHsl();
		var newcolor = w3color("hsl(" + (oldcolor.h + rotate) + "," + oldcolor.s + "," + oldcolor.l + ")");
		var newcolorhex = newcolor.toHexString();
		var newcolorrgb = newcolor.toRgb();
		// The opacity component is left in the CSS file
		var newcolorrgba = "rgba(" + newcolorrgb.r + "," + newcolorrgb.g + "," + newcolorrgb.b;
		SVColorSet[key]["output"].style.background = newcolorhex;
		tempcss = tempcss.replace(new RegExp('\\$HEX' + key, 'g'), newcolorhex);
		tempcss = tempcss.replace(new RegExp('\\$RGB' + key, 'g'), newcolorrgba);
	});
	cssout.value = tempcss;
}
function myLoad() {
			var trs = document.getElementsByTagName('tr');
			for (i = 0; i < trs.length; i++) {
				var tds = trs[i].getElementsByTagName('td');
				var startcolor = tds[0].textContent;
				var c = w3color(startcolor);
				if (!c.valid) {
					console.log(startcolor + " is not a valid color");
				}
				else {
					var newcolor = c.toHsl();
					newcolor.h -= 149;
					var nc = w3color("hsla(" + newcolor.h.toString() + "," + newcolor.s.toString() + "," + newcolor.l.toString() + "," + newcolor.a.toString() + ")");
					if (startcolor[0] == "#") {
						tds[1].textContent = nc.toHexString();
						tds[1].style = "background: " + nc.toHexString() + ";";
					}
					else {
						tds[1].textContent = nc.toRgbaString();
						tds[1].style = "background: " + nc.toRgbaString() + ";";
					}
				}
			}
		}
