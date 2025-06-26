<template>
  <div class="w-full min-h-screen md:min-h-dvh flex flex-row">
    <BaseDesktopBanner />
    <div class="flex items-center w-full lg:w-6/12 flex-col">
      <div class="w-full md:w-7/12 lg:w-10/12">
        <BaseMotion variant="fadeInUp" class="w-full h-72 md:h-60 mb-6 grid flex-col content-end">
          <div class="w-full lg:hidden mb-5 flex justify-center text-primary">
            <Icon icon="ic:outline-home" width="60px" height="60px" />
          </div>
          <h5 class="w-full text-xl lg:text-2xl lg:text-start font-bold text-dark-1">
            {{ t('general.welcome') }}
          </h5>
          <p class="hidden lg:block text-gray-2 text-lg text-start">
            {{ t('components.login.credentials') }}
          </p>
        </BaseMotion>
        <BaseMotion variant="fadeInUp" class="w-full mb-5 px-5 lg:px-0">
          <Form :validation-schema="loginSchema" @submit="onSubmit">
            <div class="mb-4">
              <Field name="email" v-slot="{ field, errorMessage }">
                <BaseTextInput
                    v-bind="field"
                    input-class="w-10/12 text-gray-400"
                    :placeholder="t('components.login.email')"
                    :error-message="translateError(errorMessage)"
                    icon="ic:baseline-person-outline"
                    icon-class="text-gray-400"
                    icon-width="20px"
                    icon-height="20px"
                    :disabled="loading"
                />
              </Field>
            </div>

            <div class="mb-4">
              <Field name="password" v-slot="{ field, errorMessage }">
                <BaseTextInput
                    v-bind="field"
                    type="password"
                    input-class="w-10/12 text-gray-400"
                    :placeholder="t('components.login.password')"
                    :error-message="translateError(errorMessage)"
                    icon="ic:outline-lock"
                    icon-class="text-gray-400"
                    icon-width="20px"
                    icon-height="20px"
                    :disabled="loading"
                />
              </Field>
            </div>
            <BaseMotion v-if="error" variant="fadeIn" class="my-2">
              <p class="text-red-500 text-sm text-center">
                {{ error }}
              </p>
            </BaseMotion>
            <div>
              <BaseButton
                  :text="t('components.login.login')"
                  class-button="w-78 h-12 bg-primary"
                  type="submit"
                  :disabled="loading"
                  :loading="loading">
              </BaseButton>
            </div>
          </Form>
        </BaseMotion>
        <BaseMotion variant="fadeIn" class="w-full lg:flex">
          <p class="w-full text-center text-primary hover:underline hover:cursor-pointer" @click="router.push('/forgot-password')">
            {{ t('components.login.forget_password') }}
          </p>
          <p class="w-full text-center text-primary hover:underline hover:cursor-pointer" @click="router.push('/register')">
            {{ t('components.login.create_account') }}
          </p>
        </BaseMotion>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { Form, Field, type SubmissionHandler } from 'vee-validate'
import { loginSchema } from '@/validations/loginSchema'
import BaseTextInput from '@/components/global/inputs/BaseTextInput.vue'
import BaseButton from '@/components/global/buttons/BaseButton.vue'
import { translateError } from '@/helpers/translateValidationError.ts'
import { inject, ref } from 'vue'
import BaseDesktopBanner from '@/components/global/visual/BaseDesktopBanner.vue'
import BaseMotion from '@/components/global/animations/BaseMotion.vue'
import { useAuthStore } from '@/stores/auth.store'
import { LOGIN_URL } from '@/constants/urlConstants'

const { t } = useI18n()
const router = useRouter()
const authStore = useAuthStore()
type UseFetchType = (url: string, options?: any) => {
  response: Response | null
  data: any
  json: () => Promise<any>
}
const useFetch = inject('useFetchDefault') as UseFetchType

interface LoginForm {
  email: string
  password: string
}

const loading = ref(false)
const error = ref<string | null>(null)

const onSubmit: SubmissionHandler<LoginForm> = async ( values: LoginForm) => {
  loading.value = true
  error.value = null
  try {
    const { response, data } = await useFetch(LOGIN_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    }).json()
    if (response.value.ok) {
      authStore.setToken(data.value.token)
      authStore.setUser(data.value.user)
      await router.push({name: 'home'})
    } else {
      error.value = t('components.login.error')
    }
  } catch (e) {
    error.value = t('components.login.error')
  } finally {
    loading.value = false
    authStore.setToken('1234567890') //#TODO For testing purposes, remove in production
    authStore.setUser({}) //#TODO For testing purposes, remove in production
    await router.push({name: 'home'}) //#TODO For testing purposes, remove in production
  }
}

</script>
