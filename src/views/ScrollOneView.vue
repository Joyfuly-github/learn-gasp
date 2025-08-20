<script setup>
import gsap from 'gsap'
import { onMounted } from 'vue'

onMounted(() => {
  gsap.to(document.querySelector('.parallax__item__img'), {
    x: 200,
    duration: 1,
    borderRadius: 100,
    rotation: 360,
  })
})
</script>

<template>
  <main id="parallax__cont">
    <section class="parallax__item">
      <div class="parallax__item__img">
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
            fill="#f2a30f"
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
</template>
