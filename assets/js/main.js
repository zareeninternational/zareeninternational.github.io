// main.js - Menu toggle, year injection and simple nav highlight
document.addEventListener('DOMContentLoaded', function() {
  // year for footers
  const y = new Date().getFullYear();
  ['year','year2','year3','year4'].forEach(id=>{
    const el = document.getElementById(id);
    if(el) el.textContent = y;
  });

  // menu toggle for small screens
  function toggleMenu() {
    const nav = document.getElementById('navMenu');
    if (nav) nav.classList.toggle('open');
  }
  const toggles = document.querySelectorAll('.menu-toggle');
  toggles.forEach(btn => btn.addEventListener('click', function() {
    const nav = document.querySelector('.main-nav');
    if (!nav) return;
    nav.classList.toggle('open');
  }));

  // simple smooth scroll for same-page anchors (if used)
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if(target) target.scrollIntoView({behavior:'smooth'});
    });
  });
});
