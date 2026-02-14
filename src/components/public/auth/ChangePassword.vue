<template>
  <div class="w-full min-h-screen md:min-h-dvh flex flex-col justify-center items-center px-4">
    <BaseMotion variant="zoomIn">
      <div class="w-full mb-5 flex justify-center text-primary">
        <Icon icon="ic:outline-account-box" width="60px" height="60px" />
      </div>
    </BaseMotion>

    <BaseMotion variant="fadeInUp" class="w-full max-w-md space-y-6">
      <h2 class="text-2xl font-bold text-center text-primary">
        {{ t('components.change_password.title') }}
      </h2>

      <p v-if="missingParams" class="text-red-500 text-center text-sm mb-4">
        {{ t('components.change_password.error') }}
      </p>
      <p v-else class="text-center text-gray-600 text-sm mb-4">
        {{ t('components.change_password.new_password_instructions') }}
      </p>

      <Form v-if="!missingParams" :validation-schema="changePasswordSchema" @submit="onSubmit">
        <div class="space-y-4">
          <Field name="password" v-slot="{ field, errorMessage }">
            <BaseTextInput
                v-bind="field"
                type="password"
                :placeholder="t('components.change_password.new_password')"
                :error-message="translateError(errorMessage)"
                icon="ic:outline-lock"
                icon-class="text-gray-400"
                icon-width="20px"
                icon-height="20px"
                :disabled="loading"
            />
          </Field>

          <Field name="confirm_password" v-slot="{ field, errorMessage }">
            <BaseTextInput
                v-bind="field"
                type="password"
                :placeholder="t('components.change_password.confirm_password')"
                :error-message="translateError(errorMessage)"
                icon="ic:outline-lock"
                icon-class="text-gray-400"
                icon-width="20px"
                icon-height="20px"
                :disabled="loading"
            />
          </Field>

          <BaseMotion v-if="error" variant="fadeIn" class="mb-4">
            <p class="text-red-500 text-sm text-center">{{ error }}</p>
          </BaseMotion>

          <BaseMotion variant="fadeIn">
            <BaseButton
                type="submit"
                :text="t('general.update')"
                class-button="w-full h-12 bg-primary"
                :disabled="loading"
                :loading="loading"
            />
          </BaseMotion>
        </div>
      </Form>

      <p v-if="!missingParams" class="text-center">
        <router-link to="/login" class="text-primary hover:underline">
          {{ t('components.forgot_password.back_to_login') }}
        </router-link>
      </p>
    </BaseMotion>
  </div>
</template>

<script setup lang="ts">
import { Form, Field } from 'vee-validate'
import { useI18n } from 'vue-i18n'
import { useRoute, useRouter } from 'vue-router'
import BaseTextInput from '@/components/global/inputs/BaseTextInput.vue'
import BaseButton from '@/components/global/buttons/BaseButton.vue'
import { translateError } from '@/helpers/translateValidationError.ts'
import { changePasswordSchema } from '@/validations/changePasswordSchema.ts'
import { Icon } from '@iconify/vue'
import BaseMotion from '@/components/global/animations/BaseMotion.vue'
import { computed, ref } from 'vue'
import { RESET_PASSWORD_URL } from '@/constants/urlConstants'

const { t } = useI18n()
const route = useRoute()
const router = useRouter()
const error = ref<string | null>(null)
const loading = ref(false)

const token = computed(() => route.query.token as string | undefined)
const email = computed(() => route.query.email as string | undefined)
const missingParams = computed(() => !token.value || !email.value)

async function onSubmit(values: { password: string; confirm_password: string }) {
  if (missingParams.value) return
  loading.value = true
  error.value = null
  try {
    const response = await fetch(RESET_PASSWORD_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        token: token.value,
        email: email.value,
        password: values.password,
        passwordConfirmation: values.confirm_password,
      }),
    })
    const data = await response.json()

    if (response.ok) {
      await router.push({ name: 'login', query: { reset: 'success' } })
    } else {
      error.value = data.message || t('components.change_password.error')
    }
  } catch {
    error.value = t('components.change_password.error')
  } finally {
    loading.value = false
  }
}
</script>
