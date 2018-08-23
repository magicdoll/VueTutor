<template>
  <div class="box">
    <h3>Form Page</h3>
    <div class="field">
      <label>Name</label>
      <div class="control">
        <input type="text" :class="cssclass('name')" name="name" v-model="customer.name" v-validate="'required|min:5'">
      </div>
      <p class="help is-danger" > {{errors.first('name')}} </p>
    </div>

    <div class="field">
      <label>Surname</label>
      <div class="control">
        <input type="text" :class="cssclass('surname')" name="surname" v-model="customer.surname" v-validate="'required|min:5'">
      </div>
      <p class="help is-danger" > {{errors.first('surname')}} </p>
    </div>

  </div>
</template>

<script>
export default {
  data(){
    return{
      customer:{}
    }
  }
  ,methods:{
    cssclass(n){
      let err = this.errors.has(n)
      return `input ${err ? ' is-danger' : ''} `
    }
  }
}
</script>

<style scoped>
  h3{
    color: gray
  }
</style>

