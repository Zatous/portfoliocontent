export default function HireButton({ onClick, buttonRef, dialogId }) {
  return <button id="hire-trigger" ref={buttonRef} type="button" className="hire-button" onClick={onClick} aria-haspopup={dialogId ? "dialog" : undefined} aria-controls={dialogId}>
    <span>Hire me to unlock my full potential</span>
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 12h16m-6-6 6 6-6 6" /></svg>
  </button>;
}
