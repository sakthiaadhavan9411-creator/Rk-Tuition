import { Eyebrow } from './Eyebrow'
import { FadeIn } from './FadeIn'
import { Button } from './Button'
import { CalendarCheck } from 'lucide-react'

const outcomes = [
  {
    number: '01',
    tamil: 'இலக்கணத்தைப் புரிந்து கற்க',
    english: 'Understand Grammar Clearly',
    label: 'புரிதல்',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=500&h=600&fit=crop',
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
    <section id="curriculum" className="mx-auto max-w-[1200px] px-6 py-24">
      <FadeIn delay={0.1}>
        <Eyebrow tamil="பாடத்திட்டம்" english="Curriculum" />
      </FadeIn>

      <FadeIn delay={0.2}>
        <h2 className="mt-4 text-[clamp(36px,5vw,64px)] font-medium leading-[1.05] tracking-tight text-[#051A24]">
          What your <span className="font-accent font-semibold text-maroon">child gains.</span>
        </h2>
        <p className="mt-3 font-accent text-sm tracking-widest text-[#273C46] italic">
          புரிதலிலிருந்து முன்னேற்றம் வரை।
        </p>
      </FadeIn>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-5">
        {outcomes.map((outcome, i) => (
          <FadeIn key={outcome.number} delay={0.1 + i * 0.08}>
            <div className="group flex flex-col overflow-hidden rounded-lg transition-all duration-300 hover:shadow-lg">
              {/* Image */}
              <div className="relative overflow-hidden bg-[#0D212C]/5">
                <img
                  src={outcome.image}
                  alt={outcome.alt}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3 bg-white px-5 py-6 md:px-6 md:py-7">
                <span className="font-mono text-xs uppercase tracking-widest text-[#273C46]">
                  {outcome.number}
                </span>

                <div className="flex flex-col gap-2">
                  <h3 className="font-accent text-base font-semibold leading-tight text-maroon md:text-lg">
                    {outcome.tamil}
                  </h3>
                  <p className="text-sm font-medium text-[#051A24] md:text-base">
                    {outcome.english}
                  </p>
                </div>

                <div className="mt-1 h-px w-6 bg-gradient-to-r from-maroon to-transparent" />

                <p className="text-xs uppercase tracking-widest text-[#273C46]/70">
                  {outcome.label}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* CTA Section */}
      <FadeIn delay={0.6}>
        <div className="mt-20 rounded-2xl bg-[#F9F6F1] px-8 py-12 md:py-16 text-center">
          <h3 className="text-2xl font-medium text-[#051A24] md:text-3xl">
            From understanding to <span className="font-accent font-semibold text-maroon">excellence.</span>
          </h3>
          <p className="mt-2 font-accent text-sm tracking-widest text-[#273C46] italic">
            புரிதலிலிருந்து சிறப்பை நோக்கி।
          </p>
          <p className="mt-4 text-xs uppercase tracking-widest text-[#273C46]">
            உங்கள் குழந்தையின் தமிழ் பயணத்தை இன்று தொடங்குங்கள்।
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="#contact" icon={CalendarCheck}>
              Book a free demo class
            </Button>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
