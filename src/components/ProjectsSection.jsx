function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen bg-[#050a14] p-6 md:p-20">
      <div className="grid h-full grid-cols-1 items-center gap-6 md:grid-cols-12">
        <div className="md:col-span-8">
          <div className="rounded-lg border border-gray-800 bg-[rgba(17,34,64,0.7)] p-4 shadow-2xl backdrop-blur-md">
            <img
              src="https://via.placeholder.com/800x450"
              className="rounded shadow-inner"
              alt="Project Preview"
            />
          </div>
        </div>
        <div className="space-y-6 md:col-span-4">
          <h2 className="text-3xl md:text-4xl">
            Creative
            <br />
            Interface
          </h2>
          <p className="text-sm text-gray-400">
            Focusing on ensemble processing and Grad-CAM visualization for high-end
            technical systems.
          </p>
          <ul className="space-y-2 text-xs text-[#f06292]">
            <li>+ UI/UX Design</li>
            <li>+ React Development</li>
            <li>+ System Architecture</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
