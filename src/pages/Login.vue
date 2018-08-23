<template>
  <div class="box">
    <h3>Product Page</h3>
    <br>
    <input v-model="user.username" type="text" class="input" placeholder="Username" style="width:200px;display:inline">&nbsp;
    <input v-model="user.password" type="text" class="input" placeholder="Password" style="width:200px;display:inline">&nbsp;
    <button @click="postLogin" class="button is-success">Login</button>
    <p> {{users.token}} </p>
  </div>
</template>

<style scoped>
  table,tr,td{border:1px solid}
  .bg-header{background-color: #009688 ;color:#FFFFFF}
</style>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      users:[]
      ,user:{}
    }
  }
  ,methods:{
    async postLogin(){
      const {data} = await  axios.post('http://localhost:3000/api/v1/users/login',this.user)
      this.users = data
      localStorage.setItem('token',data.token)
    }
  }
}
</script>
