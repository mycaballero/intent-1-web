<template>
  <Teleport to="body">
    <div
      v-if="isOpen"
      data-testid="layout-user-popup-backdrop"
      class="fixed inset-0 z-40"
      aria-hidden="true"
      @click="$emit('close')"
    />
    <div
      v-if="isOpen"
      id="user-popup"
      data-testid="layout-user-popup"
      role="dialog"
      aria-label="User menu"
      class="fixed left-20 top-16 z-50 w-72 rounded-lg border border-gray-200 bg-white py-2 shadow-lg"
    >
      <!-- Profile summary -->
      <div class="border-b border-gray-200 px-4 py-3">
        <p class="font-semibold text-gray-8" data-testid="layout-user-popup-name">{{ userName }}</p>
        <p v-if="userEmail" class="text-sm text-gray-3" data-testid="layout-user-popup-email">{{ userEmail }}</p>
      </div>
      <!-- Theme -->
      <div class="border-b border-gray-200 px-4 py-2">
        <p class="mb-2 text-sm font-medium text-gray-3">{{ t('layout.theme') }}</p>
        <div class="flex gap-2">
          <button
            type="button"
            data-testid="layout-theme-light"
            class="rounded-lg px-3 py-1.5 text-sm font-medium transition-colors"
            :class="theme === 'light' ? 'bg-primary text-white' : 'bg-gray-1 text-gray-8 hover:bg-gray-2'"
            @click="$emit('theme-change', 'light')"
          >
            {{ t('layout.theme_light') }}
          </button>
          <button
            type="button"
            data-testid="layout-theme-dark"
            class="rounded-lg px-3 py-1.5 text-sm font-medium transition-colors"
            :class="theme === 'dark' ? 'bg-primary text-white' : 'bg-gray-1 text-gray-8 hover:bg-gray-2'"
            @click="$emit('theme-change', 'dark')"
          >
            {{ t('layout.theme_dark') }}
          </button>
        </div>
      </div>
      <!-- Logout -->
      <div class="px-2 py-1">
        <button
          type="button"
          data-testid="layout-user-popup-logout"
          class="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm font-medium text-gray-8 hover:bg-red-50 hover:text-danger"
          @click="$emit('logout')"
        >
          <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          {{ t('general.exit') }}
        </button>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

defineProps<{
  isOpen: boolean
  userName?: string
  userEmail?: string
  theme?: 'light' | 'dark'
}>()

defineEmits<{
  close: []
  'theme-change': [value: 'light' | 'dark']
  logout: []
}>()
</script>

<style scoped></style>
