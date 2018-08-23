<template>
  <div class="box">
    <h3>Product Page</h3>
    <br>
    <input v-model="user.username" type="text" class="input" placeholder="Username" style="width:200px;display:inline">&nbsp;
    <input v-model="user.password" type="text" class="input" placeholder="Password" style="width:200px;display:inline">&nbsp;
    <button @click="postLogin" class="button is-success">Login</button>
    <!-- <p> {{users.token}} </p> -->
    <br><br>
    <input v-model="product.product_name_en" type="text" class="input" placeholder="Producy Name En" style="width:200px;display:inline">&nbsp;
    <input v-model="product.product_name_th" type="text" class="input" placeholder="Producy Name Th" style="width:200px;display:inline">&nbsp;
    <input v-model="product.price" type="text" class="input" placeholder="Price" style="width:200px;display:inline">&nbsp;&nbsp;
    <button @click="addProduct" class="button is-success">Add Product</button>
    <br><br>
    <input v-model="product.id" class="input" placeholder="Delete ID" type="text" style="width:200px;display:inline">&nbsp;
    <button @click="deleteProduct" class="button is-danger">Delete Product</button>
    <br><br>
    <p class="comtrol">
      <button @click="getProducts" class="button is-warning">Get Product</button>
    </p>
    <br>
    <table class="table">
      <tr>
        <td class="bg-header">ID</td>
        <td class="bg-header">Product</td>
        <td class="bg-header">Unit</td>
        <td class="bg-header">Price</td>
      </tr>
      <tr :key="p.id" v-for="p in products">
        <td> {{p.id}} </td>
        <td> {{p.product_name_th}} </td>
        <td> {{p.unit_th}} </td>
        <td> {{p.price}} </td>
      </tr>
    </table>

  </div>
</template>

<style scoped>
  table,tr,td{border:1px solid}
  .bg-header{background-color: #009688 ;color:#FFFFFF}
</style>

<script>
import axios from '../axios'

export default {
  data(){
    return{
      products:[]
      ,product:{}
      ,users:[]
      ,user:{}
    }
  }
  ,mounted(){
    const token = localStorage.getItem('token')
    if(token){
      this.users.token = token
    }
  }
  ,methods:{
    async getProducts(){
      const {data} = await  axios.get('/v1/products?price=100')
      this.products = data
    }
    ,async addProduct(){
      const {data} = await  axios.post('/v1/products',this.product)
      this.product = {}
      this.getProducts()
    }
    ,async deleteProduct(){
      const {data} = await  axios.delete('/v1/products/' + this.product.id)
      this.product = {}
      this.getProducts()
    }
    ,async postLogin(){
      const {data} = await  axios.post('/v1/users/login',this.user)
      this.users = data
      localStorage.setItem('token',data.token)
    }
  }
}
</script>
