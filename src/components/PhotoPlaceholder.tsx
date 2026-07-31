import { ImagePlus } from 'lucide-react'

interface PhotoPlaceholderProps {
  className?: string
  label?: string
}

export function PhotoPlaceholder({ className = '', label = 'Add photo here' }: PhotoPlaceholderProps) {
  return (
    <div
      className={`flex items-center justify-center border border-dashed border-[#0D212C]/15 bg-[#EAF1F5] text-[#273C46]/50 ${className}`}
    >
      <div className="flex flex-col items-center gap-2">
        <ImagePlus className="h-6 w-6" aria-hidden="true" />
        <span className="font-mono text-[11px] uppercase tracking-widest">{label}</span>
      </div>
    </div>
  )
}
