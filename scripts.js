let value_1;
let display1;
let display2;
let operator;
let value_2;
let add;
let display_value_2;

function display_2(){
    switch(operator) {
        case 1:
            document.getElementById("display1").innerHTML = display_value_2;
        case 2:
            document.getElementById("display1").innerHTML = display_value_2;
        case 3:
            document.getElementById("display1").innerHTML = display_value_2;
        case 4:
            document.getElementById("display1").innerHTML = display_value_2;
    }
}


function num1(){
    value_1 = document.getElementById("display2").innerHTML;
    document.getElementById("display2").innerHTML = value_1 + 1;
    display1 = document.getElementById("display1").innerHTML = value_1 + 1;
    display_2();

   
}

function num2(){
    value_1 = document.getElementById("display2").innerHTML;
    document.getElementById("display2").innerHTML = value_1 + 2;
    display1 = document.getElementById("display1").innerHTML = value_1 + 2;
    display_2();
}

function num3(){
    value_1 = document.getElementById("display2").innerHTML;
    document.getElementById("display2").innerHTML = value_1 + 3;
    display1 = document.getElementById("display1").innerHTML = value_1 + 3;
    display_2();
}

function num4(){
    value_1 = document.getElementById("display2").innerHTML;
    document.getElementById("display2").innerHTML = value_1 + 4;
    display1 = document.getElementById("display1").innerHTML = value_1 + 4;
    display_2();
}

function num5(){
    value_1 = document.getElementById("display2").innerHTML;
    document.getElementById("display2").innerHTML = value_1 + 5;
    display1 = document.getElementById("display1").innerHTML = value_1 + 5;
    display_2();
}

function num6(){
    value_1 = document.getElementById("display2").innerHTML;
    document.getElementById("display2").innerHTML = value_1 + 6;
    display1 = document.getElementById("display1").innerHTML = value_1 + 6;
    display_2();
}

function num7(){
    value_1 = document.getElementById("display2").innerHTML;
    document.getElementById("display2").innerHTML = value_1 + 7;
    display1 = document.getElementById("display1").innerHTML = value_1 + 7;
    display_2();
}

function num8(){
    value_1 = document.getElementById("display2").innerHTML;
    document.getElementById("display2").innerHTML = value_1 + 8;
    display1 = document.getElementById("display1").innerHTML = value_1 + 8;
    display_2();
}

function num9(){
    value_1 = document.getElementById("display2").innerHTML;
    document.getElementById("display2").innerHTML = value_1 + 9;
    display1 = document.getElementById("display1").innerHTML = value_1 + 9;
    display_2();
}

function num0(){
    value_1 = document.getElementById("display2").innerHTML;
    document.getElementById("display2").innerHTML = value_1 + 0;
    display2 = document.getElementById("display1").innerHTML = value_1 + 8;
}

function del(){
    value_1 = document.getElementById("display2").innerHTML;
    let ersaer = value_1.slice(0, -1);
    document.getElementById("display2").innerHTML = ersaer;

}

function clr(){
    document.getElementById("display2").innerHTML = "";
    document.getElementById("display1").innerHTML = "";
    operator = null;
    value_2 = null;
    add = null;
    display_value_2 = null;
    value_1 = null;
    display1 = null;
    display2 = null;
}


function addition() {
    value_2 = parseInt(document.getElementById("display2").innerHTML);
    document.getElementById("display2").innerHTML = ""
    operator = 1;
    display_value_2 = document.getElementById("display1").innerHTML = display1 + " + ";
}

function substrarion() {
    value_2 = parseInt(document.getElementById("display2").innerHTML);
    document.getElementById("display2").innerHTML = ""
    operator = 2;
    display_value_2 = document.getElementById("display1").innerHTML = display1 + " - ";
}

function multiplication() {
    value_2 = parseInt(document.getElementById("display2").innerHTML);
    document.getElementById("display2").innerHTML = ""
    operator = 3;
    display_value_2 = document.getElementById("display1").innerHTML = display1 + " x ";
}

function divition() {
    value_2 = parseInt(document.getElementById("display2").innerHTML);
    document.getElementById("display2").innerHTML = ""
    operator = 4;
    display_value_2 = document.getElementById("display1").innerHTML = display1 + " / ";
}

function equals(){
    if (operator == 1){
        let value_3 = parseInt(document.getElementById("display2").innerHTML);
        add = value_2 + value_3;
        document.getElementById("display2").innerHTML = add;
        document.getElementById("display1").innerHTML = String(value_2) + " + " + String(value_3);
    }
    else if (operator == 2){
        let value_3 = parseInt(document.getElementById("display2").innerHTML);
        add = value_2 - value_3;
        document.getElementById("display2").innerHTML = add;
        document.getElementById("display1").innerHTML = String(value_2) + " - " + String(value_3);
    }
    else if (operator == 3){
        let value_3 = parseInt(document.getElementById("display2").innerHTML);
        add = value_2 * value_3;
        document.getElementById("display2").innerHTML = add;
        document.getElementById("display1").innerHTML = String(value_2) + " x " + String(value_3);
    }
    else if (operator == 4){
        let value_3 = parseInt(document.getElementById("display2").innerHTML);
        add = value_2 / value_3;
        document.getElementById("display2").innerHTML = add;
        document.getElementById("display1").innerHTML = String(value_2) + " / " + String(value_3);
    }
    else {
        let value_3 = parseInt(document.getElementById("display2").innerHTML);
        add = value_2 + value_3;
        document.getElementById("display2").innerHTML = "error";
    }
    
}