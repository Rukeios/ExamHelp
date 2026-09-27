// Extra question bank. Keyed by day number; each entry: [question, [options], correctIndex, why]
// Merged into the day's pool at load, so each day draws from its original 5 + these.
window.EXTRA = {
/* ===== SC-900 ===== */
1:[
["A hospital encrypts patient records so only treating staff can open them. Which part of CIA is this protecting?",["Confidentiality","Integrity","Availability","Non-repudiation"],0,"Keeping data readable only to the right people is confidentiality."],
["A ransomware attack locks a company out of its own files. Which part of CIA is directly hit?",["Availability","Confidentiality","Integrity","Authentication"],0,"If authorized users can't reach the data, availability is the casualty."],
["In PaaS, who is responsible for the application code and its configuration?",["The customer","Microsoft","Nobody","The end user's ISP"],0,"In PaaS the provider runs the platform, but the customer still owns their apps, data, and accounts."],
["Which Zero Trust principle means giving users only the access they need for their task?",["Use least-privilege access","Verify explicitly","Assume breach","Trust the internal network"],0,"Least privilege limits what a compromised account can reach."],
["A guard checking badges, a locked server room, and disk encryption together are an example of:",["Defense in depth","Shared responsibility","A honeypot","A managed identity"],0,"Multiple independent layers protecting the same asset is defense in depth."]],
2:[
["Two servers share one secret key to encrypt traffic between them quickly. This is:",["Symmetric encryption","Asymmetric encryption","Hashing","Salting"],0,"One shared key for both directions is symmetric, and it's fast."],
["A website proves a downloaded file wasn't tampered with by publishing its fixed-length fingerprint. That fingerprint is a:",["Hash","Private key","Digital certificate","Salt"],0,"A hash is a one-way, fixed-length fingerprint used to verify integrity."],
["Signing into your laptop, then your email, then a cloud app with a single sign-in is:",["Single sign-on (SSO)","Federation","Multifactor authentication","Hashing"],0,"SSO = authenticate once, reach many apps."],
["In GRC, setting the internal policies and rules an organization follows is the:",["Governance","Risk","Compliance","Authentication"],0,"Governance is the org's own rules and oversight."],
["Which classic on-premises directory service stores users, groups, and computers for a Windows domain?",["Active Directory Domain Services","Microsoft Sentinel","Azure Key Vault","Microsoft Purview"],0,"AD DS is the traditional on-prem directory."]],
3:[
["A company-owned laptop is joined directly to the cloud with no on-prem AD. Its device state is:",["Microsoft Entra joined","Microsoft Entra registered","Hybrid joined","Federated"],0,"Org-owned, cloud-only = Entra joined."],
["An app registered in a tenant so it can sign in and access resources uses a:",["Service principal","Guest account","Security group","Sensitivity label"],0,"A service principal is an application's identity in the tenant."],
["A security group's main purpose in Entra ID is to:",["Manage access to resources for a set of users","Send group email only","Store passwords","Replace MFA"],0,"Security groups grant access to many users at once."],
["A partner engineer needs access using their own company credentials, appearing as a guest. This is enabled by:",["Microsoft Entra External ID (B2B)","Managed identities","Security defaults","Hybrid join"],0,"B2B collaboration lets external users in as guests with their own identity."],
["Which tool provides one identity across on-prem AD and the cloud by syncing them?",["Microsoft Entra Connect","Azure Bastion","Defender for Cloud","Compliance Manager"],0,"Entra Connect creates hybrid identity by syncing on-prem AD to Entra ID."]],
4:[
["Signing in with a fingerprint on a device instead of typing a password is:",["Passwordless authentication","Two passwords","Federation","A banned password list"],0,"Biometric device sign-in replaces the password entirely."],
["A phishing-resistant physical device you tap or plug in to sign in is a:",["FIDO2 security key","One-time SMS code","Security question","A longer password"],0,"FIDO2 keys and passkeys are phishing-resistant passwordless methods."],
["Which weakest-but-allowed MFA method should be avoided when stronger options exist?",["SMS text codes","FIDO2 key","Windows Hello","Authenticator push"],0,"SMS and voice are the weakest MFA methods, vulnerable to SIM swapping."],
["Password + fingerprint combines which two factor types?",["Something you know and something you are","Something you have and somewhere you are","Two things you know","Two things you have"],0,"A password is 'know'; a fingerprint is 'are'. Different types = true MFA."],
["Smart lockout is designed to:",["Lock out attackers guessing passwords while still letting the real user in","Delete accounts after failed logins","Reset all passwords nightly","Encrypt the password database"],0,"Smart lockout blocks brute-force attempts without punishing the legitimate user."]],
5:[
["Sign in from a managed, compliant device gets full access; an unmanaged device is blocked. This is enforced by:",["Conditional Access","Security defaults","SSPR","Entra Connect"],0,"Device compliance is a signal Conditional Access can act on."],
["Which feature flags a sign-in as risky when credentials appear in a known leak?",["Microsoft Entra ID Protection","Compliance Manager","Azure Firewall","Defender for Office 365"],0,"ID Protection detects risky users and sign-ins, including leaked credentials."],
["Giving an admin the User Administrator role instead of Global Administrator follows which principle?",["Least privilege","Assume breach","Federation","Non-repudiation"],0,"Grant the narrowest role that does the job."],
["A digital credential a person holds on their device and presents to prove something about themselves is:",["Microsoft Entra Verified ID","A managed identity","A security group","A retention label"],0,"Verified ID issues and verifies holder-presented digital credentials."],
["Which is the best fit for 'activate my admin role only for 4 hours, with approval, then it expires'?",["Privileged Identity Management","Security defaults","Access packages","Conditional Access"],0,"PIM provides just-in-time, time-bound, approved admin access."]],
7:[
["A public web app is getting hit with SQL injection attempts. Which service is built to block these?",["Web Application Firewall","Azure Bastion","Azure DDoS Protection","Key Vault"],0,"WAF inspects web traffic for attacks like SQLi and XSS."],
["A flood of junk traffic tries to knock a public site offline. Which service absorbs it?",["Azure DDoS Protection","A network security group","Azure Bastion","Compliance Manager"],0,"DDoS Protection defends availability against volumetric floods."],
["Where should an application store its API keys and certificates securely?",["Azure Key Vault","In the app's source code","On the desktop","In a spreadsheet"],0,"Key Vault safely stores secrets, keys, and certificates."],
["Which service filters virtual network traffic by fully qualified domain name and applies one policy across many networks?",["Azure Firewall","A network security group","Azure Bastion","Azure Key Vault"],0,"FQDN and application rules plus central policy are what distinguish Azure Firewall from an NSG. Both are stateful."],
["Defender for Cloud works across which environments?",["Azure, AWS, GCP, and on-prem","Azure only","On-prem only","AWS only"],0,"It's multicloud and hybrid, giving posture and workload protection across all of them."]],
8:[
["In Microsoft Sentinel, a dashboard that visualizes security data is a:",["Workbook","Playbook","Sensitivity label","Access package"],0,"Workbooks visualize; playbooks automate response."],
["Which Defender product protects laptops and servers (endpoints) from threats?",["Defender for Endpoint","Defender for Office 365","Defender for Cloud Apps","Defender for Identity"],0,"Defender for Endpoint = devices."],
["Analysts want to search proactively for hidden threats using KQL before any alert fires. This is:",["Threat hunting","Automated remediation","Compliance scoring","Patching"],0,"Hunting is proactive searching, often with KQL queries."],
["Several related alerts across email and devices are grouped for investigation as one:",["Incident","Workbook","Retention label","Access review"],0,"Defender XDR correlates related alerts into a single incident."],
["Which Defender capability provides Microsoft's view of active threat actors and indicators inside the Defender portal?",["Microsoft Threat Intelligence","Microsoft Purview Audit","Azure Key Vault","Entra Verified ID"],0,"Threat Intelligence adds actor and indicator context to what analysts are investigating."]],
9:[
["Where does Microsoft publish its own SOC and ISO audit reports for customers to review?",["Service Trust Portal","Compliance Manager","Defender for Cloud","Sentinel"],0,"The Service Trust Portal hosts Microsoft's compliance documentation."],
["A pattern-based detector that recognizes credit card numbers in content is a:",["Sensitive information type","Trainable classifier","Retention label","Playbook"],0,"Sensitive info types match known patterns like card or SSN formats."],
["A score plus a to-do list showing progress toward GDPR is found in:",["Compliance Manager","Secure Score","Service Trust Portal","Key Vault"],0,"Compliance Manager tracks regulatory progress with a compliance score and improvement actions."],
["A label that encrypts a document and adds a 'Confidential' watermark that travels with the file is a:",["Sensitivity label","Retention label","Network security group","Sensitive info type"],0,"Sensitivity labels classify and protect, and protection follows the content."],
["Which shows where sensitive labeled content lives across the organization?",["Content explorer","Azure Bastion","Smart lockout","A playbook"],0,"Content explorer shows where sensitive items are; activity explorer shows what's done with them."]],
10:[
["A rule that keeps all email for 7 years then deletes it, applied across all mailboxes, is a:",["Retention policy","Sensitivity label","DLP policy","Access review"],0,"Retention policies apply keep/delete rules broadly to locations."],
["Detecting a departing employee mass-downloading files is the job of:",["Insider risk management","Communication compliance","eDiscovery","Compliance Manager"],0,"Insider risk management watches for risky actions by insiders."],
["Scanning Teams and email for harassment or inappropriate messages is:",["Communication compliance","Insider risk management","Audit","Retention"],0,"Communication compliance flags risky messages."],
["To find, preserve, and export mailboxes for a lawsuit, you use:",["eDiscovery","Compliance Manager","Defender for Endpoint","Secure Score"],0,"eDiscovery handles search, legal hold, and export."],
["Audit (Standard) retains activity logs for about how long?",["180 days","24 hours","10 years by default","Forever"],0,"Standard keeps ~180 days; Premium extends it (1 year default, up to 10 with an add-on)."]],
/* ===== Security+ ===== */
13:[
["A locked door is primarily which control TYPE?",["Preventive","Detective","Corrective","Deterrent"],0,"A lock stops entry, so it's preventive. A warning sign would be deterrent."],
["Restoring from backup after an incident is which control type?",["Corrective","Preventive","Deterrent","Directive"],0,"Corrective controls fix or restore after something goes wrong."],
["A written 'authorized personnel only' policy is which control type?",["Directive","Detective","Compensating","Physical"],0,"Directive controls instruct people what to do."],
["A two-door entry that admits one person at a time is an:",["Access control vestibule","Air gap","NSG","Bollard"],0,"The vestibule (old 'mantrap') prevents tailgating."],
["A fake network built to lure and study attackers is a:",["Honeynet","Honeytoken","Honeyfile","Bollard"],0,"Honeynet = a decoy network; a honeypot is a single decoy system."]],
14:[
["Which is a rollback plan used if a change fails?",["Backout plan","Impact analysis","Maintenance window","Change request"],0,"The backout plan restores the previous working state."],
["TLS typically uses asymmetric crypto to do what, then switches to symmetric?",["Agree on a shared session key","Hash the whole message","Store passwords","Sign the certificate authority"],0,"Asymmetric exchange sets up a fast symmetric session key for the data."],
["Making brute-forcing stored passwords slower with bcrypt or PBKDF2 is:",["Key stretching","Salting","Steganography","Tokenization"],0,"Key stretching adds cost to each guess."],
["A chip on the motherboard that stores encryption keys for BitLocker is a:",["TPM","HSM","CRL","CSR"],0,"TPM = on-board key storage. An HSM is a separate appliance."],
["Hiding secret data inside an image file is:",["Steganography","Tokenization","Hashing","Masking"],0,"Steganography conceals data within other media."]],
15:[
["A well-funded group running a long-term stealthy intrusion for espionage is best described as an:",["APT (advanced persistent threat)","Unskilled attacker","Hacktivist","Shadow IT user"],0,"APTs are persistent, resourced, and usually nation-state backed."],
["An attacker leaves infected USB drives in a parking lot hoping employees plug them in. The USB is the:",["Attack vector","Threat actor","Vulnerability","Payload only"],0,"The removable media is the vector, the path in."],
["A targeted phishing email aimed at one specific executive is:",["Whaling","Smishing","Vishing","A watering hole"],0,"Whaling targets high-value executives."],
["A phone call pretending to be IT support to extract a password is:",["Vishing","Smishing","Phishing","Typosquatting"],0,"Voice phishing = vishing."],
["An employee using an unapproved personal cloud drive for work files is:",["Shadow IT","A nation-state actor","A honeypot","Federation"],0,"Unsanctioned tech use = shadow IT."]],
16:[
["Writing more data than a memory buffer can hold, overwriting adjacent memory, is a:",["Buffer overflow","Race condition","SQL injection","VM escape"],0,"Buffer overflow overruns allocated memory."],
["A flaw with no vendor patch available yet is a:",["Zero-day","False positive","Legacy bug","Misconfiguration"],0,"Zero-day = unknown to the vendor, no patch exists."],
["Installing apps from outside the official store on a phone is:",["Sideloading","Jailbreaking","Rooting","Tethering"],0,"Sideloading bypasses the vetted store."],
["Leftover data in memory reassigned to another VM is a:",["Resource reuse vulnerability","VM escape","Buffer overflow","Race condition"],0,"Resource reuse exposes data left in recycled resources."],
["Malicious script running in a victim's browser from a trusted site is:",["Cross-site scripting (XSS)","SQL injection","Directory traversal","A logic bomb"],0,"XSS executes attacker script in the victim's browser."]],
17:[
["Malware disguised as a legitimate program that hides a payload is a:",["Trojan","Worm","Rootkit","Logic bomb"],0,"A Trojan looks legitimate but carries a hidden payload."],
["Malware that hides deep in the OS or kernel to avoid detection is a:",["Rootkit","Worm","Adware","Bloatware"],0,"Rootkits burrow into the OS to stay hidden."],
["Trying thousands of passwords against a single account is:",["Brute force","Password spraying","Phishing","A replay attack"],0,"Many guesses against one account = brute force."],
["Poisoning an ARP table to intercept traffic between two hosts is an:",["On-path attack","Amplified DDoS","SQL injection","Evil twin"],0,"On-path (man-in-the-middle) often uses ARP poisoning."],
["A rogue Wi-Fi access point impersonating a legitimate network is an:",["Evil twin","Amplification attack","Logic bomb","Rootkit"],0,"An evil twin mimics a trusted SSID to capture traffic."]],
18:[
["Only pre-approved programs are allowed to run on a system. This is an:",["Application allow list","Application deny list","Antivirus signature","Firewall rule"],0,"Allow lists block everything not explicitly permitted."],
["Splitting a network so a breach in one zone can't reach others is:",["Segmentation","Isolation","Hashing","Key escrow"],0,"Segmentation limits lateral movement."],
["A system slowly drifting away from its secure baseline over time is called:",["Configuration drift","Least privilege","Hardening","Failover"],0,"Drift is deviation from the approved baseline."],
["Disabling unused ports and services and removing default accounts is:",["Hardening","Decommissioning","Encryption","Monitoring"],0,"Hardening reduces the attack surface."],
["An actively infected host that keeps spreading should first be:",["Isolated from the network","Reimaged immediately","Patched","Left running for analysis"],0,"Contain first to stop the spread and preserve evidence."]],
20:[
["A system with no network connection to anything else is:",["Air-gapped","In a screened subnet","Behind NAT","Load balanced"],0,"Air gap = complete physical network isolation."],
["Packaging an app with its dependencies to share the host kernel, lighter than a VM, describes:",["Containers","Type 1 hypervisors","RTOS","SCADA"],0,"Containers share the kernel; VMs each run a full OS."],
["Defining infrastructure in reusable, version-controlled templates is:",["Infrastructure as code","Serverless","Microservices","SDN"],0,"IaC = infrastructure defined as reviewable code."],
["Industrial systems that run utilities where availability is critical and patching is often impossible are:",["ICS/SCADA","Serverless functions","Containers","RTOS phones"],0,"ICS/SCADA prioritize availability and resist patching."],
["Splitting an app into small independent services that talk over APIs is:",["Microservices","A monolith","An air gap","A honeynet"],0,"Microservices are small, independently deployable services."]],
21:[
["Public-facing web servers should sit in a:",["Screened subnet (DMZ)","Flat internal LAN","Air-gapped segment","Guest Wi-Fi"],0,"A DMZ isolates internet-facing servers from the internal network."],
["A device that detects malicious traffic and alerts but does not block is an:",["IDS","IPS","WAF","NAC"],0,"IDS is passive detection; IPS is inline prevention."],
["A hardened host admins connect through to reach a secure zone is a:",["Jump server","Proxy","Load balancer","Honeypot"],0,"Jump servers give one controlled admin path."],
["Requiring a device to authenticate before its switch port activates uses:",["802.1X","NAT","SD-WAN","A WAF"],0,"802.1X is port-based access control."],
["A firewall set to block all traffic when it fails is configured to:",["Fail closed","Fail open","Monitor mode","Bypass"],0,"Fail-closed favors security over availability."]],
22:[
["Replacing a credit card number with a random token stored in a secure vault is:",["Tokenization","Masking","Hashing","Encryption in transit"],0,"Tokenization removes the real value, keeping a vault mapping."],
["Showing only ***-**-1234 of an SSN on screen is:",["Data masking","Tokenization","Hashing","Steganography"],0,"Masking hides part of the real value from view."],
["A recovery site fully equipped with live data, ready almost immediately, is a:",["Hot site","Warm site","Cold site","Mobile site"],0,"Hot sites are ready fast and cost the most."],
["Data being processed in memory is data:",["In use","At rest","In transit","In escrow"],0,"In-use data is actively being processed in memory."],
["A battery that keeps servers running for the minutes until a generator starts is a:",["UPS","Generator","Load balancer","HSM"],0,"The UPS bridges the gap before the generator takes over."]],
23:[
["A standardized 0-10 severity score for a vulnerability is the:",["CVSS","CVE","SCAP","NVD"],0,"CVSS scores severity; CVE is just the identifier."],
["A scanner reports a flaw that turns out not to exist on that system. This is a:",["False positive","False negative","True positive","Zero-day"],0,"Reported but not real = false positive."],
["Reviewing source code for flaws without executing it is:",["Static analysis (SAST)","Dynamic analysis (DAST)","Fuzzing","Penetration testing"],0,"SAST examines code at rest."],
["A company buys the phones and lets staff use them personally too. This model is:",["COPE","BYOD","CYOD","VDI"],0,"Company-owned, personally enabled."],
["Destroying drives and getting proof they're unrecoverable requires a:",["Certificate of destruction","Quick format","File deletion","Retention label"],0,"A certificate of destruction documents proper disposal."]],
24:[
["The email control that lists which servers may send mail for your domain is:",["SPF","DKIM","DMARC","S/MIME"],0,"SPF publishes authorized sending servers."],
["The email control that cryptographically signs a message to prove it wasn't altered is:",["DKIM","SPF","DMARC","POP3"],0,"DKIM signs the message for integrity and origin."],
["Alerting when critical system files are changed is done by:",["File integrity monitoring (FIM)","NetFlow","A WAF","SPF"],0,"FIM watches protected files for changes."],
["Recording who talked to whom and how much, without capturing content, is:",["NetFlow","Full packet capture","FIM","DLP"],0,"NetFlow captures flow metadata only."],
["Baselining normal user behavior and flagging anomalies is:",["UEBA","SPF","NAC","802.1X"],0,"User and entity behavior analytics flags deviations from normal."]],
25:[
["Access decided by clearance labels that admins set and users can't change is:",["MAC","DAC","RBAC","ABAC"],0,"Mandatory access control uses labels and clearances."],
["Granting an app limited access to your data without sharing your password uses:",["OAuth","LDAP","RADIUS","Kerberos only"],0,"OAuth issues scoped tokens for delegated authorization."],
["Access based on department, device, location, and time of day is:",["ABAC","MAC","DAC","Rule-based on IP only"],0,"Attribute-based access control uses multiple attributes."],
["Checking admin credentials out of a vault that rotates them after use is:",["Privileged access management (PAM)","SSO","Federation","DAC"],0,"PAM vaults and rotates privileged credentials."],
["The most important IAM action when an employee is terminated is to:",["Deprovision their access immediately","Schedule a password change next month","Move them to a guest group","Archive their email first"],0,"Access must end when employment ends."]],
26:[
["Which is the correct incident response order?",["Preparation, Detection, Analysis, Containment, Eradication, Recovery, Lessons learned","Detection, Recovery, Containment, Eradication","Containment, Preparation, Recovery, Detection","Eradication, Detection, Containment, Recovery"],0,"Prepare, detect, analyze, contain, eradicate, recover, learn."],
["Following order of volatility, which is collected first?",["RAM / CPU cache","Hard disk","Backup tapes","Remote logs"],0,"The most volatile evidence (memory) is collected first."],
["Documenting everyone who handled evidence and when preserves:",["Chain of custody","Legal hold","The RPO","The baseline"],0,"Chain of custody keeps evidence admissible."],
["An instruction from legal to preserve all relevant data for a lawsuit is a:",["Legal hold","Chain of custody","Root cause analysis","Backout plan"],0,"Legal hold prevents deletion of relevant data."],
["Automating user provisioning and ticket creation to speed response is a benefit of:",["Orchestration and automation","Manual review","Air gapping","Steganography"],0,"Orchestration automates repeatable security workflows."]],
28:[
["'All passwords must be at least 14 characters' is a:",["Standard","Policy","Guideline","Procedure"],0,"A specific mandatory requirement is a standard."],
["A recommended-but-optional best practice document is a:",["Guideline","Standard","Policy","Regulation"],0,"Guidelines advise; they are not mandatory."],
["Under GDPR, the party that decides why and how personal data is processed is the:",["Data controller","Data processor","Data custodian","Data subject"],0,"The controller determines purpose and means."],
["A payroll vendor that handles employee data on your behalf is the:",["Data processor","Data controller","Data owner","Data subject"],0,"Processors act on the controller's instructions."],
["A step-by-step onboarding checklist is a:",["Procedure","Policy","Standard","Guideline"],0,"Procedures are the how-to steps."]],
29:[
["AV = $80,000, EF = 50%, ARO = 2. What is the ALE?",["$80,000","$40,000","$160,000","$20,000"],0,"SLE = 80,000 × 0.5 = 40,000. ALE = 40,000 × 2 = $80,000."],
["Buying insurance to offload financial impact is which risk strategy?",["Transfer","Avoid","Mitigate","Accept"],0,"Transfer shifts the impact to a third party."],
["'We can be down at most 6 hours' defines the:",["RTO","RPO","MTBF","ALE"],0,"Recovery time objective = maximum tolerable downtime."],
["Deciding to stop offering a risky feature entirely is risk:",["Avoidance","Transference","Acceptance","Mitigation"],0,"Avoidance removes the activity and its risk."],
["A contract guaranteeing 99.9% uptime with penalties is an:",["SLA","MOU","NDA","SOW"],0,"Service level agreement with measurable commitments."]],
30:[
["Pen testers given full network diagrams and source code perform a:",["Known-environment (white box) test","Unknown-environment test","Passive recon only","Partially known test"],0,"Full information = white box."],
["Gathering info from LinkedIn and WHOIS without touching the target is:",["Passive reconnaissance","Active reconnaissance","Exploitation","Fuzzing"],0,"Passive recon never contacts the target."],
["Red and blue teams collaborating and sharing findings live is:",["Purple (integrated) teaming","Offensive only","Defensive only","Black box"],0,"Purple teaming combines offense and defense."],
["A GDPR data subject's demand to have their personal data deleted is the:",["Right to be forgotten","Legal hold","Attestation","Due diligence"],0,"The right to erasure lets subjects request deletion."],
["Researching a vendor's security before signing a contract is:",["Due diligence","Due care","Attestation","Tokenization"],0,"Due diligence is the up-front investigation."]],
31:[
["Which port does HTTPS use?",["443","80","22","3389"],0,"HTTPS = 443; HTTP = 80."],
["Which ports does DHCP use?",["67 and 68","53 and 54","161 and 162","110 and 995"],0,"DHCP servers listen on 67 and clients on 68."],
["Which secure protocol replaces Telnet for remote command-line access?",["SSH (22)","FTP (21)","SNMP (161)","HTTP (80)"],0,"SSH encrypts the session; Telnet (23) is plaintext."],
["A log entry with '../../../../etc/passwd' indicates:",["Directory traversal","SQL injection","XSS","Brute force"],0,"Climbing directories with ../ is path traversal."],
["Which ports do SMTP use for sending mail?",["25 and 587","110 and 995","143 and 993","389 and 636"],0,"SMTP = 25, submission = 587. POP3 =110/995, IMAP=143/993, LDAP=389/636."]]
};
