const navigateToLink = (el) => {
  const url = el.value;
  if (url) {
    window.location.href = url;
  }
}

const scrollToHash = () => {
  const hash = window.location.hash;
  if (hash) {
    const element = document.getElementById(`scroll-${hash.substring(1)}`);
    if (element) {
      $('body,html').animate({scrollTop: element.offsetTop - 90}, 500); 
    }
  }
}

window.addEventListener("hashchange", function () {
  scrollToHash();
});