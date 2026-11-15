export const techGroups = [
  { name: "Frontend", tools: ["HTML", "CSS", "JavaScript", "React", "Next.js", "React Native", "Expo"] },
  { name: "Backend", tools: ["Python", "FastAPI", "Java", "C#"] },
  { name: "Database / Services", tools: ["Supabase", "Firebase"] },
  { name: "Tools", tools: ["Git", "GitHub", "VS Code", "Visual Studio", "Figma"] },
];

export default function TechStack() {
  return (
    <section aria-labelledby="stack-title">
      <h2 id="stack-title" className="section-title">TECH STACK</h2>
      <div className="tech-groups">{techGroups.map(group => (
        <div className="tech-group" key={group.name}>
          <h3>{group.name}</h3>
          <ul>{group.tools.map(tool => <li key={tool}>{tool}</li>)}</ul>
        </div>
      ))}</div>
      <div className="contact-placeholders"><h3 className="section-title">CONTACT ME</h3><p>your@email.com</p><p>GitHub / @username</p><p>LinkedIn / @username</p></div>
    </section>
  );
}
