let panel = document.getElementById("panel");
let expression = "";

// Get all buttons inside #container
const buttons = document.querySelectorAll("#container input");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.value;

        if (value === "Clear") {
            expression = "";
            panel.innerText = "";
        } else if (value === "=") {
                expression = eval(expression).toString();
                panel.innerText = expression;
        } else {
            expression += value;
            panel.innerText = expression;
        }
        console.log(`Button clicked: ${value}`);
    });
});
