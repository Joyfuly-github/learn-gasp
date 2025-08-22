<script setup>
import ModalCode from '@/components/modal/ModalCode.vue'

import { computed, ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const props = defineProps({
  activeIndex: {
    type: Number,
    required: true,
  },
  steps: {
    type: Array,
    required: true,
  },
})

const activeIndex = computed(() => props.activeIndex)

const modalCodeShow = ref(false)
const modalCodeClose = () => {
  modalCodeShow.value = false
}

const title = computed(
  () =>
    String(activeIndex.value + 1).padStart(2, '0') + '. ' + props.steps[activeIndex.value].title,
)
</script>

<template>
  <aside>
    <button type="button" class="btn btn__code" @click="modalCodeShow = true" title="코드보기">
      <span class="number">{{ title }}</span>
      <FontAwesomeIcon :icon="['fas', 'code']"></FontAwesomeIcon>
    </button>
  </aside>

  <ModalCode
    v-model="modalCodeShow"
    @close="() => modalCodeClose()"
    :title="title"
    :code="steps[activeIndex].code"
    :content="steps[activeIndex].content"
  ></ModalCode>
</template>
