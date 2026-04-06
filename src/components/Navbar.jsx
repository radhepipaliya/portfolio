function Navbar() {
  return (
    <nav className="fixed z-50 flex w-full items-center justify-between bg-[#050a14]/90 px-6 py-6 md:px-10">
      <div className="border border-gray-700 px-2 py-1 text-[10px] uppercase tracking-widest md:text-sm">
        Based in New York
      </div>
      <div className="space-x-4 text-[10px] uppercase md:space-x-8 md:text-sm">
        <a href="#home" className="hover:text-[#f06292]">Welcome</a>
        <a href="#about" className="hover:text-[#f06292]">About</a>
        <a href="#projects" className="hover:text-[#f06292]">Project</a>
        <a href="#contact" className="hover:text-[#f06292]">Meta</a>
      </div>
    </nav>
  )
}

export default Navbar
