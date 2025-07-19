<script setup>
import gsap from 'gsap'

import { onMounted, ref } from 'vue'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const sections = [
  { desc: '높은 목표를 세우고, 스스로 채찍질 한다.' },
  { desc: '결과도 중요하지만, 과정을 더 중요하게 생각한다.' },
  { desc: '매 순간에 최선을 다하고, 끊임없이 변화한다.' },
  { desc: '모든 일에는 기본을 중요하게 생각한다.' },
  { desc: '열정을 잃지 않고 실패에서 실패로 걸어가는 것이 성공이다.' },
  { desc: '천 마디 말보단 하나의 행동이 더 값지다.' },
  { desc: '조그만 성공에 만족하지 않으며, 방심을 경계한다.' },
  { desc: '나는 내가 더 노력할수록 운이 더 좋아진다는 걸 발견했다.' },
  { desc: '꿈이 있다면, 그 꿈을 잡고 절대 놓아주지마라.' },
]

const sectionsRefs = ref([])
const navActive = ref(0)

const scrollTo = (index) => {
  sectionsRefs.value[index]?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}

onMounted(() => {
  let links = gsap.utils.toArray(sectionsRefs.value)

  links.forEach((link, index) => {
    ScrollTrigger.create({
      trigger: link,
      start: 'top center',
      end: 'bottom center',
      onEnter: () => {
        navActive.value = index
      },
      onEnterBack: () => {
        navActive.value = index
      },
    })
  })
})
</script>

<template>
  <nav class="parallax__nav">
    <ul>
      <li v-for="(section, index) in sections" :key="index">
        <button type="button" @click="scrollTo(index)" :class="{ active: index === navActive }">
          s{{ index + 1 }}
        </button>
      </li>
    </ul>
  </nav>

  <main id="parallax__cont">
    <section
      v-for="(section, index) in sections"
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
      <p class="parallax__item__desc">{{ section.desc }}</p>
    </section>
  </main>
</template>

<style scoped>
/* parallax__nav */
.parallax__nav {
  padding: 10px;
  position: fixed;
  right: 20px;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 44px;
  z-index: 999;
}

.parallax__nav > ul {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.parallax__nav > ul > li > * {
  width: 24px;
  height: 24px;
  display: flex;
  border-radius: 50%;
  font-size: 12px;
  justify-content: center;
  align-items: center;
}

.parallax__nav > ul > li > *:hover {
  background-color: rgb(255, 255, 255, 0.2);
}

.parallax__nav > ul > li > *.active {
  background-color: rgb(255, 255, 255, 1);
  color: #000;
}

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
