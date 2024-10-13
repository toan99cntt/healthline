const itemMenusMobile = document.querySelectorAll('.menus-mobile .menu-item');
const itemMenusPc = document.querySelectorAll('.pc .menu-item');
const subMenusMobile = document.querySelectorAll('.sub-menu-mobile');
const menusMobile = document.querySelector('.menus-mobile');
const containerMenusMobile = document.querySelector('.container-menus-mobile');
const back = document.querySelector('.back-menu');
const iconMenu = document.querySelector('#icon-menu');
let indexMenu = 0
const submenu = document.querySelectorAll('.submenu');
const menu = document.querySelector('.menus');
const icon = document.querySelector('#triangle-up');

itemMenusPc.forEach((section, index) => {
  section.addEventListener("mouseenter", (el) => {
    const element = el.target;
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;

    setTimeout(() => {
      icon.classList.add('icon')
    }, 100);
    icon.style.left = `${centerX - 15}px`
  });
});

menu.addEventListener("mouseleave", () => {
  setTimeout(() => {
    icon.classList.remove('icon')
  }, 100);
});

itemMenusMobile.forEach((item, index) => {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    indexMenu = index
    backMenu()
  });
});

const backMenu = () => {
  menusMobile.classList.toggle('!w-[0px]');
  subMenusMobile[indexMenu].classList.toggle('hidden')
  setTimeout(() => {
    menusMobile.classList.toggle('!opacity-0');
  }, 100);
}

const openMenu = () => {
  iconMenu.classList.toggle('fa-xmark')
  containerMenusMobile.classList.toggle('!h-full')
}