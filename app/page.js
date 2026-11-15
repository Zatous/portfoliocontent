import Header from "../components/Header";
import Footer from "../components/Footer";
import PortfolioLayout from "../components/PortfolioLayout";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#portfolio">Skip to portfolio</a>
      <Header />
      <PortfolioLayout
        about={<section aria-labelledby="about-title"><h2 id="about-title" className="section-title">ABOUT ME</h2></section>}
        projects={<section aria-labelledby="projects-title"><div className="section-heading"><h2 id="projects-title" className="section-title">PROJECTS</h2><span className="metadata">DEMO PROJECTS</span></div></section>}
        stack={<section aria-labelledby="stack-title"><h2 id="stack-title" className="section-title">TECH STACK</h2></section>}
      />
      <Footer />
    </>
  );
}
