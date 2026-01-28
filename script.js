document.addEventListener("DOMContentLoaded", () => {

  // Footer year
  document.getElementById("year").innerText = new Date().getFullYear();

  // Scroll Reveal Animation
  const revealElements = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  revealElements.forEach(el => revealObserver.observe(el));


  // Skill Bars Animation
  const progressBars = document.querySelectorAll(".progress");
  const skillsSection = document.querySelector("#skills");

  function animateSkills() {
    progressBars.forEach(bar => {
      const target = +bar.getAttribute("data-percent");
      const percentText = bar.querySelector(".percent");

      let count = 0;
      const interval = setInterval(() => {
        if (count >= target) {
          clearInterval(interval);
        } else {
          count++;
          bar.style.width = count + "%";
          percentText.textContent = count + "%";
        }
      }, 20);
    });
  }

  const skillsObserver = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      animateSkills();
      skillsObserver.disconnect();
    }
  }, { threshold: 0.1 });

  skillsObserver.observe(skillsSection);

});
