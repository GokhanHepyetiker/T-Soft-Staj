<template>    
  <div class="home-page">
    <nav class="navbar">
      <div class="navbar-brand">Vue E-Commerce Demo</div>
      <ul class="navbar-links">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/products">Products</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
      <div class="navbar-search">
        <input type="text" placeholder="Search..." v-model="searchQuery" @input="onSearch" />
        <button @click="onSearch">Search</button>
      </div>
    </nav>
    <swiper class="img-swiper" :navigation="true" :slides-per-view="1" :modules="modules"  :loop="true" @click="onImageClick(n)">
      <swiper-slide v-for="(url, index) in imageUrls" :key="index" @click="onImageClick(index)">
        <img :src="`/images/slider-image-${index + 1}.webp`" alt="Slider Image" @error="imageError" />
      </swiper-slide>
      <template #pagination>
        <div class="swiper-pagination"></div>
      </template>
      <template #button-next>
        <div class="swiper-button-next"></div>
      </template>
      <template #button-prev>
        <div class="swiper-button-prev"></div>
      </template>
    </swiper>
    <div class="best-sellers">
      <h2>Best Sellers</h2>
      <div class="cards">
        <div class="card" v-for="n in 4" :key="n">
          <img :src="`/images/card-image-${n}.webp`" alt="Card Image" @error="imageError" />
          <h3>Card Title {{ n }}</h3>
          <p>Card description goes here. This is a brief description of the card content.</p>
          <button>Learn More</button>
        </div>
      </div>
    </div>
    <ProductList />
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-section">
          <h4>About Us</h4>
          <p>Learn more about our company and values.</p>
        </div>
        <div class="footer-section">
          <h4>Customer Service</h4>
          <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Returns</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>Follow Us</h4>
          <ul class="social-links">
            <li><a href="#"><i class="fab fa-facebook-f"></i> Facebook</a></li>
            <li><a href="#"><i class="fab fa-twitter"></i> Twitter</a></li>
            <li><a href="#"><i class="fab fa-instagram"></i> Instagram</a></li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';




export default {
  name: 'HomePage',
  components: {
    Swiper,
    SwiperSlide,
    
  },
  setup() {
      return {
        modules: [Navigation],
      };
    },

    data() {
    return {
      searchQuery: '',
      imageUrls: [
        'https://www.altinbas.com/evlilik-koleksiyonu',
        'https://www.altinbas.com/altin-koleksiyonu',
        'https://www.altinbas.com/pirlanta-koleksiyonu'
      ]
    };
  },
    methods: {
    onSearch() {
      console.log('Search query:', this.searchQuery);
      
    },
    onImageClick(imageIndex) {
      console.log('Image clicked:', imageIndex);
      window.location.href = this.imageUrls[imageIndex];
    }
  }

};
</script>

<style scoped>
.home-page {
  background: #f5f5f5;
  color: #333;
  font-family: Arial, sans-serif;
  padding: 20px;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.navbar-brand {
  font-size: 24px;
  font-weight: bold;
  color: #333;
}

.navbar-links {
  list-style: none;
  display: flex;
  gap: 15px;
}

.navbar-links li {
  display: inline;
}

.navbar-links a {
  color: #333;
  text-decoration: none;
  font-size: 18px;
  padding: 5px 10px;
  transition: color 0.3s ease;
}

.navbar-links a:hover {
  color: #ff7e5f;
}

.navbar-search {
  display: flex;
  align-items: center;
  gap: 10px;
}

.navbar-search input {
  padding: 10px 15px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 25px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.navbar-search input:focus {
  border-color: #feb47b;
  box-shadow: 0 0 10px rgba(254, 180, 123, 0.5);
  outline: none;
}

.navbar-search button {
  padding: 10px 20px;
  font-size: 16px;
  background: #ff7e5f;
  color: #fff;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: background 0.3s ease, box-shadow 0.3s ease;
}

.navbar-search button:hover {
  background: #feb47b;
  box-shadow: 0 0 10px rgba(254, 180, 123, 0.5);
}

.img-swiper {
  margin-bottom: 40px;
  height: 500px; 
}

.img-swiper img {
  width: 100%;
  height: 100%; 
  object-fit: contain; 
  border-radius: 10px;
  cursor: pointer;
}



.best-sellers {
  margin-bottom: 40px;
}

.best-sellers h2 {
  text-align: center;
  font-size: 28px;
  margin-bottom: 20px;
  color: #333;
}

.cards {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 10px;
}

.card {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  width: 350px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.card img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 15px;
}

.card h3 {
  margin: 10px 0;
  font-size: 20px;
  color: #333;
}

.card p {
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
}

.card button {
  background: #ff7e5f;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.card button:hover {
  background: #feb47b;
}

.footer {
  background: #f5fafe;
  color: #333;
  padding: 40px 20px;
  margin-top: 40px;
}

.footer-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.footer-section {
  flex: 1;
  min-width: 200px;
  margin: 10px;
}

.footer-section h4 {
  font-size: 18px;
  margin-bottom: 15px;
}

.footer-section p,
.footer-section ul {
  font-size: 14px;
  line-height: 1.6;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li {
  margin-bottom: 10px;
}

.footer-section ul li a {
  color: #333;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-section ul li a:hover {
  color: #ff7e5f;
}

.social-links {
  display: flex;
  gap: 10px;
}

.social-links a {
  display: flex;
  align-items: center;
  color: #333;
  text-decoration: none;
  transition: color 0.3s ease;
}

.social-links a:hover {
  color: #ff7e5f;
}

.social-links i {
  margin-right: 5px;
}


.swiper-button-next,
.swiper-button-prev {
  color: #feb47b !important;
}

.swiper-button-next::after,
.swiper-button-prev::after {
  color: #feb47b !important;
}


.swiper-button-next,
.swiper-button-prev {
  z-index: 10;
}


:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: #feb47b !important;
}

:deep(.swiper-button-next::after),
:deep(.swiper-button-prev::after) {
  color: #feb47b !important;
}

</style>