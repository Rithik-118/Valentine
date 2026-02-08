document.addEventListener("click", function () {
  const music = document.getElementById("bgMusic");
  if (music) {
    music.muted = false;
    music.play().catch(() => {});
  }
}, { once: true });
const messages = [
  "No aa…? 🥺",
  "Koncham aagi alochinchu ❤️",
  "Konni feelings words lo raavu",
  "Naa manasu ninnu adugutondi",
  "Dil chup-chup se kuch keh raha hai 💖",
  "Manasu silent ga matladutondi",
  "Nee presence chaalu Bubu",
  "With you, everything feels calm",
  "Manasu ikkada safe ga undi",
  "Heart already open ❤️"
];

let messageIndex = 0;

function handleNoClick() {
  const noButton = document.querySelector(".no-button");
  const yesButton = document.querySelector(".yes-button");

  noButton.disabled = true;

  setTimeout(() => {
    noButton.innerText = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    noButton.disabled = false;
  }, 600);

  let size = parseFloat(window.getComputedStyle(yesButton).fontSize);
  yesButton.style.fontSize = (size * 1.15) + "px";

  const x = Math.random() * 120 - 60;
  const y = Math.random() * 120 - 60;
  noButton.style.transform = `translate(${x}px, ${y}px)`;
}

function handleYesClick() {
  window.location.href = "yes_page.html";
}
