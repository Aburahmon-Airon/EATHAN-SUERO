
const button = document.querySelector(".services > button");

button.addEventListener("mouseenter", () => {
    button.style.boxShadow = "0 0 0 2px black";
    button.style.backgroundColor = "white";
    button.style.color = "black";
});

button.addEventListener("mouseleave", () => {
    button.style.boxShadow = "";
    button.style.backgroundColor = "";
    button.style.color = "";
});

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        button.textContent = "wait...";
    });
});