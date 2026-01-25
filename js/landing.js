const { hero, guarantee, casesBeforeAfter, packages, checklists, reviews, contacts } = window.SiteContent;

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

const casesTrack = document.querySelector('[data-cases="track"]');
if (casesTrack) {
  casesTrack.innerHTML = casesBeforeAfter
    .map((item, index) => {
      const dots = Array.from({ length: 5 }, (_, i) =>
        `<span class="difficulty-dot ${i < item.difficulty ? 'active' : ''}"></span>`
      ).join('');
      return `
        <article class="card case-card">
          <div class="before-after" style="--split: 50%" data-before-after>
            <img src="${item.beforeImage}" alt="До уборки: ${item.title}" loading="lazy">
            <img class="after-image" src="${item.afterImage}" alt="После уборки: ${item.title}" loading="lazy">
            <div class="before-after-labels">
              <span class="badge">До</span>
              <span class="badge">После</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value="50"
              class="before-after__range"
              aria-label="Сравнение до и после для кейса ${index + 1}"
            >
            <div class="before-after__handle" aria-hidden="true">↔</div>
          </div>
          <div>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
          </div>
          <div class="case-meta">
            <div class="difficulty" aria-label="Сложность ${item.difficulty} из 5">
              <span>Сложность</span>
              <span class="difficulty-dots">${dots}</span>
              <strong>${item.difficulty}/5</strong>
            </div>
            <button class="button secondary" data-open-modal>${item.ctaLabel}</button>
          </div>
        </article>`;
    })
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

const tabsList = document.querySelector('[data-tabs="list"]');
const panelsWrap = document.querySelector('[data-tabs="panels"]');
if (tabsList && panelsWrap) {
  tabsList.innerHTML = checklists
    .map(
      (item, index) => `
      <button
        class="tab-button"
        role="tab"
        aria-selected="${index === 0}"
        aria-controls="panel-${item.key}"
        id="tab-${item.key}"
        data-tab="${item.key}"
      >${item.title}</button>`
    )
    .join('');

  panelsWrap.innerHTML = checklists
    .map(
      (item, index) => `
      <div
        class="checklist-panel ${index === 0 ? 'active' : ''}"
        role="tabpanel"
        id="panel-${item.key}"
        aria-labelledby="tab-${item.key}"
      >
        <div>
          <h3>${item.title}</h3>
          <p>${item.subtitle}</p>
          <ul>
            ${item.bullets.map((bullet) => `<li>${bullet}</li>`).join('')}
          </ul>
        </div>
        <div class="gallery-grid">
          ${item.gallery
            .map(
              (img, idx) => `
              <button type="button" data-lightbox="${img}" aria-label="Открыть фото ${idx + 1} для ${item.title}">
                <img src="${img}" alt="${item.title} — фото ${idx + 1}" loading="lazy">
              </button>`
            )
            .join('')}
        </div>
      </div>`
    )
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
  contactsList.innerHTML = `
    <li><strong>Телефон:</strong> ${contacts.phone}</li>
    <li><strong>Email:</strong> ${contacts.email}</li>
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

const setupBeforeAfter = () => {
  document.querySelectorAll('[data-before-after]').forEach((container) => {
    const range = container.querySelector('.before-after__range');
    if (!range) return;
    const update = () => {
      container.style.setProperty('--split', `${range.value}%`);
    };
    range.addEventListener('input', update);
    update();
  });
};

const setupTabs = () => {
  const tabButtons = document.querySelectorAll('[data-tab]');
  const panels = document.querySelectorAll('.checklist-panel');
  tabButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      tabButtons.forEach((button) => button.setAttribute('aria-selected', 'false'));
      panels.forEach((panel) => panel.classList.remove('active'));
      btn.setAttribute('aria-selected', 'true');
      const target = document.getElementById(`panel-${btn.dataset.tab}`);
      if (target) target.classList.add('active');
    });
  });
};

const setupCarouselControls = () => {
  const track = document.querySelector('[data-cases="track"]');
  if (!track) return;
  const prevBtn = document.querySelector('[data-carousel="prev"]');
  const nextBtn = document.querySelector('[data-carousel="next"]');
  const scrollAmount = () => track.clientWidth * 0.9;
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      track.scrollBy({ left: -scrollAmount(), behavior: 'smooth' });
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      track.scrollBy({ left: scrollAmount(), behavior: 'smooth' });
    });
  }
};

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
      updateLinks();
    });

    [typeSelect, commentField].forEach((field) => {
      field?.addEventListener('input', updateLinks);
      field?.addEventListener('change', updateLinks);
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
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('active');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
};

setupBeforeAfter();
setupTabs();
setupCarouselControls();
setupModal();
setupLightbox();
setupMenuToggle();
