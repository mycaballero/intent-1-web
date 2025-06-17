import type { MotionVariant } from './types'

export const staggerContainer = (delay: number = 0.15): MotionVariant => ({
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: delay
        }
    }
})
