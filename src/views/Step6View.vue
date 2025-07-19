<script setup>
// https://www.npmjs.com/package/split-type
// $ npm i split-type

import gsap from 'gsap'
import SplitType from 'split-type'

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

const descRefs = ref([])

onMounted(() => {
  // 01 텍스트 분리하기
  // let text = document.querySelector('.parallax__item__desc')
  // let splitText = text.innerText
  // // 문자
  // let splitWrap = splitText.split('').join('</span><span>')
  // // 단어
  // let splitWrap = splitText.split(' ').join('')
  // text.innerHTML = splitWrap = '<span>' + splitWrap + '</span>'

  // 02 모든 텍스트 분리하기(javascript)
  // descRefs.value.forEach((el) => {
  //   // 02-1 javascript로 텍스트 분리
  //   let splitWrap = el.innerText.split('').join('</span><span aria-hidden="true">')
  //   el.innerHTML = '<span aria-hidden="true">' + splitWrap + '</span>'

  //   // 스크린 리더용
  //   el.setAttribute('aira-label', el.innerText)
  // })

  // 03 모든 텍스트 분리(javascript) : 여백까지
  // descRefs.value.forEach((el) => {
  //   el.setAttribute('aria-label', el.innerText)

  //   let newText = ''

  //   for (let i = 0; i < el.innerText.length; i++) {
  //     newText += '<span aria-hidden="true">'

  //     if (el.innerText[i] === ' ') newText += '&nbsp;'
  //     else newText += el.innerText[i]

  //     newText += '</span>'
  //   }

  //   el.innerHTML = newText
  // })

  // 04 SplitType으로 텍스트 분리
  descRefs.value.forEach((el) => {
    const split = new SplitType(el, {
      // lines, words, chars : 줄, 단어, 문자
      types: ['lines', 'words', 'chars'],
      tagName: 'span',
    })

    split.chars.forEach((char) => {
      char.setAttribute('aria-hidden', true)
    })

    gsap.from(split.words, {
      yPercent: 100,
      opacity: 0,
      duration: 0.5,
      ease: 'back.out(1)',
      stagger: {
        amount: 1,
        from: 'random',
      },
      scrollTrigger: {
        trigger: split.words,
        start: 'top bottom',
        end: '+=400',
      },
    })

    // 스크린 리더용
    el.setAttribute('aira-label', el.innerText)
  })
})
</script>

<template>
  <main id="parallax__cont">
    <section v-for="(section, index) in sections" :key="index" class="parallax__item">
      <span class="parallax__item__num">0{{ index + 1 }}</span>
      <h2 class="parallax__item__title">section{{ index + 1 }}</h2>
      <figure class="parallax__item__imgWrap">
        <div
          class="parallax__item__img"
          :style="`background-image: url(/images/images0${index + 1}@2.jpg)`"
        ></div>
      </figure>
      <p class="parallax__item__desc" :ref="(el) => (descRefs[index] = el)">{{ section.desc }}</p>
    </section>
  </main>
</template>

<style scoped>
/* parallax__cont */
#parallax__cont {
  max-width: 1600px;
  width: 98%;
  margin: 0 auto;
  /* background-color: rgba(255,255,255,0.1); */
}
.parallax__item {
  width: 1000px;
  max-width: 70vw;
  margin: 30vw auto;
  /* background-color: rgba(255,255,255,0.3); */
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
<style>
.sr-only {
  position: absolute !important;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
  border: 0;
}
</style>
