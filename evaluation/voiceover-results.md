# VoiceOver (macOS) results

| Test | Original | Improved |
|---|---|---|
| Hatchback image | "jpg image" (no alternative text) | Described as a blue five-door hatchback |
| Saloon image | "car image" (alt text "car") | Described as a white saloon seen from the rear |
| Headings | Level 3 car headings read; skipped level in outline | One h1, h2 sections, h3 car names |
| Landmarks | Not recorded | banner, Main navigation, main, two named regions, content information |
| Links | "Click here", "More" | "Skip to main content" first; "Enquire about the 2020 Trail 1.5" etc. |
| "Ask about this car" | Plain text, no link role, not reachable with Tab | Real link |
| Vehicle selection | n/a | Form opens with the chosen car selected |
| Email field | Not recorded | "Email address, required, edit text email" |
| Telephone field | Not recorded | "Telephone edit text telephone number field with autofill menu" |
| Checkbox | Not recorded | Label with "optional" and state announced |
| Empty submit | Not recorded | "There is a problem, and 1 more item, alert" |
| Successful submit | Not recorded | "Thank you. Your enquiry has been sent ... status" |
| Radio buttons | Not recorded | "Email, selected, radio button, 1 of 2": group name not announced |

## Known limitation
The "Preferred contact method" group name was not announced when moving between radio buttons, even after adding an explicit group label (`role="radiogroup"` with `aria-labelledby`). The markup passes Lighthouse, axe-core and WAVE, so this is treated as a screen reader behaviour to note, not a fixed issue.

Not tested: NVDA, JAWS, magnification software, speech control.
