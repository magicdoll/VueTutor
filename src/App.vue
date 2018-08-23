<template>
  <div>
    <section class="section">
      <div class="container">
        <h2><b>Tor-Sad</b></h2>
        <tag-navbar />
        <b>Vue.js Application</b>
        <router-view />
      </div>
    </section>
  </div>
</template>

<script>
import 'bulma/css/bulma.min.css'
import Navbar from './components/Navbar.vue'

export default {
  components:{
    'tag-navbar':Navbar
  }
}
</script>








