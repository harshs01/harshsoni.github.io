document.addEventListener("DOMContentLoaded", () => {
  // Particles.js animation
  particlesJS("particles-js", {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#777777" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 5 },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
      },
      size: {
        value: 3,
        random: true,
        anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
      },
      line_linked: { enable: true, distance: 150, color: "#888888", opacity: 0.4, width: 1 },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" },
        resize: true,
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 },
      },
    },
    retina_detect: true,
  });

  // Typed.js animation
  const typedElement = document.querySelector('.subtitle');
  typedElement.innerHTML = ''; // Clear existing content

  new Typed(typedElement, {
    strings: ['I Design PEGA Solutions'],
    typeSpeed: 50,
    backSpeed: 0,
    smartBackspace: false,
    loop: false,
    showCursor: true,
    cursorChar: '_',
    onComplete: (self) => {
      self.cursor.remove(); // Remove the first cursor
      typedElement.innerHTML += '<br>';
      const line2 = document.createElement('span');
      typedElement.appendChild(line2);

      new Typed(line2, {
        strings: ['I am a PEGA LSA.'],
        typeSpeed: 50,
        loop: false,
        showCursor: true,
        cursorChar: '_',
        onComplete: (self) => {
          self.cursor.remove();
          typedElement.innerHTML += '<br>';
          const line3 = document.createElement('span');
          typedElement.appendChild(line3);

          new Typed(line3, {
            strings: ['With 14 years of experience'],
            typeSpeed: 50,
            loop: false,
            showCursor: true,
            cursorChar: '_',
            onComplete: (self) => {
              // Optionally hide the final cursor
              self.cursor.style.display = 'none';
            }
          });
        }
      });
    }
  });

  // Animate sections on scroll
  const sections = document.querySelectorAll("section");
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });

  // Experience Tabs
  const tabsContainer = document.querySelector(".experience-tabs");
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".experience-item");

  tabsContainer.addEventListener("click", (e) => {
    const clicked = e.target.closest(".tab-btn");
    if (!clicked) return;

    // Deactivate all tabs and content
    tabButtons.forEach((btn) => btn.classList.remove("active"));
    tabContents.forEach((content) => content.classList.remove("active"));

    // Activate clicked tab and corresponding content
    clicked.classList.add("active");
    document.querySelector(`#${clicked.dataset.tab}`).classList.add("active");
  });

  // Smooth scrolling for navigation
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Mobile navigation
  const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
  const mobileNav = document.querySelector(".mobile-nav");

  mobileNavToggle.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
  });

  // Hide mobile nav when a link is clicked
  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("active");
    });
  });
});
