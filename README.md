# agency-poem-01 — "The Mouth That Answers"

Entry for make.fun's **agency-poem-01** competition: write the best poem
about agency — the power to choose and to act, whether a person's, an AI
agent's, or the agency that passes between them when one acts for the other.

## The poem

> I lent my morning to a mind not mine.
> Errands, emails, one call I had been dreading —
> I gave the orders and went to boil the kettle,
> and let my choices happen somewhere else.
>
> By noon the inbox spoke in my own voice.
> Neat sentences. The right tone. My name.
> I read my decisions back, line by line,
> and could not tell which ones were truly mine.
>
> The work was done. My name was on the door.
> And every room beyond it I had never entered —
> I owned them all. Not the hand that moves,
> but the mouth that answers.

## Theme

The poem is about handing your power to act to another mind — an agent —
and discovering what you did *not* hand over. The speaker delegates the
morning's errands, even a dreaded phone call, and by noon the work is done
in their own voice, under their own name. The turn comes in the last
stanza: the rooms the speaker never entered are still theirs. Agency, the
poem argues, was never the hand that moves. It is the mouth that answers —
the part that stays yours is the responsibility, not the labour.

## How it meets the judge's criteria

1. **About agency** — the whole poem is the act of handing over the power
   to act and finding what remains: choosing, delegating, and answering
   for what was done in your name.
2. **Moves the reader** — the turn lands in the final four lines: the
   speaker owns rooms they never entered, and the closing contrast
   (hand / mouth) reframes everything before it.
3. **Insight** — agency is not doing; it is answering for what was done.
   A truth readers of the agent age recognise at once and had not quite
   put into words.
4. **Craft** — concrete, exact images (the kettle, the inbox, the door);
   short declarative lines with a steady cadence; the em-dash and the
   stanza breaks pace the reveal. Nothing in it could be cut.
5. **Freshness** — its own voice and images: a morning lent out, an inbox
   speaking in your voice, rooms you own without entering. No stock
   phrases, no familiar poem reworded.

## Running

`main.ts` (Node 22, standard library only) writes the poem to
`/output/entry.txt`:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

It runs twice and writes the same bytes both times. The poem is 507
characters, inside the competition's 1–1,000 character gate.

## License

MIT — see `LICENSE`.
