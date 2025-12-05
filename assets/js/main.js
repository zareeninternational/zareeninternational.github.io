// simple nav toggle
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

  // close nav on link click (mobile)
  document.addEventListener('click', (e)=>{
    if(e.target.matches('.site-nav a')){
      if(window.innerWidth <= 900 && nav) { nav.style.display = 'none'; }
    }
  });

  // set current year in footer
  const years = [ 'year','year2','year3','year4' ];
  years.forEach(id => {
    const el = document.getElementById(id);
    if(el) el.textContent = new Date().getFullYear();
  });
})();
