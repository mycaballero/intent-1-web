import { configure } from 'vee-validate'

export const setupVeeValidateI18n = () => {
    configure({
        generateMessage: ({ field, value, rule }, values) => {
            const { key, values: params } = typeof values === 'object' ? values : { key: values, values: {} }

            return i18n.global.t(key, { field, ...params })
        },
        validateOnInput: true,
    })
}
