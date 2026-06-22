export default function Hero() {
  return (
    <section id="hero" aria-label="Introduction" className="relative overflow-hidden min-h-screen flex items-center pt-16">

      <div className="relative max-w-5xl mx-auto px-6 md:px-10 py-28 md:py-36 w-full">

        {/* <!-- Kicker --> */}
        <p className="fade-up d1 flex items-center gap-3 mb-7 eyebrow">
          Full-Stack Software Engineer
        </p>

        {/* <!-- Name --> */}
        <h1 className="fade-up d2 mb-8 font-bold uppercase text-ink leading-[0.90] text-[clamp(3.4rem,12vw,8.8rem)]">
          Daniela<br />
          <span className="text-accent">Gattoni</span>
        </h1>

        {/* <!-- Tagline --> */}
        <p className="fade-up d3 mb-2 max-w-xl">
          Building high-quality web applications for 10+ years
        </p>

        {/* <!-- Location --> */}
        <p className="fade-up d4 mb-12 text-ink-mid uppercase">
          <span aria-hidden="true">📍</span> Melbourne, Australia
        </p>

        {/* <!-- CTAs --> */}
        <div className="fade-up d5 flex flex-wrap gap-4">
          <a href="https://github.com/dgattoni" target="_blank" rel="noopener" className="btn-pink">View GitHub</a>
          <a href="https://www.linkedin.com/in/danielagattoni/" target="_blank" rel="noopener"
            className="btn-outline">LinkedIn</a>
        </div>


      </div>
    </section>
  );
}
