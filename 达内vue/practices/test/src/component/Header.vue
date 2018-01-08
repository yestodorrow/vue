
<template>
  <div>
    <link rel="stylesheet" href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css">

    <ul class="topNav list-unstyled">
      <li class="top logobox">
        <img src="../img/logo.png" alt="" class="logopic"/>
      </li>
      <li class="top search">
        <div class="form-group">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="搜索：赛事、游戏、战队、选手"/>
            <span class="input-group-addon icon"></span>
          </div>
        </div>
      </li>
      <li class="top loginbox">
        <a type="button" class="" data-toggle="modal" data-target="#login">登陆</a>
      </li>
      <li class="top registerbox">
        <a type="button" class="" data-toggle="modal" data-target="#register">注册</a>
      </li>
      <li class="top userInfo name hidden">
        <a href="userCenter.html">
            <span class="name">
                <img src="../img/userCenter/face.png" alt="" class="img-circle up"/>
            </span>
          <span class="nickName">ELS666</span>
        </a>
        <ul class="list-unstyled userPanel hidden">
          <li class="logOut"><a class="userlogout">退出</a></li>
          <li class="Ucenter">
            <img src="../img/userCenter/face.png" alt="" class="userPic up"/>
                <span class="nickName">
                        ELS666
                </span>
                <span class="">

                </span>
          </li>
          <li class="user userLevel">
                <span>
                    Lv1
                </span>
                <span>
                    <img src="../img/userCenter/level.png" alt=""/>
                </span>
                <span>
                    Lv2
                </span>
          </li>

          <li class="user Equantity">
                <span class="eCoin">
                    E币:15903227144
                </span>
                <span class="EG">
                    EG:120000
                </span>
                <span class="chargein">
                    充值
                </span>
          </li>
          <li class="boundary"></li>
          <li class="user">
            <ul class="list-unstyled trans">
              <li>
                <a href="userCenter.html">
                  <span class="ucenterIcon uIcon"></span>
                  <span class="">个人中心</span>
                </a>
              </li>
              <li>
                <a href="">
                  <span class="ucenterIcon uMail"></span>
                  <span>站内信</span>
                </a>
              </li>
              <li>
                <a href="">
                  <span class="ucenterIcon uCollect"></span>
                  <span>我的收藏</span>
                </a>
              </li>
              <li>
                <a href="">
                  <span class="ucenterIcon uManito"></span>
                  <span>成为大神</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li class="top userInfo sign hidden">
        <a>
          <span class="icon levelIcon"></span>
          <span class="icon sign">签到</span>
        </a>
      </li>
      <li class="top clockbox">
        <a>
          <span class="icon clock"></span>
          <span></span>
        </a>
      </li>
    </ul>
    <ul id="midNav" class="list-unstyled nav navbar">
      <li class="game">
        <a href="#">
          <img src="../img/userCenter/game.png" data-src="img/game.png" alt="" class="gameIcon"/>
          <span class="gameTitle">英雄联盟</span>
        </a>
      </li>
      <li class="game">
        <a href="#">
          <img src="../img/userCenter/game.png" data-src="img/game.png" alt="" class="gameIcon"/>
          <span class="gameTitle">英雄联盟</span>
        </a>
      </li>
      <li class="game">
        <a href="#">
          <img src="../img/userCenter/game.png" data-src="img/game.png" alt="" class="gameIcon"/>
          <span class="gameTitle">英雄联盟</span>
        </a>
      </li>
      <li class="game">
        <a href="#">
          <img src="../img/userCenter/game.png" data-src="img/game.png" alt="" class="gameIcon"/>
          <span class="gameTitle">英雄联盟</span>
        </a>
      </li>
      <li class="game">
        <a href="#">
          <img src="../img/userCenter/game.png" data-src="img/game.png" alt="" class="gameIcon"/>
          <span class="gameTitle">英雄联盟</span>
        </a>
      </li>
      <li class="game">
        <a href="#">
          <img src="../img/userCenter/game.png" data-src="img/game.png" alt="" class="gameIcon"/>
          <span class="gameTitle">英雄联盟</span>
        </a>
      </li>
      <li class="game">
        <a href="#">
          <img src="../img/userCenter/game.png" data-src="img/game.png" alt="" class="gameIcon"/>
          <span class="gameTitle">英雄联盟</span>
        </a>
      </li>
    </ul>
    <div class="modal fade register" id="register" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header center">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
              aria-hidden="true">&times;</span>
            </button>
            <img class="modal-title center-block logo2" src="../img/logo.png"/>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <!--用户名-->
                <div class="input-group" id="uName">
                  <div class="input-group-addon icon">
                  </div>
                  <input type="text" class="form-control" id="Name" placeholder="请输入用户名" minlength="6">
                </div>
                <p class="valiResult checkname"></p>
                <!--手机号-->
                <div class="input-group" id="uPhone">
                  <div class="input-group-addon icon uPhone">

                  </div>
                  <input type="tel" class="form-control" id="Phone" placeholder="请输入手机号码" minlength="11"
                         maxlength="11">
                </div>
                <p class="valiResult pVali"></p>
                <!--验证码-->
                <div class="input-group" id="uVal">
                  <div class="input-group-addon icon"></div>
                  <input type="text" class="form-control" id="code" placeholder="请输入验证码" minlength="6"
                         maxlength="6">
                  <span class="valCode input-group-addon"><a type="button" id="getCode">获取验证码</a></span>
                </div>
                <p class="valiResult"></p>
                <!--密码-->
                <div class="input-group" id="uPwd">
                  <div class="input-group-addon icon "></div>
                  <input type="password" class="form-control" id="Password" minlength="6" maxlength="16"
                         placeholder="请输入密码">
                </div>
                <p class="valiResult"></p>
                <!--再次输入密码-->
                <div class="input-group" id="upwd">
                  <div class="input-group-addon icon "></div>
                  <input type="password" class="form-control" minlength="6" maxlength="16" id="Pwd"
                         placeholder="请再次输入密码">
                </div>
                <p class="valiResult regErr regErr"></p>
              </div>
              <div class="input-group">
                <input type="button" class="input-group send btn btn-lg lrbtn" value="注册" id="reg"/>
              </div>
              <div class="pull-right">
                <a class="transferToLogin">已有账号 | 登录</a>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <p class="center-block text-center">第三方账号登录</p>
            <ul class="third-party center-block list-unstyled">
              <li class="wechat">wechat</li>
              <li class="qq">qq</li>
              <li class="weibo">weibo</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="login" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
              aria-hidden="true">&times;</span>
            </button>
            <img class="modal-title center-block logo2" src="../img/logo.png"/>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <ul class="list-unstyled logMethod">
                  <li class="select codelog"><h5>密码登录</h5></li>
                  <li><h5>短信登录</h5></li>
                  <li><span class="qcode"></span></li>
                </ul>
                <div class="input-group" id="logName">
                  <div class="input-group-addon icon">
                  </div>
                  <input type="text" class="form-control" id="LName" placeholder="请输入用户名" minlength="6">
                </div>
                <p class="valiResult "></p>

                <div class="input-group " id="logPwd">
                  <div class="input-group-addon icon "></div>
                  <input type="password" class="form-control" id="logPassword" minlength="6" maxlength="16"
                         placeholder="请输入密码">
                </div>
                <p class="valiResult"></p>

                <div class="input-group hidden" id="logVal">
                  <div class="input-group-addon icon"></div>
                  <input type="text" class="form-control" id="Code" placeholder="请输入验证码" minlength="6"
                         maxlength="6">
                  <span class="valCode input-group-addon"><a type="button">获取验证码</a></span>
                </div>
                <p class="valiResult hidden"></p>
              </div>
              <div class="input-group">
                <input type="button" class="input-group send btn btn-lg lrbtn" value="登录" id="userLogin"/>
              </div>
              <div class="pull-right">
                <a href="" class="transfer">忘记密码</a>
                <a href="" class="transferToRegister ">注册</a>
              </div>
            </form>
            <div></div>
          </div>
          <div class="modal-footer">
            <p class="center-block text-center">第三方账号登录</p>
            <ul class="third-party center-block list-unstyled">
              <li class="wechat">wechat</li>
              <li class="qq">qq</li>
              <li class="weibo">weibo</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>


