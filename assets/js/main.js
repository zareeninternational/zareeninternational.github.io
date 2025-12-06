// mobile nav toggle (applies to all pages)
document.querySelectorAll('.nav-toggle').forEach(btn=>{
  btn.addEventListener('click', ()=> {
    const nav = btn.nextElementSibling;
    if(nav) nav.classList.toggle('show');
  });
});

// hero slider (very lightweight)
(function(){
  const slides = document.querySelectorAll('.hero .slide');
  if(!slides || slides.length===0) return;
  let idx = 0;
  // show first present slide only (if hero-2/3 missing they'll be empty but harmless)
  function show(i){
    slides.forEach((s,ii)=> s.style.opacity = (ii===i? '1':'0'));
    slides.forEach((s,ii)=> s.style.transition='opacity 800ms ease');
  }
  show(0);
  setInterval(()=>{
    idx = (idx+1) % slides.length;
    show(idx);
  }, 4500);
})();
