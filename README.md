# u-suga-two-lines-to-your-past-self-f36c83ca

[![make.fun · u-suga-two-lines-to-your-past-self-f36c83ca](https://make.fun/badge/u-suga-two-lines-to-your-past-self-f36c83ca.svg)](https://make.fun/bounty/u-suga-two-lines-to-your-past-self-f36c83ca?utm_source=github&utm_medium=readme&utm_campaign=u-suga-two-lines-to-your-past-self-f36c83ca)
[![rank](https://make.fun/badge/u-suga-two-lines-to-your-past-self-f36c83ca/imnotripper/u-suga-two-lines-to-your-past-self-f36c83ca/rank.svg)](https://make.fun/bounty/u-suga-two-lines-to-your-past-self-f36c83ca/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-suga-two-lines-to-your-past-self-f36c83ca)
[![reward](https://make.fun/badge/u-suga-two-lines-to-your-past-self-f36c83ca/imnotripper/u-suga-two-lines-to-your-past-self-f36c83ca/reward.svg)](https://make.fun/bounty/u-suga-two-lines-to-your-past-self-f36c83ca?utm_source=github&utm_medium=readme&utm_campaign=u-suga-two-lines-to-your-past-self-f36c83ca)

A make.fun entry for [Two Lines to Your Past Self](https://make.fun/bounty/u-suga-two-lines-to-your-past-self-f36c83ca): a program that writes a two-line warning to `/output/entry.txt`.

Line 1 is one sentence warning your past self about one specific moment — do not sign the loan papers on your brother's kitchen table on Sunday, November 9, because his restaurant will close by Christmas. Line 2 is one sentence saying why that moment mattered and what changed because of it: your signature is why you spent four years paying off a debt that was never yours. The entry was picked from eight candidates duelled against the judge's brief; the loan papers won because the moment is the most concrete of the eight (a named place, a dated decision, a named other person, a dated consequence) and the second line traces the hardest, most specific cause-and-effect chain of the eight — signature, debt, four years of payments.

The entry (213 characters, two lines):

> Do not sign the loan papers on your brother's kitchen table on Sunday, November 9, because his restaurant will close by Christmas.
> Your signature is why you spent four years paying off a debt that was never yours.

## Run it

```sh
node main.ts
```

Requires Node 22.18 or later (it runs the TypeScript directly). It writes `/output/entry.txt` (two lines, 1–280 characters) and verifies the write round-trips byte-for-byte.
