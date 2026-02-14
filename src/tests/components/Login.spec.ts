import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import { createRouter, createMemoryHistory } from 'vue-router'
import { createPinia } from 'pinia'
import { i18n } from '@/plugins/i18n'
import Login from '@/components/public/auth/Login.vue'

const router = createRouter({
    history: createMemoryHistory(),
    routes: [
        { path: '/', name: 'home', component: { template: '<div>Home</div>' } },
        { path: '/forgot-password', name: 'forgot-password', component: { template: '<div>Forgot</div>' } },
        { path: '/register', name: 'register', component: { template: '<div>Register</div>' } },
    ],
})

function renderLogin() {
    return render(Login, {
        global: {
            plugins: [router, createPinia(), i18n],
        },
    })
}

describe('Login', () => {
    it('muestra el título de bienvenida', () => {
        renderLogin()
        const titles = screen.getAllByTestId('login-welcome')
        expect(titles.length).toBeGreaterThan(0)
        expect(titles[0]).toBeTruthy()
    })

    it('muestra el enlace a recuperar contraseña', () => {
        renderLogin()
        const links = screen.getAllByTestId('login-forgot-password-link')
        expect(links.length).toBeGreaterThan(0)
        expect(links[0]).toBeTruthy()
    })

    it('muestra el botón de iniciar sesión', () => {
        renderLogin()
        const submitSections = screen.getAllByTestId('login-submit')
        expect(submitSections.length).toBeGreaterThan(0)
        const first = submitSections[0]
        expect(first.querySelector('button[type="submit"]')).toBeTruthy()
    })
})
