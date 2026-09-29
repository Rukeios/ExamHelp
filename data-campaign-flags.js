// Campaign flag map. window.CAMPAIGN_FLAGS = { flags:[...], sets:{...}, acts:[...] }
//
// The RPG layer over the existing 33 missions. campaign.js is NOT modified — this maps
// flags onto steps that are already there.
//
// Six flags, two axes, nine endings (3 x 3). A flag is set when the learner answers that
// specific step CORRECTLY. Wrong answer, no flag, no second chance — the consequence is
// the whole point.
//
// Every flag below sits on a real step in a real mission. The wording in `evidence` is
// quoted from campaign.js so you can see the mapping is honest and not retrofitted.
window.CAMPAIGN_FLAGS = {

flags:[
 /* ---- PREVENTION: did the attack land? ---- */
 { k:"deprovisioned", axis:"prev", lamp:"CONTRACTOR ACCESS REVOKED",
   label:"Killed the departed contractor's account and started IR on the login",
   at:"m30:1", where:"The Contractor Who Never Left",
   evidence:"Disable the account, preserve the logs, and start IR on that login" },

 { k:"segmented", axis:"prev", lamp:"OT NETWORK SEGMENTED",
   label:"Isolated the unpatchable SCADA host instead of leaving it flat",
   at:"m22:1", where:"The Plant Floor",
   evidence:"Segment it on an isolated network with strict firewall rules, or air-gap it" },

 { k:"triaged", axis:"prev", lamp:"BEACON CONTAINED",
   label:"Isolated the beaconing workstation as the first action",
   at:"m25:0", where:"Beaconing at 2 AM",
   evidence:"Isolate the workstation from the network using EDR" },

 /* ---- RESPONSE: how well did you handle it? ---- */
 { k:"backupsOffsite", axis:"resp", lamp:"BACKUPS OFF-SITE",
   label:"Caught that the backups sat in the building they were protecting",
   at:"m24:2", where:"Hurricane Season",
   evidence:"Backups sit in the same building, so one disaster destroys both" },

 { k:"evidenceRetained", axis:"resp", lamp:"EVIDENCE PRESERVED",
   label:"Put the related data under legal hold so it survived the incident",
   at:"m26:2", where:"Chain of Custody",
   evidence:"Legal hold" },

 { k:"irMatured", axis:"resp", lamp:"LESSONS LEARNED CLOSED",
   label:"Ran the incident to its actual final phase instead of stopping at recovery",
   at:"m25:3", where:"Beaconing at 2 AM",
   evidence:"Lessons learned" }
],

// Act boundaries by mission index within the Security+ track (m13-m33).
// Used for the mid-campaign readouts, so the learner feels the state change.
acts:[
 { n:1, name:"The Job",        through:"m21",
   line:"Nothing has gone wrong yet. What you do now decides what's possible later." },
 { n:2, name:"The Incursion",  through:"m27",
   line:"Something is inside. The question is no longer whether, it's how far." },
 { n:3, name:"The Reckoning",  through:"m33",
   line:"Everything you did and didn't do is about to be evaluated at once." }
],

// Band thresholds: 3 of 3 flags on an axis is high, 2 is mid, 0-1 is low.
bands:{ high:3, mid:2 },

notes:"Only six of 132 steps carry a flag. That's deliberate — if every step mattered, none would. The six are load-bearing decisions a real analyst would recognise, and they're spread across Architecture and Operations so a learner meets them over weeks rather than in one sitting."

};
