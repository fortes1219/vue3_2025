import '@/styles/style.scss'
import 'element-plus/dist/index.css'
import 'virtual:svg-icons-register'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { customDirectives } from '@/directives'
// import SvgIcon from '@/components/SvgIcon.vue';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(customDirectives)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// 全局註冊 SvgIcon 組件，給自定義 icon 使用
// app.component('SvgIcon', SvgIcon);

app.mount('#app')