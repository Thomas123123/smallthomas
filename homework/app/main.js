var mar = require('./js/marquee2.js');
var _timer = require('./js/timer.js') ;
var _style = require('./css/style.css') ; 
var React = require('react');

// var _getData = require('./js/getData.js'); 
// var _bootstrap = require('./bootstrap.min.js');


// _getData("adver.json",function(obj){
// document.getElementById("marquee").innerHTML =
// 		obj[0].adver + " " + obj[1].adver;

// }); 

// React.render(
// 	  <h1>Hello, world!</h1>,
// 	  document.body
// 	);





//_getData() ;
//timer()  ;
//_timer() ;
mar();
setInterval(_timer,1000) ;






 
 