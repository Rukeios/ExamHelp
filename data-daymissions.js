// Day -> mission map for DIRECTED mode. window.DAY_MISSIONS = { "<day>": "<mission id>" }
//
// In directed mode, a level is: the day's lesson, then all three quiz modes, then that
// day's campaign mission. The mission is the narrative beat and the flag check. It is
// NOT a pass/fail gate — you always advance. What it scores is permanent.
//
// WHY THIS FILE EXISTS: campaign.js lists missions m1..m33 in narrative order, and
// data.js lists days 1..33 in teaching order. Those two orders are NOT the same. Using
// mission N for day N puts a Security-solutions mission at the end of a Compliance day
// 14 times out of 26. This map fixes that with no content changes.
//
// Built by matching each content day to an unassigned mission of the same track AND
// domain, lowest id first so narrative order survives inside each domain. Review and
// exam days take the leftovers. Result: 0 domain mismatches, all 33 missions used.
//
// TWO HAND-TUNED SPOTS, both in the Operations block (days 23-26, 31). The generated
// order put m30 "The Contractor Who Never Left" on day 33 — which breaks the arc,
// because that mission sets the `deprovisioned` flag and a flag set on the final day
// has nothing left to carry forward into. Operations content doesn't start until day 23,
// so m30 can't go earlier than that; it now sits at 23, the first Operations slot.
// That also fixes the causality: the door is left open (m30), and the beaconing that
// follows from it (m25) comes after, not before.
window.DAY_MISSIONS = {

/* ---- SC-900 ---- */
 1:"m2",    //  Concepts             The Blueprint
 2:"m3",    //  Concepts             Locking the Vault
 3:"m1",    //  Entra                Day One: Keys to the Kingdom
 4:"m4",    //  Entra                The Travel Alert
 5:"m5",    //  Entra                Just-in-Time
 6:"m6",    //  review               The Guest List
 7:"m7",    //  Security solutions   Shadow Apps Everywhere
 8:"m8",    //  Security solutions   One Pane of Glass
 9:"m11",   //  Compliance           The Leaky Spreadsheet
10:"m12",   //  Compliance           Seven Years
11:"m9",    //  review               Safe Links
12:"m10",   //  review               Raising the Score

/* ---- Security+ ---- */
13:"m13",   //  1 General concepts   After the Audit
14:"m14",   //  1 General concepts   The Expired Certificate
15:"m17",   //  2 Threats & vulns    The Invoice That Wasn't
16:"m18",   //  2 Threats & vulns    Help Desk Under Siege
17:"m19",   //  2 Threats & vulns    Spray and Pray
18:"m20",   //  2 Threats & vulns    The Injected Form
19:"m15",   //  review               Sign Here
20:"m22",   //  3 Architecture       The Plant Floor          ** FLAG: segmented
21:"m23",   //  3 Architecture       Drawing the Perimeter
22:"m24",   //  3 Architecture       Hurricane Season         ** FLAG: backupsOffsite
23:"m30",   //  4 Operations         The Contractor Who Never Left  ** FLAG: deprovisioned
24:"m25",   //  4 Operations         Beaconing at 2 AM        ** FLAGS: triaged, irMatured
25:"m26",   //  4 Operations         Chain of Custody         ** FLAG: evidenceRetained
26:"m27",   //  4 Operations         Scanner Says Critical
27:"m16",   //  review               Change Friday
28:"m31",   //  5 Program mgmt       The Vendor Contract
29:"m32",   //  5 Program mgmt       The Budget Meeting
30:"m33",   //  5 Program mgmt       Red Versus Blue
31:"m28",   //  4 Operations         Bring Your Own Risk
32:"m29",   //  review               Who Gets In
33:"m21"    //  review               Patient Zero

};

// Directed-mode rules. Free mode ignores all of this.
window.DIRECTED_RULES = {

  // A level is complete when all three quiz modes are done for that day AND the day's
  // mission has been played. Mission SCORE does not gate advancement.
  levelComplete:["think","blitz","written","mission"],

  // No retries inside a run. Whatever ending you get is the ending you get.
  // A full campaign reset is the only way to try for a different one, and it clears
  // mission progress and all six flags. Quiz history and stats are stored separately
  // and are never touched by a campaign reset.
  missionRetry:false,
  resetScope:"campaign",

  // THE ADVISORY — this is what makes no-retry humane instead of punishing.
  // Fire it BEFORE the mission, not after. Once a decision is made it's permanent, so
  // a warning that arrives afterwards is just a scolding. Before it, it's a real choice.
  //
  // Trigger: the learner's accuracy in that day's domain is below `adviseBelow` when
  // they reach the mission. Show the number, say plainly that the decisions are
  // permanent, and offer one button back to that day's drills and one to continue.
  // Never block. Never show it twice for the same mission.
  adviseBelow:70,
  adviseCopy:"You're at {pct}% in {domain}. This mission's decisions are permanent — there are no retries, and what you choose here follows you to the ending. Drill this level again first, or go in as you are.",

  // Told once, before mission 1, and never again. If a learner doesn't know the rules
  // going in, the first bad ending reads as unfair rather than earned.
  primer:"Some decisions in this campaign are permanent. You won't be told which ones. They decide how the story ends, and you only find out at the end.",

  // Flags only ever set on the first play of a mission. Replaying after a reset starts
  // the whole run clean; replaying a mission within a run is not possible.
  flagOnFirstPlayOnly:true

};
