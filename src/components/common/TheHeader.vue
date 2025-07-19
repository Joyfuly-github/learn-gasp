<script setup>
import { computed } from 'vue'

const stepCount = 6

const steps = computed(() => Array.from({ length: stepCount }, (_, i) => i + 1))
</script>

<template>
  <header>
    <h1>GSAP Parallax Effect</h1>

    <nav>
      <ul>
        <li v-for="(step, index) in steps" :key="index">
          <RouterLink :to="`/${step}`" activeClass="active">{{ step }}</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped src="@css/header.css"></style>
