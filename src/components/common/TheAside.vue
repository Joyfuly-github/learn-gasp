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
</script>

<template>
  <aside>
    <button type="button" class="btn btn__code" @click="modalCodeShow = true" title="코드보기">
      <FontAwesomeIcon :icon="['fas', 'code']"></FontAwesomeIcon>
      <span class="number">{{ activeIndex + 1 }}</span>
    </button>
  </aside>

  <ModalCode
    v-model="modalCodeShow"
    @close="() => modalCodeClose()"
    :title="String(activeIndex + 1).padStart(2, '0') + '. ' + steps[activeIndex].title"
    :code="steps[activeIndex].code"
    :content="steps[activeIndex].content"
  ></ModalCode>
</template>
