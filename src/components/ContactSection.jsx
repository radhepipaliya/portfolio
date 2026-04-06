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
          <div className="flex items-center justify-center gap-4 text-(--app-accent)">
            <a
              href="https://www.linkedin.com/in/radhep"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition-colors hover:text-(--app-accent-strong)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19ZM8.34 17V10.26H6.05V17H8.34ZM7.2 9.2A1.33 1.33 0 1 0 7.2 6.54A1.33 1.33 0 0 0 7.2 9.2ZM17.95 17V13.31C17.95 11.33 16.89 10.2 15.47 10.2C14.33 10.2 13.81 10.83 13.53 11.27V10.26H11.24C11.27 10.93 11.24 17 11.24 17H13.53V13.24C13.53 13.04 13.55 12.84 13.6 12.7C13.76 12.3 14.11 11.89 14.74 11.89C15.56 11.89 15.89 12.52 15.89 13.43V17H17.95Z" />
              </svg>
            </a>
            <a
              href="https://github.com/radhepipaliya"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition-colors hover:text-(--app-accent-strong)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path d="M12 2C6.48 2 2 6.59 2 12.24C2 16.76 4.87 20.58 8.84 21.93C9.34 22.03 9.52 21.71 9.52 21.43C9.52 21.18 9.51 20.5 9.5 19.64C6.73 20.26 6.14 18.28 6.14 18.28C5.68 17.06 5.03 16.74 5.03 16.74C4.12 16.1 5.1 16.11 5.1 16.11C6.11 16.19 6.64 17.18 6.64 17.18C7.53 18.76 8.97 18.3 9.54 18.03C9.63 17.36 9.89 16.9 10.18 16.64C7.97 16.38 5.64 15.49 5.64 11.53C5.64 10.4 6.03 9.48 6.68 8.76C6.58 8.5 6.24 7.46 6.78 6.05C6.78 6.05 7.62 5.77 9.5 7.08C10.3 6.85 11.15 6.74 12 6.74C12.85 6.74 13.7 6.85 14.5 7.08C16.38 5.77 17.22 6.05 17.22 6.05C17.76 7.46 17.42 8.5 17.32 8.76C17.97 9.48 18.36 10.4 18.36 11.53C18.36 15.5 16.03 16.38 13.82 16.64C14.19 16.96 14.52 17.58 14.52 18.53C14.52 19.9 14.51 21.01 14.51 21.43C14.51 21.71 14.69 22.04 15.2 21.93C19.17 20.58 22.04 16.76 22.04 12.24C22.04 6.59 17.56 2 12.04 2H12Z" />
              </svg>
            </a>
          </div>
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
