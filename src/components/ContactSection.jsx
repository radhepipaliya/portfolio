function ContactSection() {
  return (
    <section
      id="contact"
      className="flex min-h-screen flex-col items-center justify-center px-6 text-center"
    >
      <h1 className="mb-10 text-6xl font-light md:text-9xl">Say...Hello</h1>
      <p className="uppercase tracking-widest text-gray-500">Thank you for watching</p>

      <div className="mt-20 flex flex-col gap-8 border-t border-gray-800 pt-10 text-sm md:flex-row md:space-x-20 md:gap-0">
        <div>
          <p className="text-gray-600">EMAIL</p>
          <p>hello@matthewdodger.com</p>
        </div>
        <div>
          <p className="text-gray-600">SOCIAL</p>
          <p>@matthewdodger</p>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
