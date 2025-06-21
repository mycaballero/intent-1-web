import { describe, it, expect } from 'vitest'
import { render, fireEvent } from '@testing-library/vue'
import BaseTextInput from '@/components/global/inputs/BaseTextInput.vue'

describe('BaseTextInput - password visibility', () => {
    it('debe alternar la visibilidad de la contraseña', async () => {
        const { container, getByRole } = render(BaseTextInput, {
            props: {
                type: 'password',
                name: 'password',
                icon: 'ic:outline-lock',
            },
        })

        const input = container.querySelector('input[name="password"]') as HTMLInputElement
        const toggleButton = getByRole('button')

        expect(input.type).toBe('password')

        await fireEvent.click(toggleButton)
        expect(input.type).toBe('text')

        await fireEvent.click(toggleButton)
        expect(input.type).toBe('password')
    })
})