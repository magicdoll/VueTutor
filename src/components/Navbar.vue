<template>
  <div class="box">
    <i><h5>navbar</h5></i>
    <nav class="navbar">
      <div class="navbar-menu">
        <router-link class="navbar-item" to="/" > Home </router-link>
        <router-link class="navbar-item" to="/about" > About </router-link>
        <router-link class="navbar-item" to="/product" > Product </router-link> <!-- :key="index" v-for="(n,index) in product" :to="`/product/${n}`" -->
        <router-link class="navbar-item" to="/form" > Form </router-link>
        <router-link class="navbar-item" to="/customer" > Customer </router-link>
        <router-link class="navbar-item" to="/pagination" > Pagination </router-link>
        <router-link class="navbar-item" to="/search" > Search </router-link>
        <router-link class="navbar-item" to="/column" > Column </router-link>
        <router-link class="navbar-item" to="/nested" > Nested </router-link>
        <router-link class="navbar-item" to="/vuex" > Vuex </router-link>
        <router-link class="navbar-item" to="/login" > Login </router-link>
        <!-- <button class="button" :key="index" v-for="(n,index) in product">
          <router-link :to="`/product/${n}`" > Product {{n}} </router-link>
        </button> -->
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data(){
    return{
      product:[1,2]
    }
  }
}
</script>
