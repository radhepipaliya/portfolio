function Navbar({ theme, onToggleTheme }) {
  return (
    <>
      <nav className="fixed top-0 z-50 flex w-full items-center justify-between border-b border-[var(--app-border)] bg-[var(--app-nav)] px-3 py-3 sm:px-6 sm:py-3.5 md:px-8 md:py-4 lg:px-12 xl:px-16 backdrop-blur-md h-16 sm:h-[60px]">
        <div className="hidden sm:block border border-[var(--app-border)] px-2 py-1 text-[8px] sm:text-[9px] md:text-xs lg:text-sm uppercase tracking-widest text-[var(--app-accent)]">
          Backend Engineer
        </div>
        <div className="block sm:hidden text-[8px] uppercase tracking-widest text-[var(--app-accent)] font-light">RE</div>
        <div className="flex items-center gap-1.5 sm:gap-3 md:gap-5 lg:gap-8 text-[7px] sm:text-[9px] md:text-xs lg:text-sm uppercase">
          <a href="#home" className="hover:text-[var(--app-accent)] transition-colors truncate">Home</a>
          <a href="#about" className="hidden sm:inline hover:text-[var(--app-accent)] transition-colors truncate">About</a>
          <a href="#stack" className="hidden md:inline hover:text-[var(--app-accent)] transition-colors truncate">Stack</a>
          <a href="#projects" className="hidden lg:inline hover:text-[var(--app-accent)] transition-colors truncate">Systems</a>
          <a href="#contact" className="hover:text-[var(--app-accent)] transition-colors truncate">Contact</a>
          <button
            type="button"
            onClick={onToggleTheme}
            className="rounded-full border border-[var(--app-border)] px-1.5 sm:px-2.5 md:px-3 py-0.5 text-[7px] sm:text-[9px] md:text-xs uppercase tracking-[0.2em] text-[var(--app-text)] hover:border-[var(--app-accent)] hover:text-[var(--app-accent)] transition-colors whitespace-nowrap"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            {theme === 'dark' ? 'L' : 'D'}
          </button>
        </div>
      </nav>
      <div className="h-16 sm:h-[60px]"></div>
    </>
  )
}

export default Navbar
