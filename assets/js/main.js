// menu toggle
document.addEventListener('DOMContentLoaded',function(){
  var btn = document.getElementById('menuToggle');
  var nav = document.getElementById('mainNav');
  if(btn && nav){
    btn.addEventListener('click',function(){
      nav.classList.toggle('open');
    });
  }

  // close menu on link click (mobile)
  var links = document.querySelectorAll('.main-nav .nav-link');
  links.forEach(function(l){
    l.addEventListener('click',function(){ nav.classList.remove('open'); });
  });

  // smooth scroll for product CTA if present
  var explore = document.querySelector('.btn-gold[href="products.html"]');
  if(explore){
    explore.addEventListener('click', function(e){
      // allow normal navigation on small devices (it's linking to products page), no preventDefault
    });
  }
});
