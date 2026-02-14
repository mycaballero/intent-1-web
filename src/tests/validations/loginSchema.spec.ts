import { describe, it, expect } from 'vitest'
import { loginSchema } from '@/validations/loginSchema'

describe('loginSchema', () => {
    it('valida email y password correctos', async () => {
        const result = await loginSchema.validate({
            email: 'user@test.com',
            password: 'password123',
        })
        expect(result).toEqual({ email: 'user@test.com', password: 'password123' })
    })

    it('rechaza email vacío', async () => {
        await expect(
            loginSchema.validate({ email: '', password: 'password123' })
        ).rejects.toThrow()
    })

    it('rechaza email inválido', async () => {
        await expect(
            loginSchema.validate({ email: 'not-an-email', password: 'password123' })
        ).rejects.toThrow()
    })

    it('rechaza password vacío', async () => {
        await expect(
            loginSchema.validate({ email: 'user@test.com', password: '' })
        ).rejects.toThrow()
    })

    it('rechaza password con menos de 8 caracteres', async () => {
        await expect(
            loginSchema.validate({ email: 'user@test.com', password: 'short' })
        ).rejects.toThrow()
    })
})
