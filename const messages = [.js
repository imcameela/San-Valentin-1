const messages = [
    "Segura?",
    "Muy segura??",
    "Estas 100% segura?",
    "No es la mejor opción",
    "Piénsalo otra vez",
    "Me está dando wiwi",
    "Hazlo por la Zukita",
    "Quiero llorar",
    "mmmh pucha",
    "DI QUE Sí YAAAAAAAAA"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}