# Single-screen locked portfolio QA

Validated locally on 15 November 2026. No deployment, history reset, force push, merge, or tag was performed for this iteration.

## Commands

- `npm run lint` — passed.
- `npm run build` — passed; frontend static export in `out/`.
- `npm run check:content` — five tests passed.
- `git diff --check` — passed.
- `npm run preview` — used to inspect the production export locally.

The existing dependencies were reused. No runtime or development dependency was added.

The final build encountered a transient Windows `EPERM` while creating a generated Next.js directory. Retrying with the preview stopped succeeded, and all five content tests passed against that final export.

## Viewport checks

| Viewport | Document height | Horizontal overflow | Result |
| --- | --- | --- | --- |
| 1440 × 900 | 900px | None | Single screen |
| 1280 × 720 | 720px | None | Single screen |
| 820 × 1180 | 1180px | None | Single screen |
| 768 × 1024 | 1024px | None | Single screen |
| 430 × 932 | 948px | None | Minimal phone scrolling |
| 390 × 844 | 948px | None | Short phone scroll |
| 360 × 640 | 966px | None | Compact phone document; fixed lock control |

Exactly three project entries, Experience, and all 18 supplied technologies were present at every size. The CTA text fit its button. Technology groups also stayed within their tablet columns. The separate covered continuation and services section were removed.

The composition was compared with the supplied blurred résumé reference: compact header, three columns, thin dividers, soft blur, rounded lock badge, and a red pill CTA. The 640px desktop minimum height permits modest vertical overflow on unusually short windows rather than clipping content.

## Interaction and accessibility

- Hiring button opens the native modal and focuses Name.
- Empty required fields and an invalid email prevent submission.
- Company is optional; a valid demo request reaches the playful success state.
- Success does not remove the blur or inert state.
- X, Escape, outside click, and the success Close button dismiss the dialog.
- Closing restores focus to the hiring button, restores page scrolling, and clears form values on reopen.
- Reopening starts the dialog at the top, including after scrolling a short-phone form.
- Tab and Shift+Tab wrap within the modal. Background interaction is blocked by the native modal dialog.
- At 390 × 844, the full form fits within the screen. At 360 × 640, the modal fits inside 16px viewport margins and scrolls internally; the page stays locked behind it.
- Both theme directions were checked. The modal remains crisp in both themes.
- White CTA text has at least 4.64:1 contrast against its red gradient; dark-theme accent text has 6.11:1 contrast against the panel.
- Motion rules, including the backdrop animation, respect `prefers-reduced-motion`. These rules were inspected in source; OS-level motion emulation was not performed.
- Decorative blurred content is `aria-hidden` and `inert`. Labels, required fields, focus styles, and dialog naming are provided.

The form reads no field values and uses no fetch, API, email service, storage, or server action. Production content checks verify the exact project count, retained Experience, supplied technologies, placeholder-only personal information, local links, real button, and labelled dialog.

No browser console errors or warnings were captured in the final production preview. Desktop and modal screenshots are saved in the ignored `test-results/` folder.

## Remaining manual checks

Review on an actual phone with its virtual keyboard and the intended vertical recording crop. Safari and Firefox were not exercised in this environment. The blur is visual presentation, not a security boundary.
