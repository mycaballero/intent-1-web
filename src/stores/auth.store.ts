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
        setToken(token: string | null): void {
            if (this.tk && typeof this.tk === 'object' && 'value' in this.tk) {
                ;(this.tk as Ref<string | null>).value = token
            } else {
                this.tk = token as any
            }
        },
        setUser(user: object | null): void {
            if (this.user && typeof this.user === 'object' && 'value' in this.user) {
                ;(this.user as Ref<object | null>).value = user
            } else {
                this.user = user as any
            }
        },
        logout() :void{
            this.setUser(null)
            this.setToken(null)
        }
    },
    getters: {
        token(state: object | any): string | null {
            const tk = state.tk
            return typeof tk === 'object' && tk && 'value' in tk ? tk.value : tk
        },
        isAuthenticated(): Boolean {
            return !!this.token?.length
        }
    }
});
