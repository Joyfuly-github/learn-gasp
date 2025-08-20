<script setup>
import LogoGasp from '@/assets/css/icons/LogoGasp.vue'
import gsap from 'gsap'

import { computed, onMounted, ref } from 'vue'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const headerRef = ref()

const stepCount = 15
const steps = computed(() => Array.from({ length: stepCount }, (_, i) => i + 1))

onMounted(() => {
  const showHeader = gsap
    .from(headerRef.value, {
      yPercent: -100,
      duration: 0.5,
    })
    .progress(1)

  ScrollTrigger.create({
    trigger: 'body',
    start: 'top top',
    onUpdate: (self) => {
      self.direction === -1 ? showHeader.play() : showHeader.reverse()
    },
  })
})
</script>

<template>
  <header ref="headerRef">
    <h1>
      <small>Learn</small>
      <LogoGasp :width="50"></LogoGasp>
    </h1>

    <nav>
      <ul>
        <li v-for="(step, index) in steps" :key="index">
          <RouterLink :to="`/${step}`" class="btn" activeClass="active">{{ step }}</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
