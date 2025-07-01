
// Mobile menu open/close logic (fixed for full off-canvas effect)
function openMenu() {
  var sideMenu = document.getElementById('sideMenu') || document.querySelector('#sideMenu');
  if (sideMenu) {
    sideMenu.style.transform = 'translateX(0)';
    sideMenu.style.transition = 'transform 0.4s';
  }
}

function closeMenu() {
  var sideMenu = document.getElementById('sideMenu') || document.querySelector('#sideMenu');
  if (sideMenu) {
    sideMenu.style.transform = 'translateX(100%)';
    sideMenu.style.transition = 'transform 0.4s cubic-bezier(.4,0,.2,1)';
  }
}



// Load header, then attach scroll effect
loadComponent('header', 'header.html', function() {
  setTimeout(function() {
    const navBar = document.getElementById('mainNav');
    if (navBar) {
      navBar.style.transition = 'transform 0.4s cubic-bezier(.4,0,.2,1)';
      let lastScrollY = window.scrollY;
      let ticking = false;
      window.addEventListener('scroll', function() {
        if (!ticking) {
          window.requestAnimationFrame(function() {
            const currentScrollY = window.scrollY;
            if (currentScrollY > 50) {
              navBar.style.transform = 'translateY(0)';
            } else {
              navBar.style.transform = 'translateY(0)';
            }
            lastScrollY = currentScrollY;
            ticking = false;
          });
          ticking = true;
        }

      });
      highlightCurrentMenu();
    }
  }, 0);
});
// Load footer
loadComponent('footer', 'footer.html');
