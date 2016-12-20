const marquee = require('./marquee.js')

function marquee2(){
	let mar = document.getElementById('marquee');
	mar.innerHTML = marquee();
}

module.exports = marquee2 ;