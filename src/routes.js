import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Product from './pages/Product.vue'
import Form from './pages/Form.vue'
import Customer from './pages/Customer.vue'
import CustomerProfile from './pages/CustomerProfile.vue'
import Pagination from './pages/Pagination.vue'
import Search from './pages/Search.vue'
import Column from './pages/Column.vue'
import Nested from './pages/Nested.vue'
import Vuex from './pages/Vuex.vue'
import Login from './pages/Login.vue'
import Notfound from './pages/Notfound.vue'


export default [
  { path:'/',component:Home }
  ,{ path:'/about',component: About }
  ,{ path:'/product',component: Product }
  ,{ path:'/form',component: Form }
  ,{ path:'/customer',component: Customer }
  ,{ path:'/customer/:id',component: CustomerProfile }
  ,{ path:'/pagination',component: Pagination }
  ,{ path:'/search',component: Search }
  ,{ path:'/column',component: Column }
  ,{ path:'/nested',component: Nested }
  ,{ path:'/vuex',component: Vuex }
  ,{ path:'/login',component: Login }
  ,{ path:'*', component: Notfound }
]