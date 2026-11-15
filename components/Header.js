import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="page-width site-header">
      <h1 className="wordmark"><a href="#portfolio">YOUR NAME.</a></h1>
      <div className="header-tools"><p className="header-caption">PERSONAL PORTFOLIO</p><ThemeToggle /></div>
    </header>
  );
}
