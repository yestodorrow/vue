const fs=require("fs");
var cleaner = require('clean-html')
var entities = require("entities");
fs.readFile("ART-20043844.xml","utf-8",function(err,data){
  var data=entities.decodeXML(data);
  cleaner.clean(data, function (html) {
    fs.writeFile('message.txt', html, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    });
  });
})