<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { VCodeBlock } from '@wdns/vue-code-block'
import { VueFinalModal } from 'vue-final-modal'

const emit = defineEmits(['close'])

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  content: {
    type: String,
  },
})
</script>

<template>
  <VueFinalModal
    class="modal__container"
    content-class="modal__layout"
    overlay-class="modal__backdrop"
    content-transition="ani__modal"
    overlay-transition="ani__backdrop"
    :click-to-close="true"
    :lock-scroll="false"
    :reserve-scroll-bar-gap="false"
  >
    <!-- :hide-overlay="true" -->
    <div class="layout__head">
      <h4 class="title">{{ props.title }}</h4>

      <button type="button" @click="emit('close')">
        <FontAwesomeIcon :icon="['fas', 'xmark']"></FontAwesomeIcon>
      </button>
    </div>

    <div class="layout__body">
      <div v-if="props.content" class="content">{{ props.content }}</div>

      <VCodeBlock :code="props.code" lang="javascript"></VCodeBlock>
    </div>
  </VueFinalModal>
</template>

<style>
.v-code-block pre code {
  white-space: pre-wrap !important;
  word-break: break-word;
  overflow-x: hidden !important;
}
</style>
