function HomeSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-center px-6 pt-20 md:px-20"
    >
      <div className="space-y-4">
        <h1 className="text-5xl font-light tracking-tighter md:text-8xl">
          Portfolio{' '}
          <span className="inline-block text-base align-top text-[#f06292] md:text-2xl">
            + Web Developer
            <br />
            <span className="ml-4 md:ml-10">/ 2023</span>
          </span>
        </h1>
      </div>

      <div className="absolute bottom-20 left-6 flex items-center space-x-4 md:left-20 md:space-x-10">
        <p className="text-xs uppercase text-gray-500">&quot;Hello I&apos;m&quot;</p>
        <h2 className="text-2xl md:text-4xl">
          Matthew
          <br />
          <span className="ml-8 md:ml-20">Dodger</span>
        </h2>
      </div>

      <div className="absolute bottom-20 right-6 md:right-20">
        <button className="rounded-full border border-gray-600 px-6 py-2 transition hover:bg-white hover:text-black md:px-8">
          Read More
        </button>
      </div>
    </section>
  )
}

export default HomeSection
