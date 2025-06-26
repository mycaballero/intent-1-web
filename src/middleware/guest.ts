import type { MiddlewareContext } from './MiddlewareContext'
import type { Middleware } from '@/middleware/Middleware.ts'

const guest: Middleware = (context: MiddlewareContext) => {
    const { next, store } = context
    if (store.isAuthenticated) {
        return next({ name: 'home' })
    }
    return next()
}

export default guest

