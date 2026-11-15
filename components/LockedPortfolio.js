export function HireButton({ onClick, buttonRef }) {
  return <button id="hire-trigger" ref={buttonRef} type="button" className="hire-button" onClick={onClick}>
    <span>Hire me to unlock my full potential</span>
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 12h16m-6-6 6 6-6 6" /></svg>
  </button>;
}

export default function LockedPortfolio() {
  return <div className="lock-overlay">
    <div className="lock-content">
      <div className="lock-badge" aria-hidden="true"><svg viewBox="0 0 40 40" fill="none"><path d="M12 17v-5a8 8 0 0 1 16 0v5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /><rect x="8" y="16" width="24" height="21" rx="5" fill="currentColor" /><circle cx="20" cy="25" r="3" fill="white" /><path d="M20 27v4" stroke="white" strokeWidth="2.5" strokeLinecap="round" /></svg></div>
      <HireButton />
      <p className="lock-caption metadata">FULL PROFILE LOCKED</p>
    </div>
  </div>;
}
