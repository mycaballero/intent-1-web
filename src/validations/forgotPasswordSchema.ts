import * as yup from 'yup'
import {makeMessage} from "@/helpers/validationMessage.ts";

export const forgotPasswordSchema = yup.object({
    email: yup.string()
        .required(({ path }) => makeMessage('validations.required', path ))
        .email(({ path}) => makeMessage('validations.email', path )),
})
