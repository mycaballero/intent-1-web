<template>
  <Motion :as="tag"
          v-bind="motionProps"
  >
    <slot />
  </Motion>
</template>

<script setup lang="ts">
import { Motion } from 'motion-v'
import { computed, defineProps } from 'vue'
import {
  fadeIn, fadeInUp,
  fadeSlideLeft, fadeSlideRight,
  zoomIn, staggerContainer, slideRight,
  type MotionVariant
} from '@/styles/animations'

const props = defineProps<{
  variant?: keyof typeof variantMap
  tag?: string
  custom?: MotionVariant
  args?: any[]
}>()

const tag = computed(() => props.tag || 'div')

const variantMap = {
  fadeIn,
  fadeInUp,
  fadeSlideLeft,
  fadeSlideRight,
  slideRight,
  zoomIn,
  staggerContainer
}

const motionProps = computed(() => {
  let variant: MotionVariant
  if (props.custom) {
    variant = props.custom
  } else {
    const variantFnOrObj = variantMap[props.variant || 'fadeIn']
    variant = typeof variantFnOrObj === 'function'
        ? variantFnOrObj(...(props.args || []))
        : variantFnOrObj
  }
  return {
    initial: variant.initial || {},
    animate: variant.animate || {},
    exit: variant.exit || {}
  }
})
</script>