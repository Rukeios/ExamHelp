// Course material for each level (v2.3.0): the matching Microsoft Learn modules for SC-900, opened
// and checked on 2026-10-02. Titles are Microsoft's module titles. `focus` names the units in that
// module that match the level. Security+ levels fall back to the Professor Messer course link.
(function(){
const M="https://learn.microsoft.com/en-us/training/modules/", P="https://learn.microsoft.com/en-us/training/paths/";
const mod=(slug,title,focus)=>({title:title,url:M+slug+"/",focus:focus||null,kind:"module"});
const path=(slug,title)=>({title:title,url:P+slug+"/",focus:null,kind:"path"});
window.COURSE_LINKS={
  1:[mod("describe-security-concepts-methodologies","Describe security and compliance concepts","Units on shared responsibility, defense in depth and Zero Trust")],
  2:[mod("describe-security-concepts-methodologies","Describe security and compliance concepts","Units on encryption and hashing, and GRC"),
     mod("describe-identity-principles-concepts","Describe identity concepts")],
  3:[mod("explore-basic-services-identity-types","Describe the function and identity types of Microsoft Entra ID")],
  4:[mod("explore-authentication-capabilities","Describe the authentication capabilities of Microsoft Entra ID")],
  5:[mod("explore-access-management-capabilities","Describe access management capabilities of Microsoft Entra"),
     mod("describe-identity-protection-governance-capabilities","Describe the identity protection and governance capabilities of Microsoft Entra")],
  6:[path("describe-concepts-of-security-compliance-identity","SC-900 part 1: security, compliance, and identity concepts"),
     path("describe-capabilities-of-microsoft-identity-access","SC-900 part 2: Microsoft Entra")],
  7:[mod("describe-basic-security-capabilities-azure","Describe core infrastructure security services in Azure"),
     mod("describe-security-management-capabilities-of-azure","Describe the security management capabilities in Azure")],
  8:[mod("describe-security-capabilities-of-azure-sentinel","Describe security capabilities of Microsoft Sentinel"),
     mod("describe-threat-protection-with-microsoft-365-defender","Describe threat protection with Microsoft Defender XDR")],
  9:[mod("describe-compliance-management-capabilities-microsoft","Describe Microsoft's Service Trust Portal and privacy principles"),
     mod("describe-purview-risk-compliance-governance","Describe the data compliance solutions of Microsoft Purview","Unit on Compliance Manager"),
     mod("describe-purview-data-solutions","Describe the data security solutions of Microsoft Purview","Units on data classification, sensitivity labels and DLP")],
  10:[mod("describe-purview-risk-compliance-governance","Describe the data compliance solutions of Microsoft Purview","Units on communication compliance, eDiscovery, audit, data lifecycle and records"),
      mod("describe-purview-data-solutions","Describe the data security solutions of Microsoft Purview","Unit on insider risk management")],
  11:[path("describe-capabilities-of-microsoft-security-solutions","SC-900 part 3: Microsoft security solutions"),
      path("describe-capabilities-of-microsoft-compliance-solutions","SC-900 part 4: Microsoft Purview and privacy"),
      {title:"SC-900 study guide: skills measured",url:"https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/sc-900",focus:null,kind:"guide"}],
  12:[{title:"SC-900 exam page: free practice assessment and exam sandbox",url:"https://learn.microsoft.com/en-us/credentials/certifications/exams/sc-900/",focus:"Take the practice assessment cold, and try the sandbox to see the question formats",kind:"exam"},
      {title:"SC-900 study guide: skills measured",url:"https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/sc-900",focus:null,kind:"guide"}]
};
window.COURSE_LINKS_CHECKED="2026-10-02";
})();
