// Boss roster. window.BOSSES = [ {...} ]
// Images live at assets/bosses/full/<img>.webp and assets/bosses/thumb/<img>.webp
// Use thumb for the grid cards, full for the fight screen. Both are WebP, flat black
// background, no transparency — so any dark card background sits under them cleanly.
//
// `teaches` is the exam content visibly printed on that boss's artwork. Surface it as a
// tooltip, a caption, or a post-fight "look again at the boss" panel — the art is a
// study aid, not just decoration.
window.BOSSES = [

/* ---------- SC-900 ---------- */
{
  id:"gatekeeper", name:"The Gatekeeper", track:"sc", domain:"Concepts",
  color:"#C8CDD4", img:"boss-gatekeeper",
  taunt:"Half of this is mine. The other half was always yours.",
  defeat:"You knew which half you owned.",
  teaches:[
    "Shared responsibility: the PROVIDER half is machined and sealed, the CUSTOMER half is patched and worn",
    "Defense in depth, outermost to innermost: PHYSICAL, IDENTITY, PERIMETER, NETWORK, COMPUTE, APPLICATION, DATA",
    "The three Zero Trust principles carved on the arch: verify explicitly, least privilege, assume breach",
    "CIA as three evenly lit lamps"
  ]
},
{
  id:"identity-impostor", name:"The Identity Impostor", track:"sc", domain:"Entra",
  color:"#3B7DD8", img:"boss-identity-impostor",
  taunt:"Approve the sign-in. You've approved the last nine.",
  defeat:"You checked who, then you checked what.",
  teaches:[
    "Authentication vs authorization: WHO ARE YOU? and WHAT CAN YOU DO?",
    "MFA push fatigue — the Approve Sign in? prompt is the attack number matching exists to stop",
    "Identity types and privilege levels on the badges: ADMIN, CONTRACTOR, EMPLOYEE, IT, VISITOR",
    "MFA, SSO, federation, passwordless and least privilege as stacked controls"
  ]
},
{
  id:"blind-spot", name:"The Blind Spot", track:"sc", domain:"Security solutions",
  color:"#3FD164", img:"boss-blind-spot",
  taunt:"Sixty-three percent. You never looked at the rest.",
  defeat:"You lit the modules that were dark.",
  teaches:[
    "Which Defender product covers what: endpoint, email, identity, cloud apps, vulnerability management",
    "Two modules are dark and cracked — coverage gaps are the actual threat",
    "COVERAGE: 63% with UNMONITORED flagged in red",
    "SIEM and SOAR, with correlated alerts linked and isolated ones hanging loose"
  ]
},
{
  id:"auditor", name:"The Auditor", track:"sc", domain:"Compliance",
  color:"#9B5FE0", img:"boss-auditor",
  taunt:"I don't store your data. I decide what it is.",
  defeat:"You labeled it before I could.",
  teaches:[
    "Sensitivity label hierarchy, low to high: PUBLIC, GENERAL, CONFIDENTIAL, HIGHLY CONFIDENTIAL",
    "Protection travels with the file",
    "A legal hold freezes retention — the held clock sits at 00:00:00 and cannot advance",
    "Retention (RETAIN 7 YEARS), DLP catching content in motion, and eDiscovery searching"
  ]
},

/* ---------- Security+ SY0-701 ---------- */
{
  id:"keymaster", name:"The Keymaster", track:"sec", domain:"1 General concepts",
  color:"#D4A436", img:"boss-keymaster",
  taunt:"Every door has a key. You have to know which one.",
  defeat:"You signed with the right half.",
  teaches:[
    "Cryptography and PKI as the foundation everything else sits on",
    "Keys, keyholes and seals as the language of trust"
  ]
},
{
  id:"insider-threat", name:"The Insider Threat", track:"sec", domain:"2 Threats & vulns",
  color:"#4FD6E8", img:"boss-insider-threat",
  taunt:"Last day. Just collecting my things.",
  defeat:"You deprovisioned on the way out, not a month later.",
  teaches:[
    "The badge still reads ACCESS: ACTIVE — the failure is deprovisioning, not detection",
    "Departing-employee data theft: the box, the bare drive, the BACKUP sticky note",
    "Palmed USB drives and a recording phone — the threat is access, not appearance",
    "He looks harmless. That is the entire lesson."
  ]
},
{
  id:"firewall-warlord", name:"Firewall Warlord", track:"sec", domain:"3 Architecture",
  color:"#E8821E", img:"boss-firewall-warlord",
  taunt:"Rule one. Rule two. Rule three. Then me.",
  defeat:"You read the list top to bottom.",
  teaches:[
    "A valid ruleset hanging in order: 1 ALLOW HTTPS 443, 2 ALLOW HTTP 80, 3 DENY SSH 22, 4 DENY ALL",
    "First match wins — the chain is read top to bottom",
    "Implicit deny sits at the bottom of every rule set",
    "Rule 3 is technically redundant under DENY ALL; explicit denies exist for logging and clarity"
  ]
},
{
  id:"alert-storm", name:"The Alert Storm", track:"sec", domain:"4 Operations",
  color:"#E03A2F", img:"boss-alert-storm",
  taunt:"Nine hundred and ninety-nine. Pick one.",
  defeat:"You triaged instead of drowning.",
  teaches:[
    "Alert fatigue is the real adversary in security operations — volume, not malice",
    "Severity and incident language: P1 SEV, TIER 1, ACKNOWLEDGE, MULTIPLE INCIDENTS OPEN",
    "Why alert tuning matters: at +999 unread, real detections get missed",
    "He is overwhelmed, not evil. That is what a SOC actually fights."
  ]
},
{
  id:"compliance-collector", name:"The Compliance Collector", track:"sec", domain:"5 Program mgmt",
  color:"#D8C9A3", img:"boss-compliance-collector",
  taunt:"Compliant, noncompliant, or partially. Choose carefully.",
  defeat:"Your evidence held up.",
  teaches:[
    "Governance hierarchy in order: POLICY, STANDARD, PROCEDURE, GUIDELINE",
    "RTO is measured in hours of downtime, RPO in minutes of data loss — the panel shows RTO 4h, RPO 15m",
    "Risk register lifecycle: identify, assess, treat, monitor, review",
    "Frameworks he audits against: NIST, ISO 27001, CIS, SOC 2, PCI DSS, HIPAA",
    "He holds NONCOMPLIANT in one hand and APPROVED in the other"
  ]
},

/* ---------- Final boss ---------- */
{
  id:"ransomware-king", name:"Ransomware King", track:"final", domain:"All domains",
  color:"#D63FB0", img:"boss-ransomware-king",
  taunt:"Pay now. The key is cheaper than the outage.",
  defeat:"You had backups, segmentation, and a plan.",
  final:true,
  requires:"all nine domain bosses cleared",
  teaches:[
    "Ransomware spans every domain: a threat, an incident, a continuity test, and a risk calculation",
    "Double extortion — encrypted and exfiltrated, so backups alone are not the whole answer",
    "PAY NOW, ENCRYPTED, KEY REQUIRED, DECRYPTION $$$ are the pressure, not the problem",
    "His open palm is the ask. Backups, segmentation and an incident plan are the refusal."
  ]
}

];
