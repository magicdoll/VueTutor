<template>
  <div class="box">
    <h3>Customer Profile</h3>
    <br>
    
    <br>
    <table class="table">
      <tr>
        <td> {{customer.id}} </td>
        <td> {{customer.firstName}} </td>
        <td> {{customer.lastName}} </td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
  table,tr,td{border:1px solid}
</style>

<script>
import axios from 'axios'

export default {
  data(){
    return{
      customer:{}
    }
  }
  ,mounted(){
    // this.$route.params.id
    this.getCustomer(this.$route.params.id)
  }
  ,methods:{
    async getCustomer(id){
      try{
        const res = await axios.get(`http://localhost:3000/customers/` + id)
        this.customer = res.data
        console.log(this.customer.id)
      } catch(err){
        console.log(err.message)
      }
    }
    
  }
}
</script>
