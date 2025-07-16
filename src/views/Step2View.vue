<script setup>
import gsap from 'gsap'

import { onMounted, ref } from 'vue'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const items = Array.from({ length: 9 }, (_, i) => i + 1)
const sectionRefs = ref([])

onMounted(() => {
  // pin : 화면을 고정시키고 animation을 줌

  // 01 : 이미지 애니메이션
  const ani1 = gsap.timeline()
  ani1
    .to(sectionRefs.value[0].querySelectorAll('.parallax__item__img'), {
      rotation: 720,
      scale: 0,
      borderRadius: 200,
    })
    .to(sectionRefs.value[0].querySelectorAll('.parallax__item__img'), {
      rotation: 0,
      scale: 1,
      borderRadius: 0,
    })

  ScrollTrigger.create({
    animation: ani1,
    trigger: sectionRefs.value[0],
    start: 'top top',
    end: '+=1000',
    scrub: true,
    pin: true,
    // pin 효과를 자연스럽게 연출하기 위한 효과
    anticipatePin: 1,
    // markers: true,
  })

  // 02 : 이미지 순차적으로 노출
  const ani2 = gsap.timeline()
  ani2
    .from(sectionRefs.value[1].querySelectorAll('.parallax__item__img')[0], {
      y: -100,
      opacity: 0,
      borderRadius: 200,
    })
    .from(sectionRefs.value[1].querySelectorAll('.parallax__item__img')[1], {
      y: 100,
      opacity: 0,
      borderRadius: 200,
    })
    .from(sectionRefs.value[1].querySelectorAll('.parallax__item__img')[2], {
      y: -100,
      opacity: 0,
      borderRadius: 200,
    })

  ScrollTrigger.create({
    animation: ani2,
    trigger: sectionRefs.value[1],
    start: 'top top',
    end: '+=1000',
    scrub: true,
    pin: true,
    anticipatePin: 1,
    // markers: true,
  })

  // 03 : 이미지 랜덤으로 노출
  const ani3 = gsap.timeline()
  ani3.from(sectionRefs.value[2].querySelectorAll('.parallax__item__img'), {
    opacity: 0,
    y: -100,
    ease: 'back.out(4)',
    // 자식요소 순서대로 값이 달라짐
    // stagger: 0.1,

    // 자식요소 랜덤으로 노출
    stagger: {
      amount: 3,
      // center, left
      from: 'random',
    },
  })

  ScrollTrigger.create({
    animation: ani3,
    trigger: sectionRefs.value[2],
    start: 'top top',
    end: '+=2000',
    scrub: true,
    pin: true,
    anticipatePin: 1,
    // markers: true,
  })

  // 04 : 이미지 축소
  const ani4 = gsap.timeline()
  ani4.from(
    sectionRefs.value[3].querySelectorAll('.parallax__item__img'),
    {
      opacity: 0,
      scale: 5,
      width: '100vw',
      height: '100vh',
    },
    '-=0.1',
  )

  ScrollTrigger.create({
    animation: ani4,
    trigger: sectionRefs.value[3],
    start: 'top top',
    end: '+=1000',
    scrub: true,
    pin: true,
    anticipatePin: 1,
    // markers: true,
  })

  // 05 : 텍스트 애니메이션
  const ani5 = gsap.timeline()
  ani5
    // 임의에 문자열을 지정하면 동시에 움직임
    // .to(sectionRefs.value[4].querySelectorAll('.parallax__item__text')[0], { xPercent: 300 }, '문자열')

    // 이전 애니메이션이 끝나기 전에 실행하고 싶으면
    // .to(sectionRefs.value[4].querySelectorAll('.parallax__item__text')[0], { xPercent: 300 }, '-=1')
    .to(
      sectionRefs.value[4].querySelectorAll('.parallax__item__text')[0],
      { xPercent: 300 },
      'text',
    )
    .to(
      sectionRefs.value[4].querySelectorAll('.parallax__item__text')[1],
      { xPercent: -300 },
      'text',
    )
    .to(
      sectionRefs.value[4].querySelectorAll('.parallax__item__text')[2],
      { xPercent: 300 },
      'text',
    )
    .to(
      sectionRefs.value[4].querySelectorAll('.parallax__item__text')[3],
      { xPercent: -300 },
      'text',
    )

  ScrollTrigger.create({
    animation: ani5,
    trigger: sectionRefs.value[4],
    start: 'top top',
    end: '+=1000',
    scrub: true,
    pin: true,
    anticipatePin: 1,
    // markers: true,
  })

  // 06 : 텍스트 확대하기
  const ani6 = gsap.timeline()
  ani6
    .to(sectionRefs.value[5].querySelectorAll('.parallax__item__text'), {
      scale: 60,
      rotation: 360,
      duration: 2,
    })
    .to(sectionRefs.value[5].querySelectorAll('.parallax__item__text'), {
      opacity: 0,
    })

  ScrollTrigger.create({
    animation: ani6,
    trigger: sectionRefs.value[5],
    start: 'top top',
    end: '+=4000',
    scrub: true,
    pin: true,
    anticipatePin: 1,
    // markers: true,
  })

  // 07 : 텍스트 제자리 애니메이션
  const ani7 = gsap.timeline()
  ani7
    .from(
      sectionRefs.value[6].querySelectorAll('.parallax__item__text')[0],
      {
        opacity: 0,
        duration: 1,
        y: 50,
      },
      '+=1',
    )
    .from(
      sectionRefs.value[6].querySelectorAll('.parallax__item__text')[1],
      {
        opacity: 0,
        duration: 1,
        y: 50,
      },
      '+=1',
    )
    .from(
      sectionRefs.value[6].querySelectorAll('.parallax__item__text')[2],
      {
        opacity: 0,
        duration: 1,
        y: 50,
      },
      '+=1',
    )
    .from(
      sectionRefs.value[6].querySelectorAll('.parallax__item__text')[3],
      {
        opacity: 0,
        duration: 1,
        y: 50,
      },
      '+=1',
    )
    .from(
      sectionRefs.value[6].querySelectorAll('.parallax__item__text')[4],
      {
        opacity: 0,
        duration: 1,
        y: 50,
      },
      '+=1',
    )
    .from(
      sectionRefs.value[6].querySelectorAll('.parallax__item__text')[5],
      {
        opacity: 0,
        duration: 1,
        y: 50,
      },
      '+=1',
    )
    .from(
      sectionRefs.value[6].querySelectorAll('.parallax__item__text')[6],
      {
        opacity: 0,
        duration: 1,
        y: 50,
      },
      '+=1',
    )

  ScrollTrigger.create({
    animation: ani7,
    trigger: sectionRefs.value[6],
    start: 'top top',
    end: '+=3000',
    scrub: true,
    pin: true,
    anticipatePin: 1,
    // markers: true,
  })

  // 08 : 텍스트 애니메이션
  const ani8 = gsap.timeline()
  ani8
    .from(sectionRefs.value[7].querySelectorAll('.parallax__item__text')[0], {
      x: innerWidth * 1,
    })
    .from(sectionRefs.value[7].querySelectorAll('.parallax__item__text')[1], {
      x: innerWidth * -1,
    })
    .from(sectionRefs.value[7].querySelectorAll('.parallax__item__text')[2], {
      x: innerWidth * 1,
    })
    .from(sectionRefs.value[7].querySelectorAll('.parallax__item__img'), {
      opacity: 0,
      rotation: 360,
      scale: 5,
      duration: 3,
    })

  ScrollTrigger.create({
    animation: ani8,
    trigger: sectionRefs.value[7],
    start: 'top top',
    end: '+=3000',
    scrub: true,
    pin: true,
    anticipatePin: 1,
    // markers: true,
  })

  // 09 : 이미지 확대하기
  const ani9 = gsap.timeline()
  ani9
    .to(sectionRefs.value[8].querySelectorAll('.parallax__item__img')[0], {
      scale: 13,
    })
    .to(sectionRefs.value[8].querySelectorAll('.parallax__item__img')[0], {
      opacity: 0,
    })

  ScrollTrigger.create({
    animation: ani9,
    trigger: sectionRefs.value[8],
    start: 'top top',
    end: '+=1000',
    scrub: true,
    pin: true,
    anticipatePin: 1,
    // markers: true,
  })
})
</script>

