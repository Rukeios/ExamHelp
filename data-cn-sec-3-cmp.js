(function(){
const REV="2026-10-02";
const PM="https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/";
const K=function(id,certs,title,sides,distinction,clue,apply,notIt,concepts,src){
  return {
    id:"cmp."+id,
    certs:certs,
    title:title,
    sides:sides.map(function(s){ return {name:s[0],is:s[1]}; }),
    distinction:distinction,
    clue:clue,
    apply:apply,
    notIt:notIt,
    concepts:concepts,
    src:src,
    reviewed:REV,
    status:"drafted",
    v:1
  };
};
const V=function(slug){ return PM+slug+"-sy0-701/"; };

const comparisons=[
K("sast-dast",["sec"],"SAST vs DAST",
  [["SAST","Finds issues by reviewing code or binaries without running the app."],["DAST","Finds issues by testing the running application from the outside."]],
  "SAST sees internal code paths before deployment. DAST sees runtime behavior, routing, and exposed responses after deployment.",
  "If the app is executing during the test, think DAST. If the scanner is reading code, think SAST.",
  "A startup wants developers to catch risky functions in pull requests, and later wants security to probe the staging site for runtime flaws.",
  ["Pull-request analysis is SAST because the code is inspected before execution.","Staging-site probing is DAST because the running app is being tested through its exposed interface."],
  ["sec.application-security-controls"],
  [V("application-security")]),
K("cve-cvss",["sec"],"CVE vs CVSS",
  [["CVE","The public identifier for a known vulnerability."],["CVSS","The severity scoring system used to rate a vulnerability."]],
  "CVE names the flaw so everyone refers to the same issue. CVSS helps decide how urgently it should be handled.",
  "If the prompt asks for the standardized 0-10 severity score, the answer is CVSS, not CVE.",
  "An analyst must brief leadership on which patched flaws can wait for the next window and which need emergency change review.",
  ["The analyst uses CVSS to rank urgency because it measures severity, not identity.","The analyst still references the CVE so everyone knows exactly which flaw is being discussed."],
  ["sec.vulnerability-management-cycle"],
  [V("analyzing-vulnerabilities"),V("vulnerability-remediation")]),
K("edr-xdr",["sec"],"EDR vs XDR",
  [["EDR","Detects and responds mainly on the endpoint itself."],["XDR","Correlates detection and response across multiple security layers."]],
  "EDR is host-focused. XDR combines endpoint signals with email, identity, cloud, or network telemetry for broader context.",
  "If the question expands beyond the endpoint into multiple toolsets, XDR is the better fit.",
  "A hospital wants malware containment on laptops today, and later wants one incident to connect a mailbox alert, a sign-in anomaly, and the laptop infection.",
  ["Laptop containment alone fits EDR because the endpoint is the scope.","Cross-tool correlation fits XDR because it links multiple control planes into one investigation."],
  ["sec.email-and-endpoint-detection"],
  [V("endpoint-security"),V("email-security")]),
K("saml-oauth-oidc",["sec"],"SAML vs OAuth vs OpenID Connect",
  [["SAML","Federated web SSO using signed assertions."],["OAuth","Delegated authorization using access tokens."],["OpenID Connect","Authentication layer that adds identity on top of OAuth."]],
  "SAML commonly handles browser SSO to enterprise apps. OAuth lets an app access something on the user's behalf. OpenID Connect confirms who the user is in modern token-based flows.",
  "Calendar access without a password points to OAuth. 'Who is the user?' on top of OAuth points to OpenID Connect. Enterprise browser SSO often points to SAML.",
  "A vendor needs users to sign in to a portal, and a separate mobile app needs limited access to their mail without storing the password.",
  ["SAML fits the portal when the problem is browser-based enterprise sign-in rather than API authorization.","OAuth fits the mail access because the mobile app needs delegated authorization, not the user's password.","OpenID Connect would fit if the app also needed standardized identity claims about who signed in, not just mail access."],
  ["sec.sso-and-federation","sec.federation-protocols"],
  [V("identity-and-access-management")])
];

(window.CN_PACKS=window.CN_PACKS||[]).push({
  id:"sec-3-cmp",
  cert:"sec",
  label:"Security+ batch 3 comparisons",
  version:"2.3.1",
  reviewed:REV,
  comparisons:comparisons
});
})();
