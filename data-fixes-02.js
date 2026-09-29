// Question corrections, batch 02 — answer-length cueing. window.QFIXES2
//
// Same overlay mechanism as data-fixes-01.js, applied after it. Originals stay in the
// banks; this file is the reviewable change set.
//
// THE PROBLEM: 319 of 796 questions had the correct answer more than 20 characters
// longer than every distractor, and 88 by more than 40. The worst were 80-100 character
// answers sitting beside 15-25 character fragments. A student who notices that stops
// reading the question.
//
// Two flaws, one cause. The correct answer had been written as a full explanatory
// sentence, and the distractors as dismissive fragments — "Archive old logs", "Only
// payroll setup". Those are not wrong answers a learner would weigh; they are filler.
// So every fix here does both halves:
//
//   1. Trim the answer to its claim. The detail belongs in the explanation, and in
//      almost every case the explanation already said it.
//   2. Rewrite each distractor as something a half-prepared student might actually pick.
//
// Target for every item: all four options within about 15 characters, and the correct
// answer never the longest. Verified by build-drop.py on every build.
//
// This batch is the 29 worst. The rest of the 319 remain, and are reported as a warning
// by the builder rather than silently carried.
//
// WIRING — after data-fixes-01.js, same loop:
//   [window.QFIXES, window.QFIXES2].forEach(FIX => {
//     Object.keys(FIX || {}).forEach(k => {
//       if (!Q[k]) return; const x = FIX[k];
//       Q[k] = Object.assign({}, Q[k], { q:x[0], o:x[1], a:x[2], why:x[3] });
//     });
//   });
window.QFIXES2 = {

/* ---- SC-900 ---- */

"3-p3":["A Microsoft 365 group differs from a security group primarily because it:",
 ["Adds shared collaboration resources like a mailbox and calendar",
  "Cannot be used to control access to any resource at all",
  "Can only contain guest accounts invited from outside",
  "Exists only on-premises and never syncs to the cloud"],0,
 "Microsoft 365 groups are collaboration-oriented: they bundle a mailbox, calendar and site alongside membership. Security groups handle access only."],

"7-q1":["Azure Private Link provides:",
 ["A private endpoint reaching a service over the virtual network",
  "A public IP address assigned to every resource in the group",
  "A site-to-site VPN connecting only to on-premises networks",
  "Transparent encryption for data written to managed disks"],0,
 "Private Link keeps traffic to PaaS services on the Microsoft backbone through a private endpoint, so the service is never reachable from the public internet."],

"7-p4":["Microsoft Defender for Cloud's Secure Score is calculated from:",
 ["Compliance with the Microsoft cloud security benchmark",
  "The number of licensed users active in the tenant",
  "Monthly Azure consumption measured against budget",
  "Network bandwidth used across all virtual networks"],0,
 "Secure Score measures how many recommended controls are satisfied against the default benchmark. It is a posture measure, not a usage or cost measure."],

"7-s2":["Azure Firewall Manager is used to:",
 ["Apply central policy across multiple firewalls and networks",
  "Scan endpoints for malware across servers and workstations",
  "Issue and renew TLS certificates for internal websites",
  "Assign Microsoft 365 licences to users and groups"],0,
 "It provides central policy and route management for many firewall instances at once, rather than configuring each one separately."],

"7-s15":["The cloud security explorer lets you:",
 ["Query your environment's posture to find risky configuration",
  "Deploy new virtual machines from a curated template set",
  "Reset passwords for users flagged as high risk",
  "Configure mailbox rules across the organization"],0,
 "It is a graph-based query tool over your cloud security data, so you can ask questions like which internet-facing machines hold sensitive data."],

"8-p1":["What are Sentinel analytics rules responsible for?",
 ["Detecting patterns in ingested data and raising incidents",
  "Displaying dashboards built from saved workspace queries",
  "Moving older logs into long-term archive storage tiers",
  "Assigning workspace licences to individual analysts"],0,
 "Analytics rules are the detection logic that turns raw ingested data into alerts and incidents. Connecting data detects nothing on its own."],

"8-p5":["Defender Vulnerability Management primarily provides:",
 ["Discovery and ranking of software weaknesses on devices",
  "Automated quarantine of email flagged as malicious",
  "Real-time blocking of traffic to known-bad addresses",
  "Encryption of data at rest across storage accounts"],0,
 "It surfaces and ranks vulnerabilities and misconfigurations before they are exploited. That is a different job from detecting an attack in progress."],

"8-q1":["A Fusion analytics rule in Sentinel is designed to:",
 ["Correlate weak signals into one multistage attack detection",
  "Run a single keyword search across the whole workspace",
  "Render dashboards from workspace data on a schedule",
  "Move older log data into cheaper archive storage"],0,
 "Fusion uses machine learning to link low-fidelity signals that mean little alone into one high-confidence multistage incident."],

"8-q2":["An automation rule in Sentinel differs from a playbook because the automation rule:",
 ["Triggers incident-level actions and can call playbooks",
  "Is written entirely in KQL rather than in a designer",
  "Only produces dashboards from incident data",
  "Replaces the data connectors feeding the workspace"],0,
 "Automation rules handle incident-level logic — assigning, tagging, closing — and can invoke a playbook when something more complex is needed."],

"8-s0":["A watchlist in Microsoft Sentinel is used to:",
 ["Hold a reference list of assets or IPs that enriches detections",
  "Store archived log data outside the searchable retention window",
  "Replace analytics rules in low-volume workspaces",
  "Track licence assignments for workspace users"],0,
 "Watchlists bring external context — high-value assets, known-good IPs, terminated staff — into queries and rules."],

"8-s3":["The Content hub in Microsoft Sentinel provides:",
 ["Packaged solutions bundling connectors, rules and workbooks",
  "Long-term raw log storage at a reduced per-gigabyte cost",
  "Billing and consumption reporting for the workspace",
  "User and group provisioning for the workspace"],0,
 "Solutions bundle ready-made content for a specific product, so you are not authoring every detection from scratch."],

"8-s19":["Threat analytics in Defender XDR provides:",
 ["Expert reports on active campaigns and your exposure to them",
  "An inventory of applications installed across devices",
  "Monthly consumption and invoice detail for the tenant",
  "Security awareness training videos for end users"],0,
 "Threat analytics ties Microsoft's threat research to your own tenant, so a campaign report also tells you whether you are affected."],

/* ---- Security+ ---- */

"16-p3":["Client-based software vulnerabilities differ from agentless ones because client-based:",
 ["Needs installed software on each endpoint, maintained separately",
  "Never requires updates once the initial deployment finishes",
  "Cannot be exploited because it runs with limited privileges",
  "Applies only to servers and never to user workstations"],0,
 "An installed agent is itself software with its own vulnerabilities and its own patch cycle, so it expands the attack surface it was meant to reduce."],

"17-p2":["A deauthentication attack against Wi-Fi is used to:",
 ["Force clients off a network to capture handshakes or reconnects",
  "Encrypt wireless traffic between the client and access point",
  "Extend the usable range of an access point outdoors",
  "Assign static addresses to clients instead of using DHCP"],0,
 "Deauth frames are unauthenticated management frames, so anyone can forge them. Knocking a client off yields a handshake capture or a reconnect to a rogue AP."],

"22-q1":["Data sovereignty becomes a compliance issue when:",
 ["Data sits in a country whose laws conflict with your obligations",
  "Data is encrypted at rest using a provider-managed key",
  "Backups run nightly instead of continuously through the day",
  "Data is compressed before being written to storage"],0,
 "Storage location determines which legal jurisdiction applies, and a government's right of access does not disappear because the data is encrypted."],

"22-q2":["Geographic restrictions (geofencing) on data access are used to:",
 ["Limit where data can be accessed from, for sovereignty rules",
  "Increase available bandwidth to remote branch offices",
  "Reduce the time nightly backup jobs take to complete",
  "Lower hardware costs by consolidating storage arrays"],0,
 "Restricting access by region enforces legal and policy boundaries on who can reach the data and from where."],

"22-q5":["A simulation test of a disaster recovery plan is distinguished from a tabletop because it:",
 ["Exercises the systems rather than only discussing them",
  "Involves fewer people from fewer parts of the business",
  "Requires no advance planning or scheduling to run",
  "Must be carried out annually to satisfy auditors"],0,
 "Simulations put the plan into practice against real systems. Tabletops stay in discussion, which is cheaper and finds different problems."],

"23-p4":["A bug bounty program is:",
 ["Paying external researchers for responsibly reported flaws",
  "An internal schedule for applying vendor patches monthly",
  "A contract form used when engaging a penetration tester",
  "A compliance certification issued after an annual audit"],0,
 "Bug bounties crowdsource vulnerability discovery under defined scope and rules, with payment tied to a valid, responsibly disclosed report."],

"24-p1":["Security Content Automation Protocol (SCAP) is used to:",
 ["Automate configuration and vulnerability checking in one format",
  "Encrypt network traffic between hosts using a shared standard",
  "Provision and deprovision user accounts across systems",
  "Manage physical badge access to secured facilities"],0,
 "SCAP standardizes how security configuration and vulnerability data are expressed, so different tools can check the same baseline the same way."],

"24-p6":["Group Policy in Windows environments is used to:",
 ["Centrally enforce configuration across domain-joined systems",
  "Encrypt individual files on a per-user, per-folder basis",
  "Capture and inspect network packets on the local segment",
  "Issue and renew TLS certificates for internal services"],0,
 "Group Policy pushes standardized security and configuration settings across the domain, so a setting is applied once rather than machine by machine."],

"24-q8":["XDR extends EDR by:",
 ["Correlating detection across endpoint, email and cloud",
  "Focusing analysis on a single endpoint in greater depth",
  "Removing the need to retain logs for investigation",
  "Performing signature-based antivirus scanning only"],0,
 "The X means extended: the same detection and response discipline, but correlated across signal sources rather than confined to the endpoint."],

"25-p2":["SAML is primarily used for:",
 ["Exchanging authentication assertions between two trusted parties",
  "Encrypting stored data so a stolen disk reveals nothing",
  "Scanning hosts for known vulnerabilities before patching",
  "Distributing configuration to network switches and routers"],0,
 "SAML is the XML-based standard behind most enterprise web SSO: the identity provider asserts who the user is, and the service provider trusts it."],

"25-q8":["Password vaulting in PAM provides:",
 ["Checkout, rotation and auditing of privileged credentials",
  "Encryption of user documents stored on shared drives",
  "Automatic patching of software on privileged hosts",
  "Segmentation of the network around privileged systems"],0,
 "Vaults control and record the use of shared privileged credentials, so a root password is checked out, used, rotated and attributable."],

"25-q9":["Federation is most appropriate when:",
 ["Users from one organization need access to another's resources",
  "All users already exist in a single shared directory",
  "Password hashes must be shared between the organizations",
  "Only locally created accounts will ever need access"],0,
 "Federation lets each organization keep its own identity system and trust the other's authentication, avoiding duplicate accounts and shared credentials."],

"26-p3":["Eradication in incident response means:",
 ["Removing malware and attacker persistence from the environment",
  "Disconnecting the affected host from the network immediately",
  "Restoring normal operations and validating the systems",
  "Documenting what happened and what should change next time"],0,
 "Eradication removes the attacker's presence. Containment came before it, recovery comes after, and lessons learned closes the incident."],

"26-q4":["Why is the recovery phase distinct from eradication?",
 ["Recovery restores operations and validates systems afterwards",
  "Recovery is the phase that removes the malware itself",
  "Recovery is carried out before containment has begun",
  "They are the same phase under two different names"],0,
 "Eradication removes the threat; recovery brings services back and verifies they are clean and functioning. Skipping the validation is how reinfection happens."],

"26-q8":["Metadata is valuable as a data source because it can reveal:",
 ["When a file was created or changed, and by whom",
  "The encryption key used to protect the file contents",
  "The password of the user who last opened the file",
  "The price the vendor charged for the software"],0,
 "Metadata supports timelines and attribution during an investigation without anyone needing to read the contents of the file."],

"28-p7":["An onboarding procedure from a security perspective should include:",
 ["Provisioning least-privilege access and acceptable use sign-off",
  "Issuing a laptop and a building access badge on day one",
  "A guided tour of the building and introductions to the team",
  "Payroll enrolment and benefits selection paperwork"],0,
 "Security onboarding covers appropriate access and a signed acknowledgment of policy. The other three happen too, but none of them is the security control."],

"30-q7":["Active reconnaissance carries more risk to the tester because it:",
 ["Touches target systems and can be detected or disruptive",
  "Relies only on public records and published information",
  "Requires no written authorization from the target",
  "Takes place only after exploitation has succeeded"],0,
 "Direct interaction leaves traces in logs and can affect availability, which is exactly why written authorization has to exist before it starts."]

};
