import Header from "../components/Header";
import Footer from "../components/Footer";
import PortfolioLayout from "../components/PortfolioLayout";
import About from "../components/About";
import Projects from "../components/Projects";
import TechStack from "../components/TechStack";
import LockedPortfolio from "../components/LockedPortfolio";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#portfolio">Skip to portfolio</a>
      <Header />
      <PortfolioLayout
        about={<About />}
        projects={<Projects />}
        stack={<TechStack />}
      >
        <LockedPortfolio />
      </PortfolioLayout>
      <Footer />
    </>
  );
}
