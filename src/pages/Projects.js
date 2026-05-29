import projects from "../data/projects";

function Projects() {
  return (
    <section id="projects">
      <div className="section-label">作品 ・ PROJECTS</div>
      <h2 className="section-title">Featured Work</h2>
      <div className="section-line"></div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-topline">
              <span className="project-ai">{project.category}</span>
              <span className="project-number">{project.number}</span>
            </div>

            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.desc}</p>
            <p className="project-impact">
              Focused on usable workflows, clear data movement, and a polished
              interface for real-world evaluation.
            </p>

            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
