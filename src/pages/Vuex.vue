<template>
  <div class="box">
    <h3>Vuex</h3>
    <hr>
    <button @click="getCus" class="button is-warning">Get</button>
    <br>
    <input type="radio" name="gender" value="M" @click="mulGendercustomer('M')"> Male
    <input type="radio" name="gender" value="F" @click="mulGendercustomer('F')"> Female

    <table class="table">
      <tr>
        <td>ID</td>
        <td>Name</td>
        <td>Last Name</td> 
        <td>Gender</td>
      </tr>
      <tr :key="c.id" v-for="c in customers2">
        <td> {{c.id}} </td>
        <td> {{c.firstName}} </td>
        <td> {{c.lastName}} </td>
        <td>{{ c.gender == 'M' ? ' เพศ : ชาย' : ' เพศ : หญิง' }} {{c.gender}} </td>
      </tr>
    </table>
 
  </div>
</template>

<style scoped>
  table,tr,td{border:1px solid}
</style>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex' // คือการ Map ข้อมูล
export default {
  computed:{
    ...mapState(['customers','customers2'])
  }
  ,methods:{
    ...mapActions(['getCus'])
    ,...mapMutations(['mulGendercustomer'])
  }
}
</script>
