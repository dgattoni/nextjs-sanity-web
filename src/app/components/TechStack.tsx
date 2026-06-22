import SkillComponent from "./SkillComponent";

export type TechCategory = {
  _id: string;
  title: string;
  tags: { _id: string; title: string }[];
};

export default function TechStack({ categories }: { categories: TechCategory[] }) {
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
          {categories.map((category) => (
            <div key={category._id}>
              <SkillComponent
                skillTitle={category.title}
                labelId={category.title.toLowerCase().replace(/\s+/g, "-")}
                skills={category.tags.map((tag) => tag.title)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
