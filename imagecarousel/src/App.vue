<template>
  <div id="app">
 <div class="continer">
  <div>
      <h1>Image Carousel</h1>
    <div class="carousel">
      <div class="image-container" :style="imageStyle">
        <img v-for="(image, index) in images" :src="image" :key="index" />
      </div>
      <div class="buttons">
        <button class="button" @click="prevImage">Previous</button>
        <button class="button" @click="nextImage">Next</button>
      </div>
    </div>
    </div>
 </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        require('@/assets/image1.avif'),
        require('@/assets/image2.avif'),
        require('@/assets/image3.avif'),
        require('@/assets/image4.avif'),
      ],
      currentIndex: 0,
      intervalId: null
    };
  },
  computed: {
    imageStyle() {
      return {
        transform: `translateX(-${this.currentIndex * 100}%)`,
        transition: 'transform 0.5s ease-in-out'
      };
    }
  },
  methods: {
    nextImage() {
      if (this.currentIndex === this.images.length - 1) {
        this.currentIndex = 0; 
      } else {
        this.currentIndex++;
      }
    },
    prevImage() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
    startAutoSlide() {
      this.intervalId = setInterval(this.nextImage, 2000); 
    },
    stopAutoSlide() {
      clearInterval(this.intervalId);
    }
  },
  mounted() {
    this.startAutoSlide();
  },
  beforeUnmount() {
    this.stopAutoSlide();
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.continer{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
}

.carousel {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 800px;
  height: 600px;
}

.image-container {
  display: flex;
  width: 100%;
  height: 100%;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.buttons {
  margin-top: 20px;
  width: 800px; 
  display: flex;
  justify-content: space-between;
}

.button {
  background-color: rebeccapurple;
  color: #fff;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  width: 49%; 
}
</style>