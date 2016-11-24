function timer()
{
	var dt = new Date() ;
	var date = "<h1>" + dt.getFullYear() + "年" + (dt.getMonth()+ 1) + "月" + dt.getDate() + "日" + "</h1>" ;
	var time = "<h1>" + dt.getHours() + "時" + dt.getMinutes() + "分" + dt.getSeconds() + "秒" + "</h1>" ;
	document.getElementById("date").innerHTML = date ;
	document.getElementById("time").innerHTML = time ;
	setTimeout("timer()",1000) ;
}

function getData(){
	//XMLHttpRequest 物件專門來和伺服器做連線
	var req = new XMLHttpRequest();
	req.open("GET","adver.json");//(連線方法是用get,想要取得的資料/網址)
	req.onload = function() {
      document.getElementById("marquee").innerHTML =
	  this.responseText ;
	  //取得跑馬燈元素並且把從伺服器得到的content data放進去跑馬燈裡
    };
	req.send();//送出連線
}
