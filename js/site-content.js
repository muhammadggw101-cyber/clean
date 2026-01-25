window.SiteContent = {
  hero: {
    title: 'Формула чистоты для вашего дома и бизнеса',
    subtitle: 'Премиальный клининг, химчистка, озонирование и мытьё окон с понятной сметой, спокойной командой и качеством, которое можно проверить по чек-листу.',
    primaryCta: 'Рассчитать стоимость',
    secondaryCta: 'Посмотреть пакеты',
    mediaAlt: 'Пример аккуратной современной уборки',
    badge: 'Гарантия прозрачной цены',
    note: 'Без лишнего шума и спешки'
  },
  guarantee: {
    title: 'Гарантирую качество',
    description: 'Я лично отвечаю за стандарты сервиса и выбор специалистов. Команда работает по чек-листам, а результат подтверждается фотоотчетом.',
    benefits: [
      { title: 'Сменная обувь', text: 'Защищаем ваше пространство от улицы.', icon: 'shoe' },
      { title: 'Не отвлекаем разговорами', text: 'Минимум шума и нет лишних вопросов.', icon: 'silent' },
      { title: 'Цена до начала работ', text: 'Смета фиксируется заранее.', icon: 'price' },
      { title: 'Чек-лист проверки', text: 'Каждый этап под контролем.', icon: 'checklist' }
    ],
    visualAlt: 'Команда клининга готовит помещение',
    badge: 'Контроль качества 24/7',
    note: 'Я всегда остаюсь с вами на связи'
  },
  casesBeforeAfter: [
    {
      title: 'Кухня после активной недели',
      description: 'Удалили жир и налет, выровняли блеск поверхностей.',
      beforeImage: 'images/placeholder.svg',
      afterImage: 'images/placeholder.svg',
      difficulty: 4,
      ctaLabel: 'Хочу так же'
    },
    {
      title: 'Санузел с известковым налетом',
      description: 'Безопасные средства и деликатная полировка.',
      beforeImage: 'images/placeholder.svg',
      afterImage: 'images/placeholder.svg',
      difficulty: 3,
      ctaLabel: 'Повторить результат'
    },
    {
      title: 'Гостиная после ремонта',
      description: 'Пыль, строительные следы и окна — под контролем.',
      beforeImage: 'images/placeholder.svg',
      afterImage: 'images/placeholder.svg',
      difficulty: 5,
      ctaLabel: 'Заказать похожее'
    }
  ],
  packages: [
    {
      name: 'Быстрый апгрейд',
      priceFrom: 'от 12 000 ₽',
      badge: 'Идеально для регулярной уборки',
      bullets: ['Кухня и санузел', 'Пылесос и влажная уборка', 'Проверка по чек-листу'],
      mediaPreview: 'images/placeholder.svg',
      ctaLabel: 'Мой вариант'
    },
    {
      name: 'Премиум квартира',
      priceFrom: 'от 22 000 ₽',
      badge: 'Хит сезона',
      bullets: ['Полировка поверхностей', 'Постель и текстиль', 'Отчет в мессенджере'],
      mediaPreview: 'images/placeholder.svg',
      ctaLabel: 'Хочу этот пакет'
    },
    {
      name: 'Офис без следов',
      priceFrom: 'от 30 000 ₽',
      badge: 'Для команд и шоурумов',
      bullets: ['Рабочие зоны и кухня', 'Дезинфекция точек касания', 'Гибкое время начала'],
      mediaPreview: 'images/placeholder.svg',
      ctaLabel: 'Подойдет мне'
    },
    {
      name: 'После переезда',
      priceFrom: 'от 38 000 ₽',
      badge: 'Глубокая очистка',
      bullets: ['Пыль и следы ремонта', 'Мытье стекол', 'Контроль качества в день уборки'],
      mediaPreview: 'images/placeholder.svg',
      ctaLabel: 'Выбрать пакет'
    }
  ],
  checklists: [
    {
      key: 'flat',
      title: 'Квартира',
      subtitle: 'Аккуратная ежедневная чистота с фокусом на кухню и санузел.',
      bullets: ['Сухая и влажная уборка', 'Мытье зеркал и стекол', 'Сортировка и сбор мусора', 'Уход за кухонными фасадами'],
      gallery: [
        'images/flat-1.jpg',
        'images/flat-2.jpg',
        'images/flat-3.jpg',
        {
          type: 'video',
          src: 'videos/checklist-flat.mp4',
          poster: 'images/placeholder.svg',
          label: 'Видео процесса уборки квартиры'
        }
      ]
    },
    {
      key: 'house',
      title: 'Дом / Коттедж',
      subtitle: 'Большие площади и сложные поверхности под контролем чек-листа.',
      bullets: ['Лестницы и перила', 'Чистка входных групп', 'Уход за каменными поверхностями', 'Проветривание и ароматизация'],
      gallery: [
        'images/placeholder.svg',
        'images/placeholder.svg',
        'images/placeholder.svg',
        {
          type: 'video',
          src: 'videos/checklist-house.mp4',
          poster: 'images/placeholder.svg',
          label: 'Видео процесса уборки дома'
        }
      ]
    },
    {
      key: 'office',
      title: 'Офис',
      subtitle: 'Деликатная уборка рабочих мест без отвлечения команды.',
      bullets: ['Рабочие столы и техника', 'Обработка санузлов', 'Контроль расходников', 'Точечная дезинфекция'],
      gallery: [
        'images/placeholder.svg',
        'images/placeholder.svg',
        'images/placeholder.svg',
        {
          type: 'video',
          src: 'videos/checklist-office.mp4',
          poster: 'images/placeholder.svg',
          label: 'Видео процесса уборки офиса'
        }
      ]
    }
  ],
  reviews: [
    { image: 'images/placeholder.svg', label: 'Отзыв о генеральной уборке' },
    { image: 'images/placeholder.svg', label: 'Отзыв после переезда' },
    { image: 'images/placeholder.svg', label: 'Отзыв от офиса' },
    { image: 'images/placeholder.svg', label: 'Отзыв о регулярном сервисе' }
  ],
  contacts: {
    phone: '+7 906 381 66 00',
    email: 'formula.clean21@mail.ru',
    socials: [
      { label: '2ГИС', url: 'https://2gis.ru/cheboksary/geo/70000001019066188', handle: 'Каталог' },
      { label: 'Avito', url: 'https://www.avito.ru/cheboksary/predlozheniya_uslug/klining_himchistka_ozonirovaniemyte_okon_4849727398', handle: 'Объявление' },
      { label: 'Яндекс отзывы', url: 'https://yandex.ru/maps/org/formula_chistoty/180167642950/', handle: 'Рейтинг' },
      { label: 'Telegram', url: 'https://t.me/NataliaTihonowa', handle: '@NataliaTihonowa' },
      { label: 'WhatsApp', url: 'https://wa.me/79063816600', handle: 'Написать' }
    ],
    hours: 'Каждый день с 8:00 до 22:00',
    cities: ['Чебоксары', 'Чебоксарский район, выезд в Чувашию по договоренности']
  }
};
