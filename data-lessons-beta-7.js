// 2.3.7 beta: new teaching formats for SC-900 Level 7 (Azure infrastructure security and
// Defender for Cloud). Adds three sections to the existing Level 7 lesson without changing the
// originals: an office-building map (type "fieldmap") up front, and two retrieval drills (type
// "drill") before Check yourself. The building analogy was military (a base) in the first draft;
// RJ asked for something civilian before it shipped. The Azure facts restate the Level 7 lesson, which was checked
// against Microsoft Learn on 2026-10-03; the building comparisons are memory hooks, and each one says
// where it stops being true.
(function(){
  const L=(window.LESSON_PILOTS||{})[7]; if(!L||!L.sections) return;
  if(L.sections.some(s=>s.id==="base")) return;

  const base={id:"base",type:"fieldmap",beta:true,title:"Level 7 as an office building",hookLabel:"In the building",
    lead:"Every Level 7 product does a job you'd recognize in a secured office building. Start from the job you know, then learn the Azure name for it. Select any piece.",
    outside:{name:"The street",desc:"The internet: customers, and attackers mixed in with them."},
    zones:[
      {id:"gate",name:"The front entrance",desc:"What gets checked as traffic comes in or goes out."},
      {id:"inside",name:"Inside",desc:"How the building is split up and who can reach what."},
      {id:"watch",name:"Inspectors and guards",desc:"Microsoft Defender for Cloud. It watches the whole building."}],
    items:[
      {id:"ddos",zone:"gate",name:"DDoS Protection",kind:"Crowd control",
        base:"Barriers and queue lines at the entrance, so a crowd can't jam the doors and people with real business still get in.",
        azure:"Absorbs floods of junk traffic aimed at your public resources so real users can still reach them. It protects availability.",
        clues:["flood of traffic","overwhelm","stay available"],
        watch:"Crowd control doesn't search anyone. DDoS Protection doesn't look inside requests either, so it won't stop SQL injection."},
      {id:"fw",zone:"gate",name:"Azure Firewall",kind:"Security desk",
        base:"The lobby security desk, with one visitor list for every building on the campus. It checks who's coming and going, and where they're headed.",
        azure:"A managed, cloud-based firewall. One central policy can cover many virtual networks, with rules based on IP addresses, ports and domain names, plus threat intelligence.",
        clues:["central policy","many virtual networks","domain names","outbound"],
        watch:"A security desk mostly watches who comes in. Azure Firewall is just as much about traffic going out, such as letting servers reach only the update site."},
      {id:"waf",zone:"gate",name:"Web Application Firewall",kind:"Mailroom screening",
        base:"The mailroom that opens and checks packages before they're delivered to anyone's desk.",
        azure:"Inspects the content of web requests and blocks common exploits such as SQL injection and cross-site scripting. It runs with Application Gateway, Front Door or Azure CDN.",
        clues:["SQL injection","cross-site scripting","web application"],
        watch:"It only searches web requests going to web apps. Other kinds of traffic aren't its job."},
      {id:"vnet",zone:"inside",name:"Virtual networks",kind:"Separate buildings",
        base:"Separate buildings on the campus. Nobody walks between them unless you build a skybridge, and in Azure that skybridge is called peering.",
        azure:"A private network in Azure. Resources in different virtual networks can't talk to each other unless you connect them. Splitting workloads across them is segmentation, and you can divide one further into subnets.",
        clues:["segmentation","isolate","peering"],
        watch:"Real buildings need walls. In Azure the separation is the default: two virtual networks have no route between them until you add one."},
      {id:"nsg",zone:"inside",name:"Network security group",kind:"Door badge reader",
        base:"The badge reader on one door, with its own list of who gets in.",
        azure:"A list of allow and deny rules based on source, destination, port and protocol, attached to a subnet or a single network interface.",
        clues:["allow or deny","port","subnet","network interface"],
        watch:"A badge reader knows who you are. A network security group doesn't: it only checks addresses, ports and protocol."},
      {id:"bastion",zone:"inside",name:"Azure Bastion",kind:"Through the front office",
        base:"IT reaches the server room by going through the staffed front office, so the server room never needs its own street door.",
        azure:"Administrators connect to virtual machines with RDP or SSH through the Azure portal. The virtual machines don't need public IP addresses.",
        clues:["RDP or SSH","no public IP","through the portal"],
        watch:"It's for administrators managing machines, not for users reaching an app."},
      {id:"kv",zone:"inside",name:"Azure Key Vault",kind:"The key cabinet",
        base:"The locked key cabinet in the manager's office: keys and codes are signed out from there, never taped under a desk.",
        azure:"A secure store for secrets, encryption keys and certificates, so they aren't kept in code or configuration files.",
        clues:["secrets","keys","certificates","password in code"],
        watch:"Key Vault stores secrets. It doesn't filter traffic or decide who reaches a server."},
      {id:"cspm",zone:"watch",name:"Posture management (CSPM)",kind:"The safety inspector",
        base:"The safety inspector, who walks the building with a checklist and writes up everything that isn't up to code.",
        azure:"Continually checks your setup against standards (by default, the Microsoft cloud security benchmark), finds misconfigurations and gives you recommendations to fix them. The basic version is free and on by default.",
        clues:["misconfiguration","recommendations","benchmark","posture"],
        watch:"An inspection happens once in a while. Posture management runs all the time."},
      {id:"score",zone:"watch",name:"Secure score",kind:"The inspection grade",
        base:"The grade on the wall, like a restaurant's health grade. Fix the write-ups and the grade goes up.",
        azure:"Sums up your security posture as one number: higher means less risk found. It rises only when a resource meets every recommendation in a security control.",
        clues:["one number","security controls","posture"],
        watch:"Don't mix it up with compliance score. Secure score is security posture in Defender for Cloud. Compliance score is about regulations, in Compliance Manager in Microsoft Purview."},
      {id:"cwp",zone:"watch",name:"Workload protection",kind:"Guards on the cameras",
        base:"Security guards watching the cameras for a break-in as it happens, and calling it in.",
        azure:"Adds threat detection for specific kinds of workload, such as servers, containers, storage and databases. You turn on a Defender plan for each kind.",
        clues:["threat detection","alert","Defender plan"],
        watch:"The inspector finds weak spots before anything happens. The guards catch a break-in that's happening. That's posture management versus workload protection."},
      {id:"devops",zone:"watch",name:"DevOps security",kind:"Loading dock check",
        base:"Checking new equipment at the loading dock before it's installed anywhere.",
        azure:"Brings security into development: it scans code and the automated build steps (pipelines), so problems are caught before anything is deployed.",
        clues:["code repository","pipeline","before deployment"],
        watch:"Lower priority for SC-900. Know that it exists and what it's for."}],
    path:"Traffic from the street meets crowd control, then the security desk, then mailroom screening if it's headed to a web app. Inside, it can only reach its own building and the doors whose badge readers let it in. The inspector and the guards watch the whole building."};

  const o=(t,why)=>[t,true,why], x=(t,why)=>[t,false,why];
  const clues={id:"clues",type:"drill",beta:true,title:"Clue-word drill",
    lead:"The exam describes a situation and asks for the product. Read the situation, spot the clue, pick the product. Nothing here is scored or saved.",
    items:[
      {id:"c1",s:"A sale weekend. Millions of junk requests hit the shopping site and it goes offline.",o:[
        o("DDoS Protection","A flood that takes a site offline is an attack on availability. That's DDoS Protection."),
        x("Web Application Firewall","WAF reads what's inside web requests. The problem here is how many there are."),
        x("Network security group","A network security group allows or denies by address and port. It isn't built to absorb a flood."),
        x("Azure Key Vault","Key Vault stores secrets. It doesn't touch traffic.")]},
      {id:"c2",s:"Someone types database commands into the website's search box.",o:[
        o("Web Application Firewall","Database commands in a web form is SQL injection, which a WAF blocks."),
        x("DDoS Protection","DDoS Protection handles floods. It doesn't read what a request contains."),
        x("Network security group","A network security group only sees addresses, ports and protocol, not what's typed into a form."),
        x("Azure Bastion","Bastion is for administrators reaching virtual machines.")]},
      {id:"c3",s:"One policy has to control traffic for twelve virtual networks, and servers may only reach the update site by its domain name.",o:[
        o("Azure Firewall","Central policy across many virtual networks, with domain-name rules: Azure Firewall."),
        x("Network security group","A network security group attaches to one subnet or interface and doesn't use domain names."),
        x("Web Application Firewall","WAF protects web apps from exploits. It doesn't run network-wide policy."),
        x("Virtual networks","Virtual networks are what's being protected here, not the thing doing the filtering.")]},
      {id:"c4",s:"A simple rule on the scanner subnet: allow port 443 to the inventory server, deny everything else.",o:[
        o("Network security group","Allow and deny by port, attached to one subnet: a network security group."),
        x("Azure Firewall","Azure Firewall could filter this, but a single subnet rule by port is the network security group's job. Azure Firewall is the central one across networks."),
        x("Azure Bastion","Bastion is for administrators reaching virtual machines, not for filtering ports."),
        x("DDoS Protection","DDoS Protection handles floods.")]},
      {id:"c5",s:"Administrators need RDP access to servers that must never have a public IP address.",o:[
        o("Azure Bastion","RDP or SSH with no public IP: Azure Bastion."),
        x("Network security group","A network security group can block RDP, but it doesn't give admins a way in without a public IP."),
        x("Azure Key Vault","Key Vault stores secrets, not remote access."),
        x("Azure Firewall","Azure Firewall filters traffic. It doesn't provide the admin connection.")]},
      {id:"c6",s:"Where should the app keep its database password instead of a configuration file?",o:[
        o("Azure Key Vault","Secrets, keys and certificates belong in Key Vault."),
        x("Azure Bastion","Bastion is remote access for administrators."),
        x("Network security group","A network security group filters traffic. It doesn't store anything."),
        x("Secure score","Secure score is a measurement, not storage.")]},
      {id:"c7",s:"The payroll system must not be reachable from the public website's network at all.",o:[
        o("Separate virtual networks","Putting them in different virtual networks is segmentation. There's no route between them unless you add one."),
        x("Web Application Firewall","WAF protects a web app from exploits. It doesn't separate networks."),
        x("Azure Bastion","Bastion is admin access to virtual machines."),
        x("Azure Key Vault","Key Vault stores secrets.")]},
      {id:"c8",s:"A report says three storage accounts allow public access and lists the steps to fix it.",o:[
        o("Posture management (CSPM)","Finding misconfigurations and recommending fixes is posture management in Defender for Cloud."),
        x("Workload protection","Workload protection catches attacks in progress. This is a setting that's wrong, with no attack."),
        x("DDoS Protection","DDoS Protection handles floods."),
        x("Azure Bastion","Bastion is admin access to virtual machines.")]},
      {id:"c9",s:"Leadership wants one number that shows how secure the Azure setup is.",o:[
        o("Secure score","Secure score in Defender for Cloud: security posture as one number."),
        x("Compliance score","Compliance score is in Compliance Manager in Microsoft Purview, and it's about regulations, not security posture."),
        x("Workload protection","Workload protection raises alerts. It doesn't give you a score."),
        x("Azure Firewall","Azure Firewall filters traffic.")]},
      {id:"c10",s:"An alert fires: an unusual pattern of queries against the database, as if someone is pulling data out.",o:[
        o("Workload protection","Threat detection on a workload, here a database, comes from the Defender plan for that workload."),
        x("Posture management (CSPM)","Posture management finds weak settings. It isn't what catches an attack in progress."),
        x("Secure score","Secure score is a measurement, not an alert."),
        x("Network security group","A network security group doesn't watch for attacks. It only allows or denies traffic.")]},
      {id:"c11",s:"What does Defender for Cloud check your resources against by default?",o:[
        o("Microsoft cloud security benchmark","The default standard is the Microsoft cloud security benchmark. You can add others."),
        x("Compliance score","Compliance score belongs to Compliance Manager in Purview."),
        x("Your network security group rules","Those are rules you write, not the standard Defender for Cloud measures against."),
        x("The secure score","The secure score is the result of the check, not the standard.")]},
      {id:"c12",s:"A scan flags a password committed to the code repository before anything is deployed.",o:[
        o("DevOps security","Scanning code and pipelines before deployment is DevOps security in Defender for Cloud."),
        x("Azure Key Vault","Key Vault is where the password should have been. It doesn't scan code."),
        x("Posture management (CSPM)","Posture management checks deployed resources against standards."),
        x("Web Application Firewall","WAF protects running web apps.")]}]};

  const pairs={id:"pairs",type:"drill",beta:true,title:"Pick the right one",
    lead:"These are the pairs people mix up on the exam. Each situation fits only one of the two.",
    items:[
      {id:"p1",pair:"Network security group or Azure Firewall?",s:"Rules attached to one subnet: allow 443, deny the rest.",o:[
        o("Network security group","One subnet, simple allow and deny by port."),x("Azure Firewall","Azure Firewall is the central one, across many virtual networks.")]},
      {id:"p2",pair:"Network security group or Azure Firewall?",s:"One policy across many virtual networks, with rules based on domain names.",o:[
        o("Azure Firewall","Central policy and domain-name rules are Azure Firewall's strengths."),x("Network security group","A network security group attaches to one subnet or interface and doesn't use domain names.")]},
      {id:"p3",pair:"Network security group or Azure Firewall?",s:"Block traffic from addresses known to be malicious, using Microsoft's threat intelligence.",o:[
        o("Azure Firewall","Threat-intelligence filtering is an Azure Firewall feature."),x("Network security group","A network security group only follows the rules you write.")]},
      {id:"p4",pair:"DDoS Protection or Web Application Firewall?",s:"A flood of traffic takes the site down.",o:[
        o("DDoS Protection","Volume and availability: DDoS Protection."),x("Web Application Firewall","WAF reads what's inside requests. It isn't built to absorb volume.")]},
      {id:"p5",pair:"DDoS Protection or Web Application Firewall?",s:"A script hidden in a comment form runs in other visitors' browsers.",o:[
        o("Web Application Firewall","That's cross-site scripting, which a WAF blocks."),x("DDoS Protection","DDoS Protection doesn't look inside requests.")]},
      {id:"p6",pair:"Posture management or workload protection?",s:"Finds a storage account that's set to allow public access.",o:[
        o("Posture management (CSPM)","A weak setting with no attack: posture management."),x("Workload protection","Workload protection catches attacks, not settings.")]},
      {id:"p7",pair:"Posture management or workload protection?",s:"Spots a brute-force attack on a server as it happens.",o:[
        o("Workload protection","An attack in progress on a server: the Defender plan for servers raises the alert."),x("Posture management (CSPM)","Posture management finds weak settings, not live attacks.")]},
      {id:"p8",pair:"Secure score or compliance score?",s:"Measures security posture in Defender for Cloud.",o:[
        o("Secure score","Secure score: Defender for Cloud, security posture."),x("Compliance score","Compliance score is in Microsoft Purview and measures progress on regulations.")]},
      {id:"p9",pair:"Secure score or compliance score?",s:"Shows progress toward meeting a regulation in Compliance Manager.",o:[
        o("Compliance score","Compliance Manager in Microsoft Purview: compliance score."),x("Secure score","Secure score is security posture in Defender for Cloud.")]},
      {id:"p10",pair:"Azure Bastion or network security group?",s:"Give administrators RDP access to virtual machines that have no public IP address.",o:[
        o("Azure Bastion","Admin access with no public IP: Bastion."),x("Network security group","A network security group can allow or block RDP, but it doesn't provide a way in without a public IP.")]}]};

  const at=L.sections.findIndex(s=>s.type==="check");
  L.sections.splice(at<0?L.sections.length:at,0,clues,pairs);
  L.sections.unshift(base);
})();
