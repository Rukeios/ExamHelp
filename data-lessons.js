// Rukeios Study interactive lessons (pilot: Level 1, Security basics).
// Content only; index.html renders it. A lesson is a list of sections, and each section picks the
// interaction that suits its topic instead of forcing one template on everything:
//   facets  - a few parallel ideas (CIA, Zero Trust principles); learner selects one at a time
//   models  - one table viewed through different options (shared responsibility by cloud model)
//   layers  - an ordered stack; selecting a layer explains it (defense in depth)
//   check   - the independent check: instruction hidden, different scored scenarios
// Every teaching section has a guided scenario. Guided answers are practice with the lesson
// on screen, so they're never saved as attempts and never count toward readiness or unlocks.
// concept: the Pocket Note (data-cn-sc.js) shown and saved for that section.
// careers: "Where this skill is used". Leave null until there's reviewed, sourced content.
(function(){
const ML="https://learn.microsoft.com/en-us/";
window.LESSON_PILOTS={
  1:{
    id:"lesson.sc.1", day:1, v:1, reviewed:"2026-10-01",
    subtitle:"Understand what you're protecting, who protects it, and how.",
    src:[ML+"training/modules/describe-security-concepts-methodologies/",ML+"security/zero-trust/zero-trust-overview"],
    sections:[
      {id:"cia", type:"facets", title:"The CIA triad", lead:"Three core principles describe what security protects.", concept:"sc.cia", careers:null,
       facets:[
        {id:"c", name:"Confidentiality", icon:"eyeoff", say:"Only authorized people can access the information.",
         example:"Payroll files are visible only to approved HR staff.", tags:["Access control","Encryption"]},
        {id:"i", name:"Integrity", icon:"shield", say:"Information isn't changed without authorization, and changes can be detected.",
         example:"Before installing an update, IT compares its hash with the value the vendor published.", tags:["Hashing","Digital signatures"]},
        {id:"a", name:"Availability", icon:"cycle", say:"Systems and data are there when authorized people need them.",
         example:"The clinic's booking site stays online during a traffic flood, and last night's backup is ready if a server fails.", tags:["Backups","Redundancy","DDoS protection"]}],
       practice:{q:"Which principle is at risk?", s:"An employee can open payroll files they don't need for their work.",
        o:[["Confidentiality",true,"Right. People can see data they aren't authorized to see. Nothing was changed or taken offline."],
           ["Integrity",false,"Integrity is about unauthorized changes. Here nothing was altered; the problem is who can see the files."],
           ["Availability",false,"Availability is about access when needed. The files are available; they're available to too many people."]]}},
      {id:"shared", type:"models", title:"Shared responsibility", lead:"In the cloud, you and the provider split the security work. The split depends on the service model.", concept:"sc.shared-resp", careers:null,
       models:[
        {id:"onprem", name:"On-premises", say:"You own everything, from the building to the data.", example:"A hospital runs its own server room, so it also controls the door and replaces failed disks."},
        {id:"iaas", name:"IaaS", say:"You rent virtual machines. The provider runs the datacenter, network hardware and hosts; you manage the operating system and everything above it.", example:"A team patches its own Windows Server VMs running in Azure."},
        {id:"paas", name:"PaaS", say:"The provider also runs the operating system and runtime. You bring your application code, configuration and data.", example:"Developers deploy code to a managed web platform, and the provider patches the servers underneath."},
        {id:"saas", name:"SaaS", say:"The provider runs the whole application. You still own your data, accounts, devices and settings.", example:"A school uses Microsoft 365 but still decides who gets accounts and turns on MFA."}],
       rows:[["Data","you","you","you","you"],["Devices (endpoints)","you","you","you","you"],["Identities and access","you","you","you","you"],["Configuration and settings","you","you","you","you"],
             ["Applications","you","you","you","provider"],["Operating system and runtime","you","you","provider","provider"],["Physical datacenter, network, hosts","you","provider","provider","provider"]],
       rowsNote:"The first four rows stay yours in every model. For PaaS, \"you\" on Applications means your own code.",
       practice:{q:"Whose job was it to protect that account?", s:"A clinic moves its scheduling system to a SaaS product. An attacker signs in with a nurse's reused password and views appointments.",
        o:[["The clinic",true,"Right. Accounts and identities stay the customer's responsibility in every model, including SaaS. MFA and a password policy were the clinic's to set."],
           ["The SaaS provider",false,"The provider runs the application, but who gets an account and how it's protected stays with the customer."],
           ["The datacenter operator",false,"Physical datacenter security wasn't involved. The attacker used a valid password through the normal sign-in."]]}},
      {id:"did", type:"layers", title:"Defense in depth", lead:"Several layers of protection, so one failure doesn't become a breach. Select a layer to see what it covers.", concept:"sc.defense-in-depth", careers:null,
       layers:[
        {id:"physical", name:"Physical security", say:"Limits who can physically reach the hardware.", example:"Badge readers and a sign-in log for the server room."},
        {id:"identity", name:"Identity and access", say:"Controls who can sign in and what they can reach.", example:"MFA and Conditional Access for every staff account."},
        {id:"perimeter", name:"Perimeter", say:"Protects the edge of the network from large-scale attacks.", example:"DDoS protection in front of the public website."},
        {id:"network", name:"Network", say:"Limits communication between resources.", example:"Segmentation, so the guest Wi-Fi can't reach the finance servers."},
        {id:"compute", name:"Compute", say:"Secures the machines that run workloads.", example:"Patching VMs and closing remote-desktop ports to the internet."},
        {id:"application", name:"Application", say:"Keeps applications free of exploitable weaknesses.", example:"Fixing an injection flaw before the new portal goes live."},
        {id:"data", name:"Data", say:"Controls access to the data itself and protects it with encryption.", example:"Encrypting laptop drives so a stolen laptop doesn't expose files."}],
       practice:{q:"Which layer still protects the files?", s:"A school already has a strong firewall. A teacher's laptop with exam files on it is stolen from a car.",
        o:[["Data: drive encryption",true,"Right. The laptop left every outer layer behind. Encryption on the drive is the control that still stands between the thief and the files."],
           ["Perimeter: the firewall",false,"The firewall guards the school's network edge. A stolen laptop is outside it entirely."],
           ["Network: segmentation",false,"Segmentation limits traffic between systems on the network. The thief has the device itself, not network access."]]}},
      {id:"zt", type:"facets", title:"Zero Trust", lead:"Never assume a request is safe because of where it comes from. Microsoft describes three guiding principles.", concept:"sc.zero-trust", careers:null,
       facets:[
        {id:"verify", name:"Verify explicitly", icon:"usercheck", say:"Authenticate and authorize every request using all available signals: identity, location, device health and risk.",
         example:"A sign-in from an unfamiliar country on an unmanaged laptop gets an MFA prompt and limited access.", tags:["Conditional Access","MFA"]},
        {id:"least", name:"Least privilege", icon:"key", say:"Give just enough access, for just as long as it's needed.",
         example:"Help desk staff get a password-reset role, and admin rights are switched on only when needed.", tags:["Role-based access","Just-in-time access"]},
        {id:"breach", name:"Assume breach", icon:"breach", say:"Design as if an attacker is already inside: segment access, encrypt, and watch for unusual activity.",
         example:"The billing system sits in its own network segment, so one compromised laptop can't reach it.", tags:["Segmentation","Monitoring"]}],
       practice:{q:"Under Zero Trust, what changes?", s:"A contractor signs in from the office network. The old setup trusted anything on that network, so the contractor could reach every file share.",
        o:[["Each request is checked on its own merits",true,"Right. Being on the office network no longer grants trust. Identity, device and need decide access, which also limits the contractor to the shares they need."],
           ["Office network traffic gets more trust",false,"That's the old perimeter model Zero Trust replaces. Location alone is never enough."],
           ["Contractors are blocked from everything",false,"Zero Trust isn't a blanket ban. It grants the access that's needed and verified, nothing more."]]}},
      {id:"check", type:"check", title:"Check yourself", lead:"Now try it without the lesson in view. These scenarios are new, and they count as scored practice."}
    ]
  }
};
})();
