# Locked developer portfolio

A compact résumé presented as a locked screen. The red **Hire me to unlock my full potential →** button opens a playful hiring form. A successful demo submission never unlocks the portfolio.

Next.js App Router, React, JavaScript, and plain CSS. No database, application API, authentication, email service, or animation dependency.

## Run locally

```sh
npm ci
npm run dev
```

For a production export and local static preview:

```sh
npm run lint
npm run build
npm run check:content
npm run preview
```

`out/` contains the exported site. The preview defaults to `http://127.0.0.1:3107`; set the `PORT` environment variable to choose another port. No deployment is performed by these commands.

## Layout and content

- Desktop: one viewport with an approximately 20 / 55 / 25 three-column document. A 640px minimum height permits a little scrolling on unusually short windows.
- Phone: compact About → Tech Stack → three Projects → Experience, with the lock control fixed prominently over the document.
- The 18 technologies in `components/TechStack.js` are the only real profile information. Names, titles, project details, status, experience, and contacts are placeholders.
- Exactly three project entries exist. There is no services section or separate portfolio continuation.
- Details stay blurred on hover and after submission. The decorative locked document is inert and hidden from assistive technology.

## Hiring interaction

`components/HiringModal.js` uses a native modal dialog, labelled fields, required-field validation, keyboard focus wrapping, Escape, outside-click dismissal, and focus restoration. Closing clears the form. The form does not read or serialize field values, send a request, save data, or unlock the document. Its success state is explicitly marked as a demo.

The theme toggle changes only the current page session. CSS handles CTA motion and modal entrance effects; reduced-motion preferences disable them.

The blur is a presentation effect, not access control. Keep demo content in the frontend until you intentionally replace it.

See `QA.md` for the checks and verification limits.
