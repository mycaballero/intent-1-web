import { describe, it, expect } from 'vitest'
import { changePasswordSchema } from '@/validations/changePasswordSchema'

describe('changePasswordSchema', () => {
    it('valida password y confirmación coincidentes', async () => {
        const result = await changePasswordSchema.validate({
            password: 'newpassword123',
            confirm_password: 'newpassword123',
        })
        expect(result).toEqual({
            password: 'newpassword123',
            confirm_password: 'newpassword123',
        })
    })

    it('rechaza password vacío', async () => {
        await expect(
            changePasswordSchema.validate({
                password: '',
                confirm_password: 'newpassword123',
            })
        ).rejects.toThrow()
    })

    it('rechaza password con menos de 8 caracteres', async () => {
        await expect(
            changePasswordSchema.validate({
                password: 'short',
                confirm_password: 'short',
            })
        ).rejects.toThrow()
    })

    it('rechaza cuando confirm_password no coincide', async () => {
        await expect(
            changePasswordSchema.validate({
                password: 'newpassword123',
                confirm_password: 'different123',
            })
        ).rejects.toThrow()
    })
})
