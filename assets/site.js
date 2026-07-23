// mobile menu close on link click
document.querySelectorAll('.mobile-menu a').forEach(a=>a.addEventListener('click',()=>{
  const mmenu = document.getElementById('mmenu');
  if(mmenu) mmenu.classList.remove('open');
}));

// mobile menu burger toggle
const burgerBtn = document.getElementById('burgerBtn');
if(burgerBtn){
  burgerBtn.addEventListener('click', ()=>{
    document.getElementById('mmenu').classList.toggle('open');
  });
}

// desktop nav dropdown (Areas)
document.querySelectorAll('.nav-dropdown').forEach(dd=>{
  const btn = dd.querySelector('.nav-dropdown-btn');
  if(!btn) return;
  btn.addEventListener('click', (e)=>{
    e.stopPropagation();
    const isOpen = dd.classList.contains('open');
    document.querySelectorAll('.nav-dropdown.open').forEach(o=>o.classList.remove('open'));
    if(!isOpen) dd.classList.add('open');
    btn.setAttribute('aria-expanded', String(!isOpen));
  });
});
document.addEventListener('click', ()=>{
  document.querySelectorAll('.nav-dropdown.open').forEach(o=>{
    o.classList.remove('open');
    const btn = o.querySelector('.nav-dropdown-btn');
    if(btn) btn.setAttribute('aria-expanded','false');
  });
});
document.addEventListener('keydown', (e)=>{
  if(e.key === 'Escape'){
    document.querySelectorAll('.nav-dropdown.open').forEach(o=>o.classList.remove('open'));
  }
});

// before/after drag-to-reveal slider
(function(){
  const slider = document.getElementById('compareSlider');
  const beforeLayer = document.getElementById('beforeLayer');
  const handle = document.getElementById('compareHandle');
  const handleBtn = document.getElementById('compareHandleBtn');
  if(!slider || !beforeLayer || !handle || !handleBtn) return;

  function setPct(pct){
    pct = Math.min(100, Math.max(0, pct));
    beforeLayer.style.clipPath = `inset(0 ${100 - pct}% 0 0)`;
    handle.style.left = pct + '%';
    handleBtn.setAttribute('aria-valuenow', Math.round(pct));
  }

  function pctFromClientX(clientX){
    const rect = slider.getBoundingClientRect();
    return ((clientX - rect.left) / rect.width) * 100;
  }

  let dragging = false;
  function onPointerMove(e){
    if(!dragging) return;
    setPct(pctFromClientX(e.clientX));
  }
  function stopDrag(){
    dragging = false;
    window.removeEventListener('pointermove', onPointerMove);
    window.removeEventListener('pointerup', stopDrag);
  }
  function startDrag(e){
    dragging = true;
    setPct(pctFromClientX(e.clientX));
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', stopDrag);
    e.preventDefault();
  }
  slider.addEventListener('pointerdown', startDrag);
  handleBtn.addEventListener('keydown', (e)=>{
    const current = parseFloat(handleBtn.getAttribute('aria-valuenow')) || 50;
    if(e.key === 'ArrowLeft'){ setPct(current - 5); e.preventDefault(); }
    if(e.key === 'ArrowRight'){ setPct(current + 5); e.preventDefault(); }
  });
  setPct(50);
})();

// pricing tabs
document.querySelectorAll('.tab-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
    document.querySelectorAll('.price-panel').forEach(p=>p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.tab).classList.add('active');
  });
});

// paw trail generator: draws a vertical dotted paw-print path down each section
function buildTrail(container, count){
  if(!container) return;
  const h = container.parentElement.offsetHeight || 600;
  const w = container.offsetWidth || 220;
  container.style.height = h + 'px';
  const ns = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(ns,'svg');
  svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
  const amp = w*0.21;
  for(let i=0;i<count;i++){
    const t = i/(count-1);
    const y = 40 + t*(h-80);
    const x = w/2 + Math.sin(t*Math.PI*2.2)*amp;
    const rot = Math.sin(t*Math.PI*2.2)*24;
    const g = document.createElementNS(ns,'g');
    g.setAttribute('class','paw');
    g.setAttribute('transform', `translate(${x},${y}) rotate(${rot}) scale(0.9)`);
    g.innerHTML = `
      <circle cx="0" cy="14" r="9" fill="#14294D"/>
      <circle cx="-11" cy="-2" r="5" fill="#14294D"/>
      <circle cx="0" cy="-9" r="5.5" fill="#14294D"/>
      <circle cx="11" cy="-2" r="5" fill="#14294D"/>
    `;
    svg.appendChild(g);
  }
  container.innerHTML='';
  container.appendChild(svg);
}
let trailObs = null;
function rebuildAllTrails(){
  buildTrail(document.getElementById('trail1'), 5);
  buildTrail(document.getElementById('trail2'), 6);
  buildTrail(document.getElementById('trail3'), 4);
  if(trailObs) trailObs.disconnect();
  trailObs = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('in-view'); });
  }, {threshold:0.4});
  document.querySelectorAll('.paw').forEach(p=>trailObs.observe(p));
}
window.addEventListener('load', rebuildAllTrails);
if(document.fonts && document.fonts.ready){ document.fonts.ready.then(rebuildAllTrails); }
let resizeTimer;
window.addEventListener('resize', ()=>{
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(rebuildAllTrails, 200);
});

// scroll-reveal: fade+rise section heads and card grids into view once
const revealObs = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('in-view');
      revealObs.unobserve(e.target);
    }
  });
}, {threshold:0.15});
document.querySelectorAll('.reveal, .reveal-group').forEach(el=>revealObs.observe(el));

// playful scroll progress bar with a walking paw marker
const fill = document.getElementById('scrollFill');
let ticking = false;
function updateProgress(){
  const doc = document.documentElement;
  const scrollable = doc.scrollHeight - doc.clientHeight;
  const pct = scrollable > 0 ? (doc.scrollTop / scrollable) * 100 : 0;
  if(fill) fill.style.width = Math.min(100, Math.max(0, pct)) + '%';
  ticking = false;
}
window.addEventListener('scroll', ()=>{
  if(!ticking){
    requestAnimationFrame(updateProgress);
    ticking = true;
  }
});
updateProgress();
