document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("factorialForm");
    var resultParagraph = document.getElementById("result");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        // Get the number from the input field
        var numberInput = document.getElementById("number");
        var number = parseInt(numberInput.value);
        if (isNaN(number) || number < 0) {
            resultParagraph.textContent = "Geb eine gültige, nicht negative Ganzzahl ein.";
            return;
        }
        // Calculate factorial
        var factorial = calculateFactorial(number);
        // Display the result
        resultParagraph.textContent = "Fakultät von " + number + " ist " + factorial + ".";
    });
    function calculateFactorial(n) {
        if (n === 0) {
            return 1;
        }
        var result = 1;
        for (var i = 1; i <= n; i++) {
            result *= i;
        }
        return result;
    }
});
