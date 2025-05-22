const images = [
    "./src/assets/img/die-laughter-pose-um-home.svg",
    "./src/assets/img/die-laugther-pose-dois-home.svg"
]

function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}