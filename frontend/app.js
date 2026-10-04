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
