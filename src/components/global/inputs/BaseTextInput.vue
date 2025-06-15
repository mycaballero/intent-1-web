<template>
  <div>
    <label v-if="label" :for="name" class="text-md font-medium mb-1 px-1">
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
          :name="props.name"
          :type="props.type || 'text'"
          :value="props.modelValue ?? props.value"
          :placeholder="props.placeholder"
          :class="[
          inputClass,
          icon ? 'pl-10 pr-2' : 'px-2',
          errorMessage ? 'border-red-500 text-red-500' : 'border-gray-300'
        ]"
          class="border-2 rounded-lg py-2 text-lg focus:outline-primary focus-visible:outline-primary h-12 w-full transition-all"
          @input="props.onInput"
          @blur="props.onBlur"
      />
    </div>
    <span v-if="errorMessage" class="text-red-500 text-xs mt-1 pl-2 transition-all">{{ errorMessage }}</span>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue"

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
  onInput?: (e: Event) => void
  onBlur?: (e: FocusEvent) => void
}>()
</script>