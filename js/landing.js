const { hero, guarantee, packages, gallery, reviews, contacts } = window.SiteContent;

const iconMap = {
  shoe: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 16c4 0 6-4 8-4s4 2 8 2v4H4v-2z"/><path d="M6 16v-2"/></svg>',
  silent: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 4v16"/><path d="M8 8h8"/><path d="M8 16h8"/></svg>',
  price: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v10"/><path d="M9 10h6"/></svg>',
  checklist: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h4"/><path d="M10 6h10"/><path d="M4 12h4"/><path d="M10 12h10"/><path d="M4 18h4"/><path d="M10 18h10"/></svg>'
};

const setText = (selector, value) => {
  const el = document.querySelector(selector);
  if (el) el.textContent = value;
};

const setHTML = (selector, value) => {
  const el = document.querySelector(selector);
  if (el) el.innerHTML = value;
};

setText('[data-hero="title"]', hero.title);
setText('[data-hero="subtitle"]', hero.subtitle);
setText('[data-hero="primary"]', hero.primaryCta);
setText('[data-hero="secondary"]', hero.secondaryCta);
setText('[data-hero="badge"]', hero.badge);
setText('[data-hero="note"]', hero.note);
const heroImage = document.querySelector('[data-hero="image"]');
if (heroImage) {
  heroImage.alt = hero.mediaAlt;
}

setText('[data-guarantee="title"]', guarantee.title);
setText('[data-guarantee="description"]', guarantee.description);
setText('[data-guarantee="badge"]', guarantee.badge);
setText('[data-guarantee="note"]', guarantee.note);
const guaranteeImage = document.querySelector('[data-guarantee="image"]');
if (guaranteeImage) {
  guaranteeImage.alt = guarantee.visualAlt;
}

const benefitList = document.querySelector('[data-guarantee="benefits"]');
if (benefitList) {
  benefitList.innerHTML = guarantee.benefits
    .map(
      (item) => `
        <div class="guarantee-item">
          <div class="guarantee-icon">${iconMap[item.icon] ?? ''}</div>
          <div>
            <strong>${item.title}</strong>
            <p>${item.text}</p>
          </div>
        </div>`
    )
    .join('');
}

const packagesGrid = document.querySelector('[data-packages="grid"]');
if (packagesGrid) {
  packagesGrid.innerHTML = packages
    .map(
      (item) => `
      <article class="card package-card">
        <span class="badge">${item.badge}</span>
        <h3>${item.name}</h3>
        <p class="package-price">${item.priceFrom}</p>
        <div class="package-media">
          <img src="${item.mediaPreview}" alt="${item.name}" loading="lazy">
        </div>
        <ul class="package-list">
          ${item.bullets.map((bullet) => `<li>${bullet}</li>`).join('')}
        </ul>
        <button class="button primary" data-open-modal>${item.ctaLabel}</button>
      </article>`
    )
    .join('');
}

const galleryGrid = document.querySelector('[data-gallery="grid"]');
if (galleryGrid) {
  galleryGrid.innerHTML = gallery
    .map((item, index) => {
      if (item.type === 'video') {
        const label = item.label || `Видео ${index + 1}`;
        const poster = item.poster || '';
        const type = item.mimeType || 'video/mp4';
        return `
          <div class="gallery-item gallery-item--video" role="group" aria-label="${label}">
            <video autoplay muted loop playsinline controls preload="metadata" poster="${poster}">
              <source src="${item.src}" type="${type}">
              Ваш браузер не поддерживает видео.
            </video>
            <span class="gallery-caption">${label}</span>
          </div>`;
      }
      const label = item.label || `Фото ${index + 1}`;
      return `
        <button
          type="button"
          class="gallery-item gallery-item--image"
          data-lightbox="${item.src}"
          aria-label="Открыть фото: ${label}"
        >
          <img src="${item.src}" alt="${label}" loading="lazy">
          <span class="gallery-caption">${label}</span>
        </button>`;
    })
    .join('');
}

const reviewsGrid = document.querySelector('[data-reviews="grid"]');
if (reviewsGrid) {
  reviewsGrid.innerHTML = reviews
    .map(
      (item) => `
      <article class="card review-card">
        <span class="review-badge">Проверенный отзыв</span>
        <button type="button" data-lightbox="${item.image}" aria-label="Открыть отзыв">
          <img src="${item.image}" alt="${item.label}" loading="lazy">
        </button>
        <p>${item.label}</p>
      </article>`
    )
    .join('');
}

