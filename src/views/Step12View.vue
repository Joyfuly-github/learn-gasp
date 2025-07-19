<script setup>
import gsap from 'gsap'

import { onMounted, ref } from 'vue'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const sectionsRefs = ref([])

onMounted(() => {})
</script>

<template>
  <nav class="parallax__nav" ref="navRef">
    <ul>
      <li v-for="index in 9" :key="index">
        <button type="button" @click="scrollTo(index)" :class="{ active: index === navActive }">
          s{{ index + 1 }}
        </button>
      </li>
    </ul>
  </nav>

  <main id="parallax__cont">
    <section
      v-for="index in 9"
      :key="index"
      class="parallax__item"
      :ref="(el) => (sectionsRefs[index] = el)"
    >
      <span class="parallax__item__num">0{{ index + 1 }}</span>
      <h2 class="parallax__item__title">section{{ index + 1 }}</h2>
      <figure class="parallax__item__imgWrap">
        <div
          class="parallax__item__img"
          :style="`background-image: url(/images/images0${index + 1}@2.jpg)`"
        ></div>
      </figure>
    </section>
  </main>
</template>

<style scoped>
/* parallax__cont */
#parallax__cont {
  max-width: 1600px;
  width: 98%;
  margin: 0 auto;
}
.parallax__item {
  width: 1000px;
  max-width: 70vw;
  margin: 30vw auto;
  text-align: left;
  margin-right: 0;
  position: relative;
  padding-top: 15vw;
}
.parallax__item:nth-child(even) {
  margin-left: 0;
  text-align: right;
}
.parallax__item__num {
  font-size: 35vw;
  position: absolute;
  left: -5vw;
  top: -13vw;
  opacity: 0.07;
  font-family: 'Lato';
  font-weight: 100;
}
.parallax__item:nth-child(even) .parallax__item__num {
  left: auto;
  right: -5vw;
}
.parallax__item__title {
  padding-bottom: 5px;
  font-weight: 400;
}
.parallax__item__imgWrap {
  width: 100%;
  padding-bottom: 56.25%;
  background: #000;
  position: relative;
  overflow: hidden;
}
.parallax__item__img {
  position: absolute;
  left: -5%;
  top: -5%;
  width: 110%;
  height: 110%;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  filter: saturate(0%);
  transition: all 1s;
}
.parallax__item__img:hover {
  filter: saturate(100%);
  transform: scale(1.025);
}
.parallax__item__desc {
  font-size: 4vw;
  line-height: 1.4;
  margin-top: -5vw;
  margin-left: -4vw;
  z-index: 100;
  position: relative;
  word-break: keep-all;
}
.parallax__item:nth-child(even) .parallax__item__desc {
  margin-left: auto;
  margin-right: -4vw;
}
</style>
