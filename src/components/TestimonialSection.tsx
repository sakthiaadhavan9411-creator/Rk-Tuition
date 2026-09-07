import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { Eyebrow } from './Eyebrow'
import { FadeIn } from './FadeIn'
import { PhotoPlaceholder } from './PhotoPlaceholder'

interface Testimonial {
  quote: string
  name: string
  role: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      'One of the best places for Tamil tuition. She brings the best out of children and makes the language very easy. I strongly recommend this place for Tamil tuition.',
    name: 'Parent',
    role: 'Google review',
  },
  {
    quote:
      'Good tutor. She makes learning Tamil easy and engaging. My daughter has gained immense confidence in speaking and reading. Highly recommended.',
    name: 'Parent',
    role: 'Google review',
  },
  {
    quote:
      'Ms. Kavitha has been an amazing Tamil teacher for both my twin sons. One of them really struggled with Tamil at first, but the way she teaches made the language so much easier to understand and enjoy. Her patience, dedication and unique teaching style helped him gain confidence, and he went on to score 89/100 in his Class 10 board exams. We are truly grateful for all her support.',
    name: 'Parent of twin sons',
    role: 'Google review',
  },
]

const AUTO_ADVANCE_MS = 3000

export function TestimonialSection() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const goPrev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)
  const goNext = () => setIndex((i) => (i + 1) % testimonials.length)

  useEffect(() => {
    if (paused) return
    const timer = setInterval(goNext, AUTO_ADVANCE_MS)
    return () => clearInterval(timer)
  }, [paused])

  const current = testimonials[index]

  return (
    <section id="reviews" className="mx-auto max-w-[1200px] scroll-mt-24 border-t border-[#0D212C]/10 px-6 py-24">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <FadeIn delay={0.1}>
            <Eyebrow tamil="மதிப்புரைகள்" english="Reviews" />
          </FadeIn>
          <FadeIn delay={0.2}>
            <h2 className="mt-4 text-[clamp(36px,5vw,64px)] font-medium leading-[1.05] tracking-tight text-[#051A24]">
              What <span className="font-accent font-semibold text-maroon">parents</span> say
            </h2>
          </FadeIn>
        </div>
        <FadeIn delay={0.3}>
          <div className="flex items-center gap-3">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-maroon text-maroon" aria-hidden="true" />
              ))}
            </div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#273C46]">
              5.0 on Google
            </span>
          </div>
        </FadeIn>
      </div>

      <FadeIn delay={0.4}>
        <div
          className="mt-12 md:mt-16"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            key={index}
            className="animate-fade-in-up rounded-[28px] border border-[#0D212C]/10 px-7 py-10 md:px-12 md:py-14"
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M10.5 5.5C6.9 6.9 4.5 9.8 4.5 13.5c0 2.8 1.7 5 4.2 5 2.2 0 3.8-1.6 3.8-3.7 0-2-1.4-3.4-3.3-3.4-.4 0-.8.1-1 .2.3-1.8 2-3.8 3.6-4.7l-1.3-1.4Zm9 0c-3.6 1.4-6 4.3-6 8 0 2.8 1.7 5 4.2 5 2.2 0 3.8-1.6 3.8-3.7 0-2-1.4-3.4-3.3-3.4-.4 0-.8.1-1 .2.3-1.8 2-3.8 3.6-4.7l-1.3-1.4Z"
                fill="#7A1F2B"
              />
            </svg>

            <p className="mt-6 max-w-3xl text-xl leading-relaxed text-[#051A24] md:text-2xl">
              “{current.quote}”
            </p>

            <div className="mt-10 flex items-center gap-4">
              <PhotoPlaceholder className="h-12 w-12 rounded-full" label="" />
              <div>
                <p className="text-sm font-medium text-[#051A24]">{current.name}</p>
                <p className="font-mono text-xs uppercase tracking-widest text-[#273C46]">
                  {current.role}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous review"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#0D212C]/15 transition hover:bg-maroon hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Go to review ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === index ? 'w-8 bg-[#051A24]' : 'w-1.5 bg-[#0D212C]/20 hover:bg-[#0D212C]/40'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={goNext}
              aria-label="Next review"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#0D212C]/15 transition hover:bg-maroon hover:text-white"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
