// Init AOS
AOS.init();

// Animate skill bars
window.addEventListener("scroll", () => {
  document.querySelectorAll(".progress-bar").forEach(bar => {
    let value = bar.getAttribute("data-skill");
    let barPos = bar.getBoundingClientRect().top;
    let screenPos = window.innerHeight;
    if (barPos < screenPos) {
      bar.style.width = value + "%";
    }
  });
});
