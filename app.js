const h1 = document.querySelector("h1");
const button = document.querySelector("button");

// Main colour flip function
const switchColour = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
};

// Changes the background colour on a button click
button.addEventListener("click", function () {
    document.body.style.backgroundColor = switchColour();
    h1.innerText = switchColour();
});

// Changes the background colour when "Enter" is pressed
document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        document.body.style.backgroundColor = switchColour();
        h1.innerText = switchColour();
    }
});