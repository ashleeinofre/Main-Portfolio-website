//Contact Icon JS
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-btn");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("is-current");
    if (link.getAttribute("href") === `#${current}` && link.id !== "contactBtn") {
      link.classList.add("is-current");
    }
  });
});

    

document.querySelectorAll(".icon-link").forEach(icon => {
    icon.addEventListener("click", function (e) {
        e.stopPropagation();
    });
});
document.getElementById("contactBtn").addEventListener("click", function (e) {
    e.preventDefault();
    this.classList.toggle("active");
});


/*responsive?*/
const hamburger = document.getElementById("main-menu");
const navBar = document.querySelector(".nav-bar");

hamburger.addEventListener("click", () => {
    navBar.classList.toggle("active");
});


document.addEventListener('click', function (e) {
    if (window.innerWidth <= 1125) {
        if (navBar.classList.contains('active') &&
            !navBar.contains(e.target) &&
            e.target !== hamburger &&
            !hamburger.contains(e.target)) {
            navBar.classList.remove('active');
        }
    }
});

document.querySelectorAll('.nav-btn:not(#contactBtn)').forEach(button => {
    button.addEventListener('click', function () {
        if (window.innerWidth <= 1125 && navBar.classList.contains('active')) {
            navBar.classList.remove('active');
        }
    });
});

window.addEventListener('resize', () => {
    navBar.style.transition = 'none';
    if (window.innerWidth > 1125) {
        navBar.classList.remove('active');
    }
    setTimeout(() => {
        navBar.style.transition = '';
    }, 100);
});





const blurItems = document.querySelectorAll(".scroll-blur");

window.addEventListener("scroll", () => {
    blurItems.forEach(el => {
        const rect = el.getBoundingClientRect();

        // distance from top of viewport
        const top = rect.top;

        // start blurring BEFORE it hits navbar
        const blurStart = 5;   // px from top
        const blurEnd = -20;     // fully gone
        const maxBlur = 12;

        let blur = 0;

        if (top < blurStart) {
            blur = ((blurStart - top) / (blurStart - blurEnd)) * maxBlur;
            blur = Math.min(Math.max(blur, 0), maxBlur);
        }

        el.style.filter = `blur(${blur}px)`;
    });
});
