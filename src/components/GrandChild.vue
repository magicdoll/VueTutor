<template>
  <div class="box">
    <!-- <h3>Grand Child</h3>
    <p> Vuex Username : {{username}} </p>
    <p> {{usergrandchild != '' ? 'Username: ' + usergrandchild : ''}} </p>
    <button @click="logout" class="button is-success"> Logout </button>
    <p class="control">
      <button class="button is-danger" @click="mutateAmount(50)">Reset amount</button>
    </p>
    <p>Amount : {{amount}} </p>
    <br>
    <pre> {{customers}} </pre>
    <button class="button is-info" @click="getCus">GetCus</button> -->

  </div>
</template>

<style scoped>

</style>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex' // คือการ Map ข้อมูล


export default {
  props:['usergrandchild']
  ,methods:{
    logout(){
      if(this.usergrandchild != ""){
        //this.$emit('grandchildlogout')
        this.$store.state.username = ''
      }
    }
    // ,...mapMutations(['mutateAmount'])
    // ,...mapActions(['getCus'])
  }
  // ,computed:{
  //   vuexUsername(){
  //     return this.$store.state.username
  //   }
  //   ,vuexAmount(){
  //     return this.$store.getters.usAmount
  //   }
  // }
  // ,computed:mapState(['amount', 'username'])
  ,computed:{
    // ...mapState(['amount', 'username', 'customers'])
    // ,...mapGetters(['usAmount']),
    // xxx(){}
  }
}
</script>

