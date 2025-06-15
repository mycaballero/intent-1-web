import {createRouter, createWebHistory} from 'vue-router'
import guest from '@/middleware/guest'
import middlewarePipeline from '@/middleware/middlewarePipeline'
import {useAuthStore} from '@/store/auth.store.ts'
import { i18n } from '@/plugins/i18n.ts'

const router= createRouter({
  history: createWebHistory(),
  routes: [
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
})

router.beforeEach(async (to, from, next): Promise<void> => {
  if (!to.meta.middleware) {
    return next()
  }
  const middleware = to.meta.middleware;
  const context = {
    to,
    from,
    next,
    store: useAuthStore()
  }

  document.title = to.meta.title ? `${ i18n.global.t(to.meta.title) }` : 'intent-1';

  return middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1)
  })
})

export default router