<template>
  <main id="parallax__cont">
    <section
      v-for="(item, index) in items"
      :key="index"
      :data-index="index + 1"
      class="parallax__item"
      :ref="(el) => (sectionRefs[index] = el)"
    >
      <span class="parallax__item__num">0{{ item }}</span>

      <template v-if="index === 1">
        <div class="parallax__item__img i1"></div>
        <div class="parallax__item__img i2"></div>
        <div class="parallax__item__img i3"></div>
      </template>

      <template v-else-if="index === 2">
        <div class="parallax__item__img"></div>
        <div class="parallax__item__img"></div>
        <div class="parallax__item__img"></div>
        <div class="parallax__item__img"></div>
        <div class="parallax__item__img"></div>
        <div class="parallax__item__img"></div>
      </template>

      <template v-else-if="index === 4">
        <div class="parallax__item__text t1">section5</div>
        <div class="parallax__item__text t2">section5</div>
        <div class="parallax__item__text t3">section5</div>
        <div class="parallax__item__text t4">section5</div>
      </template>

      <template v-else-if="index === 5">
        <div class="parallax__item__text">section6</div>
      </template>

      <template v-else-if="index === 6">
        <div class="parallax__item__text t1">코딩이란</div>
        <div class="parallax__item__text t2">프로그래밍 코드를</div>
        <div class="parallax__item__text t3">어딘가에</div>
        <div class="parallax__item__text t4">적는 것을 말한다</div>
        <div class="parallax__item__text t5">코딩은</div>
        <div class="parallax__item__text t6">누구나</div>
        <div class="parallax__item__text t7">할 수 있다.</div>
      </template>

      <template v-else-if="index === 7">
        <div class="parallax__item__text t1">section8 title1</div>
        <div class="parallax__item__text t2">section8 title2</div>
        <div class="parallax__item__text t3">section8 title3</div>
        <div class="parallax__item__img i1"></div>
      </template>

      <template v-else>
        <div class="parallax__item__img"></div>
      </template>
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
  overflow: hidden;
}
.parallax__item[data-index='2'],
.parallax__item[data-index='4'],
.parallax__item[data-index='6'],
.parallax__item[data-index='8'] {
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
.parallax__item[data-index='1'] .parallax__item__img {
  background-image: url(/images/images14.jpg);
}
.parallax__item[data-index='2'] .parallax__item__img {
  background-image: url(/images/images15.jpg);
}
.parallax__item[data-index='3'] .parallax__item__img {
  background-image: url(/images/images03.jpg);
}
.parallax__item[data-index='4'] .parallax__item__img {
  background-image: url(/images/images04.jpg);
}
.parallax__item[data-index='5'] .parallax__item__img {
  background-image: url(/images/images05.jpg);
}
.parallax__item[data-index='6'] .parallax__item__img {
  background-image: url(/images/images06.jpg);
}
.parallax__item[data-index='7'] .parallax__item__img {
  background-image: url(/images/images07.jpg);
}
.parallax__item[data-index='8'] .parallax__item__img {
  background-image: url(/images/images08.jpg);
}
.parallax__item[data-index='9'] .parallax__item__img {
  background-image: url(/images/images09.jpg);
}

/* option */
.parallax__item[data-index='3'] .parallax__item__img {
  width: 100px;
  height: 100px;
  border-radius: 50px;
}
.parallax__item[data-index='5'] {
  flex-direction: column;
}
.parallax__item[data-index='5'] .parallax__item__text,
.parallax__item[data-index='6'] .parallax__item__text {
  font-size: 5vw;
  text-transform: uppercase;
  font-weight: bold;
}
.parallax__item[data-index='7'] .parallax__item__text {
  font-size: 5vw;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #000;
  padding: 30px;
  width: 100%;
  text-align: center;
}
.parallax__item[data-index='8'] {
  flex-direction: column;
}
.parallax__item[data-index='8'] .parallax__item__text {
  font-size: 2vw;
  line-height: 1.5;
  text-transform: uppercase;
}
.parallax__item[data-index='8'] .parallax__item__img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
.parallax__item[data-index='9'] .parallax__item__img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
}
</style>
