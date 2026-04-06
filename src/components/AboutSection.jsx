import QuoteCard from './QuoteCard'
import ScrollReveal from './ScrollReveal'

function AboutSection() {
  return (
    <section id="about" className="flex min-h-screen items-center bg-(--app-surface-strong) px-4 py-16 sm:py-20 md:py-24 lg:py-32 sm:px-6 md:px-12 lg:px-20">
      <div className="grid w-full grid-cols-1 gap-6 sm:gap-8 md:gap-10 lg:gap-12 md:grid-cols-2">
        <ScrollReveal className="relative" delay={80}>
          <img
            src=" "
            alt="Backend engineer profile (Updating soon)"
            className="rounded-sm border border-(--app-border) grayscale transition duration-500 hover:grayscale-0 w-full"
          />
        </ScrollReveal>
        <ScrollReveal className="space-y-4 sm:space-y-5 md:space-y-6" delay={170}>
          <h3 className="text-xs sm:text-sm md:text-base uppercase tracking-widest text-(--app-accent)">// About Me</h3>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed md:leading-relaxed">
            I design backend systems that are dependable, easy to scale, and simple to
            maintain. My focus is on Java services, ReactJS interfaces, APIs, database design,
            auth flows, and deployment-ready code.
          </p>
          <ScrollReveal className="mt-8 sm:mt-10 md:mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:gap-5" delay={260} y={14}>
            <div className="border-t border-(--app-border) pt-3 sm:pt-4 md:pt-5">
              <span className="text-[10px] sm:text-xs md:text-sm text-(--app-muted) block mb-1">SPECIALTY</span>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-tight">Java & Microservices</p>
            </div>
            <div className="border-t border-(--app-border) pt-3 sm:pt-4 md:pt-5">
              <span className="text-[10px] sm:text-xs md:text-sm text-(--app-muted) block mb-1">FOCUS</span>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-tight">Performance & Reliability</p>
            </div>
            <div className="border-t border-(--app-border) pt-3 sm:pt-4 md:pt-5">
              <span className="text-[10px] sm:text-xs md:text-sm text-(--app-muted) block mb-1">TOOLS</span>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-tight">Java, ReactJS, PostgreSQL</p>
            </div>
            <div className="border-t border-(--app-border) pt-3 sm:pt-4 md:pt-5">
              <span className="text-[10px] sm:text-xs md:text-sm text-(--app-muted) block mb-1">DELIVERY</span>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-tight">Cloud & CI/CD</p>
            </div>
          </ScrollReveal>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default AboutSection
