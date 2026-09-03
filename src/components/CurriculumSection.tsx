import { Eyebrow } from './Eyebrow'
import { FadeIn } from './FadeIn'
import { Button } from './Button'
import { CalendarCheck, Flower2 } from 'lucide-react'

// Rebuild trigger - Curriculum redesign with premium template

const outcomes = [
  {
    number: '01',
    tamil: 'இலக்கணத்தைப் புரிந்து கற்க',
    english: 'Understand Grammar Clearly',
    label: 'புரிதல்',
    image: '/grammar-card.png',
    alt: 'Student understanding Tamil grammar'
  },
  {
    number: '02',
    tamil: 'கவிதையையும் உரைநடையையும் ரசிக்க',
    english: 'Experience the Beauty of Poetry & Prose',
    label: 'ரசனை',
    image: 'https://images.unsplash.com/photo-1507842217343-583f20270319?w=500&h=600&fit=crop',
    alt: 'Tamil literature and poetry'
  },
  {
    number: '03',
    tamil: 'எண்ணங்களைத் தெளிவாக வெளிப்படுத்த',
    english: 'Express Thoughts with Clarity',
    label: 'வெளிப்பாடு',
    image: 'https://images.unsplash.com/photo-1456406546174-1ec99650947d?w=500&h=600&fit=crop',
    alt: 'Student writing Tamil composition'
  },
  {
    number: '04',
    tamil: 'தன்னம்பிக்கையுடன் தமிழில் பேச',
    english: 'Speak Tamil Confidently',
    label: 'தன்னம்பிக்கை',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=600&fit=crop',
    alt: 'Student speaking confidently in Tamil'
  },
  {
    number: '05',
    tamil: 'நம்பிக்கையுடன் அதிக மதிப்பெண்கள் பெற',
    english: 'Excel in Marks with Confidence',
    label: 'சாதனை',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da068326?w=500&h=600&fit=crop',
    alt: 'Student celebrating academic success'
  }
]

export function CurriculumSection() {
  return (
    <section id="curriculum" className="relative bg-[#FAF8F3] py-24">
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
          <h2 className="mt-6 text-center text-[clamp(48px,5vw,72px)] font-medium leading-[1.05] tracking-tight text-[#051A24]">
            What your <span className="font-accent font-bold text-maroon">child gains.</span>
          </h2>
          <p className="mt-4 text-center font-accent text-base tracking-widest text-maroon italic">
            புரிதலிலிருந்து முன்னேற்றம் வரை।
          </p>
          
          {/* Gold lotus divider */}
          <div className="mt-6 flex justify-center">
            <div className="flex items-center gap-4">
              <div className="h-px w-6 bg-maroon/30"></div>
              <Flower2 className="h-5 w-5 text-maroon" />
              <div className="h-px w-6 bg-maroon/30"></div>
            </div>
          </div>
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

                  {/* Tamil & English */}
                  <div className="flex flex-col gap-3">
                    <h3 className="font-accent text-base font-bold leading-tight text-maroon md:text-lg">
                      {outcome.tamil}
                    </h3>
                    <p className="text-sm font-medium text-[#051A24]">
                      {outcome.english}
                    </p>
                  </div>

                  {/* Gold divider */}
                  <div className="my-1 flex items-center gap-2">
                    <div className="h-px w-4 bg-gradient-to-r from-maroon to-transparent"></div>
                    <div className="h-1 w-1 rounded-full bg-maroon"></div>
                  </div>

                  {/* Label */}
                  <p className="text-xs font-semibold uppercase tracking-widest text-maroon">
                    {outcome.label}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* CTA Section */}
        <FadeIn delay={0.6}>
          <div className="mt-20 rounded-2xl bg-[#F9F6F1] px-6 py-12 md:px-12 md:py-16">
            <div className="flex flex-col items-center gap-6">
              {/* Left decoration */}
              <div className="text-maroon/40">
                <Flower2 className="h-8 w-8" />
              </div>

              {/* Main content */}
              <div className="text-center">
                <h3 className="text-2xl font-medium text-[#051A24] md:text-4xl">
                  From understanding to <span className="font-accent font-bold text-maroon">excellence.</span>
                </h3>
                <p className="mt-3 font-accent text-sm tracking-widest text-maroon italic">
                  புரிதலிலிருந்து சிறப்பை நோக்கி।
                </p>
                <p className="mt-4 text-xs font-medium uppercase tracking-widest text-[#051A24]/70">
                  உங்கள் குழந்தையின் தமிழ் பயணத்தை இன்று தொடங்குங்கள்.
                </p>
              </div>

              {/* CTA Button */}
              <div className="mt-6">
                <Button href="#contact" icon={CalendarCheck} className="!px-8 !py-3">
                  Book a free demo class
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
