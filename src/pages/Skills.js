import skillGroups from "../data/skills";

function Skills() {
  return (
    <section id="skills">
      <div className="section-label">技術 ・ SKILLS</div>
      <h2 className="section-title">What I Work With</h2>
      <div className="section-line"></div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skill-card" key={group.title}>
            <span className="skill-kicker">{group.title}</span>
            <p className="skill-summary">{group.summary}</p>
            <div className="skill-tags">
              {group.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
