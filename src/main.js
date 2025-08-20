import 'vue-final-modal/style.css'

import './assets/css/reset.css'
import './assets/css/basic.css'
import './assets/css/layout.css'
import './assets/css/modal.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVfm } from 'vue-final-modal'

import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'

import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { createVCodeBlock } from '@wdns/vue-code-block'

library.add(fas, far, fab)

const app = createApp(App)

app.use(createPinia())
app.use(router)

const vfm = createVfm()

const VCodeBlock = createVCodeBlock({
  theme: 'atom-one-dark',
  codeBlockRadius: '12px',
  highlightjs: true,
})

app.use(vfm).use(VCodeBlock).mount('#app')
