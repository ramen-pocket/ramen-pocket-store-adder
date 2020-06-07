import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import zhHant from 'vuetify/es5/locale/zh-Hant'

Vue.use(Vuetify)

export default new Vuetify({
  lang: {
    locales: { zhHant },
    current: 'zh-Hant'
  }
})
