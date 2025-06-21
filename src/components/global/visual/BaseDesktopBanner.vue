<template>
  <BaseMotion variant="slideRight" class="hidden lg:flex lg:items-center justify-center h-full w-6/12 min-h-screen bg-primary">
    <div class="flex w-8/10">
      <BaseMotion variant="fadeSlideLeft">
        <div class="w-full mb-6 grid flex-col text-white">

        <BaseMotion variant="fadeInUp">
          <div class="w-full mb-5 flex">
            <Icon icon="ic:outline-home" width="80px" height="80px" />
          </div>
        </BaseMotion>

        <BaseMotion variant="fadeInUp">
          <h5 class="w-full text-start text-2xl font-bold">
            {{ t('components.login.residential_management') }}
          </h5>
        </BaseMotion>

        <BaseMotion variant="fadeInUp">
            <p class="text-lg text-start">
              {{ t('components.login.banner_text') }}
            </p>
        </BaseMotion>

        <BaseMotion variant="zoomIn">
          <div class="flex justify-center">
            <div class="w-72 h-72 bg-[url('/images/buildings-1.svg')] bg-no-repeat bg-center bg-contain"></div>
          </div>
        </BaseMotion>

      </div>
      </BaseMotion>
    </div>
  </BaseMotion>
</template>

<script setup lang="ts">

import BaseMotion from '@/components/global/animations/BaseMotion.vue'
import {Icon} from '@iconify/vue'
import {useI18n} from 'vue-i18n'
const { t } = useI18n()
</script>
