const messages = [
  "No aa…? 🥺",
  "Koncham aagi alochinchu ❤️",
  "Konni feelings words lo raavu",
  "Naa manasu ninnu adugutondi",
  "Dil chup-chup se kuch keh raha hai 💖",
  "Nee presence chaalu",
  "Manasu silent ga matladutondi",
  "Ninnu choose prathi sari calm feel",
  "Manasu ikkada safe ga undi",
  "Heart already open ❤️"
];

let messageIndex = 0;

function handleNoClick() {
  const noButton = document.querySelector(".no-button");
  const yesButton = document.querySelector(".yes-button");

  noButton.innerText = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;

  let size = parseFloat(window.getComputedStyle(yesButton).fontSize);
  yesButton.style.fontSize = (size * 1.2) + "px";
}

function handleYesClick() {
  window.location.href = "yes_page.html";
}
