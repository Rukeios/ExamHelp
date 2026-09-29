// Question corrections, batch 01. window.QFIXES = { "<question key>": [q, [options], 0, why] }
//
// An overlay, not a replacement. Applied AFTER the banks are indexed, it swaps individual
// questions by key. Four changes across 732 questions doesn't justify reshipping five data
// files, and this way the change set stays readable and reviewable on its own.
//
// WIRING — one loop, after all the DAYS.forEach bank building:
//
//   const FIX = window.QFIXES || {};
//   Object.keys(FIX).forEach(k => {
//     if (!Q[k]) return;                       // key no longer exists; skip silently
//     const x = FIX[k];
//     Q[k] = Object.assign({}, Q[k], { q:x[0], o:x[1], a:x[2], why:x[3] });
//   });
//
// Keeps d, track, dom and k from the original entry, so day and domain tagging is untouched
// and existing attempt history still matches by key.
//
// WHY THESE FOUR: an automated pass flagged options a learner can eliminate without knowing
// any of the content — "Nobody", "No one", "The end user's ISP", "Nothing is applied".
// A four-option question with two throwaways is really a coin flip, which makes it useless
// for telling understanding apart from guessing. Replacements are all plausible-but-wrong,
// and several now teach something extra on the way past.
window.QFIXES = {

/* SC-900 · Concepts · day 1 — was: "Nobody; it's automated" */
"1-4":[
 "In IaaS, who manages the physical host servers?",
 ["Microsoft, which manages physical infrastructure in every service model",
  "The customer, who has full administrative control of the virtual machine",
  "Shared — Microsoft owns the hardware, the customer owns the hypervisor",
  "The customer on an Azure Dedicated Host, Microsoft on shared hosts"],
 0,
 "Physical hosts, the physical network and the datacenter belong to the provider in every service model. Even on Azure Dedicated Host, where the hardware is reserved for one customer, Microsoft still operates the machine. Full administrative rights inside a VM never extend to the hardware underneath it."],

/* SC-900 · Concepts · day 1 — was: "Nobody" and "The end user's ISP" (two throwaways) */
"1-x2":[
 "In PaaS, who is responsible for the application code and its configuration?",
 ["The customer, who owns the application code and how it is configured",
  "Microsoft, since it manages the runtime the code executes on",
  "Shared — Microsoft owns the configuration, the customer owns the code",
  "Microsoft, because PaaS includes managing the application lifecycle"],
 0,
 "PaaS hands you the platform — operating system, runtime, patching — but whatever you build on top is yours, configuration included. Microsoft managing the runtime is what makes it PaaS, and that responsibility stops at your code."],

/* SC-900 · Concepts · day 1 — was: "No one" */
"1-q0":[
 "In PaaS, who is responsible for configuring access controls on the application the customer builds?",
 ["The customer, who configures access to the application and its data",
  "Microsoft, as part of the managed platform's default security",
  "Shared — Microsoft sets the defaults and the customer cannot change them",
  "Whichever party owns the underlying Azure subscription"],
 0,
 "Data, identities and access configuration are always the customer's, in every service model. The provider secures the platform; it never decides who may use your application."],

/* SC-900 · Compliance · day 10 — was: "Nothing is applied" */
"10-q0":[
 "When retention and deletion settings conflict, the general principle is:",
 ["Retention wins over deletion, so content is kept",
  "Deletion wins, so content is removed on the earlier schedule",
  "The most recently created policy takes precedence",
  "The shortest retention period takes precedence"],
 0,
 "Retention always beats deletion when the two conflict — content is preserved rather than removed. And when two retention settings disagree on duration, the LONGEST period wins, not the shortest. Both halves of that are worth remembering; the exam tests the second one too."]

};
