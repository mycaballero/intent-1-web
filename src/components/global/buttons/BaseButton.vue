<template>
  <button
      class=" font-semibold text-white rounded-lg px-2 transition-all h-7"
      :class="`${disabled?'opacity-20':'oapcity-100 hover:shadow-lg hover:cursor-pointer'} ${classButton} `"
      :disabled="!!disabled"
      @click="emit('click')">
    <span class="flex justify-center text-center">
      <svg v-if="loading"
           class="mr-2 h-5 w-5 animate-spin text-white"
           xmlns="http://www.w3.org/2000/svg" fill="none"
           viewBox="0 0 24 24"
      >
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M1 10a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
      </svg>
      <slot></slot>{{text}}
    </span>
  </button>
</template>
<script setup lang="ts">
defineProps<{
  disabled?: boolean | any,
  text: String,
  classButton?: String,
  loading?: boolean,
}>()
const emit = defineEmits<{
  (event: 'click'): void,
}>()
</script>
