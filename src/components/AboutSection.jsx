function AboutSection() {
  return (
    <section id="about" className="flex min-h-screen items-center bg-[#0a192f] p-6 md:p-20">
      <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2">
        <div className="relative">
          <img
            src="https://via.placeholder.com/400x500"
            alt="Profile"
            className="rounded-sm grayscale transition duration-500 hover:grayscale-0"
          />
        </div>
        <div className="space-y-6">
          <h3 className="text-sm uppercase tracking-widest text-[#f06292]">// About Me</h3>
          <p className="text-xl leading-relaxed md:text-2xl">
            I am a professional web developer with a heart for visual storytelling and
            technical excellence.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-4">
            <div className="border-t border-gray-700 pt-4">
              <span className="text-xs text-gray-500">EXPERIENCE</span>
              <p className="text-xl">5+ Years</p>
            </div>
            <div className="border-t border-gray-700 pt-4">
              <span className="text-xs text-gray-500">PROJECTS</span>
              <p className="text-xl">150+ Done</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
