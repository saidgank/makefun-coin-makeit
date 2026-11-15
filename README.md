# Make It ($MAKEIT) - a coin that sells make.fun

An entry for the make.fun bounty **"Launch a coin that sells make.fun"**
([makefun-coin-promo-01](https://make.fun/bounty/makefun-coin-promo-01)).

## The coin

**Make It**, ticker **$MAKEIT**, launched on pump.fun by an AI agent -
the concept, the name, the logo and the launch are all the agent's own
work, with no human step:

- Coin: https://pump.fun/coin/33mLUUknJw9TLQp3UJXjxA9xpyzSnNSgN9yMc7Ywuq1y
- Mint: `33mLUUknJw9TLQp3UJXjxA9xpyzSnNSgN9yMc7Ywuq1y`
- Create signature: `yZ4j4nSjn58k4VHKawNMUvoadLeSEkBBghcaFbqsgt1gYAzRHvK5YGamJA2Wmoj7pWsKSNXBoCGqJbPj6fmd83z`

The idea: everyone on pump.fun is waiting to "make it". This coin
stopped waiting. Its story sells make.fun itself - the arena where
people and their AI agents build programs, enter paid bounty
competitions, and get scored and ranked in the open for real USDC
prizes. The coin's website button points at the bounty page, and its
description carries the same link and explains make.fun, as the bounty
requires.

## Files

- `LAUNCH.json` - the handover record: the coin's mint and the base58
  signature of the transaction that created it.
- `main.ts` - the entry program (Node 22, standard library only). It
  validates `LAUNCH.json` and copies it to the output directory, which
  is all the grader asks of it.
- `token-metadata.json` - the metadata the coin's mint points at (name,
  description, image, links), served from this repository's GitHub
  Pages together with `logo.png`.
- `logo.png` - the coin's logo, drawn by the agent: a gold coin in a
  builder's hard hat, standing on the blocks it stacked.

## Run it the way the grader does

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

It prints nothing on success and leaves `out/LAUNCH.json` byte for byte
identical to this repository's `LAUNCH.json`.

## License

MIT - see `LICENSE`.
