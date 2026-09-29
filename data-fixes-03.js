// Question corrections, batch 03 — answer-length cueing, blatant tier. window.QFIXES3
//
// Applied after QFIXES and QFIXES2. Same rule as batch 02: trim the answer to its claim,
// rewrite every distractor as something a half-prepared student might actually choose,
// keep all four options within roughly 15 characters, correct never the longest.
//
// This batch clears the remaining questions where the gap exceeded 40 characters —
// the tier where a student notices without trying.
//
// Note 7-p2: the correct answer was 102 characters against an 18-character distractor.
// That is the Azure Firewall item the instructor already flagged on accuracy grounds.
// The accuracy fix landed earlier; this is the construction fix. Both were needed.
window.QFIXES3 = {

/* ---- SC-900 ---- */

"2-p5":["Why is 'identity is the new perimeter' a common phrase in cloud security?",
 ["Users and resources are distributed, so identity gates access",
  "Firewalls no longer exist in cloud environments at all",
  "Cloud networks are inherently secure by default",
  "Physical security has become entirely irrelevant"],0,
 "With remote work and cloud resources there is no network edge left to defend, so the identity presented at each request is what actually controls access."],

"2-p6":["What does a directory service primarily provide?",
 ["A central store of users, groups, devices and attributes",
  "Encryption of data at rest across organizational storage",
  "Automated response to detected security incidents",
  "Physical access control to buildings and server rooms"],0,
 "A directory stores and organizes identity objects and their attributes. Everything else in identity management reads from it."],

"4-q2":["Authentication strength in Conditional Access allows an administrator to:",
 ["Require a specific method class such as phishing-resistant MFA",
  "Set the minimum password length and complexity for the tenant",
  "Extend the session lifetime before reauthentication",
  "Exempt administrators from multifactor requirements"],0,
 "Authentication strengths specify which method combinations satisfy a policy, so you can demand FIDO2 or certificate-based auth rather than any second factor."],

"7-p2":["Azure Firewall differs from a network security group mainly because it:",
 ["FQDN and application rules, threat intel, and central policy",
  "Is the only one of the two that tracks connection state",
  "Runs as an agent installed on each virtual machine",
  "Cannot write traffic logs to a Log Analytics workspace"],0,
 "Both are stateful, so connection tracking was never the difference. Azure Firewall adds FQDN and application awareness, Microsoft threat intelligence, and one policy applied across many networks."],

"7-q3":["Key Vault soft delete and purge protection exist to:",
 ["Prevent permanent loss of keys from accidental deletion",
  "Speed up secret retrieval by caching values locally",
  "Reduce the licensing cost of the vault tier in use",
  "Automatically rotate certificates before they expire"],0,
 "Soft delete provides a recovery window and purge protection blocks premature permanent deletion, so a deleted key is recoverable rather than gone."],

"7-s13":["Defender for SQL provides:",
 ["Vulnerability assessment and threat detection for databases",
  "Automated index tuning and query plan optimization",
  "Free storage allocation for database backup files",
  "Identity governance for database administrator roles"],0,
 "It surfaces database misconfigurations and detects anomalous activity against the workload. Performance tuning is a different product entirely."],

"8-s1":["A near-real-time (NRT) analytics rule in Sentinel is designed for:",
 ["Detections that run about once a minute for urgent threats",
  "Monthly compliance reporting across the whole workspace",
  "Archiving older logs into long-term cheap storage",
  "Visualizing workspace data in interactive dashboards"],0,
 "NRT rules trade some query flexibility for very low detection latency, which matters when minutes decide the outcome."],

"8-s10":["Zero-hour auto purge (ZAP) in Defender for Office 365:",
 ["Removes delivered messages once they are found malicious",
  "Blocks malicious mail before it reaches the mailbox",
  "Encrypts outbound mail sent to external recipients",
  "Archives old mailbox content to cheaper storage"],0,
 "ZAP reaches into the mailbox after delivery when a verdict changes, which is what catches a campaign that was clean at the moment it arrived."],

"8-s11":["Safe Attachments dynamic delivery:",
 ["Delivers the body immediately while the attachment is scanned",
  "Blocks every attachment permanently regardless of verdict",
  "Deletes attachments from the mailbox after twenty-four hours",
  "Applies only to mail sent between internal recipients"],0,
 "Dynamic delivery avoids making users wait for detonation to finish — they read the message now and the attachment appears once it clears."],

"8-s16":["Conditional Access app control in Defender for Cloud Apps enables:",
 ["Real-time session control over what users do in a SaaS app",
  "Blocking users at sign-in before the session begins",
  "Full disk encryption on managed corporate endpoints",
  "Issuing client certificates for device authentication"],0,
 "It proxies the session, so actions like download, copy or print can be governed while the user is working rather than only at the front door."],

"8-q11":["User and entity behavior analytics (UEBA) in Sentinel helps by:",
 ["Building behavioral baselines and flagging deviations",
  "Blocking malicious network traffic inline at the gateway",
  "Encrypting mailbox content at rest in Exchange Online",
  "Creating access packages for entitlement management"],0,
 "UEBA learns what normal looks like for each user and host, then surfaces what departs from it — which catches activity no signature describes."],

/* ---- Security+ ---- */

"13-p4":["'Adaptive identity' in the Zero Trust control plane means:",
 ["Decisions weigh context like behavior, location and risk",
  "Users can change their own identity attributes freely",
  "Identities are rotated on a daily schedule",
  "Each user is issued several distinct usernames"],0,
 "Adaptive identity factors contextual signals into the decision, so the same credential is not automatically sufficient from a new country on an unknown device."],

"14-p5":["A hardware security module (HSM) is typically used to:",
 ["Generate and store many keys in a tamper-resistant appliance",
  "Encrypt a single laptop's hard drive at the file level",
  "Provide brokered RDP access to servers without a public IP",
  "Filter outbound web traffic against a category list"],0,
 "HSMs are dedicated appliances for enterprise key management, built so that extracting a key physically destroys it."],

"14-q5":["Which best justifies certificate pinning for a mobile app?",
 ["The app trusts only the expected certificate, resisting MITM",
  "Certificates last considerably longer before renewal",
  "TLS is no longer required for the connection",
  "The TLS handshake completes significantly faster"],0,
 "Pinning defends against a fraudulent or compromised certificate authority, which ordinary TLS validation would accept without complaint."],

"17-p3":["Cross-site request forgery (CSRF) works by:",
 ["Tricking an authenticated browser into sending a request",
  "Injecting SQL statements through a login form field",
  "Overflowing a memory buffer to execute arbitrary code",
  "Capturing packets on the wire to read session tokens"],0,
 "CSRF abuses the victim's existing authenticated session — the browser attaches the cookie automatically, so the server sees a legitimate request."],

"18-p1":["Why is an application allow list generally stronger than a deny list?",
 ["Only approved software runs, so unknown threats are blocked",
  "It needs less ongoing maintenance than a deny list",
  "It permits a wider range of applications by default",
  "It requires no administrative effort once configured"],0,
 "A deny list stops only what you already know is bad. An allow list blocks everything unapproved, including malware nobody has seen yet."],

"18-p6":["Endpoint detection and response (EDR) adds what over traditional antivirus?",
 ["Behavioral detection, investigation and response on the host",
  "Signature-based scanning against a larger malware database",
  "Monitoring of physical access to server rooms and racks",
  "Issuing device certificates for network authentication"],0,
 "EDR watches behaviour and gives an analyst the history and the controls to investigate and contain, rather than only matching known signatures."],

"22-p5":["Capacity planning for resilience should consider:",
 ["People, technology and facilities to sustain operations",
  "Server hardware capacity measured against peak demand",
  "Software licence counts across the affected systems",
  "Network bandwidth available at each site location"],0,
 "Resilience needs enough staff, systems and space. A plan with the hardware but nobody trained to run it fails in exactly the same way."],

"22-p7":["Why should backups be encrypted?",
 ["Backup media can be lost or stolen and hold complete copies",
  "Encryption measurably speeds up the restoration process",
  "Compression requires the data to be encrypted first",
  "Encrypted backups consume less storage than plain ones"],0,
 "An unencrypted backup is a full copy of your data sitting outside your primary controls, often on media that travels."],

"23-p0":["A wireless site survey and heat map are used to:",
 ["Plan access point placement and find coverage gaps",
  "Configure passwords for the wireless network",
  "Encrypt wireless traffic between client and AP",
  "Assign VLANs to each wireless service set"],0,
 "Surveys map real signal coverage, which informs placement and also reveals transmitters nobody authorized."],

"23-p1":["WPA3 improves on WPA2 primarily through:",
 ["Simultaneous Authentication of Equals replaces the handshake",
  "Encryption is removed in favour of open authentication",
  "WEP is reintroduced for backward compatibility",
  "Passwords are eliminated from the connection process"],0,
 "SAE resists the offline dictionary attack that made a captured WPA2 four-way handshake crackable at leisure."],

"24-p5":["DNS filtering protects users by:",
 ["Blocking resolution of known malicious domains",
  "Encrypting all DNS queries leaving the network",
  "Caching frequent lookups to speed up browsing",
  "Load balancing traffic across several resolvers"],0,
 "If the name never resolves, the connection is never made — which stops the attack before any traffic reaches the malicious host."],

"24-q2":["Quarantine as an alert response action means:",
 ["Isolating the affected file, message or host",
  "Deleting the logs that recorded the alert",
  "Notifying the software vendor of the detection",
  "Rebuilding the network segment from scratch"],0,
 "Quarantine contains the item so it can do no further harm while the investigation proceeds. It preserves the thing rather than destroying it."],

"29-q4":["A documented risk exception typically means:",
 ["Leadership formally accepts a risk that policy does not allow",
  "The risk has been eliminated by a compensating control",
  "The risk has been transferred to an insurance provider",
  "The policy itself is deleted from the register"],0,
 "An exception records an accepted deviation with a justification, an owner and a review date. The risk is still there and someone has signed for it."]

};
