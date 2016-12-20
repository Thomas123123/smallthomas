"use strict";

function getData(filename, callback) {
	var req = new XMLHttpRequest();
	req.open("GET", filename);
	req.onload = function () {
		var obj = JSON.parse(this.responseText);
		callback(obj);
	};
	req.send();
}

module.exports = getData;