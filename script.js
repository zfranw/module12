const calculateBtn = document.getElementById('calculateBtn');
const weightInput = document.getElementById('weightInput');
const heightInput = document.getElementById('heightInput');
const resultDiv = document.getElementById('result');

calculateBtn.addEventListener('click', () => {
    const weight = Number(weightInput.value);
    const height = Number(heightInput.value);

    if (!isNaN(weight) && !isNaN(height) && height !== 0) {
        const bmi = weight / (height * height);
        resultDiv.innerText = `Your BMI is: ${bmi.toFixed(2)}`;
    } else {
        resultDiv.innerText = 'Please enter valid values for weight and height.';
    }
});
