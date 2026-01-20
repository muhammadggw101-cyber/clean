const burger = document.querySelector('.burger');
const navList = document.querySelector('.nav-list');

if (burger && navList) {
  burger.addEventListener('click', () => {
    const isOpen = navList.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', String(isOpen));
  });

  navList.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navList.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
}
