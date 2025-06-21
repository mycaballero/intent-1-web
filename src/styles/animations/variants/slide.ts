import type { MotionVariant } from '../types'

export const fadeSlideLeft: MotionVariant = {
    initial: { opacity: 0, x: 40 },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'spring',
            stiffness: 160,
            damping: 22,
            mass: 0.8
        }
    },
    exit: {
        opacity: 0,
        x: 20,
        transition: {
            duration: 0.3,
            ease: 'easeInOut'
        }
    }
}

export const fadeSlideRight: MotionVariant = {
    initial: { opacity: 0, x: -60 },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
            staggerChildren: 0.15,
            delayChildren: 0.2
        }
    },
    exit: {
        opacity: 0,
        x: -20,
        transition: {
            duration: 0.3
        }
    }
}

export const slideRight: MotionVariant = {
    initial: { x: -30 },
    animate: {
        x: 0,
        transition: {
            type: 'spring',
            stiffness: 180,
            damping: 22,
            mass: 0.8,
            staggerChildren: 0.15,
        }
    },
    exit: {
        opacity: 0,
        x: -30,
        transition: {
            duration: 0.3,
            ease: 'easeInOut'
        }
    }
}

