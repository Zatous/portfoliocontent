# Portfolio redesign QA

Validated locally on 15 November 2026. No deployment was performed.

## Checks

| Check | Result |
| --- | --- |
| `npm run lint` | Passed |
| `npm run build` | Passed; static export generated in `out/` |
| `npm run check:content` | Four tests passed |
| `npm audit --omit=dev` | Zero production vulnerabilities reported |
| `git diff --check` | Passed |

One repeated build encountered a transient Windows `EPERM` while writing an export directory. Stopping the local preview and rebuilding succeeded. No source workaround or framework change was needed.

## Browser checks

The production export was served locally through `npm run preview`. The in-app Chromium browser was checked at 360, 390, 430, 768, 820, 1280, and 1440 CSS pixels. At each width:

- Document width stayed within the viewport.
- The exact hiring message fit its container.
- All 18 technology names were present, with the Tech Stack above the obstruction.
- The obstruction stayed fully opaque.
- The continuing portfolio was marked `aria-hidden` and `inert`.

Desktop uses the reference's three-column structure. Tablet uses two overview columns with the stack below. Phone visual and document order is About, Tech Stack, Projects, then the covered continuation.

Both theme directions were exercised. The access control returned “Nice try. Still locked.” without changing the cover. Keyboard focus and the skip link were checked. Decorative imagery is labelled or hidden appropriately. Reduced-motion behavior was verified from the CSS; an OS-level reduced-motion emulation was not performed.

The final production-page browser console contained no captured errors or warnings. Final screenshots were saved locally under the ignored `test-results/` directory.

Final review fixed mobile reading order and a slash-separator wrapping issue in the Tech Stack. Production content tests cover the phrase, technology list, placeholder fields, local anchors, and concealed continuation.

## Manual follow-up

Review the scroll timing and screen-recording crop on an actual phone. Also check Safari and Firefox, which were not exercised in this environment. Personal information and project previews intentionally remain placeholders.
