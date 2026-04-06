import NatureScene from './NatureScene'
import ScrollReveal from './ScrollReveal'

function HomeSection({ onViewStack, theme }) {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen flex-col justify-center overflow-hidden px-4 py-20 sm:px-6 sm:py-24 md:px-12 lg:px-20"
    >
      <NatureScene theme={theme} />

      <ScrollReveal className="relative z-10 space-y-3 sm:space-y-4" delay={60}>
        <h1 className="home-title max-w-4xl text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
          Java
          <span className="home-title-accent inline-block text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl align-top">
            {' '}
            + ReactJS Developer
            <br />
            <span className="ml-2 sm:ml-4 md:ml-6 lg:ml-8 xl:ml-10">/ Scalable Solutions</span>
          </span>
        </h1>
        <p className="home-lead max-w-2xl text-xs sm:text-sm md:text-base lg:text-lg leading-6 sm:leading-7">
          I build resilient backend services in Java and responsive user interfaces in
          ReactJS with clean architecture, performance, and maintainability in mind.
        </p>
        <div className="flex flex-wrap gap-2 sm:gap-3 pt-2 text-xs sm:text-xs lg:text-sm uppercase tracking-[0.25em] theme-accent">
          <span className="theme-chip rounded-full px-3 sm:px-4 py-1.5 sm:py-2">Java</span>
          <span className="theme-chip rounded-full px-3 sm:px-4 py-1.5 sm:py-2">ReactJS</span>
          <span className="theme-chip rounded-full px-3 sm:px-4 py-1.5 sm:py-2">REST APIs</span>
        </div>
      </ScrollReveal>

      <ScrollReveal
        className="absolute bottom-16 sm:bottom-20 left-4 sm:left-6 md:left-12 lg:left-20 z-10 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 md:gap-6 lg:gap-10"
        delay={200}
        y={16}
      >
        <p className="text-xs uppercase theme-muted order-2 sm:order-1">&quot;Hello, I&apos;m&quot;</p>
        <h2 className="home-name text-xl sm:text-2xl md:text-3xl lg:text-4xl order-1 sm:order-2">
          Radhe
          <br />
          <span className="ml-4 sm:ml-6 md:ml-8 lg:ml-12 xl:ml-20">Pipaliya</span>
        </h2>
      </ScrollReveal>

      <ScrollReveal className="absolute bottom-16 sm:bottom-20 right-4 sm:right-6 md:right-12 lg:right-20 z-10" delay={300} y={16}>
        <button
          type="button"
          onClick={onViewStack}
          className="theme-button group inline-flex items-center gap-2 sm:gap-3 rounded-full px-4 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm transition duration-300 hover:-translate-y-0.5 md:px-8"
        >
          View Stack
          <span className="inline-block text-base transition-transform duration-300 group-hover:translate-y-1 motion-safe:animate-bounce">⌄</span>
        </button>
      </ScrollReveal>
    </section>
  )
}

export default HomeSection
