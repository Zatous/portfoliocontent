# Personal portfolio

A compact developer portfolio with placeholder personal content and an intentionally covered lower profile. Built with Next.js App Router, React, JavaScript, and plain CSS. Frontend only.

## Local development

```sh
npm ci
npm run dev
```

## Validation and static preview

```sh
npm run lint
npm run build
npm run check:content
npm run preview
```

The build exports static files to `out/`. The preview serves those files at `http://127.0.0.1:3107`. It has no application API or database. Set `PORT` to use a different local preview port.

No site has been deployed.

## Design and content

- The desktop overview uses a narrow About column, a wider numbered Projects list, and a plain-text Tech Stack column. Tablet rearranges the stack below the other columns; phone reading order is About, Tech Stack, Projects.
- `components/TechStack.js` holds the only real profile information: the 18 supplied technologies. Every identity, project, status, education, service, and contact field is a demo placeholder.
- `components/PortfolioDetails.js` contains the lower portfolio. The opaque layer in `components/LockedPortfolio.js` sits over that content. The underlying region is inert and hidden from assistive technology. The access button never removes the cover.
- Theme selection is local to the current page session. Hover and focus move only a decorative censor edge; reduced-motion preferences disable transitions and smooth scrolling.

The cover is a visual concept, not a security boundary. Keep placeholder content underneath it; do not place private information in frontend source.

## Manual review

On desktop, compare the three columns, thin dividers, numbered rows, and compact typography with the supplied reference. Scroll to confirm the black field cuts across actual continuing content.

On a phone, check the About → Tech Stack → Projects order, text wrapping, sideways scrolling, and the hiring phrase in a vertical screen recording. Check the theme toggle and access button with touch and keyboard.

`npm run check:content` inspects the production export after `npm run build`. It checks the phrase, all stack names, local anchors, mobile reading order, and placeholder content. It does not replace visual browser QA.
