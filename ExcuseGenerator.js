/*
 * (Not Really Armsmaster's) Random Excuse Generator
 * Generates excuses. Which are random.
 *
 * Coded by CmptrWz who didn't like EldritchPangolin's
 * Turned into a much more generic generator over time
 *
 */

"use strict";

// Types will be defined later, but the storage for them is here
// These comes in various types for various purposes
var basetypes = {}; // Base type data
var fantypes = {}; // Fan type data
var dynamic_types = {}; // Dynamic type definitions
var types = {};
// Other data we care about
var advanced_selectors = []; // For letting people manually filter types
var generate_modes = []; // Top-level mode definitions
// Temp Storage, reset on buildNew()
var buildTemp;
// Stats Storage, reset on buildNew()
var buildStats;
// Most attempts we allow
var maxAttempts = 10000;

// Base object for my string building dance
function BuildString(arr) {
	this.values = arr;
}
// Override the toString function with the guts of things
BuildString.prototype.toString = function() {
	var out = "";
	this.values.forEach(function(element) {
		var append = true;
		var prepend = " ";
		if (typeof(element) == "string") {
			// Strings get included as-is
			out += " " + element;
		} else {
			// Object, then.
			if (typeof element.min !== 'undefined' || typeof element.max !== 'undefined') {
				append = false;
			}
			if (append && typeof element.prepend !== 'undefined') {
				prepend += element.prepend;
			}
			// Articles may be several searches deep, so we flag it *now*, and clear it after the next output.
			// This may mean it gets cleared multiple times.
			// This is also a PITA, but there are too many annoying article points to rely on a/an switching
			if (typeof element.wantarticle !== 'undefined') {
				buildTemp['want.article'] = element.wantarticle;
			}
			if (element.store) {
				buildTemp[element.store] = element.value;
			} else if (element.retrieve) {
				if (typeof buildTemp[element.retrieve] !== 'undefined') {
					out += prepend + buildTemp[element.retrieve];
				} else if (typeof element.ifnot !== 'undefined') {
					out += " " + element.ifnot;
				}
				delete buildTemp[element.retrieve];
			} else if (typeof element.search !== 'undefined' || (typeof element.saved !== 'undefined' && typeof buildTemp[element.saved] !== 'undefined')) {
				var checkElement;
				var searchlist;
				var newElements = [];
				var mincount = 1;
				var maxcount = 1;
				var notMatch = [];
				if (typeof element.saved !== 'undefined' && typeof buildTemp[element.saved] !== 'undefined') {
					checkElement = buildTemp[element.saved];
				} else {
					searchlist = element.search;
					if (typeof types[element.search+"_custom"] !== 'undefined') {
						searchlist += "_custom";
					}
					if (typeof element.min !== 'undefined') {
						mincount = element.min;
					}
					if (typeof element.max !== 'undefined') {
						maxcount = element.max;
					}
					if (Array.isArray(element.notmatch)) {
						element.notmatch.forEach(function(matchitem) {
							if (typeof buildTemp[matchitem] !== 'undefined') {
								if (typeof element.notmatchproperty !== 'undefined') {
									notMatch.push(buildTemp[matchitem][element.notmatchproperty]);
								} else {
									notMatch.push(buildTemp[matchitem]);
								}
							}
						});
					} else if (typeof element.notmatch !== 'undefined') {
						if (typeof buildTemp[element.notmatch] !== 'undefined') {
							if (typeof element.notmatchproperty !== 'undefined') {
								notMatch.push(buildTemp[element.notmatch][element.notmatchproperty]);
							} else {
								notMatch.push(buildTemp[element.notmatch]);
							}
						}
					}
				}
				var count = mincount + Math.floor(Math.random()*(maxcount - mincount));
		
				for(var i = 0; i < count; i++) {
					var newElement;
					if (typeof checkElement !== 'undefined') {
						newElement = checkElement;
					} else {
						var tries = 0;
						do {
							tries++;
							if (Array.isArray(types[searchlist][0])) {
								// Weighted selection
								if (!types[searchlist+"_weighted"]) {
									types[searchlist+"_weighted"] = [];
									types[searchlist].forEach(function(preweight){
										for(var i = 0; i<=preweight[0]; i++) {
											types[searchlist+"_weighted"].push(preweight[1]);
										}
									});
								}
								newElement = types[searchlist+"_weighted"][
									Math.floor(Math.random()*types[searchlist+"_weighted"].length)
								];
							} else {
								// Normal selection
								newElement = types[searchlist][
									Math.floor(Math.random()*types[searchlist].length)
								];
							}
						} while (
								newElements.includes(newElement) ||
								notMatch.includes(newElement) ||
								filterCheck(element.filter, newElement)
								);
						buildStats.filterRetries += tries - 1;
						var requirePropertyOrString = false;
						if (typeof element.saveas !== 'undefined') {
							buildTemp[element.saveas] = newElement;
							requirePropertyOrString = true;
						}
					}
					var outproperty;
					var outarticle;
					if (typeof element.property !== 'undefined') {
						if (typeof newElement.article !== 'undefined') {
							var tempArticle = buildTemp['want.article'];
							outarticle = newElement.article.toString();
							buildTemp['want.article'] = tempArticle;
						}
						if (element.checkfor == 'yes') {
							if (typeof newElement[element.property] !== 'undefined') {
								if (Array.isArray(newElement[element.property])) {
									var arr = newElement[element.property];
									outproperty = arr[Math.floor(Math.random()*arr.length)];
								} else {
									outproperty = newElement[element.property];
								}
								if (typeof element.subproperty !== 'undefined') {
									if (typeof outproperty.article !== 'undefined') {
										var tempArticle = buildTemp['want.article'];
										outarticle = outproperty.article.toString();
										buildTemp['want.article'] = tempArticle;
									}
									var outvalue = outproperty[element.subproperty].toString().trim();
									if ((outvalue == 'a' || outvalue == 'an') && typeof element.forcea_an === 'string') {
										outvalue = element.forcea_an;
									}
									if (buildTemp['want.article'] && typeof outarticle !== 'undefined') {
										out += prepend + outarticle + " " + outvalue;
									} else {
										out += prepend + outvalue;
									}
								} else {
									var outvalue = outproperty.toString().trim();
									if ((outvalue == 'a' || outvalue == 'an') && typeof element.forcea_an === 'string') {
										outvalue = element.forcea_an;
									}
									if (buildTemp['want.article'] && typeof outarticle !== 'undefined') {
										out += prepend + outarticle + " " + outvalue;
									} else {
										out += prepend + outvalue;
									}
								}
							} else {
								if (typeof element.ifnot !== 'undefined') {
									out += " " + element.ifnot;
								}
								append = false;
							}
						} else {
							if (Array.isArray(newElement[element.property])) {
								var arr = newElement[element.property];
								outproperty = arr[Math.floor(Math.random()*arr.length)];
							} else {
								outproperty = newElement[element.property];
							}
							if (typeof element.subproperty !== 'undefined') {
								if (typeof outproperty.article !== 'undefined') {
									var tempArticle = buildTemp['want.article'];
									outarticle = outproperty.article.toString();
									buildTemp['want.article'] = tempArticle;
								}
								var outvalue = outproperty[element.subproperty].toString().trim();
								if ((outvalue == 'a' || outvalue == 'an') && typeof element.forcea_an === 'string') {
										outvalue = element.forcea_an;
								}
								if (buildTemp['want.article'] && typeof outarticle !== 'undefined') {
									out += prepend + outarticle + " " + outvalue;
								} else {
									out += prepend + outvalue;
								}
							} else {
								var outvalue = outproperty.toString().trim();
								if ((outvalue == 'a' || outvalue == 'an') && typeof element.forcea_an === 'string') {
										outvalue = element.forcea_an;
								}
								if (buildTemp['want.article'] && typeof outarticle !== 'undefined') {
									out += prepend + outarticle + " " + outvalue;
								} else {
									out += prepend + outvalue;
								}
							}
						}
						buildTemp['want.article'] = false;
						prepend = " ";
					} else if (requirePropertyOrString == false || typeof NewElement === 'string') {
						out += prepend + newElement;
						buildTemp['want.article'] = false;
						prepend = " ";
					}
					newElements.push(newElement);
				}
			} else if (element.wantarticle) {
				// Do nothing, because by now we're probably looking at "I just want to flag for article"
			} else {
				// Probably an object that will do its own processing.
				out += prepend + element;
			}
			if (typeof element.append !== 'undefined' && append) {
				out += element.append;
			}
		}
	});
	return out;
}

