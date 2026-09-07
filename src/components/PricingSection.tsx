import { CalendarCheck, Info } from 'lucide-react'
import { Button } from './Button'
import { Eyebrow } from './Eyebrow'
import { FadeIn } from './FadeIn'

const prices = {
  group: '₹1,500',
  oneOnOne: '₹3,500',
}

export function PricingSection() {
  return (
    <section id="batches" className="mx-auto max-w-[1200px] scroll-mt-24 border-t border-[#0D212C]/10 px-6 py-24">
      <FadeIn delay={0.1}>
        <Eyebrow tamil="வகுப்புகள்" english="Batches" />
      </FadeIn>

      <FadeIn delay={0.2}>
        <h2 className="mt-4 text-[clamp(36px,5vw,64px)] font-medium leading-[1.05] tracking-tight text-[#051A24]">
          Batches &amp; <span className="font-accent font-semibold text-maroon">fees</span>
        </h2>
      </FadeIn>

      <div className="mt-12 grid gap-8 md:mt-16 md:grid-cols-2">
        <FadeIn delay={0.1}>
          <div className="flex h-full flex-col justify-between rounded-[28px] bg-[#051A24] p-10 md:p-12">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-medium text-[#F6FCFF]">Group Batch</h3>
                <span className="font-mono text-[11px] uppercase tracking-widest text-[#E0EBF0]/60">
                  Up to 6 students
                </span>
              </div>
              <p className="mt-4 text-base leading-relaxed text-[#E0EBF0]">
                Twice a week, one hour per class.
                <br />
                Questions, stories and real practice.
              </p>

              <div className="mt-10 flex items-baseline gap-2">
                <span className="font-accent text-4xl font-semibold tracking-tight text-[#F6FCFF] md:text-5xl">
                  {prices.group}
                </span>
                <span className="font-mono text-xs uppercase tracking-widest text-[#E0EBF0]/70">
                  per month
                </span>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-3">
              <Button href="#contact" variant="invert" icon={CalendarCheck}>
                Book a demo class
              </Button>
              <Button href="#contact" variant="invert-ghost" icon={Info}>
                Ask about batch slots
              </Button>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex h-full flex-col justify-between rounded-[28px] border border-[#0D212C]/10 bg-white p-10 md:p-12">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-medium text-[#051A24]">One-on-One</h3>
                <span className="font-mono text-[11px] uppercase tracking-widest text-[#273C46]/60">
                  Personal attention
                </span>
              </div>
              <p className="mt-4 text-base leading-relaxed text-[#273C46]">
                Flexible timings, individual pace.
                <br />
                Doubt-clearing on demand.
              </p>

              <div className="mt-10 flex items-baseline gap-2">
                <span className="font-accent text-4xl font-semibold tracking-tight text-[#051A24] md:text-5xl">
                  {prices.oneOnOne}
                </span>
                <span className="font-mono text-xs uppercase tracking-widest text-[#273C46]/70">
                  per month
                </span>
              </div>
            </div>

            <div className="mt-10">
              <Button href="#contact" icon={CalendarCheck}>
                Book a demo class
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
