import { type SanityDocument } from "next-sanity";

import { client } from "@/sanity/client";
import SkillComponent from "./components/SkillComponent";
import PostCard from "./components/PostCard";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

const TAGS_QUERY = `*[
  _type == "tag"
]|order(name asc){_id, title, description}`;


const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);
  const tags = await client.fetch<SanityDocument[]>(TAGS_QUERY, {}, options);

  return (
    <>
      <main className="">

          {/* <!-- ─── HERO ─────────────────────────────────── --> */}
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


    {/* <!-- ─── TECH STACK ────────────────────────────── --> */}
    <section id="stack" aria-labelledby="stack-heading" className="section-divider bg-surface">
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-24 md:py-32">

        {/* <!-- Section header --> */}
        <div className="mb-14">
          <span className="pink-bar" aria-hidden="true"></span>
          <span className="eyebrow">Expertise</span>
          <h2 id="stack-heading" className="font-bold text-[2.5rem] uppercase text-ink">
            Tech Stack
          </h2>
        </div>

        {/* <!-- 3-column grid --> */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10">

          {/* <!-- Back-end --> */}
          <div>
            <SkillComponent
              skillTitle="Back-end"
              labelId="backend"
              skills={["Ruby on Rails", "Active Record ORM", "GraphQL and REST APIs", "Testing (RSpec, Minitest, Capybara)"]}
            />
          </div>

          {/* <!-- Front-end --> */}
          <div>
            <SkillComponent
              skillTitle="Front-end"
              labelId="frontend"
              skills={["TypeScript", "ReactJS", "NextJS", "Apollo Client", "Rails Hotwire", "CSS3 and HTML5", "Chakra UI", "Tailwind CSS", "React Testing Library", "Web Accessibility"]}
            />
          </div>

          {/* <!-- Tooling --> */}
          <div>
            <SkillComponent
              skillTitle="Tooling"
              labelId="tooling"
              skills={["Git", "GitHub Actions", "Figma", "VSCode", "AI Coding Assistant (Claude Code)"]}
            />
          </div>
        </div>
      </div>
    </section>

     <section id="blog" aria-labelledby="blog-heading" className="section-divider bg-white">
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-24 md:py-32">
         <div className="mb-14">
          <span className="pink-bar" aria-hidden="true"></span>
          <span className="eyebrow">Writing</span>
          <h2 id="blog-heading" className="font-bold text-[2.5rem] uppercase text-ink">
            Blog
          </h2>
        </div>
         <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 list-none p-0">
          {posts.map((post) => (
            <li key={post._id}>
              <PostCard
                title={post.title}
                slug={post.slug.current}
                publishedAt={post.publishedAt}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>

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
 
      </main>
  
    </>
  );
}