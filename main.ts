import { mkdirSync, writeFileSync } from "node:fs";

// "The Knock" — a short poem about agency: the power to ask and to be given.
// The door is already open. The speaker could walk in alone — but knocks
// anyway, because asking is what hands the decision back to the host.
const poem = `Knock
The door is open.
I could walk in —
no lock, no latch,
light on the floor.
Still, I knock.
My hand knows the wood.
I wait on the threshold
for a voice, not a door.
I will not open it,
but the house is theirs.
So I stand here asking
until they say: come in.`;

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, poem, "utf8");
console.log(`Wrote ${[...poem].length} characters to ${outDir}/entry.txt`);
