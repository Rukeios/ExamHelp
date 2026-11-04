// 2.4.1: interactive sections for the networking-heavy Security+ levels (14, 17, 21, 23, 31).
// Same formats as the SC-900 Level 7 beta: a map you click through (type "fieldmap") and
// retrieval drills (type "drill"). Nothing here is scored or saved. Facts follow the CompTIA
// SY0-701 objectives in our own words; the everyday comparisons are memory hooks, and each
// "Watch out" line says where the comparison stops being true. Like the rest of the Security+
// track, this is an AI draft that no human expert has reviewed.
(function(){
  const P=window.LESSON_PILOTS||{};
  const o=(t,why)=>[t,true,why], x=(t,why)=>[t,false,why];
  function add(day,{map,drills}){
    const L=P[day]; if(!L||!L.sections) return;
    if(L.sections.some(s=>s.id==="netbeta-clues")) return;
    const at=L.sections.findIndex(s=>s.type==="check");
    L.sections.splice(at<0?L.sections.length:at,0,...drills);
    if(map) L.sections.unshift(map);
  }
  const clues=(title,lead,items)=>({id:"netbeta-clues",type:"drill",beta:true,title,lead,items});
  const pairs=(title,lead,items)=>({id:"netbeta-pairs",type:"drill",beta:true,title,lead,items});

  // ---------------- Level 21: network security design ----------------
  add(21,{
    map:{id:"netbeta-map",type:"fieldmap",beta:true,title:"The network as an office building",hookLabel:"In the building",techLabel:"On the exam",
      lead:"Each network control does a job you'd recognize in a secured office building. Start from the job you know, then learn the exam name. Select any piece.",
      outside:{name:"The street",desc:"The internet: customers, partners and attackers, all mixed together."},
      zones:[
        {id:"gate",name:"The front entrance",desc:"What checks traffic on its way in or out."},
        {id:"inside",name:"Inside",desc:"How the building is divided, and how staff reach the sensitive rooms."},
        {id:"watch",name:"Connecting from elsewhere",desc:"Branch offices and people working from home."}],
      items:[
        {id:"fw",zone:"gate",name:"Firewall",kind:"Security desk",
          base:"The lobby desk with a list: who may enter, which floor they may visit, and who may leave with what.",
          azure:"Allows or blocks traffic by rules on source, destination, port and protocol. A stateful firewall remembers open conversations, so replies get back in. A next-generation firewall (NGFW) also recognizes the application, such as telling a game apart from a web page on port 443.",
          clues:["rules","port and protocol","stateful","application-aware (NGFW)"],
          watch:"The desk can't read what's inside a sealed envelope. A basic firewall doesn't inspect web request content; that's a WAF's job."},
        {id:"waf",zone:"gate",name:"Web application firewall (WAF)",kind:"Mailroom screening",
          base:"The mailroom opens packages for the web team and pulls out anything dangerous before it's delivered.",
          azure:"Inspects HTTP and HTTPS requests to a web app and blocks attacks such as SQL injection and cross-site scripting. It works at the application layer (Layer 7).",
          clues:["SQL injection","cross-site scripting","web app","Layer 7"],
          watch:"It only protects web apps. It won't stop someone brute-forcing SSH."},
        {id:"ips",zone:"gate",name:"Intrusion prevention system (IPS)",kind:"Guard who stops people",
          base:"A guard standing in the doorway who physically stops anyone matching a known troublemaker's description.",
          azure:"Sits inline, so all traffic passes through it. When traffic matches a signature or looks abnormal, it blocks it on the spot.",
          clues:["inline","blocks","prevents","active"],
          watch:"Because it's in the path, a false positive blocks real users, and if it fails it either stops traffic (fail-closed) or lets everything through (fail-open)."},
        {id:"ids",zone:"gate",name:"Intrusion detection system (IDS)",kind:"Security camera",
          base:"A camera that records the doorway and alerts the office when something looks wrong. It can't stop anyone.",
          azure:"Watches a copy of the traffic (from a tap or a SPAN port) and raises alerts. It detects; it doesn't block.",
          clues:["alerts only","passive","copy of traffic","tap or SPAN"],
          watch:"Exam trap: if the question says the device must stop the attack, an IDS is wrong. Pick an IPS."},
        {id:"lb",zone:"gate",name:"Load balancer",kind:"Receptionist with a queue",
          base:"The receptionist who sends each visitor to whichever clerk is free, so no one window gets swamped.",
          azure:"Spreads requests across several servers. Active/active uses all servers at once; active/passive keeps a spare ready. It improves availability and can hide the servers behind one address.",
          clues:["spread the load","availability","active/active","active/passive"],
          watch:"Sharing the work isn't the same as checking it. A load balancer doesn't filter attacks unless it also has security features added."},
        {id:"proxy",zone:"gate",name:"Proxy server",kind:"Assistant who makes calls for you",
          base:"An assistant who places outside calls on staff members' behalf, can refuse to dial banned numbers, and keeps a log.",
          azure:"A forward proxy makes web requests for internal users, so it can filter content, cache pages and log browsing. A reverse proxy does the same in front of servers, taking requests from outside.",
          clues:["on behalf of","content filtering","caching","forward or reverse"],
          watch:"Forward proxy protects the users going out. Reverse proxy protects the servers being reached. The exam may ask which way it faces."},
        {id:"dmz",zone:"inside",name:"Screened subnet (DMZ)",kind:"The public lobby",
          base:"The lobby, where visitors are allowed to sit and talk to staff, but locked doors keep them out of the offices.",
          azure:"A separate network segment for public-facing servers like web and mail. The internet can reach it, but it's walled off from the internal network.",
          clues:["public-facing servers","between internet and internal","DMZ"],
          watch:"Being in the lobby doesn't make a visitor trusted. A server in the screened subnet is the more exposed one, not the safer one."},
        {id:"seg",zone:"inside",name:"Segmentation and VLANs",kind:"Keycard floors",
          base:"Each department has its own floor, and your keycard only opens yours. A break-in on one floor doesn't open the others.",
          azure:"Splits a network into smaller zones, for example with VLANs or subnets, and controls traffic between them. It limits how far an attacker can move (lateral movement).",
          clues:["lateral movement","isolate","VLAN","separate zones"],
          watch:"Microsegmentation goes further, down to single workloads, which is a Zero Trust idea."},
        {id:"jump",zone:"inside",name:"Jump server",kind:"The one supervised door to the server room",
          base:"The server room has one door, with a sign-in sheet and a camera. Staff go through it instead of every office having its own door in.",
          azure:"A hardened, closely monitored machine administrators log in to first, then connect from it to servers in a secure zone.",
          clues:["admins","hardened","single access point","secure zone"],
          watch:"If the jump server is compromised, the attacker gets the same doorway, so it must be locked down and logged."},
        {id:"nac",zone:"inside",name:"802.1X and network access control (NAC)",kind:"ID check before your badge works",
          base:"New arrivals show ID at the desk before their badge will open any door at all.",
          azure:"Port-based authentication. A device must authenticate before the switch port or Wi-Fi lets it on. 802.1X has three parts: the supplicant (device), the authenticator (switch or access point) and the authentication server (usually RADIUS). NAC can also check health, like patches and antivirus.",
          clues:["port-based","supplicant","RADIUS","device health check"],
          watch:"An unplugged port with no 802.1X lets anyone plug in. That's the gap NAC closes."},
        {id:"vpn",zone:"watch",name:"VPN and IPsec",kind:"Sealed courier between offices",
          base:"A locked courier box that carries papers between offices over public roads. Anyone can see the van, but no one can read what's inside.",
          azure:"An encrypted tunnel over an untrusted network. Site-to-site links whole offices; remote access links one user. IPsec uses ESP for encryption plus integrity and AH for integrity only. Tunnel mode encrypts the whole original packet, and transport mode only the payload. Full tunnel sends all traffic through the office, while split tunnel sends only company traffic.",
          clues:["encrypted tunnel","site-to-site","IPsec","split vs full tunnel"],
          watch:"AH does not encrypt. If the question needs confidentiality, the answer is ESP."},
        {id:"sase",zone:"watch",name:"SD-WAN and SASE",kind:"Security that travels with you",
          base:"Instead of every branch driving to headquarters to get checked, the security desk comes to wherever you are.",
          azure:"SD-WAN picks the best path between sites across links like broadband and cellular. SASE combines that networking with security services such as a secure web gateway, CASB, firewall-as-a-service and Zero Trust access, all delivered from the cloud.",
          clues:["cloud-delivered security","branch offices","SD-WAN","SASE"],
          watch:"SD-WAN is about the network paths. SASE adds the security on top of them."}],
      pathLabel:"Follow one visitor all the way in",
      path:"A customer opens the web shop. The request crosses the internet, passes the edge firewall's rules, goes through the IPS inline, reaches the load balancer, and the WAF checks the request content before a web server in the screened subnet answers. That server asks for an order record, so a second firewall decides whether it may reach the database on the internal network. Meanwhile an administrator working from home connects over the VPN, signs in to the jump server, and only from there opens a session to the database server."},
    drills:[
      clues("Clue-word drill","The exam describes a situation and asks for the control. Spot the clue, pick the control. Nothing here is scored or saved.",[
        {id:"c1",s:"The device must stop matching traffic, not just report it.",o:[
          o("IPS","Stop it in the path: an inline IPS."),x("IDS","An IDS only alerts."),x("SIEM","A SIEM collects and correlates logs. It doesn't sit in the traffic."),x("Load balancer","A load balancer spreads traffic. It doesn't block attacks.")]},
        {id:"c2",s:"Public web and mail servers need to be reachable from the internet but kept away from internal file servers.",o:[
          o("Screened subnet","Public servers walled off from the inside: a screened subnet (DMZ)."),x("Jump server","A jump server is for administrators reaching a secure zone."),x("VPN","A VPN is for trusted users or sites, not the public."),x("Air gap","An air gap means no network connection at all, so the public couldn't reach the servers.")]},
        {id:"c3",s:"Attackers are typing database commands into the shop's search box.",o:[
          o("WAF","SQL injection in a web form is a WAF job."),x("Stateful firewall","A stateful firewall tracks connections, not what's typed into a form."),x("IDS","An IDS might alert, but it won't block."),x("Proxy server","A forward proxy faces outward for users. It doesn't inspect requests to your app.")]},
        {id:"c4",s:"A device has to prove who it is before the switch port will pass any traffic.",o:[
          o("802.1X","Port-based authentication: 802.1X, usually with RADIUS."),x("Port security by MAC address","MAC filtering is easy to spoof and isn't real authentication."),x("VLAN","A VLAN separates traffic but doesn't authenticate the device."),x("Jump server","A jump server controls admin access to servers, not port access.")]},
        {id:"c5",s:"Remote workers should send only company traffic through the tunnel, and their Netflix should go straight to the internet.",o:[
          o("Split tunnel","Only company traffic in the tunnel: split tunnel."),x("Full tunnel","Full tunnel sends everything through the office."),x("Site-to-site VPN","Site-to-site links offices, not single users."),x("IPsec transport mode","Transport mode is about what's encrypted, not which traffic uses the tunnel.")]},
        {id:"c6",s:"A ransomware infection on the guest Wi-Fi must not be able to reach payroll servers.",o:[
          o("Segmentation","Stop the spread between zones: segmentation."),x("Load balancing","Load balancing improves availability, not isolation."),x("Reverse proxy","A reverse proxy fronts servers for incoming requests."),x("Port mirroring","Port mirroring copies traffic for monitoring.")]},
        {id:"c7",s:"Branch offices and remote staff should get firewall, web filtering and Zero Trust access delivered from the cloud.",o:[
          o("SASE","Cloud-delivered networking plus security: SASE."),x("Screened subnet","A screened subnet is a zone in your own network."),x("Jump server","A jump server is one hardened admin box."),x("NGFW at headquarters","One on-site firewall means sending branch traffic back to headquarters, the opposite of the clue.")]},
        {id:"c8",s:"The security team wants traffic to keep flowing even if the inline inspection device crashes.",o:[
          o("Fail-open","Keep traffic flowing on failure: fail-open. It favors availability."),x("Fail-closed","Fail-closed blocks everything on failure. It favors security."),x("Active/passive","Active/passive is a load balancer or cluster setup, not a failure mode."),x("Implicit deny","Implicit deny is a rule-table default.")]}]),
      pairs("Pairs drill","Two look-alikes per question. Decide which one fits.",[
        {id:"p1",pair:"IDS or IPS?",s:"Gets a copy of the traffic from a SPAN port and emails the team.",o:[o("IDS","A copy of traffic and alerts only: IDS."),x("IPS","An IPS has to be inline to block.")]},
        {id:"p2",pair:"IDS or IPS?",s:"Drops the malicious packets before they reach the server.",o:[o("IPS","Dropping packets in the path: IPS."),x("IDS","An IDS can't drop anything.")]},
        {id:"p3",pair:"Forward proxy or reverse proxy?",s:"Employees' web browsing goes through it so the company can block gambling sites.",o:[o("Forward proxy","Users going out: forward proxy."),x("Reverse proxy","A reverse proxy takes requests coming in to your servers.")]},
        {id:"p4",pair:"Forward proxy or reverse proxy?",s:"Sits in front of the web servers and takes incoming requests from the internet.",o:[o("Reverse proxy","In front of servers, facing in: reverse proxy."),x("Forward proxy","A forward proxy serves your users going out.")]},
        {id:"p5",pair:"AH or ESP?",s:"The IPsec traffic must be encrypted.",o:[o("ESP","ESP gives encryption plus integrity."),x("AH","AH proves integrity and origin but doesn't encrypt.")]},
        {id:"p6",pair:"Tunnel mode or transport mode?",s:"Two office routers protect all traffic between their networks, including the original IP headers.",o:[o("Tunnel mode","Whole original packet wrapped, site to site: tunnel mode."),x("Transport mode","Transport mode protects only the payload, usually host to host.")]},
        {id:"p7",pair:"Fail-open or fail-closed?",s:"A hospital can't risk losing access to patient systems if the firewall dies.",o:[o("Fail-open","Availability matters most here: fail-open."),x("Fail-closed","Fail-closed would cut off access when it fails.")]},
        {id:"p8",pair:"Active/active or active/passive?",s:"Both servers handle customers at the same time.",o:[o("Active/active","Both working at once: active/active."),x("Active/passive","Active/passive keeps one on standby.")]}])]
  });

  // ---------------- Level 14: PKI ----------------
  add(14,{
    map:{id:"netbeta-map",type:"fieldmap",beta:true,title:"PKI as getting a driver's license",hookLabel:"At the DMV",techLabel:"On the exam",
      lead:"Certificates work a lot like driver's licenses: someone trusted checks who you are, issues a card, and anyone can check it's still valid. Select any piece.",
      outside:{name:"You",desc:"A website owner who needs browsers to trust the site."},
      zones:[
        {id:"gate",name:"Getting a certificate",desc:"Who issues it and what you hand over."},
        {id:"inside",name:"Trusting it",desc:"Why a browser believes the certificate."},
        {id:"watch",name:"Checking it's still good",desc:"Revocation and extra protections."}],
      items:[
        {id:"csr",zone:"gate",name:"Certificate signing request (CSR)",kind:"The filled-out application",
          base:"You fill out the license application yourself and hand it in. You keep your house key; you only show them your face.",
          azure:"You generate a key pair, keep the private key, and send the CA a CSR containing your public key and identity details (like the domain name).",
          clues:["public key goes to the CA","private key stays with you","request a certificate"],
          watch:"The private key never goes in the CSR. If a question says you sent the private key to the CA, that's wrong."},
        {id:"ca",zone:"gate",name:"Certificate authority (CA)",kind:"The DMV",
          base:"The DMV checks your documents, then issues a license with its own official stamp.",
          azure:"A trusted organization that verifies the requester and signs the certificate with the CA's private key. Anyone can check that signature with the CA's public key.",
          clues:["signs certificates","trusted third party","verifies identity"],
          watch:"The CA signs with its own private key, not yours."},
        {id:"root",zone:"gate",name:"Root CA and intermediate CA",kind:"State office and local branch",
          base:"The state office authorizes local DMV branches. The branches issue licenses day to day, and the state office stays locked away.",
          azure:"The root CA is the top of trust and is usually kept offline. It signs intermediate CAs, and intermediates sign the certificates sites actually use. If an intermediate is compromised, only that branch is revoked, not the root.",
          clues:["offline root","intermediate signs end certificates","chain of trust"],
          watch:"Losing the root's private key breaks trust in everything under it. That's why it stays offline."},
        {id:"chain",zone:"inside",name:"Chain of trust",kind:"Checking the stamp back to the state",
          base:"A police officer trusts your license because it carries the branch's stamp, and the branch was authorized by the state.",
          azure:"A browser checks the site certificate's signature against the intermediate, then the intermediate's against a root already in its trusted root store.",
          clues:["root store","trust anchor","certificate chain"],
          watch:"If the server forgets to send its intermediate certificate, the chain breaks and browsers warn, even though the certificate itself is fine."},
        {id:"self",zone:"inside",name:"Self-signed certificate",kind:"A homemade ID card",
          base:"An ID card you printed yourself. Fine for your own garage, useless at the airport.",
          azure:"Signed by its own key instead of a trusted CA. Browsers don't trust it by default. It's fine for internal testing or a lab.",
          clues:["no trusted CA","internal or testing","browser warning"],
          watch:"A private (internal) CA isn't the same as self-signed: devices that trust the company's root will trust its certificates."},
        {id:"wild",zone:"inside",name:"Wildcard and SAN certificates",kind:"One license for several names",
          base:"A wildcard is like a pass for every room on one floor. A SAN certificate is a pass that lists exactly which rooms you can enter.",
          azure:"A wildcard certificate (*.example.com) covers every subdomain one level down. A Subject Alternative Name (SAN) certificate lists several specific names, even different domains, in one certificate.",
          clues:["*.example.com","subdomains","multiple names","Subject Alternative Name"],
          watch:"*.example.com covers shop.example.com but not example.com itself, and not a.b.example.com."},
        {id:"crl",zone:"watch",name:"Certificate revocation list (CRL)",kind:"The printed list of cancelled licenses",
          base:"The DMV publishes a list of cancelled licenses every so often, and officers check the copy they have.",
          azure:"A list, published and signed by the CA, of the serial numbers of certificates revoked before they expired. Clients download it periodically.",
          clues:["list of revoked serial numbers","published periodically","download"],
          watch:"It can be out of date between publications, and it can get large."},
        {id:"ocsp",zone:"watch",name:"OCSP and OCSP stapling",kind:"Calling the DMV about one license",
          base:"Instead of reading the whole list, the officer calls and asks about one license number. With stapling, the driver carries a fresh, signed note from the DMV saying the license is valid.",
          azure:"OCSP asks the CA's responder about one certificate in real time. With OCSP stapling, the web server fetches a recent signed OCSP response and includes it in the TLS handshake, so the browser doesn't have to ask.",
          clues:["real-time","one certificate","stapling","TLS handshake"],
          watch:"Stapling is done by the server, not the browser. That's the usual exam twist."},
        {id:"pin",zone:"watch",name:"Certificate pinning",kind:"Only accepting one specific license",
          base:"The bank's own app only accepts its own card, even if another valid-looking card comes along.",
          azure:"An app is built to accept only a specific certificate or public key for its server. A certificate from any other CA is rejected, even if it's otherwise valid.",
          clues:["accept only this certificate","stops a fake but valid certificate","mobile app"],
          watch:"It protects against on-path attacks using a mis-issued certificate, but updating the pinned certificate is a chore."},
        {id:"escrow",zone:"watch",name:"Key escrow and HSM",kind:"A spare key in the bank vault",
          base:"A copy of an important key is held by a trusted third party, and the originals live in a bank vault.",
          azure:"Key escrow means a trusted party holds a copy of private keys so data can be recovered. A hardware security module (HSM) is tamper-resistant hardware that creates and stores keys and does crypto operations without the key ever leaving it.",
          clues:["recover encrypted data","third party holds a copy","tamper-resistant hardware"],
          watch:"Escrow is about recovery. An HSM is about protecting and using keys safely. A TPM is a similar chip built into one computer."}],
      pathLabel:"Follow one certificate from request to padlock",
      path:"A shop generates a key pair and sends a CSR with its public key to a CA. The intermediate CA verifies the domain and signs the certificate. When a customer connects, the server sends its certificate and the intermediate, plus a stapled OCSP response. The browser follows the signatures up to a root in its trust store, checks the name matches, confirms the dates, sees the stapled status says not revoked, and shows the padlock."},
    drills:[
      clues("Clue-word drill","Spot the clue, pick the PKI piece. Nothing here is scored or saved.",[
        {id:"c1",s:"A web server attaches a recent, signed revocation status to its TLS handshake.",o:[
          o("OCSP stapling","The server attaching the status: OCSP stapling."),x("CRL","A CRL is a list the client downloads."),x("Certificate pinning","Pinning decides which certificate is accepted, not whether it's revoked."),x("Key escrow","Escrow is about recovering keys.")]},
        {id:"c2",s:"One certificate must cover shop.example.com, mail.example.com and help.example.com, and any new subdomain later.",o:[
          o("Wildcard certificate","Every subdomain one level down, including future ones: *.example.com."),x("SAN certificate","A SAN certificate lists names, so new subdomains would need a new certificate."),x("Self-signed certificate","Self-signed won't be trusted by customers' browsers."),x("Code-signing certificate","Code signing is for software, not websites.")]},
        {id:"c3",s:"The organization must be able to recover encrypted data if an employee's private key is lost.",o:[
          o("Key escrow","Recovery copy held by a trusted party: key escrow."),x("OCSP","OCSP checks revocation."),x("Certificate pinning","Pinning restricts which certificate is accepted."),x("CRL","A CRL lists revoked certificates.")]},
        {id:"c4",s:"A mobile banking app should reject any certificate except the bank's own, even one from a trusted CA.",o:[
          o("Certificate pinning","Only accept this exact certificate or key: pinning."),x("Wildcard certificate","A wildcard covers subdomains."),x("OCSP stapling","Stapling proves status, not identity of a specific certificate."),x("Root of trust","The root store would accept any trusted CA, the opposite of the clue.")]},
        {id:"c5",s:"Keys must be generated and kept in tamper-resistant hardware in the data center.",o:[
          o("HSM","Tamper-resistant key hardware for servers: an HSM."),x("TPM","A TPM is a chip in one computer, not a data-center appliance."),x("Key escrow","Escrow is about holding a recovery copy."),x("Secure enclave","A secure enclave is a protected area inside a device's processor.")]},
        {id:"c6",s:"The top-level CA is powered off and locked in a safe; another CA issues day-to-day certificates.",o:[
          o("Offline root with an intermediate CA","An offline root signing an intermediate that does the daily work."),x("Self-signed certificate","Self-signed means no CA is involved."),x("Wildcard certificate","That's about names, not how CAs are arranged."),x("CRL","A CRL is a revocation list.")]},
        {id:"c7",s:"A browser shows a warning because the certificate wasn't issued by anyone in its trust store. The admin made it for an internal test page.",o:[
          o("Self-signed certificate","Signed by itself, so no trusted CA vouches for it."),x("Expired certificate","The clue is about who issued it, not the dates."),x("Revoked certificate","Revocation is about a cancelled certificate."),x("Wildcard certificate","A wildcard from a trusted CA wouldn't cause this.")]}]),
      pairs("Pairs drill","Two look-alikes per question. Decide which one fits.",[
        {id:"p1",pair:"CRL or OCSP?",s:"Checks one certificate's status in real time.",o:[o("OCSP","One certificate, right now: OCSP."),x("CRL","A CRL is a downloaded list that may be a little old.")]},
        {id:"p2",pair:"CRL or OCSP?",s:"A signed list of revoked serial numbers that clients download periodically.",o:[o("CRL","A periodic list: CRL."),x("OCSP","OCSP answers about one certificate at a time.")]},
        {id:"p3",pair:"Wildcard or SAN?",s:"One certificate for example.com and example.net.",o:[o("SAN certificate","Different domains listed in one certificate: SAN."),x("Wildcard certificate","A wildcard only covers subdomains of one domain.")]},
        {id:"p4",pair:"What goes in the CSR?",s:"The requester sends the CA...",o:[o("Their public key","The CSR carries the public key."),x("Their private key","The private key never leaves the requester.")]},
        {id:"p5",pair:"Root CA or intermediate CA?",s:"Signs the certificates websites use every day.",o:[o("Intermediate CA","Day-to-day issuing: the intermediate."),x("Root CA","The root signs intermediates and is kept offline.")]},
        {id:"p6",pair:"HSM or TPM?",s:"A chip on a laptop's motherboard that stores keys for full-disk encryption.",o:[o("TPM","A chip in one computer: TPM."),x("HSM","An HSM is a separate appliance or card, usually in a data center.")]}])]
  });

  // ---------------- Level 17: network and application attacks ----------------
  add(17,{
    drills:[
      clues("Clue-word drill: network and app attacks","Each situation has one clue that names the attack. Nothing here is scored or saved.",[
        {id:"c1",s:"Users' computers suddenly map the gateway's IP address to an attacker's MAC address.",o:[
          o("ARP poisoning","Fake IP-to-MAC mappings on the local network: ARP poisoning."),x("DNS poisoning","DNS poisoning fakes name-to-IP answers."),x("MAC flooding","MAC flooding overloads a switch's table so it floods traffic."),x("VLAN hopping","VLAN hopping jumps between VLANs.")]},
        {id:"c2",s:"Typing the bank's correct web address takes users to the attacker's server, because the resolver's cache holds a fake answer.",o:[
          o("DNS poisoning","A fake name-to-IP answer in the cache: DNS poisoning."),x("ARP poisoning","ARP is IP-to-MAC on the local network."),x("Typosquatting","Typosquatting relies on users mistyping the name."),x("Domain hijacking","Domain hijacking means stealing control of the domain registration.")]},
        {id:"c3",s:"The attacker sends small requests with the victim's address forged as the source, and servers send huge replies to the victim.",o:[
          o("Amplified reflected DDoS","Forged source address plus a big response: reflected and amplified DDoS."),x("SYN flood","A SYN flood leaves half-open connections. It doesn't rely on big replies."),x("Replay attack","Replay resends captured data."),x("On-path attack","On-path sits between two parties to read or change traffic.")]},
        {id:"c4",s:"The attacker captures a valid login exchange and sends it again later to get in.",o:[
          o("Replay attack","Captured and resent: replay. Timestamps and one-time tokens (nonces) stop it."),x("Brute force","Brute force guesses many passwords."),x("On-path attack","On-path is about sitting between the parties live."),x("Credential stuffing","Stuffing tries leaked passwords on other sites.")]},
        {id:"c5",s:"An attacker uses a stolen password hash to log in without ever cracking it.",o:[
          o("Pass-the-hash","Using the hash itself: pass-the-hash, a type of credential replay."),x("Rainbow table attack","Rainbow tables crack the hash."),x("Password spraying","Spraying tries one common password on many accounts."),x("Birthday attack","A birthday attack finds two inputs with the same hash.")]},
        {id:"c6",s:"A logged-in user clicks a link, and their browser quietly sends a 'transfer money' request to their bank.",o:[
          o("CSRF","The victim's own browser sends a forged request using their session: cross-site request forgery."),x("XSS","XSS runs the attacker's script in the victim's browser."),x("SSRF","SSRF tricks the server into making requests."),x("SQL injection","SQL injection targets the database.")]},
        {id:"c7",s:"A web app's 'fetch this image URL' feature is tricked into reading the cloud provider's internal metadata service.",o:[
          o("SSRF","The server makes the request for the attacker: server-side request forgery."),x("CSRF","CSRF uses the user's browser, not the server."),x("Directory traversal","Traversal uses ../ to reach files."),x("Buffer overflow","Overflow writes past the end of memory.")]},
        {id:"c8",s:"A request for ../../../etc/passwd returns the server's password file.",o:[
          o("Directory traversal","../ walking out of the web folder: directory traversal."),x("Command injection","Command injection runs OS commands."),x("XSS","XSS runs scripts in the browser."),x("Privilege escalation","Escalation gains higher rights, not file paths.")]},
        {id:"c9",s:"Someone sits between a user and the coffee shop Wi-Fi, reading and changing traffic as it passes.",o:[
          o("On-path attack","Between the two parties, reading and changing: on-path (man-in-the-middle)."),x("Replay attack","Replay resends traffic later."),x("Jamming","Jamming blocks the signal."),x("Bluesnarfing","Bluesnarfing steals data over Bluetooth.")]}]),
      pairs("Pairs drill: attack look-alikes","Two look-alikes per question. Decide which one fits.",[
        {id:"p1",pair:"ARP poisoning or DNS poisoning?",s:"Only works on the local network segment.",o:[o("ARP poisoning","ARP stays on the local segment."),x("DNS poisoning","DNS poisoning can redirect users from anywhere.")]},
        {id:"p2",pair:"XSS or CSRF?",s:"The attacker's script runs inside other visitors' browsers.",o:[o("XSS","Script running in the browser: cross-site scripting."),x("CSRF","CSRF sends a forged request; it doesn't run attacker script on the page.")]},
        {id:"p3",pair:"CSRF or SSRF?",s:"The server is the one making the unwanted request.",o:[o("SSRF","Server-side request forgery."),x("CSRF","In CSRF the user's browser makes the request.")]},
        {id:"p4",pair:"Replay or on-path?",s:"The attacker resends something captured earlier.",o:[o("Replay","Resending later: replay."),x("On-path","On-path relays and alters traffic live.")]},
        {id:"p5",pair:"Reflected or amplified?",s:"The reply is many times bigger than the request.",o:[o("Amplified","Small request, huge response: amplification."),x("Reflected","Reflection is about the forged source address bouncing replies to the victim.")]},
        {id:"p6",pair:"SQL injection or command injection?",s:"Input like ; rm -rf / runs on the server's operating system.",o:[o("Command injection","OS commands: command injection."),x("SQL injection","SQL injection runs database queries.")]}])]
  });

  // ---------------- Level 23: wireless ----------------
  add(23,{
    drills:[
      clues("Clue-word drill: wireless","Spot the clue, pick the answer. Nothing here is scored or saved.",[
        {id:"c1",s:"A fake access point with the same network name as the café's lures customers to connect.",o:[
          o("Evil twin","Same name, attacker-run: evil twin."),x("Rogue access point","A rogue AP is an unauthorized AP plugged into your network, not a lookalike."),x("Jamming","Jamming blocks the signal."),x("Bluejacking","Bluejacking sends unwanted Bluetooth messages.")]},
        {id:"c2",s:"An employee plugs a cheap wireless router into a conference room port without permission.",o:[
          o("Rogue access point","Unauthorized AP on your network: rogue AP."),x("Evil twin","An evil twin imitates your network name to lure users."),x("Deauthentication attack","Deauth kicks clients off."),x("War driving","War driving is hunting for networks from a car.")]},
        {id:"c3",s:"Clients keep getting kicked off Wi-Fi, so they reconnect while the attacker captures the handshake.",o:[
          o("Deauthentication attack","Forced disconnects: deauthentication."),x("Jamming","Jamming floods the radio band with noise; clients wouldn't reconnect cleanly."),x("Evil twin","An evil twin might follow, but the kicking off is deauth."),x("Replay attack","Replay resends captured data.")]},
        {id:"c4",s:"Home network security that replaces the pre-shared key handshake with SAE, blocking offline password guessing.",o:[
          o("WPA3-Personal","SAE is WPA3."),x("WPA2-Personal","WPA2-Personal uses the PSK four-way handshake, which can be cracked offline."),x("WEP","WEP is broken."),x("WPS","WPS is a setup PIN feature and should be turned off.")]},
        {id:"c5",s:"Each employee signs in to Wi-Fi with their own credentials, checked by a RADIUS server.",o:[
          o("WPA3-Enterprise (802.1X)","Individual logins and RADIUS: Enterprise mode with 802.1X."),x("WPA3-Personal","Personal mode uses one shared passphrase."),x("Captive portal","A captive portal is a web sign-in page, often for guests."),x("MAC filtering","MAC filtering doesn't check user credentials.")]},
        {id:"c6",s:"Both the client and the server present certificates to authenticate to the wireless network.",o:[
          o("EAP-TLS","Certificates on both sides: EAP-TLS."),x("PEAP","PEAP uses a server certificate and a password inside the tunnel."),x("EAP-TTLS","EAP-TTLS also needs only a server certificate."),x("PSK","A PSK is a shared passphrase.")]},
        {id:"c7",s:"Before installing access points, the team walks the building measuring signal strength and interference.",o:[
          o("Site survey","Measuring before deploying: a site survey. The heat map is what it produces."),x("Penetration test","A pen test attacks the network."),x("War driving","War driving looks for other people's networks."),x("Vulnerability scan","A scan checks for known weaknesses.")]},
        {id:"c8",s:"A router feature lets you join by pushing a button or entering an 8-digit PIN, and attackers can brute-force that PIN.",o:[
          o("WPS","Wi-Fi Protected Setup. Turn it off."),x("WPA3","WPA3 strengthens the handshake."),x("SAE","SAE is the WPA3 handshake."),x("802.1X","802.1X uses real credentials.")]}]),
      pairs("Pairs drill: wireless and mobile","Two look-alikes per question. Decide which one fits.",[
        {id:"p1",pair:"Evil twin or rogue AP?",s:"Copies your network's name to trick users.",o:[o("Evil twin","Imitating the name: evil twin."),x("Rogue AP","A rogue AP is an unapproved AP on your own network.")]},
        {id:"p2",pair:"EAP-TLS or PEAP?",s:"Users type a password, protected inside a TLS tunnel set up with the server's certificate.",o:[o("PEAP","Server certificate plus password in a tunnel: PEAP."),x("EAP-TLS","EAP-TLS needs a certificate on the client too.")]},
        {id:"p3",pair:"Personal or Enterprise?",s:"Everyone in the house shares one passphrase.",o:[o("Personal","One shared passphrase: Personal mode."),x("Enterprise","Enterprise gives each user their own login.")]},
        {id:"p4",pair:"BYOD or COPE?",s:"The company buys the phone, but staff may use it for personal things too.",o:[o("COPE","Corporate-owned, personally enabled."),x("BYOD","BYOD means the employee owns the device.")]},
        {id:"p5",pair:"BYOD or CYOD?",s:"Staff pick a phone from a company-approved list, and the company owns it.",o:[o("CYOD","Choose your own device from an approved list."),x("BYOD","With BYOD the employee brings their own.")]},
        {id:"p6",pair:"Site survey or heat map?",s:"The colored floor plan showing where signal is strong or weak.",o:[o("Heat map","The picture of signal strength is the heat map."),x("Site survey","The survey is the process that produces it.")]}])]
  });

  // ---------------- Level 31: ports and firewall rules (PBQ prep) ----------------
  const port=(id,s,right,why,wrong)=>({id,s,o:[o(right,why),...wrong.map(([t,w])=>x(t,w))]});
  add(31,{
    drills:[
      clues("Port drill","Ports come up in multiple-choice and in PBQs. Pick the port for each service. Nothing here is scored or saved.",[
        port("c1","SSH, and SFTP which runs over it","22","SSH and SFTP both use TCP 22.",[["23","23 is Telnet, the insecure one."],["21","21 is FTP control."],["3389","3389 is RDP."]]),
        port("c2","RDP (Remote Desktop)","3389","RDP is TCP 3389.",[["22","22 is SSH."],["445","445 is SMB."],["5900","5900 is VNC, a different remote desktop tool."]]),
        port("c3","DNS","53","DNS uses 53, UDP for most lookups and TCP for large ones like zone transfers.",[["67","67 is DHCP server."],["123","123 is NTP."],["161","161 is SNMP."]]),
        port("c4","HTTPS","443","HTTPS is TCP 443.",[["80","80 is plain HTTP."],["8080","8080 is a common alternate HTTP port."],["636","636 is LDAPS."]]),
        port("c5","LDAPS (encrypted directory lookups)","636","LDAPS is 636.",[["389","389 is plain LDAP."],["3268","3268 is the Active Directory global catalog."],["88","88 is Kerberos."]]),
        port("c6","SMB file sharing","445","SMB is TCP 445.",[["139","139 is the older NetBIOS session service."],["21","21 is FTP."],["389","389 is LDAP."]]),
        port("c7","Kerberos","88","Kerberos is 88.",[["389","389 is LDAP."],["464","464 is Kerberos password change, not the main port."],["443","443 is HTTPS."]]),
        port("c8","SNMP (device monitoring queries)","161","SNMP queries go to 161 and traps to 162. Use SNMPv3 for encryption.",[["514","514 is syslog."],["123","123 is NTP."],["69","69 is TFTP."]]),
        port("c9","Syslog","514","Syslog is UDP 514 (6514 when sent over TLS).",[["161","161 is SNMP."],["123","123 is NTP."],["25","25 is SMTP."]]),
        port("c10","NTP (time sync)","123","NTP is UDP 123. Bad time breaks Kerberos and log correlation.",[["53","53 is DNS."],["161","161 is SNMP."],["514","514 is syslog."]]),
        port("c11","IMAPS (encrypted mail retrieval)","993","IMAPS is 993.",[["143","143 is plain IMAP."],["995","995 is POP3S."],["587","587 is mail submission."]]),
        port("c12","DHCP (server side)","67","The DHCP server listens on UDP 67 and clients on 68.",[["53","53 is DNS."],["69","69 is TFTP."],["123","123 is NTP."]])]),
      pairs("Firewall rule drill","PBQs show a rule table. Rules are read top to bottom, the first match wins, and anything that matches nothing hits the implicit deny.",[
        {id:"f1",pair:"Table: 1) Allow any to 10.1.1.5 TCP 443  2) Deny any to any",s:"A user browses to https://10.1.1.5.",o:[o("Allowed by rule 1","HTTPS on 443 matches rule 1 first."),x("Blocked by rule 2","Rule 2 never gets a look, because rule 1 already matched.")]},
        {id:"f2",pair:"Table: 1) Allow any to 10.1.1.5 TCP 443  2) Deny any to any",s:"A user tries SSH to 10.1.1.5.",o:[o("Blocked by rule 2","Port 22 doesn't match rule 1, so rule 2 denies it."),x("Allowed by rule 1","Rule 1 only allows 443.")]},
        {id:"f3",pair:"Table: 1) Deny any to 10.1.1.9 any  2) Allow 192.168.5.0/24 to 10.1.1.9 TCP 22",s:"An admin on 192.168.5.20 tries SSH to 10.1.1.9.",o:[o("Blocked by rule 1","The broad deny sits first and shadows the allow below it. Fix it by moving the allow above the deny."),x("Allowed by rule 2","Rule 2 never runs, because rule 1 matched first.")]},
        {id:"f4",pair:"Table: 1) Allow 10.0.0.0/8 to any TCP 80  2) Allow 10.0.0.0/8 to any TCP 443",s:"A server on 10.2.2.2 tries to send syslog over UDP 514 to a log collector.",o:[o("Blocked by the implicit deny","No rule matches UDP 514, so the default deny drops it. Add a specific allow."),x("Allowed, because the source is in 10.0.0.0/8","The source matches, but the protocol and port don't match either rule.")]},
        {id:"f5",pair:"Which rule should replace Telnet access to the switches?",s:"Admins currently manage switches with TCP 23.",o:[o("Allow TCP 22 from the admin subnet, then deny TCP 23","Swap Telnet for SSH, and only from the admins' subnet."),x("Allow TCP 23 from the admin subnet only","Limiting who can use Telnet still sends passwords in clear text.")]},
        {id:"f6",pair:"Secure replacement?",s:"An app uses FTP on 20 and 21 to move payroll files.",o:[o("SFTP on 22","SFTP (over SSH, port 22) encrypts the transfer. FTPS on 989/990 is the other secure option."),x("TFTP on 69","TFTP has no authentication or encryption at all.")]},
        {id:"f7",pair:"Secure replacement?",s:"A help desk tool queries the directory over LDAP on 389.",o:[o("LDAPS on 636","Encrypted directory queries: LDAPS on 636."),x("Kerberos on 88","Kerberos handles authentication tickets, not directory lookups.")]},
        {id:"f8",pair:"Secure replacement?",s:"Monitoring uses SNMPv2c with the community string \"public\".",o:[o("SNMPv3","SNMPv3 adds authentication and encryption."),x("SNMP on port 162","162 is just where traps go. It doesn't make SNMP secure.")]}])]
  });
})();
