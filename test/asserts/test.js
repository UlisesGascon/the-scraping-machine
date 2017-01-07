// Dependencies
var fs = require('fs'),
    Xray = require('x-ray');

var x = Xray();

var url = "http://google.es"

//Data
var finalData = []
var query = {};
query["web-title"] = "title"
query["web2"] = "title"

// Main loop
x(url, query)(function(err, obj) {
    if(err) throw new Error('ERROR getting data!');
    finalData.push(obj);
    fs.writeFileSync('./test.json', JSON.stringify(finalData, null, 4));
})

