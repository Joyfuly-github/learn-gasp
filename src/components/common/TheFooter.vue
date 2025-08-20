<script setup>
import LogoGasp from '@/assets/css/icons/LogoGasp.vue'
import LogoVuejs from '@/assets/css/icons/LogoVuejs.vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>

<template>
  <footer>
    이 사이트는
    <a
      href="https://www.youtube.com/playlist?list=PL4UVBBIc6giL8-6jvrClimg0cFL-Muqiq"
      target="_blank"
      rel="noopener"
    >
      <FontAwesomeIcon :icon="['fab', 'youtube']" />
      webstoryboy의 GSAP2023 강의
    </a>
    를 참고하여 제작되었으며,<br />

    <LogoVuejs :width="15"></LogoVuejs> 와
    <LogoGasp :width="35" :iconColor="'#121212'"></LogoGasp> 를 활용해 구현한 학습 프로젝트입니다.
  </footer>
</template>
