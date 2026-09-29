/* Dependency-free optional visual effects. Call result effects AFTER real grading. */
(() => {
  'use strict';
  if (window.ExamHelpFX) return;
  let enabled = true;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const live = new Set();
  const running = new WeakMap();
  function allowed() { return enabled && !reduced.matches; }
  function clear() { for (const item of [...live]) item.cancel ? item.cancel() : item.remove(); live.clear(); }
  reduced.addEventListener('change', () => { if(reduced.matches) clear(); });
  function animate(target, frames, duration) {
    if (!allowed() || !target || !target.animate) return;
    running.get(target)?.cancel();
    const a = target.animate(frames, {duration, easing:'cubic-bezier(.2,.7,.2,1)'});
    running.set(target,a); live.add(a);
    a.finished.catch(()=>{}).finally(()=>{ live.delete(a); if(running.get(target)===a) running.delete(target); });
  }
  function ring(target, event) {
    if(!allowed() || !target || target.disabled || target.getAttribute('aria-disabled')==='true') return;
    const r=target.getBoundingClientRect(), dot=document.createElement('span');
    dot.className='eh-fx-ring'; dot.setAttribute('aria-hidden','true');
    dot.style.left=((event?.detail ? event.clientX : r.left+r.width/2))+'px';
    dot.style.top=((event?.detail ? event.clientY : r.top+r.height/2))+'px';
    dot.style.setProperty('--eh-ring-color',getComputedStyle(target).getPropertyValue('--eh-accent').trim()||'#74d7e5');
    document.body.appendChild(dot); live.add(dot);
    setTimeout(()=>{dot.remove();live.delete(dot);},450);
  }
  document.addEventListener('click', e=>{const target=e.target.closest?.('[data-eh-click]'); if(target) ring(target,e);});
  window.ExamHelpFX = Object.freeze({
    setEnabled(value) { enabled=Boolean(value); if(!enabled) clear(); },
    correct(target) { animate(target,[{boxShadow:'0 0 0 0 #74d9ad00'},{boxShadow:'0 0 0 4px #74d9ad99',offset:.3},{boxShadow:'0 0 0 0 #74d9ad00'}],420); },
    incorrect(target) { animate(target,[{outline:'2px solid #efad8000'},{outline:'2px solid #efad80',offset:.3},{outline:'2px solid #efad8000'}],380); },
    panel(target) { animate(target,[{opacity:.65,transform:'translateY(7px)'},{opacity:1,transform:'translateY(0)'}],200); },
    challenge(target) { animate(target,[{filter:'brightness(1)',transform:'scale(1)'},{filter:'brightness(1.15)',transform:'scale(1.025)',offset:.4},{filter:'brightness(1)',transform:'scale(1)'}],650); },
    victory(target) { animate(target,[{boxShadow:'0 0 0 0 #edb96a00',transform:'scale(1)'},{boxShadow:'0 0 32px 4px #edb96a66',transform:'scale(1.015)',offset:.35},{boxShadow:'0 0 0 0 #edb96a00',transform:'scale(1)'}],850); }
  });
})();
