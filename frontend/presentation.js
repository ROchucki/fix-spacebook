(() => {
  const hero = document.querySelector('.hero');
  if (!hero || document.querySelector('#presentation-controls')) return;
  const stylesheet = document.createElement('link');
  stylesheet.rel = 'stylesheet';
  stylesheet.href = new URL('presentation.css', document.currentScript.src).href;
  document.head.append(stylesheet);
  const node = (tag, text, className) => {
    const el = document.createElement(tag);
    if (text) el.textContent = text;
    if (className) el.className = className;
    return el;
  };
  const button = text => {
    const el = node('button', text);
    el.type = 'button';
    return el;
  };
  const controls = node('nav', '', 'presentation-controls');
  controls.id = 'presentation-controls';
  controls.setAttribute('aria-label', 'Konto i wygląd');
  const login = node('a', 'Logowanie');
  login.href = '#login-form';
  const register = node('a', 'Rejestracja');
  register.href = '#register-form';
  const theme = button('Demo 2 — ciemny');
  function setTheme(dark) {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    theme.textContent = dark ? 'Demo 1 — jasny' : 'Demo 2 — ciemny';
    theme.setAttribute('aria-pressed', String(dark));
  }
  setTheme(false);
  theme.addEventListener('click', () => setTheme(document.documentElement.dataset.theme !== 'dark'));
  controls.append(login, theme, register);
  hero.prepend(controls);
  const eyebrow = hero.querySelector('.eyebrow');
  if (eyebrow) eyebrow.hidden = true;
  const section = node('section');
  section.id = 'ogloszenia-pokazowe';
  section.setAttribute('aria-labelledby', 'listing-title');
  const toolbar = node('div', '', 'listing-toolbar');
  const title = node('h2', 'Ogólne ogłoszenia');
  title.id = 'listing-title';
  const previous = button('←');
  previous.setAttribute('aria-label', 'Poprzednie ogłoszenia');
  const next = button('→');
  next.setAttribute('aria-label', 'Następne ogłoszenia');
  const all = button('Zobacz wszystkie');
  all.setAttribute('aria-expanded', 'false');
  all.setAttribute('aria-controls', 'listing-track');
  const track = node('div', '', 'listing-track');
  track.id = 'listing-track';
  track.setAttribute('role', 'list');
  toolbar.append(title, previous, next, all);
  const note = node('p', 'Wersja pokazowa. Ogłoszenia i ceny są przykładowe. Wybrane zdjęcia pozostają w podglądzie na tym urządzeniu i znikną po odświeżeniu.', 'presentation-note');
  const dialog = node('dialog', '', 'presentation-dialog');
  dialog.setAttribute('aria-labelledby', 'listing-detail-title');
  const detailTitle = node('h2');
  detailTitle.id = 'listing-detail-title';
  const detailText = node('p');
  const detailPrice = node('p');
  const close = button('Zamknij');
  close.className = 'button button-secondary';
  dialog.append(detailTitle, detailText, detailPrice, node('p', 'Przykład demonstracyjny — bez publikacji i bez danych kontaktowych.', 'presentation-note'), close);
  close.addEventListener('click', () => dialog.close());
  document.body.append(dialog);
  const samples = [
    ['Naprawa pralki', 'Naprawy AGD i RTV', 'Warszawa, Mokotów', 'Diagnostyka pralki, która nie odprowadza wody.', 'Budżet: 150 zł'],
    ['Pielęgnacja ogrodu', 'Dom i ogród', 'Warszawa, Wawer', 'Koszenie trawy i uporządkowanie małego ogrodu.', 'Budżet: 250 zł'],
    ['Przewóz komody', 'Przeprowadzki', 'Warszawa, Praga', 'Transport komody z pomocą przy wniesieniu.', 'Budżet: 200 zł'],
    ['Spacer z psem', 'Opieka', 'Warszawa, Ursynów', 'Godzinny spacer z psem podczas nieobecności opiekuna.', 'Budżet: 40 zł'],
    ['Regulacja roweru', 'Naprawy rowerów', 'Warszawa, Wola', 'Regulacja hamulców i przerzutek w rowerze miejskim.', 'Budżet: 100 zł'],
    ['Sprzątanie mieszkania', 'Dom i ogród', 'Warszawa, Ochota', 'Przykładowe zlecenie sprzątania mieszkania.', 'Budżet: 180 zł']
  ];
  const imageSlots = [];
  samples.forEach(([name, category, location, description, price]) => {
    const card = node('article', '', 'listing-card');
    card.setAttribute('role', 'listitem');
    const open = button('');
    const image = node('img');
    image.alt = 'Zdjęcie do przykładowego ogłoszenia: ' + name;
    image.hidden = true;
    const placeholder = node('span', 'Zdjęcie do dodania', 'listing-content');
    imageSlots.push({ image, placeholder });
    const content = node('span', '', 'listing-content');
    content.append(node('h3', name), node('p', category), node('p', location), node('p', price), node('small', 'Przykład demo'));
    open.append(image, placeholder, content);
    open.addEventListener('click', () => {
      detailTitle.textContent = name;
      detailText.textContent = location + '. ' + description;
      detailPrice.textContent = price;
      dialog.showModal();
    });
    card.append(open);
    track.append(card);
  });
  function move(direction) {
    const card = track.firstElementChild;
    track.scrollBy({ left: direction * (card.getBoundingClientRect().width + 10), behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  }
  previous.addEventListener('click', () => move(-1));
  next.addEventListener('click', () => move(1));
  all.addEventListener('click', () => {
    const expanded = track.classList.toggle('show-all');
    all.textContent = expanded ? 'Wróć do przewijania' : 'Zobacz wszystkie';
    all.setAttribute('aria-expanded', String(expanded));
    previous.hidden = expanded;
    next.hidden = expanded;
  });
  const photoLabel = node('label', 'Dodaj zdjęcia do podglądu (maks. 6): ', 'field-help');
  const photos = node('input');
  photos.type = 'file';
  photos.accept = 'image/jpeg,image/png,image/webp';
  photos.multiple = true;
  photoLabel.append(photos);
  const photoStatus = node('p', '', 'presentation-note');
  photoStatus.setAttribute('role', 'status');
  let urls = [];
  photos.addEventListener('change', () => {
    imageSlots.forEach(({ image, placeholder }) => {
      image.hidden = true;
      image.removeAttribute('src');
      placeholder.hidden = false;
    });
    urls.forEach(url => URL.revokeObjectURL(url));
    urls = [];
    const files = [...photos.files].filter(file => ['image/jpeg', 'image/png', 'image/webp'].includes(file.type) && file.size <= 10 * 1024 * 1024).slice(0, 6);
    files.forEach((file, index) => {
      const url = URL.createObjectURL(file);
      urls.push(url);
      const { image, placeholder } = imageSlots[index];
      image.src = url;
      image.hidden = false;
      placeholder.hidden = true;
    });
    photoStatus.textContent = 'Zdjęcia w lokalnym podglądzie: ' + files.length + '. Limit: 6 plików JPEG, PNG lub WebP, do 10 MB każdy. Nic nie wysłano do bazy.';
  });
  section.append(toolbar, track, photoLabel, photoStatus, note);
  const actions = hero.querySelector('.actions');
  if (actions) actions.before(section); else hero.append(section);
})();
