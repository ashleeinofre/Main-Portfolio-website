//Contact Icon JS
document.querySelectorAll(".icon-link").forEach(icon => {
    icon.addEventListener("click", function(e) {
        e.stopPropagation(); 
    });
});
document.getElementById("contactBtn").addEventListener("click", function(e) {
    e.preventDefault();  
    this.classList.toggle("active");
});


/*responsive?*/
const hamburger = document.getElementById("main-menu");
const navBar = document.querySelector(".nav-bar");

hamburger.addEventListener("click", () => {
  navBar.classList.toggle("active");
});


document.addEventListener('click', function(e) {
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
    button.addEventListener('click', function() {
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
  