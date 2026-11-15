export default function About() {
  return (
    <section aria-labelledby="about-title">
      <h2 id="about-title" className="section-title">ABOUT ME</h2>
      <div className="profile-intro"><div className="profile-placeholder" role="img" aria-label="Neutral placeholder profile image">
        <svg viewBox="0 0 160 160" fill="none" aria-hidden="true"><circle cx="80" cy="57" r="22" /><path d="M38 132v-10a42 42 0 0 1 84 0v10" /></svg>
        <span className="metadata">PROFILE PLACEHOLDER</span>
      </div>
      <div><h3 className="profile-name">YOUR NAME</h3><p className="profile-location">Your location</p></div></div>
      <p className="profile-statement">Your personal statement goes here. A short introduction about your work and interests.</p>
      <dl className="profile-meta"><div><dt>SCHOOL</dt><dd>Your university</dd></div><div><dt>YEAR</dt><dd>202X</dd></div></dl>
    </section>
  );
}
