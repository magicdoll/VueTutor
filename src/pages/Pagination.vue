<template>
  <div class="box">
    <h3>Pagination</h3>
    <select ref="sel_limit" @change="changelimit($event)" :value="limit">
      <option value="5">5 row</option>
      <option value="10">10 row</option>
      <option value="20">20 row</option>
      <option value="30">30 row</option>
      <option value="40">40 row</option>
      <option value="50">50 row</option>
    </select>
    <br>
    <nav class="pagination">
      <ul class="pagination-list">
        <li :key="v" v-for="v in totalPage">
          <a :class="'pagination-link rd ' + (page == v ? 'is-current' : '')" @click="changepage(v)"> {{v}} </a> 
          <!-- <router-link :class="'pagination-link rd ' + (page == v ? 'is-current' : '')" :to="'/pagination?limit=' + limit + '&page=' + v" > {{v}} </router-link>   -->
        </li>
      </ul>
    </nav>

   
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
  table,tr,td{border:1px solid}
  .rd{border-radius: 100px;}
</style>

<script>
import axios from 'axios'
import male from '../images/male.png'
import female from '../images/female.png'

export default {
  watch:{
    '$route.query'(){
      const {limit = 10,page = 1} = this.$route.query
      this.limit = limit 
      this.page = page
      this.getCustomer()
    }
  }
  ,data() {
    return {
      customers: []
      , img: male
      , imgsize: ""
      , limit: 5
      , page: 1
      , totalPage: 0
    }
  }
  , mounted() {
    // this.$route.query.id //รับจากด้านบน
    // const {limit, page} = this.$route.query
    const {limit = 10,page = 1} = this.$route.query
    this.limit = limit 
    this.page = page
    this.getCustomer()
  }
  , methods: {
    async getCustomer() {
      try {
        const {data: customer, headers} = await axios.get(`http://localhost:3000/customers?_limit=` + this.limit + `&_page=` + this.page)
        this.totalPage = Math.ceil(parseInt(headers["x-total-count"]) / this.limit)
        this.customers = customer
      } catch (err) {
        console.log(err.message)
      }
    }
    , managePic(gender) {
      return gender == 'M' ? male : female
    }
    , manageResize(gender) {
      return gender == 'M' ? 'image is-32x32' : 'image is-32x32'
    }
    , changepage(e){
      this.page = parseInt(e)
      this.getCustomer()
    }
    , changelimit(e){
      this.limit = parseInt(e.target.value)
      this.getCustomer()
    }
  }
}
</script>

