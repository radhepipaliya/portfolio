import QuoteCard from './QuoteCard'
import ScrollReveal from './ScrollReveal'

function AboutSection() {
  return (
    <section id="about" className="flex min-h-screen items-center bg-(--app-surface-strong) p-6 md:p-20">
      <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2">
        <ScrollReveal className="relative" delay={80}>
          <img
            src=" "
            alt="Backend engineer profile (Updating soon)"
            className="rounded-sm border border-(--app-border) grayscale transition duration-500 hover:grayscale-0"
          />
        </ScrollReveal>
        <ScrollReveal className="space-y-6" delay={170}>
          <h3 className="text-sm uppercase tracking-widest text-(--app-accent)">// About Me</h3>
          <p className="text-xl leading-relaxed md:text-2xl">
            I design backend systems that are dependable, easy to scale, and simple to
            maintain. My focus is on Java services, ReactJS interfaces, APIs, database design,
            auth flows, and deployment-ready code.
          </p>
          {/* <QuoteCard
            quote="Software Developer - Without a doubt, a good developer is honest with their code."
            author="Rohit Adhav - (WEB G.O.A.T)"
          /> */}
          <ScrollReveal className="mt-10 grid grid-cols-2 gap-4" delay={260} y={14}>
            <div className="border-t border-(--app-border) pt-4">
              <span className="text-xs text-(--app-muted)">SPECIALTY</span>
              <p className="text-xl">Java & Microservices</p>
            </div>
            <div className="border-t border-(--app-border) pt-4">
              <span className="text-xs text-(--app-muted)">FOCUS</span>
              <p className="text-xl">Performance & Reliability</p>
            </div>
            <div className="border-t border-(--app-border) pt-4">
              <span className="text-xs text-(--app-muted)">TOOLS</span>
              <p className="text-xl">Java, ReactJS, PostgreSQL</p>
            </div>
            <div className="border-t border-(--app-border) pt-4">
              <span className="text-xs text-(--app-muted)">DELIVERY</span>
              <p className="text-xl">Cloud & CI/CD</p>
            </div>
          </ScrollReveal>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default AboutSection
