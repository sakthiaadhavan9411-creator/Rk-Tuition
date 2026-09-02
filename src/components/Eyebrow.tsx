interface EyebrowProps {
  tamil: string
  english: string
}

export function Eyebrow({ tamil, english }: EyebrowProps) {
  return (
    <p className="flex items-center gap-3 font-mono text-sm uppercase tracking-[0.2em] text-[#273C46]">
      <span className="text-maroon">{tamil}</span>
      <span className="h-3 w-px bg-[#0D212C]/20" aria-hidden="true" />
      <span>{english}</span>
    </p>
  )
}