// This returns true if the filter matches and false otherwise
function filterCheck(filter, element) {
	if (typeof filter === 'undefined') return false;
	if (!(['match','nomatch'].includes(filter.type)))
		return false;
	var elementvalue = element;
	if (typeof filter.property !== 'undefined')
		elementvalue = element[filter.property];
	if (!Array.isArray(elementvalue)) {
		elementvalue = [elementvalue];
	}
	var filtervalue = [];
	if (Array.isArray(filter.value)) {
		filter.value.forEach(function(entry) {
			if(typeof entry !== 'undefined') {
				filtervalue.push(entry.toString().trim());
			} else {
				filtervalue.push(undefined);
			}
		});
	} else if (typeof filter.value !== 'undefined') {
		filtervalue.push(filter.value.toString().trim());
	} else {
		filtervalue = [undefined];
	}
	var matched = false;
	elementvalue.forEach(function(entry) {
		var checkentry = entry;
		if (typeof checkentry !== 'undefined') {
			checkentry = checkentry.toString().trim();
		}
		matched = matched || filtervalue.includes(checkentry);
	});
	return matched != (filter.type == 'match');
}

// Shortcut so I don't have to type new BuildString all the time
// Also, I get to fill the type data with BS.
function BS(arr) {
	return new BuildString(arr);
}

