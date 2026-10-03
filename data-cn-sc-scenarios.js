// CertificationNation Real-World Practice — SC-900, batch 1.
// Workplace scenarios linked to concepts (data-cn-sc.js) and comparisons (data-cn-compare.js).
// o[0] is the correct answer; the app shuffles display order. no[i] explains why o[i+1] doesn't fit.
// Drafted with AI assistance, then checked against Microsoft Learn by an independent automated
// review pass (2026-09-30). Not yet reviewed by a human subject-matter expert.
(function(){
const scenarios=[
 {
  "id": "rw.sc.cia-did.identify",
  "concept": "sc.cia",
  "concepts": [
   "sc.cia"
  ],
  "cmp": null,
  "day": 1,
  "dom": "Concepts",
  "obj": "1.1",
  "type": "identify",
  "diff": 1,
  "setting": "manufacturer",
  "s": "A 60-person parts manufacturer was hit by ransomware that locked its order database. Investigators confirmed no records were copied out and none were altered. Still, staff couldn't open any orders for two days until backups were restored.",
  "q": "Which part of the CIA triad did this incident mainly affect?",
  "o": [
   "Availability",
   "Confidentiality",
   "Integrity",
   "Non-repudiation"
  ],
  "why": "The data stayed private and unchanged, but authorized staff couldn't reach it when needed, which is an availability failure.",
  "no": [
   "Confidentiality was intact because no records left the company.",
   "Integrity was intact because no records were changed.",
   "Non-repudiation is about proving who did an action, which isn't the issue here."
  ],
  "take": "Data that is private and unchanged but unreachable is an availability problem."
 },
 {
  "id": "rw.sc.cia-did.next",
  "concept": "sc.defense-in-depth",
  "concepts": [
   "sc.defense-in-depth",
   "sc.cia"
  ],
  "cmp": null,
  "day": 1,
  "dom": "Concepts",
  "obj": "1.1",
  "type": "next",
  "diff": 2,
  "setting": "clinic",
  "s": "A small clinic has a well-configured perimeter firewall, locked server room and segmented office network. Staff sign in to cloud email and records with a password only. The owner wants to add one missing layer first, since recent attacks on similar clinics started with stolen passwords.",
  "q": "Which layer should the clinic strengthen first?",
  "o": [
   "Add MFA at the identity and access layer",
   "Add a second firewall at the perimeter layer",
   "Upgrade door locks at the physical layer",
   "Split the network further at the network layer"
  ],
  "why": "Perimeter, physical and network layers are already in place, and the stated attack path is stolen passwords, which the identity and access layer addresses.",
  "no": [
   "The perimeter layer is already covered and a firewall doesn't stop a valid stolen password.",
   "The physical layer is already locked and isn't the stated attack path.",
   "The network is already segmented and stolen credentials would still work."
  ],
  "take": "Defense in depth means filling the missing layer that matches the real attack path."
 },
 {
  "id": "rw.sc.cia-did.constraints",
  "concept": "sc.cia",
  "concepts": [
   "sc.cia",
   "sc.defense-in-depth"
  ],
  "cmp": null,
  "day": 1,
  "dom": "Concepts",
  "obj": "1.1",
  "type": "constraints",
  "diff": 2,
  "setting": "city-government",
  "s": "A city's building-permit portal only shows information that is already public record. The council's single new requirement is that the portal stays reachable if one datacenter goes offline. The IT budget covers one improvement this year.",
  "q": "Which improvement best fits the council's requirement?",
  "o": [
   "Run a copy of the portal in a second region",
   "Encrypt the portal's database at rest",
   "Require MFA for all portal administrators",
   "Hash every permit record the portal stores"
  ],
  "why": "The requirement is availability, and a second region keeps the portal online if one datacenter fails.",
  "no": [
   "Encryption protects confidentiality, which matters little for public data.",
   "MFA protects admin accounts but does nothing for a datacenter outage.",
   "Hashing helps detect changes (integrity), not keep the portal online."
  ],
  "take": "Match the control to the CIA goal the requirement actually names."
 },
 {
  "id": "rw.sc.shared-resp.identify",
  "concept": "sc.shared-resp",
  "concepts": [
   "sc.shared-resp"
  ],
  "cmp": null,
  "day": 1,
  "dom": "Concepts",
  "obj": "1.1",
  "type": "identify",
  "diff": 1,
  "setting": "startup",
  "s": "A startup moved its web app from its own Azure virtual machines to Azure App Service. The developers no longer schedule operating system patch windows. They still create and remove user accounts and decide who can reach the app's data.",
  "q": "Which concept explains why OS patching left their task list but account management didn't?",
  "o": [
   "The shared responsibility model",
   "The Zero Trust model",
   "The defense-in-depth strategy",
   "The principle of least privilege"
  ],
  "why": "In PaaS the provider manages the operating system, while the customer always keeps accounts, identities and data.",
  "no": [
   "Zero Trust is about verifying every request, not who patches the OS.",
   "Defense in depth is about layering controls, not dividing duties with a provider.",
   "Least privilege limits access rights; it doesn't assign patching work."
  ],
  "take": "Moving from IaaS to PaaS shifts OS patching to the provider; accounts and data stay yours."
 },
 {
  "id": "rw.sc.shared-resp.next",
  "concept": "sc.shared-resp",
  "concepts": [
   "sc.shared-resp",
   "sc.authn"
  ],
  "cmp": null,
  "day": 1,
  "dom": "Concepts",
  "obj": "1.1",
  "type": "next",
  "diff": 2,
  "setting": "nonprofit",
  "s": "A nonprofit uses Microsoft 365 for email and files. A volunteer's account, protected only by a reused password, was taken over and used to send phishing. IT has already reset the password and signed out all sessions. The director's first instinct is to ask Microsoft to fix the problem.",
  "q": "Under the shared responsibility model, what should the nonprofit do first?",
  "o": [
   "Require MFA on its own user accounts",
   "Ask Microsoft to patch the mail servers",
   "Request a datacenter audit from Microsoft",
   "Move mail to its own on-premises server"
  ],
  "why": "Accounts and identities are always the customer's responsibility, and the account takeover came from a weak password the nonprofit controls.",
  "no": [
   "Microsoft already patches SaaS servers, and patching wouldn't stop a stolen password.",
   "An audit report of Microsoft's datacenter doesn't address the nonprofit's weak account.",
   "Moving on-premises adds more responsibility and still leaves the weak password."
  ],
  "take": "In every cloud model, securing your own accounts and identities is your job."
 },
 {
  "id": "rw.sc.shared-resp.constraints",
  "concept": "sc.shared-resp",
  "concepts": [
   "sc.shared-resp"
  ],
  "cmp": null,
  "day": 1,
  "dom": "Concepts",
  "obj": "1.1",
  "type": "constraints",
  "diff": 2,
  "setting": "msp",
  "s": "An MSP's client needs full control of the guest operating system so it can install a custom monitoring agent and choose its own patch schedule. The client also wants to stop buying and maintaining physical servers.",
  "q": "Which cloud service model fits both requirements?",
  "o": [
   "IaaS, such as Azure virtual machines",
   "PaaS, such as Azure App Service",
   "SaaS, such as Microsoft 365 apps",
   "On-premises servers in a colocation rack"
  ],
  "why": "IaaS removes physical hardware from the client's duties while leaving the guest OS under the client's control.",
  "no": [
   "In PaaS the provider manages the OS, so the client can't control it or its patching.",
   "SaaS gives the client no OS access at all.",
   "Colocated on-premises servers still mean buying and maintaining hardware."
  ],
  "take": "Need OS control without owning hardware? That's IaaS."
 },
 {
  "id": "rw.sc.zero-trust.identify",
  "concept": "sc.zero-trust",
  "concepts": [
   "sc.zero-trust"
  ],
  "cmp": null,
  "day": 1,
  "dom": "Concepts",
  "obj": "1.1",
  "type": "identify",
  "diff": 1,
  "setting": "law-firm",
  "s": "A law firm no longer lets a laptop open client files just because it is plugged in at the office. Each request now checks who the user is, whether the device is healthy, and how risky the sign-in looks. Staff only reach folders for the cases they work on.",
  "q": "Which security approach is the firm adopting?",
  "o": [
   "Zero Trust",
   "Perimeter-based security",
   "Shared responsibility",
   "Security defaults"
  ],
  "why": "Checking every request explicitly, granting least privilege, and not trusting network location are Zero Trust principles.",
  "no": [
   "Perimeter-based security is what the firm is moving away from by not trusting the office network.",
   "Shared responsibility divides duties with a cloud provider, not how requests are checked.",
   "Security defaults are a baseline Entra setting, not the overall access strategy described."
  ],
  "take": "Zero Trust: verify every request, grant least privilege, and assume breach."
 },
 {
  "id": "rw.sc.zero-trust.next",
  "concept": "sc.zero-trust",
  "concepts": [
   "sc.zero-trust",
   "sc.authz"
  ],
  "cmp": null,
  "day": 1,
  "dom": "Concepts",
  "obj": "1.1",
  "type": "next",
  "diff": 2,
  "setting": "hospital",
  "s": "A hospital's Zero Trust project already requires MFA and a compliant device for every staff sign-in. A review found that any single staff account can open every shared drive in the building. The security lead wants to shrink what one compromised account could reach.",
  "q": "What should the hospital do next?",
  "o": [
   "Limit each role to only the drives it needs",
   "Add a second MFA prompt at every sign-in",
   "Allow drive access only from hospital Wi-Fi",
   "Place the drives behind another firewall"
  ],
  "why": "Explicit verification is already in place; the gap is excess access, which least-privilege access addresses.",
  "no": [
   "More MFA prompts strengthen verification, which is already done, but don't reduce what an account can reach.",
   "Trusting a network location goes against Zero Trust and doesn't limit a stolen account.",
   "A firewall doesn't restrict what a signed-in account is allowed to open."
  ],
  "take": "Once verification is solid, cut each account's reach with least-privilege access."
 },
 {
  "id": "rw.sc.zero-trust.constraints",
  "concept": "sc.zero-trust",
  "concepts": [
   "sc.zero-trust",
   "sc.identity-perimeter"
  ],
  "cmp": "cmp.secdefaults-ca",
  "day": 1,
  "dom": "Concepts",
  "obj": "1.1",
  "type": "constraints",
  "diff": 3,
  "setting": "logistics",
  "s": "A logistics company's drivers use tablets on the road, never inside an office network. Leadership wants access to the dispatch app decided at each sign-in using the user, the device's health and the location. The company already has Microsoft Entra ID P1 licenses.",
  "q": "Which option fits this requirement?",
  "o": [
   "Conditional Access in Microsoft Entra ID",
   "Security defaults for the Microsoft Entra tenant",
   "A VPN back to the head office network",
   "Network security group rules in Azure"
  ],
  "why": "Conditional Access evaluates signals like user, device and location per sign-in, and the company's P1 licenses cover it.",
  "no": [
   "Security defaults apply one fixed baseline and can't use device or location conditions.",
   "A VPN trusts the network connection, not per-sign-in signals.",
   "NSGs filter network traffic by IP and port, not by user or device health."
  ],
  "take": "Per-sign-in decisions on user, device and location call for Conditional Access (Entra ID P1)."
 },
 {
  "id": "rw.sc.crypto.identify",
  "concept": "sc.hashing",
  "concepts": [
   "sc.hashing",
   "sc.encryption"
  ],
  "cmp": "cmp.hash-encrypt",
  "day": 2,
  "dom": "Concepts",
  "obj": "1.1",
  "type": "identify",
  "diff": 1,
  "setting": "university",
  "s": "A university's software download page lists a long, fixed-length string beside each installer. Students run a tool on the file they downloaded and compare its output to that string. If the two match, they know the file wasn't changed.",
  "q": "What is the university using to protect these downloads?",
  "o": [
   "A hash of each installer file",
   "Symmetric encryption of each file",
   "A TLS certificate on the web server",
   "Asymmetric encryption of each file"
  ],
  "why": "A hash is a one-way, fixed-length value that changes if the file changes, so matching values prove integrity.",
  "no": [
   "Symmetric encryption hides content; students would need a key to open the file.",
   "TLS protects the connection in transit but doesn't give a value to compare afterward.",
   "Asymmetric encryption also hides content rather than producing a value to compare."
  ],
  "take": "Matching hash values prove a file hasn't been changed."
 },
 {
  "id": "rw.sc.crypto.next",
  "concept": "sc.encryption",
  "concepts": [
   "sc.encryption",
   "sc.hashing"
  ],
  "cmp": "cmp.hash-encrypt",
  "day": 2,
  "dom": "Concepts",
  "obj": "1.1",
  "type": "next",
  "diff": 2,
  "setting": "retail",
  "s": "A retail chain copies customer database backups nightly to a storage location over a TLS connection. An audit found the backup files sit unencrypted once stored. The IT team must still be able to restore from them.",
  "q": "What should the team do first to close the gap the audit found?",
  "o": [
   "Encrypt the stored backup files at rest",
   "Hash the backup files so they can't be read",
   "Renew the TLS certificate on the copy link",
   "Move the backups to a faster storage tier"
  ],
  "why": "The gap is data at rest, and encryption protects it while still letting the key holders restore the data.",
  "no": [
   "A hash can't be reversed, so the backups could never be restored.",
   "TLS already protects data in transit, which isn't the gap.",
   "A faster tier changes performance, not confidentiality."
  ],
  "take": "TLS covers data in transit; stored data needs encryption at rest."
 },
 {
  "id": "rw.sc.crypto.constraints",
  "concept": "sc.encryption",
  "concepts": [
   "sc.encryption"
  ],
  "cmp": "cmp.symmetric-asymmetric",
  "day": 2,
  "dom": "Concepts",
  "obj": "1.1",
  "type": "constraints",
  "diff": 3,
  "setting": "school",
  "s": "A school district wants parents to send sensitive enrollment forms securely to the district office. Parents have never shared any secret with the office. The district refuses to hand out one shared key to thousands of families.",
  "q": "Which approach fits these constraints?",
  "o": [
   "Asymmetric encryption with the district's public key",
   "Symmetric encryption with one key for all parents",
   "Hashing each form before parents upload it",
   "Base64 encoding each form before upload"
  ],
  "why": "Anyone can use the public key to encrypt, and only the district's private key can decrypt, so no shared secret is handed out.",
  "no": [
   "A single shared key is exactly what the district refuses to distribute.",
   "Hashing is one-way, so the office couldn't read the forms.",
   "Base64 is an encoding anyone can reverse, not encryption."
  ],
  "take": "Asymmetric encryption lets strangers send you secrets without sharing a key first."
 },
 {
  "id": "rw.sc.grc.identify",
  "concept": "sc.grc",
  "concepts": [
   "sc.grc"
  ],
  "cmp": null,
  "day": 2,
  "dom": "Concepts",
  "obj": "1.1",
  "type": "identify",
  "diff": 2,
  "setting": "credit-union",
  "s": "A credit union's board adopts a rule that every system must have a named owner and a yearly access review. Separately, a national banking regulation requires member records to be kept for seven years. The IT manager is asked which part of GRC the board's rule falls under.",
  "q": "Which GRC element is the board's internal rule?",
  "o": [
   "Governance",
   "Compliance",
   "Risk management",
   "Data sovereignty"
  ],
  "why": "Governance is the set of rules, policies and processes an organization sets for itself.",
  "no": [
   "Compliance is meeting outside requirements, like the banking regulation, not internal rules.",
   "Risk management identifies and responds to threats; the rule assigns ownership and process.",
   "Data sovereignty is about which country's laws govern data, not internal ownership rules."
  ],
  "take": "Rules you set yourself are governance; rules imposed from outside are compliance."
 },
 {
  "id": "rw.sc.grc.next",
  "concept": "sc.grc",
  "concepts": [
   "sc.grc"
  ],
  "cmp": null,
  "day": 2,
  "dom": "Concepts",
  "obj": "1.1",
  "type": "next",
  "diff": 2,
  "setting": "cloud-team",
  "s": "A cloud team is about to move customer records into Azure. Legal says a national law requires this data to be stored inside the country. The team hasn't picked where the data will live yet.",
  "q": "What should the team confirm first?",
  "o": [
   "Which region will store the data",
   "Which cipher will encrypt the data",
   "Which Secure Score the tenant has",
   "Which apps will get single sign-on"
  ],
  "why": "The law is a data residency requirement, so the storage location must be settled before anything is deployed.",
  "no": [
   "Encryption strength doesn't change where the data physically resides.",
   "Secure Score measures security posture, not where data is stored.",
   "Single sign-on affects sign-in experience, not data location."
  ],
  "take": "Data residency rules make the storage region the first decision."
 },
 {
  "id": "rw.sc.grc.constraints",
  "concept": "sc.grc",
  "concepts": [
   "sc.grc"
  ],
  "cmp": "cmp.threat-vuln-risk",
  "day": 2,
  "dom": "Concepts",
  "obj": "1.1",
  "type": "constraints",
  "diff": 3,
  "setting": "remote-office",
  "s": "A regional remote office runs an old kiosk app that can no longer be patched. Replacing it isn't in this year's budget, and the office needs it daily. Management wants to keep it running while reducing the damage if it's compromised.",
  "q": "Which risk response fits management's constraints?",
  "o": [
   "Mitigate by isolating the kiosk on its own network",
   "Avoid by retiring the kiosk app immediately",
   "Accept the risk and leave the setup unchanged",
   "Transfer the risk by buying cyber insurance only"
  ],
  "why": "Mitigation keeps the app in use while reducing impact, which matches both the budget and the goal.",
  "no": [
   "Retiring the app breaks the need to use it daily this year.",
   "Accepting without change ignores the goal of reducing damage.",
   "Insurance shifts the cost but doesn't reduce damage from a compromise."
  ],
  "take": "Mitigate when you must keep a risky system but want to shrink its impact."
 },
 {
  "id": "rw.sc.authn-authz.identify",
  "concept": "sc.authz",
  "concepts": [
   "sc.authz",
   "sc.authn"
  ],
  "cmp": "cmp.authn-authz",
  "day": 2,
  "dom": "Concepts",
  "obj": "1.2",
  "type": "identify",
  "diff": 1,
  "setting": "university",
  "s": "A university researcher signs in with her password and approves a prompt on her phone. The sign-in succeeds. When she opens the finance department's grants folder, she gets an access-denied message.",
  "q": "Which process blocked her from the grants folder?",
  "o": [
   "Authorization",
   "Authentication",
   "Multifactor authentication",
   "Federation"
  ],
  "why": "She was already verified; the folder check decides what a verified identity may access, which is authorization.",
  "no": [
   "Authentication succeeded, since she signed in.",
   "MFA was part of her successful sign-in, not the folder check.",
   "Federation is a trust between identity providers, not a permission check."
  ],
  "take": "Signed in but denied access means authorization said no."
 },
 {
  "id": "rw.sc.authn-authz.next",
  "concept": "sc.identity-perimeter",
  "concepts": [
   "sc.identity-perimeter",
   "sc.authn"
  ],
  "cmp": null,
  "day": 2,
  "dom": "Concepts",
  "obj": "1.2",
  "type": "next",
  "diff": 2,
  "setting": "startup",
  "s": "A 25-person startup has no office; staff work from home and cafés and use only cloud apps. The founder plans to spend the first security budget on a hardware firewall. An advisor points out there is no company network for it to guard.",
  "q": "Where should the startup focus its first security effort?",
  "o": [
   "Strong sign-in and access control for each user",
   "A hardware firewall at the founder's home",
   "A site-to-site VPN between staff homes",
   "Intrusion detection on each staff home network"
  ],
  "why": "With no network edge, identity becomes the main control point for every access request.",
  "no": [
   "A firewall at one home protects one network, not staff everywhere.",
   "Linking home networks adds a perimeter that doesn't exist today and doesn't verify users.",
   "Watching home networks doesn't verify who signs in to cloud apps, and the company doesn't control those networks."
  ],
  "take": "When everyone works from anywhere, identity is the security perimeter."
 },
 {
  "id": "rw.sc.authn-authz.constraints",
  "concept": "sc.authn",
  "concepts": [
   "sc.authn"
  ],
  "cmp": null,
  "day": 2,
  "dom": "Concepts",
  "obj": "1.2",
  "type": "constraints",
  "diff": 2,
  "setting": "retail",
  "s": "A retail chain's store managers sign in on shared register tablets. Policy requires two different types of authentication factor, and personal phones aren't allowed on the sales floor. Every manager carries a company badge with a smart chip.",
  "q": "Which sign-in combination meets the policy?",
  "o": [
   "A PIN plus the company smart badge",
   "A password plus a security question",
   "A password plus a personal phone app",
   "Two separate passwords typed in turn"
  ],
  "why": "A PIN is something you know and the badge is something you have, giving two factor types without personal phones.",
  "no": [
   "A password and security question are both something you know.",
   "Personal phones are banned on the sales floor.",
   "Two passwords are the same factor type twice."
  ],
  "take": "Multifactor means different factor types, not more of the same one."
 },
 {
  "id": "rw.sc.idp-federation.identify",
  "concept": "sc.federation",
  "concepts": [
   "sc.federation",
   "sc.idp"
  ],
  "cmp": "cmp.sso-federation",
  "day": 2,
  "dom": "Concepts",
  "obj": "1.2",
  "type": "identify",
  "diff": 1,
  "setting": "university",
  "s": "Two universities each run their own identity system. Researchers from one school sign in to the other school's lab portal using their home university account. Neither school stores the other's passwords.",
  "q": "What is this arrangement called?",
  "o": [
   "Federation",
   "Password hash synchronization",
   "Directory replication",
   "Self-service password reset"
  ],
  "why": "Federation is a trust between separate identity providers, so users sign in with home credentials and no passwords are shared.",
  "no": [
   "Password hash sync copies hashes into one directory, which neither school does.",
   "Replication copies directory data, but the schools keep separate systems.",
   "SSPR lets users reset their own passwords; it doesn't link two organizations."
  ],
  "take": "Separate identity providers trusting each other is federation."
 },
 {
  "id": "rw.sc.idp-federation.next",
  "concept": "sc.directory",
  "concepts": [
   "sc.directory",
   "sc.idp",
   "sc.entra-id"
  ],
  "cmp": null,
  "day": 2,
  "dom": "Concepts",
  "obj": "1.2",
  "type": "next",
  "diff": 2,
  "setting": "manufacturer",
  "s": "A manufacturer runs Active Directory Domain Services on-premises for 400 staff. It now wants those same people to sign in to Microsoft 365 with their existing usernames. None of these users exist in Microsoft Entra ID yet.",
  "q": "What should the manufacturer do first?",
  "o": [
   "Sync AD DS users to Entra ID with Entra Connect",
   "Recreate all 400 accounts by hand in Entra ID",
   "Invite each employee to Entra ID as a guest user",
   "Deploy Microsoft Entra Domain Services"
  ],
  "why": "Entra ID is a separate cloud identity service, so the on-premises identities must first be synchronized to it.",
  "no": [
   "Manual accounts wouldn't stay linked to the existing on-premises identities.",
   "Employees are members of the organization, not outside guests.",
   "Domain Services is a managed domain fed from Entra ID; it doesn't bring on-prem users into Entra ID for Microsoft 365."
  ],
  "take": "Bring on-premises AD DS users into Entra ID by synchronizing them."
 },
 {
  "id": "rw.sc.idp-federation.constraints",
  "concept": "sc.idp",
  "concepts": [
   "sc.idp"
  ],
  "cmp": "cmp.sso-federation",
  "day": 2,
  "dom": "Concepts",
  "obj": "1.2",
  "type": "constraints",
  "diff": 2,
  "setting": "law-firm",
  "s": "A law firm's staff use 12 cloud apps, each with its own password, and many reuse passwords. The partners want staff to sign in once to reach every app, with no app storing employee passwords. The firm already uses Microsoft Entra ID for Microsoft 365.",
  "q": "Which approach meets the partners' requirements?",
  "o": [
   "Use Entra ID as the single sign-on provider",
   "Give staff a password manager for all 12 apps",
   "Turn on self-service password reset per app",
   "Enforce longer passwords inside every app"
  ],
  "why": "Entra ID acts as the identity provider and issues tokens the apps trust, so users sign in once and apps hold no passwords.",
  "no": [
   "A password manager helps with reuse, but each app still stores its own password and sign-in.",
   "SSPR helps reset passwords but still leaves 12 separate sign-ins.",
   "Longer passwords still mean 12 sign-ins and 12 stored passwords."
  ],
  "take": "An identity provider with SSO means one sign-in and no passwords stored in each app."
 },
 {
  "id": "rw.sc.entra-identities.identify",
  "concept": "sc.workload-identity",
  "concepts": [
   "sc.workload-identity",
   "sc.entra-id"
  ],
  "cmp": "cmp.managed-identity-sp",
  "day": 3,
  "dom": "Entra",
  "obj": "2.1",
  "type": "identify",
  "diff": 2,
  "setting": "cloud-team",
  "s": "A cloud team's Azure function needs to read secrets from Azure Key Vault. They turn on a setting on the function that gives it its own identity in Microsoft Entra ID. No credential is stored in the code, and the identity is deleted when the function is deleted.",
  "q": "What did the team turn on?",
  "o": [
   "A system-assigned managed identity",
   "A user-assigned managed identity",
   "An app registration with a client secret",
   "A dedicated member user account"
  ],
  "why": "A system-assigned managed identity is tied to one resource, has credentials managed by Azure, and is removed with that resource.",
  "no": [
   "A user-assigned identity is a separate resource that outlives any one function.",
   "A client secret is a credential the team would have to store and rotate.",
   "A user account is for people and would need a password managed by the team."
  ],
  "take": "Identity tied to one resource and deleted with it: system-assigned managed identity."
 },
 {
  "id": "rw.sc.entra-identities.next",
  "concept": "sc.identity-types",
  "concepts": [
   "sc.identity-types",
   "sc.entra-id"
  ],
  "cmp": null,
  "day": 3,
  "dom": "Entra",
  "obj": "2.1",
  "type": "next",
  "diff": 2,
  "setting": "nonprofit",
  "s": "A nonprofit is teaming up with a partner charity whose staff already have work accounts at their own organization. The partner's staff need access to one shared project site. None of them exist in the nonprofit's tenant yet, and the nonprofit doesn't want to manage their passwords.",
  "q": "What should the nonprofit do first?",
  "o": [
   "Invite the partner staff as guest users",
   "Create member accounts for partner staff",
   "Add the partner staff to a security group",
   "Give partner staff one shared login"
  ],
  "why": "Guests sign in with their home accounts, so the nonprofit doesn't manage their passwords, and they must exist in the tenant before being granted access.",
  "no": [
   "Member accounts would need passwords the nonprofit manages.",
   "A group can't hold users that don't exist in the tenant yet.",
   "A shared login removes individual accountability and still needs a managed password."
  ],
  "take": "Outside partners with their own accounts come in as guest users."
 },
 {
  "id": "rw.sc.entra-identities.constraints",
  "concept": "sc.identity-types",
  "concepts": [
   "sc.identity-types"
  ],
  "cmp": null,
  "day": 3,
  "dom": "Entra",
  "obj": "2.1",
  "type": "constraints",
  "diff": 2,
  "setting": "msp",
  "s": "An MSP is setting up a client's new project team in Microsoft Entra ID. The team needs a shared mailbox, a shared calendar and shared file storage. The client wants one object to manage membership for all of it.",
  "q": "Which object fits the requirement?",
  "o": [
   "A Microsoft 365 group",
   "A security group",
   "A mail-enabled distribution list",
   "An Entra administrative unit"
  ],
  "why": "A Microsoft 365 group bundles membership with a shared mailbox, calendar and files.",
  "no": [
   "A security group grants access but has no shared mailbox or calendar.",
   "A distribution list sends mail to members but doesn't provide shared files or a calendar.",
   "An administrative unit scopes admin permissions, not team collaboration."
  ],
  "take": "Need shared mailbox, calendar and files for a team? Use a Microsoft 365 group."
 },
 {
  "id": "rw.sc.hybrid-external.identify",
  "concept": "sc.external-identities",
  "concepts": [
   "sc.external-identities"
  ],
  "cmp": null,
  "day": 3,
  "dom": "Entra",
  "obj": "2.1",
  "type": "identify",
  "diff": 1,
  "setting": "law-firm",
  "s": "A 30-person law firm is working a case with an outside forensic accounting firm. The accountants need a shared Teams team and SharePoint library, and they sign in with their own company accounts. The law firm never creates or resets passwords for them.",
  "q": "Which Microsoft Entra capability is the law firm using?",
  "o": [
   "B2B collaboration with guest users",
   "Microsoft Entra Connect Sync",
   "An external tenant for customer sign-up",
   "Password hash synchronization"
  ],
  "why": "B2B collaboration adds partners as guests in the workforce tenant while they keep signing in with their own organization's credentials.",
  "no": [
   "Connect Sync copies the firm's own on-premises AD accounts to Entra ID; it doesn't bring in partners.",
   "An external tenant is for consumer or customer-facing apps, not partner collaboration in Teams and SharePoint.",
   "Password hash sync is a hybrid sign-in method for the firm's own synced users."
  ],
  "take": "Partners using their own work accounts to reach your resources points to B2B collaboration."
 },
 {
  "id": "rw.sc.hybrid-external.next",
  "concept": "sc.hybrid-identity",
  "concepts": [
   "sc.hybrid-identity"
  ],
  "cmp": null,
  "day": 3,
  "dom": "Entra",
  "obj": "2.1",
  "type": "next",
  "diff": 2,
  "setting": "city-government",
  "s": "A city government runs on-premises Active Directory for 600 staff and is moving email to Microsoft 365. Leadership wants staff to keep using their existing domain username and password in the cloud. None of those accounts exist in Microsoft Entra ID yet.",
  "q": "What should IT set up first?",
  "o": [
   "Synchronize AD accounts to Entra ID with Entra Connect",
   "Invite every employee into the tenant as a B2B guest",
   "Create new cloud-only accounts with fresh passwords",
   "Turn on Conditional Access for Microsoft 365 apps"
  ],
  "why": "Staff keep one identity only if their AD accounts are synchronized to Entra ID, and nothing else can target them until they exist there.",
  "no": [
   "Guest accounts are for people outside the organization, not the city's own staff.",
   "New cloud-only accounts break the goal of reusing existing domain credentials.",
   "Conditional Access policies need users in Entra ID to apply to, so it can't come first."
  ],
  "take": "Existing AD users in Microsoft 365 start with Entra Connect synchronization, a hybrid identity."
 },
 {
  "id": "rw.sc.hybrid-external.constraints",
  "concept": "sc.hybrid-identity",
  "concepts": [
   "sc.hybrid-identity"
  ],
  "cmp": null,
  "day": 3,
  "dom": "Entra",
  "obj": "2.1",
  "type": "constraints",
  "diff": 3,
  "setting": "manufacturer",
  "s": "A manufacturer is connecting its on-premises AD to Microsoft Entra ID with Entra Connect. Its single plant datacenter loses power several times a year, and staff must still be able to sign in to Microsoft 365 during those outages. There's no budget for additional on-premises servers.",
  "q": "Which sign-in method fits these requirements?",
  "o": [
   "Password hash synchronization",
   "Pass-through authentication",
   "Federation with AD FS servers",
   "Microsoft Entra hybrid join"
  ],
  "why": "With password hash sync, Entra ID validates passwords in the cloud, so sign-in keeps working when on-premises servers are down, with no extra servers.",
  "no": [
   "Pass-through authentication checks passwords against on-prem domain controllers, so sign-in fails during an outage.",
   "Federation needs AD FS servers on-premises, which adds servers and fails when the datacenter is down.",
   "Hybrid join gives devices an identity; it isn't a way to validate user passwords."
  ],
  "take": "Cloud sign-in that must survive on-prem outages points to password hash synchronization."
 },
 {
  "id": "rw.sc.devices.identify",
  "concept": "sc.device-identity",
  "concepts": [
   "sc.device-identity"
  ],
  "cmp": "cmp.device-join",
  "day": 3,
  "dom": "Entra",
  "obj": "2.1",
  "type": "identify",
  "diff": 1,
  "setting": "university",
  "s": "A university hands new Windows 11 laptops to research staff straight from the box. During setup, staff sign in with their university Microsoft Entra ID account. The university has no on-premises Active Directory domain.",
  "q": "Which device identity state do these laptops end up in?",
  "o": [
   "Microsoft Entra joined",
   "Microsoft Entra registered",
   "Microsoft Entra hybrid joined",
   "Joined to on-premises AD only"
  ],
  "why": "Organization-owned Windows devices that sign in with an Entra account and no on-prem domain are Microsoft Entra joined.",
  "no": [
   "Registered is the typical state for personal or mobile devices that add a work account.",
   "Hybrid join requires the device to be joined to an on-premises AD domain, which the university doesn't have.",
   "There's no on-premises domain for the laptops to join."
  ],
  "take": "Org-owned Windows device, Entra sign-in, no on-prem domain: Microsoft Entra joined."
 },
 {
  "id": "rw.sc.devices.next",
  "concept": "sc.device-identity",
  "concepts": [
   "sc.device-identity",
   "sc.conditional-access"
  ],
  "cmp": "cmp.device-join",
  "day": 3,
  "dom": "Entra",
  "obj": "2.1",
  "type": "next",
  "diff": 2,
  "setting": "clinic",
  "s": "A clinic will let staff read work email on their personal phones. IT plans a Conditional Access policy that checks each phone's device identity before allowing access. Right now, none of the staff phones appear in Microsoft Entra ID.",
  "q": "What needs to happen first?",
  "o": [
   "Staff register their phones with Entra ID",
   "IT Entra joins each personal phone to the tenant",
   "IT hybrid joins the phones to on-premises AD",
   "IT turns on security defaults for the tenant"
  ],
  "why": "A device policy can only evaluate devices Entra ID knows about, and personal phones typically get an identity through Entra registration.",
  "no": [
   "Entra join is meant for organization-owned Windows devices, not personal phones.",
   "Hybrid join applies to Windows devices joined to an on-premises domain, not phones.",
   "Security defaults gives no device identity and can't run alongside Conditional Access."
  ],
  "take": "Personal phones get a device identity through Microsoft Entra registration."
 },
 {
  "id": "rw.sc.devices.constraints",
  "concept": "sc.device-identity",
  "concepts": [
   "sc.device-identity",
   "sc.hybrid-identity"
  ],
  "cmp": "cmp.device-join",
  "day": 3,
  "dom": "Entra",
  "obj": "2.1",
  "type": "constraints",
  "diff": 3,
  "setting": "school",
  "s": "A school district has 2,000 Windows desktops joined to its on-premises AD domain. Older apps depend on Group Policy and domain sign-in and can't be moved this year. The district also wants these desktops to have an identity in Microsoft Entra ID so cloud access policies can check them.",
  "q": "Which option meets both requirements?",
  "o": [
   "Microsoft Entra hybrid join",
   "Microsoft Entra join, leaving the domain",
   "Microsoft Entra registration by each user",
   "Microsoft Entra Domain Services"
  ],
  "why": "Hybrid join keeps the desktops in the on-premises domain while also giving them a device identity in Entra ID.",
  "no": [
   "Leaving the domain breaks the Group Policy and domain sign-in the old apps still need.",
   "Registration is meant for personal or mobile devices and isn't how domain-joined desktops are brought in.",
   "Domain Services is a managed domain in Azure; it doesn't give these desktops an Entra ID device identity."
  ],
  "take": "Must stay on the on-prem domain but also be known to Entra ID: hybrid join."
 },
 {
  "id": "rw.sc.mfa-methods.identify",
  "concept": "sc.mfa",
  "concepts": [
   "sc.mfa"
  ],
  "cmp": null,
  "day": 4,
  "dom": "Entra",
  "obj": "2.2",
  "type": "identify",
  "diff": 1,
  "setting": "credit-union",
  "s": "At a credit union, a teller types her password into the banking portal. The portal then asks for the six-digit code shown on a hardware token clipped to her keyring.",
  "q": "Which factor types does this sign-in combine?",
  "o": [
   "Something you know and something you have",
   "Something you have and something you are",
   "Something you know, used twice over",
   "Something you are and something you know"
  ],
  "why": "The password is something she knows, and the hardware token is something she has, so this is two different factor types.",
  "no": [
   "Nothing here is biometric, so something you are isn't involved.",
   "The token code comes from a physical device, so it isn't a second knowledge factor.",
   "No fingerprint or face check happens in this sign-in."
  ],
  "take": "Password plus a code from a device you carry is know plus have: real MFA."
 },
 {
  "id": "rw.sc.mfa-methods.next",
  "concept": "sc.mfa",
  "concepts": [
   "sc.mfa",
   "sc.auth-methods"
  ],
  "cmp": null,
  "day": 4,
  "dom": "Entra",
  "obj": "2.2",
  "type": "next",
  "diff": 2,
  "setting": "logistics",
  "s": "A logistics company connected its new dispatch app to Microsoft Entra ID and wrote a policy that will require MFA for all drivers. The policy isn't switched on yet. Most drivers have never set up any second authentication method.",
  "q": "What should happen before the MFA requirement is enforced?",
  "o": [
   "Drivers register an authentication method",
   "Enforce the MFA policy for every driver",
   "Enable password writeback for the drivers",
   "Turn on smart lockout for driver accounts"
  ],
  "why": "A user can only complete MFA with a method they've registered, so registration needs to come before enforcement.",
  "no": [
   "Enforcing first makes drivers register at their next sign-in, so anyone who already has a driver's password could register their own second factor.",
   "Password writeback is about SSPR updating on-premises AD, not second factors.",
   "Smart lockout slows password-guessing attacks; it doesn't give users a second factor."
  ],
  "take": "Get users registered for MFA methods before you enforce an MFA requirement."
 },
 {
  "id": "rw.sc.mfa-methods.constraints",
  "concept": "sc.auth-methods",
  "concepts": [
   "sc.auth-methods",
   "sc.mfa"
  ],
  "cmp": null,
  "day": 4,
  "dom": "Entra",
  "obj": "2.2",
  "type": "constraints",
  "diff": 2,
  "setting": "hospital",
  "s": "A hospital already requires MFA using text-message codes, but a phishing site recently tricked several nurses into typing their codes in. Nurses share workstations on the ward and aren't allowed to carry phones there. The new method must be phishing-resistant.",
  "q": "Which authentication method fits these requirements?",
  "o": [
   "FIDO2 security keys",
   "Authenticator push notifications",
   "Voice call verification",
   "SMS one-time codes"
  ],
  "why": "FIDO2 security keys are phishing-resistant, need no phone, and move with the nurse between shared workstations.",
  "no": [
   "Push approvals need a phone and aren't phishing-resistant.",
   "Voice calls need a phone and aren't a phishing-resistant method.",
   "Text-message codes are the method that was just phished."
  ],
  "take": "Phishing-resistant, no phone, shared devices: think FIDO2 security keys."
 },
 {
  "id": "rw.sc.password-baseline.identify",
  "concept": "sc.password-protection",
  "concepts": [
   "sc.password-protection"
  ],
  "cmp": null,
  "day": 4,
  "dom": "Entra",
  "obj": "2.2",
  "type": "identify",
  "diff": 1,
  "setting": "retail",
  "s": "Staff at a retail chain called Harbor Goods are changing passwords, and \"HarborGoods1!\" keeps getting rejected even though it meets the length and complexity rules. Last month IT added the store's brand name to a list in Microsoft Entra ID.",
  "q": "Which feature is rejecting these passwords?",
  "o": [
   "The custom banned password list",
   "Microsoft Entra smart lockout",
   "Security defaults",
   "The SSPR registration policy"
  ],
  "why": "Microsoft Entra Password Protection checks new passwords against a custom banned list of terms the organization adds, such as its brand name.",
  "no": [
   "Smart lockout blocks repeated failed sign-ins; it doesn't judge new passwords.",
   "Security defaults enforce MFA and block legacy authentication, not password content.",
   "The SSPR registration policy asks users to register reset methods; it doesn't evaluate passwords."
  ],
  "take": "Passwords rejected for containing your company's name point to the custom banned password list."
 },
 {
  "id": "rw.sc.password-baseline.next",
  "concept": "sc.sspr",
  "concepts": [
   "sc.sspr",
   "sc.hybrid-identity"
  ],
  "cmp": null,
  "day": 4,
  "dom": "Entra",
  "obj": "2.2",
  "type": "next",
  "diff": 2,
  "setting": "msp",
  "s": "An MSP supports a client whose staff accounts are synced from on-premises AD, and whose passwords are managed on-premises. SSPR was just turned on, and users have registered their methods. When they try to reset, they're told to contact their administrator.",
  "q": "What should the MSP check first?",
  "o": [
   "Whether password writeback is enabled",
   "Whether security defaults are turned on",
   "Whether users registered enough methods",
   "Whether smart lockout thresholds are too low"
  ],
  "why": "For synced users whose passwords live on-premises, SSPR needs password writeback to send the new password back to AD.",
  "no": [
   "Security defaults don't control whether SSPR can write passwords to AD.",
   "The situation says users already registered methods, so that's not the gap.",
   "Smart lockout affects failed sign-ins, not whether a reset can reach AD."
  ],
  "take": "SSPR for on-prem-managed passwords depends on password writeback."
 },
 {
  "id": "rw.sc.password-baseline.constraints",
  "concept": "sc.security-defaults",
  "concepts": [
   "sc.security-defaults",
   "sc.conditional-access"
  ],
  "cmp": "cmp.secdefaults-ca",
  "day": 4,
  "dom": "Entra",
  "obj": "2.2",
  "type": "constraints",
  "diff": 2,
  "setting": "remote-office",
  "s": "A 20-person design studio works mostly from home offices and uses Microsoft 365 with the free Microsoft Entra ID tier. It has no budget for extra licenses. It wants everyone registered for MFA and old email protocols blocked, and needs no exceptions or custom rules.",
  "q": "Which option fits these requirements?",
  "o": [
   "Turn on security defaults",
   "Build Conditional Access policies",
   "Turn on Microsoft Entra ID Protection",
   "Set up Privileged Identity Management"
  ],
  "why": "Security defaults are free and give a tenant-wide baseline: MFA registration and prompts, plus blocking legacy authentication.",
  "no": [
   "Conditional Access needs Microsoft Entra ID P1, which the studio can't buy.",
   "ID Protection risk detections and risk-based policies need Microsoft Entra ID P2.",
   "PIM manages admin role activation and needs P2 or ID Governance licensing."
  ],
  "take": "Free licensing plus a basic, no-exceptions MFA baseline means security defaults."
 },
 {
  "id": "rw.sc.conditional-access.identify",
  "concept": "sc.conditional-access",
  "concepts": [
   "sc.conditional-access"
  ],
  "cmp": null,
  "day": 5,
  "dom": "Entra",
  "obj": "2.3",
  "type": "identify",
  "diff": 1,
  "setting": "university",
  "s": "A professor signs in to the grading portal from campus and goes straight in. From a coffee shop, she's asked for MFA first. Sign-ins from countries where the university doesn't operate are blocked outright.",
  "q": "Which Microsoft Entra capability is making these decisions?",
  "o": [
   "Conditional Access",
   "Security defaults",
   "Microsoft Entra ID Protection",
   "Privileged Identity Management"
  ],
  "why": "Conditional Access uses signals such as location to grant, require MFA, or block at sign-in.",
  "no": [
   "Security defaults are one fixed baseline with no location-based rules.",
   "ID Protection supplies risk signals; it doesn't set location-based allow or block rules.",
   "PIM controls activation of admin roles, not everyday app sign-in."
  ],
  "take": "Different outcomes by location or device at sign-in point to Conditional Access."
 },
 {
  "id": "rw.sc.conditional-access.next",
  "concept": "sc.conditional-access",
  "concepts": [
   "sc.conditional-access",
   "sc.device-identity"
  ],
  "cmp": null,
  "day": 5,
  "dom": "Entra",
  "obj": "2.3",
  "type": "next",
  "diff": 2,
  "setting": "cloud-team",
  "s": "A cloud team has written a Conditional Access policy that will require a compliant device for all Microsoft 365 access. Some staff devices may not be enrolled yet. The team's goal is to see who would be affected before anyone is actually blocked.",
  "q": "What should the team do first?",
  "o": [
   "Run the policy in report-only mode",
   "Enable the policy for every user now",
   "Switch to security defaults instead",
   "Start an access review of device owners"
  ],
  "why": "Report-only mode logs what the policy would have done without enforcing it, which shows impact safely.",
  "no": [
   "Enforcing it now risks blocking the unenrolled staff the team is worried about.",
   "Security defaults can't require compliant devices and can't run alongside Conditional Access.",
   "Access reviews confirm group or app membership; they don't preview a policy's effect."
  ],
  "take": "Test a new Conditional Access policy in report-only mode before enforcing it."
 },
 {
  "id": "rw.sc.conditional-access.constraints",
  "concept": "sc.conditional-access",
  "concepts": [
   "sc.conditional-access",
   "sc.security-defaults",
   "sc.id-protection"
  ],
  "cmp": "cmp.secdefaults-ca",
  "day": 5,
  "dom": "Entra",
  "obj": "2.3",
  "type": "constraints",
  "diff": 3,
  "setting": "credit-union",
  "s": "A credit union has Microsoft Entra ID P1 licenses, not P2, and security defaults are currently on. It wants loan officers to use MFA only when outside the branch network. It also wants to block sign-ins from countries it doesn't serve.",
  "q": "Which approach fits the licensing and the requirements?",
  "o": [
   "Disable security defaults and use location-based Conditional Access",
   "Keep security defaults and add named locations as exceptions",
   "Add a sign-in risk condition to a Conditional Access policy",
   "Require PIM role activation before loan officers sign in"
  ],
  "why": "Location rules need Conditional Access, which P1 includes, and security defaults must be off before custom policies apply.",
  "no": [
   "Security defaults can't be customized with location exceptions.",
   "Sign-in risk conditions need Entra ID P2, and they react to risk, not to the branch network.",
   "PIM governs privileged roles, not everyday sign-in rules for staff."
  ],
  "take": "Custom location rules need Conditional Access (P1), with security defaults turned off."
 },
 {
  "id": "rw.sc.roles-pim.identify",
  "concept": "sc.pim",
  "concepts": [
   "sc.pim",
   "sc.entra-rbac"
  ],
  "cmp": "cmp.pim-reviews-entitlement",
  "day": 5,
  "dom": "Entra",
  "obj": "2.4",
  "type": "identify",
  "diff": 1,
  "setting": "logistics",
  "s": "At a logistics company, an IT staffer holds no admin rights day to day. When a mailbox issue comes up, she requests the Exchange Administrator role, types a reason, completes MFA, and gets the role for four hours once a manager approves.",
  "q": "Which capability is this?",
  "o": [
   "Privileged Identity Management",
   "Entitlement management access packages",
   "An access review",
   "A Conditional Access policy"
  ],
  "why": "PIM makes users eligible for a role and lets them activate it just in time, with justification, MFA, approval and a time limit.",
  "no": [
   "Entitlement management bundles groups, apps and sites into access packages, not time-boxed admin role activation.",
   "An access review re-confirms existing access on a schedule; it doesn't grant a role on request.",
   "Conditional Access decides sign-in conditions; it doesn't assign admin roles."
  ],
  "take": "Request a role, justify it, get it for a few hours: that's PIM just-in-time access."
 },
 {
  "id": "rw.sc.roles-pim.next",
  "concept": "sc.entra-rbac",
  "concepts": [
   "sc.entra-rbac"
  ],
  "cmp": null,
  "day": 5,
  "dom": "Entra",
  "obj": "2.3",
  "type": "next",
  "diff": 2,
  "setting": "school",
  "s": "A school has two IT technicians who are both Global Administrators. One of them only ever resets passwords for teachers and students. An audit has just flagged the school for having too many Global Administrators.",
  "q": "What should the school do about this technician's access?",
  "o": [
   "Swap Global Administrator for Password Administrator",
   "Swap Global Administrator for Security Administrator",
   "Keep Global Administrator and require MFA to use it",
   "Swap Global Administrator for Azure Contributor"
  ],
  "why": "Least privilege means the narrowest built-in role that covers the task, and Password Administrator can reset non-admin users' passwords.",
  "no": [
   "Security Administrator manages security settings but isn't the role for resetting user passwords.",
   "MFA protects the sign-in but leaves the excess privilege the audit flagged.",
   "Azure Contributor is an Azure RBAC role for resources like VMs, not for managing Entra users."
  ],
  "take": "Give the narrowest built-in Entra role that covers the job, not Global Administrator."
 },
 {
  "id": "rw.sc.roles-pim.constraints",
  "concept": "sc.pim",
  "concepts": [
   "sc.pim",
   "sc.entra-rbac",
   "sc.access-reviews"
  ],
  "cmp": "cmp.pim-reviews-entitlement",
  "day": 5,
  "dom": "Entra",
  "obj": "2.4",
  "type": "constraints",
  "diff": 3,
  "setting": "msp",
  "s": "An MSP's client has Microsoft Entra ID P2. Its auditor requires that nobody hold Global Administrator permanently and that every use of the role is approved, time-limited, and logged. The client's admins only need the role a few times a month.",
  "q": "Which option meets the auditor's requirements?",
  "o": [
   "Make admins eligible for the role in PIM",
   "Assign the role permanently and require MFA",
   "Review the role's members every quarter",
   "Give admins a custom role with fewer rights"
  ],
  "why": "Eligible assignments in PIM remove standing access and require approved, time-limited, audited activation, and P2 covers PIM.",
  "no": [
   "Permanent assignment is exactly the standing access the auditor forbids.",
   "Quarterly reviews re-check membership but leave the role held permanently in between.",
   "A custom role narrows permissions but is still standing access with no approval or time limit."
  ],
  "take": "No standing admin rights, with approval and time limits, points to PIM eligible assignments."
 },
 {
  "id": "rw.sc.governance.identify",
  "concept": "sc.access-reviews",
  "concepts": [
   "sc.access-reviews",
   "sc.id-governance"
  ],
  "cmp": "cmp.pim-reviews-entitlement",
  "day": 5,
  "dom": "Entra",
  "obj": "2.4",
  "type": "identify",
  "diff": 1,
  "setting": "clinic",
  "s": "Every quarter, managers at a clinic get an email listing everyone in the billing app's access group. They confirm who still needs access. Anyone who isn't confirmed is removed when the cycle closes.",
  "q": "Which Microsoft Entra capability is this?",
  "o": [
   "Access reviews",
   "Privileged Identity Management",
   "Entitlement management",
   "Conditional Access"
  ],
  "why": "Access reviews ask reviewers on a schedule to confirm or remove people's access to groups, apps or roles.",
  "no": [
   "PIM handles just-in-time activation of privileged roles, not quarterly checks of app users.",
   "Entitlement management handles requesting bundles of access, not recurring re-confirmation.",
   "Conditional Access decides sign-in conditions; it doesn't ask managers to confirm membership."
  ],
  "take": "Recurring \"does this person still need access?\" checks point to access reviews."
 },
 {
  "id": "rw.sc.governance.next",
  "concept": "sc.id-governance",
  "concepts": [
   "sc.id-governance",
   "sc.external-identities"
  ],
  "cmp": "cmp.pim-reviews-entitlement",
  "day": 5,
  "dom": "Entra",
  "obj": "2.4",
  "type": "next",
  "diff": 2,
  "setting": "manufacturer",
  "s": "A manufacturer is starting a 90-day project with a partner company. It has Microsoft Entra ID Governance and has already set up the partner as a connected organization. Partner staff should request a Teams team, a SharePoint site and an app themselves, with manager approval, and lose access when the project ends.",
  "q": "What should the manufacturer set up next?",
  "o": [
   "An access package with approval and a 90-day expiry",
   "Individual guest invitations sent by IT to each user",
   "PIM eligible assignments for each partner user",
   "A quarterly access review of the partner's guests"
  ],
  "why": "Entitlement management access packages bundle resources, let connected-organization users request them with approval, and expire access automatically.",
  "no": [
   "Manual invitations don't give self-service requests, approval, or automatic expiry.",
   "PIM is for privileged roles, not a project bundle of Teams, SharePoint and apps.",
   "A review re-checks access later but doesn't give partners a way to request it."
  ],
  "take": "Self-service request, approval and expiry for a bundle of access means an access package."
 },
 {
  "id": "rw.sc.governance.constraints",
  "concept": "sc.access-reviews",
  "concepts": [
   "sc.access-reviews",
   "sc.external-identities",
   "sc.id-governance"
  ],
  "cmp": "cmp.pim-reviews-entitlement",
  "day": 5,
  "dom": "Entra",
  "obj": "2.4",
  "type": "constraints",
  "diff": 3,
  "setting": "nonprofit",
  "s": "A research nonprofit's project groups include many guest collaborators. The rule is that each group's owner, not IT, confirms every quarter whether each guest still needs access. Guests who aren't confirmed must lose access, and the nonprofit has Microsoft Entra ID Governance licenses.",
  "q": "Which option meets this rule?",
  "o": [
   "A recurring access review with group owners as reviewers",
   "PIM for Groups with time-bound guest membership",
   "A Conditional Access policy requiring MFA for guests",
   "An Entra Connect filter that excludes guest accounts"
  ],
  "why": "Access reviews can run quarterly, use group owners as reviewers, and remove guests who aren't confirmed.",
  "no": [
   "Time-bound membership expires access but doesn't have owners confirm each guest's need.",
   "MFA strengthens guest sign-in but never questions whether they still need access.",
   "Entra Connect syncs on-premises AD accounts; guests aren't managed through it."
  ],
  "take": "Owners re-confirming guest access on a schedule points to recurring access reviews."
 },
 {
  "id": "rw.sc.id-protection.identify",
  "concept": "sc.id-protection",
  "concepts": [
   "sc.id-protection"
  ],
  "cmp": "cmp.mdi-idprotection",
  "day": 5,
  "dom": "Entra",
  "obj": "2.4",
  "type": "identify",
  "diff": 2,
  "setting": "startup",
  "s": "A startup's sales rep signs in to Microsoft 365 from home. Minutes later, a sign-in to the same account comes from an anonymous IP address. Microsoft Entra flags that second sign-in as high risk.",
  "q": "Which service detected and scored this risk?",
  "o": [
   "Microsoft Entra ID Protection",
   "Microsoft Defender for Identity",
   "Microsoft Purview Insider Risk Management",
   "Microsoft Entra Password Protection"
  ],
  "why": "ID Protection detects cloud sign-in risks such as anonymous IP addresses and assigns risk levels.",
  "no": [
   "Defender for Identity watches on-premises AD domain controllers, not cloud sign-in risk.",
   "Insider Risk Management looks at risky user activity with data, not sign-in anomalies.",
   "Password Protection blocks weak passwords at change time; it doesn't score sign-ins."
  ],
  "take": "Risky cloud sign-ins, like anonymous IPs, point to Microsoft Entra ID Protection."
 },
 {
  "id": "rw.sc.id-protection.next",
  "concept": "sc.id-protection",
  "concepts": [
   "sc.id-protection",
   "sc.mfa",
   "sc.conditional-access"
  ],
  "cmp": null,
  "day": 5,
  "dom": "Entra",
  "obj": "2.4",
  "type": "next",
  "diff": 2,
  "setting": "hospital",
  "s": "A hospital just bought Microsoft Entra ID P2 and plans a risk-based policy that requires MFA when a sign-in looks risky. About half the staff have never registered an MFA method. The goal is for risky sign-ins to be challenged, not locked out.",
  "q": "What should the hospital do first?",
  "o": [
   "Get all staff registered for MFA",
   "Enable a policy that blocks risky sign-ins",
   "Deploy Defender for Identity sensors",
   "Turn on security defaults alongside it"
  ],
  "why": "Users can only answer an MFA challenge with a registered method, so registration must come first to avoid lockouts.",
  "no": [
   "Blocking is the lockout outcome the hospital wants to avoid.",
   "Defender for Identity covers on-premises AD, not cloud sign-in risk policies.",
   "Security defaults can't run alongside Conditional Access, which risk-based policies use."
  ],
  "take": "Register users for MFA before risk-based policies start challenging them."
 },
 {
  "id": "rw.sc.id-protection.constraints",
  "concept": "sc.id-protection",
  "concepts": [
   "sc.id-protection",
   "sc.hybrid-identity"
  ],
  "cmp": "cmp.mdi-idprotection",
  "day": 5,
  "dom": "Entra",
  "obj": "2.4",
  "type": "constraints",
  "diff": 3,
  "setting": "law-firm",
  "s": "A law firm has Microsoft Entra ID P2 and signs users in through federation with AD FS. It wants ID Protection to flag accounts whose credentials show up in public leaks. Right now no password data is synchronized to Entra ID.",
  "q": "What must the firm add for leaked-credential detection to work?",
  "o": [
   "Password hash synchronization",
   "Pass-through authentication agents",
   "Defender for Identity sensors",
   "A custom banned password list"
  ],
  "why": "Leaked-credential detection compares hashes, so password hash sync must be enabled even when sign-in uses federation.",
  "no": [
   "Pass-through agents validate sign-ins on-premises and sync no password hashes.",
   "Defender for Identity watches domain controllers; it doesn't supply leaked-credential checks.",
   "A banned list blocks weak new passwords; it doesn't detect leaked ones."
  ],
  "take": "Leaked-credential detection needs password hash sync, even alongside federation or PTA."
 },
 {
  "id": "rw.sc.edge-network.identify",
  "concept": "sc.ddos",
  "concepts": [
   "sc.ddos",
   "sc.waf",
   "sc.nsg",
   "sc.azure-firewall"
  ],
  "cmp": null,
  "day": 7,
  "dom": "Security solutions",
  "obj": "3.1",
  "type": "identify",
  "diff": 1,
  "setting": "city-government",
  "s": "A city's online permit portal in Azure slows to a crawl every evening. Logs show millions of TCP SYN packets from thousands of addresses worldwide, with no login attempts or injected code. The goal seems to be keeping residents from reaching the site.",
  "q": "Which Azure service is built to defend against this kind of attack?",
  "o": [
   "Azure DDoS Protection",
   "Azure Web Application Firewall",
   "A network security group",
   "Azure Firewall"
  ],
  "why": "A flood of traffic from many sources aimed at availability is a DDoS attack, which DDoS Protection mitigates at network layers 3 and 4.",
  "no": [
   "WAF inspects web requests for exploits like SQL injection, and this traffic carries no exploit payload.",
   "An NSG filters by IP and port, and blocking thousands of changing sources by hand can't keep up.",
   "Azure Firewall controls which traffic flows are allowed but isn't the service built to absorb large floods."
  ],
  "take": "Traffic floods from many sources aimed at knocking a service offline point to Azure DDoS Protection."
 },
 {
  "id": "rw.sc.edge-network.next",
  "concept": "sc.waf",
  "concepts": [
   "sc.waf",
   "sc.ddos",
   "sc.nsg",
   "sc.key-vault"
  ],
  "cmp": "cmp.nsg-firewall-waf",
  "day": 7,
  "dom": "Security solutions",
  "obj": "3.1",
  "type": "next",
  "diff": 2,
  "setting": "clinic",
  "s": "A clinic's appointment site runs in Azure behind Application Gateway, and DDoS Protection is already enabled on its virtual network. A log review finds form fields containing SQL fragments like ' OR 1=1 -- and script tags. Traffic volume is normal, and the IT lead wants these requests stopped before any reach the app.",
  "q": "What should the team turn on first?",
  "o": [
   "Web Application Firewall on the Application Gateway",
   "The DDoS IP Protection tier for the site's address",
   "Stricter network security group rules on the app subnet",
   "Azure Key Vault for the database connection string"
  ],
  "why": "SQL injection and cross-site scripting hide inside web requests, and WAF on Application Gateway inspects that layer 7 content.",
  "no": [
   "DDoS Protection already covers traffic floods, and this traffic isn't a flood.",
   "NSG rules filter by IP and port, so they can't tell a malicious request from a normal one on the same port.",
   "Protecting secrets is good hygiene but doesn't stop injection requests from reaching the app."
  ],
  "take": "Attacks hidden inside web requests, like SQL injection or cross-site scripting, call for a Web Application Firewall."
 },
 {
  "id": "rw.sc.edge-network.constraints",
  "concept": "sc.azure-firewall",
  "concepts": [
   "sc.azure-firewall",
   "sc.nsg",
   "sc.waf",
   "sc.ddos"
  ],
  "cmp": "cmp.nsg-firewall-waf",
  "day": 7,
  "dom": "Security solutions",
  "obj": "3.1",
  "type": "constraints",
  "diff": 3,
  "setting": "logistics",
  "s": "A logistics company runs apps for its warehouses across 12 Azure virtual networks. Servers may reach only a short list of internet domains, such as *.windowsupdate.com and a carrier's tracking API, and one team must manage a single policy for all 12 networks. Earlier rules based on IP addresses kept breaking because the vendors' IPs change often.",
  "q": "Which option meets all of these requirements?",
  "o": [
   "Azure Firewall with FQDN-based application rules",
   "Network security groups on each warehouse subnet",
   "Web Application Firewall on Azure Front Door",
   "An Azure DDoS Network Protection plan"
  ],
  "why": "Azure Firewall can filter outbound traffic by domain name (FQDN) and apply one central policy across many virtual networks.",
  "no": [
   "NSGs filter by IP and port, so they break when vendor IPs change, and they're managed per subnet or NIC.",
   "WAF protects inbound web apps from exploits, not outbound server traffic to the internet.",
   "DDoS Protection defends availability against floods; it doesn't restrict which domains servers reach."
  ],
  "take": "Outbound rules by domain name, managed centrally across many VNets, point to Azure Firewall."
 },
 {
  "id": "rw.sc.inside-network.identify",
  "concept": "sc.bastion",
  "concepts": [
   "sc.bastion",
   "sc.azure-firewall",
   "sc.key-vault",
   "sc.nsg"
  ],
  "cmp": null,
  "day": 7,
  "dom": "Security solutions",
  "obj": "3.1",
  "type": "identify",
  "diff": 1,
  "setting": "university",
  "s": "An auditor flags that a university research lab's Azure Linux VMs have public IP addresses with SSH port 22 open to the internet. Researchers still need SSH for maintenance. The lab removes the public IPs and adopts a service that lets researchers connect from the Azure portal over TLS while the VMs keep only private addresses.",
  "q": "Which service did the lab adopt?",
  "o": [
   "Azure Bastion",
   "Azure Firewall",
   "Azure Key Vault",
   "A network security group"
  ],
  "why": "Azure Bastion provides RDP and SSH through the Azure portal over TLS, so VMs need no public IP or exposed management port.",
  "no": [
   "Azure Firewall filters traffic but doesn't give admins browser-based SSH sessions to VMs.",
   "Key Vault stores secrets, keys and certificates; it doesn't broker remote sessions.",
   "An NSG can restrict port 22, but it doesn't give researchers a way in without a public path."
  ],
  "take": "RDP or SSH to VMs without public IPs or open management ports points to Azure Bastion."
 },
 {
  "id": "rw.sc.inside-network.next",
  "concept": "sc.key-vault",
  "concepts": [
   "sc.key-vault",
   "sc.nsg",
   "sc.bastion"
  ],
  "cmp": null,
  "day": 7,
  "dom": "Security solutions",
  "obj": "3.1",
  "type": "next",
  "diff": 2,
  "setting": "startup",
  "s": "A startup's developer finds a database password hard-coded in an app's configuration file that was committed to a shared code repository. The team has already rotated the password. Before redeploying, they want the new password kept out of code entirely, with access to it controlled and logged.",
  "q": "What should the team do next?",
  "o": [
   "Store the new password in Azure Key Vault",
   "Encrypt the config file before committing it",
   "Add a network security group in front of the database",
   "Require admins to connect through Azure Bastion"
  ],
  "why": "Key Vault stores secrets centrally so the app fetches them at run time, with access controlled and logged.",
  "no": [
   "The secret would still travel with the code, and the decryption key would need a safe home too.",
   "An NSG limits network paths but does nothing about a password sitting in code.",
   "Bastion secures admin sessions to VMs, not secrets an application uses."
  ],
  "take": "Passwords, keys and certificates belong in Azure Key Vault, not in code or config files."
 },
 {
  "id": "rw.sc.inside-network.constraints",
  "concept": "sc.nsg",
  "concepts": [
   "sc.nsg",
   "sc.vnet-segmentation",
   "sc.azure-firewall",
   "sc.waf"
  ],
  "cmp": "cmp.nsg-firewall-waf",
  "day": 7,
  "dom": "Security solutions",
  "obj": "3.1",
  "type": "constraints",
  "diff": 2,
  "setting": "manufacturer",
  "s": "A manufacturer runs a web tier and a database tier in two subnets of one Azure virtual network. The only rule needed is that the database subnet accept traffic from the web subnet on port 1433 and nothing else. There's no budget for new paid services, and the team wants the simplest built-in control.",
  "q": "Which control fits these requirements?",
  "o": [
   "A network security group on the database subnet",
   "Azure Firewall placed between the two subnets",
   "A Web Application Firewall on Application Gateway",
   "Separate virtual networks joined by peering"
  ],
  "why": "An NSG filters by source, destination, port and protocol at no extra charge, which is exactly this rule.",
  "no": [
   "Azure Firewall could enforce it, but it's a paid service beyond this simple IP-and-port need.",
   "WAF inspects web requests to an app, not database traffic between subnets.",
   "Peering connects networks; it adds connectivity rather than restricting a port."
  ],
  "take": "Simple allow or deny rules by IP, port and protocol on a subnet point to a network security group."
 },
 {
  "id": "rw.sc.defender-cloud.identify",
  "concept": "sc.defender-for-cloud",
  "concepts": [
   "sc.defender-for-cloud",
   "sc.cspm",
   "sc.cwp",
   "sc.sentinel",
   "sc.mdca",
   "sc.compliance-manager"
  ],
  "cmp": "cmp.cspm-cwp",
  "day": 7,
  "dom": "Security solutions",
  "obj": "3.2",
  "type": "identify",
  "diff": 1,
  "setting": "retail",
  "s": "A retail chain runs its online store in Azure, its warehouse system in AWS, and some older servers on-premises. The security manager wants one Microsoft service that checks all of them for misconfigurations and can also raise alerts when those servers or storage are attacked.",
  "q": "Which Microsoft service is she describing?",
  "o": [
   "Microsoft Defender for Cloud",
   "Microsoft Sentinel",
   "Microsoft Defender for Cloud Apps",
   "Microsoft Purview Compliance Manager"
  ],
  "why": "Defender for Cloud combines posture management and workload protection across Azure, AWS, Google Cloud and on-premises machines.",
  "no": [
   "Sentinel collects and correlates logs as a SIEM; it doesn't assess resource configurations.",
   "Defender for Cloud Apps governs SaaS app use, not the security of servers and storage.",
   "Compliance Manager tracks regulatory progress, not resource misconfigurations or attacks."
  ],
  "take": "Posture plus workload protection across Azure, other clouds and on-premises points to Defender for Cloud."
 },
 {
  "id": "rw.sc.defender-cloud.next",
  "concept": "sc.cspm",
  "concepts": [
   "sc.cspm",
   "sc.cwp",
   "sc.compliance-manager",
   "sc.sentinel"
  ],
  "cmp": "cmp.secure-compliance-score",
  "day": 7,
  "dom": "Security solutions",
  "obj": "3.2",
  "type": "next",
  "diff": 2,
  "setting": "nonprofit",
  "s": "A nonprofit recently turned on Microsoft Defender for Cloud and sees a low Secure Score. The free foundational CSPM features are already on, but nobody has looked at the findings yet. The director wants the score higher before next month's board meeting.",
  "q": "What should the team do first to raise the score?",
  "o": [
   "Work through the security recommendations",
   "Enable a paid Defender plan for every workload",
   "Create a new assessment in Compliance Manager",
   "Connect the subscription to Microsoft Sentinel"
  ],
  "why": "Secure Score rises as you remediate Defender for Cloud's security recommendations, which foundational CSPM already provides.",
  "no": [
   "Workload plans add threat detection; they don't fix the existing misconfigurations behind the recommendations.",
   "Compliance Manager has its own compliance score for regulations, separate from Secure Score.",
   "Sentinel adds log collection and threat detection, not posture fixes."
  ],
  "take": "Secure Score goes up by remediating Defender for Cloud's security recommendations."
 },
 {
  "id": "rw.sc.defender-cloud.constraints",
  "concept": "sc.cwp",
  "concepts": [
   "sc.cwp",
   "sc.cspm",
   "sc.sensitivity-labels"
  ],
  "cmp": "cmp.cspm-cwp",
  "day": 7,
  "dom": "Security solutions",
  "obj": "3.2",
  "type": "constraints",
  "diff": 3,
  "setting": "cloud-team",
  "s": "A cloud team already uses Defender for Cloud's free posture features, and its Secure Score is high. After a partner uploaded an infected file to a storage account, management now requires alerts when malware is uploaded or storage is accessed in unusual ways. They'll pay for extra protection on storage only, not the whole environment.",
  "q": "Which option meets the requirement?",
  "o": [
   "Enable the Defender for Storage plan",
   "Enable the Defender CSPM plan",
   "Remediate more recommendations to raise Secure Score",
   "Apply sensitivity labels to the stored files"
  ],
  "why": "A workload protection plan adds threat detection and alerts for one workload type, here storage accounts.",
  "no": [
   "Defender CSPM deepens posture analysis but doesn't raise threat alerts for storage activity.",
   "A higher Secure Score means fewer misconfigurations; it doesn't detect malware being uploaded.",
   "Sensitivity labels classify and protect files but don't detect malware or unusual access."
  ],
  "take": "Detecting attacks on a workload, not just misconfigurations, needs that workload's Defender plan."
 },
 {
  "id": "rw.sc.sentinel.identify",
  "concept": "sc.siem-soar",
  "concepts": [
   "sc.siem-soar",
   "sc.sentinel",
   "sc.cspm",
   "sc.mde"
  ],
  "cmp": "cmp.siem-soar",
  "day": 8,
  "dom": "Security solutions",
  "obj": "3.3",
  "type": "identify",
  "diff": 1,
  "setting": "credit-union",
  "s": "A credit union wants one system that pulls in logs from its firewalls, Microsoft 365 and its core banking servers. It should look across all of them for patterns no single log shows, such as repeated failed sign-ins followed by a large data transfer. Automated response isn't needed yet.",
  "q": "Which type of capability are they asking for?",
  "o": [
   "Security information and event management (SIEM)",
   "Security orchestration, automation and response (SOAR)",
   "Cloud security posture management (CSPM)",
   "Endpoint detection and response (EDR)"
  ],
  "why": "Collecting logs from many sources and correlating them to spot threats is the core job of a SIEM.",
  "no": [
   "SOAR automates the response, which they said isn't needed yet.",
   "CSPM checks cloud resource configurations, not patterns across logs.",
   "EDR watches behavior on devices, not logs from firewalls and cloud services together."
  ],
  "take": "Collecting and correlating logs from many sources is SIEM; automating the response is SOAR."
 },
 {
  "id": "rw.sc.sentinel.next",
  "concept": "sc.sentinel",
  "concepts": [
   "sc.sentinel",
   "sc.siem-soar"
  ],
  "cmp": null,
  "day": 8,
  "dom": "Security solutions",
  "obj": "3.3",
  "type": "next",
  "diff": 2,
  "setting": "msp",
  "s": "An MSP has set up Microsoft Sentinel for a client and connected Microsoft Entra ID sign-in logs, which are arriving correctly in the workspace. No incidents appear yet. The client wants an incident whenever one account has many failed sign-ins from unfamiliar countries.",
  "q": "What should the MSP configure next?",
  "o": [
   "An analytics rule that detects the pattern",
   "A playbook that disables the account",
   "A workbook that charts failed sign-ins",
   "A hunting query that searches for the pattern"
  ],
  "why": "Analytics rules query the collected data and create alerts and incidents; the data is flowing, so detection is the missing piece.",
  "no": [
   "A playbook responds to an incident, and there's no incident yet to respond to.",
   "Workbooks visualize data but don't generate incidents.",
   "Hunting is a search an analyst runs by hand; it doesn't create incidents automatically."
  ],
  "take": "In Sentinel, connectors bring data in, analytics rules create incidents, and playbooks respond."
 },
 {
  "id": "rw.sc.sentinel.constraints",
  "concept": "sc.sentinel",
  "concepts": [
   "sc.sentinel",
   "sc.siem-soar",
   "sc.threat-intel"
  ],
  "cmp": "cmp.siem-soar",
  "day": 8,
  "dom": "Security solutions",
  "obj": "3.3",
  "type": "constraints",
  "diff": 2,
  "setting": "school",
  "s": "A school district already gets Microsoft Sentinel incidents for phishing alerts. Its two-person IT team can't watch the console after hours, so the superintendent requires each phishing incident to automatically revoke the user's sessions and open a helpdesk ticket. No new staff or new tools are allowed.",
  "q": "Which Sentinel capability meets this requirement?",
  "o": [
   "Playbooks run by automation rules",
   "Hunting queries written in KQL",
   "Workbooks shared with the helpdesk",
   "Threat intelligence indicators"
  ],
  "why": "Playbooks, built on Azure Logic Apps, carry out response actions and can run automatically from automation rules when incidents appear.",
  "no": [
   "Hunting is analyst-driven searching, which needs someone at the console.",
   "Workbooks display data; they don't take action.",
   "Threat indicators help detection but don't carry out response steps."
  ],
  "take": "Automated response in Sentinel means playbooks, often launched by automation rules."
 },
 {
  "id": "rw.sc.xdr-devices-email.identify",
  "concept": "sc.defender-xdr",
  "concepts": [
   "sc.defender-xdr",
   "sc.mdo",
   "sc.mde",
   "sc.audit",
   "sc.defender-for-cloud"
  ],
  "cmp": null,
  "day": 8,
  "dom": "Security solutions",
  "obj": "3.4",
  "type": "identify",
  "diff": 1,
  "setting": "law-firm",
  "s": "At a law firm, a paralegal opened a phishing email, a script then ran on her laptop, and an hour later her account signed in from an unusual location. The security analyst sees all three alerts grouped into one incident in a single portal that tells the whole attack story.",
  "q": "Which Microsoft offering grouped these alerts into one incident?",
  "o": [
   "Microsoft Defender XDR",
   "Microsoft Defender for Office 365",
   "Microsoft Purview Audit",
   "Microsoft Defender for Cloud"
  ],
  "why": "Defender XDR correlates signals from email, endpoints, identities and apps into one incident in the Defender portal.",
  "no": [
   "Defender for Office 365 covers the email part only, not the laptop or the sign-in.",
   "Audit records user activity but doesn't correlate alerts into incidents.",
   "Defender for Cloud protects cloud workloads like servers and storage, not user email and laptops."
  ],
  "take": "One incident spanning email, device and identity alerts points to Microsoft Defender XDR."
 },
 {
  "id": "rw.sc.xdr-devices-email.next",
  "concept": "sc.mdvm",
  "concepts": [
   "sc.mdvm",
   "sc.mde",
   "sc.mdo",
   "sc.cspm"
  ],
  "cmp": null,
  "day": 8,
  "dom": "Security solutions",
  "obj": "3.4",
  "type": "next",
  "diff": 2,
  "setting": "hospital",
  "s": "A hospital's two-person desktop team has Microsoft Defender for Endpoint on every workstation. A report shows hundreds of missing patches, and they can fix only a fraction this month. Before choosing what to patch, they need to know which weaknesses are actively exploited and matter most to the hospital.",
  "q": "What should they check first?",
  "o": [
   "Defender Vulnerability Management recommendations",
   "Recent EDR alerts in Microsoft Defender for Endpoint",
   "Safe Attachments reports in Defender for Office 365",
   "Secure Score recommendations in Defender for Cloud"
  ],
  "why": "Vulnerability Management ranks weaknesses by real risk, including active exploitation, so the most dangerous get patched first.",
  "no": [
   "EDR alerts flag attacker behavior happening now, not which missing patches matter most.",
   "Safe Attachments scans email files; it doesn't assess workstation vulnerabilities.",
   "Defender for Cloud's Secure Score covers cloud resource posture, not a ranked patch list for workstations."
  ],
  "take": "Too many vulnerabilities to fix at once? Use Defender Vulnerability Management's risk-based priorities."
 },
 {
  "id": "rw.sc.xdr-devices-email.constraints",
  "concept": "sc.mdo",
  "concepts": [
   "sc.mdo",
   "sc.mde",
   "sc.insider-risk"
  ],
  "cmp": null,
  "day": 8,
  "dom": "Security solutions",
  "obj": "3.4",
  "type": "constraints",
  "diff": 2,
  "setting": "remote-office",
  "s": "A fully remote marketing agency uses Microsoft 365 with Defender for Office 365 Plan 2. After several staff clicked a fake invoice link, leadership wants realistic phishing tests with training assigned to anyone who clicks. They'll use only licenses they already own.",
  "q": "Which option meets the requirement?",
  "o": [
   "Attack simulation training in Defender for Office 365",
   "Safe Links policies in Defender for Office 365",
   "Device isolation in Microsoft Defender for Endpoint",
   "A separately purchased phishing simulation service"
  ],
  "why": "Attack simulation training is included in Defender for Office 365 Plan 2 and runs phishing simulations with assigned training.",
  "no": [
   "Safe Links checks URLs at click time but doesn't run tests or assign training.",
   "Device isolation cuts a compromised device off the network; it doesn't train users.",
   "A separate service could work, but it breaks the rule to use only licenses they own."
  ],
  "take": "Phishing simulations with follow-up training come from Attack simulation training in Defender for Office 365 Plan 2."
 },
 {
  "id": "rw.sc.xdr-identity-apps.identify",
  "concept": "sc.mdi",
  "concepts": [
   "sc.mdi",
   "sc.id-protection",
   "sc.mdca",
   "sc.sentinel"
  ],
  "cmp": "cmp.mdi-idprotection",
  "day": 8,
  "dom": "Security solutions",
  "obj": "3.4",
  "type": "identify",
  "diff": 2,
  "setting": "manufacturer",
  "s": "A manufacturer still runs on-premises Active Directory for its plant-floor systems. An alert reports that one account is using a stolen password hash to authenticate to several servers. The alert came from sensors installed on the company's domain controllers.",
  "q": "Which product raised this alert?",
  "o": [
   "Microsoft Defender for Identity",
   "Microsoft Entra ID Protection",
   "Microsoft Defender for Cloud Apps",
   "Microsoft Sentinel"
  ],
  "why": "Defender for Identity uses sensors on domain controllers to detect on-premises Active Directory attacks such as pass-the-hash.",
  "no": [
   "ID Protection scores cloud sign-in risk in Entra ID, not on-premises AD authentication.",
   "Defender for Cloud Apps watches SaaS app activity, not domain controller traffic.",
   "Sentinel could ingest the alert, but it doesn't run sensors on domain controllers."
  ],
  "take": "Attacks on on-premises Active Directory, like pass-the-hash, point to Defender for Identity."
 },
 {
  "id": "rw.sc.xdr-identity-apps.next",
  "concept": "sc.mdca",
  "concepts": [
   "sc.mdca",
   "sc.sensitivity-labels",
   "sc.dlp",
   "sc.ediscovery"
  ],
  "cmp": null,
  "day": 8,
  "dom": "Security solutions",
  "obj": "3.4",
  "type": "next",
  "diff": 2,
  "setting": "university",
  "s": "A university's IT office suspects staff are storing student records in free file-sharing and note-taking apps that IT never approved. Before writing any blocking policy, the CISO wants to know which cloud apps are actually in use and how risky each one is.",
  "q": "What should IT do first?",
  "o": [
   "Run cloud app discovery in Defender for Cloud Apps",
   "Publish sensitivity labels for student records",
   "Create a DLP policy covering student records",
   "Open an eDiscovery case on staff mailboxes"
  ],
  "why": "Cloud app discovery reveals shadow IT and gives each app a risk score, which is the visibility the CISO wants first.",
  "no": [
   "Labels protect known files but won't reveal which unapproved apps staff use.",
   "A DLP policy is a blocking control, and the CISO wants visibility before any blocking.",
   "eDiscovery preserves content for legal matters; it doesn't inventory cloud apps."
  ],
  "take": "Finding unapproved cloud apps (shadow IT) starts with discovery in Defender for Cloud Apps."
 },
 {
  "id": "rw.sc.xdr-identity-apps.constraints",
  "concept": "sc.threat-intel",
  "concepts": [
   "sc.threat-intel",
   "sc.defender-xdr",
   "sc.audit"
  ],
  "cmp": null,
  "day": 8,
  "dom": "Security solutions",
  "obj": "3.4",
  "type": "constraints",
  "diff": 2,
  "setting": "city-government",
  "s": "A city government's analyst is working an incident in the Microsoft Defender portal that involves an unfamiliar malware family. Her manager wants a same-day briefing on who uses this malware, how they usually operate, and what else to check. There's no budget for outside research, so she must use what the portal already offers.",
  "q": "Where should she look?",
  "o": [
   "Threat analytics reports in the Defender portal",
   "Microsoft Secure Score in the Defender portal",
   "A commissioned external threat research report",
   "Audit log search in Microsoft Purview"
  ],
  "why": "Threat analytics, built on Microsoft Threat Intelligence, explains active threats, actor techniques and what to check, inside the Defender portal.",
  "no": [
   "Secure Score measures your own posture; it says nothing about the attacker.",
   "An outside report breaks the no-budget, use-the-portal constraint.",
   "Audit shows who did what in your tenant, not who the attacker group is."
  ],
  "take": "Context on who an attacker is and how they operate comes from threat intelligence, such as threat analytics."
 },
 {
  "id": "rw.sc.trust-compliance.identify",
  "concept": "sc.privacy-principles",
  "concepts": [
   "sc.privacy-principles"
  ],
  "cmp": null,
  "day": 9,
  "dom": "Compliance",
  "obj": "4.1",
  "type": "identify",
  "diff": 1,
  "setting": "school",
  "s": "A school board asks whether the district can decide which region its Microsoft 365 data is stored in. The IT director says one of Microsoft's privacy commitments covers exactly that.",
  "q": "Which commitment is the IT director citing?",
  "o": [
   "Data location",
   "Data control",
   "Data security",
   "Data defense"
  ],
  "why": "Data location is the commitment that you can choose where your data is stored.",
  "no": [
   "Data control is about your data being yours to access, change or delete.",
   "Data security is about encryption at rest and in transit.",
   "Data defense is about how Microsoft responds when a government asks for your data."
  ],
  "take": "Choosing where your data is stored is the data location commitment."
 },
 {
  "id": "rw.sc.trust-compliance.next",
  "concept": "sc.stp",
  "concepts": [
   "sc.stp",
   "sc.compliance-manager",
   "sc.cspm",
   "sc.privacy-principles"
  ],
  "cmp": "cmp.stp-compliance-manager",
  "day": 9,
  "dom": "Compliance",
  "obj": "4.1",
  "type": "next",
  "diff": 2,
  "setting": "hospital",
  "s": "A hospital's vendor-risk team must approve Microsoft 365 before the contract renews. Their checklist's first item is to obtain the cloud provider's independent audit reports, such as SOC 2 and ISO 27001. Reviewing the hospital's own settings comes later.",
  "q": "Where should the team go first?",
  "o": [
   "The Service Trust Portal",
   "Compliance Manager in Microsoft Purview",
   "Microsoft Secure Score",
   "The Microsoft Privacy Statement"
  ],
  "why": "The Service Trust Portal is where Microsoft publishes its audit reports and compliance documents, such as SOC and ISO reports.",
  "no": [
   "Compliance Manager tracks the hospital's own progress, which the checklist puts later.",
   "Secure Score measures the hospital's security posture, not Microsoft's audits.",
   "The privacy statement explains Microsoft's data practices but isn't an independent audit report."
  ],
  "take": "Microsoft's own audit reports, like SOC 2 or ISO 27001, are in the Service Trust Portal."
 },
 {
  "id": "rw.sc.trust-compliance.constraints",
  "concept": "sc.compliance-manager",
  "concepts": [
   "sc.compliance-manager",
   "sc.cspm",
   "sc.stp",
   "sc.defender-for-cloud"
  ],
  "cmp": "cmp.secure-compliance-score",
  "day": 9,
  "dom": "Compliance",
  "obj": "4.2",
  "type": "constraints",
  "diff": 3,
  "setting": "law-firm",
  "s": "A law firm must show its insurer steady progress toward a data protection regulation, with a percentage score and a list of recommended actions the firm owns. The insurer knows a score doesn't prove compliance and only wants to see progress. The firm's data and controls are in Microsoft 365, and it wants to use its existing Microsoft tools.",
  "q": "Which option fits these requirements?",
  "o": [
   "An assessment in Compliance Manager",
   "Microsoft Secure Score",
   "Documents from the Service Trust Portal",
   "Defender for Cloud's regulatory compliance dashboard"
  ],
  "why": "Compliance Manager assessments track progress against a regulation with a compliance score and improvement actions.",
  "no": [
   "Secure Score measures security posture, not progress against a regulation.",
   "The Service Trust Portal holds Microsoft's audit reports, not the firm's own progress.",
   "Defender for Cloud's dashboard assesses cloud infrastructure resources, not the firm's Microsoft 365 controls."
  ],
  "take": "Progress toward a regulation, with improvement actions and a score, points to Compliance Manager."
 },
 {
  "id": "rw.sc.info-protection.identify",
  "concept": "sc.data-classification",
  "concepts": [
   "sc.data-classification",
   "sc.retention"
  ],
  "cmp": null,
  "day": 9,
  "dom": "Compliance",
  "obj": "4.3",
  "type": "identify",
  "diff": 2,
  "setting": "retail",
  "s": "A retailer's compliance officer wants Microsoft Purview to recognize supplier contracts, which vary widely in wording and contain no fixed number pattern. She provides sample contracts so the tool learns what one looks like, then uses it to find similar documents.",
  "q": "Which classification feature is she using?",
  "o": [
   "A trainable classifier",
   "A sensitive information type",
   "A retention label",
   "Activity explorer"
  ],
  "why": "Trainable classifiers learn from examples to recognize kinds of documents that have no fixed pattern.",
  "no": [
   "Sensitive information types match defined patterns such as card or ID numbers.",
   "A retention label controls how long content is kept, not how it's recognized.",
   "Activity explorer shows what people do with labeled content; it doesn't learn to identify documents."
  ],
  "take": "Pattern-based data uses sensitive info types; document kinds with no pattern need trainable classifiers."
 },
 {
  "id": "rw.sc.info-protection.next",
  "concept": "sc.sensitivity-labels",
  "concepts": [
   "sc.sensitivity-labels",
   "sc.dlp",
   "sc.retention",
   "sc.insider-risk"
  ],
  "cmp": "cmp.labels-dlp",
  "day": 9,
  "dom": "Compliance",
  "obj": "4.3",
  "type": "next",
  "diff": 2,
  "setting": "manufacturer",
  "s": "An engineering firm's product designs must stay encrypted even after they're emailed to outside partners or copied to USB drives. The firm has agreed on classification names (Public, General, Confidential), but nothing has been set up in Microsoft Purview yet.",
  "q": "What should the team set up first?",
  "o": [
   "Sensitivity labels, with encryption on Confidential",
   "A DLP policy that blocks all external email sharing",
   "A retention policy on the design library",
   "An insider risk policy for departing staff"
  ],
  "why": "Sensitivity labels classify the file and can apply encryption that travels with it wherever it goes.",
  "no": [
   "DLP can block sharing, but the goal is for shared files to stay protected, not for sharing to stop.",
   "Retention controls how long files are kept, not who can open them.",
   "Insider risk flags risky user activity; it doesn't encrypt the files themselves."
  ],
  "take": "Protection that travels with the file, even outside the company, comes from a sensitivity label."
 },
 {
  "id": "rw.sc.info-protection.constraints",
  "concept": "sc.dlp",
  "concepts": [
   "sc.dlp",
   "sc.sensitivity-labels",
   "sc.data-classification",
   "sc.retention",
   "sc.ediscovery"
  ],
  "cmp": "cmp.labels-dlp",
  "day": 9,
  "dom": "Compliance",
  "obj": "4.3",
  "type": "constraints",
  "diff": 2,
  "setting": "clinic",
  "s": "A clinic wants staff warned on screen before they email any spreadsheet containing patient ID numbers outside the organization. Management insists staff must not be asked to label files by hand, because past manual schemes were ignored.",
  "q": "Which option meets this requirement?",
  "o": [
   "A DLP policy with policy tips",
   "A sensitivity label policy with a default label",
   "A retention label policy",
   "An eDiscovery hold on mailboxes"
  ],
  "why": "DLP detects sensitive information in content automatically and can show policy tips before the item is shared.",
  "no": [
   "A default label doesn't detect patient ID numbers or warn anyone before sending.",
   "Retention labels govern how long content is kept, not whether it's shared.",
   "A hold preserves content for legal cases; it doesn't warn users."
  ],
  "take": "Warn or block when sensitive data is about to leave: that's a DLP policy with policy tips."
 },
 {
  "id": "rw.sc.lifecycle.identify",
  "concept": "sc.records-management",
  "concepts": [
   "sc.records-management",
   "sc.retention",
   "sc.sensitivity-labels",
   "sc.ediscovery"
  ],
  "cmp": "cmp.retention-policy-label",
  "day": 10,
  "dom": "Compliance",
  "obj": "4.3",
  "type": "identify",
  "diff": 2,
  "setting": "city-government",
  "s": "A city clerk's office applies a label to signed council contracts. Once labeled, staff can no longer edit or delete them, and when the seven-year period ends, a reviewer must approve their disposal.",
  "q": "Which Purview capability is the office using?",
  "o": [
   "Records management",
   "A retention policy",
   "A sensitivity label",
   "An eDiscovery hold"
  ],
  "why": "Records management uses retention labels that declare items as records, locking them and supporting disposition review.",
  "no": [
   "Retention policies apply to whole locations and can't mark items as records or require disposition review.",
   "Sensitivity labels classify and protect content; they don't lock it against deletion.",
   "A hold preserves content for a case but has no scheduled disposition review."
  ],
  "take": "Locked against edits and deletion, then reviewed before disposal: that's records management."
 },
 {
  "id": "rw.sc.lifecycle.next",
  "concept": "sc.retention",
  "concepts": [
   "sc.retention",
   "sc.records-management",
   "sc.ediscovery"
  ],
  "cmp": "cmp.retention-policy-label",
  "day": 10,
  "dom": "Compliance",
  "obj": "4.3",
  "type": "next",
  "diff": 3,
  "setting": "nonprofit",
  "s": "A nonprofit has a retention policy that deletes all mailbox email after three years. Legal now requires grant agreements sent by email to be kept for seven years. The admin wants the three-year cleanup to keep working for all other email.",
  "q": "What is the best first step?",
  "o": [
   "Apply a seven-year retention label to grant emails",
   "Remove the three-year retention policy entirely",
   "Place every mailbox on an eDiscovery hold",
   "Mark all mailbox items as regulatory records"
  ],
  "why": "When settings conflict, retention wins over deletion, so a seven-year label keeps grant emails while the policy still deletes other mail.",
  "no": [
   "Removing the policy stops the cleanup for all email, not just grant agreements.",
   "A hold is for legal cases and would keep everything in every mailbox.",
   "Regulatory records are locked far more strictly than needed and would cover all mail."
  ],
  "take": "When retention settings conflict, retention wins over deletion and the longest retention period wins."
 },
 {
  "id": "rw.sc.lifecycle.constraints",
  "concept": "sc.retention",
  "concepts": [
   "sc.retention",
   "sc.records-management",
   "sc.dlp",
   "sc.sensitivity-labels"
  ],
  "cmp": "cmp.retention-policy-label",
  "day": 10,
  "dom": "Compliance",
  "obj": "4.3",
  "type": "constraints",
  "diff": 2,
  "setting": "logistics",
  "s": "A logistics company must delete all Teams chat messages after two years for every employee, with nothing for users to do. The admin wants the simplest option that Microsoft Purview supports for Teams chats.",
  "q": "Which option meets these requirements?",
  "o": [
   "A retention policy for the Teams chats location",
   "A retention label applied to Teams chats",
   "A DLP policy covering Teams chats",
   "A sensitivity label with an access expiry date"
  ],
  "why": "Retention policies apply to whole locations, including Teams chats, and can delete content automatically after a set period.",
  "no": [
   "Retention labels apply to individual items and aren't supported for Teams chats.",
   "DLP controls sharing of sensitive content; it doesn't delete messages on a schedule.",
   "Sensitivity label expiry limits access to encrypted content; it doesn't delete chats."
  ],
  "take": "Retention for an entire location like Teams chats calls for a retention policy, not labels."
 },
 {
  "id": "rw.sc.investigations.identify",
  "concept": "sc.insider-risk",
  "concepts": [
   "sc.insider-risk",
   "sc.dlp",
   "sc.ediscovery",
   "sc.mdca"
  ],
  "cmp": null,
  "day": 10,
  "dom": "Compliance",
  "obj": "4.4",
  "type": "identify",
  "diff": 2,
  "setting": "startup",
  "s": "Two weeks after an engineer at a startup resigned, a Purview alert flagged that he had downloaded hundreds of design files and copied them to a USB drive. The alert combined his resignation date from an HR connector with that activity. The analyst sees a pseudonym instead of his name until she's authorized to reveal it.",
  "q": "Which Microsoft Purview solution raised this alert?",
  "o": [
   "Insider risk management",
   "Data loss prevention",
   "eDiscovery",
   "Microsoft Defender for Cloud Apps"
  ],
  "why": "Insider risk management correlates signals like HR resignation dates with user activity and pseudonymizes users by default.",
  "no": [
   "DLP acts on sensitive content in the moment but doesn't combine HR events or pseudonymize users.",
   "eDiscovery finds and preserves content for legal matters; it doesn't raise risk alerts.",
   "Defender for Cloud Apps governs cloud app use and doesn't use HR resignation data."
  ],
  "take": "Risky activity by a departing employee, with pseudonymized users, points to insider risk management."
 },
 {
  "id": "rw.sc.investigations.next",
  "concept": "sc.ediscovery",
  "concepts": [
   "sc.ediscovery",
   "sc.audit",
   "sc.sensitivity-labels"
  ],
  "cmp": null,
  "day": 10,
  "dom": "Compliance",
  "obj": "4.4",
  "type": "next",
  "diff": 2,
  "setting": "credit-union",
  "s": "A credit union receives notice of a lawsuit about one of its loan programs. Its lawyer says all related email and Teams messages must be preserved right away, because some employees routinely delete old messages. Searching and exporting can come later.",
  "q": "What should the compliance admin do first?",
  "o": [
   "Create an eDiscovery case and place a hold",
   "Export every mailbox to PST files",
   "Run an audit log search for deleted items",
   "Apply sensitivity labels to loan documents"
  ],
  "why": "An eDiscovery hold preserves relevant content so it can't be permanently deleted while the case is open.",
  "no": [
   "Export comes after searching, and the lawyer wants content preserved in place first.",
   "Audit shows who deleted what but doesn't prevent future deletions.",
   "Labels protect files from unauthorized access; they don't preserve messages for a case."
  ],
  "take": "When litigation starts, preserve first: an eDiscovery hold stops relevant content from being permanently deleted."
 },
 {
  "id": "rw.sc.investigations.constraints",
  "concept": "sc.audit",
  "concepts": [
   "sc.audit"
  ],
  "cmp": null,
  "day": 10,
  "dom": "Compliance",
  "obj": "4.4",
  "type": "constraints",
  "diff": 3,
  "setting": "msp",
  "s": "An MSP is setting up investigations for a client that has Microsoft 365 E5 licenses. Incidents are often discovered months later, so the client needs Exchange mailbox audit records kept for one year. The client won't buy any add-on licenses.",
  "q": "Which option meets these requirements?",
  "o": [
   "Audit (Premium)",
   "Audit (Standard)",
   "The 10-year audit log retention add-on",
   "Message trace in Exchange Online"
  ],
  "why": "Audit (Premium) comes with E5 and keeps Exchange, SharePoint and Entra ID audit records for one year by default.",
  "no": [
   "Audit (Standard) keeps records for 180 days, short of a year.",
   "The 10-year add-on needs an extra per-user license, which the client ruled out.",
   "Message trace follows mail delivery; it isn't a year-long record of user and admin activity."
  ],
  "take": "Audit (Standard) keeps records 180 days; Audit (Premium), included with E5, keeps one year by default."
 }
];
(window.CN_PACKS=window.CN_PACKS||[]).push({id:"sc-1-rw",cert:"sc",label:"SC-900 Real-World Practice batch 1",version:"2.1.0",reviewed:"2026-09-30",scenarios:scenarios.map(x=>Object.assign({reviewed:"2026-09-30",status:"source-checked",v:1},x))});
})();
