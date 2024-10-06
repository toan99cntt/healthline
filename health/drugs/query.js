const openPopup = document.getElementById("openPopup");
const closePopup = document.getElementById("closePopup");
const popup = document.getElementById("fullscreenPopup");

openPopup.addEventListener("click", () => {
  popup.classList.toggle('hidden');
});

const close = () => {
  popup.classList.toggle('hidden');
};

closePopup.addEventListener("click", close);

function isElementAtTop(el) {
  const rect = el.getBoundingClientRect();
  return rect.top <= 0 && rect.bottom > 0; 
}

function handleScroll() {
  
  const sections = document.querySelectorAll('.section');
  const menuItems = document.querySelectorAll('.menu-item');
  const menuHash = document.getElementById('menu-hash');
  const menuHeader = document.getElementById('menu-header');
  const content = document.getElementById('content');
  let activeFound = false;

  if (isElementAtTop(content)) {
    menuHash.classList.remove('hidden');
    menuHeader.classList.add('hidden')
  } else {
    menuHash.classList.add('hidden');
    menuHeader.classList.remove('hidden')
  }


  sections.forEach((section, index) => {
      if (isElementAtTop(section) && !activeFound) {
          history.replaceState(null, null, `#${section.id}`);
          menuItems.forEach(item => item.classList.remove('active'));
          menuItems[index].classList.add('active');
          activeFound = true;
      }
  });
}

window.addEventListener('scroll', handleScroll);