// Function to actually generate stuff
function buildNew(basetype,outElement,count,searchfor) {
	if (Math.floor(count) <= 0 || isNaN(Math.floor(count)) || Math.floor(count) > maxAttempts) {
		alert("Number not valid: " + count);
		return;
	} else {
		count = Math.floor(count);
	}
	if (typeof types[basetype] === 'undefined') buildTypes();
	if (!validateCustoms()) {
		return;
	}
	var re = RegExp('.');
	if (typeof searchfor !== 'undefined') {
		re = RegExp(searchfor);
	}
	while (outElement.hasChildNodes()) {
		outElement.removeChild(outElement.lastChild);
	}
	buildStats = {built:0,filterRetries:0,output:0};
	for (var i = 0; i < maxAttempts; i++) {
		buildTemp = {'want.article':false};
		var newString = BS([{search:basetype}])
			.toString()
			.replace(/\s\s+/g, " ")
			.trim() + '.';
		buildStats.built++;
		if (re.test(newString)) {
			if (buildStats.output) {
				outElement.appendChild(document.createElement("hr"));
			}
			outElement.appendChild(document.createTextNode(newString));
			buildStats.output++;
			if (buildStats.output >= count) {
				break;
			}
		}
	}
	if (buildStats.output == 0) {
		outElement.appendChild(document.createTextNode("SEARCH STRING NOT FOUND AFTER " + buildStats.built + " ATTEMPTS"));
	}
	var statsOut = document.getElementById("buildStatsOutput");
	if (statsOut) {
		while (statsOut.hasChildNodes()) {
			statsOut.removeChild(statsOut.lastChild);
		}
		statsOut.appendChild(document.createTextNode("Built " + buildStats.built + " string(s)."));
		statsOut.appendChild(document.createElement("br"));
		statsOut.appendChild(document.createTextNode("Ouput " + buildStats.output + " of " + count + " requested strings."));
		statsOut.appendChild(document.createElement("br"));
		statsOut.appendChild(document.createTextNode("Discarded " + (buildStats.built - buildStats.output) + " non-matching strings."));
		statsOut.appendChild(document.createElement("br"));
		statsOut.appendChild(document.createTextNode("Filters discarded " + buildStats.filterRetries + " selections."));
	}
}

// I wanted to be able to turn on/off fandoms
// So this happened
function buildTypes() {
	// Clear the types
	types = {};
	// First up, the base types
	for (var cat in basetypes) {
		if (!basetypes.hasOwnProperty(cat)) continue;
		if (typeof dynamic_types[cat] !== 'undefined') continue; // Dynamics have special handling
		types[cat] = [].concat(basetypes[cat]);
	}
	// Next up, fandom types
	var enabledfandoms = [];
	for (var fandom in fantypes) {
		if (!fantypes.hasOwnProperty(fandom)) continue;
		var checkbox = document.getElementsByName(fandom);
		for (var i = 0; i < checkbox.length; i++) {
			if (checkbox[i].type == "checkbox" && checkbox[i].checked) {
				enabledfandoms.push(fandom);
				for (var cat in fantypes[fandom]) {
					if (typeof types[cat] === 'undefined') {
						types[cat] = [];
					}
					types[cat] = types[cat].concat(fantypes[fandom][cat]);
				}
			}
		}
	}
	var d = new Date();
	d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
	var expires = "expires="+d.toUTCString();
	document.cookie = "fandoms=" + enabledfandoms + ";" + expires + ";path=/";
	// Now we have dynamic types
	for (var dynamic in dynamic_types) {
		if (!dynamic_types.hasOwnProperty(dynamic)) continue;
		if (typeof types[dynamic] === 'undefined') types[dynamic] = [];
		if (dynamic_types[dynamic].includebase && Array.isArray(basetypes[dynamic]))
			types[dynamic] = types[dynamic].concat(basetypes[dynamic]);
		for (var member in dynamic_types[dynamic].members) {
			if (!dynamic_types[dynamic].members.hasOwnProperty(member)) continue;
			if (Array.isArray(types[dynamic_types[dynamic].members[member]])) {
				types[dynamic] = types[dynamic].concat(types[dynamic_types[dynamic].members[member]]);
			}
		}
	}
	// And now that we're done building the types, build any custom lists we want
	buildCustoms();
}

