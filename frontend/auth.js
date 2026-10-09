import {
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
} from "./supabase-config.js";

const status = document.querySelector("#auth-status");
const forms = document.querySelector("#auth-forms");
const login = document.querySelector("#login-form");
const register = document.querySelector("#register-form");
const logout = document.querySelector("#logout-button");

let client;
let session = null;
let busy = true;

function tell(text) {
  status.textContent = text;
}

function render() {
  forms.hidden = Boolean(session);
  logout.hidden = !session;
  logout.disabled = busy;
  [login, register].forEach(form => {
    form.querySelectorAll("input, button").forEach(control => {
      control.disabled = busy;
    });
  });
}

function sessionStatus() {
  tell(session
    ? "Zalogowano: " + session.user.email
    : "Nie jesteś zalogowany.");
}

function errorText(error) {
  const code = error && error.code;
  if (code === "invalid_credentials")
    return "Logowanie odrzucone. Kod: " + error.code
      + "; status: " + error.status
      + "; szczegóły: " + error.message;
  if (code === "email_not_confirmed")
    return "Najpierw potwierdź adres e-mail.";
  if (code === "weak_password")
    return "Hasło nie spełnia wymagań bezpieczeństwa.";
  return "Operacja nie powiodła się. Spróbuj ponownie później.";
}

async function run(action) {
  if (!client || busy) return;
  busy = true;
  render();
  tell("Proszę czekać…");
  try {
    await action();
  } catch (error) {
    tell(errorText(error));
  } finally {
    busy = false;
    render();
  }
}

login.addEventListener("submit", event => {
  event.preventDefault();
  if (!login.reportValidity()) return;

  run(async () => {
    const { data, error } = await client.auth.signInWithPassword({
      email: login.elements.email.value.trim(),
      password: login.elements.password.value
    });
    if (error) throw error;
    session = data.session;
    login.reset();
    sessionStatus();
  });
});

register.addEventListener("submit", event => {
  event.preventDefault();
  if (!register.reportValidity()) return;
  const password = register.elements.password.value;
  if (password !== register.elements.passwordConfirm.value) {
    tell("Wpisane hasła muszą być identyczne.");
    register.elements.passwordConfirm.focus();
    return;
  }

  run(async () => {
    const { data, error } = await client.auth.signUp({
      email: register.elements.email.value.trim(),
      password
    });
    if (error) throw error;
    register.reset();
    session = data.session;
    if (session) {
      sessionStatus();
    } else {
      tell("Sprawdź pocztę — konto może wymagać potwierdzenia e-mail.");
    }
  });
});

logout.addEventListener("click", () => {
  run(async () => {
    const { error } = await client.auth.signOut({
      scope: "local"
    });
    if (error) throw error;
    session = null;
    login.reset();
    register.reset();
    sessionStatus();
  });
});

async function init() {
  render();
  if (!SUPABASE_URL || !SUPABASE_PUBLISHABLE_KEY) {
    tell("Obsługa kont oczekuje na konfigurację Supabase.");
    return;
  }
  try {
    const url = new URL(SUPABASE_URL);
    if (url.protocol !== "https:" ||
        !SUPABASE_PUBLISHABLE_KEY.startsWith("sb_publishable_")) {
      tell("Sprawdź Project URL i publiczny klucz Supabase.");
      return;
    }
    const { createClient } = await import(
      "https://esm.sh/@supabase/supabase-js@2"
    );
    client = createClient(
      SUPABASE_URL,
      SUPABASE_PUBLISHABLE_KEY
    );
    client.auth.onAuthStateChange((event, nextSession) => {
      session = nextSession;
      render();
      if (!busy) sessionStatus();
    });
    const { data, error } = await client.auth.getSession();
    if (error) throw error;
    session = data.session;
    busy = false;
    render();
    sessionStatus();
  } catch (error) {
    tell("Nie udało się uruchomić kont. Sprawdź konfigurację i połączenie.");
  }
}

window.fixSupabaseReady = init().then(() => client);
