(function(){
const REV="2026-10-02";
const CERT="https://www.comptia.org/en-us/certifications/security/";
const M=s=>"https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/"+s+"-sy0-701/";
const P=(s,q,o)=>({s,q,o});
const L=window.LESSON_PILOTS=window.LESSON_PILOTS||{};
L[13]={id:"lesson.sec.13",day:13,v:1,reviewed:REV,src:[CERT,M("security-controls"),M("the-cia-triad"),M("non-repudiation"),M("authentication-authorization-and-accounting"),M("gap-analysis"),M("zero-trust"),M("physical-security"),M("deception-and-disruption")],
  title:"Controls, security principles, and Zero Trust",
  subtitle:"Pinecrest Group maps what a control is, what it does, and how trust should be earned.",
  sections:[
    {id:"categories",type:"facets",title:"Control categories",lead:"Start by asking what kind of control you are looking at.",note:"sec.control-categories",
      facets:[
        {id:"technical",name:"Technical",say:"Technology enforces it directly, such as MFA, encryption, or EDR.",example:"Pinecrest requires MFA for payroll admins.",tags:["Software","Hardware"]},
        {id:"managerial",name:"Managerial",say:"Leadership and governance define it through policy, standards, and oversight.",example:"Pinecrest's board approves the third-party review policy.",tags:["Policy","Oversight"]},
        {id:"operational",name:"Operational",say:"People and process carry it out in daily work.",example:"Reception verifies visitor badges before escorts enter the office.",tags:["Procedure","People"]},
        {id:"physical",name:"Physical",say:"Barriers and environmental protections defend spaces and devices.",example:"The server room uses badge readers and a locked cage.",tags:["Facilities","Hardware"]}],
      practice:P("Pinecrest updates its written vendor-security standard and requires annual exception review.","Which control category is Pinecrest using?",[["Managerial",true,"The standard and review process direct oversight and governance, so they are managerial controls."],["Technical",false,"No technology is enforcing the standard directly in the scenario."],["Physical",false,"The scenario is about policy and review, not facility barriers."]])},
    {id:"types",type:"compare",title:"Control types",lead:"Now ask what the control does in time and effect.",note:"cmp.control-types",
      cols:[
        {id:"preventive",name:"Preventive",say:"Stops or blocks the event before it succeeds.",example:"MFA blocks access with only a stolen password."},
        {id:"detective",name:"Detective",say:"Finds or records activity so responders know what happened.",example:"The SIEM alerts on a sign-in from a risky country."},
        {id:"corrective",name:"Corrective",say:"Restores service or fixes damage after an event.",example:"Clean files are restored after ransomware."}],
      rows:[["When it acts","Before success","During or after activity","After damage"],["Typical clue words","block, stop, deny","alert, log, discover","restore, recover, reimage"],["Main value","Reduce likelihood","Increase visibility","Reduce impact duration"]],
      caution:"Deterrent, directive, and compensating controls also matter. The exam often asks which type fits best in the stated moment.",
      practice:P("A fraud team reviews CCTV footage after a cash drawer goes missing.","Which control type is the footage serving here?",[["Detective",true,"The footage helps discover and reconstruct what happened after the event."],["Preventive",false,"The scenario is about learning from the event, not stopping it in time."],["Corrective",false,"The footage may support response, but it does not restore the cash drawer."]])},
    {id:"principles",type:"facets",title:"CIA, non-repudiation, and AAA",lead:"These are the core ideas questions often pivot around.",note:"sec.security-principles",
      facets:[
        {id:"cia",name:"CIA triad",say:"Confidentiality protects secrecy, integrity protects correctness, and availability protects timely use.",example:"A record can be private yet still fail integrity if its dosage field changes.",tags:["Confidentiality","Integrity","Availability"]},
        {id:"nonrep",name:"Non-repudiation",say:"Proof should tie an action to the signer so they cannot plausibly deny it later.",example:"A signed contract approval is stronger than a shared account log entry.",tags:["Proof","Signer"]},
        {id:"aaa",name:"AAA",say:"Authentication proves identity, authorization limits action, and accounting records use.",example:"An employee signs in, can read only HR files, and leaves an audit trail.",tags:["AuthN","AuthZ","Accounting"]}],
      caution:"Authentication comes before authorization. Audit logs may support non-repudiation, but signatures are stronger proof when unique cryptographic keys are involved.",
      practice:P("A report was available and not exposed, but its totals were silently changed.","Which principle failed most directly?",[["Integrity",true,"The report could still be reached, but its data was no longer trustworthy."],["Availability",false,"Availability is about reachability when needed, which the scenario keeps intact."],["Confidentiality",false,"No unauthorized disclosure is described."]])},
    {id:"strategy",type:"steps",title:"Gap analysis to Zero Trust",lead:"Pinecrest uses a simple sequence: measure the gap, then reduce trust assumptions.",note:"sec.gap-analysis",
      steps:[
        {id:"current",name:"Measure current state",say:"Score today's controls by coverage, maturity, or known weakness.",example:"Remote-access reviews show MFA exists, but file-share access is still broad."},
        {id:"target",name:"Define target state",say:"State the needed baseline or maturity level clearly.",example:"Every remote request should be rechecked by identity, device, and risk."},
        {id:"prioritize",name:"Prioritize the biggest risk gaps",say:"Fix the highest-impact gaps first instead of chasing every issue equally.",example:"Excess access on shared drives is addressed before lower-risk portal branding updates."},
        {id:"reduce-trust",name:"Apply Zero Trust",say:"Verify explicitly, use least privilege, and assume breach when redesigning access.",example:"Pinecrest shrinks each role's reach after adding device-health checks."}],
      caution:"A gap analysis finds missing capability. Zero Trust is the access strategy chosen to close many of those gaps.",
      practice:P("Pinecrest discovers every VPN user can browse every departmental share.","Which step should come right after recording that gap?",[["Prioritize and redesign access around least privilege",true,"The gap matters because a compromise would have wide blast radius, so it should drive a targeted Zero Trust fix."],["Skip approval because the fix helps security",false,"Good changes still need normal control and planning."],["Delete the audit logs to simplify the review",false,"Logs are useful evidence and should not be removed."]])},
    {id:"physical",type:"map",title:"Physical and deception controls",lead:"Facilities security and deception work together: one blocks access, the other spots curiosity.",note:"sec.physical-deception-controls",
      zones:[
        {id:"perimeter",name:"Facility perimeter",desc:"Where entry is discouraged or slowed"},
        {id:"entry",name:"Controlled entry",desc:"Where people or devices are admitted"},
        {id:"inside",name:"Inside the environment",desc:"Where decoys and sensors catch follow-on activity"}],
      items:[
        {id:"bollard",zone:"perimeter",kind:"Barrier",name:"Bollards",say:"Stop vehicles from reaching a sensitive entrance.",example:"Pinecrest protects its shipping dock from vehicle ramming."},
        {id:"vest",zone:"entry",kind:"Access",name:"Access control vestibule",say:"Uses interlocked doors so only one person moves through at a time.",example:"The R&D lab uses a vestibule to block tailgating."},
        {id:"sensor",zone:"entry",kind:"Detection",name:"Sensors",say:"Infrared, microwave, pressure, and similar sensors reveal movement or entry attempts.",example:"The records room alerts when after-hours motion occurs."},
        {id:"token",zone:"inside",kind:"Deception",name:"Honeytoken",say:"Fake data such as a credential or record should never be touched in real work.",example:"A planted cloud key raises an alert if an attacker tests it."},
        {id:"honeypot",zone:"inside",kind:"Deception",name:"Honeypot",say:"A decoy system invites attacker interaction where defenders can observe safely.",example:"Pinecrest publishes a decoy admin portal outside production."}],
      links:["Physical barriers slow or block access before an attacker reaches systems.","Entry controls reduce tailgating and unauthorized presence.","Deception controls create high-confidence alerts because legitimate users should ignore them."],
      practice:P("Pinecrest wants to know immediately if stolen cloud credentials are tested anywhere on the internet.","Which item from the map fits best?",[["Honeytoken",true,"A planted credential should never be used, so any use is a high-confidence alert."],["Bollard",false,"Bollards protect buildings from vehicles, not cloud credentials."],["Vestibule",false,"A vestibule controls physical entry, not digital decoy usage."]])},
    {id:"check",type:"check",title:"Check yourself",lead:"New scored scenarios across controls, CIA, Zero Trust, and facilities security.",from:[13],max:6}
  ]};
L[14]={id:"lesson.sec.14",day:14,v:1,reviewed:REV,src:[CERT,M("change-management"),M("technical-change-management"),M("encrypting-data"),M("encryption-technologies"),M("key-exchange"),M("hashing-and-digital-signatures"),M("public-key-infrastructure"),M("certificates")],
  title:"Change management and cryptography",
  subtitle:"Pinecrest secures changes, then uses the right cryptographic tool for the right job.",
  sections:[
    {id:"change",type:"steps",title:"A controlled change",lead:"Security changes reduce risk only if they do not create a bigger outage on the way.",note:"sec.change-management",
      steps:[
        {id:"request",name:"Request and impact",say:"Describe the change, why it matters, and what could break.",example:"Pinecrest proposes disabling an old TLS setting on customer gateways."},
        {id:"approve",name:"Approve and schedule",say:"CAB or delegated approvers decide whether risk and timing are acceptable.",example:"The gateway change is approved for a Sunday maintenance window."},
        {id:"test",name:"Test and backout",say:"Prove the change works and document how to roll back quickly if it fails.",example:"Ops rehearses the exact old configuration restore in staging."},
        {id:"document",name:"Document the new state",say:"Update versions, diagrams, and baselines so responders know reality.",example:"Runbooks now show the current cipher settings and dependencies."}],
      caution:"A security-improving change can still be a bad production change if dependencies, downtime, or rollback are ignored.",
      practice:P("Pinecrest wants to disable a legacy protocol, but a payroll vendor integration has not been tested yet.","What belongs before production rollout?",[["Dependency testing and a rollback plan",true,"Compatibility and recovery should be clear before changing a production security setting."],["Skipping approval because the old protocol is risky",false,"Risky protocols still require normal production governance."],["Turning off all logs to reduce noise",false,"Logs help prove the change worked and help investigate if it fails."]])},
    {id:"technical",type:"facets",title:"Technical change side effects",lead:"The exam often hides the real problem in what the change might break.",note:"sec.technical-change-management",
      facets:[
        {id:"deps",name:"Dependencies",say:"Changes can break integrations, APIs, legacy apps, or allow lists you forgot existed.",example:"A legacy billing service still expects an older cipher."},
        {id:"downtime",name:"Downtime and restart impact",say:"Some changes restart services, clear sessions, or pause business operations.",example:"A WAF policy update briefly interrupts online checkouts."},
        {id:"docs",name:"Documentation drift",say:"If diagrams and baselines are stale, responders troubleshoot the wrong thing.",example:"Ops follows an outdated firewall map during an incident."}],
      practice:P("A patch is technically correct but restarts an authentication service used by every shift worker at 8:55 a.m.","Which consideration was most clearly missed?",[["Downtime and operational impact",true,"The change may be valid, but timing and restart behavior create avoidable business disruption."],["Whether hashing is one-way",false,"Password-storage theory is unrelated to the restart timing issue."],["The existence of a wildcard certificate",false,"Nothing about hostnames or certificates is the problem here."]])},
    {id:"crypto",type:"compare",title:"Which cryptographic job?",lead:"Do not memorize terms in isolation. Tie them to the job they perform.",note:"cmp.symmetric-asymmetric",
      cols:[
        {id:"sym",name:"Symmetric encryption",say:"One shared key; fast for bulk data once both parties have the secret.",example:"Pinecrest encrypts nightly archives with a symmetric session key."},
        {id:"asym",name:"Asymmetric encryption",say:"A public/private pair; slower, but useful for signatures and secret exchange.",example:"A browser uses the server's public key information during handshake setup."},
        {id:"hash",name:"Hashing",say:"One-way output used for integrity checks and password verification.",example:"A downloaded installer's hash is compared with the publisher's value."}],
      rows:[["Can recover the original?","Yes, with the key","Yes, with the paired key","No"],["Best for","Bulk secrecy","Key exchange, identity, signatures","Integrity and password storage"],["Typical exam clue","session key, throughput","public key, verify, sign","compare, digest, salt"]],
      caution:"If the business must read the original data later, hashing is not the answer.",
      practice:P("Pinecrest needs users to log in later, but administrators should never be able to read their original passwords from the database.","What is the correct storage approach?",[["Store salted slow hashes",true,"The application can verify a guess against the stored hash without keeping the original password."],["Encrypt each password so staff can recover it if needed",false,"Readable passwords are not needed for login and create unnecessary risk."],["Base64-encode every password",false,"Encoding is reversible and not a security control."]])},
    {id:"sign",type:"facets",title:"Signatures and key exchange",lead:"Two crypto mistakes show up repeatedly: signing with the wrong key and confusing proof with secrecy.",note:"sec.digital-signatures-key-exchange",
      facets:[
        {id:"signer",name:"Digital signature",say:"The sender signs a hash with their private key. Anyone with the public key can verify the content and signer.",example:"A director signs an approval file so auditors can verify it later."},
        {id:"secret",name:"Confidential delivery",say:"To keep a secret, encrypt for the recipient rather than signing alone.",example:"Payroll exports are encrypted so only the intended partner can read them."},
        {id:"kx",name:"Key exchange",say:"Protocols such as TLS establish a shared secret before fast symmetric encryption begins.",example:"Pinecrest's portal negotiates a session key first, then protects data traffic."}],
      caution:"A signature does not hide content. Encryption does not by itself prove who approved it.",
      practice:P("Pinecrest must prove the COO approved a file and also keep the file unreadable in transit.","What is the best approach?",[["Sign the file and encrypt it for the recipient",true,"Signing proves origin and integrity; encryption provides confidentiality."],["Hash the file only",false,"A bare hash can show equality, but it does not prove who approved the file or keep it secret."],["Use a wildcard certificate instead",false,"A server certificate does not replace message signing plus confidentiality needs."]])},
    {id:"pki",type:"map",title:"PKI in motion",lead:"Certificates are easier to remember when you place each PKI part in the trust flow.",note:"sec.pki-certificates",
      zones:[
        {id:"request",name:"Request",desc:"Where identity and key details are submitted"},
        {id:"issue",name:"Issue and trust",desc:"Where the CA signs and the client trusts"},
        {id:"check",name:"Ongoing validation",desc:"Where status is checked later"}],
      items:[
        {id:"csr",zone:"request",kind:"Input",name:"CSR",say:"Carries subject information and the public key to the CA.",example:"Pinecrest generates a CSR for vpn.pinecrest.example."},
        {id:"ca",zone:"issue",kind:"Trust",name:"Certificate authority",say:"Signs certificates so others can trust the binding between identity and public key.",example:"Browsers already trust the public CA in their root store."},
        {id:"wild",zone:"issue",kind:"Scope",name:"Wildcard certificate",say:"One certificate can cover many first-level subdomains of the same parent domain.",example:"mail, files, and vpn under one parent domain share a wildcard cert."},
        {id:"ocsp",zone:"check",kind:"Status",name:"OCSP",say:"Checks in near real time whether a certificate is revoked.",example:"A gateway checks revocation before a high-value exchange."},
        {id:"crl",zone:"check",kind:"Status",name:"CRL",say:"A downloaded list of revoked certificates.",example:"Older systems periodically download the CA's revocation list."}],
      links:["The CSR comes before the certificate exists.","The CA's signature creates the trust chain.","Revocation checks happen after issuance, when a relying party wants to know whether trust still holds."],
      practice:P("Pinecrest trusts a partner's certificate chain but wants to know whether that specific certificate was revoked right now.","Which PKI item fits best?",[["OCSP",true,"OCSP answers the status of one certificate in near real time."],["CSR",false,"A CSR asks for a certificate to be issued; it is not a status check."],["Wildcard certificate",false,"Wildcard certificates define hostname coverage, not revocation status."]])},
    {id:"check",type:"check",title:"Check yourself",lead:"Scored scenarios across change control, hashing, signatures, PKI, and key exchange.",from:[14],max:6}
  ]};
L[15]={id:"lesson.sec.15",day:15,v:1,reviewed:REV,src:[CERT,M("threat-actors"),M("common-threat-vectors"),M("phishing"),M("impersonation"),M("watering-hole-attacks"),M("other-social-engineering-attacks")],
  title:"Threat actors, attack surfaces, and social engineering",
  subtitle:"Pinecrest learns to separate who is attacking, why they care, and how they get in.",
  sections:[
    {id:"actors",type:"facets",title:"Threat actors and motives",lead:"Start by identifying the actor's resources, patience, and goal.",note:"sec.threat",
      facets:[
        {id:"nation",name:"Nation-state / APT",say:"Well-funded, patient, and often focused on espionage, disruption, or strategic advantage.",example:"A long-running campaign targets Pinecrest's research partner network.",tags:["Resources","Espionage"]},
        {id:"crime",name:"Organized crime and insiders",say:"Criminals usually chase money; insiders may act from revenge, profit, or carelessness.",example:"Ransomware crews want payment, while a departing admin may steal data.",tags:["Money","Access"]},
        {id:"other",name:"Hacktivists, unskilled attackers, and shadow IT",say:"Ideology, curiosity, or convenience can still create real security impact.",example:"An employee signs up for an unsanctioned file-sharing service to move faster.",tags:["Ideology","Convenience"]}],
      practice:P("A campaign spends months collecting defense design data and avoids noisy ransomware behavior.","Which actor profile fits best?",[["Nation-state or APT",true,"Long-term espionage with patience and funding aligns most strongly with a nation-state-backed threat."],["Shadow IT",false,"Shadow IT is risky internal convenience, not an external espionage campaign."],["An unskilled attacker",false,"The patience and sophistication described do not fit an unskilled attacker."]])},
    {id:"surface",type:"map",title:"Attack surfaces and vectors",lead:"The surface is what can be reached. The vector is how the attacker travels through it.",note:"sec.attack-surfaces",
      zones:[
        {id:"people",name:"People and messaging",desc:"Users can be reached through communication channels"},
        {id:"tech",name:"Technology and services",desc:"Software, hardware, and internet-facing systems"},
        {id:"supply",name:"Partners and dependencies",desc:"Vendors, libraries, providers, and MSPs"}],
      items:[
        {id:"mail",zone:"people",kind:"Vector",name:"Email, SMS, and voice",say:"Messaging channels deliver phishing and impersonation at scale.",example:"A one-time-code request reaches employees by text."},
        {id:"usb",zone:"people",kind:"Vector",name:"Files and removable media",say:"Users can introduce risk by opening files or plugging in unknown media.",example:"A found USB drive is inserted into a front-desk PC."},
        {id:"vpn",zone:"tech",kind:"Surface",name:"Exposed services and defaults",say:"Internet-facing admin portals, open ports, and vendor defaults widen exposure.",example:"An old VPN appliance still uses the default admin password."},
        {id:"legacy",zone:"tech",kind:"Surface",name:"Unsupported software",say:"Unpatched or end-of-life systems stay exposed longer.",example:"A legacy scheduler no longer receives security updates."},
        {id:"vendor",zone:"supply",kind:"Surface",name:"Suppliers and service providers",say:"A trusted partner or software feed can become the path in.",example:"A vendor integration connects directly to production finance data."}],
      links:["Most real incidents cross more than one zone, such as phishing a user to reach an exposed admin system.","Defaults and unsupported systems are easy attack-surface questions because the path in is obvious.","Third-party access expands your attack surface even when the partner is not malicious."],
      practice:P("Pinecrest still exposes an old gateway on the internet with the vendor password unchanged.","What increased most directly?",[["The attack surface",true,"The reachable service plus a default credential create a broad and easy path in."],["Non-repudiation",false,"Proof of action is unrelated to the gateway's exposure."],["Key stretching",false,"Password-hash hardness is not the primary issue here."]])},
    {id:"social",type:"compare",title:"Social-engineering patterns",lead:"The exam often swaps channels, targets, and stories to see whether you can tell them apart.",note:"cmp.phishing-pretexting",
      cols:[
        {id:"phish",name:"Phishing",say:"A fraudulent message asks for action, credentials, or money.",example:"An email urges staff to log in through a fake invoice portal."},
        {id:"pre",name:"Pretexting",say:"A fake role or scenario is used to justify the request.",example:"The caller claims to be from the payroll bank and says an emergency transfer is blocked."},
        {id:"water",name:"Watering hole",say:"A trusted site is compromised so the victim comes to the attacker.",example:"Engineers are infected through the trade portal they use every morning."}],
      rows:[["Main clue","Message arrives directly","Believable story or false role","Trusted site becomes hostile"],["Common channel","Email, SMS, or voice","Usually paired with a call or message","Web browsing"],["Best question","What lure was sent?","What identity or story was claimed?","Which site do victims already trust?"]],
      caution:"Smishing and vishing are still phishing; they just use SMS or voice as the delivery channel.",
      practice:P("A caller claiming to be from a cloud vendor says MFA must be disabled for an urgent fix.","Which idea matters most in that moment?",[["Pretexting",true,"The power of the attack is the invented emergency story and false authority."],["Watering hole",false,"No trusted website is involved in the scenario."],["Password spraying",false,"The attack depends on persuasion, not guesses against many accounts."]])},
    {id:"brand",type:"facets",title:"Brand abuse and targeted scams",lead:"Some lures work because the attacker borrows trust from a name, a domain, or a role.",note:"sec.watering-hole-brand-abuse",
      facets:[
        {id:"typo",name:"Typosquatting",say:"The victim lands on a look-alike domain because of a typing mistake or a visually similar name.",example:"payr0ll-pinecrest.example captures sign-ins intended for payroll.",tags:["Look-alike","Domain"]},
        {id:"bec",name:"Business email compromise",say:"An executive or vendor identity is impersonated to trigger a payment or data change.",example:"Finance receives an urgent wire request from a spoofed CFO account.",tags:["Money","Authority"]},
        {id:"info",name:"Misinformation and disinformation",say:"False content shapes beliefs or behavior, whether spread carelessly or deliberately.",example:"A fake outage notice drives staff to a phony status portal.",tags:["Manipulation","Trust"]}],
      practice:P("Pinecrest staff visit payrolI.pinecrest.example after typing quickly and see copied branding.","Which technique is most directly at work?",[["Typosquatting",true,"The attacker is abusing a look-alike domain name to borrow trust."],["Watering hole",false,"A watering hole compromises a legitimate site the victims already use, not a fake look-alike domain."],["Gap analysis",false,"Gap analysis compares current and target states; it is not an attack method."]])},
    {id:"check",type:"check",title:"Check yourself",lead:"Scored scenarios across actors, motives, vectors, phishing, and social engineering.",from:[15],max:6}
  ]};
L[16]={id:"lesson.sec.16",day:16,v:1,reviewed:REV,src:[CERT,M("memory-injections"),M("buffer-overflows"),M("race-conditions"),M("malicious-updates"),M("operating-system-vulnerabilities"),M("sql-injection"),M("cross-site-scripting"),M("hardware-vulnerabilities"),M("virtualization-vulnerabilities"),M("cloud-specific-vulnerabilities"),M("supply-chain-vulnerabilities"),M("misconfiguration-vulnerabilities"),M("mobile-device-vulnerabilities"),M("zero-day-vulnerabilities")],
  title:"Vulnerability types",
  subtitle:"Pinecrest sorts weaknesses by where they live and how attackers exploit them.",
  sections:[
    {id:"foundations",type:"facets",title:"What makes something a vulnerability?",lead:"A vulnerability is a weakness, not the threat actor and not the resulting business risk.",note:"sec.vulnerability",
      facets:[
        {id:"weak",name:"Weakness",say:"The flaw may live in code, configuration, architecture, or process.",example:"An admin portal uses default credentials and stays internet-facing."},
        {id:"zero",name:"Zero-day",say:"A zero-day is still without a vendor fix or broad defensive patch.",example:"A newly disclosed hypervisor flaw has only temporary workarounds today."},
        {id:"known",name:"Known and unpatched",say:"Once a patch exists, the issue remains serious but is no longer a zero-day.",example:"Ops skipped last month's internet-gateway update."}],
      practice:P("A vendor released a fix last month, but Pinecrest has not installed it yet.","How should the weakness be classified now?",[["A known unpatched vulnerability",true,"The weakness is still present, but the existence of a vendor fix means it is no longer a zero-day."],["A zero-day",false,"Zero-day ends once a vendor fix exists."],["A honeytoken",false,"A honeytoken is decoy data, not a software weakness."]])},
    {id:"memory",type:"compare",title:"Memory corruption and injection",lead:"These issues usually reveal themselves through where the attack lands: memory space, process boundary, or timing gap.",note:"sec.memory-race-vulnerabilities",
      cols:[
        {id:"overflow",name:"Buffer overflow",say:"Too much input overwrites memory outside the intended boundary.",example:"A service crashes after an overlong field changes execution flow."},
        {id:"inject",name:"Memory injection",say:"Code is placed inside another process so it runs under that process context.",example:"Injected code rides inside a trusted process to evade scrutiny."},
        {id:"race",name:"Race / TOC-TOU",say:"The attacker wins the gap between validation and use.",example:"A checked file is swapped before a privileged open call."}],
      rows:[["Core clue","Input exceeds space","Code placed inside another process","State changes after validation"],["Common result","Crash or arbitrary execution","Masquerading inside a process","Bypass of a security check"],["Best exam question","What did the input overwrite?","Which process was abused?","What changed between check and use?"]],
      practice:P("Testers swap a temporary file after it is approved but before the service opens it with elevated rights.","Which column fits best?",[["Race / TOC-TOU",true,"The check and the later use are separated, and the attacker wins that gap."],["Buffer overflow",false,"No memory-boundary overwrite is described."],["Memory injection",false,"The problem is timing around a file object, not code placed into another process."]])},
    {id:"web",type:"facets",title:"Input-driven web vulnerabilities",lead:"Pinecrest's developers need to separate browser-side script problems from backend query problems.",note:"sec.injection-vulnerabilities",
      facets:[
        {id:"sqli",name:"SQL injection",say:"User input changes the meaning of a database command.",example:"A crafted login field turns a restricted query into a broad one.",tags:["Database","Parameterized queries"]},
        {id:"xss",name:"Cross-site scripting",say:"Attacker-controlled script runs in another user's browser through trusted page content.",example:"A comment field serves script back to every visitor.",tags:["Browser","Output encoding"]},
        {id:"fix",name:"Different fixes",say:"Parameterized queries blunt SQL injection, while output encoding and validation help against XSS.",example:"The right control depends on whether code reached the database or the browser.",tags:["Cause","Control"]}],
      practice:P("A review finds quote characters and always-true logic in a login request that changes a database query.","Which vulnerability is the root issue?",[["SQL injection",true,"The attacker altered the backend query by sending crafted input."],["Cross-site scripting",false,"XSS focuses on script execution in the browser, not query logic in the database."],["Watering hole",false,"No compromised third-party site is involved."]])},
    {id:"platform",type:"map",title:"Platform-specific weaknesses",lead:"Different platforms fail in different ways, so map the weakness to the layer first.",note:"sec.platform-vulnerabilities",
      zones:[
        {id:"system",name:"System and hardware",desc:"Operating systems, firmware, and legacy devices"},
        {id:"virtual",name:"Virtual and cloud",desc:"Hypervisors, tenants, storage, and IAM"},
        {id:"mobile",name:"Mobile",desc:"Phones and tablets with altered trust models"}],
      items:[
        {id:"eol",zone:"system",kind:"Lifecycle",name:"End-of-life software",say:"Unsupported systems stop receiving fixes and accumulate exposure.",example:"A scheduler remains online after vendor support ended."},
        {id:"firm",zone:"system",kind:"Low-level",name:"Firmware flaw",say:"Weakness below the OS can be hard to see and patch.",example:"A controller board needs a security firmware update."},
        {id:"vm",zone:"virtual",kind:"Boundary",name:"VM escape",say:"Code crosses from a guest environment into the host or hypervisor.",example:"One tenant reaches host resources through a hypervisor flaw."},
        {id:"cloud",zone:"virtual",kind:"Configuration",name:"Open cloud storage",say:"A cloud service becomes public or over-permissive through bad settings.",example:"An export bucket allows anonymous downloads."},
        {id:"mobile",zone:"mobile",kind:"Trust",name:"Rooting and sideloading",say:"Built-in restrictions are removed, and unvetted apps can be installed.",example:"A rooted phone now handles Pinecrest mail."}],
      links:["Layer identification helps you choose the right fix or compensating control quickly.","Virtualization and cloud problems often look like configuration issues until you ask what boundary failed.","Mobile questions usually turn on whether built-in protections were bypassed."],
      practice:P("A rooted phone now installs unreviewed apps from outside the store and also syncs company mail.","Which mapped weakness matters most?",[["Rooting and sideloading",true,"The trust model of the mobile device itself has been weakened."],["VM escape",false,"The issue is a mobile device, not a hypervisor boundary."],["OCSP failure",false,"Certificate revocation checking is unrelated to the rooted-phone behavior described."]])},
    {id:"supply",type:"steps",title:"From trusted source to hidden risk",lead:"Supply-chain and misconfiguration questions are easiest when you walk the path the weakness took into the environment.",note:"sec.misconfiguration-supply-chain-vulnerabilities",
      steps:[
        {id:"trusted",name:"Trust enters the design",say:"The organization relies on a vendor, library, update path, or default setting.",example:"Pinecrest auto-approves signed updates from a device supplier."},
        {id:"weak",name:"The trust is too broad or stale",say:"Defaults remain, keys are weak, or a supplier is assumed safe without verification.",example:"A router still exposes Telnet with vendor defaults from deployment day."},
        {id:"abuse",name:"Attackers abuse the path",say:"They poison the trusted update or take advantage of the misconfiguration.",example:"A malicious signed update lands on radiology workstations."},
        {id:"tighten",name:"Reduce and verify trust",say:"Harden settings, review dependencies, and verify updates instead of trusting blindly.",example:"Pinecrest narrows auto-approval and retires unsafe defaults."}],
      caution:"Supply chain and malicious update questions focus on how trust was borrowed, not simply on what malware ran later.",
      practice:P("A trusted vendor update turns out to contain malicious code inserted before release.","Which step in the sequence failed first?",[["The organization trusted a delivery path that attackers later poisoned",true,"The update channel itself became the path in, which is why this is supply-chain exposure."],["The organization forgot to segment guest Wi-Fi",false,"Guest Wi-Fi segmentation does not explain a poisoned trusted update."],["The organization used OCSP instead of CRL",false,"Revocation-check choice is not the root issue in the software-supply path described."]])},
    {id:"check",type:"check",title:"Check yourself",lead:"Scored scenarios across memory bugs, injection flaws, platform weaknesses, and supply-chain risk.",from:[16],max:6}
  ]};
L[17]={id:"lesson.sec.17",day:17,v:1,reviewed:REV,src:[CERT,M("an-overview-of-malware"),M("viruses-and-worms"),M("spyware-and-bloatware"),M("other-malware-types"),M("physical-attacks"),M("denial-of-service"),M("dns-attacks"),M("wireless-attacks"),M("on-path-attacks"),M("replay-attacks"),M("malicious-code"),M("application-attacks"),M("cryptographic-attacks"),M("password-attacks"),M("indicators-of-compromise")],
  title:"Malware, attacks, and indicators",
  subtitle:"Pinecrest studies what malicious activity looks like before, during, and after compromise.",
  sections:[
    {id:"malware",type:"facets",title:"Malware families",lead:"The key question is often how the malware spreads or what it hides.",note:"sec.malware",
      facets:[
        {id:"virus",name:"Virus, worm, trojan",say:"A virus needs a host file, a worm self-spreads, and a trojan looks legitimate while carrying a payload.",example:"A fake update installer spreads as a trojan, then drops ransomware.",tags:["Spread","Disguise"]},
        {id:"stealth",name:"Rootkit and spyware",say:"Rootkits hide deep in the OS; spyware watches user activity.",example:"A hidden keylogger captures legal-login sessions.",tags:["Stealth","Surveillance"]},
        {id:"trigger",name:"Logic bomb and ransomware",say:"Logic bombs wait for a condition, while ransomware denies access until payment is made.",example:"A script triggers on HR termination status and erases a project share.",tags:["Trigger","Extortion"]}],
      practice:P("Malware jumps from one warehouse PC to many others without waiting for users to open more files.","Which family trait matters most?",[["Worm behavior",true,"Self-propagation across systems is the defining clue."],["Virus behavior",false,"Viruses more often depend on host files and user activity to spread."],["Logic-bomb behavior",false,"A logic bomb is defined by its trigger condition, not automatic network propagation."]])},
    {id:"attacks",type:"compare",title:"Attack patterns by path",lead:"Group the attack by the path it abuses: traffic, application logic, or cryptographic trust.",note:"sec.network-wireless-attacks",
      cols:[
        {id:"net",name:"Network and wireless",say:"Traffic trust is abused through DNS poisoning, on-path interception, replay, DDoS, or rogue Wi-Fi.",example:"A cloned SSID captures sign-ins near the library."},
        {id:"app",name:"Application",say:"The app or browser is tricked into doing more than intended.",example:"A crafted URL makes the server fetch internal metadata."},
        {id:"crypto",name:"Crypto and password",say:"Weak protocol choice or guessing strategy is the attack path.",example:"One seasonal password is tried against thousands of mailboxes."}],
      rows:[["Main clue","Traffic redirection or fake access point","Unexpected action by browser or server","Negotiation weakness or login-guess pattern"],["Typical examples","evil twin, DNS poisoning, replay","CSRF, SSRF, traversal, escalation","downgrade, collision, brute force, spraying"],["Best first question","What path or trust was intercepted?","Which component acted on untrusted input?","Was protection weakened or was access guessed?"]],
      practice:P("Pinecrest's web app fetches a user-supplied URL and ends up calling an internal metadata endpoint.","Which column fits best?",[["Application",true,"The server is tricked into performing an action on the attacker's behalf, which is an application attack."],["Network and wireless",false,"The problem is not a redirected traffic path or rogue Wi-Fi environment."],["Crypto and password",false,"No protocol-downgrade or guessing pattern appears in the scenario."]])},
    {id:"ioc",type:"facets",title:"Indicators of compromise",lead:"An indicator is evidence that something deserves investigation, even before root cause is known.",note:"sec.indicators-of-compromise",
      facets:[
        {id:"auth",name:"Account anomalies",say:"Impossible travel, concurrent sessions, and unusual lockouts suggest credential abuse.",example:"An account signs in from Ohio and then Europe four minutes later.",tags:["Identity","Timing"]},
        {id:"system",name:"System anomalies",say:"Missing logs, unexplained resource spikes, and blocked content can show tampering or containment.",example:"CPU spikes coincide with outbound traffic and vanished logs.",tags:["Logs","Resources"]},
        {id:"care",name:"Use indicators carefully",say:"One clue rarely proves the incident by itself, but it tells responders where to look next.",example:"A single lockout may be benign; a lockout wave plus impossible travel is much stronger.",tags:["Evidence","Context"]}],
      practice:P("A file server shows outbound traffic spikes exactly when its normal security logs disappear.","Why is that especially suspicious?",[["Attackers may be tampering with logging during malicious activity",true,"Missing logs during an already-anomalous period are a strong compromise clue."],["Log loss proves the server is healthy again",false,"Missing evidence does not prove recovery."],["It means the server was patched successfully",false,"There is no patching clue, and missing logs during spikes point the other way."]])},
    {id:"respond",type:"steps",title:"Reading an attack clue",lead:"Pinecrest trains responders to classify the clue before choosing a tool.",note:"sec.cryptographic-password-attacks",
      steps:[
        {id:"spread",name:"Ask how it spreads",say:"Self-spreading suggests a worm; one lure file suggests a trojan or virus.",example:"The same malware appears on many hosts without new user action."},
        {id:"path",name:"Ask what path was abused",say:"Was it DNS, Wi-Fi, browser logic, server logic, or password guessing?",example:"The same password appears once each against thousands of accounts."},
        {id:"proof",name:"Ask what evidence confirms it",say:"Logs, captures, and host telemetry narrow the attack category before containment escalates.",example:"Wireless captures confirm a rogue SSID near the library."},
        {id:"contain",name:"Contain based on the path",say:"Cut the path that matters, such as the host, the rogue AP, or the abused account flow.",example:"Ops isolates the beaconing endpoint before reimaging it."}],
      caution:"Containment choices differ by path. Do not treat an evil twin, SSRF, and password spraying as the same kind of problem.",
      practice:P("The SIEM shows one common password used once against thousands of accounts with few lockouts.","Which classification should responders choose first?",[["Password spraying",true,"The guess pattern is shallow across many accounts, which is the spraying hallmark."],["Brute force",false,"Brute force is many guesses against one account or one secret."],["Rootkit",false,"A rootkit is resident malware, not a login-attempt pattern."]])},
    {id:"check",type:"check",title:"Check yourself",lead:"Scored scenarios across malware, network attacks, application attacks, crypto/password attacks, and IOCs.",from:[17],max:6}
  ]};
L[18]={id:"lesson.sec.18",day:18,v:1,reviewed:REV,src:[CERT,M("segmentation-and-access-control"),M("mitigation-techniques"),M("hardening-techniques")],
  title:"Mitigation techniques",
  subtitle:"Pinecrest focuses on the controls that reduce blast radius, close weaknesses, and contain damage quickly.",
  sections:[
    {id:"contain",type:"steps",title:"Containment first",lead:"When compromise is active, the best first move is often the simplest: stop spread before perfect diagnosis.",note:"sec.isolation-decommissioning",
      steps:[
        {id:"spot",name:"Spot the active risk",say:"Look for beaconing, lateral movement, or live abuse of credentials.",example:"An endpoint is talking to command-and-control while probing neighbors."},
        {id:"isolate",name:"Isolate the affected asset",say:"Quarantine the host or segment before attackers spread further.",example:"The SOC removes the host from normal network access first."},
        {id:"preserve",name:"Preserve useful evidence",say:"Contain without destroying the timeline you still need.",example:"Memory and logs are collected before a full rebuild."},
        {id:"retire",name:"Decommission what should not return",say:"If an asset is obsolete or abandoned, remove it fully rather than letting it linger.",example:"A retired portal loses DNS, VM, keys, and firewall access."}],
      caution:"Immediate reimaging can destroy evidence. Waiting can let the attacker keep moving. Isolate first unless safety dictates otherwise.",
      practice:P("A workstation is beaconing to a known command server and attempting lateral movement.","What should Pinecrest do first?",[["Isolate the workstation",true,"Containment prevents continued spread and buys time for evidence collection and follow-on action."],["Reimage it immediately before collecting anything",false,"That can destroy evidence while the host remains dangerous until the reimage actually happens."],["Wait for the next maintenance window",false,"Active compromise should not be left in place for convenience."]])},
    {id:"zones",type:"map",title:"Segmentation and least privilege",lead:"Pinecrest reduces blast radius by separating systems and reducing each role's reach.",note:"sec.segmentation",
      zones:[
        {id:"guest",name:"Low trust",desc:"Visitors and unmanaged devices"},
        {id:"users",name:"Business operations",desc:"Normal staff systems and line-of-business apps"},
        {id:"critical",name:"High trust",desc:"Sensitive servers and tightly controlled services"}],
      items:[
        {id:"wifi",zone:"guest",kind:"Network",name:"Guest Wi-Fi",say:"Internet access only, with no route to internal systems.",example:"Visitors cannot reach payroll or file shares."},
        {id:"hr",zone:"users",kind:"Access",name:"Role-based app access",say:"Staff can sign in, but each role reaches only the systems it needs.",example:"Clerks can search records but cannot export every resident file."},
        {id:"legacy",zone:"critical",kind:"Containment",name:"Legacy segment",say:"Fragile or unpatchable devices are isolated behind strict rules.",example:"An old imaging system can talk only to its management jump host."},
        {id:"fw",zone:"critical",kind:"Enforcement",name:"Internal firewall or ACLs",say:"Traffic between zones is tightly filtered instead of broadly trusted.",example:"Guest traffic cannot laterally move into finance servers."}],
      links:["Segmentation limits where a compromised system can go next.","Least privilege limits what a compromised user can do next.","Legacy systems often rely on both because they cannot host modern controls."],
      practice:P("Pinecrest wants a legacy imaging device to stay online until replacement arrives, even though it cannot take new endpoint software.","Which map item best reduces immediate risk?",[["Legacy segment",true,"If the host cannot be fixed directly, isolating it behind strict rules shrinks its blast radius."],["Guest Wi-Fi",false,"Guest Wi-Fi is the visitor zone, not the right control for a production medical device."],["Role-based app access",false,"User-role scoping matters, but the problem here is network reach to and from the device."]])},
    {id:"choices",type:"compare",title:"Choose the right mitigation",lead:"Different mitigations solve different stages of the same attack chain.",note:"sec.access-control-mitigation",
      cols:[
        {id:"acl",name:"ACLs and least privilege",say:"Reduce what authenticated users and systems may do.",example:"A finance analyst loses unneeded local admin rights."},
        {id:"allow",name:"Application allow listing",say:"Reduce what software may run.",example:"A point-of-sale terminal runs only its approved payment stack."},
        {id:"hard",name:"Hardening and patching",say:"Reduce what is exposed or weak in the first place.",example:"A new server disables legacy services, changes defaults, and applies the vendor fix."}],
      rows:[["Best for","Excess permissions","Unknown or unwanted software","Known weaknesses and broad attack surface"],["Typical clue","can sign in but cannot do task","only these apps should run","disable, patch, baseline, encrypt"],["What it shrinks","Capabilities","Executable paths","Reachable weaknesses"]],
      practice:P("A point-of-sale terminal should run only the payment app, printer driver, and support agent.","Which column fits best?",[["Application allow listing",true,"Allow listing enforces a known-good execution set on a locked-down device."],["ACLs and least privilege",false,"Permissions do not decide which local software is allowed to execute."],["Hardening and patching",false,"Hardening helps overall, but the requirement is specifically about restricting what runs."]])},
    {id:"hardening",type:"facets",title:"Hardening and monitoring",lead:"Mitigation is not only about blocking attacks. It is also about keeping systems in a safe state over time.",note:"sec.hardening-monitoring",
      facets:[
        {id:"baseline",name:"Baseline and drift",say:"Approved configurations matter only if you can tell when systems drift away from them.",example:"Emergency changes slowly weaken the hardened server template.",tags:["Baseline","Drift"]},
        {id:"reduce",name:"Reduce attack surface",say:"Disable unused services, change defaults, remove unneeded software, and encrypt sensitive storage.",example:"A new server disables Telnet, changes the default admin password, and enables disk encryption.",tags:["Defaults","Services"]},
        {id:"watch",name:"Watch and patch",say:"Patching closes known flaws, while host firewalls, HIPS, EDR, and logging improve visibility and response.",example:"A tested internet-facing server patch is deployed quickly and monitored afterward.",tags:["Patch","EDR","Logging"]}],
      practice:P("Two servers keep drifting from the approved baseline after emergency work.","What should Pinecrest add first?",[["Configuration enforcement with drift detection",true,"The team needs faster visibility and control over baseline changes as they happen."],["A honeyfile on each server",false,"A decoy file may detect snooping but does not manage baseline drift."],["A wildcard certificate",false,"Hostnames and TLS identity are unrelated to baseline drift control."]])},
    {id:"check",type:"check",title:"Check yourself",lead:"Scored scenarios across containment, segmentation, least privilege, allow listing, hardening, and decommissioning.",from:[18],max:6}
  ]};
L[19]={id:"lesson.sec.19",day:19,v:1,reviewed:REV,src:[CERT,M("security-controls"),M("hashing-and-digital-signatures"),M("phishing"),M("sql-injection"),M("an-overview-of-malware"),M("mitigation-techniques")],
  title:"Review: domains 1 and 2",
  subtitle:"Six Pinecrest cases connect the ideas across Levels 13 to 18 before an independent check.",
  sections:[
    {id:"cases",type:"casebook",title:"Guided review",lead:"Each case points back to the lesson section and Pocket Note that best explain the answer.",
      cases:[
        {id:"c1",task:"Pick the missing control idea",s:"Pinecrest already requires MFA for VPN users, but every authenticated employee can browse every internal share once connected.",q:"Which idea should drive the next redesign?",
          o:[["Least privilege within a Zero Trust model",true,"Verification already happens at sign-in; the bigger gap is that every account still reaches too much after access is granted."],["A larger maintenance window",false,"Timing the change better does not address overbroad access."],["A wildcard certificate",false,"Certificate scope is unrelated to excessive file-share access."]],
          links:[{day:13,sec:"strategy",label:"Level 13: Gap analysis to Zero Trust"},{concept:"sec.zero-trust"}]},
        {id:"c2",task:"Choose the cryptographic job",s:"A director must send a confidential file to a partner and later prove that the exact file was approved by the director.",q:"What should Pinecrest use?",
          o:[["Encryption for secrecy and a digital signature for proof",true,"These jobs are different: encryption hides content, while a signature proves who approved it and that it was unchanged."],["Hashing alone",false,"A bare hash does not prove who approved the file or keep it confidential."],["A CRL alone",false,"A revocation list checks certificate status; it does not replace message protection."]],
          links:[{day:14,sec:"sign",label:"Level 14: Signatures and key exchange"},{concept:"sec.digital-signatures-key-exchange"}]},
        {id:"c3",task:"Classify the social-engineering path",s:"Engineers are infected after visiting the trade-association portal they use every morning. No suspicious email campaign was seen first.",q:"Which attack path is most likely?",
          o:[["A watering hole",true,"The attacker likely waited on a trusted site the targets already visited."],["Smishing",false,"No text-message lure appears in the case."],["Password spraying",false,"Password spraying does not explain infections tied to one trusted site."]],
          links:[{day:15,sec:"social",label:"Level 15: Social-engineering patterns"},{concept:"sec.watering-hole-brand-abuse"}]},
        {id:"c4",task:"Name the vulnerability class",s:"A review finds that a public object-storage bucket lets anyone with the URL download customer exports. The data was exposed through settings, not malware.",q:"Which weakness is most direct?",
          o:[["A cloud-specific vulnerability caused by misconfiguration",true,"The storage service was left too open, which is a cloud-configuration weakness."],["A zero-day",false,"Nothing suggests a new unknown flaw without a vendor patch."],["A replay attack",false,"The issue is open storage settings, not reused captured traffic."]],
          links:[{day:16,sec:"platform",label:"Level 16: Platform-specific weaknesses"},{concept:"sec.platform-vulnerabilities"}]},
        {id:"c5",task:"Read the indicator",s:"One service account signs in from Texas and then Germany four minutes later, while normal logs disappear during the same window.",q:"What should responders conclude first?",
          o:[["There are strong indicators of compromise that warrant immediate investigation",true,"Impossible travel plus missing logs during anomalies is a serious signal even before full root cause is known."],["The account is healthy because it still signs in",false,"Successful sign-ins do not outweigh impossible travel and vanished logs."],["The safest move is to wait for the next change window",false,"The clues point to active risk, not something that should wait."]],
          links:[{day:17,sec:"ioc",label:"Level 17: Indicators of compromise"},{concept:"sec.indicators-of-compromise"}]},
        {id:"c6",task:"Choose the first mitigation",s:"A kiosk starts beaconing to a command server and tries to copy itself to neighboring systems. Pinecrest can reach the kiosk remotely right now.",q:"What should the SOC do first?",
          o:[["Isolate the kiosk from the network",true,"Containment stops spread and buys time for evidence collection and recovery."],["Reimage it immediately before containment",false,"That risks losing evidence while the host remains connected during the start of the response."],["Grant it more access so analysts can troubleshoot faster",false,"More access increases risk and does not contain the compromise."]],
          links:[{day:18,sec:"contain",label:"Level 18: Containment first"},{concept:"sec.isolation-decommissioning"}]}]},
    {id:"check",type:"check",title:"Check yourself",lead:"Independent scored review across Levels 13 to 18.",from:[13,14,15,16,17,18],max:8}
  ]};
})();
