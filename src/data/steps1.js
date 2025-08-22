export const steps = [
  {
    title: 'GSAP 기본 애니메이션',
    code: `gsap.to(imagesRefs.value[0] // 적용할 요소, {
  // x로부터 200이동
  x: 200,
  // animaiton 재생시간
  duration: 1,
  // 360도 회전시키기
  rotation: 360,
})`,
  },
  {
    title: 'Scroll Trigger',
    code: `gsap.to(imagesRefs.value[1], {
  x: 200,
  duration: 1,
  borderRadius: 100,
  rotation: 360,
  scrollTrigger: {
    trigger: imagesRefs.value[1],
  },
})`,
    content: `ScrollTrigger는 웹 페이지 스크롤 동작에 따라 애니메이션을 제어할 수 있게 해주는 GSAP 플러그인 입니다.`,
  },
  {
    title: 'Toggle Action',
    code: `
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
    `,
    content: `toggleAction 주로 4가지 스크롤 이벤트를 기준으로 동작합니다.
  ㆍ onEnter: 요소가 스크롤 영역에 진입할 때
  ㆍ onLeave : 요소가 스크롤 영역을 벗어날 때
  ㆍ onEnterBack : 스크롤이 다시 돌아와서 요소가 스크롤 영역에 진입할 때
  ㆍ onLeaveBack : 스크롤이 다시 돌아와서 요소가 스크롤 영역을 벗어날 때


  스크롤 이벤트에 대해 다음과 같은 동작을 설정할 수 있습니다.
  ㆍ play : 애니메이션 재생
  ㆍ pause : 애니메이션 일시정지
  ㆍ resume : 일시정지된 애니메이션을 재개
  ㆍ reset : 애니메이션을 초기 상태로 되돌림
  ㆍ restart : 애니메이션을 처음부터 다시 시작
  ㆍ complate : 애니메이션을 완료 상태로 즉시 이동
  ㆍ reverse : 애니메이션 되감기
  ㆍ none : 아무 동작도 수행하지 않음
    `,
  },
  {
    title: 'start와 end 속성',
    code: `gsap.to(imagesRefs.value[3], {
  x: 200,
  duration: 1,
  borderRadius: 100,
  rotation: 360,
  scrollTrigger: {
    trigger: imagesRefs.value[3],
    toggleActions: 'play pause reverse resume',
    start: 'top 50%',
    end: 'bottom 20%',
    // markers: true,
  },
})`,
    content: `start와 end속성은 스크롤 시 애니메이션의 시작 및 종료 시점을 정의합니다.
키워드(top, center, bottom), 뷰포트 비율, 픽셀값, 동적 계산 함수 등 다양한 값으로 정의할 수 있습니다.

start: 'top 50%',
→ 트리거 요소의 상단이 뷰포트 50% 지점에 닿으면 애니메이션이 시작

end: 'bottom 20%'
→ 트리거 요소의 하단이 뷰포트 하단 20%지점을 넘어가면 애니메이션 종료

markers: true
→ 위에 정의된 뷰포트 start, end 기준점을 화면에 표시
`,
  },
  {
    title: 'scrub',
    code: `gsap.to(imagesRefs.value[4], {
  x: 200,
  duration: 1,
  borderRadius: 100,
  rotation: 360,
  scrollTrigger: {
    trigger: imagesRefs.value[4],
    start: 'top: 50%',
    end: 'bottom: 20%',
    scrub: 0.5,
  },
})`,
    content: `scrub 속성은 스크롤과 애니메이션 재생을 연결하여, 스크롤이 움직이는 방향에 따라 애니메이션이 실시간으로 부드럽게 진행되거나 되돌아가도록 만드는 기능입니다.
Boolean 또는 숫자 값을 할당할 수 있으며, 숫자는 애니메이션의 부드러운 전환을 위한 시간(초)를 의미합니다.`,
  },
  {
    title: 'pin',
    code: ` gsap.to(sectionRefs.value[5], {
  duration: 1,
  scrollTrigger: {
    trigger: imagesRefs.value[5],
    start: 'top 50%',
    end: 'bottom 200px',
    scrub: 0.5,
    pin: true,
  },
})`,
    content: `pin 속성은 scrollTrigger를 사용하여 스크롤 하는 동안 특정 요소를 뷰포트에 고정시키는 기능을 의미합니다.
pinSpacing: true로 설정하면, 핀이 고정된 시간동안 그 요소가 차지했던 공간을 자동으로 추가하여, 다음 요소가 고정된 요소에 의해 가려지거나 겹치지 않게 합니다.  `,
  },
  {
    title: 'toggleClass',
    code: `
<script>
gsap.to(imagesRefs.value[6], {
  x: 200,
  duration: 1,
  borderRadius: 100,
  rotation: 360,
  scrollTrigger: {
    trigger: imagesRefs.value[6],
    start: 'top center',
    end: 'bottom top',
    scrub: 1,
    toggleClass: 'active',
  },
})
</script>

<style>
.parallax__item__img.active {
  filter: hue-rotate(100deg);
}
</style>
    `,
    content: `toggleClass는 스크롤 이벤트가 발생할 때 지정된 요소에 특정 class를 추가, 제거하여 애니메이션을 적용하는 옵션입니다.`,
  },
  {
    title: 'callBack',
    code: `gsap.to(imagesRefs.value[7], {
  x: 200,
  duration: 1,
  borderRadius: 100,
  rotation: 360,

  scrollTrigger: {
    trigger: imagesRefs.value[7],
    start: 'top center',
    end: 'bottom 20%',
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
})`,
    content: `callBack은 scrollTrigger 옵션 내에서 정의되는 함수들로 요소가 스크롤 될 때 특정 이벤트가 발생할 때마다 실행되는 함수들을 말합니다.
  ㆍ onEnter: 요소가 뷰포트에 진입할 때
  ㆍ onLeave : 요소가 뷰포트를 벗어날 때
  ㆍ onEnterBack : 스크롤이 위로 올라가 요소가 뷰포트에 다시 진입할 때
  ㆍ onLeaveBack : 스크롤이 위로 올라가 요소가 뷰포트에서 이탈할 때
  ㆍ onUpdate : 스크롤 위치가 변경될 때마다 실행
  ㆍ onToggle : 트리거의 활성 상태가 변경될 때마다 실행`,
  },
]
