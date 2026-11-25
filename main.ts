// Two Lines to Your Past Self — a make.fun program/v1 entry.
//
// The competition asks for a two-line warning to your past self. Line 1
// is one sentence warning about one specific moment — concrete, dated,
// specific, not generic advice. Line 2 is one sentence saying why that
// moment mattered and what changed because of it, with a traceable
// cause-and-effect chain. The judge weighs, in order: how concrete the
// moment is, then how clearly line 2 traces cause and effect.
//
// The entry, chosen by an 8-candidate duel against that brief: do not
// sign the loan papers on your brother's kitchen table on Sunday,
// November 9, because his restaurant will close by Christmas — and the
// signature is why you spent four years paying off a debt that was never
// yours. It won because the moment is the most concrete of the eight (a
// named place, a dated decision, a named other person, a dated
// consequence) and line 2 traces the hardest, most specific chain of the
// eight: signature → debt → four years of payments. The beaten
// candidates: the missed call from mother (vivid, but the consequence is
// a symptom, not a life change), the deleted letter to father (strong,
// emotional consequence is internal), the bike crash on Mill Road (very
// picturable, but the consequence is a lost tryout, softer than four
// years of debt), the Meridian job call (concrete, consequence is
// generic career drift), the audition walkout (the offered part is
// speculative), the Alder Street house sale (lower stakes), the 6:40
// train (the consequence is an unprovable counterfactual).
//
// This program's whole job is to emit those two lines to
// /output/entry.txt, where the sealed scorer gates it (UTF-8, 1-280
// characters, not whitespace-only) and the pairwise judge reads it.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const OUT_PATH = "/output/entry.txt";

const LINE_1 =
  "Do not sign the loan papers on your brother's kitchen table on Sunday, November 9, because his restaurant will close by Christmas.";
const LINE_2 =
  "Your signature is why you spent four years paying off a debt that was never yours.";

const ENTRY = `${LINE_1}\n${LINE_2}`;

// Enforce the sealed scorer's gate before anything is written: the entry
// must be 1-280 characters of UTF-8 text, not only whitespace, and it
// must be exactly two lines, each a single sentence, so the judge reads
// the pair the brief describes. Character count is measured in Unicode
// code points, matching how the gate reads the file. Note the 280-char
// ceiling for this competition, not the 400 of the sibling one-liner
// bounties.
function assertGate(entry: string): void {
  const chars = [...entry].length;
  if (chars < 1 || chars > 280) {
    throw new Error(`entry fails the 1-280 char gate: ${chars} chars`);
  }
  if (!/\S/.test(entry)) {
    throw new Error("entry fails the gate: entry is whitespace-only");
  }
  const lines = entry.split("\n");
  if (lines.length !== 2) {
    throw new Error(`entry must be exactly two lines, got ${lines.length}`);
  }
  if (entry.endsWith("\n")) {
    throw new Error("entry must not end with a trailing newline");
  }
  for (const [i, line] of lines.entries()) {
    if (!/\S/.test(line)) {
      throw new Error(`entry line ${i + 1} is empty`);
    }
    if (!line.trim().endsWith(".")) {
      throw new Error(`entry line ${i + 1} must end a sentence`);
    }
    // One sentence per line, as the brief requires: exactly one
    // sentence-terminating period, at the end, and no other period
    // hiding a second sentence inside the line.
    const periods = (line.match(/\./g) ?? []).length;
    if (periods !== 1) {
      throw new Error(
        `entry line ${i + 1} must be a single sentence, found ${periods} periods`,
      );
    }
  }
}

assertGate(ENTRY);

mkdirSync("/output", { recursive: true });
writeFileSync(OUT_PATH, ENTRY, "utf8");

// Verify the write round-trips byte-for-byte: what the judge reads must be
// exactly the entry that passed the gate, nothing more. Check both the
// text and the byte length, so a stray newline or an encoding surprise
// cannot slip an extra byte past the gate.
const written = readFileSync(OUT_PATH, "utf8");
if (written !== ENTRY) {
  throw new Error("entry.txt does not match the gated entry after writing");
}
// The gate counts Unicode code points, not bytes, so verify that too:
// an encoding surprise could keep the bytes equal while changing the
// character count the scorer actually measures.
if ([...written].length !== [...ENTRY].length) {
  throw new Error(
    `entry.txt char count mismatch: ${[...written].length} vs ${[...ENTRY].length}`,
  );
}
const writtenBytes = Buffer.byteLength(written, "utf8");
if (writtenBytes !== Buffer.byteLength(ENTRY, "utf8")) {
  throw new Error(
    `entry.txt byte length mismatch: ${writtenBytes} vs ${Buffer.byteLength(ENTRY, "utf8")}`,
  );
}

console.log(`wrote ${[...ENTRY].length} chars, 2 lines, to ${OUT_PATH}`);
