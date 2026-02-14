<template>
  <div class="min-h-screen bg-gray-1 md:min-h-dvh">
    <LayoutSidebar
      :is-open="isSidebarOpen"
      :is-expanded="isSidebarExpanded"
      :is-popup-open="isUserPopupOpen"
      :user-name="userName"
      @toggle-popup="isUserPopupOpen = !isUserPopupOpen"
      @toggle-expand="isSidebarExpanded = !isSidebarExpanded"
      @close="isSidebarOpen = false"
    >
      <!-- Placeholder for future nav items -->
    </LayoutSidebar>
    <div
      class="flex min-h-screen flex-col transition-[padding] duration-200"
      :class="{
        'md:pl-16': isSidebarOpen && !isSidebarExpanded,
        'md:pl-64': isSidebarOpen && isSidebarExpanded
      }"
    >
      <LayoutTopBar
        :title="currentTitle"
        :is-sidebar-open="isSidebarOpen"
        @toggle-sidebar="isSidebarOpen = !isSidebarOpen"
      />
      <main class="flex-1 p-4" role="main">
        <slot />
      </main>
    </div>
    <LayoutUserPopup
      :is-open="isUserPopupOpen"
      :user-name="userName"
      :user-email="userEmail"
      :theme="theme"
      @close="isUserPopupOpen = false"
      @theme-change="onThemeChange"
      @logout="onLogout"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAuthStore } from '@/stores/auth.store'
import { useI18n } from 'vue-i18n'
import LayoutSidebar from '@/components/private/layout/LayoutSidebar.vue'
import LayoutTopBar from '@/components/private/layout/LayoutTopBar.vue'
import LayoutUserPopup from '@/components/private/layout/LayoutUserPopup.vue'
import { LOGOUT_URL } from '@/constants/urlConstants'

const router = useRouter()
const route = useRoute()
const authStore = useAuthStore()
const { t } = useI18n()

const isSidebarOpen = ref(true)
const isSidebarExpanded = ref(true)
const isUserPopupOpen = ref(false)
const theme = ref<'light' | 'dark'>('light')

type UserShape = { name?: string; email?: string } | null
const storeUser = computed(() => authStore.user as UserShape)

const userName = computed(() => storeUser.value?.name ?? '')
const userEmail = computed(() => storeUser.value?.email ?? '')

const currentTitle = computed(() => {
  const titleKey = route.meta?.title as string | undefined
  return titleKey ? t(titleKey) : ''
})

function onThemeChange(value: 'light' | 'dark') {
  theme.value = value
  // TODO: apply theme to document (e.g. class on html) and persist
}

async function onLogout() {
  isUserPopupOpen.value = false
  const token = authStore.token
  if (token) {
    try {
      await fetch(LOGOUT_URL, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
    } finally {
      authStore.logout()
      await router.push({ name: 'login' })
    }
  } else {
    authStore.logout()
    await router.push({ name: 'login' })
  }
}
</script>

<style scoped></style>
