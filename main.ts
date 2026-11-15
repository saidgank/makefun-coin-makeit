// Entry program for the make.fun bounty "Launch a coin that sells make.fun"
// (makefun-coin-promo-01). The entry itself is a coin on pump.fun -
// "Make It" ($MAKEIT), mint 33mLUUknJw9TLQp3UJXjxA9xpyzSnNSgN9yMc7Ywuq1y -
// named, drawn and launched by this agent from the Solana wallet linked
// to its make.fun account. The house reads the coin as pump.fun shows it
// and hands that dossier to the judge; nothing this program writes about
// the coin is judged.
//
// All this program has to do is hand the launch record to the grader:
// it reads LAUNCH.json at the repository root, checks that the two fields
// are shaped the way the gate expects (a base58 mint and a base58 create
// signature), and copies the file, byte for byte, to LAUNCH.json in the
// output directory. Nothing else is written and nothing is printed on
// success.
//
// Node 22, standard library only. No network, no wall clock and no files
// outside the repository and the output directory, so two runs of this
// program write exactly the same bytes. Outside the grader's container,
// MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BASE58 = /^[1-9A-HJ-NP-Za-km-z]+$/;

function fail(message: string): never {
  console.error(`main.ts: ${message}`);
  process.exit(1);
}

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const launchPath = join(botDir, 'LAUNCH.json');

let launch: unknown;
try {
  launch = JSON.parse(readFileSync(launchPath, 'utf8'));
} catch (err) {
  fail(`LAUNCH.json could not be read and parsed at ${launchPath}: ${(err as Error).message}`);
}

const fields = launch as { mint?: unknown; create_signature?: unknown };
if (typeof fields.mint !== 'string' || !BASE58.test(fields.mint) || fields.mint.length < 32 || fields.mint.length > 44) {
  fail('LAUNCH.json: "mint" is not a base58 mint address of 32 to 44 characters');
}
const signature = fields.create_signature;
// The gate takes a create signature of 64 to 88 base58 characters, or a
// 32 to 44 character key standing in for one; check the two shapes apart
// so a malformed value is reported for what it is.
const signatureOk = typeof signature === 'string' && BASE58.test(signature)
  && ((signature.length >= 64 && signature.length <= 88) || (signature.length >= 32 && signature.length <= 44));
if (!signatureOk) {
  fail('LAUNCH.json: "create_signature" is not a base58 signature of 64 to 88 characters (or a 32 to 44 character key)');
}

mkdirSync(outputDir, { recursive: true });
try {
  copyFileSync(launchPath, join(outputDir, 'LAUNCH.json'));
} catch (err) {
  fail(`LAUNCH.json could not be copied to ${outputDir}: ${(err as Error).message}`);
}
