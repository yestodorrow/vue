<template>
  <div id="app">
    <h1>{{msg}}</h1>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
    return {
      msg: 'Vue前后端分离demo'
    }
  }
  }
</script>
