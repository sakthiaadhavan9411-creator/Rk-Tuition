import { CalendarCheck, ArrowDown } from 'lucide-react'
import { Button } from './Button'

const stats = [
  { value: '12+', label: 'Years of teaching' },
  { value: '6–10', label: 'CBSE classes' },
  { value: 'Concept-first', label: 'Method of learning' },
]

export function Hero() {
  return (
    <section id="top" className="border-b border-[#0D212C]/10">
      <div className="border-b border-[#0D212C]/10">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-3 font-mono text-sm uppercase tracking-[0.18em] text-[#273C46]">
          <span>Anna Nagar West · Chennai</span>
          <span className="hidden sm:inline">CBSE · Classes 6–10</span>
          <span>தமிழ்</span>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1200px] gap-12 px-6 pb-20 pt-14 lg:grid-cols-12 lg:gap-8 lg:pb-28 lg:pt-20">
        <div className="lg:col-span-7">
          <h1
            className="animate-fade-in-up text-[clamp(40px,6vw,76px)] font-medium leading-[1.02] tracking-tight text-[#051A24]"
            style={{ animationDelay: '0.1s' }}
          >
            Learn <span className="font-accent font-semibold text-maroon">தமிழ்,</span>
            <br />
            the <span className="font-accent font-semibold text-maroon">concept way.</span>
          </h1>

          <div
            className="animate-fade-in-up mt-10 flex flex-col gap-3 sm:flex-row"
            style={{ animationDelay: '0.4s' }}
          >
            <Button href="#contact" icon={CalendarCheck}>
              Book a free demo class
            </Button>
            <Button href="#curriculum" variant="secondary" icon={ArrowDown}>
              What we teach
            </Button>
          </div>

          <p
                      className="animate-fade-in-up mt-12 font-mono text-sm uppercase tracking-[0.18em] text-[#273C46]"
            style={{ animationDelay: '0.5s' }}
          >
            Small batches · Clear concepts · Values that last
          </p>

          <div
            className="animate-fade-in-up mt-12 border-t border-[#0D212C]/10"
            style={{ animationDelay: '0.55s' }}
          >
            <div className="grid grid-cols-2">
              {stats.slice(0, 2).map((stat, i) => (
                <div
                  key={stat.label}
                  className={`flex flex-col items-start gap-2 py-7 ${i > 0 ? 'border-l border-[#0D212C]/10 pl-6 md:pl-8' : 'pr-6'}`}
                >
                  <span className="whitespace-nowrap font-accent text-[28px] font-semibold leading-none tracking-tight text-[#051A24] md:text-[36px]">
                    {stat.value}
                  </span>
                  <span className="font-mono text-sm uppercase leading-snug tracking-widest text-[#273C46] whitespace-nowrap">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex flex-col items-start gap-2 border-t border-[#0D212C]/10 py-7">
                  <span className="whitespace-nowrap font-accent text-[28px] font-semibold leading-none tracking-tight text-maroon md:text-[36px]">
                    {stats[2].value}
                  </span>
                  <span className="font-mono text-sm uppercase leading-snug tracking-widest text-[#273C46] whitespace-nowrap">
                    {stats[2].label}
                  </span>
            </div>
          </div>
        </div>

        <div className="relative lg:col-span-5">
          <div
            className="animate-fade-in-up relative"
            style={{ animationDelay: '0.35s' }}
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl">
              <img
                src="/thiruvalluvar.png"
                alt="Thiruvalluvar"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <span
                className="pointer-events-none absolute bottom-4 right-5 select-none font-accent text-[140px] leading-none text-white/10 md:text-[180px]"
                aria-hidden="true"
              >
                தமிழ்
              </span>
            </div>
            <p className="mt-3 font-mono text-sm uppercase tracking-[0.18em] text-[#273C46]">
              Thiruvalluvar · திருவள்ளுவர்
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
