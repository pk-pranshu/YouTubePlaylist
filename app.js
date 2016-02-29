var http = require('http');
var express = require('express');
var app = express();
app.use("/css", express.static(__dirname + '/css'));
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var request = require('request');

	app.get('/', function(req , res) {
		res.sendFile(__dirname + "/" + "index.html");
	});

	app.post('/process_get' , function(req , res){

		var key = 'AIzaSyAll4ST1vhpn83iZKWe32nxxLcmTP7rxWU';

		searchKey = req.body.bandName;

   		var url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q='+searchKey+'&key='+key;

   		request({
			    url: url,
			    json: true
			}, function (error, response, body) {

			    if (!error && response.statusCode === 200) {

			    	var JSONString = JSON.stringify(body); 
			    	var JSONParser = JSON.parse(JSONString);

			    		var finalJSONObject = {playlistObj:[]};
			    		
			    		for(var i=0 ; i<5 ; i++)
			    		{
			    		    finalJSONObject.playlistObj.push({
			    		    	"videoId": JSONParser.items[i].id.videoId,
			    		    	"title" : JSONParser.items[i].snippet.title
			    			});
   						}
			    		//console.log(finalJSONObject);
			    		
			    		res.send(JSON.stringify(finalJSONObject));

			    	// console.log(JSONParser.items[1].id.videoId);
			        // res.end(JSON.stringify(body));

			    }
		});
	});

	var server = app.listen(8080,function(){
  		var port = server.address().port;
  		console.log("Server is running at http://localhost:%s", port);
	});