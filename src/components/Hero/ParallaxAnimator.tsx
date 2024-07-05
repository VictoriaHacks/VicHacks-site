'use client'
import clsx from 'clsx';
import { useScroll, useTransform, motion, useMotionValue } from 'framer-motion'
import React, { forwardRef, useRef, useState } from 'react';

interface Props extends React.ComponentPropsWithoutRef<'div'> {
  speed?: number
}

/**
 * Make elements scroll in parallel
 * @param props - Component props
 * @param speed - The speed of the movement
 * @param children - The child elements to animate
 * @param className - The class name to apply
 */
const ParallaxAnimator = forwardRef<HTMLElement, Props>(function ParallaxAnimator({ className, speed = 1000, children }) {
  const ref: React.RefObject<HTMLDivElement> | null = useRef(null)
  const [initialY, setInitialY]: [number | null, Function] = useState(null)
  
  const { scrollYProgress } = useScroll();
  const animationAmount = useTransform(scrollYProgress, [0, 1], [0, speed]);

  const offset = useTransform(() => {
    if (!ref.current) return
    
    // Set initial Y position
    if (initialY === null) {
      const rect = ref.current.getBoundingClientRect()
      setInitialY(rect.top + window.scrollY)
    }

    return (initialY || 0) - animationAmount.get()
  })
  
  return (
    <motion.div ref={ref} className={clsx('absolute', className)} style={{ top: offset }}>
      {children}
    </motion.div>  
  )
})

export default ParallaxAnimator