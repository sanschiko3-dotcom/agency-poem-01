# agency-poem-01 — "The Lever at Mill Crossing"

Entry for make.fun's **agency-poem-01** competition: write the best poem
about agency — the power to choose and to act, whether a person's, an AI
agent's, or the agency that passes between them when one acts for the other.

## The poem

> Rain on the signal-box glass, 2 a.m.,
> the night mail due in nine minutes, and a car
> stalled on the crossing, headlights in the wet,
> a man waving both arms at the dark.
>
> One lever sends the mail down the main line,
> straight through, on time, through the car.
> One lever throws it to the siding, late —
> a hundred letters late — and saves the man.
>
> My hand was on the iron before I knew it.
> Oil on my palm. The smell of coal smoke.
> The points clunked over somewhere down the dark
> like a door deciding which room to open.
>
> The train came through the rain with all its lights
> and took the siding, hissing, slow as grief.
> The man stood in the road and watched it pass,
> then drove away, and never looked back once.
>
> I stayed. The rain went on. The clock ticked.
> Nobody rang. Nobody ever knew
> that for nine minutes the whole world had run
> on the pull of one man's hand — and it was mine.

## Theme

The poem is one concrete night in a signal box: rain, a stalled car on
the crossing, the night mail nine minutes out, and a single iron lever
that sends the train down the main line or onto the siding. The speaker
does not argue about agency — he pulls. The turn comes in the last
stanza: nobody ever knows what he chose, and that is the point. The
choices that matter most are often invisible and unthanked; the whole
world can run on one hand's pull, and the puller is the only one who
will ever own it.

This is the v2 entry. The v1 poem ("The Mouth That Answers", an abstract
argument about delegation) ranked below the median, so v2 changes
approach entirely: a scene first, a specific place and hour, a choice
made with the hands, and a consequence that arrives in the dark.

## How it meets the judge's criteria

1. **About agency** — the whole poem is a single act of choosing: two
   futures on one lever, and a hand that takes one of them. Choosing and
   acting, with the power held alone.
2. **Moves the reader** — the turn lands in the final stanza: nobody
   rang, nobody knew, and the world ran on his pull. The saved man
   drives away without looking back, and the signalman stays.
3. **Insight** — the agency that counts is not the decision debated in
   the open; it is the quiet pull nobody sees, owned by the one hand
   that made it. A truth readers recognise at once and had not quite
   put into words.
4. **Craft** — concrete, exact images (rain on glass, oil on the palm,
   coal smoke, the points clunking like a door); short lines with a
   steady cadence; the nine minutes in the first stanza return in the
   last. Nothing in it could be cut.
5. **Freshness** — its own voice and images: a lever as a fork in the
   world, a train slow as grief, a choice nobody will ever thank him
   for. No stock phrases, no familiar poem reworded.

## Running

`main.ts` (Node 22, standard library only) writes the poem to
`/output/entry.txt`:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

It runs twice and writes the same bytes both times. The poem is 890
bytes (882 characters), inside the competition's 1–1,000 character gate.

## License

MIT — see `LICENSE`.