</script>
<style>
  body {
    background-color: #e4e4e4;
  }

  #address, .topNav, #userCenter {
    margin: 0 auto;
    width: 1200px;
  }

  .topNav {
    height: 70px;
    background-color: #e4e4e4;
    line-height: 70px;
    display: flex;
  }

  .topNav > .logobox {
    width: 18%;
  }

  .gameTitle {
    color: #2f3959;
    font-size: 16px;
  }

  .topNav > .search .input-group-addon {
    background-position: -96px 2px;
  }

  #logName > .icon, #logPwd > .icon, .topNav > .search .input-group-addon, .icon, .modal-footer .third-party li, #userCenter .userIcon, #register .icon {
    width: 40px;
    height: 40px;
  }

  .topNav > .loginbox, .topNav > .registerbox, .topNav > .clockbox, .topNav > .userInfo {
    width: 12%;
    height: 70px;
    line-height: 70px;
    display: flex;
    align-items: center;
    position: relative;
    letter-spacing: 2px;
  }

  .userPanel > .logOut {
    display: flex;
    height: 30px;
    justify-content: flex-end;
    margin-right: 22px;
    margin-top: -18px;
    cursor: default;
  }

  .userlogout {
    cursor: pointer;
  }

  .userInfo .userPic {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }

  .userPanel > .Ucenter {
    margin-top: 18px;
    height: 70px;
    margin-left: 35px;
  }

  .userPanel {
    width: 300%;
    height: 270px;
    display: flex;
    position: absolute;
    top: 58px;
    background-color: #2f3959;
    z-index: 10;
    flex-direction: column;
    color: #fff;
    border-top: 2px solid #fff;
  }

  .ucenterIcon {
    width: 45px;
    height: 45px;
    display: inline-block;
    position: absolute;
    top: -5px;
    border: 1px solid #ddd;
    background: url(../img/userCenter/iconlist.png);
    background-repeat: no-repeat;
    border: none;
  }

  .userPanel button {
    background: #f57d07;
    height: 22px;
  }

  #userLogin, .lrbtn, #reg {
    height: 40px;
    line-height: 40px;
    background: #f57d07;
    color: #fff;
    vertical-align: middle;
    padding-top: 0;
    letter-spacing: 2px;
    outline: none;
  }

  .lrbtn:hover {
    background: #f57d07;
    color: #fff;
  }

  .uIcon {
    background-position: 6px -76px;
  }

  form .pull-right {
    margin-top: 5px;
  }

  .uMail {
    background-position: -53px -78px;
  }

  .uCollect {
    background-position: -101px -76px;
  }

  .uManito {
    background-position: -155px -72px;
  }

  .userInfo .img-circle {
    display: flex;
    width: 30px;
    height: 30px;
    margin-left: -30px;
  }

  .boundary {
    border: 1px solid #fff;
    width: 85%;
    margin-left: 8%;
    margin-bottom: 10px;
  }

  .userInfo .sign {
    width: 60px;
    background-position: -247px -38px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px
  }

  .userInfo > a {
    padding-left: 40px;
  }

  .userInfo .nickName {
    padding-left: 15px;
  }

  .picInfo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform-origin: 0 0;
    transform: translate(-50%, -50%);
    display: none;
    background: #ddd;
    border-radius: 5px;
    letter-spacing: 2px;
  }

  .changeface:hover .picInfo {
    display: block;
    cursor: pointer;
  }

  .changeface:hover #profile .up {
    background: #ddd
  }

  .up {
    width: 120px;
    height: 120px;
  }

  .userInfo .levelIcon {
    background-position: -418px 5px;
    margin-left: -72px;
    margin-top: 5px;
  }

  .topNav > .loginbox > a, .topNav > .registerbox > a, .topNav > .clockbox > a, .userInfo > a {
    width: 100%;
    display: flex;
    height: 45px;
    font-size: 14px;
    background-color: #2f3959;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    cursor: pointer;
  }

  .send {
    border-color: transparent;
    background-color: #f4f4f4;
  }

  .topNav > .search {
    height: 70px;
    width: 50%;
    justify-content: center;
  }

  .topNav > .search > .form-group {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .topNav > .search > .form-group > .input-group {
    display: flex;
    width: 300px;
  }

  /*register注册*/
  #register {
    display: none;
  }

  .modal {
    border: none;
  }

  .register .modal-content {
    width: 400px;
    height: 620px;
    font-size: 15px;
  }

  .modal-body {
    margin: 0 auto;
    padding: 15px auto;
  }

  .form-group {
    width: 330px;
    margin: 0 auto;
  }

  .modal-body > form {
    width: 330px;
    margin: 0 auto;
    padding: 15px auto;
  }

  .input-group {
    width: 330px;
    height: 40px;
  }

  .register .valCode {
    width: 90px;
    border-left-color: transparent;
  }

  .register .valCode a {
    display: inline-block;
    width: 88px;
    background-color: #ff9937;
    color: #fff;
    padding: 5px 0;
    border-radius: 5px;
  }

  .input-group input {
    height: 40px;
  }

  .modal-body {
    color: #f69246;
    font-size: 15px;
  }

  .modal-dialog {
    width: 400px;
  }

  .register .modal-header {
    border-bottom: none;
  }

  .icon, .qcode, .userIcon, #userCenter .userIcon {
    background-image: url(../img/userCenter/iconlist.png);
    background-repeat: no-repeat;
  }

  .trans {
    display: flex;
    width: 100%;
    height: 70px;
    justify-content: space-between;
    position: relative;
  }

  .trans > li {
    padding-top: 35px;
  }

  .userPanel a {
    color: #fff;
  }

  .Equantity {
    display: flex;
    justify-content: space-between;
  }

  .chargein {
    background-color: #f57d07;
    display: inline-block;
    width: 50px;
    height: 28px;
    border-radius: 4px;
    line-height: 28px;
    text-align: center;
    margin-top: 4px;
  }

  .trans a {
    color: #fff;
  }

  .valiResult {
    margin: 5px 0;
    height: 25px;
    line-height: 25px;
    letter-spacing: 2px;
  }

  .userPanel > .user {
    height: 40px;
    width: 80%;
    margin-left: 50px;
    line-height: 40px;
  }

  .register > input {
    border-left-color: transparent;
  }

  #uName .icon, #logName > .icon {
    background-position: 0 0;
  }

  .register .error {
    visibility: hidden;
  }

  #uPhone .icon {
    background-position: -33px 0;
  }

  #uVal > .icon, #uPwd > .icon, #upwd > .icon, #logPwd > .icon, #logVal > .icon {
    background-position: -64px 0;
  }

  .modal-footer .third-party {
    list-style: none;
    display: flex;
    justify-content: space-around;
  }

  .modal-footer .third-party li {
    border-radius: 50%;
    background: #ddd;
  }

  .logMethod > li {
    display: inline-block;
    margin-right: 18px;
  }

  .logMethod > li > h5.userlogin {
    color: #111;
  }

  .active > h5 {
    color: #111111;
    border-bottom: #111111;
  }

  /*游戏导航*/
  #midNav {
    width: 1200px;
    margin: 0 auto;
    background-color: #fff;
    display: flex;
    justify-content: space-around;
  }

  #midNav .game > a {
    padding: 10px;
  }

  #midNav .gameIcon {
    padding-left: 15px;
  }

  #midNav .gameTitle {
    padding-left: 16px;
    font-size: 16px;
  }

  #address {
    display: flex;
    justify-content: flex-start;
    color: #2f3959;
  }

  #address > li {
    padding: 10px;
  }

  #address > ul > li:not(:last-child)::after {
    content: ">";
    position: relative;
    left: 5px;
  }

  #userCenter {
    min-height: 800px;
  }

  #leftNav {
    width: 200px;
    height: 320px;
    background-color: #fff;
  }

  .myinfo {
    color: #fff;
  }

  .myclass {
    display: flex;
    justify-content: flex-start;
  }

  .item {
    background-color: #fff;
    height: 40px;
    line-height: 40px;
  }

  .active {
    background-color: #2f3959;
    color: #fff;
  }

  #address > ul {
    display: block;
    width: 50%;
    margin: 5px 0;
  }

  #address ul li {
    display: inline-block;
    margin: 5px;
  }

  #register a:hover, #login a:hover, #userCenter a:hover {
    text-decoration: none;
  }

  /*.loginbox > a:after, .registerbox > a:after {*/
  /*content: "|";*/
  /*color: #6a7391;*/
  /*margin-left: 0;*/
  /*padding-left: 45px;*/
  /*}*/

  .loginbox:after, .registerbox:after {
    content: "|";
    color: #6a7391;
    background: #2f3959;
    height: 45px;
    line-height: 45px;
  }

  li.sign > a:after {
    content: "|";
    color: #6a7391;
    margin-right: -25px;
    padding-left: 15px;
  }

  a:visited {
    text-decoration: none;
  }

  a:active {
    text-decoration: none;
  }

  #leftContet {
    width: 210px;
    height: 579px;
    display: inline-block;
  }

  #detailed {
    display: inline-block;
    width: 986px;
    background-color: #fff;
  }

  .modal-header {
    border-bottom-color: transparent;
  }

  #userCenter .userIcon {
    margin-right: 10px;
  }

  .item {
    display: flex;
  }

  .item > a {
    display: flex;
    width: 100%;
  }

  .mail {
    background-position: -159px 8px;
  }

  .collect {
    background-position: -195px 5px;

  }

  .subscribe {
    background-position: -229px 8px;
  }

  .consume {
    background-position: -269px 8px;
  }

  .possession {
    background-position: -309px 8px
  }

  .task {
    background-position: -349px 8px;
  }

  .manito {
    background-position: -384px 8px;
  }

  #userCenter .myAccount .userIcon {
    display: inline-block;
    height: 30px;
    line-height: 30px;
    background-position: -124px 7px;
  }

  /*个人中心样式*/
  /*标题样式*/
  .h5.subtitle {
    margin: 0;
    padding: 0 15px;
    width: 100%;
    height: 25px;
    line-height: 25px;
    color: #ffffff;
    background-color: #2f3959;
  }

  #profile, #accountSetting, #otherLogin {
    width: 100%;
    height: 222px;
    background-color: #ffffff;
    display: flex;
    align-items : center;
  }

  #userCenter .icon {
    display: inline-flex;
  }

  .dis {
    background-color: #ddd;
  }

  small {
    color: #ffffff;
  }

  .levelImage {
    width: 100px;
    margin-left: -192px;;
  }

  .list-item {
    display: flex;
    justify-content: space-between;
    line-height: 35px;
    align-items: center;
  }

  .eg {
    margin-left: -127px;
  }

  #accountSetting {
    width: 660px;
    margin: 0 auto;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .middle {
    margin-left: -235px;
    width: 290px;
    padding-top: 5px;
  }

  .smalltitle {
    margin-left: 10px;
    color: #fff;
    font-size: 12px;
  }

  .s {
    margin-left: 10px;
    color: #fff;
  }

  .onSelect {
    color: #fff;

  }

  #leftNav a {
    color: #303030;
    padding-left: 22px;
  }

  .list-item > .level.icon {
    background-position: -428px 5px
  }

  #logName > .icon {

  }

  .list-item .phone {
    background-position: 0 -37px
  }

  .list-item .pwd {
    background-position: -39px -34px;
  }

  .list-item .mailbox {
    background-position: -74px -42px;
  }

  .list-item .qq {
    background-position: -112px -35px;
  }

  .list-item .wechat {
    background-position: -154px -35px;
  }

  .list-item .weibo {
    background-position: -199px -35px;
  }

  #otherLogin, #profile {
    width: 660px;
    margin: 0 auto;
    height: 220px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  #profile .profilePic {
    margin-top: 30px;
    margin-right: 30px;
    width: 150px;
    height: 150px;
    background-color: #ddd;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .select {
    border-bottom: 2px solid #111111;
  }

  .select > h5 {
    color: #111111;
  }

  .transfer {
    color: #f57d09;
  }

  #profile {
    font-size: 14px;
  }

  .modal-footer {
    border-color: transparent;
  }

  .changeface {
    width: 150px;
    height: 150px;
    background: #ddd;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  #profile .list-item {
    width: 476px;
    margin-left: 30px;
  }



  .codelog {
    color: #111;
  }

  .clock {
    background-position: -448px 9px;
    margin-left: -12px;
  }

  a:hover, a:focus {
    text-decoration: none;
  }

  .newName, .newUserName, #ne, #newName {
    height: 30px;
    margin-right: 201px;
    width: 130px;
    padding-left: 10px;
  }

  .info {
    margin-top: 30px;
  }

  .change {
    font-size: 12px;
    margin-left: -125px;
  }

  .content button {
    background: #ffa248;
    width: 80px;
    height: 30px;
    line-height: 30px;
    border: none;
    border-radius: 4px;
    letter-spacing: 2px;
    color: #fff;
    font-size: 12px;
    outline: none;
  }

  .content button:hover {
    background: #f57d07;
  }

  #detailed .content > ul {
    width: 660px;
  }

  .logopic {
    height: 48px;
  }

  .logo2 {
    height: 50px;
  }

  .content .content-item {
    display: flex;
    justify-content: space-between;
  }

  .content .content-item > ul {
    display: flex;
    justify-content: space-between;
  }

  .search .input-group input {
    border-right-color: transparent;
  }

  .search .input-group span {
    border-left-color: transparent;
    background-color: #fff;
  }

  .input-group-addon {
    background-color: #fff;
  }

  #Name, #Phone, #Code, #Password, #Pwd {
    border-left-color: transparent;
  }

  #Code {
    border-right-color: transparent;
  }

  #login .input-group-addon {
    border-right-color: transparent;
  }

  #login .form-control {
    border-left-color: transparent;
  }

  #login {
    padding-right: 0;
  }

  .userlogin {
    color: #111;
  }

  #register .in {
    padding-right: 17px;
  }

  #login .in {
    padding-right: 17px;
  }

  .third-party li {
    text-align: center;
    vertical-align: middle;
    height: 40px;
    line-height: 40px;
  }

  .change {

  }

  .err {
    color: #E4393c;
    font-weight: bold;
  }

  /*header部分*/
  .transferToLogin, .transferToRegister {
    color: #f89e47;
  }

  .transferToRegister:before {
    content: "|";
    margin: 0 4px;
    color: #f57d09;
  }

  #getCode {
    cursor: pointer;
  }

  .otherLogin {
    letter-spacing: 2px;
  }

  #imageHead {
    width: 120px;
    height: 120px;
  }



</style>
<script>
  import  '../js/jquery-3.2.1.js'
</script>

