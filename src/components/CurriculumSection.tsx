import { ArrowUpRight } from 'lucide-react'
import { Eyebrow } from './Eyebrow'
import { FadeIn } from './FadeIn'

const topics = [
  { tamil: 'இலக்கணம்', label: 'Grammar fundamentals' },
  { tamil: 'இலக்கியம்', label: 'Prose, poetry & appreciation' },
  { tamil: 'கட்டுரை', label: 'Composition & essay writing' },
  { tamil: 'வாசிப்பு', label: 'Reading comprehension' },
  { tamil: 'பேச்சு', label: 'Oral & spoken Tamil' },
  { tamil: 'தேர்வு', label: 'CBSE board exam patterns' },
]

export function CurriculumSection() {
  return (
    <section id="curriculum" className="mx-auto max-w-[1200px] px-6 py-24">
      <FadeIn delay={0.1}>
        <Eyebrow tamil="பாடத்திட்டம்" english="Curriculum" />
      </FadeIn>

      <FadeIn delay={0.2}>
        <h2 className="mt-4 text-[clamp(36px,5vw,64px)] font-medium leading-[1.05] tracking-tight text-[#051A24]">
          What we <span className="font-accent font-semibold text-maroon">teach</span>
        </h2>
      </FadeIn>

      <div className="mt-12 md:mt-16">
        {topics.map((topic, i) => (
          <FadeIn key={topic.label} delay={0.1 + i * 0.08}>
            <div className="group grid cursor-pointer grid-cols-12 items-baseline gap-4 border-t border-[#0D212C]/10 py-7 transition-colors duration-300 hover:bg-[#0D212C]/[0.02] last:border-b">
              <span className="col-span-2 font-mono text-xs tracking-widest text-[#273C46] md:col-span-1">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="col-span-10 font-accent text-2xl font-semibold tracking-tight text-maroon md:col-span-4 md:text-3xl">
                {topic.tamil}
              </span>
              <span className="col-span-10 col-start-3 text-base text-[#051A24]/70 md:col-span-5 md:col-start-auto">
                {topic.label}
              </span>
              <span className="col-span-1 hidden justify-self-end md:flex">
                <ArrowUpRight
                  className="h-5 w-5 text-[#051A24] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  aria-hidden="true"
                />
              </span>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
