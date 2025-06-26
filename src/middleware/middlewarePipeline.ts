import type { MiddlewareContext } from './MiddlewareContext'
import type { Middleware } from './Middleware'

function middlewarePipeline(
    context: MiddlewareContext,
    middleware: Middleware[],
    index: number
) {
    const nextMiddleware: Middleware | undefined = middleware[index]

    if (!nextMiddleware) {
        return context.next
    }

    return () => {
        const nextPipeline = middlewarePipeline(
            context,
            middleware,
            index + 1
        )
        nextMiddleware({ ...context, next: nextPipeline })
    }
}
export default middlewarePipeline