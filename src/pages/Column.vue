<template>
  <div class="box">
    <h3>Customer Page</h3>
    <hr>
    <input type="radio" name="gender" value="" v-model="gender"> All
    <input type="radio" name="gender" value="M" v-model="gender"> Male
    <input type="radio" name="gender" value="F" v-model="gender"> Female
    <br>
    <button @click="getCustomer" class="button is-warning">Get</button>
    <br> <br> 

    <div class="columns" :key="index" v-for="(row,index) in columnCus"> 
      <div class="column" :key="p.id" v-for="p in row"> <div class="box"> {{p.id}} : {{p.firstName}} {{p.lastName}} : {{ p.gender == "M" ? "ชาย" : "หญิง" }} > <img :src="managePic(p.gender)" :class="manageResize(p.gender)" style="display:inline" > </div> </div>
      <hr>
    </div> 

  </div>
</template>

<style scoped>
  table,tr,td{border:1px solid}
</style>

<script>
import axios from 'axios'
import {chunk} from 'lodash'
import male from '../images/male.png'
import female from '../images/female.png'

export default {
  data(){
    return{
      customers:[]
      ,img:male
      ,imgsize: ''
      ,gender: ''
    }
  }
  ,methods:{
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
  ,computed:{
    columnCus(){
      return chunk(this.genderCus, 4)
    }
    ,genderCus(){
      return this.customers.filter(c => {
        return c.gender == this.gender || this.gender == "" ? true : false
      })
    }
  }
}
</script>



