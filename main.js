// ================================================================
// MAIN.JS — Staff Portal
// ================================================================
// This file handles the mobile navigation toggle.
// No other JavaScript is required for the basic site.
// ================================================================

function toggleMenu() {
  const nav = document.getElementById('mobileNav');
  if (nav) {
    nav.classList.toggle('open');
  }
}

// Close mobile nav if user clicks outside of it
document.addEventListener('click', function(e) {
  const nav = document.getElementById('mobileNav');
  const toggle = document.querySelector('.nav-toggle');
  if (nav && nav.classList.contains('open')) {
    if (!nav.contains(e.target) && !toggle.contains(e.target)) {
      nav.classList.remove('open');
    }
  }
});
