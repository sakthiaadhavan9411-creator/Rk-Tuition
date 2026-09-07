const items = [
  { tamil: 'இலக்கணம்', english: 'Grammar' },
  { tamil: 'இலக்கியம்', english: 'Literature' },
  { tamil: 'பேச்சு', english: 'Spoken Tamil' },
  { tamil: 'எழுத்து', english: 'Writing' },
  { tamil: 'மதிப்புகள்', english: 'Values' },
  { tamil: 'தேர்வு', english: 'Exam prep' },
]

function Row() {
  return (
    <div className="flex shrink-0 items-center">
      {items.map((item) => (
        <span key={item.tamil} className="flex items-center">
          <span className="whitespace-nowrap text-sm font-medium text-[#051A24]">{item.english}</span>
          <span className="mx-6 h-1 w-1 rounded-full bg-maroon/30" aria-hidden="true" />
          <span className="whitespace-nowrap font-accent text-lg text-maroon">{item.tamil}</span>
          <span className="mx-6 h-px w-10 bg-maroon/20" aria-hidden="true" />
        </span>
      ))}
    </div>
  )
}

export function Marquee() {
  return (
    <div className="overflow-hidden py-6">
      <div className="animate-marquee flex w-max items-center">
        <Row />
        <Row />
      </div>
    </div>
  )
}
