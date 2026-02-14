import { createFetch } from '@vueuse/core'

const handleErrors = async (status: number | undefined, store: any, router: any): Promise<void> => {
    switch (status) {
        case 401:
            store.logout()
            await router.push({ name: 'login' })
            break
    }
}

const API_BASE = import.meta.env.VITE_API_URL || import.meta.env.API_URL || 'http://localhost:8000'

export default {
    install: (app: any, params: any): void => {
        const useDefaultCreateFetch = createFetch({
            baseUrl: `${API_BASE}/api`,
            options: {
                async beforeFetch({ options }) {
                    if (!options.headers) options.headers = {}
                    // @ts-ignore
                    options.headers.Authorization = `Bearer ${params.authStore.tk}`
                    // @ts-ignore
                    options.headers.Accept = 'application/json'
                    return { options }
                },
                async onFetchError(ctx) {
                    await handleErrors(ctx.response?.status, params.authStore, params.router)
                    return ctx
                }
            },
            fetchOptions: {
                mode: 'cors',
            },
        })
        app.provide('useFetchDefault', useDefaultCreateFetch)
    }
}