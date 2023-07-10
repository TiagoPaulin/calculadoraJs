function insert(number){
    let displayContent = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = displayContent + number;
}

function displayClear(){
    document.getElementById("display").innerHTML = "";
}

function backspace(){
    let display = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = display.substring(0, display.length -1);
}

function calc() {
    let result = document.getElementById("display").innerHTML;
    if (result) {
        document.getElementById("display").innerHTML = eval(result);
    }
}
