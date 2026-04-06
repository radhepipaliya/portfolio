import ScrollReveal from './ScrollReveal'

function ProjectsSection() {
  return (
    <section id="projects" className="theme-bg min-h-screen px-4 py-16 sm:py-20 md:py-24 lg:py-32 sm:px-6 md:px-12 lg:px-20">
      <div className="grid h-full grid-cols-1 items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 md:grid-cols-12">
        <ScrollReveal className="md:col-span-8" delay={80}>
          <div className="theme-card rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 lg:p-6 shadow-2xl">
            <img
              src=""
              className="rounded shadow-inner w-full"
              alt="Java backend and ReactJS frontend preview (updating soon)"
            />
          </div>
        </ScrollReveal>
        <ScrollReveal className="space-y-4 sm:space-y-5 md:space-y-6 md:col-span-4" delay={180}>
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl leading-tight">
            Full-Stack
            <br />
            Delivery
          </h2>
          <p className="text-xs sm:text-sm md:text-base theme-muted leading-6">
            Building Java backend services and ReactJS interfaces with strong data flow,
            structured APIs, and dependable deployment paths.
          </p>
          <ul className="space-y-2 sm:space-y-2.5 md:space-y-3 text-xs sm:text-sm theme-accent">
            <li className="leading-tight">+ Java Backend Development</li>
            <li className="leading-tight">+ ReactJS Frontend Development</li>
            <li className="leading-tight">+ REST APIs & Authentication</li>
            <li className="leading-tight">+ SQL Databases & Deployment</li>
          </ul>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default ProjectsSection
