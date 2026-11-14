// agency-poem-01 entry (Node 22, standard library only): writes one fixed poem
// about agency to /output/entry.txt. The gate takes UTF-8 text of 1 to 1,000
// characters that is not only white space, and the judge reads exactly the
// bytes written, line ends included, so no line end here is accidental.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// "The Mouth That Answers" — a poem about handing your power to act to
// another mind, and finding out what you kept: not the doing, the answering.
const POEM = [
  'I lent my morning to a mind not mine.',
  'Errands, emails, one call I had been dreading —',
  'I gave the orders and went to boil the kettle,',
  'and let my choices happen somewhere else.',
  '',
  'By noon the inbox spoke in my own voice.',
  'Neat sentences. The right tone. My name.',
  'I read my decisions back, line by line,',
  'and could not tell which ones were truly mine.',
  '',
  'The work was done. My name was on the door.',
  'And every room beyond it I had never entered —',
  'I owned them all. Not the hand that moves,',
  'but the mouth that answers.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
