export default function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-7 flex flex-col items-center justify-between gap-3">
        <p className="text-sm text-gray-800 letter-spacing-[0.02em] text-align:center font-body">
          I used some prompt engineering with Claude Code to generate the look & feel, along with some CSS and HTML, and I
          reviewed and audited it, focusing on web accessibility, semantic HTML structure, and Tailwind CSS classes. This
          is still an experimental, continuously evolving landing page.
          More info in the <a href="https://github.com/dgattoni/nextjs-sanity-web" target="_blank"
            className="text-pink-500 hover:underline">Readme file</a> of my GitHub repository.
        </p>
        <p className="text-sm text-gray-800 letter-spacing-[0.02em] text-align:center mt-5 font-body">
        Daniela Gattoni &mdash; Full-Stack Software Engineer, Melbourne &copy; 2026.
        </p>
      </div>
    </footer>
  );
}
