<template>
  <div class="w-full min-h-screen md:min-h-dvh flex flex-row">
    <div class="hidden lg:flex lg:items-center justify-center h-full w-6/12 min-h-screen bg-primary">
      <div class="flex w-8/10">
        <div class="w-full mb-6 grid flex-col text-white">
          <div class="w-full mb-5 flex">
            <Icon icon="ic:outline-home" width="80px" height="80px" />
          </div>
          <h5 class="w-full text-start text-2xl font-bold">
            {{ t('components.login.residential_management') }}
          </h5>
          <p class="text-lg text-start">{{ t('components.login.banner_text') }}</p>
          <div class="flex justify-center">
            <div class="w-72 h-72 bg-[url('/images/buildings-1.svg')] bg-no-repeat bg-center bg-contain"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex items-center w-full lg:w-6/12 flex-col">
      <div class="w-full md:w-7/12 lg:w-10/12">
        <div class="w-full h-72 md:h-60 mb-6 grid flex-col content-end">
          <div class="w-full lg:hidden mb-5 flex justify-center text-primary">
            <Icon icon="ic:outline-home" width="60px" height="60px" />
          </div>
          <h5 class="w-full text-xl lg:text-2xl lg:text-start font-bold text-dark-1">
            {{ t('general.welcome') }}
          </h5>
          <p class="hidden lg:block text-gray-2 text-lg text-start">
            {{ t('components.login.credentials') }}
          </p>
        </div>
        <Form :validation-schema="loginSchema" @submit="onSubmit" class="w-full mb-5 px-5 lg:px-0">
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
              />
            </Field>
          </div>

          <div>
            <BaseButton :text="t('components.login.login')" class-button="w-78 h-12 bg-primary" type="submit" />
          </div>
        </Form>

        <div class="w-full lg:flex">
          <p
              class="w-full text-center text-primary hover:underline hover:cursor-pointer"
              @click="router.push('/forgot-password')"
          >
            {{ t('components.login.forget_password') }}
          </p>
          <p
              class="w-full text-center text-primary hover:underline hover:cursor-pointer"
              @click="router.push('/register')"
          >
            {{ t('components.login.create_account') }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { Form, Field } from 'vee-validate'
import { loginSchema } from '@/validations/loginSchema'
import BaseTextInput from '@/components/global/inputs/BaseTextInput.vue'
import BaseButton from '@/components/global/buttons/BaseButton.vue'
import { translateError } from '@/helpers/translateError'

const { t } = useI18n()
const router = useRouter()

const onSubmit = (values: any) => {
  console.log('Datos enviados:', values)
  // Aquí puedes llamar a tu API
}

</script>
