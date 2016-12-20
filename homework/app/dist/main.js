'use strict';

var mar = require('../dist/marquee2.js');
var _timer = require('../dist/timer.js');
var _style = require('../css/style.css');
// const React = require('react');
// const _getData = require('../dist/getData.js'); 
// const _bootstrap = require('../bootstrap.min.js');


// _getData("../adver.json",function(obj){
// document.getElementById("marquee").innerHTML =
// 		obj[0].adver + " " + obj[1].adver;
// }); 


// _getData() ;
//timer()  ;
//_timer() ;
mar();
setInterval(_timer, 1000);