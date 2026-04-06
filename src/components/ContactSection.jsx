import QuoteCard from './QuoteCard'
import ScrollReveal from './ScrollReveal'

function ContactSection() {
  return (
    <section
      id="contact"
      className="flex min-h-screen flex-col items-center justify-center px-6 text-center"
    >
      <ScrollReveal delay={80}>
        <h1 className="mb-10 text-6xl font-light md:text-9xl">Let&apos;s Build</h1>
      </ScrollReveal>
      <ScrollReveal delay={140}>
        <p className="max-w-2xl uppercase tracking-widest text-(--app-muted)">
          If you need a backend that is stable, secure, and built to scale, I&apos;m ready to help.
        </p>
      </ScrollReveal>

      <ScrollReveal
        className="mt-20 flex flex-col gap-8 border-t border-(--app-border) pt-10 text-sm md:flex-row md:space-x-20 md:gap-0"
        delay={220}
      >
        <div>
          <p className="text-(--app-muted)">EMAIL</p>
          <p>radhe.pipaliya2025@gmail.com</p>
        </div>
        <div>
          <p className="text-(--app-muted)">SOCIAL</p>
          <p>@radhepipaliya</p>
        </div>
        <div>
          <p className="text-(--app-muted)">SERVICE</p>
          <p>Java, ReactJS, APIs</p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={320}>
        <QuoteCard
          className="mt-16 max-w-3xl text-left"
          quote="Software Developer - Without a doubt, a good developer is honest with their code."
          author="Rohit Adhav (WEB G.O.A.T)"
        />
      </ScrollReveal>
    </section>
  )
}

export default ContactSection
