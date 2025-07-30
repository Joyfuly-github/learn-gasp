<script setup>
import { computed } from 'vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const props = defineProps({
  activeIndex: {
    type: Number,
    required: true,
  },
})

const activeIndex = computed(() => props.activeIndex + 1)
</script>

<template>
  <aside>
    <button type="button" class="btn__code">
      <FontAwesomeIcon :icon="['fas', 'code']"></FontAwesomeIcon>
      <span class="number">{{ activeIndex }}</span>
    </button>
  </aside>
</template>

<style scoped src="@css/layout.css"></style>
