export function ProjectRows({ numbers }) {
  return (
    <ol className="project-list" start={numbers[0]}>
      {numbers.map(number => (
        <li className="project-row" key={number}>
          <span className="project-number" aria-hidden="true">{number}.</span>
          <div className="project-copy">
            <h3>PROJECT {String(number).padStart(2, "0")}</h3>
            <p>Placeholder project description.</p>
            <p className="project-technologies">Technology / Framework / Tools</p>
            <span className="project-status metadata">DEMO STATUS</span>
          </div>
          <div className="project-preview" aria-hidden="true"><span>PROJECT<br />PREVIEW</span></div>
        </li>
      ))}
    </ol>
  );
}

export default function Projects() {
  return (
    <section aria-labelledby="projects-title">
      <div className="section-heading"><h2 id="projects-title" className="section-title">SELECTED PROJECTS</h2><span className="metadata">03 / DEMO</span></div>
      <ProjectRows numbers={[1, 2, 3]} />
      <p className="project-notes">Placeholder project notes, process, and supporting details.</p>
    </section>
  );
}
