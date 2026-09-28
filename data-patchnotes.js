// Patch notes. Newest entry FIRST — add new releases at the top of the array.
// window.PATCHNOTES = [ { v, date, title, tag, items:[] } ]
// tag: "feature" | "content" | "fix" | "balance"
window.PATCHNOTES = [

{ v:"1.5.0", date:"2026-09-29", title:"Pick your program: SC-900, Security+, or Both", tag:"feature", items:[
  "First launch now asks which exam you're studying for. SC-900 only, Security+ only, or Both — pick Both if you're doing what I'm doing.",
  "Whatever you pick, the Plan tab shows a clean day count for just that program (SC-900 runs 1-12, Security+ runs 1-21) — nothing under the hood was renumbered, so your existing attempt history still lines up.",
  "The final boss, Ransomware King, stays reachable in every program: clear the four SC-900 bosses, the five Security+ bosses, or all nine on Both.",
  "Switch programs anytime from the header. Switching only hides the other program's content — none of your progress is deleted, and it's all back the moment you switch again.",
  "Stats export/import now remembers your program choice (older files without one are treated as Both).",
  "roster.html: a student's domains outside their chosen program now show as n/a instead of looking like a missed gap, plus a Program column and filter."
]},

{ v:"1.4.0", date:"2026-09-28", title:"Save your stats, class rosters, and a free-forever notice", tag:"feature", items:[
  "Stats tab: export your progress to a file, copy a plain-text summary for email, and import a file back in — merge or replace, your call.",
  "New roster.html for instructors: drop a stack of students' exported files on it and get a class table, including which domains a student has never once attempted. Nothing uploads anywhere.",
  "40 more SC-900 questions rebalancing Security solutions coverage toward its real 35-40% exam weight.",
  "Support link next to patch notes: ExamHelp is free, no account, no ads, and it's staying that way. It's just a quiet way to chip in if it helped and you're able to.",
  "Renamed the Prestige tier that used to share a name with the Insider Threat boss — it's now 'Rogue Insider' so the two don't get mixed up in your run history."
]},

{ v:"1.3.0", date:"2026-09-27", title:"Patch notes, mock exams, acronym drill", tag:"feature", items:[
  "Quiet version number in the header — click it to see what changed.",
  "Full-length timed mock exams for SC-900 (50 questions, 65 minutes) and Security+ (90 questions, 90 minutes), built to real domain weighting.",
  "Mock exams give a readiness verdict and a raw percentage only — no invented scaled score.",
  "Acronym drill: 209 acronyms, built fresh every run so the same four options never repeat.",
  "557 more questions pulled in from the extended question banks."
]},

{ v:"1.2.0", date:"2026-09-26", title:"Prestige and exam-date camp mode", tag:"balance", items:[
  "Prestige now carries real tiers — Script Kiddie through Nation-State, then APT-5 and up — and the run actually gets harder each time instead of just resetting.",
  "Lifetime stats and custom questions now survive a prestige; only the current run resets.",
  "Exam dates are optional now. Turn on 'I have an exam booked' to get countdown cards back; leave it off and the app runs as a plain 33-day camp."
]},

{ v:"1.1.0", date:"2026-09-27", title:"Boss encounter animation", tag:"feature", items:[
  "Domain bosses now get a full intro: curtain, reveal, name slam, taunt, then the fight.",
  "In-fight flinch, rage, and damage-number effects, plus a life-pip HUD that breaks as you take hits.",
  "Skip the intro anytime with a click or Escape. Reduced-motion is fully respected."
]},

{ v:"1.0.0", date:"2026-09-26", title:"Boss artwork and packet tracer", tag:"content", items:[
  "Real artwork, names, and taunts for all nine domain bosses plus the Ransomware King.",
  "New Packet Tracer PBQ alongside Firewall Builder, Port Match, and Log Hunt.",
  "PBQs switched from drag-and-drop to tap-to-place so they work properly on touch screens.",
  "Added a Prestige button for once all 33 days are complete."
]},

{ v:"0.9.0", date:"2026-09-25", title:"Scenario campaign", tag:"feature", items:[
  "33 missions at a fictional Texas water utility, one per study day, covering every domain in both exams.",
  "Feedback after each decision and a debrief at the end of each mission.",
  "A day only unlocks the next day's campaign mission after that day's campaign is completed — no skipping ahead."
]},

{ v:"0.8.0", date:"2026-09-25", title:"Question Lab", tag:"feature", items:[
  "Generate fresh questions on your weakest domain, review them, and keep the good ones.",
  "Approved questions join that day's pool for good and flow into weak spots and stats."
]},

{ v:"0.7.0", date:"2026-09-24", title:"Game layer", tag:"feature", items:[
  "Rank ladder from Recruit to Cyber All-Star, XP for every correct answer with bonuses in Blitz and Written.",
  "Daily missions and achievements like Clean Sweep, Night Shift, and Crypto Sniper.",
  "A day now unlocks the next day only once all three quiz modes are completed — the old 'Complete day' button is gone."
]},

{ v:"0.6.0", date:"2026-09-24", title:"PBQ simulators", tag:"feature", items:[
  "Firewall Builder: order the rules, then watch test packets get allowed or blocked.",
  "Port Match: drag protocols onto port numbers against the clock.",
  "Log Hunt: click the log lines that show an attack and name the attack type."
]},

{ v:"0.5.0", date:"2026-09-24", title:"Stats and coaching", tag:"feature", items:[
  "Score trend, accuracy by domain against an 80% target, and a most-missed list with one-click reruns.",
  "Blitz vs Think vs Written comparison to separate slow recall from real gaps."
]},

{ v:"0.1.0", date:"2026-09-24", title:"First build", tag:"feature", items:[
  "33-day plan covering SC-900 and CompTIA Security+ SY0-701.",
  "Plain-English lesson, key terms, and one exam trap per day.",
  "Questions across three modes: Blitz, Think, and Written.",
  "Question order and answer positions reshuffle every run; missed and unseen questions come up more often."
]}

];
