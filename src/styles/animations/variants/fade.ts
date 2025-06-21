import type { MotionVariant } from '../types'

export const fadeIn: MotionVariant = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 200,
            damping: 25,
            mass: 0.6
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.2,
            ease: 'easeInOut'
        }
    }
}

export const fadeInUp: MotionVariant = {
    initial: { opacity: 0, y: 30 },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 180,
            damping: 22,
            mass: 0.8
        }
    },
    exit: {
        opacity: 0,
        y: 20,
        transition: {
            duration: 0.3,
            ease: 'easeInOut'
        }
    }
}
