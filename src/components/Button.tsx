import type { ButtonHTMLAttributes, CSSProperties } from 'react'
import type { LucideIcon } from 'lucide-react'

type Variant = 'primary' | 'secondary' | 'tertiary' | 'invert' | 'invert-ghost'

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'style'> {
  variant?: Variant
  icon?: LucideIcon
  href?: string
  style?: CSSProperties
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-[6px] text-base md:text-lg font-medium whitespace-nowrap transition-all duration-300 active:scale-[0.98]'

const variantClasses: Record<Variant, string> = {
  primary: 'bg-[#051A24] text-white px-7 py-3 hover:bg-[#0D212C]',
  secondary: 'bg-white text-[#051A24] px-7 py-3 ring-1 ring-[#0D212C]/15 hover:ring-maroon',
  tertiary: 'bg-[#0D212C]/5 text-[#051A24] px-7 py-3 hover:bg-[#0D212C]/10',
  invert: 'bg-white text-[#051A24] px-7 py-3 hover:bg-[#E0EBF0]',
  'invert-ghost': 'bg-transparent text-white px-7 py-3 ring-1 ring-white/25 hover:ring-white/70',
}

export function Button({
  variant = 'primary',
  icon: Icon,
  href,
  className = '',
  style,
  children,
  ...rest
}: ButtonProps) {
  const classes = `${base} ${variantClasses[variant]} ${className}`

  if (href) {
    const external = href.startsWith('http')
    return (
      <a
        href={href}
        className={classes}
        style={style}
        {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      >
        {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} style={style} {...rest}>
      {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
      {children}
    </button>
  )
}
