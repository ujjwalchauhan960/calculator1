function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculate() {
    var expression = document.getElementById('display').value;
    var result = eval(expression);
    document.getElementById('display').value = result;
}


function factorial() {
    var num = parseInt(document.getElementById('display').value);
    var result = 1;
    for (var i = 1; i <= num; i++) {
        result *= i;
    }
    document.getElementById('display').value = result;
}

function backspace() {
    var displayValue = document.getElementById('display').value;
    document.getElementById('display').value = displayValue.slice(0, -1);
}

function clearDisplay() {
    document.getElementById('display').value = '';
}
