// The Long Roast: Lawmakers and the File They Cannot Convert — one sentence.
// Writes the entry text to /output/entry.txt. Deterministic: no input, no network.
//
// Judge criteria, most important first (competition.yaml): (1) one-sentence
// satirical roast of lawmakers who regulate AI/crypto/the internet but cannot
// convert a file to PDF; (2) a real turn — set up the lawmaker's authority,
// then undercut it with the file they cannot convert; (3) aim stays on
// lawmakers and the rules they write; (4) reads clean in one pass, punch on
// the last few words; (5) a specific, unexpected detail over a worn
// tech-illiteracy cliche.
//
// Candidates drafted (14), rejected for modal/weak reasons:
//   1. "They wrote a 400-page law regulating AI but cannot convert a Word
//      document to PDF." — REJECTED: the modal entry, exactly what most of
//      the field will say; fails C5 outright.
//   2. "Congress regulates the internet but still prints its emails." —
//      REJECTED: worn cliche (prints emails), no turn, no specific detail.
//   3. "The chair of the AI oversight committee banned facial recognition
//      in schools, then asked her intern to fax the bill to the printer." —
//      REJECTED: fax joke is a decade-old cliche; the turn lands mid-sentence.
//   4. "He co-sponsored the 312-page Crypto Consumer Protection Act and
//      still forwards his tax forms as a photo of his laptop taken on his
//      phone." — REJECTED: decent, but the punch is a tax-form aside, not
//      the conversion itself; weaker C2.
//   5. "The committee that regulates machine learning voted 41-3 to require
//      AI watermarks, then emailed the press a screenshot of the bill pasted
//      into Paint." — RUNNER-UP: specific (41-3, Paint), good turn, but the
//      punch lands on the tool rather than on the act of converting.
//   6. "They fined a crypto exchange $40 million for unregistered
//      securities, then lost the settlement PDF because someone saved it as
//      'final_FINAL_v7 (2).docx'." — REJECTED: the filename gag is a known
//      meme, not an unexpected detail; fails C5.
//   7. "The lawmaker who wants a federal license for every AI model still
//      asks his chief of staff to turn his handwritten notes into a PDF by
//      photographing them." — REJECTED: close, but "handwritten notes" is
//      softer than the winner's direct conversion verb.
//   8. "Congress wrote 63 pages of rules for self-driving cars and the
//      transport secretary's office still converts documents by printing,
//      signing, scanning, and emailing the scan to itself." — REJECTED:
//      too long, the punch is a list, not a single landing.
//   9. "The senator who chairs the AI committee introduced a bill to audit
//      every algorithm in America, then called the help desk because his PDF
//      reader asked him to update Adobe." — REJECTED: update-Adobe is a
//      worn cliche; fails C5.
//  10. "They passed a law requiring every crypto exchange to file
//      machine-readable reports, then filed their own disclosure as a
//      47-page fax." — REJECTED: fax again; also the punch is the medium,
//      not the conversion.
//  11. "The House AI task force published a 91-page report on the future of
//      intelligence and distributed it as a Word file named 'AI report - DO
//      NOT EDIT (copy) (copy).docx'." — REJECTED: filename meme again.
//  12. "The lawmaker who would put a warning label on every chatbot still
//      thinks a PDF is something you make by pressing Print Screen and
//      pasting it into Word." — REJECTED: explains the joke instead of
//      landing it; the brief says a roast that explains itself has lost.
//  13. "Senator Briggs wrote the bill that would license every AI lab in
//      the country, then asked an aide to convert his speech to PDF by
//      taking a photo of the monitor." — REJECTED: same image as the winner
//      but 30+ bytes longer and the setup names a fictional senator, which
//      reads as invented rather than pointed.
//  14. "The senator who wrote the 214-page AI Accountability Act still
//      emails his staff a scanned photo of his screen when he needs a
//      PDF." — REJECTED in favour of the winner: same core, but "emails
//      his staff a scanned photo" buries the conversion verb; the winner
//      puts "converts a file to PDF" — the brief's own phrase — directly
//      against the absurd method.
//
//   WINNER (119 chars, limit 320, one sentence): "The senator who wrote the
//   214-page AI Accountability Act still converts a file to PDF by
//   photographing his own monitor."
//   Why it wins: the setup names a concrete law (214-page AI Accountability
//   Act — authority, C2/C3), then the turn undercuts it with the exact act
//   the brief names (converting a file to PDF) done by the most
//   undignified method imaginable (photographing his own monitor), which is
//   a specific, unexpected, visual detail rather than any worn cliche
//   (C5). The punch lands on the last three words (C4), and at 119 chars
//   it is far under the cap, so it wins the bytes tie-break against any
//   near-equal line.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = `The senator who wrote the 214-page AI Accountability Act still converts a file to PDF by photographing his own monitor.`;

const MAX_CHARS = 320; // competition cap
if (ENTRY.length > MAX_CHARS) {
  console.error(`entry is ${ENTRY.length} chars, over the ${MAX_CHARS} cap`);
  process.exit(1);
}
if ((ENTRY.match(/\./g) || []).length !== 1) {
  console.error("entry must be exactly one sentence");
  process.exit(1);
}
if (ENTRY.includes("\n")) {
  console.error("entry must be a single line");
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote /output/entry.txt (${ENTRY.length} chars)`);
