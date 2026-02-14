<template>
  <header
    data-testid="layout-topbar"
    class="sticky top-0 z-20 flex h-14 flex-shrink-0 items-center justify-between border-b border-gray-200 bg-white px-4 shadow-sm"
    role="banner"
  >
    <!-- Left: menu toggle (mobile) + search placeholder + title -->
    <div class="flex flex-1 items-center gap-3">
      <button
        type="button"
        data-testid="layout-sidebar-toggle"
        class="rounded-lg p-2 text-gray-3 hover:bg-gray-1"
        :aria-label="isSidebarOpen ? t('layout.close_menu') : t('layout.open_menu')"
        @click="$emit('toggle-sidebar')"
      >
        <svg v-if="!isSidebarOpen" class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
        </svg>
      </button>
      <slot name="search">
        <span class="hidden rounded-lg border border-gray-200 bg-gray-1 px-3 py-2 text-sm text-gray-3 sm:inline-flex">Search...</span>
      </slot>
      <slot name="title">
        <span class="text-size-body font-medium text-gray-8">{{ title }}</span>
      </slot>
    </div>
    <!-- Right: actions (notifications, messages, help, etc.) -->
    <div class="flex items-center gap-1">
      <slot name="actions" />
    </div>
  </header>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

withDefaults(
  defineProps<{
    title?: string
    isSidebarOpen?: boolean
  }>(),
  { title: '', isSidebarOpen: false }
)

defineEmits<{
  'toggle-sidebar': []
}>()
</script>

<style scoped></style>
