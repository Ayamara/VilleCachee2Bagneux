function checkKey() {
  const key = document.getElementById("keyInput").value;
  const message = document.getElementById("message");

  if (key === "halloween2025") {
    message.style.color = "lime";
    message.textContent = "Accès autorisé... Bienvenue dans La Ville Cachée de Bagneux.";
    setTimeout(() => {
      window.location.href = "missions.html";
    }, 2000);
  } else {
    message.style.color = "red";
    message.textContent = "❌ Mauvaise clé... La Ville te refuse l’entrée.";
  }
}
