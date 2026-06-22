export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur-md border-b border-border">
      <div className="max-w-5xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">

        <a className="home-link text-xl font-bold text-gray-900 no-underline letter-spacing:0.04em;" href="/"
          aria-label="Daniela Gattoni — home">
          Daniela Gattoni<span className="text-pink-500">.</span>
        </a>

        <nav aria-label="Primary menu">
          <ul className="flex items-center gap-7 list-none m-0 p-0">
            <li><a href="/#about" className="nav-link">About</a></li>
            <li><a href="/#stack" className="nav-link">Stack</a></li>
            <li><a href="/#blog" className="nav-link">Blog</a></li>
            <li>
              <a href="https://www.linkedin.com/in/danielagattoni/" target="_blank" rel="noopener"
                className="nav-link inline-flex items-center gap-1">
                LinkedIn
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
