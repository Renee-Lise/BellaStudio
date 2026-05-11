const ageGate = document.querySelector("[data-age-gate]");
const confirmButton = document.querySelector("[data-age-confirm]");
const exitButton = document.querySelector("[data-age-exit]");

const AGE_GATE_KEY = "bellaSecretHomeAgeVerified";

if (ageGate) {
  const alreadyVerified = localStorage.getItem(AGE_GATE_KEY) === "true";

  if (alreadyVerified) {
    ageGate.classList.add("hidden");
    document.body.classList.remove("locked");
  } else {
    ageGate.classList.remove("hidden");
    document.body.classList.add("locked");
  }
}

if (confirmButton && ageGate) {
  confirmButton.addEventListener("click", () => {
    localStorage.setItem(AGE_GATE_KEY, "true");
    ageGate.classList.add("hidden");
    document.body.classList.remove("locked");
  });
}

if (exitButton) {
  exitButton.addEventListener("click", () => {
    window.location.href = "index.html";
  });
}
