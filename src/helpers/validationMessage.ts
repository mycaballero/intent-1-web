import { i18n } from '@/plugins/i18n'

export function makeMessage(
    key: string,
    fieldKey: string,
    values?: Record<string, any>
) {
    return {
        key,
        values: {
            field: i18n.global.t(`fields.${fieldKey}`),
            ...values,
        },
    }
}
