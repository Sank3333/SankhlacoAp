// Toggle submenu for mobile menu
function toggleMobileSubmenu(id) {
  var submenu = document.getElementById(id);
  if (submenu) {
    if (submenu.classList.contains('hidden')) {
      submenu.classList.remove('hidden');
      submenu.classList.add('flex');
    } else {
      submenu.classList.add('hidden');
      submenu.classList.remove('flex');
    }
  }
}
// Popup form logic for Enquery button (works for both desktop and mobile)
function openPopupForm() {
  var modal = document.getElementById('modal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  }
}

function closeModal() {
  var modal = document.getElementById('modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  }
}
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
