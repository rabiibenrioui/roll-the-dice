const diceNumber = document.getElementById("diceNumber");
const diceImages = document.getElementById("diceImages");

// Limit user input between 0 - 9
document.getElementById("diceInput").addEventListener("input", function () {
    if (this.value.length > 1) {
        this.value = this.value.slice(0, 1);   // keep only 1 digit
    }
    if (this.value > 9) {
        this.value = 9;    // cap at 9
    }
    if (this.value < 1) {
        this.value = 1;    // minimum 1
    }
});

// Runs after the button is clicked
function rollTheDice()
{
    const diceInput = document.getElementById("diceInput").value;

    const values = [];
    const images = [];

    for (let i = 0; i < diceInput; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);

        images.push(`<img src="dice_${value}.png" alt="Dice: ${value}">`)
    }
    
    diceImages.innerHTML = images.join("");
}