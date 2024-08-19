
import { createWebHistory, createRouter } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import ProductPage from '@/views/ProductPage.vue';
import ProductList from '@/views/ProductList.vue';
import ProductDetail from '@/views/ProductDetail.vue';
import ShoppingCart from '@/views/ShoppingCart.vue';
import AboutPage from '@/views/AboutPage.vue';
import ContactPage from '@/views/ContactPage.vue';




 const routes= [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/product/:id',
      name: 'ProductPage',
      component: ProductPage
    },
    {
      path: '/products',
      name: 'ProductList',
      component: ProductList
    },

    {
      path: '/product/detail/:id',
      name: 'ProductDetail',
      component: ProductDetail
    },
     
    {
      path: '/shopping-cart',
      name: 'ShoppingCart',
      component: ShoppingCart
    },

    {
      path: '/about',
      name: 'AboutPage',
      component: AboutPage
    },

    {
      path: '/contact',
      name: 'ContactPage',
      component: ContactPage
    }
  ]


const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;