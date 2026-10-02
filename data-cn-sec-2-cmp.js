(function(){
const REV="2026-10-02";
const CERT="https://www.comptia.org/en-us/certifications/security/";
const U=slug=>"https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/"+slug+"-sy0-701/";
const K=(id,certs,title,sides,distinction,clue,apply,notIt,concepts,src,pendingConcepts)=>({
  id:"cmp."+id,
  certs,
  title,
  sides:sides.map(s=>({name:s[0],is:s[1]})),
  distinction,
  clue,
  apply,
  notIt,
  concepts,
  pendingConcepts:pendingConcepts||[],
  src,
  reviewed:REV,
  status:"drafted",
  v:1
});

const comparisons=[
K("containers-vms",["sec"],"Containers vs virtual machines",
  [["Containers","Package apps and share the host kernel."],["Virtual machines","Run full guest operating systems on a hypervisor."]],
  "Containers start faster and use fewer resources, but they share more of the host. VMs consume more overhead, but give stronger isolation and guest OS choice.",
  "Shared kernel points to containers; separate guest operating systems point to VMs.",
  "A software team wants the fastest way to deploy many copies of the same web service, but another team needs an older guest OS for one legacy application.",
  ["The web service fits containers because density and startup speed matter more than separate guest operating systems.","The legacy app fits a VM because it needs its own full OS, which containers do not provide."],
  ["sec.containers-virtualization"],
  [U("other-infrastructure-concepts"),U("infrastructure-considerations"),CERT]),
K("firewall-ids-ips",["sec"],"Firewall vs IDS vs IPS",
  [["Firewall","Applies traffic policy and permits or denies flows."],["IDS","Observes traffic and alerts on suspicious activity."],["IPS","Sits inline and can block suspicious traffic automatically."]],
  "A firewall enforces baseline connectivity rules. IDS adds visibility without blocking. IPS adds blocking power, but false positives can affect availability.",
  "Allow or deny by policy points to firewall; alert only points to IDS; inline blocking points to IPS.",
  "A hospital must restrict which ports a vendor can use, watch for exploit attempts, and maybe block them later after tuning.",
  ["Restricting allowed ports is the firewall's job; IDS and IPS do not replace baseline access policy.","Watching first without disruption fits IDS because it alerts without changing traffic.","Automatic blocking fits IPS, but only after tuning because an inline false positive could drop legitimate sessions."],
  ["sec.firewall-types","sec.ids-ips"],
  [U("firewall-types"),U("intrusion-prevention"),U("secure-infrastructures"),CERT]),
K("tokenization-masking",["sec"],"Tokenization vs masking",
  [["Tokenization","Replaces a sensitive value with a mapped surrogate."],["Masking","Hides part of a sensitive value from view."]],
  "Tokenization removes the real value from the system that stores or processes the token. Masking still leaves the original value in place somewhere, but shows only part of it to the viewer.",
  "A substitute value points to tokenization; a partly hidden display points to masking.",
  "A support center should read only the last four digits of a payment card, while a reporting system should store no live card numbers at all.",
  ["The support center needs masking because the real number still exists, but the operator should see only part of it.","The reporting system needs tokenization because the live number should be replaced with a surrogate outside the vault."],
  ["sec.data-protection"],
  [U("protecting-data"),CERT]),
K("hot-warm-cold-sites",["sec"],"Hot vs warm vs cold sites",
  [["Hot site","Fully equipped and ready with the shortest recovery time."],["Warm site","Partially ready and usually needs data restore or some activation work."],["Cold site","Provides space and utilities, but needs the most setup after a disaster."]],
  "As recovery speed rises, standby cost usually rises too. Hot sites buy time; cold sites save money.",
  "Minutes to recover suggests hot; hours to days suggests warm; days to weeks suggests cold.",
  "A trading firm must recover almost immediately, a warehouse can wait several hours, and a back-office archive can stay down for days to save money.",
  ["The trading firm fits a hot site because downtime tolerance is very short.","The warehouse fits a warm site because some recovery work is acceptable.","The archive fits a cold site because cost matters more than fast recovery."],
  ["sec.resilience-sites","sec.rto","sec.rpo"],
  [U("resiliency"),U("capacity-planning"),U("power-resiliency"),CERT])
];

(window.CN_PACKS=window.CN_PACKS||[]).push({
  id:"sec-2-cmp",
  label:"Security+ batch 2 comparisons",
  version:"2.3.1",
  reviewed:REV,
  comparisons
});
})();
