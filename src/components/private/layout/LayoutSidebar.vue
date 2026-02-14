<template>
  <!-- Backdrop on mobile when sidebar is open -->
  <div
    v-if="isOpen"
    data-testid="layout-sidebar-backdrop"
    class="fixed inset-0 z-20 bg-black/40 md:hidden"
    aria-hidden="true"
    @click="$emit('close')"
  />
  <aside
    data-testid="layout-sidebar"
    class="fixed left-0 top-0 z-30 flex h-full flex-shrink-0 flex-col border-r border-gray-8/50 bg-gray-8 shadow-lg transition-[transform,width] duration-200 ease-in-out"
    :class="[
      !isOpen && '-translate-x-full',
      isOpen && (isExpanded ? 'w-64' : 'w-16')
    ]"
    aria-label="Navigation"
  >
    <!-- Logo + close (mobile) -->
    <div class="flex h-14 flex-shrink-0 items-center justify-between border-b border-white/10 px-2 overflow-hidden">
      <span class="text-lg font-bold text-white whitespace-nowrap" aria-hidden="true">
        {{ isExpanded ? 'Intent-1' : 'I1' }}
      </span>
      <button
        type="button"
        data-testid="layout-sidebar-close"
        class="md:hidden rounded-lg p-1.5 text-white/80 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary"
        :aria-label="t('layout.close_menu')"
        @click="$emit('close')"
      >
        <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
        </svg>
      </button>
    </div>
    <!-- Nav -->
    <nav class="flex-1 overflow-y-auto overflow-x-hidden py-3" aria-label="Main navigation">
      <div
        class="flex flex-col gap-1 transition-[padding] duration-200"
        :class="isExpanded ? 'items-stretch px-4' : 'items-center px-2'"
      >
        <slot :is-expanded="isExpanded" />
      </div>
    </nav>
    <!-- Profile at bottom -->
    <div
      class="flex flex-shrink-0 items-center gap-3 border-t border-white/10 py-3 transition-[padding] duration-200"
      :class="isExpanded ? 'px-4' : 'justify-center px-2'"
    >
      <button
        type="button"
        data-testid="layout-sidebar-profile-trigger"
        class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary"
        :aria-expanded="isPopupOpen"
        :aria-haspopup="true"
        aria-controls="user-popup"
        :aria-label="t('layout.profile_menu')"
        @click="$emit('toggle-popup')"
      >
        <span v-if="userInitial" class="text-sm font-semibold">{{ userInitial }}</span>
        <svg v-else class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      </button>
      <span
        v-if="isExpanded && userName"
        class="min-w-0 truncate text-sm font-medium text-white/90"
      >
        {{ userName }}
      </span>
    </div>
    <!-- Expand/collapse arrow - outside the bar, Stripe-style (desktop only) -->
    <button
      v-if="isOpen"
      type="button"
      data-testid="layout-sidebar-expand-toggle"
      class="absolute -right-3 top-1/2 z-40 hidden h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white shadow-md hover:bg-gray-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary md:flex"
      :aria-label="isExpanded ? t('layout.collapse_sidebar') : t('layout.expand_sidebar')"
      @click="$emit('toggle-expand')"
    >
      <svg
        class="h-3.5 w-3.5 text-gray-3"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          v-if="isExpanded"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 19l-7-7 7-7"
        />
        <path
          v-else
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  </aside>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { t } = useI18n()

const props = withDefaults(
  defineProps<{
    isOpen?: boolean
    isExpanded?: boolean
    isPopupOpen?: boolean
    userName?: string
  }>(),
  { isOpen: true, isExpanded: true, isPopupOpen: false, userName: '' }
)

defineEmits<{
  'toggle-popup': []
  'toggle-expand': []
  close: []
}>()

const userInitial = computed(() => {
  if (!props.userName) return ''
  const parts = props.userName.trim().split(/\s+/)
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase()
  return props.userName.slice(0, 2).toUpperCase()
})
</script>

<style scoped></style>
