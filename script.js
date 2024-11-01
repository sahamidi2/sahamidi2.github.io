document.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("main section");
  const navLinks = document.querySelectorAll("aside nav a");

  let currentSection = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
});
