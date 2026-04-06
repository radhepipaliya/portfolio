function QuoteCard({ quote, author, className = '' }) {
  return (
    <blockquote className={`theme-card rounded-xl px-5 py-5 shadow-lg ${className}`}>
      <p className="theme-accent text-4xl leading-none">"</p>
      <p className="theme-text -mt-3 text-sm leading-7 md:text-base">{quote}</p>
      <div className="theme-border mt-4 flex items-center justify-end border-t pt-3">
        <span className="theme-accent text-[11px] uppercase tracking-[0.2em]">{author}</span>
      </div>
    </blockquote>
  )
}

export default QuoteCard
