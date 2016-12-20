function getData(filename,callback){
	let req = new XMLHttpRequest();
	req.open("GET",filename);
    req.onload = function() {
		let obj = JSON.parse(this.responseText);
		callback(obj);
	};
	req.send();
}


 module.exports = getData ;



