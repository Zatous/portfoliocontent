import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="page-width site-header">
      <h1 className="wordmark"><a href="#portfolio">YOUR NAME.</a></h1>
      <ThemeToggle />
    </header>
  );
}
