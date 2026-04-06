import ScrollReveal from './ScrollReveal'

function ProjectsSection() {
  return (
    <section id="projects" className="theme-bg min-h-screen p-6 md:p-20">
      <div className="grid h-full grid-cols-1 items-center gap-6 md:grid-cols-12">
        <ScrollReveal className="md:col-span-8" delay={80}>
          <div className="theme-card rounded-lg p-4 shadow-2xl">
            <img
              src=""
              className="rounded shadow-inner"
              alt="Java backend and ReactJS frontend preview (updating soon)"
            />
          </div>
        </ScrollReveal>
        <ScrollReveal className="space-y-6 md:col-span-4" delay={180}>
          <h2 className="text-3xl md:text-4xl">
            Full-Stack
            <br />
            Delivery
          </h2>
          <p className="text-sm theme-muted">
            Building Java backend services and ReactJS interfaces with strong data flow,
            structured APIs, and dependable deployment paths.
          </p>
          <ul className="space-y-2 text-xs theme-accent">
            <li>+ Java Backend Development</li>
            <li>+ ReactJS Frontend Development</li>
            <li>+ REST APIs & Authentication</li>
            <li>+ SQL Databases & Deployment</li>
          </ul>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default ProjectsSection
