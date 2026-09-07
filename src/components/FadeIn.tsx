import type { HTMLAttributes } from 'react'
import { useInViewAnimation } from '../hooks/useInViewAnimation'

interface FadeInProps extends HTMLAttributes<HTMLDivElement> {
  delay?: number
}

export function FadeIn({ delay = 0, className = '', children, ...rest }: FadeInProps) {
  const { ref, inView } = useInViewAnimation<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`${inView ? 'animate-fade-in-up' : 'opacity-0'} ${className}`}
      style={{ animationDelay: `${delay}s` }}
      {...rest}
    >
      {children}
    </div>
  )
}
