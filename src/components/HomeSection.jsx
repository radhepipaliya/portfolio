import NatureScene from './NatureScene'
import ScrollReveal from './ScrollReveal'

function HomeSection({ onViewStack, theme }) {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-20 md:px-20"
    >
      <NatureScene theme={theme} />

      <ScrollReveal className="relative z-10 space-y-4" delay={60}>
        <h1 className="home-title max-w-4xl text-5xl md:text-8xl">
          Java
          <span className="home-title-accent inline-block text-base align-top md:text-2xl">
            {' '}
            + ReactJS Developer
            <br />
            <span className="ml-4 md:ml-10">/ Scalable Solutions</span>
          </span>
        </h1>
        <p className="home-lead max-w-2xl text-sm leading-7 md:text-base">
          I build resilient backend services in Java and responsive user interfaces in
          ReactJS with clean architecture, performance, and maintainability in mind.
        </p>
        <div className="flex flex-wrap gap-3 pt-2 text-xs uppercase tracking-[0.25em] theme-accent">
          <span className="theme-chip rounded-full px-4 py-2">Java</span>
          <span className="theme-chip rounded-full px-4 py-2">ReactJS</span>
          <span className="theme-chip rounded-full px-4 py-2">REST APIs</span>
        </div>
      </ScrollReveal>

      <ScrollReveal
        className="absolute bottom-20 left-6 z-10 flex items-center space-x-4 md:left-20 md:space-x-10"
        delay={200}
        y={16}
      >
        <p className="text-xs uppercase theme-muted">&quot;Hello, I&apos;m&quot;</p>
        <h2 className="home-name text-2xl md:text-4xl">
          Radhe
          <br />
          <span className="ml-8 md:ml-20">Pipaliya</span>
        </h2>
      </ScrollReveal>

      <ScrollReveal className="absolute bottom-20 right-6 z-10 md:right-20" delay={300} y={16}>
        <button
          type="button"
          onClick={onViewStack}
          className="theme-button group inline-flex items-center gap-3 rounded-full px-6 py-2 transition duration-300 hover:-translate-y-0.5 md:px-8"
        >
          View Stack
          <span className="inline-block text-base transition-transform duration-300 group-hover:translate-y-1 motion-safe:animate-bounce">⌄</span>
        </button>
      </ScrollReveal>
    </section>
  )
}

export default HomeSection
