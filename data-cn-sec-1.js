(function(){
const REV="2026-10-02";
const CERT="https://www.comptia.org/en-us/certifications/security/";
const O={
  "1.1":"Compare and contrast various types of security controls",
  "1.2":"Summarize fundamental security concepts",
  "1.3":"Explain the importance of change management processes and the impact to security",
  "1.4":"Explain the importance of using appropriate cryptographic solutions",
  "2.1":"Compare and contrast common threat actors and motivations",
  "2.2":"Explain common threat vectors and attack surfaces",
  "2.3":"Explain various types of vulnerabilities",
  "2.4":"Given a scenario, analyze indicators of malicious activity",
  "2.5":"Explain the purpose of mitigation techniques used to secure the enterprise"
};
const D={13:"1 General concepts",14:"1 General concepts",15:"2 Threats & vulns",16:"2 Threats & vulns",17:"2 Threats & vulns",18:"2 Threats & vulns"};
const M=s=>"https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/"+s+"-sy0-701/";
const C=(id,day,obj,topic,title,lines,clue,cards,src,extra)=>Object.assign({
  id:"sec."+id,cert:"sec",day,dom:D[day],obj,objTitle:O[obj],topic,title,lines,clue,
  cards:cards.map((c,i)=>({id:"sec."+id+".c"+(i+1),kind:c[0],q:c[1],a:c[2]})),
  src:src.map(u=>/^https:\/\//.test(u)?u:M(u)).concat([CERT]),reviewed:REV,status:"drafted",v:1
},extra||{});
const concepts=[
C("control-categories",13,"1.1","Controls","Control categories",[
  "Technical controls are enforced by technology, like encryption or EDR.",
  "Managerial controls are policies, standards, and risk decisions.",
  "Operational controls depend on people and process.",
  "Physical controls protect spaces and hardware with barriers or sensors."
],"Category asks what kind of control it is, not what it does.",[
  ["term","What makes a control managerial?","It sets direction or oversight, like policies, standards, or risk reviews."],
  ["use","Badges and door locks protect a server room. Which category fits?","Physical controls."]
],["security-controls"]),
C("control-types",13,"1.1","Controls","Control types",[
  "Preventive controls stop an event before it succeeds.",
  "Deterrent controls discourage attempts.",
  "Detective controls reveal that activity happened.",
  "Corrective, compensating, and directive controls recover, substitute, or instruct."
],"Type asks the control's effect: stop, discourage, detect, fix, substitute, or direct.",[
  ["term","What does a compensating control do?","It reduces risk when the preferred control cannot be used."],
  ["use","A camera review after theft identifies the intruder. Which type fits?","Detective."]
],["security-controls"]),
C("security-principles",13,"1.2","Principles","CIA, non-repudiation, and AAA",[
  "Confidentiality stops unauthorized disclosure.",
  "Integrity keeps data accurate and unchanged.",
  "Availability keeps systems usable when needed.",
  "Non-repudiation ties an action to its signer.",
  "AAA means authentication, authorization, and accounting."
],"Exposure, alteration, outage, or proof-of-action wording points here.",[
  ["term","What does non-repudiation provide?","Proof that a specific party performed an action and cannot credibly deny it."],
  ["use","Logs show which admin deleted a file and when. Which AAA function helped?","Accounting."]
],["the-cia-triad","non-repudiation","authentication-authorization-and-accounting"]),
C("gap-analysis",13,"1.2","Assessment","Gap analysis",[
  "A gap analysis compares today's controls with a required target state.",
  "It highlights missing capability, maturity, or coverage.",
  "High-impact gaps are prioritized first.",
  "The result becomes a remediation roadmap."
],"Current state versus target state is the exam trigger.",[
  ["term","What question does a gap analysis answer?","Where are we now, where must we be, and what is missing?"],
  ["use","A bank scores each control domain against a required baseline. What is it doing?","A gap analysis."]
],["gap-analysis"]),
C("zero-trust",13,"1.2","Architecture","Zero Trust",[
  "Zero Trust assumes no user, device, or network is trusted by default.",
  "Verify explicitly with identity, device, and context.",
  "Use least privilege to shrink blast radius.",
  "Assume breach and segment access."
],"Inside the network is never enough to trust a request.",[
  ["term","Name a Zero Trust principle.","Verify explicitly, use least privilege, or assume breach."],
  ["use","A request is reevaluated by user, device health, and risk. What model is this?","Zero Trust."]
],["zero-trust"]),
C("physical-deception-controls",13,"1.2","Facilities","Physical, deception, and disruption controls",[
  "Fencing, lighting, guards, bollards, and vestibules protect facilities.",
  "Sensors can detect motion, pressure, infrared, or microwave changes.",
  "Honeypots, honeynets, honeyfiles, and honeytokens mislead attackers.",
  "Deception buys time and improves detection."
],"Fake assets that alert on touch are deception controls.",[
  ["term","What is a honeytoken?","Fake data, such as a planted credential, that alerts when someone uses it."],
  ["use","A lobby uses two interlocked doors to admit one person at a time. What control is this?","An access control vestibule."]
],["physical-security","deception-and-disruption"]),
C("change-management",14,"1.3","Change control","Change management process",[
  "A formal change starts with a request and impact analysis.",
  "Approval happens before implementation.",
  "Testing and maintenance windows reduce surprise outages.",
  "A backout plan restores the last known good state."
],"Request, review, test, approve, schedule, implement, document.",[
  ["term","Why is a backout plan important?","It lets the team quickly return to the prior state if the change fails."],
  ["use","A firewall update waits for CAB approval before production. What process is this?","Change management."]
],["change-management"]),
C("technical-change-management",14,"1.3","Change control","Technical change considerations",[
  "Security changes can affect allow lists, deny lists, and service dependencies.",
  "Restarts, downtime, and legacy apps may create hidden risk.",
  "Documented diagrams and versions keep troubleshooting accurate.",
  "Change control reduces both outage risk and audit gaps."
],"Think side effects: dependencies, downtime, restarts, and documentation drift.",[
  ["term","Why update diagrams after a change?","So operators and responders act on the real environment, not stale assumptions."],
  ["use","A patch breaks an older billing app that used an unsupported cipher. What was missed?","Dependency and legacy-impact review."]
],["technical-change-management"]),
C("encryption-approaches",14,"1.4","Cryptography","Symmetric and asymmetric encryption",[
  "Symmetric encryption uses one shared key and is fast for bulk data.",
  "Asymmetric encryption uses a public and private key pair.",
  "Asymmetric methods help with key exchange and signatures.",
  "Real systems often combine both."
],"Shared secret means symmetric; public/private key means asymmetric.",[
  ["term","Why is symmetric encryption used for large data transfers?","It is faster than asymmetric encryption for bulk data."],
  ["use","A browser negotiates a key, then encrypts the session quickly. Which mix is typical?","Asymmetric key setup with symmetric session encryption."]
],["encrypting-data","encryption-technologies","key-exchange"]),
C("hashing-password-protection",14,"1.4","Cryptography","Hashing, salting, and stretching",[
  "Hashing is one-way and proves integrity.",
  "A salt makes identical passwords hash differently.",
  "Stretching slows guessing by repeating the work.",
  "Use hashes for passwords, not reversible encryption."
],"If the original must never come back, think hashing.",[
  ["term","What does a salt stop most effectively?","Precomputed lookups such as rainbow table attacks."],
  ["use","An app stores bcrypt outputs instead of readable passwords. Why?","Passwords should be stored as slow salted hashes."]
],["hashing-and-digital-signatures"]),
C("digital-signatures-key-exchange",14,"1.4","Cryptography","Digital signatures and key exchange",[
  "A digital signature protects integrity, authenticity, and non-repudiation.",
  "The sender signs with their private key.",
  "The recipient verifies with the sender's public key.",
  "Key exchange agrees on a secret without sending it in the clear."
],"Sign with the sender's private key; encrypt a secret for the recipient.",[
  ["term","Which key verifies a digital signature?","The signer's public key."],
  ["use","Two servers derive the same session key during TLS setup. What happened?","A key exchange established a shared secret."]
],["hashing-and-digital-signatures","key-exchange"]),
C("pki-certificates",14,"1.4","PKI","PKI and certificates",[
  "A certificate authority signs certificates that bind keys to identities.",
  "A CSR asks the CA to issue a certificate.",
  "CRL and OCSP check whether a certificate is revoked.",
  "Wildcard and self-signed certificates solve different trust needs."
],"Trust chain, revocation, and certificate requests all point to PKI.",[
  ["term","What does OCSP provide?","A near-real-time check of whether a certificate is revoked."],
  ["use","A server owner sends public-key details to a CA for issuance. What was sent?","A certificate signing request, or CSR."]
],["public-key-infrastructure","certificates"]),
C("threat",15,"2.1","Threats","Threat actors and motivations",[
  "Threat actors include nation-states, criminals, insiders, hacktivists, and unskilled attackers.",
  "Motivations include money, espionage, disruption, revenge, ideology, or war.",
  "Capability, patience, and access differ by actor.",
  "Shadow IT increases exposure even without malicious intent."
],"Ask who is acting, why, and how much access or funding they have.",[
  ["term","Which actor is most associated with long-term espionage?","A nation-state or its advanced persistent threat group."],
  ["use","An employee uploads data to an unsanctioned app for convenience. What is this?","Shadow IT."]
],["threat-actors"]),
C("attack-surfaces",15,"2.2","Exposure","Threat vectors and attack surfaces",[
  "Attack surfaces include people, software, hardware, networks, and suppliers.",
  "Common vectors are email, text, voice, files, USB devices, and open services.",
  "Default credentials and unsupported software widen exposure.",
  "An attack vector is the path an attacker uses."
],"Vector means the path in; surface means the reachable area.",[
  ["term","What is an attack vector?","The method or path used to reach a target."],
  ["use","An old VPN appliance still uses vendor defaults. What increased?","The attack surface."]
],["common-threat-vectors"]),
C("phishing",15,"2.2","Social engineering","Phishing variants",[
  "Phishing uses trusted-looking messages to steal action or data.",
  "Spear phishing is targeted.",
  "Whaling targets executives.",
  "Smishing and vishing use SMS or voice instead of email."
],"Same social trick, different channel or target.",[
  ["term","How is spear phishing different from phishing?","It is tailored to a specific person, role, or organization."],
  ["use","A CFO gets a tailored email about an acquisition. What variant is likely?","Whaling, a form of spear phishing."]
],["phishing"]),
C("impersonation-pretexting",15,"2.2","Social engineering","Impersonation and pretexting",[
  "Impersonation claims a false identity to gain trust.",
  "Pretexting adds a believable story to justify the request.",
  "BEC often mixes impersonation, urgency, and authority.",
  "The goal is to override normal verification."
],"The fake identity is impersonation; the story behind it is pretexting.",[
  ["term","What is a pretext in social engineering?","A made-up scenario used to justify a request or bypass doubt."],
  ["use","Someone posing as payroll asks for direct-deposit updates. Which tactic stands out?","Impersonation supported by a pretext."]
],["impersonation","other-social-engineering-attacks"]),
C("watering-hole-brand-abuse",15,"2.2","Social engineering","Watering holes, typosquatting, and brand abuse",[
  "A watering hole attack compromises a site the target already trusts.",
  "Typosquatting relies on mistyped or look-alike names.",
  "Brand impersonation copies logos or domains to borrow trust.",
  "Misinformation and disinformation manipulate behavior through false content."
],"Trusted site means watering hole; look-alike name means typosquatting.",[
  ["term","What makes a watering hole attack distinct?","The attacker waits on a site the victim already visits."],
  ["use","Staff land on payrolI.example after typing quickly. What technique is this?","Typosquatting using a look-alike name."]
],["watering-hole-attacks","other-social-engineering-attacks"]),
C("vulnerability",16,"2.3","Vulnerabilities","What a vulnerability is",[
  "A vulnerability is a weakness that can be exploited.",
  "Weak code, weak configuration, weak process, or weak design can all qualify.",
  "A zero-day is unknown or unpatched by the vendor.",
  "If a patch already exists, it is no longer a zero-day."
],"Weakness is vulnerability; zero-day means no vendor fix yet.",[
  ["term","When is a flaw a zero-day?","When defenders lack a vendor patch because the flaw is newly discovered or unknown."],
  ["use","Admins skipped a patch released last month. Is that still a zero-day?","No. It is an unpatched known vulnerability."]
],["zero-day-vulnerabilities"]),
C("memory-race-vulnerabilities",16,"2.3","Vulnerabilities","Memory and race vulnerabilities",[
  "A buffer overflow writes past intended memory boundaries.",
  "Memory injection places code inside another process.",
  "A race condition wins the gap between check and use.",
  "TOC/TOU is the classic race-condition pattern."
],"Memory corruption or check-then-use timing points here.",[
  ["term","What does TOC/TOU stand for?","Time of check to time of use, a race condition window."],
  ["use","A process verifies a file, then an attacker swaps it before open. What happened?","A TOC/TOU race condition."]
],["buffer-overflows","memory-injections","race-conditions"]),
C("injection-vulnerabilities",16,"2.3","Vulnerabilities","SQL injection and XSS",[
  "SQL injection tricks a database into treating input as code.",
  "Cross-site scripting runs attacker-controlled script in a browser.",
  "Parameterized queries blunt SQL injection.",
  "Output encoding and validation help against XSS."
],"Database trickery means SQLi; browser script execution means XSS.",[
  ["term","What is the preferred SQL injection defense?","Parameterized queries, plus validation where appropriate."],
  ["use","A comment field serves script tags back to every visitor. What is this?","Cross-site scripting."]
],["sql-injection","cross-site-scripting"]),
C("platform-vulnerabilities",16,"2.3","Vulnerabilities","Platform and environment vulnerabilities",[
  "Operating systems, firmware, hypervisors, clouds, and phones all have distinct weaknesses.",
  "Examples include VM escape, open storage, and sideloaded apps.",
  "Legacy or end-of-life systems stay vulnerable longer.",
  "Rooting or jailbreaking removes built-in mobile protections."
],"Ask which platform layer failed: OS, cloud, hypervisor, hardware, or mobile.",[
  ["term","What is VM escape?","A break from a guest VM into the host or hypervisor layer."],
  ["use","A phone runs apps from outside the official store. What risk increased?","Mobile platform exposure from sideloading."]
],["operating-system-vulnerabilities","hardware-vulnerabilities","virtualization-vulnerabilities","cloud-specific-vulnerabilities","mobile-device-vulnerabilities"]),
C("misconfiguration-supply-chain-vulnerabilities",16,"2.3","Vulnerabilities","Misconfiguration, malicious updates, and supply chain issues",[
  "Default credentials, open ports, and broad permissions are misconfigurations.",
  "Weak algorithms and poor key handling are cryptographic weaknesses.",
  "A malicious update abuses trusted delivery paths.",
  "Supply chain risk comes from vendors, libraries, tools, and providers."
],"Trusted software going bad points to supply chain or malicious update.",[
  ["term","Why are default settings dangerous?","They leave known, predictable paths for attackers to abuse."],
  ["use","A signed vendor update carries malware into production. What vulnerability type fits?","Supply chain exposure through a malicious update."]
],["malicious-updates","supply-chain-vulnerabilities","misconfiguration-vulnerabilities"]),
C("malware",17,"2.4","Malicious activity","Malware families",[
  "Viruses attach to files and need user action.",
  "Worms spread on their own.",
  "Trojans look legitimate while carrying a payload.",
  "Ransomware, spyware, rootkits, and logic bombs have distinct goals."
],"Needs a host file: virus. Self-spreads: worm.",[
  ["term","How is a worm different from a virus?","A worm self-propagates; a virus usually needs user action or a host file."],
  ["use","Malware waits for an HR event before erasing records. What is it?","A logic bomb."]
],["an-overview-of-malware","viruses-and-worms","spyware-and-bloatware","other-malware-types"]),
C("network-wireless-attacks",17,"2.4","Malicious activity","Network, wireless, and physical attacks",[
  "DoS and DDoS exhaust a service.",
  "DNS poisoning, on-path attacks, and replay attacks abuse traffic trust.",
  "Wireless attacks include evil twin and deauthentication.",
  "Physical attacks target devices, ports, or removable media."
],"Traffic redirection or rogue Wi-Fi points to network or wireless attacks.",[
  ["term","What is a replay attack?","Reusing captured valid data or tokens to gain unauthorized access."],
  ["use","A rogue hotspot copies the company SSID to capture logins. What is it?","An evil twin attack."]
],["physical-attacks","denial-of-service","dns-attacks","wireless-attacks","on-path-attacks","replay-attacks"]),
C("application-attacks",17,"2.4","Malicious activity","Application attacks",[
  "Privilege escalation gains more rights than intended.",
  "CSRF tricks a logged-in browser into sending a request.",
  "SSRF tricks a server into making a request for the attacker.",
  "Directory traversal climbs outside allowed folders."
],"Browser trick means CSRF; server trick means SSRF.",[
  ["term","What is the goal of privilege escalation?","To obtain permissions above the current account's intended level."],
  ["use","A web app fetches internal metadata because a user supplied a crafted URL. What is this?","Server-side request forgery."]
],["malicious-code","application-attacks"]),
C("cryptographic-password-attacks",17,"2.4","Malicious activity","Cryptographic and password attacks",[
  "A downgrade attack forces weaker protection.",
  "Collision and birthday attacks target hash behavior.",
  "Brute force hits one account with many guesses.",
  "Password spraying uses a few common guesses across many accounts."
],"Many passwords on one account is brute force; one password on many accounts is spraying.",[
  ["term","What does password spraying try to avoid?","Account lockouts caused by too many guesses on one account."],
  ["use","Attackers force an old protocol version before handshake completion. What is this?","A downgrade attack."]
],["cryptographic-attacks","password-attacks"]),
C("indicators-of-compromise",17,"2.4","Malicious activity","Indicators of compromise",[
  "IOC clues include lockouts, impossible travel, missing logs, and unexplained spikes.",
  "Concurrent sessions can suggest token theft or account sharing.",
  "Blocked content or out-of-cycle logging can signal containment or evasion.",
  "An indicator is evidence, not proof by itself."
],"Odd behavior, not root cause, is the IOC trigger.",[
  ["term","What does impossible travel suggest?","A sign-in pattern too fast to be legitimate, often indicating compromise."],
  ["use","A server's logs stop exactly when CPU usage spikes. What does that suggest?","Possible compromise with log tampering or service disruption."]
],["indicators-of-compromise"]),
C("segmentation",18,"2.5","Mitigation","Segmentation",[
  "Segmentation splits networks or systems into smaller trust zones.",
  "VLANs, subnets, and internal firewalls limit lateral movement.",
  "Good segmentation reduces blast radius.",
  "Zero Trust often uses segmentation to assume breach."
],"Containment between zones points to segmentation.",[
  ["term","What problem does segmentation mainly reduce?","Lateral movement after an attacker reaches one system."],
  ["use","Guest Wi-Fi cannot reach finance servers. Which mitigation is this?","Network segmentation."]
],["segmentation-and-access-control"]),
C("access-control-mitigation",18,"2.5","Mitigation","Access control and least privilege",[
  "ACLs and permissions decide who can read, change, or execute.",
  "Least privilege gives only the access the role needs.",
  "Role reviews catch excess permissions over time.",
  "Tight authorization limits attacker options after compromise."
],"Can sign in but cannot act usually means authorization or least privilege.",[
  ["term","What does least privilege mean?","Grant only the minimum access required for the task."],
  ["use","An analyst loses local admin rights after a role review. Which principle applied?","Least privilege."]
],["segmentation-and-access-control","mitigation-techniques"]),
C("application-allow-listing",18,"2.5","Mitigation","Application allow listing",[
  "Allow listing permits only approved software to run.",
  "It blocks unknown tools even if users can download them.",
  "This is stronger than a deny list on locked-down systems.",
  "Kiosks and servers often benefit most."
],"Only known-good software may run: that is allow listing.",[
  ["term","Why is allow listing stronger than deny listing?","Because everything not explicitly approved is blocked by default."],
  ["use","A kiosk should run only the browser and payment app. What helps most?","Application allow listing."]
],["mitigation-techniques"]),
C("isolation-decommissioning",18,"2.5","Mitigation","Isolation and decommissioning",[
  "Isolation quarantines affected systems before damage spreads.",
  "Containment usually comes before deep investigation.",
  "Decommissioning removes obsolete systems, accounts, and services.",
  "Unused assets become quiet attack paths if left behind."
],"Actively compromised host? Isolate first.",[
  ["term","Why isolate an infected host quickly?","To stop spread, command traffic, or evidence loss while response begins."],
  ["use","A retired web server still has DNS records and open ports. What failed?","Proper decommissioning."]
],["mitigation-techniques"]),
C("hardening-monitoring",18,"2.5","Mitigation","Hardening, patching, encryption, and monitoring",[
  "Hardening removes defaults, unused services, and weak settings.",
  "Patching closes known flaws before attackers reuse them.",
  "Baselines and drift detection keep systems in an approved state.",
  "Host firewalls, HIPS, EDR, encryption, and logging improve resilience."
],"Reduce attack surface and watch for drift: that is hardening.",[
  ["term","What is configuration drift?","A system slowly moving away from its approved baseline over time."],
  ["use","A new server disables Telnet, changes defaults, and enables EDR. What is that?","System hardening."]
],["mitigation-techniques","hardening-techniques"])
];
(window.CN_PACKS=window.CN_PACKS||[]).push({id:"sec-1",cert:"sec",label:"Security+ batch 1",version:"2.3.1",reviewed:REV,objectives:O,concepts});
})();
