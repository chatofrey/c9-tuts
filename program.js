/*var lsdir = require("./mymodule");

var mPath = process.argv[2];
var mExtFile = process.argv[3];

lsdir(mPath, mExtFile, function(err, data){
    if(err) return console.error('There was an error: ' + err);
    for(var i in data)
        console.log(data[i]);
});*/

var http = require("http");
var urls = [process.argv[2], process.argv[3], process.argv[4]];

var ended_request = 0;

for (var i in urls){
    var url = urls[i];
    console.log('url ' + i + ' = ' + url);
    http.get(url, function(response){
        ended_request += 1;
        console.log("request ended for url " + i + '(' + url + ')');
        var completeData = "";
        response.setEncoding('utf-8');
        response.on("data", function(data){
            completeData += data;
        });
    
        response.on("end", function(){
            console.log('url ' + i + ' = ' + url);
            console.log(completeData);
        });
    
        response.on("error", function(e){
            console.error('Error message: ' + e.message);
        });
    
    }).on("error", function(e){
        console.error("Error message: " + e.message);
    });
}

