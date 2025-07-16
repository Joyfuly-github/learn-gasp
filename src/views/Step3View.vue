<script setup>
import gsap from 'gsap'

import { onMounted } from 'vue'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const items = Array.from({ length: 9 }, (_, i) => i + 1)

onMounted(() => {
  // 01 한개 섹션 고정시키기
  // const panel = sectionRefs.value[0]
  // ScrollTrigger.create({
  //   trigger: panel,
  //   start: 'top top',
  //   pin: true,
  //   pinSpacing: false,
  // })

  // 02 여러 개 섹션 고정시키기
  // gsap.utils.toArray('.parallax__item').forEach((panel) => {
  //   ScrollTrigger.create({
  //     trigger: panel,
  //     start: 'top top',
  //     pin: true,
  //     pinSpacing: false,
  //   })
  // })

  // 03 스냅 고정 효과 만들기
  let panels = gsap.utils.toArray('.parallax__item')
  let tops = panels.map((panel) =>
    ScrollTrigger.create({
      trigger: panel,
      start: 'top top',
    }),
  )

  panels.forEach((panel) => {
    ScrollTrigger.create({
      trigger: panel,
      start: () => (panel.offsetHeight < window.innerHeight ? 'top top' : 'bottom bottom'),
      pin: true,
      pinSpacing: false,
    })
  })

  ScrollTrigger.create({
    snap: {
      snapTo: (progress, self) => {
        let panelStarts = tops.map((st) => st.start),
          snapScroll = gsap.utils.snap(panelStarts, self.scroll())

        return gsap.utils.normalize(0, ScrollTrigger.maxScroll(window).snapScroll)
      },
      duration: '0.5s',
    },
  })
})
</script>

<template>
  <main id="parallax__cont">
    <section v-for="(item, index) in items" :key="index" class="parallax__item">
      <span class="parallax__item__num">0{{ item }}</span>
      <div
        class="parallax__item__img"
        :style="`background-image: url(/images/images0${item}@2.jpg)`"
      ></div>
      <h2 class="parallax__item__title">section{{ item }}</h2>
    </section>
  </main>
</template>

<style scoped>
/* parallax__cont */
#parallax__cont {
  overflow: hidden;
}
.parallax__item {
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.parallax__item:nth-child(2n) {
  background-color: #222;
}
.parallax__item__num {
  position: absolute;
  right: 20px;
  bottom: 20px;
  font-size: 3vw;
  line-height: 1;
  z-index: 10;
}
.parallax__item__img {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: #fff;
  background-size: cover;
  background-position: center;
}
.parallax__item__img::after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
}
.parallax__item__title {
  font-size: 5vw;
  z-index: 100;
  text-transform: uppercase;
  display: inline-block;
}
</style>
