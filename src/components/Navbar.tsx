import { Button } from './Button'

const links = [
  { label: 'Curriculum', href: '#curriculum' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Batches', href: '#batches' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#0D212C]/10 bg-white/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-3">
          <span className="font-accent text-xl font-semibold tracking-tight text-[#051A24]">RK</span>
          <span className="h-4 w-px bg-[#0D212C]/15" aria-hidden="true" />
          <span className="text-sm font-medium text-[#051A24]">Tamil Tuition</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-sm uppercase tracking-widest text-[#051A24]/60 transition hover:text-maroon"
            >
              {link.label}
            </a>
          ))}
        </div>

        <Button href="#contact" className="!px-5 !py-2 !text-sm">
          Book a demo
        </Button>
      </nav>
    </header>
  )
}
