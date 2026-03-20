<template>

    <div class="title-text">
        <h1> Conheça nossos Produtos</h1>
    </div>
  <div class="carousel-container" @mouseenter="stopTimer" @mouseleave="startTimer">
    
    <button class="nav-btn prev" @click="prev">&#10094;</button>
    <button class="nav-btn next" @click="next">&#10095;</button>

    <div class="carousel-slider">
      <transition-group name="fade">
        <div 
          v-for="(item, index) in slides" 
          :key="item.id" 
          v-show="currentIndex === index"
          class="carousel-item"
        >
          <img :src="item.image" :alt="item.title">
          <div class="caption">{{ item.title }}</div>
        </div>
      </transition-group>
    </div>

    <div class="dots">
      <span 
        v-for="(_, index) in slides" 
        :key="index"
        :class="{ active: currentIndex === index }"
        @click="currentIndex = index"
      ></span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const slides = ref([
  { id: 1, image: 'https://picsum.photos/800/400?random=1', title: 'Projeto de Costura' },
  { id: 2, image: 'https://picsum.photos/800/400?random=2', title: 'Loom & History' },
  { id: 3, image: 'https://picsum.photos/800/400?random=3', title: 'Desenvolvimento Web' }
]);

const currentIndex = ref(0);
const interval = 3000;
let timer = null;

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.value.length;
};

const prev = () => {
  currentIndex.value = (currentIndex.value - 1 + slides.value.length) % slides.value.length;
};

const startTimer = () => {
  timer = setInterval(next, interval);
};

const stopTimer = () => {
  clearInterval(timer);
};

onMounted(() => startTimer());
onUnmounted(() => stopTimer());
</script>

<style scoped>
.title-text{
    padding: 2em;
    text-align: center;
    font-size: 1.4em;
    color: var(--color-title-text);
}

.carousel-container {
  position: relative;
  width: 100%;
  max-width: 1200px;
  height: 400px;
  overflow: hidden;
  border-radius: 12px;
  margin: auto;
  background-color: #000;
}

.carousel-slider, .carousel-item {
  width: 100%;
  height: 100%;
}

.carousel-item {
  position: absolute;
  top: 0;
  left: 0;
}

.carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.caption {
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: var(--title-carousel);
  background: rgba(0, 0, 0, 0.5);
  padding: 8px 16px;
  border-radius: 4px;
  z-index: 5;
}

.dots {
  position: absolute;
  bottom: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 8px;
  z-index: 10;
}

.dots span {
  width: 12px;
  height: 12px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s;
}

.dots span.active {
  background: #fff;
  transform: scale(1.2);
}

.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.2);
  color: white;
  border: none;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  z-index: 20;
  border-radius: 4px;
  transition: 0.3s;
}

.nav-btn:hover {
  background: rgba(0, 0, 0, 0.6);
}

.prev { left: 10px; }
.next { right: 10px; }

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>