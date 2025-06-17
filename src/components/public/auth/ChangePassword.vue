<template>
  <div class="w-full min-h-screen md:min-h-dvh flex flex-col justify-center items-center px-4">
    <div class="w-full mb-5 flex justify-center text-primary">
      <Icon icon="ic:outline-account-box" width="60px" height="60px" />
    </div>
    <div class="w-full max-w-md space-y-6">
      <BaseMotion tag="ul" variant="fadeIn">
        <div class="bg-blue-500 text-white p-4 rounded">
          ¡Animado con slide left!
        </div>
      </BaseMotion>
      <h2 class="text-2xl font-bold text-center text-primary">
        {{ t('components.change_password.title') }}
      </h2>
      <Form :validation-schema="changePasswordSchema" @submit="onSubmit">
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
            />
          </Field>

          <BaseButton
              type="submit"
              :text="t('general.update')"
              class-button="w-full h-12 bg-primary"
          />
        </div>
      </Form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Form, Field } from 'vee-validate'
import { useI18n } from 'vue-i18n'
import BaseTextInput from '@/components/global/inputs/BaseTextInput.vue'
import BaseButton from '@/components/global/buttons/BaseButton.vue'
import { translateError } from '@/helpers/translateValidationError '
import { changePasswordSchema} from '@/validations/changePasswordSchema.ts'
import {Icon} from "@iconify/vue"
import BaseMotion from "@/components/global/animations/BaseMotion.vue";
const { t } = useI18n()


function onSubmit(values: any) {
  console.log('Enviar datos:', values)
  // Aquí podrías hacer la petición al backend
}
</script>
