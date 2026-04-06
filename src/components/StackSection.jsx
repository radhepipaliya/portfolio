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
    <section id="stack" className="theme-surface-strong flex min-h-screen items-center px-6 py-20 md:px-20">
      <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-12">
        <ScrollReveal className="md:col-span-4" delay={80}>
          <p className="text-sm uppercase tracking-widest theme-accent">// Tech Stack</p>
          <h2 className="mt-4 text-4xl font-light md:text-6xl">
            Tools I use to build reliable systems
          </h2>
          <p className="mt-6 max-w-md text-sm leading-7 theme-muted md:text-base">
            Java on the backend, ReactJS on the frontend, and infrastructure choices that keep
            services stable, observable, and easy to ship.
          </p>
        </ScrollReveal>

        <ScrollReveal className="md:col-span-8" delay={180}>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {stacks.map((item, index) => (
              <ScrollReveal
                key={item}
                className="theme-card theme-accent-strong rounded-xl px-4 py-5 text-center text-sm uppercase tracking-[0.25em] shadow-lg transition"
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
