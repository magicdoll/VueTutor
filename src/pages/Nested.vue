<template>
  <div class="box">
    <h3>Nested</h3>
    <input type="text" class="input" v-model="$store.state.username">
    <p> {{username != '' ? 'Username: ' + username : ''}} </p>
    <p> Amount : {{amount}} </p>
    <parent @parentlogout="logout" :userparent="username" ></parent>
  </div>  
</template>

<style scoped>

</style>

<script>
import Parent from '../components/Parent.vue'
import {mapState} from 'vuex' // คือการ Map ข้อมูล

export default {
  data(){
    return{
      usernameNested: ''
    }
  }
  ,components:{
    'parent':Parent
  }
  ,methods:{
    logout(){
      this.username = ''
    }
  }
  ,computed:{
    ...mapState(['username','amount'])
  }
}
</script>

