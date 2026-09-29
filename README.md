# ExamHelp

A free, offline study app for Microsoft SC-900 and CompTIA Security+ SY0-701, with 801
practice questions.

**Live app:** https://rukeios.github.io/ExamHelp/

## For instructors

If you're teaching a class through this, or study-group leading one:

- Students export their stats to a file from the app's Stats tab (Export stats / Copy
  summary).
- You open [`roster.html`](roster.html) and drop those files on it.
- You get a class table showing who's behind and, more usefully, **which domains a
  student has never once attempted** — that's usually the thing worth calling on, more
  than a low score on something they've at least tried.
- Nothing uploads anywhere. `roster.html` runs entirely in your browser, off your own
  desktop. No server sees a single student's file.
- It's free to use, in your own studying or in a class you teach, no permission needed.
  The code and content are not open source: please don't copy, republish or fork it
  without asking. See [LICENSE](LICENSE).

## What's in it

- **732 practice questions** across both exams, covering every SC-900 and Security+
  SY0-701 domain, weighted toward each exam's real domain percentages.
- **209 acronyms** in a dedicated drill mode.
- Three answer modes: **Think** (untimed, explains as you go), **Blitz** (20s/question,
  timed pressure), and **Written** (type the answer, no multiple choice).
- **Full-length mock exams** for SC-900 (50Q / 65 min) and Security+ (90Q / 90 min),
  built to the real domain mix.
- A **33-day study plan**, a **33-mission scenario campaign**, and PBQ simulators
  (firewall rule ordering, port matching, log hunting) that mirror the exam's
  performance-based question style.
- A **rank ladder, boss fights, daily missions, and achievements** for anyone who wants
  the game layer; a **prestige** system to reset and go again with tougher pacing once
  you clear all 33 days.
- **Stats tab** with trend charts, per-domain accuracy, most-missed questions, and
  export/import so your history survives a cleared cache or a new device.

## Known limitations

- Not affiliated with, endorsed by, or reviewed by CompTIA or Microsoft.
- Practice questions were written from the published exam objectives. They are not
  real exam items and not a brain dump.
- Roughly 131 Security+ questions currently have a correct answer noticeably longer
  than its distractors — a known test-construction flaw being worked through. If you
  spot one, an issue is welcome.
- Stats are stored in your browser only. Export them (Stats tab → Export stats) or you
  will lose them if you clear site data or switch devices.

## Running it locally

Clone the repo and open `index.html` in a browser. That's it — no build step, no
dependencies, no server.

```
git clone https://github.com/Rukeios/ExamHelp.git
cd ExamHelp
# open index.html directly, or serve the folder with any static file server
```

### Deploy with GitHub Pages

In the repository settings, select **Pages**, choose **Deploy from a branch**, and publish the `main` branch from its root directory.

## Support

ExamHelp is free and always will be. If it helped you pass and you're in a position to,
you can chip in at [ko-fi.com/rukeios](https://ko-fi.com/rukeios). If you're a student, please don't —
pass your exam and tell someone else about it instead.