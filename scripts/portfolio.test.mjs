import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const raw = await readFile(new URL("../out/index.html", import.meta.url), "utf8");
const html = raw.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, "");
const text = value => value.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();

test("the resume has exactly three projects, experience, and no old continuation", () => {
  for (const title of ["ABOUT ME", "SELECTED PROJECTS", "TECH STACK", "EXPERIENCE"]) assert.ok(html.includes(title));
  assert.equal((html.match(/class="project-row"/g) || []).length, 3);
  assert.doesNotMatch(html, /PROJECT (?:04|05|06|07)|WHAT I DO|SERVICE 0|portfolio-obstruction|portfolio-details/);
  assert.ok(html.includes("ROLE / COMPANY"));
  assert.equal((html.match(/<h1\b/g) || []).length, 1);
});

test("the stack contains exactly the 18 supplied technologies", () => {
  const stack = html.match(/<div class="tech-groups">([\s\S]*?)<div class="contact-placeholders">/)?.[1];
  assert.ok(stack);
  const tools = [...stack.matchAll(/<li>(.*?)<\/li>/g)].map(match => text(match[1]));
  assert.deepEqual(tools, ["HTML", "CSS", "JavaScript", "React", "Next.js", "React Native", "Expo", "Python", "FastAPI", "Java", "C#", "Supabase", "Firebase", "Git", "GitHub", "VS Code", "Visual Studio", "Figma"]);
});

test("personal content stays placeholder and navigation stays local", () => {
  for (const placeholder of ["Your Name", "Your Title", "your@email.com", "@username", "DEMO STATUS"]) assert.ok(html.includes(placeholder));
  assert.doesNotMatch(html, /mailto:|tel:/);
  for (const match of html.matchAll(/<a\b[^>]*href="([^"]*)"/g)) {
    assert.ok(match[1].startsWith("#"));
    assert.ok(html.includes(`id="${match[1].slice(1)}"`));
  }
  assert.ok(html.indexOf('id="about-title"') < html.indexOf('id="stack-title"'));
  assert.ok(html.indexOf('id="stack-title"') < html.indexOf('id="projects-title"'));
  assert.ok(html.indexOf('id="projects-title"') < html.indexOf('id="experience-title"'));
});
