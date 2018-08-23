<template>
  <div class="box">
    <h3>Home Page</h3>
    <p><b>Basic v-model</b></p>
    <p> {{msg}} Mr. {{name}} </p>
    <p> Age {{arr.age}} NickName {{arr.nickname}} </p>

    <input type="text" class="input is-danger" v-model="name" style="width:200px"> &nbsp; <br>
    <button class="button is-warning" @click="hello(20)" style="margin-top:4px;" >Hello</button> &nbsp;
    <button class="button is-success" @click="world" style="margin-top:4px;" >World</button><br>
    Single: <input type="checkbox" v-model="single"> &nbsp; &nbsp;
    Gender: <input type="radio" name="gender" v-model="gender" value="M">Male
    <input type="radio" name="gender" v-model="gender" value="G">Female <br>

    <select v-model="income" >
      <option value="1">10000</option>
      <option value="2">20000</option>
      <option value="3">30000</option>
    </select>

    <hr>
    <p><b>Computed</b></p>
    <p> <i><b>Amount:</b></i> {{amount}} </p>
    <input type="text" class="input" v-model="amount" style="width:200px">
    <p> {{amountInclude}} </p>
    <p> {{hellotor}} </p>

    <hr>
    <p><b>V-if</b></p>
    <p> <i><b>Active:</b></i> {{active}}, <i><b>Counter:</b></i> {{counter}} </p>
    <p v-if="active"> {{msg + ' ' + name}} </p>
    <p v-if="counter > 10"> Counter > 10 </p>
    <p v-else>Counter <= 10</p>

    <hr>
    <p><b>V-for</b></p>
    <p :key="index" v-for="(n,index) in numbers"> {{n}} </p>
  </div>
</template>

<script>
export default {
  data(){
    return{
      msg: 'Hello'
      ,name: 'Tor-Sad'
      ,arr:{
        age: 25
        ,nickname: 'Tor'
      }
      ,amount: 100
      ,active: true
      ,counter: 1
      ,single: true 
      ,gender: ''
      ,income: 3 
      ,numbers: [10,20,30,40] /* v-for */
    }
  }
  ,methods:{
    hello(v){
      console.log('Hello ' + v)
    }
    ,world(){
      console.log('World')
    }
  }
  ,computed:{
    amountInclude(){
      return this.amount * 1.07
    }
    ,hellotor(){
      return ` ${this.msg} ${this.name} `
    }
  }
}
</script>



