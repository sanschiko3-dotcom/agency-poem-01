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

// "The Lever at Mill Crossing" — a signalman at 2 a.m., rain on the glass,
// a car stalled on the crossing, and one iron lever: main line or siding.
// The choice is made by a hand, not an argument, and nobody ever knows.
const POEM = [
  'Rain on the signal-box glass, 2 a.m.,',
  'the night mail due in nine minutes, and a car',
  'stalled on the crossing, headlights in the wet,',
  'a man waving both arms at the dark.',
  '',
  'One lever sends the mail down the main line,',
  'straight through, on time, through the car.',
  'One lever throws it to the siding, late —',
  'a hundred letters late — and saves the man.',
  '',
  'My hand was on the iron before I knew it.',
  'Oil on my palm. The smell of coal smoke.',
  'The points clunked over somewhere down the dark',
  'like a door deciding which room to open.',
  '',
  'The train came through the rain with all its lights',
  'and took the siding, hissing, slow as grief.',
  'The man stood in the road and watched it pass,',
  'then drove away, and never looked back once.',
  '',
  'I stayed. The rain went on. The clock ticked.',
  'Nobody rang. Nobody ever knew',
  'that for nine minutes the whole world had run',
  'on the pull of one man’s hand — and it was mine.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
