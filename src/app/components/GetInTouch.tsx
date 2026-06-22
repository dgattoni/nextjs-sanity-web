export default function GetInTouch() {
  return (
    <section aria-labelledby="get-in-touch-heading" className="section-divider dot-bg">
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-24 md:py-32
                  flex flex-col md:flex-row items-start md:items-center justify-between gap-12">

        <div>
          <span className="pink-bar" aria-hidden="true"></span>
          <span className="eyebrow" id="get-in-touch-heading">Get in Touch</span>
          <h2 id="connect-heading" className="font-bold uppercase text-[clamp(2.1rem,5vw,3.5rem)] text-ink leading-[1.05]">
            Let's build <span className="text-accent">Accessible and Performant</span> User Experiences.
          </h2>
        </div>

        <div className="flex flex-col gap-4 min-w-fit">
          <a href="https://github.com/dgattoni" target="_blank" rel="noopener" className="btn-pink text-center">
            View GitHub
          </a>
          <a href="https://www.linkedin.com/in/danielagattoni/" target="_blank" rel="noopener"
            className="btn-outline text-center">
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