function loadData() {	
	var fandomdiv = document.getElementById('fandoms');
	if (fandomdiv) {
		var hasprev = false;
		for (var fandom in fantypes) {
			if (!fantypes.hasOwnProperty(fandom)) continue;
			if (hasprev) {
				fandoms.appendChild(document.createTextNode(' :: '));
			}
			var checkbox = document.createElement('input');
			checkbox.type = 'checkbox';
			checkbox.name = fandom;
			checkbox.addEventListener('click',buildTypes);
			fandomdiv.appendChild(checkbox);
			fandoms.appendChild(document.createTextNode(fandom));
			hasprev = true;
		}
	}
	var advanceddiv = document.getElementById('advanced');
	if (advanceddiv) {
		for (var entry in advanced_selectors) {
			if (!advanced_selectors.hasOwnProperty(entry)) continue;
			if (advanced_selectors[entry].hide) continue;
			var newdiv = document.createElement('div');
			newdiv.classList.add('custom_selector');
			newdiv.appendChild(document.createTextNode(advanced_selectors[entry].name));
			newdiv.appendChild(document.createElement('br'));
			var newselect = document.createElement('select');
			newselect.multiple = 'multiple';
			newselect.id = advanced_selectors[entry].category;
			newdiv.appendChild(newselect);
			advanceddiv.appendChild(newdiv);
		}
	}
	var modediv = document.getElementById('modeContainer');
	var outputdiv = document.getElementById('outputContainer');
	if (modediv && outputdiv) {
		for (var entry in generate_modes) {
			if (!generate_modes.hasOwnProperty(entry)) continue;
			buildMode(modediv,outputdiv,generate_modes[entry],entry);
		}
	}
	loadFandoms();
}

// This is a function for variable scope reasons.
function buildMode(modediv, outputdiv, entry, entrynum) {
	// Need div, button, other elements...
	var modeButton = document.createElement('button');
	modeButton.innerText = entry.name;
	modediv.appendChild(modeButton);
	var outputTab = document.createElement('div');
	outputTab.classList.add('pagetab');
	var generateButton = document.createElement('button');
	generateButton.innerText = entry.button;
	outputTab.appendChild(generateButton);
	var countBox;
	if (entry.bulk) {
		countBox = document.createElement('input');
		countBox.type = 'text';
		countBox.value = '10';
		outputTab.appendChild(document.createTextNode(' Count: '));
		outputTab.appendChild(countBox);
	}
	var searchBox;
	if (entry.search) {
		searchBox = document.createElement('input');
		searchBox.type = 'text';
		outputTab.appendChild(document.createElement('br'));
		outputTab.appendChild(document.createTextNode('Search for: '));
		outputTab.appendChild(searchBox);
		outputTab.appendChild(document.createTextNode(' (regexp, limit ' + maxAttempts + ' attempts)'));
	}
	outputTab.appendChild(document.createElement('hr'));
	if (entry.intro)
		outputTab.appendChild(document.createTextNode(entry.intro));
	var outputBlockquote = document.createElement('blockquote');
	outputTab.appendChild(outputBlockquote);
	if (entrynum > 0) {
		outputTab.style.display = 'none';
	}
	outputdiv.appendChild(outputTab);
	modeButton.addEventListener('click',function() {
		showTab(outputTab);
	});
	generateButton.addEventListener('click',function() {
		buildNew(entry.base,outputBlockquote,countBox ? countBox.value : 1,searchBox ? searchBox.value : undefined);
	});
}


function loadFandoms() {
	var name = "fandoms=";
	var ca = document.cookie.split(';');
	var fandoms = false;
	for(var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			fandoms = c.substring(name.length, c.length);
		}
	}
	if (fandoms) {
		var enabledfandoms = fandoms.split(',');
		enabledfandoms.forEach(function(fandom){
			var checkbox = document.getElementsByName(fandom);
			for (var i = 0; i < checkbox.length; i++) {
				if (checkbox[i].type == "checkbox") {
					checkbox[i].checked = true;
				}
			}
		});
	}
	buildTypes();
}

