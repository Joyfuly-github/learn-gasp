<script setup>
import { onMounted, ref } from 'vue'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const items = Array.from({ length: 9 }, (_, i) => i + 1)
const imagesRefs = ref([])

onMounted(() => {
  // 01 gsap
  gsap.to(imagesRefs.value[0], {
    x: 200,
    duration: 1,
    borderRadius: 100,
    rotation: 360,
  })

  // 02 : scroll trigger
  gsap.to(imagesRefs.value[1], {
    x: 200,
    duration: 1,
    borderRadius: 100,
    rotation: 360,
    scrollTrigger: {
      trigger: imagesRefs.value[1],
    },
  })

  // 03 : toggle actions
  gsap.to(imagesRefs.value[2], {
    x: 200,
    duration: 1,
    borderRadius: 100,
    rotation: 360,
    scrollTrigger: {
      trigger: imagesRefs.value[2],
      // toggleActions: 'onEnter onLeave onEnterBack onLeaveBack',
      // play, pause, resume, reset, restart, complete, reverse, none
      toggleActions: 'play pause reverse resume',
    },
  })

  // 04 : start, end
  gsap.to(imagesRefs.value[3], {
    x: 200,
    duration: 1,
    borderRadius: 100,
    rotation: 360,
    scrollTrigger: {
      trigger: imagesRefs.value[3],
      toggleActions: 'play pause reverse resume',
      start: 'top: 50%',
      end: 'bottom: 20%',
      markers: true,
    },
  })

  // 05 : scrub 스크롤 움직이는 값에 따라 움직임
  gsap.to(imagesRefs.value[4], {
    x: 200,
    duration: 1,
    borderRadius: 100,
    rotation: 360,
    scrollTrigger: {
      trigger: imagesRefs.value[4],
      start: 'top: 50%',
      end: 'bottom: 20%',
      markers: true,
      // scrub: true,
      scrub: 0.5,
    },
  })

  // 06 : pin
  gsap.to(imagesRefs.value[5], {
    x: 200,
    duration: 1,
    borderRadius: 100,
    rotation: 360,
    scrollTrigger: {
      trigger: imagesRefs.value[5],
      start: 'top: 50%',
      end: 'bottom: 200px',
      markers: true,
      scrub: 0.5,
      pin: true,
    },
  })

  // 07 : toggleClass
  gsap.to(imagesRefs.value[6], {
    x: 200,
    duration: 1,
    borderRadius: 100,
    rotation: 360,
    scrollTrigger: {
      trigger: imagesRefs.value[6],
      start: 'top center',
      end: 'bottom top',
      markers: true,
      scrub: 1,
      toggleClass: 'active',
      // 헷갈릴 때 id로 별도 표기
      id: 'toggleClass',
    },
  })

  // 08 : callback
  gsap.to(imagesRefs.value[7], {
    x: 200,
    duration: 1,
    borderRadius: 100,
    rotation: 360,

    scrollTrigger: {
      trigger: imagesRefs.value[7],
      start: 'top center',
      end: 'bottom 20%',
      markers: true,
      scrub: 1,

      // callBack
      onEnter: () => {
        console.log('onEnter')
      },

      onLeave: () => {
        console.log('onLeave')
      },

      onEnterBack: () => {
        console.log('onEnterBack')
      },

      onLeaveBack: () => {
        console.log('onLeaveBack')
      },

      onUpdate: (self) => {
        // self.progress     // 0.000 ~ 1.000
        // self.isActive     // true / false
        // self.direction    // 1 (스크롤 내려감), -1 (올라감)
        // self.trigger      // 대상 DOM

        console.log('onUpdate', self.progress.toFixed(3))
      },

      onToggle: (self) => {
        console.log('onToggle', self.isActive)
      },
    },
  })

  // for (let i = 0; i < items.length; i++) {
  //   gsap.to(imagesRefs.value[i], {
  //     x: 200,
  //     duration: 1,
  //     borderRadius: 100,
  //     rotation: 360,
  //     scrollTrigger: {
  //       trigger: imagesRefs.value[i],
  //     },
  //   })
  // }
})
</script>

<template>
  <main id="parallax__cont">
    <section v-for="(item, index) in items" :key="index" class="parallax__item">
      <span class="parallax__item__num">0{{ item }}</span>
      <div
        class="parallax__item__img"
        :ref="(el) => (imagesRefs[index] = el)"
        :style="`background-image: url(/images/images0${item}.jpg)`"
      ></div>
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
}

.parallax__item:nth-child(2n) {
  background-color: #222;
  color: #fff;
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
  background-color: #fff;
  background-size: cover;
  background-position: center;
}

.parallax__item__img.active {
  filter: hue-rotate(100deg);
}
</style>
