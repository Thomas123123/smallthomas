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
	var req = new XMLHttpRequest();
	req.open("GET",filename);
    req.onload = function() {
		var obj = JSON.parse(this.responseText);
		callback(obj);
		//document.getElementById("marquee").innerHTML =
		//obj[0].adver + " " + obj[1].adver;
	};
	req.send();
}


 module.exports = getData ;



