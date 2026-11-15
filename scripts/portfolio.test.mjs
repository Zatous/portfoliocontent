import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const raw = await readFile(new URL("../out/index.html", import.meta.url), "utf8");
const html = raw.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, "");
const text = value => value.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();

test("export contains the compact overview and exact hiring payoff", () => {
  for (const title of ["ABOUT ME", "PROJECTS", "TECH STACK"]) assert.ok(html.includes(title));
  assert.equal((html.match(/<h1\b/g) || []).length, 1);
  const payoff = html.match(/<h2 id="lock-title">([\s\S]*?)<\/h2>/);
  assert.ok(payoff);
  assert.equal(text(payoff[1]), "HIRE ME TO UNLOCK MY FULL POTENTIAL");
  assert.doesNotMatch(html, /FULL-STACK DEVELOPER|profile-document|hero-role/);
});

test("all 18 supplied technologies are present in the visible stack", () => {
  const stack = html.match(/<section aria-labelledby="stack-title">([\s\S]*?)<\/section>/)?.[1];
  assert.ok(stack);
  const tools = [...stack.matchAll(/<li>(.*?)<\/li>/g)].map(match => text(match[1]));
  assert.deepEqual(tools, ["React", "Next.js", "React Native", "Expo", "JavaScript", "HTML", "CSS", "Python", "FastAPI", "Java", "C#", "Supabase", "Firebase", "Git", "GitHub", "VS Code", "Visual Studio", "Figma"]);
});

test("the continuing portfolio exists behind an inert, inaccessible cover", () => {
  assert.match(html, /class="portfolio-details portfolio-overview" aria-hidden="true" inert=""/);
  assert.equal((html.match(/class="project-row"/g) || []).length, 7);
  for (const placeholder of ["ROLE / COMPANY", "YOUR UNIVERSITY", "SERVICE ", "your@email.com", "@username"]) assert.ok(html.includes(placeholder));
  assert.ok(html.includes('role="status"'));
  const about = html.indexOf('id="about-title"');
  const stack = html.indexOf('id="stack-title"');
  const projects = html.indexOf('id="projects-title"');
  assert.ok(about < stack && stack < projects, "DOM order should match the mobile reading order");
});

test("navigation stays local and personal information remains placeholder content", () => {
  const links = [...html.matchAll(/<a\b[^>]*href="([^"]*)"/g)].map(match => match[1]);
  assert.ok(links.length > 0);
  for (const href of links) {
    assert.ok(href.startsWith("#"));
    assert.ok(html.includes(`id="${href.slice(1)}"`));
  }
  assert.ok(html.includes("YOUR NAME"));
  assert.ok(html.includes("Your university"));
  assert.ok(html.includes("DEMO CONTENT"));
  assert.doesNotMatch(html, /mailto:|tel:/);
});
