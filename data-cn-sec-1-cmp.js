(function(){
const REV="2026-10-02";
const CERT="https://www.comptia.org/en-us/certifications/security/";
const M=s=>"https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/"+s+"-sy0-701/";
const K=(id,certs,title,sides,distinction,clue,apply,notIt,concepts,src)=>({
  id:"cmp."+id,certs,title,sides:sides.map(s=>({name:s[0],is:s[1]})),distinction,clue,apply,notIt,concepts,
  src:src.map(u=>/^https:\/\//.test(u)?u:M(u)).concat([CERT]),reviewed:REV,status:"drafted",v:1
});
const comparisons=[
K("control-types",["sec"],"Preventive vs detective vs corrective controls",
  [["Preventive","Stops or blocks the event before it succeeds."],["Detective","Finds or records that activity happened."],["Corrective","Restores service or fixes damage after the event."]],
  "Look at timing. Preventive acts before success, detective notices after or during, and corrective repairs the outcome.",
  "Block, stop, or deny points to preventive. Alert, log, or discover points to detective. Restore or recover points to corrective.",
  "A hospital adds MFA to stop stolen-password access, reviews SIEM alerts for suspicious logins, and restores clean files after ransomware.",
  ["MFA is preventive because it blocks the attack path before access is granted.","The SIEM alert is detective because it identifies activity but does not itself undo it.","The restore is corrective because it returns the environment to a usable state after damage."],
  ["sec.control-types"],["security-controls"]),
K("sign-or-encrypt",["sec"],"Digital signature vs confidentiality encryption",
  [["Digital signature","Proves integrity, sender authenticity, and non-repudiation."],["Confidentiality encryption","Keeps the content unreadable to unauthorized parties."]],
  "Signing proves who sent it and that it was not changed. Encryption hides the content so only the intended reader can recover it.",
  "If the question asks who sent it or whether it changed, think signature. If it asks who can read it, think encryption.",
  "A law firm emails a settlement draft to opposing counsel and later must prove its partner approved the exact text sent.",
  ["A signature proves the partner approved that content, but by itself it does not hide the draft from eavesdroppers.","Encryption hides the draft from outsiders, but without a signature it does not prove which partner approved it."],
  ["sec.digital-signatures-key-exchange","sec.encryption-approaches"],["hashing-and-digital-signatures","encrypting-data"]),
K("phishing-pretexting",["sec"],"Phishing vs pretexting vs watering hole",
  [["Phishing","A fraudulent message asks the victim to click, send, or reveal something."],["Pretexting","A fabricated story or role is used to justify the request."],["Watering hole","The attacker compromises a site the target already visits."]],
  "Phishing is usually the delivery message, pretexting is the believable story inside it, and a watering hole moves the attack to a trusted website.",
  "Look for the channel. Inbox or text points to phishing, an invented role points to pretexting, and a familiar website points to a watering hole.",
  "Engineers receive a message from \"IT support\" about a VPN upgrade, while another team is infected only after browsing a trade association portal they use daily.",
  ["The fake IT-support message is phishing because the lure is delivered directly to the user.","The claim to be IT support is the pretext that makes the phishing request believable.","The trade association portal infection is a watering hole because the attacker waited on a site the victims already trusted."],
  ["sec.phishing","sec.impersonation-pretexting","sec.watering-hole-brand-abuse"],["phishing","impersonation","watering-hole-attacks"]),
K("brute-force-spraying",["sec"],"Brute force vs password spraying",
  [["Brute force","Many guesses are tried against one account or one secret."],["Password spraying","A few common guesses are tried across many accounts."]],
  "Brute force concentrates depth on one target. Password spraying spreads shallow attempts across many targets to dodge lockouts.",
  "One account, many guesses means brute force. Many accounts, one or two guesses each means password spraying.",
  "A university's logs show 400 guesses against one dean's mailbox, while another alert shows one seasonal password tried once against 2,000 accounts.",
  ["The dean's mailbox case is brute force because the attack is focused on one account.","The seasonal-password case is spraying because the attacker spreads the same small guess set across many accounts."],
  ["sec.cryptographic-password-attacks"],["password-attacks"])
];
(window.CN_PACKS=window.CN_PACKS||[]).push({id:"sec-1-cmp",cert:"sec",label:"Security+ batch 1 comparisons",version:"2.3.1",reviewed:REV,comparisons});
})();
