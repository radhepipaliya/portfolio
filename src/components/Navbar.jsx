function Navbar({ theme, onToggleTheme }) {
  return (
    <nav className="fixed z-50 flex w-full items-center justify-between border-b border-[var(--app-border)] bg-[var(--app-nav)] px-6 py-6 backdrop-blur-md md:px-10">
      <div className="border border-[var(--app-border)] px-2 py-1 text-[10px] uppercase tracking-widest text-[var(--app-accent)] md:text-sm">
        Backend Engineer
      </div>
      <div className="flex items-center gap-4 text-[10px] uppercase md:gap-8 md:text-sm">
        <a href="#home" className="hover:text-[var(--app-accent)]">Home</a>
        <a href="#about" className="hover:text-[var(--app-accent)]">About</a>
        <a href="#stack" className="hover:text-[var(--app-accent)]">Stack</a>
        <a href="#projects" className="hover:text-[var(--app-accent)]">Systems</a>
        <a href="#contact" className="hover:text-[var(--app-accent)]">Contact</a>
        <button
          type="button"
          onClick={onToggleTheme}
          className="rounded-full border border-[var(--app-border)] px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[var(--app-text)] hover:border-[var(--app-accent)] hover:text-[var(--app-accent)]"
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
        >
          {theme === 'dark' ? 'Light' : 'Dark'}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
