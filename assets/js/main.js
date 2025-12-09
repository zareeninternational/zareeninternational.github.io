// main.js: small menu toggle and year
document.addEventListener('DOMContentLoaded', function(){
  // set copyright year
  const y = new Date().getFullYear();
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = y;

  // nav toggle
  const navToggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('nav');
  navToggle.addEventListener('click', function(){
    if(nav.style.display === 'flex') {
      nav.style.display = 'none';
    } else {
      nav.style.display = 'flex';
      nav.style.flexDirection = 'column';
      nav.style.position = 'absolute';
      nav.style.right = '20px';
      nav.style.top = '68px';
      nav.style.background = 'var(--blue-900)';
      nav.style.padding = '10px';
      nav.style.borderRadius = '6px';
    }
  });

  // close nav when clicking a link (mobile)
  document.querySelectorAll('#nav a').forEach(a=> a.addEventListener('click', ()=>{
    if(window.innerWidth < 980) nav.style.display = 'none';
  }));
});
