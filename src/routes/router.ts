import {createRouter, createWebHistory } from 'vue-router'
import guest from '@/middleware/guest'
import middlewarePipeline from '@/middleware/middlewarePipeline'
import {useAuthStore} from '@/store/auth.store.ts'
import { i18n } from '@/plugins/i18n.ts'
import type { NavigationGuardNext, RouteLocationNormalized, RouteRecordRaw } from 'vue-router'

interface MiddlewareContext {
  to: RouteLocationNormalized
  from: RouteLocationNormalized
  next: NavigationGuardNext
  store: ReturnType<typeof useAuthStore>
  router: typeof router
}

type Middleware = (context: MiddlewareContext) => void

declare module 'vue-router' {
  interface RouteMeta {
    middleware?: Middleware[]
    layout?: string
    title?: string
  }
}
const routes: RouteRecordRaw[] = [
  {
    name: 'login',
    path: '/login',
    component: () => import('@/components/public/auth/Login.vue'),
    meta: {
      middleware: [
        guest
      ],
      layout: 'GuestLayout',
      title: 'routes.login'
    }
  },
  {
    name: 'forgot_password',
    path: '/forgot-password',
    component: () => import('@/components/public/auth/ForgotPassword.vue'),
    meta: {
      middleware: [
        guest
      ],
      layout: 'GuestLayout',
      title: 'routes.forgot_password'
    }
  }
]

const router= createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  if (!to.meta.middleware) return next()
  const middleware = to.meta.middleware
  const context = {
    to,
    from,
    next,
    store: useAuthStore(),
    router
  }

  document.title = to.meta.title ? `${i18n.global.t(to.meta.title)}` : 'intent-1'
  return middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1)
  })
})

export default router
