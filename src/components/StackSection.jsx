import ScrollReveal from './ScrollReveal'

function StackSection() {
  const stacks = [
    'Java',
    'Spring Boot',
    'REST APIs',
    'ReactJS',
    'PostgreSQL',
    'MongoDB',
    'Redis',
    'Docker',
    'CI/CD',
  ]

  return (
    <section id="stack" className="theme-surface-strong flex min-h-screen items-center px-4 py-16 sm:py-20 md:py-24 lg:py-32 sm:px-6 md:px-12 lg:px-20">
      <div className="grid w-full grid-cols-1 gap-6 sm:gap-8 md:gap-10 lg:gap-12 md:grid-cols-12">
        <ScrollReveal className="md:col-span-4" delay={80}>
          <p className="text-xs sm:text-sm uppercase tracking-widest theme-accent">// Tech Stack</p>
          <h2 className="mt-3 sm:mt-4 md:mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight">
            Tools I use to build reliable systems
          </h2>
          <p className="mt-4 sm:mt-5 md:mt-6 max-w-md text-xs sm:text-sm md:text-base leading-6 sm:leading-7 theme-muted">
            Java on the backend, ReactJS on the frontend, and infrastructure choices that keep
            services stable, observable, and easy to ship.
          </p>
        </ScrollReveal>

        <ScrollReveal className="md:col-span-8" delay={180}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-5">
            {stacks.map((item, index) => (
              <ScrollReveal
                key={item}
                className="theme-card theme-accent-strong rounded-lg sm:rounded-xl px-3 sm:px-4 py-3 sm:py-4 md:py-5 text-center text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.25em] shadow-lg transition hover:scale-105"
                delay={index * 55}
                y={14}
              >
                {item}
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default StackSection
