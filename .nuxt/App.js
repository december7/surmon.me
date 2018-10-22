import Vue from 'vue'
import NuxtLoading from './components/nuxt-loading.vue'

import '../node_modules/swiper/dist/css/swiper.css'

import '../node_modules/highlight.js/styles/ocean.css'

import '../assets/sass/app.scss'


import _6f6c098b from '../layouts/default.vue'
import _77430317 from '../layouts/empty.vue'

const layouts = { "_default": _6f6c098b,"_empty": _77430317 }



export default {
  head: {"title":"Surmon.me - 欢喜勇猛，向死而生","titleTemplate":"%s | Surmon.me","htmlAttrs":{"xmlns":"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxhtml","lang":"zh"},"meta":[{"charset":"utf-8"},{"http-equiv":"cleartype","content":"on"},{"name":"author","content":"surmon@foxmail.com"},{"name":"MobileOptimized","content":"320"},{"name":"HandheldFriendly","content":"True"},{"name":"apple-mobile-web-app-capable","content":"yes"},{"name":"apple-mobile-web-app-status-bar-style","content":"black"},{"name":"apple-mobile-web-app-title","content":"Surmon.me"},{"name":"apple-touch-icon","content":"\u002Fstatic\u002Ficon.png"},{"name":"msapplication-TileImage","content":"\u002Fstatic\u002Ficon.png"},{"name":"msapplication-TileColor","content":"#0088f5"},{"name":"format-detection","content":"telephone=no"},{"name":"viewport","content":"width=device-width, initial-scale=1.0, user-scalable=no"},{"hid":"keywords","name":"keywords","content":"Surmon,马赐崇,司马萌,Vue开发者,前端技术开发,javascript技术"},{"hid":"description","name":"description","content":"凡心所向，素履所往，生如逆旅，一苇以航"},{"hid":"mobile-web-app-capable","name":"mobile-web-app-capable","content":"yes"},{"hid":"theme-color","name":"theme-color","content":"#0088f5"},{"hid":"og:type","name":"og:type","property":"og:type","content":"website"},{"hid":"og:title","name":"og:title","property":"og:title","content":"Surmon.me"},{"hid":"og:site_name","name":"og:site_name","property":"og:site_name","content":"Surmon.me"},{"hid":"og:description","name":"og:description","property":"og:description","content":"欢喜勇猛，向死而生"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"author","type":"text\u002Fplain","href":"\u002Fhumans.txt"},{"rel":"manifest","href":"https:\u002F\u002Fcdn.surmon.me\u002F_nuxt\u002Fmanifest.7641c9c8.json"}],"noscript":[{"innerHTML":"This website requires JavaScript."}],"style":[],"script":[]},
  render(h, props) {
    const loadingEl = h('nuxt-loading', { ref: 'loading' })
    const layoutEl = h(this.layout || 'nuxt')
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [ layoutEl ])

    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      }
    }, [ templateEl ])

    return h('div',{
      domProps: {
        id: '__nuxt'
      }
    }, [
      loadingEl,
      transitionEl
    ])
  },
  data: () => ({
    layout: null,
    layoutName: ''
  }),
  beforeCreate () {
    Vue.util.defineReactive(this, 'nuxt', this.$options.nuxt)
  },
  created () {
    // Add this.$nuxt in child instances
    Vue.prototype.$nuxt = this
    // add to window so we can listen when ready
    if (typeof window !== 'undefined') {
      window.$nuxt = this
      
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error
  },
  
  mounted () {
    this.$loading = this.$refs.loading
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },
  
  methods: {
    
    errorChanged () {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) this.$loading.fail()
        if (this.$loading.finish) this.$loading.finish()
      }
    },
    
    
    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      this.layoutName = layout
      this.layout = layouts['_' + layout]
      return this.layout
    },
    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      return Promise.resolve(layouts['_' + layout])
    }
    
  },
  components: {
    NuxtLoading
  }
}
