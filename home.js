// clock
function rtClock() {
    var currentdate = new Date(); 
    var day = String(currentdate.getDate()).padStart(2, '0');
    var month = String(currentdate.getMonth() + 1).padStart(2, '0');
    var year = String(currentdate.getFullYear()).padStart(4, '0');
    var date = day + "/" + month + "/" + year;
    var h = String(currentdate.getHours()).padStart(2, '0');
    var m = String(currentdate.getMinutes()).padStart(2, '0');
    var s = String(currentdate.getSeconds()).padStart(2, '0');
    var clock = document.getElementById("Time");
    var ddate = document.getElementById("Date");
    clock.textContent = h + ":" + m + ":" + s
    ddate.textContent=date
    setTimeout(rtClock, 1000);
}
rtClock();

// calculator
const display=document.getElementById("calcDisplay")
function show(input) {
    const lastChar = display.value.slice(-1);
    const operators = ['+', '-', '/', '×'];
    if (operators.includes(lastChar) && operators.includes(input)) {
        return;
    }
    display.value += input;
}

function clearDisp(){
    display.value=""
}
function calculate() {
    try {
        let expression = display.value.replace(/\^/g, '**').replace("×", '*');
        display.value = eval(expression);
    } catch (error) {
        display.value = "ERROR!";
    }
}
function backspace() {
    display.value = display.value.slice(0, -1);
}
