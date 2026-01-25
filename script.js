
// Scroll Reveal Animation
function initScrollAnimations() {
  const revealElements = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  revealElements.forEach(el => observer.observe(el));
}


// Update Footer Year
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').innerText = new Date().getFullYear();
  initScrollAnimations();
});
