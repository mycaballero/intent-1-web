import * as yup from 'yup'
import { makeMessage } from '@/helpers/validationMessage'

export const loginSchema = yup.object({
    email: yup.string()
        .required(({ path }) => makeMessage('validations.required', path ))
        .email(({ path}) => makeMessage('validations.email', path )),
    password: yup.string()
        .required(({ path }) => makeMessage('validations.required', path))
        .min(8, ({ min, path }) => makeMessage('validations.min', path, { min })),
})
