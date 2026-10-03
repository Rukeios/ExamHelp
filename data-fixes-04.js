// Corrections, batch 04 (v2.3.2). window.QFIXES4 and window.DAYFIXES
//
// Microsoft Learn's SC-900 unit on privacy now describes four areas (data control, data location,
// data security, data defense), which it also calls Microsoft's privacy principles. The app used to
// teach an earlier list of six. These bring the
// two affected questions and the Level 9 lesson text in line. Question keys never change.
// DAYFIXES replaces the text of one key point in a level's classic lesson, matched by its heading.
window.QFIXES4 = {
  "9-p0": ["Which of Microsoft's privacy commitments says your data belongs to you, and that you can access, change or delete it?",
           ["Data control","Data location","Data security","Data defense"],0,
           "Data control: your data is yours, and you can access, modify or delete it at any time."],
  "9-q7": ["Which statement matches Microsoft's privacy commitments?",
           ["Your data isn't mined for advertising","Your data is never stored","You must supply the encryption keys","Your data can't be exported"],0,
           "Microsoft doesn't share your data with advertiser-supported services or mine it for marketing or advertising."]
};
window.DAYFIXES = {
  9:  {pts:{"Microsoft's privacy principles":"Four areas, which Microsoft Learn calls its privacy principles: you control your data, you know where it's located, it's encrypted at rest and in transit, and Microsoft defends it. Older practice questions use an earlier list of six (control, transparency, security, strong legal protections, no content-based targeting, benefits to you). Recognize both."}},
  12: {pts:{"The numbers":"You get 45 minutes to answer (allow 65 in all, for the instructions, the candidate agreement and optional comments). Passing is 700 on a scale of 1 to 1,000. Answer everything: a wrong answer costs nothing and a blank earns nothing."}}
};
