# calculator1
hi this is my first cs project
<!DOCTYPE html>
<html>
<head>
    <title>Simple Calculator</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
    <table id="calculator">
        <tr>
            <td>< colspan="4"><input type="text" id="display" readonly /></td>
        </tr>
        <tr>
            <td><input type="button" value="7" onclick="appendToDisplay('7')" /></td>
            <td><input type="button" value="8" onclick="appendToDisplay('8')" /></td>
            <td><input type="button" value="9" onclick="appendToDisplay('9')" /></td>
            <td><input type="button" value="/" onclick="appendToDisplay('/')" /></td>
        </tr>
        <tr>
            <td><input type="button" value="4" onclick="appendToDisplay('4')" /></td>
            <td><input type="button" value="5" onclick="appendToDisplay('5')" /></td>
            <td><input type="button" value="6" onclick="appendToDisplay('6')" /></td>
            <td><input type="button" value="*" onclick="appendToDisplay('*')" /></td>
        </tr>
        <tr>
            <td><input type="button" value="1" onclick="appendToDisplay('1')" /></td>
            <td><input type="button" value="2" onclick="appendToDisplay('2')" /></td>
            <td><input type="button" value="3" onclick="appendToDisplay('3')" /></td>
            <td><input type="button" value="-" onclick="appendToDisplay('-')" /></td>
        </tr>
        <tr>
            <td><input type="button" value="=" onclick="calculate()" /></td>
            <td><input type="button" value="0" onclick="appendToDisplay('0')" /></td>
            <td><input type="button" value="π" onclick="appendToDisplay('π')" /></td>
            <td><input type="button" value="+" onclick="appendToDisplay('+')" /></td>
        </tr>
        <tr>
            <td><input type="button" value="(" onclick="appendToDisplay('(')" /></td>
            <td><input type="button" value=")" onclick="appendToDisplay(')')" /></td>
            <td><input type="button" value="^" onclick="appendToDisplay('^')" /></td>
            <td><input type="button" value="!" onclick="factorial()" /></td>
        </tr>
        <tr>
            <td colspan="3"><input type="button" value="Backspace" onclick="backspace()" /></td>
            <td><input type="button" value="C" onclick="clearDisplay()" /></td>
        </tr>
    </table>

    <script src="script.js"></script>
</body>
</html>
