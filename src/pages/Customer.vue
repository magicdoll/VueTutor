<template>
  <div class="box">
    <h3>Customer Page</h3>
    <hr>
    <button @click="getCustomer" class="button is-warning">Get</button>
    <!-- <br> 
    <div :key="c.id" v-for="c in customers"> 
      <p> {{c.firstName}} {{ c.gender == 'M' ? ' เพศ : ชาย' : ' เพศ : หญิง'  }} </p> 
      <img :src="managePic(c.gender)" :class="manageResize(c.gender)">
      <hr>
    </div> -->

    <br>
    <table class="table">
      <tr>
        <td>ID</td>
        <td>Name</td>
        <td>Gender</td>
        <td>Pic</td>
      </tr>
      <tr :key="c.id" v-for="c in customers" >
        <td> <router-link :to="'/customer/' + c.id">{{c.id}}</router-link> </td>
        <td>{{c.firstName}}</td>
        <td>{{ c.gender == 'M' ? ' เพศ : ชาย' : ' เพศ : หญิง'  }}</td>
        <td><img :src="managePic(c.gender)" :class="manageResize(c.gender)"></td>
      </tr>
    </table>

  </div>
</template>

<style scoped>
  table,tr,td{border:1px solid}
</style>

<script>
import axios from 'axios'
import male from '../images/male.png'
import female from '../images/female.png'

export default {
  data(){
    return{
      customers:[]
      ,img:male
      ,imgsize: ""
    }
  }
  ,methods:{
    // getCustomer(){
    //   axios.get('http://localhost:3000/customers').then((res) => {
    //     this.customers = res.data
    //   })
    // }
    async getCustomer(){
      try{
        const res = await axios.get('http://localhost:3000/customers')
        this.customers = res.data
      } catch(err){
        console.log(err.message)
      }
    }
    ,managePic(gender){
      return gender == 'M' ? male : female
    }
    ,manageResize(gender){
      return gender == 'M' ? 'image is-32x32' : 'image is-32x32'
    }
  }
}
</script>



