import { describe, it, expect } from 'vitest'
import { forgotPasswordSchema } from '@/validations/forgotPasswordSchema'

describe('forgotPasswordSchema', () => {
    it('valida email correcto', async () => {
        const result = await forgotPasswordSchema.validate({ email: 'user@test.com' })
        expect(result).toEqual({ email: 'user@test.com' })
    })

    it('rechaza email vacío', async () => {
        await expect(forgotPasswordSchema.validate({ email: '' })).rejects.toThrow()
    })

    it('rechaza email inválido', async () => {
        await expect(
            forgotPasswordSchema.validate({ email: 'not-an-email' })
        ).rejects.toThrow()
    })
})
