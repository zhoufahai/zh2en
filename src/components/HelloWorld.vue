<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ $t('message.100001') }}</h2>
    <h2>{{ $t('message.100001') }}</h2>
    <h2>{{ $t('message.100002') }}</h2>
    <h2>{{ $t('message.100003') }}</h2>
    <button @click="changeLanguage('zh')">中文</button>
    <button @click="changeLanguage('en')">English</button>
    <button @click="open">弹出框</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    changeLanguage (lang) {
      if (lang === 'zh') {
        this.$i18n.locale = 'zh'
      } else {
        this.$i18n.locale = 'en'
      }
      localStorage.setItem('lang', lang)// 存到localStorage中
    },
    open () {
      alert(this.$t('message.100001'))
    }
  }
}
</script>

<style scoped>
</style>
