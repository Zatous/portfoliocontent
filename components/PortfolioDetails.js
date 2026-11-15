import { ProjectRows } from "./Projects";

export default function PortfolioDetails() {
  return (
    <div className="portfolio-details portfolio-overview" aria-hidden="true" inert>
      <div className="overview-panel profile-column">
        <section className="detail-section"><h2 className="section-title">EXPERIENCE</h2>{[1, 2].map(number => <div className="detail-entry" key={number}><h3>ROLE / COMPANY</h3><p className="metadata">202X — 202X</p><p>Placeholder role description and responsibilities.</p></div>)}</section>
        <section className="detail-section"><h2 className="section-title">EDUCATION</h2><h3>YOUR UNIVERSITY</h3><p>Degree / Field of study</p><p className="metadata">202X — 202X</p></section>
      </div>
      <div className="overview-panel projects-column"><ProjectRows numbers={[4, 5, 6, 7]} /><section className="detail-section"><h2 className="section-title">MORE ABOUT THE WORK</h2><p>Placeholder project notes and process.</p></section></div>
      <div className="overview-panel stack-column">
        <section className="detail-section"><h2 className="section-title">WHAT I DO</h2>{["01", "02", "03"].map(number => <div className="detail-entry" key={number}><h3>SERVICE {number}</h3><p>Placeholder service description.</p></div>)}</section>
        <section className="detail-section"><h2 className="section-title">CONTACT ME</h2><p>your@email.com</p><p>GitHub / @username</p><p>LinkedIn / @username</p></section>
      </div>
    </div>
  );
}
