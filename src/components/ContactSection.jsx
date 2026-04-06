import QuoteCard from './QuoteCard'
import ScrollReveal from './ScrollReveal'

function ContactSection() {
  return (
    <section
      id="contact"
      className="flex min-h-screen flex-col items-center justify-center px-4 py-16 sm:py-20 md:py-24 lg:py-32 sm:px-6 md:px-12 lg:px-20 text-center"
    >
      <ScrollReveal delay={80}>
        <h1 className="mb-6 sm:mb-8 md:mb-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-tight">Let&apos;s Build</h1>
      </ScrollReveal>
      <ScrollReveal delay={140}>
        <p className="max-w-2xl text-xs sm:text-sm md:text-base uppercase tracking-widest text-(--app-muted) leading-6 px-2">
          If you need a backend that is stable, secure, and built to scale, I&apos;m ready to help.
        </p>
      </ScrollReveal>

      <ScrollReveal
        className="mt-12 sm:mt-16 md:mt-20 flex flex-col gap-6 sm:gap-8 border-t border-(--app-border) pt-8 sm:pt-10 md:pt-12 text-xs sm:text-sm md:text-base lg:flex-row lg:justify-center lg:gap-12 md:gap-0"
        delay={220}
      >
        <div className="min-w-max">
          <p className="text-(--app-muted) text-[10px] sm:text-xs uppercase tracking-widest mb-1 sm:mb-2">EMAIL</p>
          <p className="text-sm sm:text-base md:text-lg break-all">radhe.pipaliya2025@gmail.com</p>
        </div>
        <div className="min-w-max">
          <p className="text-(--app-muted) text-[10px] sm:text-xs uppercase tracking-widest mb-1 sm:mb-2">SOCIAL</p>
          <p className="text-sm sm:text-base md:text-lg">@radhepipaliya</p>
        </div>
        <div className="min-w-max">
          <p className="text-(--app-muted) text-[10px] sm:text-xs uppercase tracking-widest mb-1 sm:mb-2">SERVICE</p>
          <p className="text-sm sm:text-base md:text-lg">Java, ReactJS, APIs</p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={320}>
        <QuoteCard
          className="mt-12 sm:mt-14 md:mt-16 max-w-3xl text-left"
          quote="Software Developer - Without a doubt, a good developer is honest with their code."
          author="Rohit Adhav (WEB G.O.A.T)"
        />
      </ScrollReveal>
    </section>
  )
}

export default ContactSection
