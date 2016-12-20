
var express = require('express');
var app = express();
var port = 3000;

app.use(express.static(__dirname + '/'));
app.use(function(req, res) {
<<<<<<< HEAD
<<<<<<< HEAD
  res.sendFile(__dirname + '/index.html');
=======
  res.sendFile(__dirname + '/app/index.html')
>>>>>>> parent of cc8bd78... 1.webpack V2.0  加入了plugin功能(HMR,extractText,commonsChunk,provide,uglify)
=======
  res.sendFile(__dirname + '/index.html')
>>>>>>> parent of f17fa0d... no message
});

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
});
