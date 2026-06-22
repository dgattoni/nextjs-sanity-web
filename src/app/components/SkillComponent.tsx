type SkillComponentProps = {
  skillTitle?: string;
  labelId: string;
  skills: string[];
};

export default function SkillComponent({
  skillTitle = "Skills",
  labelId,
  skills,
}: SkillComponentProps) {
  return (
    <>
      <h3 id={labelId} className="stack-category">
        {skillTitle}
      </h3>
      <ul
        className="flex flex-wrap gap-2 list-none p-0"
        aria-labelledby={labelId}
      >
        {skills.map((skill) => (
          <li key={skill}>
            <span className="skill-tag">{skill}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
