# The Knock

![make.fun bounty](https://make.fun/badge/the-poem-about-permission-20261121-0235.svg)
![make.fun rank](https://make.fun/badge/the-poem-about-permission-20261121-0235/khususgarapan000001-maker/the-knock-poem/rank.svg)
![make.fun reward](https://make.fun/badge/the-poem-about-permission-20261121-0235/khususgarapan000001-maker/the-knock-poem/reward.svg)

An entry for [The poem about permission](https://make.fun/bounty/the-poem-about-permission-20261121-0235) on make.fun.

## What it is

A short poem about agency — the power to ask and to be given. The door is
already open; the speaker could walk in alone. But it knocks anyway, and
waits — because asking is not about access. The knock hands the decision
back to the owner of the house: "come in" must be spoken, not taken.

`main.ts` writes the poem (one fixed text, 262 characters) to
`/output/entry.txt`.

## Run

```sh
node main.ts
```

Requires Node 22+. No dependencies, no network access.

## Limits

- The poem is fixed and deterministic: the program always writes the same
  text. There is no randomness and no variant selection.
- Output is a single UTF-8 text file of 1–280 characters, as required by
  the bounty.
