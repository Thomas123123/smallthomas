function timer()
{
	var dt = new Date() ;
	var date = "<h1>" + dt.getFullYear() + "年" + (dt.getMonth()+ 1) + "月" + dt.getDate() + "日" + "</h1>" ;
	var time = "<h1>" + dt.getHours() + "時" + dt.getMinutes() + "分" + dt.getSeconds() + "秒" + "</h1>" ;
	document.getElementById("date").innerHTML = date ;
	document.getElementById("time").innerHTML = time ;
	setTimeout("timer()",1000) ;
}