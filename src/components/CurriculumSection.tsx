import { Eyebrow } from './Eyebrow'
import { FadeIn } from './FadeIn'

// Rebuild trigger - Curriculum redesign with premium template

const outcomes = [
  {
    number: '01',
    english: 'Understand Grammar Clearly',
    image: '/grammar-card.png',
    alt: 'Student understanding Tamil grammar'
  },
  {
    number: '02',
    english: 'Experience the Beauty of Poetry & Prose',
    image: '/poetry-card.png',
    alt: 'Tamil literature and poetry'
  },
  {
    number: '03',
    english: 'Express Thoughts with Clarity',
    image: '/express-card.png',
    alt: 'Student writing Tamil composition'
  },
  {
    number: '04',
    english: 'Speak Tamil Confidently',
    image: '/speak-card.png',
    alt: 'Student speaking confidently in Tamil'
  },
  {
    number: '05',
    english: 'Excel in Marks with Confidence',
    image: '/achievement-card.png',
    alt: 'Student celebrating academic success'
  }
]

export function CurriculumSection() {
  return (
    <section id="curriculum" className="relative bg-white py-24">
      {/* Decorative background elements */}
      <div className="absolute left-0 top-20 opacity-10 text-maroon">
        <div className="text-6xl">❀</div>
      </div>
      <div className="absolute right-0 bottom-40 opacity-5 text-maroon">
        <div className="text-8xl">✤</div>
      </div>

      <div className="mx-auto max-w-[1400px] px-6">
        <FadeIn delay={0.1}>
          <Eyebrow tamil="பாடத்திட்டம்" english="Curriculum" />
        </FadeIn>

        <FadeIn delay={0.2}>
          <h2 className="mt-6 text-[clamp(48px,5vw,72px)] font-medium leading-[1.05] tracking-tight text-[#051A24]">
            What your <span className="font-accent font-bold text-maroon">child gains.</span>
          </h2>
          <p className="mt-4 font-accent text-base tracking-widest text-maroon italic">
            புரிதலிலிருந்து முன்னேற்றம் வரை।
          </p>
          
        </FadeIn>

        {/* Cards Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {outcomes.map((outcome, i) => (
            <FadeIn key={outcome.number} delay={0.1 + i * 0.08}>
              <div className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px]">
                {/* Image */}
                <div className="relative overflow-hidden bg-[#F0EBE3]">
                  <img
                    src={outcome.image}
                    alt={outcome.alt}
                    className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-4 px-5 py-6 md:px-6 md:py-8">
                  {/* Number */}
                  <span className="font-mono text-xs font-semibold tracking-widest text-[#051A24]">
                    {outcome.number}
                  </span>

                  <div>
                    <p className="text-sm font-medium text-[#051A24]">
                      {outcome.english}
                    </p>
                  </div>

                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
