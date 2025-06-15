import type {MiddlewareContext} from "./MiddlewareContext.ts";

function middlewarePipeline (context: MiddlewareContext , middleware: [], index: number) {
    const nextMiddleware : any = middleware[index]

    if(!nextMiddleware){
        return context.next
    }

    return () => {
        const nextPipeline = middlewarePipeline(
            context, middleware, index + 1
        )
        nextMiddleware({ ...context, next: nextPipeline })
    }
}
export default middlewarePipeline