<script setup>
import gsap from 'gsap'

import { onMounted, ref } from 'vue'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const sectionsRefs = ref([])

onMounted(() => {
  gsap.to(sectionsRefs.value, {
    xPercent: -100 * (sectionsRefs.value.length - 1),
    ease: 'none',
    scrollTrigger: {
      trigger: '#parallax__cont',
      pin: true,
      scrub: 1,
      snap: 1 / (sectionsRefs.value.length - 1),
      end: () => '+=' + document.querySelector('#parallax__cont').offsetWidth,
    },
  })
})
</script>

<template>
  <main id="parallax__cont">
    <section
      v-for="index in 9"
      :key="index"
      class="parallax__item"
      :ref="(el) => (sectionsRefs[index] = el)"
    >
      <span class="parallax__item__num">0{{ index }}</span>
      <figure class="parallax__item__imgWrap">
        <div
          class="parallax__item__img"
          :style="`background-image: url(/images/images0${index}@2.jpg)`"
        ></div>
      </figure>
    </section>
  </main>
</template>

<style>
html,
body {
  overflow-x: hidden;
}
</style>

<style scoped>
/* parallax__cont */
#parallax__cont {
  overscroll-behavior: none;
  width: 900%;
  height: 100vh;
  display: flex;
  flex-wrap: nowrap;
}
.parallax__item {
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.parallax__item:nth-child(even) {
  background-color: #222;
}
.parallax__item__num {
  position: absolute;
  right: 20px;
  bottom: 20px;
  font-size: 5vw;
  line-height: 1;
}
.parallax__item__img {
  width: 10vw;
  height: 10vw;
  margin: 1vw;
  background-color: #fff;
  background-size: cover;
  background-position: center;
}
</style>
