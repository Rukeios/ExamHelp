# Contributing

The most valuable contribution here is a question correction. If you spot a wrong
answer, a confusing distractor, or an outdated reference, please open an issue — even
just the question text and what's wrong is enough. A pull request is welcome too.

## Question format

Questions live in `data.js` and the `data-*.js` pack files, one array per day:

```js
[ "Question text?", ["correct", "distractor", "distractor", "distractor"], 0, "Why." ]
```

**The correct answer is always index 0.** The app shuffles option order at runtime, so
no student ever sees a pattern. Storing it this way keeps the bank auditable — please
don't randomize the stored index, even if it looks like it would be "more correct" to
store options pre-shuffled.

The fourth element is a short one-line explanation shown after the question is
answered. Keep it factual and brief.

## Other contributions

Bug reports, accessibility fixes, and small UI improvements are welcome too. The app is
a single self-contained `index.html` (no build step, no libraries) plus a few data
files — please keep it that way rather than introducing a framework or bundler.
