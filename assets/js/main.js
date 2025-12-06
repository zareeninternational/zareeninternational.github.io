// minimal, cross-page menu toggle + set active nav link
document.querySelectorAll('.menu-toggle').forEach(btn=>{
  btn.addEventListener('click', ()=> {
    const nav = btn.nextElementSibling || document.getElementById('mainNav') ;
    if(nav) nav.classList.toggle('open');
  });
});
// highlight current nav link
document.querySelectorAll('.main-nav .nav-link').forEach(a=>{
  if(a.href === location.href || location.pathname.endsWith(a.getAttribute('href'))) a.classList.add('active');
});
