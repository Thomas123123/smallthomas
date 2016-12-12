var marquee = require('./marquee.js')

function marquee2(){
	var mar = document.getElementById('marquee');
	mar.innerHTML = marquee();
}

module.exports = marquee2 ;