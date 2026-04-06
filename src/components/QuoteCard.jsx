function QuoteCard({ quote, author, className = '' }) {
  return (
    <blockquote className={`theme-card rounded-lg sm:rounded-xl px-3 sm:px-4 md:px-5 py-3 sm:py-4 md:py-5 shadow-lg ${className}`}>
      <p className="theme-accent text-2xl sm:text-3xl md:text-4xl leading-none">"</p>
      <p className="theme-text -mt-2 sm:mt-0 md:-mt-3 text-xs sm:text-sm md:text-base leading-6 sm:leading-7">{quote}</p>
      <div className="theme-border mt-3 sm:mt-4 md:mt-5 flex items-center justify-end border-t pt-2 sm:pt-3 md:pt-4">
        <span className="theme-accent text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-[0.2em]">{author}</span>
      </div>
    </blockquote>
  )
}

export default QuoteCard
