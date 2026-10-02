// Patch notes. Newest entry FIRST — add new releases at the top of the array.
// window.PATCHNOTES = [ { v, date, title, tag, items:[] } ]
// tag: "feature" | "content" | "fix" | "balance"
window.PATCHNOTES = [

{ v:"2.3.1", date:"2026-10-02", title:"Security+ now has the full level path", tag:"content", items:[
  "Every Security+ lesson level (13-31) now has what SC-900 has: an interactive lesson, Pocket Notes with recall flashcards, Don't Mix These Up comparisons, Real-World scenarios, a Check yourself step and exam-style questions. That's 94 notes (188 flashcards), 12 new comparisons, 166 scenarios and 73 exam-style questions.",
  "The review levels (19, 27, 32) have a guided review and an independent check that draws on the levels they cover. Level 31's PBQ drills cover ports, log reading and firewall rule order, with matching and drop-down questions.",
  "Each Security+ level lists the exact Professor Messer SY0-701 videos for its objectives, in order, plus the CompTIA objective numbers. Every video link opened on October 2.",
  "Three comparison cards that were waiting for Security+ notes are now live: threat vs vulnerability vs risk, IDS vs IPS, and RTO vs RPO.",
  "This content was drafted with AI help. An independent automated review then read every item: no answer key was wrong, three factual errors and seven ambiguous questions were fixed, and each lesson and note now says plainly that it is a draft. Some questions can still be answered by ruling out off-topic options, and no human expert has reviewed it. If something looks wrong, tell us. Your progress and history are untouched."
]},

{ v:"2.3.0", date:"2026-10-02", title:"Exam-style questions and a fuller path for each level", tag:"feature", items:[
  "New question formats that match what Microsoft exams use alongside multiple choice: Yes/No statement sets, drop-down sentences, choose two, and matching. There are 62 for SC-900, spread across every lesson level.",
  "Each correct selection is worth one point, so a three-statement question can earn one, two or three. After you submit, every part is marked and explained.",
  "Where they appear: in Think-mode level quizzes, in review, in a new Exam-style choice in Practice, and as their own step in each level. Blitz and Written quizzes stay multiple choice.",
  "The SC-900 mock exam is closer to the real thing: 45 minutes (Microsoft's exam time), 50 questions weighted by the published skills outline, and 20 of them in the exam-style formats. Your extra-time setting still applies.",
  "Each level's path now has up to seven numbered steps: Lesson, Microsoft Learn, Pocket Notes, Flashcards, Check yourself, Exam-style, Level quiz. Home's main button always names your next step. Only the level quiz unlocks the next level, as before.",
  "Course material is up front: every SC-900 level links straight to its matching Microsoft Learn modules, on Home and at the top of the lesson. Security+ levels link to the Professor Messer videos.",
  "All 62 questions were checked against Microsoft Learn on October 2 by an independent automated review, which also removed answer giveaways. They are original questions, not Microsoft's, and haven't had a human expert review."
]},

{ v:"2.2.5", date:"2026-10-01", title:"Move your progress to another device", tag:"feature", items:[
  "New: Move to another device, in Progress and in Plan settings. Your computer shows a short loop of codes, and your phone scans them with its camera. Everything comes across: levels, XP, bosses, your campaign run, quiz history, notes and settings.",
  "No account and no upload. The codes are made and read on your own devices. Only show them to your own phone, since they contain your study history.",
  "The first code opens the site on your phone straight to Receive. New on a phone? The first screen also has \"Move your progress here\".",
  "Codes change slower than three times a second (slower still with Calm mode or reduce motion), and you can pause and step through them one at a time.",
  "It works both ways: a phone can show the codes and a computer with a webcam can scan them. The steps on screen change to match which device you're on.",
  "Prefer a file? Share backup file sends it with AirDrop, Messages, email or a drive, and the phone opens it from Receive.",
  "Moving replaces what's on the receiving device, after showing you what's coming. A safety copy is kept, so you can undo it from Progress."
]},

{ v:"2.2.4", date:"2026-10-01", title:"Accessibility and focus", tag:"feature", items:[
  "New Accessibility button at the top of every page. Settings apply right away, save on this device, and are included in your backup.",
  "Time limits: Standard, 1.5×, 2× or No timer. This covers Blitz (including Blitz level quizzes from Prestige 1), timed acronym drills and the mock exam. With No timer, nothing runs out and the mock exam shows time used instead.",
  "Focus mode hides the level list, rewards, streaks and extras while you study. Home shows just your next step, with everything else folded under \"More on Home\".",
  "Calm mode turns off animations, effects and celebrations on any device, the same way your device's reduce-motion setting does.",
  "Reading: three text sizes, roomier line spacing, and an optional easy-to-read font (Atkinson Hyperlegible). The smallest text in the app is now larger.",
  "Read aloud adds a button to lessons, guided practice, cases and quiz questions. It uses your device's built-in voice, so nothing is sent anywhere. Reading stops when you move on.",
  "Start here: each level now shows its steps, Learn → Check yourself → Level quiz, with where you are highlighted. Tap a step to jump to it. Only the level quiz unlocks the next level, as before.",
  "Home picks up where you left off in an interactive lesson, naming the next section."
]},

{ v:"2.2.3", date:"2026-10-01", title:"Interactive lessons for Levels 2 to 6", tag:"feature", items:[
  "Levels 2 to 6 now use the interactive lesson layout from the Security basics pilot: short sections you can explore, guided practice beside each one, the matching Pocket Note, and an independent check at the end.",
  "Level 2 compares encryption, hashing and encoding side by side, and separates authentication, authorization and auditing with workplace examples.",
  "Level 3 explores identities at a fictional clinic on a simple map: members, guests, groups, devices and workload identities, with hybrid and external identities explained.",
  "Level 4 compares sign-in methods by factor type and phishing resistance, walks through a self-service password reset, and shows why more steps don't mean more factors.",
  "Level 5 evaluates sample access requests against a stated policy (a simplified exercise, not the full Entra policy engine) and separates roles from Conditional Access, risk and governance.",
  "Level 6 is a review checkpoint: six guided cases with links back to the right lesson and note, then an independent check drawn from Levels 1 to 5.",
  "11 new scored scenarios fill gaps so each check covers the lesson's main objectives without repeating questions. Guided practice still never counts toward your score, and unlocking still needs just the one level quiz.",
  "Content was checked against Microsoft Learn by an independent automated review. It hasn't had a human expert review yet."
]},


{ v:"2.2.2", date:"2026-10-01", title:"Interactive lesson pilot: Security basics", tag:"feature", items:[
  "Level 1, Security basics, is now an interactive lesson in five steps: the CIA triad, shared responsibility, defense in depth, Zero Trust, and a final check.",
  "Each step lets you pick what to look at (Confidentiality, Integrity or Availability; on-premises, IaaS, PaaS or SaaS; a defense layer; a Zero Trust principle) and shows a short explanation and a workplace example. Arrow keys move between the options.",
  "Guided practice sits beside each step: a workplace situation with feedback on every answer. Because the lesson is on screen, these answers are practice only. They aren't saved as scores and don't count toward readiness or unlocking the next level.",
  "The final step is an independent check: the lesson is hidden and you answer different scenarios, which count as normal scored practice.",
  "Each step has its Pocket Note with a Save button. Saved notes go to your Field Guide as before. Your place in the lesson is remembered.",
  "One quiz completes a level now, instead of three. Its mode depends on your prestige: Think on your first run, Blitz from Prestige 1, and Written from Prestige 4 (review levels are still Written from the Shadow IT tier). If you already finished the right quiz for your current level, it counts and the level is marked complete. Think, Blitz and Written all stay available in Practice.",
  "Prefer the old layout? Use \"Switch to the classic lesson view\" at the bottom of the lesson. Other lessons keep the current layout while this pilot is reviewed."
]},


{ v:"2.2.1", date:"2026-10-01", title:"Tighter Arena, lesson visuals", tag:"fix", items:[
  "The rename notice is now a small dismissible line on Home only, instead of a wide strip on every screen.",
  "Arena: the challenge button sits right under the boss's name and status, so it's visible without scrolling on a typical laptop screen. The artwork is still large, just shorter.",
  "Boss panels now take on the exact background color of each boss's artwork, so the image and the text read as one piece with no visible seam.",
  "Lessons get a few visuals where they help: a CIA triad diagram, a shared-responsibility table across on-premises, IaaS, PaaS and SaaS, the defense-in-depth layers, real hashing examples (expandable), the three MFA factor types, and the Conditional Access signals-to-decision flow."
]},


{ v:"2.2.0", date:"2026-10-01", title:"Rukeios Study: a cleaner, calmer look", tag:"feature", items:[
  "New name and logo: CertificationNation is now Rukeios Study, your certification field guide. Your progress, notes, campaign decisions, rewards and backups all carry over, and older backup files still import.",
  "One progress display in the header: your level in the plan. Rank, XP and your run moved to the Arena and Progress, where they're explained.",
  "Home leads with the one thing to do next, shows what the lesson covers, and previews your next boss with its artwork. Review and the five-minute sprint sit beside it in a compact list, and empty sections no longer take up space.",
  "The Arena opens on your next encounter: large artwork, what it tests, whether it's available, locked or defeated (shown with an icon and words, not just color), and a clear Challenge button. Pick any boss below to bring it forward. Rank, missions, achievements and seals are underneath.",
  "The Campaign tab now introduces Night Shift at Leon River Water properly: the story setup, where you are (or where you'll start), one Start or Resume button, and what carries over between modes.",
  "Lessons: the 33 level boxes are replaced by a level list grouped by exam domain, with your current level open and the rest one tap away. Lessons read better: shorter lines, clearer section headings, a cleaner terms list, a stronger exam-trap callout, and quick links to that level's Pocket Notes and flashcards.",
  "Study tools are grouped into Learn, Practice and Build.",
  "A new look throughout: paper-toned light theme, matching dark theme, new type, and fonts served with the app instead of from Google."
]},


{ v:"2.1.0", date:"2026-10-01", title:"CertificationNation 2.1: study your way", tag:"feature", items:[
  "ExamHelp is now CertificationNation. Nothing about your progress changed: levels, scores, campaign decisions, rewards and backups all carry over, and old ExamHelp backup files still import.",
  "New in Study: Notes & cards. Pocket Notes are short, copyable study cards for every SC-900 lesson (61 concepts), each with an exam clue and links to its Microsoft Learn sources. Copy a note, save it, or practice it.",
  "Flashcards built from the same notes: see the prompt, recall it, press Space to reveal, then rate yourself Again, Almost or Got it. Choose 5, 10 or an open-ended session. Your ratings decide when a card comes back; they're kept apart from quiz scores and never change your accuracy.",
  "Don't Mix These Up: 19 side-by-side comparisons of concepts people confuse, such as authentication vs authorization, hashing vs encryption, and Defender for Identity vs Entra ID Protection. Each has the difference, an exam clue, a small workplace example and why the other option doesn't fit.",
  "Real-World Practice: 78 SC-900 workplace scenarios, three for each concept group: identify what's happening, choose the next step, or pick what fits the constraints. Every answer explains why the other options don't fit and gives a copyable takeaway. Find them under Practice → Real-World, or finish any deck with one.",
  "My Field Guide collects everything you save. Search it, add your own notes (kept separate from the study content), copy one item or a selection, or print a clean copy.",
  "5-Minute Sprint: three notes, three recall cards and one scenario, with a short summary at the end. No countdown; stop and pick up later.",
  "Deck stamps and cosmetic titles for studying, plus a milestone the first time you remember a card on a later day. None of them add XP. The Night Shift achievement is retired: the app shouldn't reward staying up late. If you earned it, it stays on your profile.",
  "Security+ notes, flashcards and scenarios are next, in batches. This release covers SC-900 fully; the coverage report in the repo shows exactly what exists.",
  "Content was drafted with AI help and checked against Microsoft Learn by an independent automated review. It hasn't had a human expert review yet, so use Report a problem if something looks wrong.",
  "Full backups now include your saved items, flashcard progress, stamps, titles and any unfinished sprint or flashcard session."
]},


{ v:"2.0.1", date:"2026-09-30", title:"Honest results and a cleaner Home", tag:"fix", items:[
  "Ending a quiz early now says so up front: \"Session ended early: 1 of 5 answered.\" Unfinished sessions no longer get 80%-target praise, a Clean Sweep badge, or credit toward finishing a level's modes. A button lets you answer the questions you skipped.",
  "No more repeated questions. If a set has fewer unique questions than you asked for, the session is shorter and tells you why, with a separate retry round if you want another pass.",
  "Boss fights in small domains use the questions available instead of repeating them. You still need to finish at 80% or better with 3 mistakes or fewer.",
  "Home's headline is shorter: \"Continue: Security basics\", with the level's topics underneath in smaller text."
]},


{ v:"2.0.0", date:"2026-09-30", title:"ExamHelp 2.0: know what to do next, and remember it", tag:"feature", items:[
  "New Home screen. It tells you the one thing to do next and why: finish a quiz you left, review what's due, or continue your plan. The domain map shows how much of each area you've covered.",
  "Five places instead of eight tabs: Home, Study, Campaign, Arena and Progress. Lessons, Practice, Acronyms, PBQs, Mock exam and Question Lab all live under Study.",
  "Review that sticks. Every question you answer gets a schedule: get it right and it comes back in 1, 3, 7, then 14 days; miss it and it's back tomorrow. Answering it again the same day doesn't count twice. Review sessions show why each question was picked.",
  "Practice now actually favors your weak spots. Before, the picker ranked your weak questions and then shuffled the ranking away.",
  "Practice any domain, even ones your plan hasn't reached yet. Level unlocks still decide your progress and mock exams.",
  "Progress shows four honest numbers instead of one readiness score: coverage, recent accuracy, delayed recall and mock results, each with how many answers it's based on.",
  "Full backups. Download everything (levels, XP, bosses, your campaign run, every quiz) and restore it on another device. A damaged file changes nothing, and you can undo an import. The instructor summary still works with the roster.",
  "Leaving a quiz halfway now pauses it. Home offers to pick up where you stopped.",
  "Campaign: answer choices stay in place after you pick, the debrief shows what you chose next to the recommended call, endings only describe things you actually did, and a new facility map lights up zones as you finish missions. The old per-level missions in self-paced were retired; there is one campaign now.",
  "Bosses: 3 mistakes allowed, the fourth ends the fight, so 12 of 15 wins, matching the 80% on screen. Boss cards are now dossiers (what each tests, how to unlock it, your best score) and you earn a seal for each domain.",
  "Choose Light, Dark or System under Plan settings.",
  "Spot a bad question? 'Report a problem with this question' builds a report you can copy or open as a GitHub issue. Your answer is only included if you tick the box.",
  "The program picker shows real counts: SC-900 is 9 lessons + 3 checkpoints, Security+ is 17 lessons + 4 checkpoints.",
  "If your browser refuses to save, ExamHelp now tells you instead of failing silently."
]},

{ v:"1.9.3", date:"2026-09-29", title:"Acronym drill: one direction only", tag:"balance", items:[
  "Reverse mode is gone from the acronym drill. Picking the acronym from its full name was too easy, since you could just match the first letters.",
  "Every acronym question now shows the acronym and asks what it stands for, with look-alike wrong answers that share its initials."
]},

{ v:"1.9.2", date:"2026-09-29", title:"Take your time on acronyms", tag:"fix", items:[
  "The acronym drill no longer jumps to the next question on its own. After you answer, it shows the acronym and its full name and waits for you, so you can write it down. Press Next (or Enter) when you're ready.",
  "Only Blitz moves on automatically now, whether you picked it yourself or you're on a timed campaign quiz. Every other quiz waits for you."
]},

{ v:"1.9.1", date:"2026-09-29", title:"Campaign quizzes get a clock", tag:"balance", items:[
  "From the Shadow IT prestige tier up, campaign level quizzes are timed: 20 seconds per question, explanations at the end.",
  "A question that runs out of time counts as wrong. You still need 80% on the full quiz to move on, and you can retake it as often as you like."
]},

{ v:"1.9.0", date:"2026-09-29", title:"A cleaner ExamHelp, and campaign mode gets its own page", tag:"feature", items:[
  "New look up top: a slim ExamHelp bar and one status line with your level, progress and rank. Program, study mode, exam dates and start date now live under Plan settings.",
  "The level count matches your program: SC-900 shows 12 levels, Security+ shows 21, Both shows 33.",
  "Tabs stay pinned while you scroll, read in plain case, and swipe cleanly on phones. Locked levels on the plan are shown quietly instead of in red.",
  "Campaign mode is now its own page. No tabs, no detours: brief, intel, quiz, decisions, debrief, bosses, all in one place, always in the server hall. Leave any time with the button at the bottom.",
  "Campaign quizzes only pass if you answer every question. Ending a quiz early no longer counts.",
  "The Support link now goes to ExamHelp's real Ko-fi page. ExamHelp is still free, and if you're a student, please don't."
]},

{ v:"1.8.0", date:"2026-09-29", title:"Campaign mode", tag:"feature", items:[
  "New: choose how you study. Self-paced is everything you had before. Campaign walks you through the levels one at a time as a story.",
  "Each campaign level goes: mission brief, the lesson notes as intel, a quiz you pass at 80% (retake it as often as you need), then the mission's decisions and a debrief.",
  "Mission decisions are final for the run. A few of them quietly decide which of nine endings you reach. You get a clear warning before you start.",
  "A boss guards the end of every exam domain, and the final boss waits at the end.",
  "Both modes share your levels, quiz history and boss wins, so you can switch any time from the top of the page without losing anything. Starting a new campaign run never touches your stats."
]},

{ v:"1.7.5", date:"2026-09-29", title:"Harder acronyms, livelier answers", tag:"balance", items:[
  "The acronym drill no longer gives the answer away. Before, only the right option's first letters spelled the acronym. Now every option does: the wrong ones are near-misses like 'Security Assertion Management Language' for SAML.",
  "Going the other way ('Which acronym stands for…?'), the wrong answers are look-alikes such as SSO, SSL and SSH, not random picks.",
  "Right answers now pop, wrong answers shake, and tabs slide up when you switch. It all still switches off if your device is set to reduce motion."
]},

{ v:"1.7.4", date:"2026-09-29", title:"Small fixes", tag:"fix", items:[
  "The version button next to Patch notes no longer shows the word 'null' after you've read the latest notes.",
  "After an update, your browser now picks up the new version right away instead of showing the old one for a few minutes."
]},

{ v:"1.7.3", date:"2026-09-29", title:"A little motion", tag:"feature", items:[
  "Right answers glow green and wrong ones flash, so you feel the result before you read it.",
  "Tabs slide in, buttons ripple where you tap, and mock exams pulse when the clock starts.",
  "Beat a boss or pass a mock exam at 80% or better and your results get a gold victory glow.",
  "Everything stays quick and subtle. If your phone or computer is set to reduce motion, all of it switches off."
]},

{ v:"1.7.2", date:"2026-09-29", title:"Still free, no longer open source", tag:"fix", items:[
  "ExamHelp is still completely free to use, for your own studying or in a class. That isn't changing.",
  "The code and question bank are no longer open source. You can still see the code on GitHub and report problems there, but please don't copy or republish it. Details are in the LICENSE file."
]},

{ v:"1.7.1", date:"2026-09-29", title:"Dark mode gets a server hall", tag:"feature", items:[
  "In dark mode, the app now sits in a dark server hall. The Game tab, where the bosses live, switches to the arena.",
  "Light mode looks exactly the same as before.",
  "Phones load a smaller version of each background, so it won't eat your data."
]},

{ v:"1.7.0", date:"2026-09-29", title:"64 network questions, 57 fixes, and a fairer firewall builder", tag:"content", items:[
  "64 new Security+ questions on network attacks and tools: DNS poisoning and tunneling, MAC flooding, VLAN hopping, rogue DHCP, BGP hijacking, microsegmentation, common ports, and command-line tools. These were topics the bank didn't cover at all before.",
  "57 existing questions rewritten. In most of them the right answer was noticeably longer than the wrong ones, so you could spot it without knowing it. Not anymore.",
  "Removed about 130 questions that showed up twice under different levels, so a quiz won't hand you the same question twice.",
  "SC-900: Security Copilot is out (it's no longer on the exam objectives), replaced with Defender Vulnerability Management, threat intelligence, and advanced hunting. The Azure Firewall lesson now explains what actually separates it from an NSG: both track connection state, so 'stateful' was never the difference.",
  "Firewall builder now grades by running test packets through your rules instead of checking them against one answer key. Any order that blocks the bad traffic and lets the good traffic through is correct, and you see which rule caught each packet.",
  "The level 2 Prestige tier is now 'Shadow IT', another threat actor from the SY0-701 list. 'Rogue Insider' was still too close to the Insider Threat boss.",
  "Your progress and unlocks carry over, and nothing was renumbered. Answers you gave on the removed repeat questions no longer count in Stats, but the same questions are still in the bank under their other level."
]},

{ v:"1.6.0", date:"2026-09-28", title:"Days are now levels", tag:"feature", items:[
  "Every 'Day X' label — Plan tab, lesson header, quiz scope, campaign mission, most-missed list — now reads 'Level X'. Same content, same order, same pacing math, just a different name for the unit.",
  "Nothing was renumbered: your saved progress, attempt history, and unlock order are exactly what they were before this update."
]},

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
