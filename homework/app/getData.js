<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
function getData()
{
	var req = new XMLHttpRequest();
	req.open("GET","adver.json");
    req.onload = function() {
	 var obj = JSON.parse(this.responseText);
	document.getElementById("marquee").innerHTML =
	obj[0].adver + " " + obj[1].adver;
    };
=======
// function getData(){
	
// 	var req = new XMLHttpRequest();
// 	req.open("GET","adver.json");
//     req.onload = function() {
// 	var obj = JSON.parse(this.responseText);
// 	document.getElementById("marquee").innerHTML =
// 	obj[0].adver + " " + obj[1].adver;
//     };
// 	req.send();
// }

function getData(filename,callback){
=======
function getData()
{
>>>>>>> 40d8d7b7415f4671d808141d3f693fb9d307cba8
	var req = new XMLHttpRequest();
	req.open("GET","adver.json");
    req.onload = function() {
<<<<<<< HEAD
		var obj = JSON.parse(this.responseText);
		callback(obj);
		//document.getElementById("marquee").innerHTML =
		//obj[0].adver;
	};
>>>>>>> parent of f17fa0d... no message
=======
=======
function getData()
{
	var req = new XMLHttpRequest();
	req.open("GET","adver.json");
    req.onload = function() {
>>>>>>> parent of cc8bd78... 1.webpack V2.0  加入了plugin功能(HMR,extractText,commonsChunk,provide,uglify)
	 var obj = JSON.parse(this.responseText);
	document.getElementById("marquee").innerHTML =
	obj[0].adver + " " + obj[1].adver;
    };
<<<<<<< HEAD
>>>>>>> 40d8d7b7415f4671d808141d3f693fb9d307cba8
=======
>>>>>>> parent of cc8bd78... 1.webpack V2.0  加入了plugin功能(HMR,extractText,commonsChunk,provide,uglify)
	req.send();
}


 module.exports = getData ;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> parent of f17fa0d... no message
=======
>>>>>>> 40d8d7b7415f4671d808141d3f693fb9d307cba8
=======
>>>>>>> parent of cc8bd78... 1.webpack V2.0  加入了plugin功能(HMR,extractText,commonsChunk,provide,uglify)
