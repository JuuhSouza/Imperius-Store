<template>
  <section class="parallax-container wave-cut">
    <div
      v-for="(slide, index) in slides"
      :key="index"
      class="parallax-bg"
      :style="{ backgroundImage: `url(${slide.image})` }"
      :class="{ 'is-active': index === currentIndex }"
    ></div>

    <div :class="['content', { 'is-visible': visible }]">

     <transition name="slide-fade" mode="out-in">
      <div :key="currentIndex" class="slide-text">
        <h2 v-if="slides[currentIndex].description"> {{ slides[currentIndex].description }} </h2>
      </div>
     </transition>
    </div>

    <button class="arrow arrow-left"  @click="prevSlide"> < </button>
    <button class="arrow arrow-right" @click="nextSlide"> > </button>

    <div class="indicators">
      <button
        v-for="(slide, index) in slides"
        :key="index"
        :class="['dot', { active: index === currentIndex }]"
        @click="goToSlide(index)"
      ></button>
    </div>

  </section>
</template>

<script>
export default {
  name: 'Banner',

  data() {
    return {
      visible: false,
      currentIndex: 0,
      timer: null,
      interval: 5000,
      slides: [
        { image: new URL('../../assets/img/carrosselProdutos_1.png', import.meta.url).href, alt: 'Slide 1', description: 'Coleiras exclusivas para seu pet!' },
        { image: new URL('../../assets/img/carrosselProdutos_2.png', import.meta.url).href, alt: 'Slide 2', description: 'Camas sustentáveis para um sono confortável!' },
        { image: new URL('../../assets/img/carrosselProdutos_3.png', import.meta.url).href, alt: 'Slide 3'}
      ]
    }
  },

  methods: {
    startAutoplay() {
      this.timer = setInterval(() => {
        this.nextSlide()
      }, this.interval)
    },

    stopAutoplay() {
      clearInterval(this.timer)
    },

    resetAutoplay() {
      this.stopAutoplay()
      this.startAutoplay()
    },

    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length
    },

    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length
    },

    goToSlide(index) {
      this.currentIndex = index
      this.resetAutoplay()
    },

    onElementObserved() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.visible = true
          }
        })
      }, { threshold: 0.3 })
      observer.observe(this.$el)
    }
  },

  mounted() {
    this.onElementObserved()
    this.startAutoplay()
  },

  beforeUnmount() {
    this.stopAutoplay()
  }
}
</script>

<style scoped>
.parallax-container {
  margin-top: 5rem;
  height: 650px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.wave-cut {
  clip-path: polygon(0% 0%, 100% 0, 95% 50%, 100% 100%, 0% 90%);
  -webkit-clip-path: ellipse(120% 90% at 30% 6%);
}

.parallax-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 0;
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.parallax-bg.is-active {
  opacity: 1;
}

.content {
  opacity: 0;
  transform: translateY(50px);
  transition: all 2s ease-out;
  z-index: 2;
  width: auto;
}

.content.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.4);
  color: var(--color-title-text);
  width: 44px;
  height: 44px;
  border-radius: 50%;
  font-size: 1.1rem;
  cursor: pointer;
  z-index: 3;
  transition: background 0.3s;
}

.arrow:hover { 
  background: rgba(255, 255, 255, 0.3); 
}

.arrow-left  { 
  left: 24px; 
}

.arrow-right { 
  right: 24px; 
}

.indicators {
  position: absolute;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 3;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.7);
  background: transparent;
  cursor: pointer;
  transition: background 0.3s, transform 0.3s;
  padding: 0;
}

.dot.active {
  background: #fff;
  transform: scale(1.3);
}

.slide-text {
  color: #fff;
  text-align: center;
  padding-right: 100px;
  max-width: 350px;
}

.slide-text h2 {
  font-size: 2rem;
  opacity: 0.9;
  line-height: 1.3;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.slide-fade-enter-from{ 
  opacity: 0; 
  transform: translateX(20px);
 }

.slide-fade-leave-to{
   opacity: 0; 
   transform: translateX(-20px); 
 }

</style>