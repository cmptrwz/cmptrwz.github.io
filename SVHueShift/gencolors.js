function rotateColor() {
	var colorlist = document.getElementById('colorlist');
	var child = colorlist.lastElementChild;
	while (child) {
		colorlist.removeChild(child);
		child = colorlist.lastElementChild;
	}
	var rotate = Number(document.getElementById('rotdeg').value);
	var colorin = document.getElementById('colorin');
	var startvalues = colorin.value.replace(/\r\n/g).split('\n');
	startvalues.forEach(function(incolor) {
		if (incolor == "") return;
		var color = w3color(incolor);
		if (color == undefined) return;
		var tr = document.createElement('tr');
		var orgcodetd = document.createElement('td');
		orgcodetd.appendChild(document.createTextNode(incolor));
		tr.appendChild(orgcodetd);
		var orgcolortd = document.createElement('td');
		orgcolortd.style.background = incolor;
		tr.appendChild(orgcolortd);
		var oldcolor = color.toHsl();
		var newcolor = w3color('hsl(' + (oldcolor.h + rotate) + ',' + oldcolor.s + ',' + oldcolor.l + ')');
		var newcolorhex = newcolor.toHexString();
		var newcolorrgb = newcolor.toRgb();
		var newcodetd = document.createElement('td');
		newcodetd.appendChild(document.createTextNode(newcolorhex + ' / rgb(' + newcolorrgb.r + ',' + newcolorrgb.g + ',' + newcolorrgb.b + ')'));
		tr.appendChild(newcodetd);
		var newcolortd = document.createElement('td');
		newcolortd.style.background = newcolorhex;
		tr.appendChild(newcolortd);

		colorlist.appendChild(tr);
	});
}
