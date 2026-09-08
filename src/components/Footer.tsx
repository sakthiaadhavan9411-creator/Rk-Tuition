import { CalendarCheck } from 'lucide-react'
import { Button } from './Button'

const explore = [
  { label: 'Curriculum', href: '#curriculum' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Batches', href: '#batches' },
]

const connect = [
  { label: 'WhatsApp', href: 'https://wa.me/919363030200' },
]

export function Footer() {
  return (
    <footer className="border-t border-[#0D212C]/10">
      <div className="mx-auto grid max-w-[960px] gap-6 px-6 py-16 md:grid-cols-4">
        <div>
          <a href="#top" className="flex items-center gap-3">
            <span className="font-accent text-xl font-semibold tracking-tight text-maroon">RK</span>
            <span className="h-4 w-px bg-[#0D212C]/15" aria-hidden="true" />
            <span className="text-sm font-medium text-maroon">Tamil Tuition</span>
          </a>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#273C46]">
            Concept-based Tamil classes for CBSE students of classes 6 to 10, taught with strong
            moral values.
          </p>
          <div className="mt-6">
            <Button href="https://wa.me/919363030200" icon={CalendarCheck}>
              Book a demo class
            </Button>
          </div>
        </div>

        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#273C46]">Explore</p>
          <ul className="mt-5 flex flex-col gap-3">
            {explore.map((link) => (
              <li key={link.href + link.label}>
                <a href={link.href} className="text-base text-[#051A24] transition hover:text-maroon">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#273C46]">Connect</p>
          <ul className="mt-5 flex flex-col gap-3">
            {connect.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-base text-[#051A24] transition hover:text-maroon"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#273C46]">Contact</p>
          <ul className="mt-5 flex flex-col gap-3 text-base text-[#051A24]">
            <li>Anna Nagar West,</li>
            <li>Chennai</li>
            <li className="text-sm text-[#273C46]">+91 93630 30200</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
