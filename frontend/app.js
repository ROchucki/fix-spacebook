const message = document.querySelector("#message");
const buttons = document.querySelectorAll("[data-action]");

const messages = {
  client: "Wersja MVP: formularz dodawania zlecenia powstanie w kolejnym kroku.",
  provider: "Wersja MVP: profil wykonawcy powstanie w kolejnym kroku."
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    message.textContent = messages[button.dataset.action];
  });
});

const requestForm = document.querySelector("#request-form");
const formMessage = document.querySelector("#form-message");

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
  });
}
