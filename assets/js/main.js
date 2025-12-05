// nav toggle + footer years + small mobile behavior
(function(){
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('siteNav');

  function toggleNav(){
    if(!nav) return;
    const isVisible = nav.style.display === 'flex' || nav.style.display === 'block';
    nav.style.display = isVisible ? 'none' : 'flex';
    nav.style.flexDirection = isVisible ? '' : 'column';
  }

  if(toggle){
    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      toggleNav();
    });
  }

  // close nav when clicking a link on mobile
  document.addEventListener('click', (e)=>{
    if(e.target.matches('.site-nav a')){
      if(window.innerWidth <= 900 && nav) { nav.style.display = 'none'; }
    }
  });

  // set footer years
  ['year','year2','year3','year4'].forEach(id=>{
    const el = document.getElementById(id);
    if(el) el.textContent = new Date().getFullYear();
  });
})();
