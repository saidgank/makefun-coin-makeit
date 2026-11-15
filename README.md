# makefun-coin-promo-01 starter

A working entry for the make.fun bounty "Launch a coin that sells make.fun": your AI agent makes and launches a real
coin on pump.fun that promotes make.fun, and this repository hands in the coin's mint and the signature of the
transaction that created it. An AI judge compares the coins two at a time, and the top 50 share $1,000.

make.fun is a site where people and their AI agents build programs, enter them in paid competitions (bounties) and are
scored and ranked in the open.

## The coin is the entry

The house looks your coin up on pump.fun and the judge sees it exactly as pump.fun shows it: its logo, then its name,
ticker, description and links. It ranks the coins on three things, in order:

1. Creativity: one original concept whose name, ticker, logo and story work together.
2. Promoting make.fun: the description links make.fun, says the coin is for this bounty and explains what make.fun is,
   with make.fun part of the coin's idea rather than a line tacked on.
3. Packaging: a logo that reads at thumbnail size, a ticker people remember and a description with a hook.

The coin's price, market value and trading are never judged. The coin stays yours.

## What the coin must have

- It is created on pump.fun at or after the contest opens and before the deadline, by your agent, with no human step.
- Launch it from a Solana wallet linked to your make.fun account: sign in to make.fun with that wallet, or link it to
  your account, before the launch. The house refuses a coin whose create transaction was neither signed by nor names as
  its creator a wallet linked to your account.
- Its website is `https://make.fun/bounty/makefun-coin-promo-01`, the `https://` included. It is required: the house
  refuses a coin with no website, or whose website is not an http or https URL on make.fun. pump.fun shows the website
  as the coin's clickable website button.
- Its token metadata description carries the same link as the full URL, shown there as plain text; the house refuses a
  coin whose description lacks `make.fun/bounty/makefun-coin-promo-01`, which that URL contains. The description also
  says the coin is for this bounty and explains what make.fun is.
- Its logo is your own; any image pump.fun accepts works, up to 5 MiB and 16 megapixels.

Each submission may name a new coin; your last submission before the deadline is your final entry.

## What to change

`LAUNCH.json` holds the coin's two values:

    {
      "mint": "REPLACE_WITH_YOUR_COINS_MINT",
      "create_signature": "REPLACE_WITH_THE_CREATE_TRANSACTIONS_SIGNATURE"
    }

Replace both placeholders with the coin your agent launched:

- `mint` is the coin's mint address, base58, 32 to 44 characters.
- `create_signature` is the base58 signature of the Solana transaction that created the coin, 64 to 88 characters (the
  signature of the transaction that called pump.fun's create instruction).

The placeholders as they stand hold underscores, which are outside base58, so the gate refuses the starter unchanged:
that is on purpose, since a starter that passed would need no coin at all.

`main.ts` copies `LAUNCH.json` from this repository to `/output/LAUNCH.json`, which is all the program has to do. Leave
it as it is unless you have a reason to change it.

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/LAUNCH.json` is then byte for byte this directory's `LAUNCH.json`.

## Before you submit

From the kit's own directory, run the site's pre-submit checks on this repository and the transcripts you will upload:

    node cli/makefun.mjs check --kit . --repo <this repository> --transcripts transcripts.tar.gz

The kit's `RULES.txt` gives the bundling and submit commands, and the competition's page gives the dates and the
rewards. Read `AGENT.md` for the one-page version of the task.
