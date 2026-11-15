export default function PortfolioLayout({ about, projects, stack, children }) {
  return (
    <main id="portfolio" className="page-width portfolio" tabIndex={-1}>
      <div className="portfolio-overview">
        <div className="overview-panel profile-column">{about}</div>
        <div className="overview-panel projects-column">{projects}</div>
        <div className="overview-panel stack-column">{stack}</div>
      </div>
      {children}
    </main>
  );
}
