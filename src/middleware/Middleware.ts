import type { MiddlewareContext } from './MiddlewareContext'

export type Middleware = (context: MiddlewareContext) => void