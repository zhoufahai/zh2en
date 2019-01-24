import Vue from 'vue'
import VueI18n from 'vue-i18n'
import messages from './langs/index'

Vue.use(VueI18n)
/**
 * 从localStorage中拿到用户的语言选择，如果没有，那么默认为中文
 */
const i18n = new VueI18n({
  locale: localStorage.lang || 'zh',
  messages
})

export default i18n
