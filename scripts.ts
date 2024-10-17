document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("factorialForm") as HTMLFormElement;
    const resultParagraph = document.getElementById("result") as HTMLParagraphElement;

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        // Get the number from the input field
        const numberInput = document.getElementById("number") as HTMLInputElement;
        const number = parseInt(numberInput.value);

        if (isNaN(number) || number < 0) {
            resultParagraph.textContent = "Geb eine gültige, nicht negative Ganzzahl ein.";
            return;
        }

        // Calculate factorial
        const factorial = calculateFactorial(number);

        // Display the result
        resultParagraph.textContent = `Fakultät von ${number} ist ${factorial}.`;
    });

    function calculateFactorial(n: number): number {
        if (n === 0) {
            return 1;
        }
        let result = 1;
        for (let i = 1; i <= n; i++) {
            result *= i;
        }
        return result;
    }
});
