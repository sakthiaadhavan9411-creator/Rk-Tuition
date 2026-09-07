import { Phone, MessageCircle, MapPin } from 'lucide-react'
import { Button } from './Button'
import { FadeIn } from './FadeIn'

const CONTACT = {
  phone: '+91 93630 30200',
  whatsapp: '919363030200',
}

export function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-[1200px] scroll-mt-24 px-6 py-24">
      <FadeIn delay={0.1}>
        <div className="relative overflow-hidden rounded-[28px] bg-[#051A24] px-6 py-20 text-center md:px-16 md:py-28">
          <span
            className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 select-none font-accent text-[200px] leading-none text-white/[0.04] md:text-[300px]"
            aria-hidden="true"
          >
            கற்றல்
          </span>

          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#E0EBF0]/60">
            தொடர்பு · Contact
          </p>

          <h2 className="relative mx-auto mt-6 max-w-2xl text-[clamp(36px,5vw,64px)] font-medium leading-[1.05] tracking-tight text-[#F6FCFF]">
            Start learning <span className="font-accent font-semibold">this week</span>
          </h2>

          <p className="relative mx-auto mt-6 max-w-md text-base leading-relaxed text-[#E0EBF0]">
            Book a free demo class and see how concept-based learning feels. Seats are limited, so
            reach out early.
          </p>

          <div className="relative mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} variant="invert" icon={Phone}>
              Call {CONTACT.phone}
            </Button>
            <Button
              href={`https://wa.me/${CONTACT.whatsapp}`}
              variant="invert-ghost"
              icon={MessageCircle}
            >
              WhatsApp us
            </Button>
          </div>

          <p className="relative mt-12 flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-widest text-[#E0EBF0]/70">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            Anna Nagar West, Chennai
          </p>
        </div>
      </FadeIn>
    </section>
  )
}
