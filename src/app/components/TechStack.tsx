import SkillComponent from "./SkillComponent";

export default function TechStack() {
  return (
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
  );
}
