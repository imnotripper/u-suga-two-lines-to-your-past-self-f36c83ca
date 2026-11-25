# Build notes — u-suga-two-lines-to-your-past-self-f36c83ca

## Design brief

- **Competition:** Two Lines to Your Past Self — $2 winner-takes-all, pairwise AI judge, blind rounds x3. R2 cutoff 2026-11-25T19:19:37Z, deadline 2026-11-26T08:40:00Z.
- **Task:** a program that writes ONE two-line warning to `/output/entry.txt`. Line 1 = ONE sentence warning your past self about ONE specific moment (concrete, dated, specific — not generic advice). Line 2 = ONE sentence saying why that moment mattered and what changed because of it; the cause-and-effect must be traceable, not generic.
- **Sealed gate:** `/output/entry.txt` must be UTF-8, **1–280 characters** (note: 280, not 400), not whitespace-only.
- **Judge weighs, in order:** (1) how concrete/specific the moment is, (2) how clearly line 2 traces cause and effect from that moment, (3) the two lines working as one with no wasted words, (4) a plain, vivid voice written to one specific person.
- **Verdict:** lottery (projected field ≥1,000, 1 paid place) — correct-and-clean build only, ~15 min cap. Standard emitter skeleton reused from `u-suga-the-robot-apology-dd96bb59`, adapted to the 280-char gate.
- **Category:** content creation (short artifact) — multi-candidate duel, no bespoke architecture, no presentation polish pass.

## The 8 candidates (char counts include the newline between lines)

1. **C1 — job call (224 chars):** "Do not answer when Meridian calls on Tuesday, March 4, because the job you accept that afternoon will eat the next three years." / "That one yes is why you spent your thirties building someone else's company instead of your own."
2. **C2 — train (198 chars):** "Stay on the 6:40 train past Platform 3 on Friday, because the woman in the red coat is about to sit beside you." / "You got off, and that is the last time you ever saw the person you would have married."
3. **C3 — loan (207 chars, sharpened to 213 with a date):** "Do not sign the loan papers on your brother's kitchen table on Sunday night, because his restaurant will close by Christmas." / "Your signature is why you spent four years paying off a debt that was never yours."
4. **C4 — letter (233 chars):** "Do not delete the letter you wrote to your father on the night of June 12, because you will never find those words again." / "He died in September, and the letter you erased is the apology you have been rewriting in your head ever since."
5. **C5 — audition (232 chars):** "Do not walk out of the audition room on Thursday before they call your name, because the director is about to offer you the part." / "You left, and that empty chair is why you spent ten years wondering whether you were ever good enough."
6. **C6 — bike (208 chars):** "Do not ride your bike down Mill Road in the rain on October 9, because the car turning left will not see you." / "The crash broke your leg, and that broken leg is why you never tried out for the team that winter."
7. **C7 — house (200 chars):** "Do not sell the house on Alder Street for the first offer on Monday morning, because a better one arrives on Thursday." / "You took the first cheque, and that impatience is why you have rented ever since."
8. **C8 — missed call (238 chars):** "Do not let the call from your mother go to voicemail on the evening of April 2, because it is the last time she will ever call you." / "You texted back instead, and that unanswered ring is why you still flinch every time your phone lights up."

## Duel record (pairwise, rubric order: concreteness first, then cause-and-effect)

- C3 beats C8: both are vivid and dated, but C3's consequence is a four-year financial chain (signature → debt → payments) while C8's is a symptom (flinching at a phone), not a life change.
- C3 beats C4: C4's moment is concrete (June 12 letter) but its consequence is internal (rewriting an apology in your head); C3's is externally verifiable and dated (closes by Christmas, four years of payments).
- C3 beats C6: C6 is the most picturable moment (bike, rain, Mill Road, car turning left), but its consequence is a lost tryout — softer than four years paying a debt that was never yours.
- C3 beats C1: C1's consequence ("building someone else's company") is generic career drift; C3 names the exact cost.
- C5 loses to C6 and C3: "the director is about to offer you the part" is speculative, and ten years of wondering is internal, not traced.
- C2 loses early: "the person you would have married" is an unprovable counterfactual — the weakest cause-and-effect of the eight.
- C7 loses to C3 and C6: concrete (Alder Street, Monday/Thursday) but the lowest stakes and the most generic line 2 ("that impatience").

**Winner: C3 (loan papers), sharpened with a date** — "Sunday night" became "Sunday, November 9" (207 → 213 chars, still well inside 280), because a dated decision beats a merely timed one on the judge's first criterion.

## Winner rationale

The moment stacks four concrete anchors in one sentence — a place (brother's kitchen table), a dated decision (Sunday, November 9), a named other person (your brother), a dated consequence (closes by Christmas) — and line 2 traces the hardest, most specific chain of the eight: signature → debt → four years of payments, with the sting that the debt was never yours. Plain voice, no cleverness for its own sake, no wasted words.

## Verification (observed, 2026-11-25 ~21:35 WIB)

- `node main.ts` → `wrote 213 chars, 2 lines, to /output/entry.txt`, exit 0, Node v24.22.1.
- `/output/entry.txt` re-read: 213 chars, 213 bytes, exactly 2 lines, no trailing newline; line 1 and line 2 each contain exactly 1 period, each ends with a period.
- Round-trip check passed (text and code-point count identical after write).
- LICENSE: MIT with `SPDX-License-Identifier: MIT`, committed by `init` (anchor drand round 34271187).
- `.makefun/owner.json` added (wallet DqBprJeBproRiQivvjukUifforNBx4Euw6WuW68FG9x5) — competition.yaml has no how_to_submit section, and RULES.txt asks for the claim file unless the repo owner is the account's GitHub login; added as belt-and-braces since the repo will be imnotripper-owned either way.
