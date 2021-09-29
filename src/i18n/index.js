import en from './lang/en.json'
import bn from './lang/bn.json'

import { createI18n } from 'vue-i18n'

export default createI18n({
    locale: localStorage.getItem('lang') || en,
    messages: {
        en: en,
        bn: bn
    }
})