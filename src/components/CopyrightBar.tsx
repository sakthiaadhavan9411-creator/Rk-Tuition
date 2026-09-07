export function CopyrightBar() {
  return (
    <div className="border-t border-[#0D212C]/10">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-2 px-6 py-6 font-mono text-[11px] uppercase tracking-[0.18em] text-[#273C46] sm:flex-row">
        <p>© {new Date().getFullYear()} RK Tamil Tuition</p>
        <p>Anna Nagar West · Chennai · தமிழ்</p>
      </div>
    </div>
  )
}