const contactsList = document.querySelector('[data-contacts="list"]');
if (contactsList) {
  const phoneDigits = contacts.phone.replace(/\D/g, '');
  contactsList.innerHTML = `
    <li><strong>Телефон:</strong> <a href="tel:+${phoneDigits}">${contacts.phone}</a></li>
    <li><strong>График:</strong> ${contacts.hours}</li>
    <li><strong>Города:</strong> ${contacts.cities.join(', ')}</li>
  `;
}

const socialsList = document.querySelector('[data-contacts="socials"]');
if (socialsList) {
  socialsList.innerHTML = contacts.socials
    .map(
      (social) =>
        `<li><a class="button secondary" href="${social.url}" target="_blank" rel="noreferrer">${social.label}</a></li>`
    )
    .join('');
}

const setupModal = () => {
  const modal = document.getElementById('leadModal');
  const closeButtons = modal?.querySelectorAll('[data-close-modal]');
  const openButtons = document.querySelectorAll('[data-open-modal]');
  if (!modal) return;

  const open = () => {
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
  };
  const close = () => {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
  };

  openButtons.forEach((btn) => btn.addEventListener('click', open));
  closeButtons?.forEach((btn) => btn.addEventListener('click', close));
  modal.addEventListener('click', (event) => {
    if (event.target === modal) close();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') close();
  });

  const form = modal.querySelector('form');
  if (form) {
    const typeSelect = form.querySelector('[data-service-type]');
    const commentField = form.querySelector('[data-service-comment]');
    const whatsappButton = form.querySelector('[data-contact-action="whatsapp"]');
    const telegramButton = form.querySelector('[data-contact-action="telegram"]');
    const updateLinks = () => {
      const selectedType = typeSelect?.value || 'Дом';
      const comment = commentField?.value.trim();
      let message = `Пишу вам с сайта. Выбранный: ${selectedType}.`;
      if (comment) {
        message += ` Комментарий: ${comment}`;
      }
      if (whatsappButton) {
        whatsappButton.href = `https://wa.me/79063816600?text=${encodeURIComponent(message)}`;
      }
      if (telegramButton) {
        const pageUrl = window.location.href;
        telegramButton.href = `https://t.me/share/url?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(message)}`;
      }
    };

    form.addEventListener('submit', (event) => {
      event.preventDefault();
    });
    updateLinks();
  }
};

const setupLightbox = () => {
  const lightbox = document.getElementById('lightbox');
  const image = lightbox?.querySelector('img');
  const closeButtons = lightbox?.querySelectorAll('[data-close-modal]');
  if (!lightbox || !image) return;

  const open = (src, alt) => {
    image.src = src;
    image.alt = alt || 'Просмотр изображения';
    lightbox.classList.add('active');
    lightbox.setAttribute('aria-hidden', 'false');
  };
  const close = () => {
    lightbox.classList.remove('active');
    lightbox.setAttribute('aria-hidden', 'true');
  };

  document.querySelectorAll('[data-lightbox]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const src = btn.dataset.lightbox;
      const alt = btn.querySelector('img')?.alt || 'Просмотр изображения';
      open(src, alt);
    });
  });

  closeButtons?.forEach((btn) => btn.addEventListener('click', close));
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) close();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') close();
  });
};

const setupMenuToggle = () => {
  const toggle = document.querySelector('[data-menu-toggle]');
  const nav = document.querySelector('[data-menu]');
  if (!toggle || !nav) return;
  const updateToggle = (isOpen) => {
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.textContent = isOpen ? '✕' : 'Меню';
    toggle.setAttribute('aria-label', isOpen ? 'Закрыть меню' : 'Открыть меню');
  };
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('active');
    updateToggle(isOpen);
  });
  nav.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      if (!nav.classList.contains('active')) return;
      nav.classList.remove('active');
      updateToggle(false);
    });
  });
  updateToggle(false);
};

const setupHeaderCompact = () => {
  const header = document.querySelector('.site-header');
  if (!header) return;
  const update = () => {
    header.classList.toggle('is-compact', window.scrollY > 80);
  };
  update();
  window.addEventListener('scroll', update, { passive: true });
};

setupModal();
setupLightbox();
setupMenuToggle();
setupHeaderCompact();
