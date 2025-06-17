import type { MotionVariant } from '../types'

export const fadeIn: MotionVariant = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: { duration: 0.3, ease: 'easeOut' }
    },
    transition: { type: 'spring', stiffness: 300, damping: 24 },
}

export const fadeInUp: MotionVariant = {
    initial: { opacity: 0, y: 50 },
    animate: {
        opacity: 1, y: 0,
        transition: { duration: 0.5, ease: 'easeOut' }
    },
    exit: {
        opacity: 0, y: 20,
        transition: { duration: 0.3 }
    }
}
