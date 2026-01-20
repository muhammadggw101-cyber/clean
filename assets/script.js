const burger = document.querySelector('.burger');
const navList = document.querySelector('.nav-list');
const modal = document.querySelector('#consult-modal');
const modalOpeners = document.querySelectorAll('[data-modal-open="consult"]');
const modalClosers = document.querySelectorAll('[data-modal-close="consult"]');

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

const openModal = () => {
  if (!modal) return;
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
};

const closeModal = () => {
  if (!modal) return;
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
};

modalOpeners.forEach((button) => {
  button.addEventListener('click', openModal);
});

modalClosers.forEach((button) => {
  button.addEventListener('click', closeModal);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeModal();
  }
});
