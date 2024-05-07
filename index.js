function convertTemperature() {
    const temperatureInput = document.getElementById('temperature');
    const unit = document.getElementById('unit').value;
    let result = "";

    if (temperatureInput.value === "") {
        const errorElement = document.getElementById('result');
        errorElement.classList.add('error-message');
        errorElement.innerHTML = "&#10006; Invalid Temperature";
        return; 
    }

    document.getElementById('result').classList.remove('error-message');

    const temperature = parseFloat(temperatureInput.value);

    switch (unit) {
        case 'celsius':
            result = `${temperature.toFixed(2)}°C`;
            break;
        case 'fahrenheit':
            result = `${((temperature * 9/5) + 32).toFixed(2)}°F`;
            break;
        case 'kelvin':
            result = `${(temperature + 273.15).toFixed(2)}K`;
            break;
    }

    const resultElement = document.getElementById('result');
    resultElement.classList.remove('error-message');
    resultElement.classList.add('valid-result');
    resultElement.innerHTML = `&#10004; Converted Temperature: ${result}`;
}



function updateTime() {
    const timeElement = document.getElementById('time');
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'pm' : 'am';
    const formattedHours = hours % 12 || 12;
    const currentTime = `${formattedHours}:${minutes} ${ampm}`;
    timeElement.textContent = currentTime;
}

setInterval(updateTime, 60000);
updateTime();

