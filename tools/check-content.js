#!/usr/bin/env node
// CertificationNation content check + coverage manifest.
//   node tools/check-content.js            validate, print summary, exit 1 on blocking problems
//   node tools/check-content.js --manifest also write COVERAGE.md
// Loads the same data files the app loads, so it checks what learners see.
const fs=require("fs"), path=require("path");
const ROOT=path.resolve(__dirname,"..");
global.window=global;
["data.js","data-cn-sc.js","data-cn-compare.js","data-cn-sc-scenarios.js","data-cn-sc-checks.js","data-xf-sc.js","data-links.js"].forEach(f=>{
  const p=path.join(ROOT,f); if(fs.existsSync(p)) eval(fs.readFileSync(p,"utf8"));
});
const packs=window.CN_PACKS||[], fail=[], warn=[];
const concepts=packs.flatMap(p=>p.concepts||[]), comparisons=packs.flatMap(p=>p.comparisons||[]), scenarios=packs.flatMap(p=>p.scenarios||[]);
const ids=new Map();
const reg=(id,what)=>{ if(ids.has(id)) fail.push(`duplicate id ${id} (${what} and ${ids.get(id)})`); ids.set(id,what); };
const words=s=>String(s||"").trim().split(/\s+/).filter(Boolean).length;
const DATE=/^\d{4}-\d{2}-\d{2}$/;
const days=new Map((window.DAYS||[]).map(d=>[d.d,d]));

