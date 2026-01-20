const burger = document.querySelector('.burger');
const navList = document.querySelector('.nav-list');
const modal = document.querySelector('#consult-modal');
const modalOpeners = document.querySelectorAll('[data-modal-open="consult"]');
const modalClosers = document.querySelectorAll('[data-modal-close="consult"]');
const beforeAfterSliders = document.querySelectorAll('.before-after-slider');
const carouselTracks = document.querySelectorAll('[data-carousel-track]');

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

beforeAfterSliders.forEach((slider) => {
  const range = slider.querySelector('.before-after-range');
  if (!range) return;

  const updatePosition = () => {
    slider.style.setProperty('--position', range.value);
  };

  range.addEventListener('input', updatePosition);
  updatePosition();
});

carouselTracks.forEach((track) => {
  const name = track.dataset.carouselTrack;
  const prevButton = document.querySelector(`[data-carousel-prev="${name}"]`);
  const nextButton = document.querySelector(`[data-carousel-next="${name}"]`);

  const scrollAmount = () => Math.max(220, track.clientWidth * 0.8);

  if (prevButton) {
    prevButton.addEventListener('click', () => {
      track.scrollBy({ left: -scrollAmount(), behavior: 'smooth' });
    });
  }

  if (nextButton) {
    nextButton.addEventListener('click', () => {
      track.scrollBy({ left: scrollAmount(), behavior: 'smooth' });
    });
  }
});
