<script setup>
import gsap from 'gsap'
import TheAside from '@/components/common/TheAside.vue'

import { onMounted, ref } from 'vue'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const items = Array.from({ length: 9 }, (_, i) => i + 1)
const sectionRefs = ref([])
const imagesRefs = ref([])
const activeIndex = ref(0)

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
      // markers: true,
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
      // markers: true,
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
      start: 'top 50%',
      end: 'bottom 200px',
      // markers: true,
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
      // markers: true,
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
      // markers: true,
      scrub: 1,

      // callBack
      onEnter: () => {
        // console.log('onEnter')
      },

      onLeave: () => {
        // console.log('onLeave')
      },

      onEnterBack: () => {
        // console.log('onEnterBack')
      },

      onLeaveBack: () => {
        // console.log('onLeaveBack')
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

  //
  ScrollTrigger.create({
    trigger: '#parallax__cont',
    start: 'top top',
    end: () => {
      window.innerHeight * items.length
    },
    snap: {
      snapTo: 1 / items.length,
      duration: 0.5,
      ease: 'power1.inOut',
    },
    scrub: 1,
    onUpdate: (self) => {
      const progress = self.progress
      const index = Math.round(progress * (items.length - 1))
      if (activeIndex.value !== index) activeIndex.value = index
    },
  })
})
</script>

<template>
  <main id="parallax__cont">
    <section
      v-for="(item, index) in items"
      :key="index"
      :ref="(el) => (sectionRefs[index] = el)"
      class="parallax__item"
    >
      <div class="parallax__item__img" :ref="(el) => (imagesRefs[index] = el)">
        <svg
          width="120"
          height="120"
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M254.166 0C392.534 0 500 116.3 500 254.092C500 389.601 390.241 500 254.166 500C115.777 500 0 391.906 0 254.092C0 114.032 113.521 0 254.166 0Z"
            :fill="index % 2 === 0 ? '#f2a30f' : '#ffb6c1'"
          />
          <path
            d="M326 217C326 226.941 317.941 235 308 235C298.059 235 290 226.941 290 217C290 207.059 298.059 199 308 199C317.941 199 326 207.059 326 217Z"
            fill="black"
          />
          <path
            d="M210 217C210 226.941 201.941 235 192 235C182.059 235 174 226.941 174 217C174 207.059 182.059 199 192 199C201.941 199 210 207.059 210 217Z"
            fill="black"
          />
          <path
            d="M147 303C172 354 233 355 252 355C271 355 322.311 350.135 353 303"
            stroke="black"
            stroke-width="20"
            stroke-linecap="round"
          />
        </svg>
      </div>
    </section>
  </main>

  <TheAside :activeIndex="activeIndex"></TheAside>
</template>

<style scoped>
/* parallax__cont */
#parallax__cont {
  height: auto;
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

#parallax__cont > *:nth-child(2n):not(aside) {
  background-color: #f3a20f;
  color: #fff;
}

.parallax__item__num {
  position: absolute;
  right: 20px;
  bottom: 20px;
  font-size: 5vw;
  line-height: 1;
}

.parallax__item__img.active {
  filter: hue-rotate(100deg);
}
</style>
