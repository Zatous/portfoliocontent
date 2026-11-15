import Header from "../components/Header";
import PortfolioLayout from "../components/PortfolioLayout";
import About from "../components/About";
import Projects from "../components/Projects";
import TechStack from "../components/TechStack";
import Experience from "../components/Experience";

export default function Home() {
  return (
    <div className="resume-screen">
      <a className="skip-link" href="#portfolio">Skip to portfolio</a>
      <Header />
      <PortfolioLayout
        about={<About />}
        projects={<Projects />}
        stack={<TechStack />}
        experience={<Experience />}
      />
    </div>
  );
}
