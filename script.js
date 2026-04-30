let num1 = document.getElementById("btn1");
let num2 = document.getElementById("btn2");
let num3 = document.getElementById("btn3");
let num4 = document.getElementById("btn4");
let num5 = document.getElementById("btn5");
let num6 = document.getElementById("btn6");
let num7 = document.getElementById("btn7");
let num8 = document.getElementById("btn8");
let num9 = document.getElementById("btn9");
let num0 = document.getElementById("btn0");
let add = document.getElementById("btnAdd");
let subtract = document.getElementById("btnSubtract");
let multiply = document.getElementById("btnMultiply");
let divide = document.getElementById("btnDivide");
let equal = document.getElementById("btnEqual");
let clear = document.getElementById("btnClear");
let display = document.getElementById("display");

function appendToDisplay(value) {
    const p = document.createElement("p");
    p.textContent += value;
    display.appendChild(p);
}

let numValues = [];
console.log(numValues);

num1.addEventListener("click", function() {
    appendToDisplay("1");
    numValues.push(1);
});
num2.addEventListener("click", function() {
    appendToDisplay("2");
    numValues.push(2);
});
num3.addEventListener("click", function() {
    appendToDisplay("3");
    numValues.push(3);
});
num4.addEventListener("click", function() {
    appendToDisplay("4");
    numValues.push(4);
});
num5.addEventListener("click", function() {
    appendToDisplay("5");
    numValues.push(5);
});
num6.addEventListener("click", function() {
    appendToDisplay("6");
    numValues.push(6);
});
num7.addEventListener("click", function() {
    appendToDisplay("7");
    numValues.push(7);
});
num8.addEventListener("click", function() {
    appendToDisplay("8");
    numValues.push(8);
});
num9.addEventListener("click", function() {
    appendToDisplay("9");
    numValues.push(9);
});
num0.addEventListener("click", function() {
    appendToDisplay("0");
    numValues.push(0);
});
add.addEventListener("click", function() {
    appendToDisplay("+");
    numValues.push("+");
});
subtract.addEventListener("click", function() {
    appendToDisplay("-");
    numValues.push("-");
});
multiply.addEventListener("click", function() {
    appendToDisplay("*");
    numValues.push("*");
});
divide.addEventListener("click", function() {
    appendToDisplay("/");
    numValues.push("/");
    console.log(numValues);
});


equal.addEventListener("click", function() {
    for (let i = 0; i < numValues.length; i++) {
        if (!isNaN(numValues[i]) === true) {
            numValues[i] = String(numValues[i]);
            for (let j = i + 1; j < numValues.length; j++) {
                if (!isNaN(numValues[j]) === true) {
                    numValues[i] = numValues[i]+numValues[j];
                    numValues.splice(j, 1);
                    console.log(numValues);
                    j--;

                } else {
                    break;
                }
            }
    console.log(numValues);
        } else if (numValues[i] === "+") {
            if (!isNaN(numValues[i-1]) && !isNaN(numValues[i+1])) {
                numValues[i-1] = Number(numValues[i-1]);
                numValues[i+1] = Number(numValues[i+1]);
                console.log(numValues[i-1] + numValues[i+1]);
            }
        } else if (numValues[i] === "-") {
            console.log("This is a subtraction operator: " + numValues[i]);
        } else if (numValues[i] === "*") {
            console.log("This is a multiplication operator: " + numValues[i]);
        } else if (numValues[i] === "/") {
            console.log("This is a division operator: " + numValues[i]);
        }
    }
});


