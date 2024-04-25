document.addEventListener("DOMContentLoaded", function() {
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitInput = document.getElementById("fahrenheit");
    const celsiusLabel = document.getElementById("celsius-label");
    const fahrenheitLabel = document.getElementById("fahrenheit-label");
    const convertBtn = document.getElementById('convert-btn');
    const resetBtn = document.getElementById('reset-btn');
    const reverseBtn = document.getElementById('reverse-btn');

    function resetInputs() {
        celsiusInput.value = '';
        fahrenheitInput.value = '';
        document.getElementById('result-celsius').textContent = '';
        document.getElementById('result-fahrenheit').textContent = '';
    };

    function reverseValues() {
        const tempCelsius = parseFloat(celsiusInput.value);
        const tempFahrenheit = parseFloat(fahrenheitInput.value);
    
        celsiusInput.value = tempFahrenheit;
        fahrenheitInput.value = tempCelsius;

        const tempLabel = celsiusLabel.textContent;
        celsiusLabel.textContent = fahrenheitLabel.textContent;
        fahrenheitLabel.textContent = tempLabel;
    };

    function convertToCelsius() {
        const fahrenheitValue = parseFloat(fahrenheitInput.value);
        const celsiusValue = (fahrenheitValue - 32) * 5/9;
        document.getElementById('result-celsius').textContent = isNaN(celsiusValue) ? "" : celsiusValue.toFixed(2);
    }

    function convertToFahrenheit() {
        const celsiusValue = parseFloat(celsiusInput.value);
        const fahrenheitValue = (celsiusValue * 9/5) + 32;
        document.getElementById('result-fahrenheit').textContent = isNaN(fahrenheitValue) ? "" : fahrenheitValue.toFixed(2);
    }

    celsiusInput.addEventListener("input", function() {
        const celsiusValue = parseFloat(celsiusInput.value);
        const fahrenheitValue = (celsiusValue * 9/5) + 32;

        fahrenheitInput.value = isNaN(fahrenheitValue) ? "" : fahrenheitValue.toFixed(2);
    });

    fahrenheitInput.addEventListener("input", function() {
        const fahrenheitValue = parseFloat(fahrenheitInput.value);
        const celsiusValue = (fahrenheitValue - 32) * 5/9;

        celsiusInput.value = isNaN(celsiusValue) ? "" : celsiusValue.toFixed(2);
    });

    convertBtn.addEventListener('click', function() {
        if (celsiusInput.value !== '') {
            convertToCelsius();
        } else if (fahrenheitInput.value !== '') {
            convertToFahrenheit();
        } else {
            alert('Masukkan nilai yang valid!');
        }
    });

    resetBtn.addEventListener('click', resetInputs);
    reverseBtn.addEventListener('click', reverseValues);
});
