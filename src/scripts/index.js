document.addEventListener("DOMContentLoaded", function (event) {
  let menuButtons = document.querySelectorAll(".menu-label");
  let menuCheckbox = document.querySelector(".menu-checkbox");
  let pageBody = document.body;

  menuButtons.forEach(element => {
    element.addEventListener('click', (event) => {
      menuCheckbox = document.querySelector(".menu-checkbox");
      console.log('1');

      if (!menuCheckbox.checked) {
        document.documentElement.style.overflow = 'hidden';
        document.body.scroll = "no";
      } else {
        document.documentElement.style.overflow = 'scroll';
        document.body.scroll = "yes";
      }
    });
  });
});