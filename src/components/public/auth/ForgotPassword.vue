<template>
  <div class="w-full min-h-screen md:min-h-dvh flex flex-row">
    <BaseDesktopBanner />
    <BaseMotion variant="fadeIn" class="flex items-center w-full lg:w-6/12 flex-col">
      <div class="w-full md:w-7/12 lg:w-10/12">
        <BaseMotion variant="fadeIn" class="w-full h-72 md:h-60 mb-6 grid flex-col content-end">
          <div class="w-full lg:hidden mb-5 flex justify-center text-primary">
            <Icon icon="ic:outline-account-box" width="60px" height="60px" />
          </div>
          <h5 class="w-full text-xl lg:text-2xl lg:text-start font-bold text-dark-1">
            {{ t('components.forgot_password.subtitle') }}
          </h5>
          <p class="text-center lg:text-start text-gray-2 text-lg">
            {{ t('components.forgot_password.instructions') }}
          </p>
        </BaseMotion>
        <div class="w-full mb-5">
          <Form :validation-schema="forgotPasswordSchema" @submit="send" class="w-full mb-5 px-5 lg:px-0">
            <BaseMotion variant="fadeInUp" class="mb-4">
              <Field name="email" v-slot="{ field, errorMessage }">
                <BaseTextInput
                    v-bind="field"
                    input-class="w-10/12 text-gray-400"
                    icon="ic:baseline-email"
                    icon-class="text-gray-400"
                    icon-width="20px"
                    icon-height="20px"
                    type="email"
                    :placeholder="t('components.forgot_password.email_placeholder')"
                    :error-message="translateError(errorMessage)"
                />
              </Field>
            </BaseMotion>

            <BaseMotion variant="fadeIn">
              <BaseButton
                  :text="t('components.forgot_password.send')"
                  class-button="w-78 h-12 bg-primary"
                  type="submit"
                  :disabled="loading"
                  :loading="loading"
              />
            </BaseMotion>
          </Form>
        </div>

        <BaseMotion variant="fadeIn">
          <p
              class="w-full text-center text-primary hover:underline hover:cursor-pointer"
              @click="router.push('/login')"
          >
            {{ t('components.forgot_password.back_to_login') }}
          </p>
        </BaseMotion>
      </div>
    </BaseMotion>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import BaseTextInput from '@/components/global/inputs/BaseTextInput.vue'
import BaseButton from '@/components/global/buttons/BaseButton.vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { forgotPasswordSchema } from '@/validations/forgotPasswordSchema.ts'
import { Field, Form } from 'vee-validate'
import { translateError } from '@/helpers/translateValidationError.ts'
import BaseMotion from '@/components/global/animations/BaseMotion.vue'
import BaseDesktopBanner from '@/components/global/visual/BaseDesktopBanner.vue'
import { ref } from 'vue'


const { t } = useI18n()
const router = useRouter()
const error = ref<string | null>(null)
const loading = ref(false)

const send = (values: any) => {
  error.value = null
  router.push({
    name: 'change_password',
    query: { email: values.email }
  })
}
</script>
