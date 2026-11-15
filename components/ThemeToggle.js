"use client";

import { useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.theme = next ? "dark" : "light";
  }
  return <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={dark ? "Switch to light theme" : "Switch to dark theme"} aria-pressed={dark}>
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" aria-hidden="true">
      {dark ? <path d="M20.5 14.5a9 9 0 0 1-11-11 9 9 0 1 0 11 11Z" /> : <><circle cx="12" cy="12" r="4" /><path d="M12 1v3m0 16v3M1 12h3m16 0h3M4.2 4.2l2.1 2.1m11.4 11.4 2.1 2.1M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" /></>}
    </svg>
  </button>;
}
