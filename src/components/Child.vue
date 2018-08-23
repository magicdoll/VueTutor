<template>
  <div class="box">
    <h3>Child</h3>
    <!-- <p>User Child :{{userchild}}</p> -->
    <grand-child @grandchildlogout="logout" :usergrandchild="userchild"></grand-child>
  </div>
</template>

<style scoped>

</style>

<script>
import GrandChild from '../components/GrandChild.vue'
export default {
  props:['userchild']
  ,components:{
    'grand-child': GrandChild
  }
  ,methods:{
    logout(){
      this.$emit('childlogout')
    }
  }
}
</script>

