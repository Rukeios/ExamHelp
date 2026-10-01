// Rukeios Study interactive lessons, batch 2: Levels 2-6 (SC-900 concepts and Microsoft Entra).
// Same content model as data-lessons.js, plus these section types:
//   compare  - a table of options against criteria; one column is selected and explained
//   map      - items placed in zones (inside the tenant, on-premises, outside); select one to explain it
//   steps    - an ordered walk-through; select a step to explain it
//   casebook - several short guided cases, one at a time (review checkpoint)
//   check    - independent check; from: which levels' scored scenarios to draw on; max: how many
// Optional on any section: caution (a "Watch out" qualification where shorthand would mislead),
// note ("sc.*" concept or "cmp.*" comparison shown as the section's Pocket Note).
// src/reviewed are filled in only after the sources were actually checked (see docs/v2.2.3-lessons.md).
(function(){
const ML="https://learn.microsoft.com/en-us/";
const P=(s,q,o)=>({s,q,o});   // guided practice: o = [[answer, correct, feedback], ...]
const L=window.LESSON_PILOTS=window.LESSON_PILOTS||{};

// ---------------------------------------------------------------- Level 2
L[2]={id:"lesson.sc.2", day:2, v:1, reviewed:"2026-10-01", src:["https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/sc-900", "https://learn.microsoft.com/en-us/training/modules/describe-security-concepts-methodologies/", "https://learn.microsoft.com/en-us/training/modules/describe-security-concepts-methodologies/5-describe-encryption-hashing", "https://learn.microsoft.com/en-us/training/modules/describe-security-concepts-methodologies/6-describe-compliance-concepts", "https://learn.microsoft.com/en-us/training/modules/describe-identity-principles-concepts/", "https://learn.microsoft.com/en-us/training/modules/describe-identity-principles-concepts/3-define-identity-primary-security-perimeter", "https://learn.microsoft.com/en-us/training/modules/describe-identity-principles-concepts/5-describe-concept-of-directory-services-active-directory", "https://learn.microsoft.com/en-us/training/modules/describe-identity-principles-concepts/6-describe-concept-federation"],
  title:"Encryption, hashing, GRC and identity concepts",
  subtitle:"How data is protected, how organizations manage security, and how identity works.",
  sections:[
    {id:"enc", type:"facets", title:"Encryption", lead:"Encryption scrambles data so only someone with the right key can read it.", note:"sc.encryption",
     facets:[
      {id:"sym", name:"Symmetric", say:"One shared key encrypts and decrypts. It's fast, but both sides need the same key, kept secret.", example:"A backup system encrypts nightly archives with one key stored in a key vault.", tags:["One shared key","Fast"]},
      {id:"asym", name:"Asymmetric", say:"A key pair: data encrypted with the public key can only be decrypted with the matching private key.", example:"A partner sends a file encrypted with your public key; only your private key opens it.", tags:["Public key","Private key"]},
      {id:"rest", name:"Data at rest", say:"Data stored on a disk, in a database or in cloud storage.", example:"A laptop drive is encrypted so a stolen laptop doesn't expose its files.", tags:["Disk encryption","Storage encryption"]},
      {id:"transit", name:"Data in transit", say:"Data moving across a network, between devices or services.", example:"A patient portal uses HTTPS so sign-ins can't be read on public Wi-Fi.", tags:["TLS / HTTPS","VPN"]}],
     practice:P("A clinic copies scanned records to a USB drive that a courier takes to another office.","Which state of data needs protecting most directly here?",
      [["Data at rest on the drive",true,"The records sit on the drive during the trip. Encrypting the drive protects them if it's lost."],
       ["Data in transit over the network",false,"Nothing crosses a network here. The drive is carried, so the data is stored on it the whole time."],
       ["Neither, because the courier is trusted",false,"Trusting the courier doesn't help if the drive is lost or stolen. Encryption still matters."]])},
    {id:"cmp", type:"compare", title:"Encryption, hashing and encoding", lead:"Three ways of transforming data, built for different jobs. Select one to compare.", note:"cmp.hash-encrypt",
     cols:[
      {id:"encryption", name:"Encryption", say:"Protects confidentiality. Reversible, but only with the key.", example:"Customer addresses are encrypted in the database because staff need to read them later."},
      {id:"hashing", name:"Hashing", say:"Creates a fixed-length fingerprint. It's one-way: you compare hashes; you don't reverse them.", example:"The app stores a salted hash of each password and compares hashes at sign-in."},
      {id:"encoding", name:"Encoding", say:"Changes the format so data can be stored or transmitted. Anyone can reverse it. It isn't security.", example:"An email attachment is Base64-encoded for transport. Anyone can decode it."}],
     rows:[["Main purpose","Keep data confidential","Verify integrity; store passwords","Change format for transport or storage"],
           ["Reversible?","Yes, with the key","No","Yes, by anyone"],
           ["Needs a key?","Yes","No","No"],
           ["Protects secrets?","Yes","Not on its own","No"]],
     rowsNote:"Hashing \"protects\" passwords only in a narrow sense: the original isn't stored. Short or common passwords can still be guessed and checked against a hash, which is why salts and slow hashing algorithms are used.",
     caution:"Encoding is not encryption, and a hash isn't a way to hide data you'll need back.",
     practice:P("A developer says customer phone numbers are \"secured\" because they're stored in Base64.","What's wrong with that claim?",
      [["Base64 is encoding, which anyone can reverse",true,"Base64 changes format only. There's no key, so anyone can decode it. Encryption is needed to keep the numbers confidential."],
       ["Base64 is hashing, so the numbers can't be read back",false,"Base64 isn't a hash. It reverses easily, and the business needs the numbers back anyway."],
       ["Nothing; Base64 is a form of encryption",false,"Encryption requires a key. Base64 has none."]])},
    {id:"grc", type:"facets", title:"Governance, risk and compliance", lead:"Three related disciplines that shape security decisions.", note:"sc.grc",
     facets:[
      {id:"gov", name:"Governance", say:"The rules, policies and processes an organization sets for itself, and who's accountable for them.", example:"Leadership approves a policy that every laptop must be encrypted.", tags:["Policies","Accountability"]},
      {id:"risk", name:"Risk", say:"Identifying threats, judging how likely and how harmful they are, and deciding how to respond.", example:"IT ranks an unpatched public server as high risk and fixes it first.", tags:["Assess","Respond"]},
      {id:"comp", name:"Compliance", say:"Meeting outside laws, regulations and standards, and being able to show it.", example:"A clinic keeps records in a way that meets the health privacy rules it's bound by.", tags:["Laws","Regulations","Standards"]}],
     caution:"Data residency, sovereignty and privacy are common compliance topics. Compliance is about outside obligations; governance is the organization's own rules.",
     practice:P("A credit union adopts an internal rule that only managers can approve wire transfers over a set amount. No law requires this rule.","Which part of GRC is this?",
      [["Governance",true,"It's the organization's own rule and accountability, not an outside requirement."],
       ["Compliance",false,"Compliance means meeting outside obligations. The scenario says no law requires the rule."],
       ["Risk",false,"The rule may respond to a risk, but setting it as policy is governance."]])},
    {id:"aaa", type:"facets", title:"Authentication, authorization and auditing", lead:"Identity is now the main security perimeter, because people and apps work from anywhere. Identity systems answer three different questions.", note:"sc.authn",
     facets:[
      {id:"authn", name:"Authentication", say:"Proves you are who you claim to be.", example:"A nurse signs in with a password and approves a phone prompt.", tags:["Who are you?"]},
      {id:"authz", name:"Authorization", say:"Decides what an authenticated identity is allowed to do.", example:"The signed-in nurse can view schedules but not change payroll.", tags:["What can you do?"]},
      {id:"audit", name:"Auditing", say:"Records what identities did, so activity can be reviewed later. Some frameworks call this accounting.", example:"The audit log shows which account exported the patient list on Tuesday.", tags:["What did you do?"]}],
     caution:"Signing in doesn't grant every permission. Authentication comes first; authorization then limits access. Microsoft also lists administration as a fourth pillar of identity.",
     practice:P("An intern signs in successfully but gets \"Access denied\" when opening the finance share.","Which process produced the denial?",
      [["Authorization",true,"The sign-in worked, so authentication succeeded. Authorization decided the intern isn't allowed on that share."],
       ["Authentication",false,"Authentication already succeeded; the intern is signed in."],
       ["Auditing",false,"Auditing records the attempt. It doesn't make the access decision."]])},
    {id:"idp", type:"facets", title:"Identity providers, directories and federation", lead:"Where identities live and how sign-in is trusted across apps and organizations.", note:"sc.idp",
     facets:[
      {id:"idp", name:"Identity provider and SSO", say:"An identity provider signs users in and issues tokens that apps trust. Single sign-on lets one sign-in reach many apps.", example:"Staff sign in once each morning and open email, HR and payroll without signing in again.", tags:["Tokens","SSO"]},
      {id:"dir", name:"Directory and AD DS", say:"A directory stores information about users, groups and devices. Active Directory Domain Services is the classic on-premises directory.", example:"An office's domain controllers hold every employee account and computer.", tags:["Directory","AD DS"]},
      {id:"fed", name:"Federation", say:"A trust between separate identity providers, so users sign in with their home account to reach the other side's resources.", example:"A partner hospital's staff use their own sign-in to open a shared research portal.", tags:["Trust between organizations"]}],
     caution:"Microsoft Entra ID is a cloud identity service, not simply AD DS running in the cloud.",
     practice:P("A university wants researchers from a partner institute to use their own institute sign-in to reach one shared portal. Neither side wants to store the other's passwords.","What makes this possible?",
      [["Federation",true,"Federation is a trust between identity providers, so each side keeps its own credentials."],
       ["Single sign-on within the university",false,"SSO inside one organization doesn't create trust with another organization's identity provider."],
       ["Copying the partner's accounts into the university directory",false,"That would mean managing the partner's accounts and passwords, which neither side wants."]])},
    {id:"check", type:"check", title:"Check yourself", lead:"Mixed scenarios that ask you to tell related concepts apart. They're new, and they count as scored practice.", from:[2], max:6}
  ]};

// ---------------------------------------------------------------- Level 3
L[3]={id:"lesson.sc.3", day:3, v:1, reviewed:"2026-10-01", src:["https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/sc-900", "https://learn.microsoft.com/en-us/entra/fundamentals/whatis", "https://learn.microsoft.com/en-us/entra/identity/hybrid/whatis-hybrid-identity", "https://learn.microsoft.com/en-us/entra/identity/hybrid/cloud-sync/what-is-cloud-sync", "https://learn.microsoft.com/en-us/entra/identity/hybrid/connect/whatis-phs", "https://learn.microsoft.com/en-us/entra/external-id/external-identities-overview", "https://learn.microsoft.com/en-us/entra/external-id/b2b-direct-connect-overview", "https://learn.microsoft.com/en-us/entra/fundamentals/how-to-create-delete-users", "https://learn.microsoft.com/en-us/entra/identity/devices/overview", "https://learn.microsoft.com/en-us/entra/identity/devices/concept-device-registration", "https://learn.microsoft.com/en-us/entra/identity/devices/concept-directory-join", "https://learn.microsoft.com/en-us/entra/identity/devices/concept-hybrid-join", "https://learn.microsoft.com/en-us/entra/workload-id/workload-identities-overview", "https://learn.microsoft.com/en-us/entra/identity/managed-identities-azure-resources/overview"],
  title:"Microsoft Entra ID",
  subtitle:"Explore identities at Larkspur Health, a fictional 200-person clinic network.",
  sections:[
    {id:"map", type:"map", title:"Identities in a tenant", lead:"Microsoft Entra ID (formerly Azure AD) is Microsoft's cloud identity service. A tenant is one organization's dedicated instance. Select an identity to see what it's for.", note:"sc.identity-types",
     zones:[
      {id:"onprem", name:"On-premises", desc:"Larkspur's existing Active Directory"},
      {id:"tenant", name:"Larkspur's Microsoft Entra tenant", desc:"Identities the organization manages in the cloud"},
      {id:"outside", name:"Partner's home organization", desc:"Where a guest's own account lives"}],
     items:[
      {id:"ad", zone:"onprem", kind:"Directory", name:"On-prem AD accounts", say:"Existing Active Directory accounts. With hybrid identity, they're synchronized into the tenant so people use one identity.", example:"Long-time staff accounts created on the clinic's domain controllers."},
      {id:"member", zone:"tenant", kind:"Person", name:"Member users", say:"People who belong to the organization, such as employees.", example:"A nurse at Larkspur signs in with her work account."},
      {id:"group", zone:"tenant", kind:"People", name:"Groups", say:"Collections of users. Security groups grant access to resources; Microsoft 365 groups add a shared mailbox, calendar and files.", example:"The Billing security group gets access to the billing app."},
      {id:"device", zone:"tenant", kind:"Device", name:"Devices", say:"Laptops, phones and other devices known to Entra ID, so access can depend on the device.", example:"Clinic laptops are joined to Entra ID; staff phones are registered."},
      {id:"workload", zone:"tenant", kind:"Software", name:"Workload identities", say:"Identities for software rather than people: applications, service principals and managed identities.", example:"The scheduling app uses a managed identity to read secrets from Azure Key Vault."},
      {id:"guest", zone:"tenant", kind:"Person", name:"Guest users", say:"People from outside the organization, invited through B2B collaboration. They get a guest user object in your tenant but sign in with their home account.", example:"A lab partner's analyst gets guest access to one shared SharePoint site."},
      {id:"partner", zone:"outside", kind:"Account", name:"Partner's own accounts", say:"A guest's real account stays in their home organization, which still authenticates them. B2B direct connect is the option that adds no object to your directory.", example:"The analyst signs in with the account her lab already manages."}],
     links:["On-prem AD accounts are synchronized into the tenant with Microsoft Entra Connect Sync or Cloud Sync.","Guests authenticate with their home organization, but B2B collaboration creates a guest user object in Larkspur's tenant.","Devices and workload identities are separate from people: a device identity represents hardware, and a workload identity represents software."],
     practice:P("Larkspur's new appointment app must read a database password from Azure Key Vault. The developers don't want to store any credential in the app's code.","Which identity should the app use?",
      [["A managed identity",true,"Azure manages the credential for the app's Azure resource, so nothing sits in the code."],
       ["A guest user account",false,"Guest accounts are for external people, not software."],
       ["A member user account shared by the team",false,"A shared human account puts a password back in the app and breaks accountability."]])},
    {id:"hybrid", type:"facets", title:"Hybrid identity", lead:"Many organizations still run on-premises Active Directory. Hybrid identity connects it with Microsoft Entra ID so people use one identity for both.", note:"sc.hybrid-identity",
     facets:[
      {id:"sync", name:"Entra Connect Sync", say:"A synchronization tool installed on an on-premises server that synchronizes AD objects to Entra ID.", example:"Larkspur's IT team runs Connect Sync on a server in the clinic's data closet.", tags:["Installed on a server"]},
      {id:"cloud", name:"Entra Cloud Sync", say:"Synchronization configured from the cloud, using lightweight provisioning agents on premises.", example:"A newly acquired clinic is connected with a small agent instead of another sync server.", tags:["Lightweight agents"]},
      {id:"signin", name:"Sign-in options", say:"Synced users can sign in with password hash synchronization, pass-through authentication, or federation.", example:"Larkspur uses password hash sync, so cloud sign-in keeps working if the on-prem servers go down.", tags:["PHS","PTA","Federation"]}],
     caution:"For SC-900, know what hybrid identity achieves and the tool names. Configuration details are beyond the exam's scope.",
     practice:P("Larkspur wants staff to use their existing domain username and password for Microsoft 365.","What does Larkspur need?",
      [["Hybrid identity with Entra Connect",true,"Synchronizing on-prem AD accounts to Entra ID gives each person one identity for both."],
       ["B2B collaboration",false,"B2B invites outside users. These are Larkspur's own staff."],
       ["A managed identity for each employee",false,"Managed identities are for Azure resources, not people."]])},
    {id:"external", type:"facets", title:"External identities", lead:"Microsoft Entra External ID covers people from outside your organization.", note:"sc.external-identities",
     facets:[
      {id:"b2b", name:"B2B collaboration", say:"Invite partners as guest users. They sign in with their own work, school or personal account, and you control what they can reach.", example:"A lab partner's analyst gets guest access to one SharePoint site.", tags:["Guest users"]},
      {id:"direct", name:"B2B direct connect", say:"A mutual trust with another Microsoft Entra organization, currently used for Teams shared channels. Users aren't added as guests.", example:"Larkspur and a partner hospital share a Teams channel for a joint project.", tags:["Teams shared channels"]},
      {id:"cust", name:"Customer-facing apps", say:"External ID can also handle sign-up and sign-in for an organization's own customers and consumers.", example:"Patients create accounts on Larkspur's appointment portal.", tags:["Customers","Consumers"]}],
     practice:P("A vendor's staff need to edit documents in one of Larkspur's SharePoint sites. Larkspur doesn't want to create or manage passwords for them.","What fits best?",
      [["B2B collaboration (guest access)",true,"Guests sign in with their own account, and Larkspur controls only what they can reach."],
       ["Create member accounts for the vendor's staff",false,"Member accounts are for Larkspur's own people and would mean managing their passwords."],
       ["Microsoft Entra Connect",false,"Connect synchronizes Larkspur's own on-prem accounts, not a vendor's."]])},
    {id:"devices", type:"compare", title:"Device identities", lead:"Devices get identities too, so access decisions can consider the device. Select a join type.", note:"cmp.device-join",
     cols:[
      {id:"reg", name:"Registered", say:"Typically personal or mobile devices. The user signs in to the device with a local or personal account and adds a work account.", example:"A nurse adds her work account to her own phone to read email."},
      {id:"joined", name:"Joined", say:"Typically organization-owned devices that sign in with a Microsoft Entra account and don't depend on on-prem AD.", example:"New clinic laptops are joined to Entra ID and set up in the cloud."},
      {id:"hybrid", name:"Hybrid joined", say:"Joined to both on-premises AD and Microsoft Entra ID. Users sign in with their organizational account.", example:"Front-desk PCs still on the clinic's domain are also joined to Entra ID."}],
     rows:[["Typical owner","Personal (BYOD)","Organization","Organization"],
           ["Signs in to the device with","Local or personal account","Microsoft Entra account","On-prem AD account"],
           ["Depends on on-prem AD","No","No","Yes"]],
     caution:"\"Typically\" matters: ownership is a hint, but the deciding factor is how the device is joined.",
     practice:P("Larkspur's front-desk PCs are on the on-premises domain. IT wants them to also be recognized by Microsoft Entra ID.","What device state is this?",
      [["Microsoft Entra hybrid joined",true,"The PCs stay joined to on-premises AD and are also joined to Microsoft Entra ID (hybrid join)."],
       ["Microsoft Entra registered",false,"Registration is the usual path for personal or mobile devices, not domain PCs."],
       ["Microsoft Entra joined",false,"Joined devices don't depend on the on-prem domain, and these PCs do."]])},
    {id:"workload", type:"facets", title:"Workload identities", lead:"Applications and services need identities too.", note:"sc.workload-identity",
     facets:[
      {id:"sp", name:"Service principal", say:"The identity an application uses in a tenant. Its credential, such as a secret or certificate, is managed by you.", example:"A third-party reporting tool hosted outside Azure calls Microsoft Graph as its service principal.", tags:["App registration"]},
      {id:"sys", name:"System-assigned managed identity", say:"Created for one Azure resource and deleted with it. Azure handles the credential.", example:"One Azure function reads Key Vault with its own managed identity.", tags:["One resource"]},
      {id:"user", name:"User-assigned managed identity", say:"A standalone managed identity that several Azure resources can share.", example:"Three web apps share one managed identity to reach the same storage account.", tags:["Reusable"]}],
     practice:P("Five Azure web apps all need the same read access to one storage account, and the identity should outlive any single app.","Which identity fits best?",
      [["A user-assigned managed identity",true,"It stands alone, can be shared across resources, and isn't deleted with any one app."],
       ["A system-assigned managed identity on each app",false,"That works, but gives five separate identities, each deleted with its app. The requirement asks for one shared identity."],
       ["A guest account",false,"Guest accounts are for people from other organizations."]])},
    {id:"check", type:"check", title:"Check yourself", lead:"Collaboration and access across organizational boundaries, without the lesson in view. These count as scored practice.", from:[3], max:6}
  ]};

// ---------------------------------------------------------------- Level 4
L[4]={id:"lesson.sc.4", day:4, v:1, reviewed:"2026-10-01", src:["https://learn.microsoft.com/en-us/entra/identity/authentication/concept-authentication-methods", "https://learn.microsoft.com/en-us/entra/identity/authentication/concept-authentication-strengths", "https://learn.microsoft.com/en-us/entra/identity/authentication/concept-authentication-phone-options", "https://learn.microsoft.com/en-us/training/modules/explore-authentication-capabilities/", "https://learn.microsoft.com/en-us/training/modules/explore-authentication-capabilities/2-describe-authentication-methods", "https://learn.microsoft.com/en-us/training/modules/explore-authentication-capabilities/3-describe-multi-factor-authentication", "https://learn.microsoft.com/en-us/training/modules/explore-authentication-capabilities/4-describe-self-service-password-reset", "https://learn.microsoft.com/en-us/entra/fundamentals/security-defaults", "https://learn.microsoft.com/en-us/entra/identity/authentication/concept-sspr-howitworks", "https://learn.microsoft.com/en-us/entra/identity/authentication/concept-sspr-writeback", "https://learn.microsoft.com/en-us/entra/identity/authentication/concept-password-ban-bad", "https://learn.microsoft.com/en-us/entra/identity/authentication/howto-password-smart-lockout"],
  title:"Authentication",
  subtitle:"MFA, passwordless sign-in, security defaults, self-service password reset and password protection.",
  sections:[
    {id:"factors", type:"facets", title:"Authentication factors", lead:"Multifactor authentication needs two or more different types of factor.", note:"sc.mfa",
     facets:[
      {id:"know", name:"Something you know", say:"A secret only you should know.", example:"A password or PIN.", tags:["Password","PIN"]},
      {id:"have", name:"Something you have", say:"Something in your possession.", example:"A phone with Microsoft Authenticator, or a security key.", tags:["Phone","Security key"]},
      {id:"are", name:"Something you are", say:"A physical characteristic.", example:"A fingerprint or face scan.", tags:["Biometrics"]}],
     caution:"More steps don't mean more factors. A password plus a security question is two steps but one factor type: both are something you know.",
     practice:P("A help desk portal asks for a password, then a memorized PIN, then the answer to a security question.","How many factor types is that?",
      [["One: all three are something you know",true,"Three steps, but each is a secret you know. Adding a different type, such as a phone prompt, would make it MFA."],
       ["Three, one for each step",false,"Factors are counted by type, not by step."],
       ["Two, because the PIN is separate from the password",false,"A PIN is still something you know."]])},
    {id:"methods", type:"compare", title:"Sign-in methods compared", lead:"Methods differ in how they work and how well they resist phishing. Select one.", note:"sc.auth-methods",
     cols:[
      {id:"pw", name:"Password", say:"Something you know. On its own it's the weakest option, because it can be guessed, reused or phished.", example:"A staff member signs in with only a password on a shared kiosk."},
      {id:"sms", name:"SMS or voice", say:"A code sent by text or voice call. It adds a second factor, but Microsoft recommends moving away from text and voice for MFA in favor of methods like Microsoft Authenticator.", example:"A user types a texted code after their password."},
      {id:"auth", name:"Authenticator push or phone sign-in", say:"Push notifications with number matching, or passwordless phone sign-in. Stronger than SMS, but not phishing-resistant. (Passkeys stored in Authenticator are a different method, and they are phishing-resistant.)", example:"A user approves a sign-in by entering the number shown on screen."},
      {id:"phr", name:"Phishing-resistant", say:"Windows Hello for Business, FIDO2 security keys and passkeys (including passkeys in Microsoft Authenticator), and certificate-based authentication. They're bound to the real site, so they resist phishing.", example:"Lab staff tap a FIDO2 key to sign in to shared workstations."}],
     rows:[["Factor it adds","Know","Have","Have","Have, plus know or are"],
           ["Can replace the password","No","Not typically","Yes (phone sign-in)","Yes"],
           ["Phishing-resistant","No","No","No","Yes"]],
     rowsNote:"Simplified for the exam. Not every MFA method gives equal protection: phishing-resistant methods are the strongest, and Microsoft steers people away from text and voice. SMS-based sign-in can replace the password for some frontline workers, but it isn't phishing-resistant.",
     practice:P("A hospital wants sign-in for pharmacy staff that can't be captured by a fake sign-in page.","Which choice fits best?",
      [["FIDO2 security keys",true,"FIDO2 keys are phishing-resistant: they won't complete a sign-in for a look-alike site."],
       ["SMS codes",false,"A code typed into a fake page can be relayed by an attacker."],
       ["Longer passwords",false,"A long password can still be typed into a fake page."]])},
    {id:"passwordless", type:"facets", title:"Passwordless isn't no authentication", lead:"Passwordless methods replace the password with something stronger. You still prove who you are.", note:"sc.auth-methods",
     facets:[
      {id:"whfb", name:"Windows Hello for Business", say:"A PIN or biometric unlocks a credential tied to that specific device.", example:"A doctor signs in to her clinic laptop with her face.", tags:["Device-bound"]},
      {id:"phone", name:"Authenticator phone sign-in", say:"The phone, unlocked with a PIN or biometric, approves the sign-in.", example:"A manager approves sign-in on her phone with a fingerprint."},
      {id:"fido", name:"FIDO2 keys and passkeys", say:"A security key or passkey proves possession, usually with a PIN or biometric.", example:"Shared-workstation users tap a key and enter a PIN."},
      {id:"cba", name:"Certificate-based", say:"A certificate, often on a smart card, proves identity.", example:"Staff use smart cards they already carry for building access."}],
     caution:"The PIN in Windows Hello for Business only works on that one device, which is why it's stronger than a password that works from anywhere.",
     practice:P("A colleague says passwordless sign-in is risky because \"anyone can just walk up and get in.\"","What's the best response?",
      [["Passwordless still verifies you, with a device plus a PIN or biometric",true,"The password is replaced, not removed. Identity is still proven, often with two factors at once."],
       ["They're right; passwordless skips authentication",false,"Passwordless methods still authenticate. They just don't use a password."],
       ["It's safe because passwordless only works on the office network",false,"Passwordless isn't tied to a network location."]])},
    {id:"defaults", type:"facets", title:"Security defaults", lead:"A free, preconfigured baseline you turn on for the whole tenant.", note:"sc.security-defaults",
     facets:[
      {id:"what", name:"What it turns on", say:"Everyone registers for MFA, MFA is required when needed, admins use MFA every time they sign in, privileged actions like Azure portal access are protected, and legacy authentication is blocked. It's on by default in new tenants.", example:"A 12-person nonprofit turns it on and every user is prompted to set up Authenticator."},
      {id:"who", name:"Who it's for", say:"Organizations that want basic protection quickly, especially without premium licenses.", example:"A small firm on free licensing switches it on in minutes."},
      {id:"limits", name:"What it can't do", say:"No custom rules or exceptions. For targeted rules, organizations use Conditional Access, which needs Entra ID P1.", example:"A firm needs an exception for one kiosk account, so it moves to Conditional Access."}],
     caution:"Security defaults and custom Conditional Access policies aren't used together: turning on Conditional Access means turning security defaults off.",
     practice:P("A 15-person charity has free licenses and wants MFA for everyone as quickly as possible.","What should it use?",
      [["Security defaults",true,"Free, tenant-wide, and quick to switch on."],
       ["Conditional Access policies",false,"They need Entra ID P1, which the charity doesn't have."],
       ["Privileged Identity Management",false,"PIM controls admin role activation. It doesn't turn on MFA for everyone."]])},
    {id:"sspr", type:"steps", title:"Self-service password reset", lead:"Users reset their own password after proving who they are. Walk through a reset.", note:"sc.sspr",
     steps:[
      {id:"register", name:"Register", say:"Ahead of time, the user registers methods such as the Authenticator app, a phone number or an email address.", example:"During onboarding, a new hire adds her phone and Authenticator."},
      {id:"verify", name:"Verify", say:"After forgetting the password, the user proves who they are with the registered methods.", example:"She approves an Authenticator prompt and enters a texted code."},
      {id:"reset", name:"Reset", say:"The user chooses a new password, which must still meet password protection rules.", example:"Her new password is checked against the banned password lists."},
      {id:"writeback", name:"Write back", say:"For accounts synced from on-premises AD, password writeback updates the on-prem password too.", example:"Her clinic PC accepts the new password on Monday morning."}],
     practice:P("Larkspur's help desk spends every Monday morning resetting forgotten passwords.","Which feature reduces that work?",
      [["Self-service password reset",true,"Users verify with registered methods and reset their own passwords."],
       ["Smart lockout",false,"Smart lockout slows attackers' guesses. It doesn't reset passwords."],
       ["Security defaults",false,"Security defaults turn on MFA. They don't give users a password reset."]])},
    {id:"protect", type:"facets", title:"Password protection", lead:"Rules that block weak passwords and slow down guessing attacks.", note:"sc.password-protection",
     facets:[
      {id:"global", name:"Global banned list", say:"A Microsoft-maintained list of weak passwords and variations, applied automatically.", example:"\"Password123\" is rejected."},
      {id:"custom", name:"Custom banned list", say:"Your own terms to block, such as the company name. Requires Entra ID P1 or P2.", example:"Larkspur blocks passwords built on \"Larkspur\"."},
      {id:"lockout", name:"Smart lockout", say:"Locks out sign-in attempts that look like an attacker, while trying to keep the genuine user signed in.", example:"Thousands of guesses from one source are locked out; the real user still gets in."}],
     practice:P("Staff keep choosing passwords built on the clinic's name.","Which feature stops that?",
      [["A custom banned password list",true,"You add your own terms, such as the organization's name, and variations are blocked."],
       ["Smart lockout",false,"Smart lockout slows repeated guessing; it doesn't reject a weak new password."],
       ["Self-service password reset",false,"SSPR lets users reset passwords; it doesn't decide which passwords are allowed."]])},
    {id:"check", type:"check", title:"Check yourself", lead:"Sign-in and recovery situations, without the lesson in view. These count as scored practice.", from:[4], max:6}
  ]};

// ---------------------------------------------------------------- Level 5
L[5]={id:"lesson.sc.5", day:5, v:1, reviewed:"2026-10-01", src:["https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/sc-900", "https://learn.microsoft.com/en-us/entra/identity/conditional-access/overview", "https://learn.microsoft.com/en-us/entra/identity/conditional-access/concept-conditional-access-report-only", "https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/custom-overview", "https://learn.microsoft.com/en-us/entra/id-protection/overview-identity-protection", "https://learn.microsoft.com/en-us/entra/id-protection/concept-identity-protection-risks", "https://learn.microsoft.com/en-us/entra/id-governance/identity-governance-overview", "https://learn.microsoft.com/en-us/entra/id-governance/licensing-fundamentals", "https://learn.microsoft.com/en-us/entra/id-governance/access-reviews-overview", "https://learn.microsoft.com/en-us/entra/id-governance/privileged-identity-management/pim-configure", "https://learn.microsoft.com/en-us/entra/verified-id/decentralized-identifier-overview", "https://learn.microsoft.com/en-us/entra/global-secure-access/overview-what-is-global-secure-access"],
  title:"Access and governance",
  subtitle:"Conditional Access, roles, ID Protection and ID Governance: who gets in, what they can do, and for how long.",
  sections:[
    {id:"ca", type:"facets", title:"Conditional Access", lead:"A simplified teaching exercise. Larkspur's example policy: \"Staff signing in from outside the clinic network must use MFA. Sign-ins rated high risk are blocked.\" Select a request to see the decision. Real Conditional Access evaluates many policies and signals together.", note:"sc.conditional-access",
     facets:[
      {id:"r1", name:"Nurse, clinic network", say:"Decision: grant. The request comes from the clinic network and isn't high risk, so this example policy adds no requirement.", example:"Signals: user = nurse, location = clinic network, risk = low."},
      {id:"r2", name:"Doctor, home Wi-Fi", say:"Decision: grant with MFA. The location is outside the clinic network, so the policy requires MFA.", example:"Signals: user = doctor, location = home, risk = low."},
      {id:"r3", name:"Billing clerk, high risk", say:"Decision: block. ID Protection rated the sign-in high risk, and the policy blocks high-risk sign-ins.", example:"Signals: user = billing clerk, location = abroad, sign-in risk = high (anonymous IP)."}],
     caution:"Conditional Access needs Entra ID P1. Using sign-in or user risk from ID Protection as a condition needs Entra ID P2. Report-only mode lets you see a policy's effect before you enforce it.",
     practice:P("Under the same example policy, a pharmacist signs in from a coffee shop. The sign-in risk is low.","What's the decision?",
      [["Grant, but require MFA",true,"The location is outside the clinic network, so MFA is required. Low risk means it isn't blocked."],
       ["Block",false,"Only high-risk sign-ins are blocked in this policy."],
       ["Grant with no extra requirement",false,"That applies only on the clinic network."]])},
    {id:"roles", type:"compare", title:"Roles vs Conditional Access", lead:"They answer different questions, and they're often confused.", note:"sc.entra-rbac",
     cols:[
      {id:"rbac", name:"Roles (RBAC)", say:"What an identity is allowed to do once signed in. Assign the narrowest role that covers the job.", example:"A help desk tech gets a password-reset role instead of Global Administrator."},
      {id:"ca", name:"Conditional Access", say:"Whether a sign-in is allowed, and under what conditions, based on signals like location, device and risk.", example:"Admins must use a compliant device and MFA to sign in at all."}],
     rows:[["Question it answers","What can you do?","Can you get in, and how?"],
           ["Kind of control","Authorization","Access decision at sign-in"],
           ["Example","User Administrator role","Require MFA off-network"]],
     caution:"Microsoft Entra roles manage Entra objects such as users and groups. Azure RBAC roles manage Azure resources such as virtual machines. They're separate systems.",
     practice:P("A help desk tech can sign in fine but can't reset a user's password.","What should change?",
      [["Assign a role that allows password resets",true,"Signing in works, so it's a permissions question. A narrow role that includes password reset fixes it."],
       ["Add a Conditional Access policy",false,"Conditional Access governs the sign-in, which already works."],
       ["Make the tech a Global Administrator",false,"That works but breaks least privilege. A narrower role covers the job."]])},
    {id:"idp", type:"facets", title:"Microsoft Entra ID Protection", lead:"Detects identity risk and can feed risk levels into Conditional Access.", note:"sc.id-protection",
     facets:[
      {id:"signin", name:"Sign-in risk", say:"The chance that a particular sign-in isn't from the account owner.", example:"A sign-in from an anonymous IP address, or travel that's physically impossible.", tags:["Anonymous IP","Atypical travel"]},
      {id:"user", name:"User risk", say:"The chance that the account itself is compromised.", example:"The user's credentials appear in a known leak.", tags:["Leaked credentials"]},
      {id:"resp", name:"Responding to risk", say:"Risk levels can be used as conditions in Conditional Access, for example to require MFA or a password change.", example:"High user risk requires a secure password change.", tags:["Conditional Access"]}],
     caution:"ID Protection watches cloud sign-ins to Entra ID. Attacks on on-premises Active Directory are Microsoft Defender for Identity's job.",
     practice:P("A user's password shows up in a public credential dump.","Which kind of risk does ID Protection flag?",
      [["User risk",true,"Leaked credentials suggest the account itself is compromised."],
       ["Sign-in risk",false,"Sign-in risk is about one sign-in. Here no sign-in has happened yet."],
       ["No risk until the user signs in",false,"Leaked credentials are a user-risk detection on their own."]])},
    {id:"gov", type:"facets", title:"Microsoft Entra ID Governance", lead:"Making sure the right people have the right access, for the right length of time.", note:"sc.id-governance",
     facets:[
      {id:"life", name:"Lifecycle", say:"Joiners, movers and leavers: access is granted, changed and removed as people's roles change.", example:"A nurse who moves to billing loses ward access and gains billing access."},
      {id:"ent", name:"Entitlement management", say:"Access packages bundle groups, apps and sites that users can request, often with approval and an expiry date.", example:"A contractor requests a project package that expires after 90 days."},
      {id:"rev", name:"Access reviews", say:"Reviewers regularly confirm who still needs access, and access can be removed if it isn't confirmed.", example:"Managers re-approve access to the billing app every quarter."},
      {id:"pim", name:"Privileged Identity Management", say:"Just-in-time admin access: eligible users activate a role when needed, for a limited time, possibly with approval and MFA.", example:"An admin activates Global Administrator for two hours to make a change."}],
     caution:"Access reviews and PIM need Entra ID P2 or the Entra ID Governance license.",
     practice:P("Auditors want proof that managers re-confirm who can access patient records every quarter.","Which capability fits?",
      [["Access reviews",true,"Recurring reviews have managers confirm or remove each person's access."],
       ["Privileged Identity Management",false,"PIM controls when admin roles are active, not routine access to an app."],
       ["Entitlement management",false,"Entitlement management handles how access is requested and granted through access packages. Recurring re-confirmation is the job of access reviews, which a package can schedule."]])},
    {id:"more", type:"facets", title:"Also in this lesson", lead:"Two more Microsoft Entra capabilities. They're useful context, though not listed in the current SC-900 skills outline.",
     facets:[
      {id:"vid", name:"Verified ID", say:"Digital credentials a person holds and presents, such as proof of employment, built on open decentralized identity standards.", example:"A new hire proves their professional license with a verifiable credential."},
      {id:"gsa", name:"Global Secure Access", say:"Microsoft Entra Internet Access and Private Access: identity-aware network access, often described as Microsoft's Security Service Edge.", example:"Remote staff reach internal apps without a traditional VPN."}]},
    {id:"check", type:"check", title:"Check yourself", lead:"Access decisions without the lesson in view. These count as scored practice.", from:[5], max:6}
  ]};

// ---------------------------------------------------------------- Level 6 (review checkpoint)
L[6]={id:"lesson.sc.6", day:6, v:1, reviewed:"2026-10-01", src:["https://learn.microsoft.com/en-us/training/modules/describe-security-concepts-methodologies/2-describe-shared-responsibility-model", "https://learn.microsoft.com/en-us/training/modules/describe-identity-principles-concepts/3-define-identity-primary-security-perimeter", "https://learn.microsoft.com/en-us/entra/fundamentals/security-defaults", "https://learn.microsoft.com/en-us/entra/id-governance/privileged-identity-management/pim-configure", "https://learn.microsoft.com/en-us/entra/external-id/external-identities-overview", "https://learn.microsoft.com/en-us/entra/fundamentals/how-to-create-delete-users"],
  title:"Review: concepts and Entra",
  subtitle:"Short workplace cases across Levels 1 to 5. Try the guided review, then the independent check.",
  sections:[
    {id:"cases", type:"casebook", title:"Guided review", lead:"Each case asks for a different kind of decision. Feedback links back to the lesson and Pocket Note. These answers don't count toward your score.",
     cases:[
      {id:"c1", task:"Identify the principle", s:"After a storage error, a clinic finds that some lab results were silently changed.", q:"Which principle was affected?",
       o:[["Integrity",true,"The results were changed when they shouldn't have been, so they can no longer be trusted as accurate."],["Confidentiality",false,"Nobody saw data they shouldn't; it was changed."],["Availability",false,"The results were still reachable, just wrong."]],
       links:[{day:1,sec:"cia",label:"Level 1: The CIA triad"},{concept:"sc.cia"}]},
      {id:"c2", task:"Authentication or authorization", s:"A new contractor signs in with MFA but can't open the payroll app.", q:"Which process blocked the payroll app?",
       o:[["Authorization",true,"Sign-in succeeded. The contractor's permissions don't include payroll."],["Authentication",false,"MFA sign-in already succeeded."],["Auditing",false,"Auditing records what happened; it doesn't decide access."]],
       links:[{day:2,sec:"aaa",label:"Level 2: AuthN, AuthZ and auditing"},{concept:"sc.authz"}]},
      {id:"c3", task:"Cloud responsibility", s:"A school moves email to a SaaS service. A teacher's account is taken over with a reused password.", q:"Whose responsibility was protecting that account?",
       o:[["The school's",true,"Accounts and identities stay the customer's responsibility in every cloud model."],["The SaaS provider's",false,"The provider runs the service; the school manages its users and their sign-in protection."],["Shared equally",false,"Identities and accounts aren't shared in the model. They're always the customer's."]],
       links:[{day:1,sec:"shared",label:"Level 1: Shared responsibility"},{concept:"sc.shared-resp"}]},
      {id:"c4", task:"Choose a capability", s:"A nonprofit with free licenses wants every user on MFA this week, with no exceptions needed.", q:"Which capability fits?",
       o:[["Security defaults",true,"Free, tenant-wide and quick, with no custom rules needed."],["Conditional Access",false,"It needs Entra ID P1, and no custom rules are required."],["Access reviews",false,"Access reviews check who has access; they don't turn on MFA."]],
       links:[{day:4,sec:"defaults",label:"Level 4: Security defaults"},{concept:"sc.security-defaults"}]},
      {id:"c5", task:"Least privilege", s:"An IT admin needs Global Administrator about once a month to change a tenant setting.", q:"What's the least-privilege approach?",
       o:[["Make them eligible in PIM, activated when needed",true,"Just-in-time activation means the role is held only during the change."],["Assign Global Administrator permanently with MFA",false,"MFA protects the sign-in, but a permanent assignment is still standing admin access."],["Create a second admin account with the role",false,"A separate admin account is good practice, but a permanent role assignment is still standing access."]],
       links:[{day:5,sec:"gov",label:"Level 5: ID Governance"},{concept:"sc.pim"}]},
      {id:"c6", task:"Identity type", s:"A partner company's analyst needs one SharePoint site and will sign in with their own work account.", q:"Which identity type is the analyst in your tenant?",
       o:[["A guest user",true,"B2B collaboration invites them as a guest using their own account."],["A member user",false,"Members belong to your organization."],["A service principal",false,"Service principals are application identities, not people."]],
       links:[{day:3,sec:"external",label:"Level 3: External identities"},{concept:"sc.external-identities"}]}]},
    {id:"check", type:"check", title:"Independent check", lead:"Different scenarios drawn from Levels 1 to 5, with the lessons hidden. These count as scored practice.", from:[1,2,3,4,5], max:8}
  ]};
})();
