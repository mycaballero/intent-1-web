import * as yup from 'yup'
import { makeMessage } from '@/helpers/validationMessage.ts'

export const changePasswordSchema = yup.object({
    password: yup
        .string()
        .required(({ path }) => makeMessage('validations.required', path ))
        .min(8, ({ min, path }) => makeMessage('validations.min', path, { min })),
    confirm_password: yup
        .string()
        .required(({ path }) => makeMessage('validations.required', path ))
        .oneOf([yup.ref('password')], ({ path }) => makeMessage('validations.match', path )),
})
