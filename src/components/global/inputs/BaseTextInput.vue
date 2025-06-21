<template>
  <div>
    <label v-if="label" :for="inputId" class="text-md font-medium mb-1 px-1">
      {{ label }}
    </label>
    <div class="relative w-full">
      <div
          v-if="icon"
          class="absolute inset-y-0 left-2 flex items-center pointer-events-none"
      >
        <Icon
            :icon="icon"
            :width="iconWidth"
            :height="iconHeight"
            :class="iconClass" />
      </div>

      <input
          :id="inputId"
          :name="props.name"
          :type="inputType || 'text'"
          :value="props.modelValue ?? props.value"
          :placeholder="props.placeholder"
          :class="[
          inputClass,
          icon ? 'pl-10 pr-2' : 'px-2',
          errorMessage ? 'border-red-500 text-red-500' : 'border-gray-300',
          disabled ? 'bg-gray-200 cursor-default' : 'bg-white',
          type === 'password' ? 'pr-8' : ''
        ]"
          class="border-2 rounded-lg py-2 text-lg focus:outline-primary focus-visible:outline-primary h-12 w-full transition-all"
          @input="props.onInput"
          @blur="props.onBlur"
          :disabled="props.disabled"
          :aria-describedby="errorMessage ? `${inputId}-error` : ''"
          :aria-invalid="!!errorMessage"
      />
      <button
          v-if="props.type === 'password'"
          type="button"
          class="absolute inset-y-0 right-2 flex items-center focus:outline-none"
          :disabled="props.disabled"
          @click="showPassword = !showPassword"
      >
        <Icon
            :icon="showPassword ? 'ic:outline-visibility-off' : 'ic:outline-visibility'"
            class="text-gray-400"
            width="22"
            height="22"
        />
      </button>
    </div>
    <span v-if="errorMessage" role="alert" class="text-red-500 text-xs mt-1 pl-2 transition-all">{{ errorMessage }}</span>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue"
import { computed, ref } from 'vue'

const props = defineProps<{
  modelValue?: string
  type?: string
  name?: string
  value?: string
  placeholder?: string
  inputClass?: string
  label?: string
  errorMessage?: string
  icon?: string
  iconClass?: string
  iconWidth?: string | number
  iconHeight?: string | number
  iconColor?: string
  disabled?: boolean
  onInput?: (e: Event) => void
  onBlur?: (e: FocusEvent) => void
}>()
const showPassword = ref(false)

const inputId = computed(() => props.name || `input-${Math.random().toString(36).slice(2)}`)
const inputType = computed(() => {
  if (props.type === 'password') return showPassword.value ? 'text' : 'password'
  return props.type || 'text'
})
</script>