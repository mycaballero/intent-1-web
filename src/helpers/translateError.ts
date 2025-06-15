import { i18n } from '@/plugins/i18n'

type ErrorMessage = string | { key: string; values: Record<string, any> }

export function translateError(message?: ErrorMessage): string {
    if (!message) return ''
    return typeof message === 'object'
        ? i18n.global.t(message.key, message.values)
        : i18n.global.t(message)
}
