const fs=require("fs");
console.log(fs);


const express = require('express');
const HLTV = require('hltv-api');
const app = express();

app.get('/', function(req, res) {
  HLTV.getNews(function(news) {
    return res.json(news);
  });
});

app.get('/results', function(req, res) {
  HLTV.getResults(function(results) {
    console.log(results);
  });
});

app.get('/:matchId(*)', function(req, res) {
  HLTV.getMatches(matchId, function(stats) {
    return res.json(stats);
  });
});

app.listen(3000, function() {
  console.log('Listening on port 3000...');
});