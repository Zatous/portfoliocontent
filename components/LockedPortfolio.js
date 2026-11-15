import PortfolioDetails from "./PortfolioDetails";
import AccessCheck from "./AccessCheck";

export default function LockedPortfolio() {
  return (
    <section className="locked-region" aria-labelledby="lock-title">
      <PortfolioDetails />
      <div className="portfolio-obstruction">
        <div className="obstruction-top metadata"><span className="restriction-label"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><rect x="5" y="10" width="14" height="11" rx="1" /><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3" /></svg> FULL PROFILE LOCKED</span><span>[ ACCESS RESTRICTED ]</span></div>
        <div className="obstruction-message"><h2 id="lock-title"><span>HIRE ME</span>{" "}<span>TO UNLOCK MY</span>{" "}<span>FULL POTENTIAL</span></h2><p>The rest is here. Just not on display.</p><AccessCheck /></div>
        <div className="obstruction-bottom metadata"><span>AVAILABLE AFTER HIRE</span><span>PORTFOLIO CONTINUES UNDERNEATH ↓</span></div>
      </div>
    </section>
  );
}
