import { CalendarCheck } from 'lucide-react'
import { Button } from './Button'

export function BottomNav() {
  return (
    <div className="pointer-events-none fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
      <div className="pointer-events-auto flex items-center gap-1 rounded-full border border-[#0D212C]/10 bg-white py-2 pl-6 pr-2 shadow-[0_16px_48px_rgba(5,26,36,0.12)]">
        <span className="font-accent text-lg font-semibold tracking-tight text-[#051A24]">RK</span>
        <span className="mx-3 h-5 w-px bg-[#0D212C]/10" aria-hidden="true" />
        <Button href="#contact" icon={CalendarCheck} className="!px-5 !py-2 !text-sm">
          Book a demo
        </Button>
      </div>
    </div>
  )
}
