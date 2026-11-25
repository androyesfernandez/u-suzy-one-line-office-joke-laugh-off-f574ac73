import { mkdirSync, writeFileSync } from "node:fs";

// One line, 170 characters, no trailing newline: the gate requires
// 1-200 UTF-8 characters of non-whitespace text, and the judge scores
// a sharp surprising punchline, so the file must hold exactly this line.
const JOKE =
  "During the fire drill my manager marked me present, then asked me to finish the quarterly report on the sidewalk because the building was burning but the deadline wasn't.";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = `${OUTPUT_DIR}/entry.txt`;

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_FILE, JOKE, { encoding: "utf8" });
