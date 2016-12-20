"use strict";

function timer() {
	var dt = new Date();
	var date = dt.getFullYear() + "年" + (dt.getMonth() + 1) + "月" + dt.getDate() + "日";
	var time = dt.getHours() + "時" + dt.getMinutes() + "分" + dt.getSeconds() + "秒";
	document.getElementById("date").innerHTML = date;
	document.getElementById("time").innerHTML = time;
}

module.exports = timer;