function toggleDiv(element) {
	var div = document.getElementById(element);
	if (div.style.display === 'none') {
		div.style.display = 'block';
	} else {
		div.style.display = 'none';
	}
}

function showTab(tab) {
	var tabcontent = document.getElementsByClassName("pagetab");
	for (var i = 0; i < tabcontent.length; i++) {
		if (tabcontent[i] == tab) {
			tabcontent[i].style.display = "block";
		} else {
			tabcontent[i].style.display = "none";
		}
	}
}

function buildCustom(elementid,category,properties) {
	var selector = document.getElementById(elementid);
	if (selector) {
		while (selector.length > 0) {
			selector.remove(0);
		}
		var newselector = [];
		for (var entry in types[category]) {
			if(!types[category].hasOwnProperty(entry)) continue;
			if (Array.isArray(types[category][entry])) {
				if (types[category][entry][3]) {
					newselector.push(types[category][entry][3]);
				} else {
					var option = document.createElement('option');
					option.text = types[category][entry][2];
					option.selected = 1;
					option.entry = types[category][entry];
					types[category][entry][3] = option;
					newselector.push(option);
				}
			} else {
				if (types[category][entry].option) {
					newselector.push(types[category][entry].option);
				} else {
					var option = document.createElement('option');
					for (var prop in properties) {
						if (types[category][entry][properties[prop]]) {
							option.text = types[category][entry][properties[prop]];
							break;
						}
					}
					option.selected = 1;
					option.entry = types[category][entry];
					types[category][entry].option = option;
					newselector.push(option);
				}
			}
		}
		newselector.sort(sortOptions);
		for (var newentry in newselector) {
			selector.add(newselector[newentry]);
		}
	}
}

function buildCustoms() {
	for (var entry in advanced_selectors) {
		if (advanced_selectors[entry].hide) continue;
		buildCustom(advanced_selectors[entry].category,advanced_selectors[entry].category,advanced_selectors[entry].properties);
	}
}

function sortOptions(a,b) {
	return (
		a.text.toLowerCase() > b.text.toLowerCase() ? 1 :
		a.text.toLowerCase() < b.text.toLowerCase() ? -1 :
		0
	);
}

function validateCustoms() {
	changeCustoms();
	var errors = [];
	for (var entry in advanced_selectors) {
		var category = advanced_selectors[entry].category;
		var min = advanced_selectors[entry].min;
		if (typeof min == 'undefined' || typeof types[category + '_custom'] == 'undefined') continue;
		if (types[category + '_custom'].length < min) {
			errors.push("Need at least " + min + " " + advanced_selectors[entry].name + ".");
		}
	}
	if (errors.length > 0) {
		alert(errors.join("\n"));
		return false;
	}
	return true;
}

function changeCustom(elementid,category) {
	var selector = document.getElementById(elementid);
	if (selector) {
		delete types[category + "_custom_weighted"];
		types[category + "_custom"] = [];
		for (var entry in selector.options) {
			if (selector.options[entry].selected) {
				types[category + "_custom"].push(selector.options[entry].entry);
			}
		}
	}
}

function changeCustoms() {
	for (var entry in advanced_selectors) {
		if (advanced_selectors[entry].hide) continue;
		var category = advanced_selectors[entry].category;
		var selector = document.getElementById(category);
		if (selector) {
			delete types[category + "_custom_weighted"];
			types[category + "_custom"] = [];
			for (var entry in selector.options) {
				if (selector.options[entry].selected) {
					types[category + "_custom"].push(selector.options[entry].entry);
				}
			}
		}
	}
	for (var dynamic in dynamic_types) {
		if (!dynamic_types.hasOwnProperty(dynamic)) continue;
		types[dynamic + "_custom"] = [];
		delete types[dynamic + "_custom_weighted"];
		if (dynamic_types[dynamic].includebase && Array.isArray(basetypes[dynamic]))
			types[dynamic + "_custom"] = types[dynamic + "_custom"].concat(basetypes[dynamic]);
		for (var member in dynamic_types[dynamic].members) {
			if (!dynamic_types[dynamic].members.hasOwnProperty(member)) continue;
			if (Array.isArray(types[dynamic_types[dynamic].members[member] + "_custom"])) {
				types[dynamic + "_custom"] = types[dynamic + "_custom"].concat(types[dynamic_types[dynamic].members[member] + "_custom"]);
			} else if (Array.isArray(types[dynamic_types[dynamic].members[member]])) {
				types[dynamic + "_custom"] = types[dynamic + "_custom"].concat(types[dynamic_types[dynamic].members[member]]);
			}
		}
	}
}
