var hltv=require("hltv")
console.log(hltv);
hltv.getMatch({id: 2318439}).then(function(res){
    console.log(res);
  }
)
