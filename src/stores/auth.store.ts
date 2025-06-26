import { defineStore } from 'pinia'
import {useLocalStorage} from '@vueuse/core'
import type {Ref} from "vue"

export const useAuthStore = defineStore('users', {
    state: () : {
        tk: Omit<Ref<string | null>, "value"> & { value: string | null };
        user: Omit<Ref<{}>, "value"> & { value: {} }
    } => ({
        user: useLocalStorage('auth/user',{}),
        tk: useLocalStorage('auth/tk',null)
    }),
    actions: {
        setToken(token: number | null ): void {
            useLocalStorage('auth/tk',token)
            this.tk = token
        },
        setUser(user: object | null): void {
            useLocalStorage('auth/user',user)
            this.user = user
        },
        logout() :void{
            this.setUser(null)
            this.setToken(null)
        }
    },
    getters: {
        isAuthenticated(state: object | any ): Boolean {
            return !!state.tk?.length
        }
    }
});
