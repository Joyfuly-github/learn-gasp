<script setup>
import gsap from 'gsap'

import { onMounted, ref } from 'vue'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const sectionsRefs = ref([])
const imagesRefs = ref([])

onMounted(() => {
  const scrollTween = gsap.to(sectionsRefs.value, {
    xPercent: -100 * (sectionsRefs.value.length - 1),
    ease: 'none',
    scrollTrigger: {
      trigger: '#parallax__horizontal',
      pin: true,
      scrub: 1,
      snap: 1 / (sectionsRefs.value.length - 1),
      start: 'top top',
      end: () => '+=' + document.querySelector('#parallax__horizontal').offsetWidth,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  })

  const imagesAnimation = {
    1: {
      y: -200,
      duration: 2,
      ease: 'elastic',
    },
    2: {
      rotation: 720,
      duration: 2,
      ease: 'elastic',
    },
    3: {
      scale: 0.3,
      duration: 2,
      ease: 'elastic',
    },
    4: {
      x: -200,
      ease: 'none',
    },
  }

  gsap.utils.toArray(imagesRefs.value).forEach((item, i) => {
    const animation = imagesAnimation[i + 1] || {}

    gsap.to(item, {
      ...animation,
      scrollTrigger: {
        trigger: item,
        start: 'left center',
        containerAnimation: scrollTween,
      },
    })
  })
})
</script>

<template>
  <main id="parallax__cont">
    <section class="parallax__item" v-for="index in 2" :key="index">
      <span class="parallax__item__num">0{{ index }}</span>
      <figure class="parallax__item__imgWrap">
        <div
          class="parallax__item__img"
          :style="`background-image: url(/images/images0${index}@2.jpg)`"
        ></div>
      </figure>
    </section>

    <div id="parallax__horizontal">
      <section
        class="parallax__item"
        v-for="(section, index) in [3, 4, 5, 6]"
        :key="index"
        :ref="(el) => (sectionsRefs[index] = el)"
      >
        <span class="parallax__item__num">0{{ section }}</span>
        <figure class="parallax__item__imgWrap">
          <div
            class="parallax__item__img"
            :ref="(el) => (imagesRefs[index] = el)"
            :style="`background-image: url(/images/images0${section}@2.jpg)`"
          ></div>
        </figure>
      </section>
    </div>

    <section class="parallax__item" v-for="index in [7, 8]" :key="index">
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
#parallax__horizontal {
  overscroll-behavior: none;
  width: 400%;
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
