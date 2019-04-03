import { I18n } from 'react-i18nify'
import th from "./th.json"
import en from "./en.json"
import jp from "./jp.json"

I18n.setTranslations({
    th,
    en,
    jp,
})
I18n.setLocale('th')

export const locale = I18n