
    let display = document.getElementById("display");
    let buttons = document.querySelectorAll("#buttons");

    buttons.forEach((button) =>
    button.addEventListener("click", function (e) {
        // if(display.innerText == '0') display.innerText = '';
        if (e.target.textContent === "AC") {
        display.innerText = "";
        return;
        } else if (e.target.textContent === "Del") {
        display.innerText = display.innerText.slice(0, -1);
        return;
        } else if (e.target.textContent === "%") {
        display.innerText = eval(display.innerText) / 100;
        return;
        } else if (
        // e.target.textContent === "." ||
        e.target.textContent === "*" ||
        e.target.textContent === "/" ||
        e.target.textContent === "+" ||
        e.target.textContent === "-" ||
        e.target.textContent === "^"
        ) {
        if (
            display.innerText.slice(-1) === "." ||
            display.innerText.slice(-1) === "*" ||
            display.innerText.slice(-1) === "/" ||
            display.innerText.slice(-1) === "+" ||
            display.innerText.slice(-1) === "-" ||
            display.innerText.slice(-1) === "^"
        ) {
            display.innerText =
            display.innerText.slice(0, -1) + e.target.textContent;
            display.innerText = eval(display.innerText);
        } else {
            display.innerText += e.target.textContent;
            display.innerText = eval(display.innerText);
        }
        } else if (e.target.textContent === "=") {
        if (
            display.innerText.includes("^") ||
            display.innerText.includes(",")
        ) {
            const updateDisplay = display.innerText.replaceAll("^", "**");
            // .replaceAll(",", ".");
            display.innerText = eval(updateDisplay);
            
            return                
        } else display.innerText = eval(display.innerText);
            return
        } else {
        display.innerText += e.target.textContent;
        }
    })
    );