const message = document.querySelector("#message");
const buttons = document.querySelectorAll("[data-action]");

const messages = {
  client: "Przejdz do formularza ponizej i opisz swoje zlecenie.",
  provider: "Wersja MVP: profil wykonawcy powstanie w kolejnym kroku."
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    message.textContent = messages[button.dataset.action];
  });
});

const requestForm = document.querySelector("#request-form");
const formMessage = document.querySelector("#form-message");
const categorySelect = document.querySelector("#category");
const description = document.querySelector("#description");

const descriptionPlaceholders = {
  "Naprawy samochodow":
    "Np. Samochod nie odpala. Potrzebuje diagnostyki i naprawy.",
  "Naprawy rowerow":
    "Np. Przerzutki przeskakuja podczas jazdy. Potrzebuje regulacji lub wymiany linki.",
  "Naprawy AGD i RTV":
    "Np. Pralka nie odprowadza wody. Potrzebuje diagnozy i naprawy.",
  Sprzatanie:
    "Np. Potrzebuje sprzatania mieszkania po remoncie.",
  "Prace ogrodowe":
    "Np. Potrzebuje skoszenia trawy i przyciecia zywoplotu.",
  Przeprowadzki:
    "Np. Potrzebuje transportu mebli z Mokotowa na Prage.",
  "Opieka nad zwierzetami":
    "Np. Potrzebuje opieki nad psem w weekend.",
  "Inna usluga":
    "Np. Opisz dokladnie, jakiej pomocy potrzebujesz."
};

const defaultDescriptionPlaceholder =
  "Np. Opisz problem, miejsce wykonania uslugi i oczekiwany termin.";

function updateDescriptionPlaceholder() {
  if (!categorySelect || !description) {
    return;
  }

  description.placeholder =
    descriptionPlaceholders[categorySelect.value] ||
    defaultDescriptionPlaceholder;
}

if (categorySelect && description) {
  updateDescriptionPlaceholder();
  categorySelect.addEventListener("change", updateDescriptionPlaceholder);
}

if (requestForm) {
  requestForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!requestForm.checkValidity()) {
      requestForm.reportValidity();
      return;
    }

    const category = requestForm.elements.category.value;

    formMessage.textContent =
      `Dziekujemy. Testowe zlecenie w kategorii "${category}" zostalo przygotowane. ` +
      "W MVP dane nie sa jeszcze zapisywane.";

    requestForm.reset();
    description.placeholder = defaultDescriptionPlaceholder;
  });
}
