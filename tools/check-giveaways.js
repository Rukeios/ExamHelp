#!/usr/bin/env node
// Giveaway audit for exam content. Flags patterns that let a learner pick the answer without
// knowing the topic: correct option noticeably longer, absolutes only in wrong options, wrong
// options that don't share the situation's wording, lopsided Yes/No, and the same for multi/dd.
//   node tools/check-giveaways.js [sec|sc|all] [--ids]   exit 1 when a limit is exceeded
const fs=require("fs"), path=require("path");
const ROOT=path.resolve(__dirname,"..");
global.window=global;
const files=fs.readdirSync(ROOT).filter(f=>/^data-(cn|xf)-/.test(f)||/^data-lessons/.test(f)).sort();
["data.js",...files].forEach(f=>{ try{ (0,eval)(fs.readFileSync(path.join(ROOT,f),"utf8")); }catch(e){ console.error("load "+f+": "+e.message); } });
const cert=process.argv.find(a=>/^(sec|sc|all)$/.test(a))||"sec", showIds=process.argv.includes("--ids");
const want=c=>cert==="all"||c===cert;
const stop=new Set("the a an of to and in for is on at by with that this it as be are was from or which what who how their its your than into not can will most best first next been has have they them then when while would should could does did".split(" "));
const toks=s=>(String(s).toLowerCase().match(/[a-z0-9\-\+]{4,}/g)||[]).filter(w=>!stop.has(w));
const ABS=/\b(always|never|only|all|every|any|none|must|entirely|completely|cannot|guarantee[sd]?|eliminates?|eliminating|no need|ensures?)\b/i;
const flags={}, add=(k,id)=>{ (flags[k]=flags[k]||[]).push(id); };
let nS=0,nLongest=0;
const scen=(window.CN_PACKS||[]).filter(p=>want(p.cert)).flatMap(p=>p.scenarios||[]);
scen.forEach(x=>{
  nS++; const L=x.o.map(o=>o.length), maxD=Math.max(...L.slice(1));
  if(L[0]>maxD) nLongest++;
  if(L[0]>maxD+12) add("scenario: correct option much longer than every wrong one",x.id);
  if(x.o.slice(1).some(o=>ABS.test(o))&&!ABS.test(x.o[0])) add("scenario: absolute word only in wrong options",x.id);
  const st=new Set(toks(x.s+" "+x.q)), ov=x.o.map(o=>toks(o).filter(w=>st.has(w)).length);
  if(ov[0]>=2&&ov[0]>Math.max(...ov.slice(1))) add("scenario: correct option echoes the situation more than any wrong one",x.id);
});
let yn=0,ynTrue=0;
const xf=(window.XF_PACKS||[]).filter(p=>want(p.cert)).flatMap(p=>p.items||[]);
xf.forEach(x=>{
  if(x.type==="yn"){
    const t=x.rows.filter(r=>r[1]).length; yn+=x.rows.length; ynTrue+=t;
    if(t===x.rows.length||t===0) add("yn: every row has the same answer",x.id);
    if(x.rows.some(r=>!r[1]&&ABS.test(r[0]))&&!x.rows.some(r=>r[1]&&ABS.test(r[0]))) add("yn: absolute word marks the false row",x.id);
  } else if(x.type==="multi"){
    const c=x.o.slice(0,x.n).reduce((s,o)=>s+o.length,0)/x.n, w=x.o.slice(x.n).reduce((s,o)=>s+o.length,0)/(x.o.length-x.n);
    if(c>w*1.25) add("multi: correct options noticeably longer",x.id);
  } else if(x.type==="dd"){
    x.blanks.forEach((b,i)=>{ if(b[0].length>Math.max(...b.slice(1).map(o=>o.length))+8) add("dd: correct choice much longer",x.id+"#"+(i+1)); });
  }
});
const longPct=nS?Math.round(nLongest/nS*100):0, truePct=yn?Math.round(ynTrue/yn*100):50;
console.log(`${cert}: ${nS} scenarios (correct is longest in ${longPct}%), ${xf.length} exam-style items, Yes/No rows ${truePct}% true`);
let bad=0;
Object.entries(flags).forEach(([k,ids])=>{ bad+=ids.length; console.log(`  ${ids.length}  ${k}`+(showIds?"\n      "+ids.join(", "):"")); });
let over=false;
if(longPct>28){ console.log(`  LIMIT: correct option is the longest in ${longPct}% of scenarios (max 28%)`); over=true; }
if(yn&&(truePct<40||truePct>60)){ console.log(`  LIMIT: Yes/No rows are ${truePct}% true (want 40-60%)`); over=true; }
if(bad) over=true;
if(!over) console.log("  no giveaway flags");
process.exit(over?1:0);
