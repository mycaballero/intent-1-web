import * as yup from 'yup'

export const loginSchema = yup.object({
    email: yup.string()
        .required('validations.required')
        .email('validations.email'),
    password: yup.string()
        .required('validations.required')
        .min(8, ({ min }) => ({ key: 'validations.min', values: { min } })),
    number: yup.string()
        .required('validations.required')
})
