export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="section-divider bg-white">
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-24 md:py-32">

        {/* <!-- Section header row --> */}
        <div className="mb-12">
          <span className="pink-bar" aria-hidden="true"></span>
          <span className="eyebrow" id="about-heading">Bio</span>
          <h2 className="font-bold text-[2.5rem] uppercase text-ink leading-[1.05]">
            About Daniela Gattoni
          </h2>
        </div>

        {/* <!-- Two-column: photo + text --> */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-14 items-start">

          {/* <!-- Photo --> */}
          <div className="shrink-0 flex flex-col items-center gap-3">
            <img src="https://avatars.githubusercontent.com/u/5312844?v=4" alt="Daniela Gattoni" className="avatar"
              width="120" height="120" loading="lazy" />
          </div>

          {/* <!-- Bio paragraphs --> */}
          <div className="font-body">
            <p className="mb-4">
              Hello There! I'm a <strong>Full-Stack Software Engineer {' '}</strong>
              with over a decade of experience crafting web applications — with a strong focus
              on clean, maintainable, and well-tested code.
            </p>
            <p className="mb-4">
              I specialise in {' '}
              <span className="text-accent">Ruby on Rails</span>, {' '}
              <span className="text-accent">TypeScript</span>, {' '}
              <span className="text-accent">ReactJS</span>, {' '}
              and <span className="text-accent">GraphQL</span> — backed by
              rigorous unit, integration and End-to-End (E2E) testing.
            </p>
            <p className="mb-4">
              I hold Web Accessibility Standards close and collaborate seamlessly with Agile
              PMs, UX/UI designers, and fellow engineers — having contributed across
              award-winning startups, large enterprises, and boutique agencies.
            </p>
            <p className="mb-4">
              I strongly believe in the power of team communication, meaningful code reviews, and a strong test coverage
              as pillars of high-quality and long-term maintainable software.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
