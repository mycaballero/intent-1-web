import type { NavigationGuardNext } from 'vue-router'

interface Store {
    isAuthenticated: boolean
}

export default ({ next, store }: { next: NavigationGuardNext, store: Store }) => {
    if (!store.isAuthenticated) {
        return next({
            name: 'login'
        })
    }
    return next()
}