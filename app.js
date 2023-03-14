const textArea = document.getElementById("textarea");
const totalCounter = document.getElementById("total-counter");
const remainingCounter = document.getElementById("remaining-counter");

updateCounter()
function updateCounter() {
    //total character
    totalCounter.innerText = textArea.value.length;
    // remainig character
    remainingCounter.innerText = textArea.getAttribute("maxLength") - textArea.value.length;
}

textArea.addEventListener("keyup", () => {
    updateCounter()
});