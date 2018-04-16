<template>
  <div id="app">
    <Head />
    <div class="main">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
<!--    <Player />-->
  </div>
</template>

<script>
import Head from './components/Header/head'
//    import Player from './components/Player'
//  import DetailPlayer from './components/DetailPlayer'
export default {
  name: 'app',
    components:{
        Head,
//        Player
    }
}
</script>

<style>
</style>
