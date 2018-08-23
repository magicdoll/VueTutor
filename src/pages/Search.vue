<template>
  <div class="box">
    <h3>Search</h3>
    <input type="text" @keyup="searchCus" class="input" v-model="searchBy">

    <table class="table">
      <tr>
        <td>ID</td>
        <td>Name</td>
        <td>Last Name</td>
        <td>Gender</td>
        <td>Pic</td>
      </tr>
      <tr :key="c.id" v-for="c in customers">
        <td> {{c.id}} </td>
        <td> {{c.firstName}} </td>
        <td> {{c.lastName}} </td>
        <td>{{ c.gender == 'M' ? ' เพศ : ชาย' : ' เพศ : หญิง' }}</td>
        <td><img :src="managePic(c.gender)" :class="manageResize(c.gender)"></td>
      </tr>
    </table>
  </div>
</template>

<style scoped>

</style>


<script>
import {get} from 'axios'
// import _ from 'lodash'
import {debounce} from 'lodash'
import male from '../images/male.png'
import female from '../images/female.png'

export default {
  data(){
    return{
      customers:[]
      ,searchBy:''
    }
  }
  ,created(){
    this.searchCus = debounce(this.searchCus, 600)
  }
  ,methods:{
    searchCus(){
      this.getCustomer()
    }
    , managePic(gender) {
      return gender == 'M' ? male : female
    }
    , manageResize(gender) {
      return gender == 'M' ? 'image is-32x32' : 'image is-32x32'
    }
    ,async getCustomer() {
      try {
        const {data: customer, headers} = await get(`http://localhost:3000/customers?q=` + this.searchBy)
        this.customers = customer
      } catch (err) {
        console.log(err.message)
      }
    }

  }
}
</script>


