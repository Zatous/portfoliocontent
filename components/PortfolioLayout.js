export default function PortfolioLayout({ about, projects, stack, experience, children }) {
  return (
    <main id="portfolio" className="page-width portfolio" tabIndex={-1}>
      <div className="resume-document" aria-hidden="true" inert>
        <div className="profile-column">{about}</div>
        <div className="stack-column">{stack}</div>
        <div className="projects-column">{projects}</div>
        <div className="experience-column">{experience}</div>
      </div>
      {children}
    </main>
  );
}
