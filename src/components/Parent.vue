<template>
  <div class="box">
    <h3>Parent</h3>
    <!-- <p>User Parent :{{userparent}}</p>  -->
    <child @childlogout="logout" :userchild="userparent"></child>
  </div>
</template>

<style scoped>

</style>

<script>
import Child from '../components/Child.vue'

export default {
  props:['userparent']
  ,components:{
    'child': Child
  }
  ,methods:{
    logout(){
      this.$emit('parentlogout')
    }
  }
}
</script>

