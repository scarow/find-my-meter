var express = require('express');
var app = express();
var request = require('request');
app.set('view engine', 'jade');

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.render('index', { parkTime: ['less than an hour', 'one hour', 'greater than an hour']});
});

app.post('/get_spots', function(req, res){
  // time_limit needs to be '60'
  request('https://data.sfgov.org/resource/6cqg-dxku.json?$where=time_limit=60', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body) // Print the google web page.
    }
  })
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});