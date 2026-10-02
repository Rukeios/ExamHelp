(function(){
const REV="2026-10-02", CERT="https://www.comptia.org/en-us/certifications/security/";
const S={
  policy:"https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/security-policies-sy0-701/",
  standard:"https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/security-standards-sy0-701/",
  procedure:"https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/security-procedures-sy0-701/",
  riskAnalysis:"https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/risk-analysis-sy0-701/",
  agreements:"https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/agreement-types-sy0-701/",
  audits:"https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/audits-and-assessments-sy0-701/",
  comptia:CERT
};
const K=(id,certs,title,sides,distinction,clue,apply,notIt,concepts,src,pendingConcepts)=>({
  id:"cmp."+id,
  certs,
  title,
  sides:sides.map(s=>({name:s[0],is:s[1]})),
  distinction,
  clue,
  apply,
  notIt,
  concepts,
  pendingConcepts:pendingConcepts||[],
  src:src.map(k=>S[k]||k),
  reviewed:REV,
  status:"drafted",
  v:1
});
const comparisons=[
K("policy-standard-procedure",["sec"],"Policy vs standard vs procedure",
  [["Policy","Broad direction and accountability."],["Standard","Mandatory specific requirement."],["Procedure","Step-by-step instructions to do the work."]],
  "Policies state what and why. Standards make the rule specific and mandatory. Procedures show exactly how staff carry it out.",
  "Intent points to policy; exact requirement points to standard; checklist or sequence points to procedure.",
  "A school board says laptops must be protected, security requires full-disk encryption on every laptop, and desktop support follows a checklist before issuing one.",
  ["\"Laptops must be protected\" is the policy because it sets direction, not the technical requirement.","Full-disk encryption everywhere is the standard because it is the mandatory specific rule.","The issuance checklist is the procedure because it tells staff exactly what to do."],
  ["sec.policy-framework"],["policy","standard","procedure","comptia"]),
K("sle-ale-aro",["sec"],"SLE vs ALE vs ARO",
  [["SLE","Loss from one incident."],["ALE","Expected yearly loss."],["ARO","Estimated incidents per year."]],
  "SLE is a single event's damage. ARO is how often the event is expected. ALE multiplies them to estimate annual loss.",
  "\"Per occurrence\" points to SLE; \"per year\" points to ALE; \"frequency\" points to ARO.",
  "A warehouse flood would destroy $40,000 at a time and is expected once every four years. Leadership wants the yearly expected loss.",
  ["$40,000 is the SLE because it is the one-incident loss, not the yearly number.","0.25 is the ARO because it is the yearly frequency, not the loss amount.","The yearly expected loss is ALE because it combines the one-incident loss with the annual rate."],
  ["sec.risk-analysis"],["riskAnalysis","comptia"]),
K("msa-sla-mou",["sec"],"MSA vs SLA vs MOU",
  [["MSA","Master legal terms for an ongoing relationship."],["SLA","Measured service promises and remedies."],["MOU","Statement of intent between parties."]],
  "An MSA sets the base legal framework. An SLA defines measurable service levels. An MOU documents shared intent without being the main service contract.",
  "\"99.9% uptime\" points to SLA; \"base contract terms\" points to MSA; \"shared understanding\" points to MOU.",
  "A retailer signs a long-term cloud deal, adds a 99.9% uptime target with credits, and drafts a separate document describing how both teams will coordinate a pilot.",
  ["The long-term base contract is the MSA because it sets the legal framework for future work.","The uptime target and credits are the SLA because they define measurable service performance.","The pilot coordination document is the MOU because it records intent and expectations."],
  ["sec.third-party-risk"],["agreements","comptia"]),
K("internal-external-audit",["sec"],"Internal audit vs external audit",
  [["Internal audit","Assurance run by the organization."],["External audit","Independent or regulatory review from outside."]],
  "Internal audits help the organization improve and prepare. External audits provide independent assurance to regulators, customers or boards.",
  "\"Our audit team\" points to internal; \"independent assessor\" or regulator points to external.",
  "A hospital's compliance team tests evidence quarterly, and once a year an outside assessor validates a required program for customers.",
  ["The hospital's own quarterly review is internal because the organization performs it for itself.","The outside assessor's validation is external because independence is the point."],
  ["sec.audit-attestation"],["audits","comptia"])
];

(window.CN_PACKS=window.CN_PACKS||[]).push({id:"sec-4-cmp",cert:"sec",label:"Security+ batch 4 comparisons",version:"2.3.1",reviewed:REV,comparisons});
})();
