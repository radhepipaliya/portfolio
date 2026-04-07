import NatureScene from './NatureScene'
import ScrollReveal from './ScrollReveal'

function HomeSection({ onViewStack, theme }) {
  const isLightTheme = theme === 'light'

  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen flex-col justify-between overflow-hidden px-4 pt-24 pb-16 sm:px-6 sm:pt-28 sm:pb-20 md:px-12 md:pt-32 md:pb-24 lg:px-20 lg:pb-28"
    >
      <NatureScene theme={theme} />

      <ScrollReveal className="relative z-10 space-y-3 sm:space-y-4 flex-1 flex flex-col justify-center" delay={60}>
        <h1 className="home-title max-w-4xl text-2xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl leading-tight">
          Java
          <span className="home-title-accent inline-block text-[10px] sm:text-sm md:text-lg lg:text-xl xl:text-2xl align-top">
            {' '}
            + ReactJS Developer
            <br />
            <span className="ml-1 sm:ml-3 md:ml-6 lg:ml-8 xl:ml-10">/ Scalable Solutions</span>
          </span>
        </h1>
        <p className="home-lead max-w-2xl text-xs sm:text-sm md:text-base lg:text-lg leading-5 sm:leading-7">
          I build resilient backend services in Java and responsive user interfaces in
          ReactJS with clean architecture, performance, and maintainability in mind.
        </p>
        <div className="flex flex-wrap gap-2 sm:gap-3 pt-2 text-[9px] sm:text-xs lg:text-sm uppercase tracking-[0.25em] theme-accent">
          <span className="theme-chip home-skill-chip rounded-full px-2.5 sm:px-4 py-1 sm:py-2">Java</span>
          <span className="theme-chip home-skill-chip rounded-full px-2.5 sm:px-4 py-1 sm:py-2">ReactJS</span>
          <span className="theme-chip home-skill-chip rounded-full px-2.5 sm:px-4 py-1 sm:py-2">REST APIs</span>
        </div>
      </ScrollReveal>

      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 md:gap-10 mt-8 sm:mt-12">
        <ScrollReveal
          className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 md:gap-6 lg:gap-10 order-2 sm:order-1"
          delay={200}
          y={16}
        >
          <p
            className={`text-[9px] sm:text-xs uppercase ${
              isLightTheme ? 'text-black' : 'theme-accent'
            }`}
          >
            &quot;Hello, I&apos;m&quot;
          </p>
          <h2
            className={`home-name text-lg sm:text-2xl md:text-3xl lg:text-4xl ${
              isLightTheme ? 'text-slate-900' : 'text-slate-100'
            }`}
          >
            Radhe
            <br />
            <span className="ml-2 sm:ml-4 md:ml-8 lg:ml-12 xl:ml-20">Pipaliya</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal className="order-1 sm:order-2" delay={300} y={16}>
          <button
            type="button"
            onClick={onViewStack}
            className={`home-cta group inline-flex items-center gap-2 sm:gap-3 rounded-full px-3 sm:px-6 py-1 sm:py-2 text-xs sm:text-sm transition duration-300 hover:-translate-y-0.5 md:px-8 ${
              isLightTheme
                ? 'border border-slate-300 bg-white/90 text-slate-900 hover:bg-slate-100'
                : 'theme-button'
            }`}
          >
            View Stack
            <span
              className={`home-cta-arrow inline-block text-base transition-transform duration-300 ${
                isLightTheme ? 'text-slate-700' : 'text-(--app-accent)'
              }`}
            >
              ⌄
            </span>
          </button>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default HomeSection
