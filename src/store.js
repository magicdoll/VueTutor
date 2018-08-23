import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import male from './images/male.png'
import female from './images/female.png'

Vue.use(Vuex)

// const foo = {foo:'FOO'}
// const bar = {...foo} // Clone
// const bar = {...foo, bar: 'BAR', baz: 'BAZ'} // Clone And Add
// const bar = {...foo, foo: 'BAZ'} // Clone And Update

export default new Vuex.Store({
  state:{
    customers:[]
    ,customers2:[]
    , imgsize: ""
    , limit: 5
  }
  ,getters:{
    usAmount(state){
      return state.amount / 33.33
    }
  }
  ,mutations:{
    mutateCus(state, v){
      state.customers = v
      state.customers2 = v
    }
    ,mulGendercustomer(state, v){
      state.customers2 = state.customers.filter(c=>{
        return c.gender == v
      })
    }
  }
  ,actions:{
    async getCus(context){
      try{
        const {data:customer} = await axios.get(`http://localhost:3000/customers`)
        context.commit('mutateCus',customer)
        // context.commit('loading',false)
      }catch(err){
        // context.commit('loading',false)
      }
    }
  }

  // state:{
  //   username: 'admin'
  //   ,amount:100
  //   ,customers:[]
  // }
  // ,getters:{
  //   usAmount(state){
  //     return state.amount / 33.33
  //   }
  // }
  // ,mutations:{
  //   mutateAmount(state, v){
  //     state.amount += v
  //   }
  //   ,mutateCus(state, v){
  //     state.customers = v
  //   }
  // }
  // ,actions:{
  //   getCus(context){
  //     try{
  //       // context.commit('loading',true)
  //       context.commit('mutateCus',[1,2,3,4,5,6])
  //       // context.commit('loading',false)
  //     }catch(err){
  //       // context.commit('loading',false)
  //     }
      
  //   }
  // }
})