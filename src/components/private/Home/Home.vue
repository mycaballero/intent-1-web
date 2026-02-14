<template>
  <div class="w-full flex justify-center">
    <div class="w-full sm:w-6/12 relative min-h-screen flex flex-col sm:justify-center items-center">
      <div class="relative max-w-full sm:max-w-sm w-full">
        <div class="relative w-full rounded-3xl px-6 py-4 shadow-md bg-white/30">
          <label for="" class="block mt-3 text-lg text-gray-700 text-center font-semibold">
            Home
          </label>
          <p class="mt-10 text-center text-gray-600">
            Welcome to the home page!
          </p>
          <div class="mt-6 flex justify-center">
            <BaseButton
              :text="t('general.exit')"
              class-button="w-full h-12 bg-primary"
              :loading="loading"
              :disabled="loading"
              @click="handleLogout"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth.store'
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'
import BaseButton from '@/components/global/buttons/BaseButton.vue'
import { LOGOUT_URL } from '@/constants/urlConstants'

const { t } = useI18n()
const router = useRouter()
const authStore = useAuthStore()
const loading = ref(false)

async function handleLogout() {
  loading.value = true
  try {
    const token = authStore.token
    if (token) {
      await fetch(LOGOUT_URL, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      })
    }
  } finally {
    authStore.logout()
    await router.push({ name: 'login' })
    loading.value = false
  }
}
</script>
<style scoped>

</style>