concepts.forEach(c=>{
  reg(c.id,"concept");
  const where="concept "+c.id;
  if(!days.has(c.day)) fail.push(`${where}: day ${c.day} not in DAYS`);
  else if(days.get(c.day).track!==c.cert) fail.push(`${where}: day ${c.day} belongs to ${days.get(c.day).track}`);
  if(!c.title) fail.push(`${where}: no title`);
  if(!Array.isArray(c.lines)||c.lines.length<3||c.lines.length>5) fail.push(`${where}: ${c.lines&&c.lines.length} lines (want 3-5)`);
  const w=(c.lines||[]).reduce((n,l)=>n+words(l),0); if(w>60) fail.push(`${where}: ${w} words in the note (max 60)`);
  if(c.clue&&words(c.clue)>22) warn.push(`${where}: clue is ${words(c.clue)} words`);
  if(!c.cards||c.cards.length<2) fail.push(`${where}: fewer than 2 recall cards`);
  (c.cards||[]).forEach(k=>{ reg(k.id,"card"); if(!["term","use"].includes(k.kind)) fail.push(`card ${k.id}: kind ${k.kind}`); if(!k.q||!k.a) fail.push(`card ${k.id}: missing q or a`); if(words(k.a)>30) warn.push(`card ${k.id}: answer is ${words(k.a)} words`); });
  if(!c.src||!c.src.length) fail.push(`${where}: no source link`);
  (c.src||[]).forEach(u=>{ if(!/^https:\/\//.test(u)) fail.push(`${where}: source "${u}" is not a URL`); });
  if(!DATE.test(c.reviewed||"")) fail.push(`${where}: reviewed date missing`);
  if(!c.obj||!c.objTitle) fail.push(`${where}: objective missing`);
});
const conceptIds=new Set(concepts.map(c=>c.id));
comparisons.forEach(k=>{
  reg(k.id,"comparison");
  const where="comparison "+k.id;
  if(!k.sides||k.sides.length<2||k.sides.length>3) fail.push(`${where}: needs 2-3 sides`);
  if(!k.distinction||!k.clue||!k.apply) fail.push(`${where}: needs distinction, clue and apply`);
  if(!Array.isArray(k.notIt)||k.notIt.length<k.sides.length) fail.push(`${where}: notIt should explain each side`);
  (k.concepts||[]).forEach(id=>{ if(!conceptIds.has(id)) fail.push(`${where}: concept ${id} not found`); });
  (k.pendingConcepts||[]).forEach(id=>warn.push(`${where}: waiting on concept ${id} (future batch)`));
});
const cmpIds=new Set(comparisons.map(k=>k.id));
let longest=0;
scenarios.forEach(x=>{
  reg(x.id,"scenario");
  const where="scenario "+x.id;
  if(!conceptIds.has(x.concept)) fail.push(`${where}: concept ${x.concept} not found`);
  (x.concepts||[]).forEach(id=>{ if(!conceptIds.has(id)) fail.push(`${where}: concept ${id} not found`); });
  if(x.cmp&&!cmpIds.has(x.cmp)) fail.push(`${where}: comparison ${x.cmp} not found`);
  if(!["identify","next","constraints"].includes(x.type)) fail.push(`${where}: type ${x.type}`);
  if(!Array.isArray(x.o)||x.o.length!==4) fail.push(`${where}: needs 4 options`);
  else {
    if(new Set(x.o.map(o=>o.toLowerCase().trim())).size!==4) fail.push(`${where}: repeated option`);
    const L=x.o.map(o=>o.length), others=Math.max(...L.slice(1));
    if(L[0]>others) longest++;
    if(L[0]>others+25) fail.push(`${where}: correct option is ${L[0]-others} characters longer than every distractor`);
    if(/\b(all|none) of the above\b/i.test(x.o.join(" "))) fail.push(`${where}: all/none of the above`);
  }
  if(!Array.isArray(x.no)||x.no.length!==3) fail.push(`${where}: needs 3 distractor reasons`);
  const sent=(x.s||"").split(/(?<=[.!?])\s+/).filter(Boolean).length;
  if(sent<2||sent>4) warn.push(`${where}: situation has ${sent} sentences`);
  if(!x.q||!x.why||!x.take) fail.push(`${where}: needs q, why and take`);
  if(words(x.take)>22) warn.push(`${where}: takeaway is ${words(x.take)} words`);
  if(!days.has(x.day)) fail.push(`${where}: day ${x.day} not in DAYS`);
});
const longPct=scenarios.length?Math.round(longest/scenarios.length*100):0;
if(longPct>40) fail.push(`correct option is the longest in ${longPct}% of scenarios (limit 40%)`);

// ---------- coverage ----------
const lessonDays=(window.DAYS||[]).filter(d=>d.pts&&!d.kind);
const byDay=d=>concepts.filter(c=>c.day===d);
const rows=[];
lessonDays.forEach(d=>{
  const cs=byDay(d.d);
  const sc=scenarios.filter(x=>x.day===d.d), types=new Set(sc.map(x=>x.type));
  const cmp=comparisons.filter(k=>(k.concepts||[]).some(id=>cs.some(c=>c.id===id)));
  rows.push({d,cs,notes:cs.length,cards:cs.reduce((n,c)=>n+(c.cards||[]).length,0),cmp:cmp.length,scen:sc.length,types,reviewed:cs.length&&cs.every(c=>c.status==="source-checked")});
});
const cert=t=>rows.filter(r=>r.d.track===t);
function manifest(){
  const L=[];
  L.push("# Rukeios Study content coverage","","Generated by `node tools/check-content.js --manifest`. Do not edit by hand.","");
  L.push(`Totals: **${concepts.length}** concepts with Pocket Notes, **${concepts.reduce((n,c)=>n+c.cards.length,0)}** recall cards, **${comparisons.length}** comparison cards, **${scenarios.length}** Real-World scenarios.`,"");
  L.push("\"Review\" means every concept was checked against its linked Microsoft Learn or CompTIA source by an automated review pass on the reviewed date. It is not a human subject-matter-expert review, which is still to do for all content.","");
  [["sc","SC-900"],["sec","Security+"]].forEach(([t,name])=>{
    const R=cert(t), done=R.filter(r=>r.notes).length;
    L.push(`## ${name}: ${done} of ${R.length} lessons have content`,"");
    L.push("| Level | Lesson | Notes | Recall cards | Comparisons | Scenarios (identify / next / constraints) | Review |","|---|---|---|---|---|---|---|");
    R.forEach(r=>{
      const ty=["identify","next","constraints"].map(k=>scenarios.filter(x=>x.day===r.d.d&&x.type===k).length).join(" / ");
      L.push(`| ${r.d.d} | ${r.d.title} | ${r.notes||"—"} | ${r.cards||"—"} | ${r.cmp||"—"} | ${r.scen?r.scen+" ("+ty+")":"—"} | ${r.notes?(r.reviewed?"source-checked":"partial"):"not started"} |`);
    });
    L.push("");
  });
  L.push("## Concepts without a scenario","");
  const withScen=new Set(scenarios.flatMap(x=>x.concepts||[x.concept]));
  const miss=concepts.filter(c=>!withScen.has(c.id));
  L.push(miss.length?miss.map(c=>`- ${c.id} (${c.title})`).join("\n"):"None.","");
  L.push("## Comparisons waiting on future batches","");
  const pend=comparisons.filter(k=>(k.pendingConcepts||[]).length);
  L.push(pend.length?pend.map(k=>`- ${k.id}: needs ${k.pendingConcepts.join(", ")}`).join("\n"):"None.","");
  L.push("## Not started","","- Security+ (levels 13–30): no Pocket Notes, recall cards or Real-World scenarios yet. Planned as batches sec-1 (domains 1–2), sec-2 (domain 3), sec-3 (domain 4), sec-4 (domain 5).","- Review and exam-day levels have no concepts of their own by design; they draw on the lessons they review.","");
  fs.writeFileSync(path.join(ROOT,"COVERAGE.md"),L.join("\n"));
}
console.log(`concepts ${concepts.length} · cards ${concepts.reduce((n,c)=>n+(c.cards||[]).length,0)} · comparisons ${comparisons.length} · scenarios ${scenarios.length} · correct-is-longest ${longPct}%`);
["sc","sec"].forEach(t=>{ const R=cert(t); console.log(`${t}: ${R.filter(r=>r.notes).length}/${R.length} lessons have notes, ${R.filter(r=>r.scen).length}/${R.length} have scenarios`); });
if(warn.length) console.log(warn.length+" warning(s):\n  "+warn.slice(0,30).join("\n  "));

// ---- exam-style questions (v2.3.0) ----
(window.XF_PACKS||[]).forEach(p=>{
  if(!DATE.test(p.reviewed||"")) fail.push(`xf pack ${p.id}: no review date`);
  if(!(p.src||[]).length) fail.push(`xf pack ${p.id}: no sources`);
  (p.items||[]).forEach(x=>{
    reg(x.id,"exam-style"); const where="exam-style "+x.id;
    if(!days.has(x.day)) fail.push(`${where}: day ${x.day} not in DAYS`); else if(days.get(x.day).track!==p.cert) fail.push(`${where}: day belongs to ${days.get(x.day).track}`);
    if(!x.why) fail.push(`${where}: no explanation`);
    if(x.type==="yn"){ if(!Array.isArray(x.rows)||x.rows.length<3) fail.push(`${where}: needs 3+ statements`);
      (x.rows||[]).forEach((r,i)=>{ if(typeof r[0]!=="string"||typeof r[1]!=="boolean"||!r[2]) fail.push(`${where}: row ${i} is malformed`); }); }
    else if(x.type==="dd"){ const marks=(x.text.match(/\[\d\]/g)||[]).length; if(marks!==(x.blanks||[]).length||!marks) fail.push(`${where}: ${marks} blanks in text, ${(x.blanks||[]).length} in data`);
      (x.blanks||[]).forEach((b,i)=>{ if(b.length<3||new Set(b).size!==b.length) fail.push(`${where}: blank ${i+1} needs 3 distinct options`); }); }
    else if(x.type==="multi"){ if(!(x.n>=2&&x.o&&x.o.length>=x.n+2)||new Set(x.o).size!==x.o.length) fail.push(`${where}: needs n>=2 and at least n+2 distinct options`); if(!x.q) fail.push(`${where}: no question`); }
    else if(x.type==="match"){ const rights=(x.pairs||[]).map(q=>q[1]).concat(x.extra||[]); if((x.pairs||[]).length<3||new Set(rights).size!==rights.length) fail.push(`${where}: needs 3+ pairs with distinct options`); if(!x.q) fail.push(`${where}: no question`); }
    else fail.push(`${where}: unknown type ${x.type}`);
  });
});
// ---- course links (v2.3.0) ----
Object.entries(window.COURSE_LINKS||{}).forEach(([d,links])=>{
  if(!days.has(+d)) fail.push(`course links: level ${d} not in DAYS`);
  links.forEach(l=>{ if(!l.title||!/^https:\/\/(learn\.microsoft\.com|www\.professormesser\.com\/security-plus\/sy0-701|www\.comptia\.org|partners\.comptia\.org)\//.test(l.url||"")) fail.push(`course links: level ${d} has a bad link (${l.url})`); });
});
if(window.COURSE_LINKS&&!DATE.test(window.COURSE_LINKS_CHECKED||"")) fail.push("course links: no checked date");
if(window.COURSE_LINKS&&!DATE.test(window.COURSE_LINKS_SEC_CHECKED||"")) fail.push("course links: no Security+ checked date");
if(fail.length){ console.log(fail.length+" BLOCKING:\n  "+fail.join("\n  ")); }
else console.log("all blocking checks passed");
if(process.argv.includes("--manifest")) manifest();
process.exit(fail.length?1:0);
