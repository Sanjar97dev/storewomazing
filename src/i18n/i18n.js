import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import KG from './kyrgyz/kyrgyz.json'
import EN from './english/english.json'

const resources={
    en: {
        translation: EN,
    },
    kg: {
        translation: KG,
    }
}

await i18next.use(initReactI18next).init({
    resources,
    lng:"kg",
    fallback:"kg",
})

export default i18next;