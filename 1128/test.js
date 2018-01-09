const { HLTV } = require('hltv')
const myHLTV = HLTV.createInstance({hltvUrl: 'my-proxy-server'})
//HLTV.getMatches().then((res) => {
////    console.log(res);
////})
//HLTV.connectToScorebot().then((res)=>{
//    console.log(res);
//})
//HLTV.getMatchesStats({startDate: '2018-01-01', endDate: '2018-01-09'}).then((res) => {
//    console.log(res);
//})
function d(data) {
    console.log(data);
}
HLTV.connectToScorebot({
    id: 2318421,
    onScoreboardUpdate: d,
    onLogUpdate: d,
    onConnect: d,
    onDisconnect: d
})
//HLTV.getResults({pages: 1}).then((res) => {
//   for(var k in res){
//       console.log("比赛id:"+res[k].id);
//       console.log("比赛队伍:"+res[k].team1.name+"  VS  "+res[k].team2.name);
//       console.log("比分:"+res[k].result);
//       console.log("比赛地图:"+res[k].map);
//   }
//})
