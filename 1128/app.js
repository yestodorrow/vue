/**
 * Created by BJDGZJD on 2017/11/28.
 */
new Vue({
    el:"#demo",
    data:{
        name:"Foobar"
    },
    ready:function(){
        var that=this;
        setInterval(function(){
            that.name="Updated"
        },5000)
    }
})