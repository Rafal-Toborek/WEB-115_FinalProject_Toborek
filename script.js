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
let decimal = document.getElementById("btnDecimal");
let subtract = document.getElementById("btnSubtract");
let multiply = document.getElementById("btnMultiply");
let divide = document.getElementById("btnDivide");
let equal = document.getElementById("btnEqual");
let clear = document.getElementById("btnClear");
let display = document.getElementById("display");
let backspace = document.getElementById("btnBackspace");
let formulas = document.getElementById("formulas");
let historyDisplay = document.getElementById("historyDisplay");
let clearHistoryBtn = document.getElementById("clearHistoryBtn");



// Function called to display numbers used in calculation
function appendToDisplay(value) {
    const p = document.createElement("p");
    p.textContent += value;
    display.appendChild(p);
}

// ------------------------------ Local storage  ------------------------------
// Function used to save history to local storage
function saveHistory(historyArray) {
    window.localStorage.setItem("calcHistory", JSON.stringify(historyArray));
}

// Function to get items from local storage
function loadHistory() {
    const stored = window.localStorage.getItem("calcHistory");
    if (stored) {
        return JSON.parse(stored);
    }
    return [];
}

// Function to clear local storage
function clearHistory() {
    window.localStorage.removeItem("calcHistory");
}
// ------------------------------ Local storage  ------------------------------

// Starting arrays and history
let history = loadHistory();
let numValues = [];

// ------------------------------ Button functions that append corresponding values to arrays  ------------------------------
clearHistoryBtn.addEventListener("click", function() {
    clearHistory()
})

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
decimal.addEventListener("click", function() {
    appendToDisplay(".");
    numValues.push(".");
});
divide.addEventListener("click", function() {
    appendToDisplay("/");
    numValues.push("/");
    console.log(numValues);
    
});
// ------------------------------ Button functions that append corresponding values to arrays  ------------------------------

// ------------------------------ Buttons to remove values/operators from work screen ------------------------------
// Clear work panel and num values array
clear.addEventListener("click", function() {
    display.textContent = "";
    numValues = [];
    console.log(numValues);
});

// Clears only the last value/operator inputted
backspace.addEventListener("click", function() {
    display.textContent = display.textContent.slice(0, -1);
    numValues.pop();
    console.log(numValues);
});
// ------------------------------ Buttons to remove values/operators from work screen ------------------------------

// Equal sign button begins calculation
equal.addEventListener("click", function() {
    for (let i = 0; i < numValues.length; i++) {
        if (!isNaN(numValues[i]) === true) {
            numValues[i] = String(numValues[i]);
            for (let j = i + 1; j < numValues.length; j++) {
                if (!isNaN(numValues[j]) === true) {
                    numValues[i] = numValues[i]+numValues[j];
                    numValues.splice(j, 1);
                    console.log(numValues);
                    numValues[i] = String(numValues[i]);
                    j--;

                } else {
                    break;
                }
            }
    console.log(numValues);
        } else if (numValues[i] === "+") {
            console.log("This is an addition operator: " + numValues[i]);
        } else if (numValues[i] === "-") {
            console.log("This is a subtraction operator: " + numValues[i]);
        } else if (numValues[i] === "*") {
            console.log("This is a multiplication operator: " + numValues[i]);
        } else if (numValues[i] === "/") {
            console.log("This is a division operator: " + numValues[i]);
        } // Console logs to track if program recongnises operators (code works without them but tends to be useful for debugging)
    }
    let expression = numValues.join("");
    numValues = [expression];
    console.log(numValues);
    // Merges all of the values to allow for eval function 

    let answer = eval(expression); // Calculation and push to different arrays for storage
    display.textContent = answer;
    numValues = [];
    numValues.push(answer);
    expression = "";
    history.push(answer);
    saveHistory(history); 
    console.log(history);
    try { // History button is created when history button doesnt exist
        if (btnHistory !== null && btnHistory.length === 0) {
            console.log("History button already exists");
        } 
    } catch {
        console.log("History button does not exist, creating it now");
        displayHistoryButton();
    }
});

// Displaying history button when there are things in history and history logic
function displayHistoryButton() {
    console.log(history.length);
    if (history.length > 0) {
        let btnHistory = document.createElement("button");
        btnHistory.id = "btnHistory";
        btnHistory.textContent = "History";
        document.body.appendChild(btnHistory);

        btnHistory.addEventListener("click", function() {
        historyDisplay.textContent = "";
        for (let i = 0; i < history.length; i++) {
            const btnHistoryItem = document.createElement("button");
            btnHistoryItem.textContent = history[i];
            btnHistoryItem.id = "btnHistoryItem" + [i];
            historyDisplay.appendChild(btnHistoryItem);
            btnHistoryItem.addEventListener("click", function() {
                console.log("History item " + i + " clicked: " + history[i]);
                numValues.push(history[i]);
                display.textContent = history[i];
            });
        }
        });
    } else {
        
    };
}




// ------------------------------ Shape formula classes and subclasses ------------------------------

// Main class that is used as framework for shapes calculations
class ShapeFormula {
    constructor(name) {
        this.name = name;
        this.calculate = function(inputs) {
            console.log("calculate() not implemented for " + name);
        }
    }
}
 
// Cone volume formula subclass
class ConeVolume extends ShapeFormula {
    constructor() {
        super("Cone Volume");
        this.radiusInput = document.createElement("input");
        this.radiusInput.type = "number";
        this.radiusInput.placeholder = "Radius";
        this.heightInput = document.createElement("input");
        this.heightInput.type = "number";
        this.heightInput.placeholder = "Height";
        this.calculate = function() {
            let r = parseFloat(this.radiusInput.value);
            let h = parseFloat(this.heightInput.value);
            let result = (1 / 3) * Math.PI * r * r * h;
            return result;
        }
    }
}
 
// Sphere volume formula subclass
class SphereVolume extends ShapeFormula {
    constructor() {
        super("Sphere Volume");
        this.radiusInput = document.createElement("input");
        this.radiusInput.type = "number";
        this.radiusInput.placeholder = "Radius";
        this.calculate = function() {
            let r = parseFloat(this.radiusInput.value);
            let result = (4 / 3) * Math.PI * r * r * r;
            return result;
        }
    }
}

// Cone surface area formula subclass
class ConeSurfaceArea extends ShapeFormula {
    constructor() {
        super("Cone Surface Area");
        this.radiusInput = document.createElement("input");
        this.radiusInput.type = "number";
        this.radiusInput.placeholder = "Radius";
        this.heightInput = document.createElement("input");
        this.heightInput.type = "number";
        this.heightInput.placeholder = "Height";
        this.calculate = function() {
            let r = parseFloat(this.radiusInput.value);
            let h = parseFloat(this.heightInput.value);
            let slantHeight = Math.sqrt(r * r + h * h);
            let result = Math.PI * r * r + Math.PI * r * slantHeight;
            return result;
        }
    }
}
 
// Cone surface area formula subclass
class SphereSurfaceArea extends ShapeFormula {
    constructor() {
        super("Sphere Surface Area");
        this.radiusInput = document.createElement("input");
        this.radiusInput.type = "number";
        this.radiusInput.placeholder = "Radius";
        this.calculate = function() {
            let r = parseFloat(this.radiusInput.value);
            let result = 4 * Math.PI * r * r;
            return result;
        }
    }
}
 

// Creating of each 
let coneVolume = new ConeVolume();
let sphereVolume = new SphereVolume();
let coneSurfaceArea = new ConeSurfaceArea();
let sphereSurfaceArea = new SphereSurfaceArea();
 
let formulaInputArea = null;
// ------------------------------ Shape formula classes and subclasses ------------------------------

// ------------------------------ Shape formula functions ------------------------------
// Creation of buttons for the formulas 
formulas.addEventListener("click", function() {
    let coneVolumeBtn = document.createElement("button");
    coneVolumeBtn.textContent = "Cone Volume";
    document.body.appendChild(coneVolumeBtn);
 
    let sphereVolumeBtn = document.createElement("button");
    sphereVolumeBtn.textContent = "Sphere Volume";
    document.body.appendChild(sphereVolumeBtn);
 
    let coneSurfaceAreaBtn = document.createElement("button");
    coneSurfaceAreaBtn.textContent = "Cone Surface Area";
    document.body.appendChild(coneSurfaceAreaBtn);
 
    let sphereSurfaceAreaBtn = document.createElement("button");
    sphereSurfaceAreaBtn.textContent = "Sphere Surface Area";
    document.body.appendChild(sphereSurfaceAreaBtn);
 
    if (formulaInputArea === null) {
        formulaInputArea = document.createElement("div");
        formulaInputArea.id = "formulaInputArea";
        document.body.appendChild(formulaInputArea);
    }
    
    // Cone volume calculation
    coneVolumeBtn.addEventListener("click", function() {
        formulaInputArea.innerHTML = "";
        let title = document.createElement("p");
        title.textContent = coneVolume.name;
        formulaInputArea.appendChild(title);
        formulaInputArea.appendChild(coneVolume.radiusInput);
        formulaInputArea.appendChild(coneVolume.heightInput);
        let submitBtn = document.createElement("button");
        submitBtn.textContent = "Submit";
        formulaInputArea.appendChild(submitBtn);
        submitBtn.addEventListener("click", function() {
            let result = coneVolume.calculate();
            result = Math.round(result * 10000) / 10000;
            display.textContent = result;
            numValues = [];
            numValues.push(result);
            history.push(result);
            saveHistory(history); // Adding to history
            try {
                if (btnHistory !== null && btnHistory.length === 0) {
                    console.log("History button already exists");
                }
            } catch {
                console.log("History button does not exist, creating it now");
                displayHistoryButton();
            } // Making history button appear after calculation
        });
    });
    // Sphere volume calculation
    sphereVolumeBtn.addEventListener("click", function() {
        formulaInputArea.innerHTML = "";
        let title = document.createElement("p");
        title.textContent = sphereVolume.name;
        formulaInputArea.appendChild(title);
        formulaInputArea.appendChild(sphereVolume.radiusInput);
        let submitBtn = document.createElement("button");
        submitBtn.textContent = "Submit";
        formulaInputArea.appendChild(submitBtn);
        submitBtn.addEventListener("click", function() {
            let result = sphereVolume.calculate();
            result = Math.round(result * 10000) / 10000;
            display.textContent = result;
            numValues = [];
            numValues.push(result);
            history.push(result);
            saveHistory(history);
            console.log("Sphere Volume result: " + result);
            console.log(history);
            try {
                if (btnHistory !== null && btnHistory.length === 0) {
                    console.log("History button already exists");
                }
            } catch {
                console.log("History button does not exist, creating it now");
                displayHistoryButton();
            } // Making history button appear after calculation
        });
    });
    // Cone surface area calculation
    coneSurfaceAreaBtn.addEventListener("click", function() {
        formulaInputArea.innerHTML = "";
        let title = document.createElement("p");
        title.textContent = coneSurfaceArea.name;
        formulaInputArea.appendChild(title);
        formulaInputArea.appendChild(coneSurfaceArea.radiusInput);
        formulaInputArea.appendChild(coneSurfaceArea.heightInput);
        let submitBtn = document.createElement("button");
        submitBtn.textContent = "Submit";
        formulaInputArea.appendChild(submitBtn);
        submitBtn.addEventListener("click", function() {
            let result = coneSurfaceArea.calculate();
            result = Math.round(result * 10000) / 10000;
            display.textContent = result;
            numValues = [];
            numValues.push(result);
            history.push(result);
            saveHistory(history);
            console.log("Cone Surface Area result: " + result);
            console.log(history);
            try {
                if (btnHistory !== null && btnHistory.length === 0) {
                    console.log("History button already exists");
                }
            } catch {
                console.log("History button does not exist, creating it now");
                displayHistoryButton();
            } // Making history button appear after calculation
        });
    });
    // Sphere surface area calculation
    sphereSurfaceAreaBtn.addEventListener("click", function() {
        formulaInputArea.innerHTML = "";
        let title = document.createElement("p");
        title.textContent = sphereSurfaceArea.name;
        formulaInputArea.appendChild(title);
        formulaInputArea.appendChild(sphereSurfaceArea.radiusInput);
        let submitBtn = document.createElement("button");
        submitBtn.textContent = "Submit";
        formulaInputArea.appendChild(submitBtn);
        submitBtn.addEventListener("click", function() {
            let result = sphereSurfaceArea.calculate();
            result = Math.round(result * 10000) / 10000;
            display.textContent = result;
            numValues = [];
            numValues.push(result);
            history.push(result);
            saveHistory(history);
            console.log("Sphere Surface Area result: " + result);
            console.log(history);
            try {
                if (btnHistory !== null && btnHistory.length === 0) {
                    console.log("History button already exists");
                }
            } catch {
                console.log("History button does not exist, creating it now");
                displayHistoryButton();
            } // Making history button appear after calculation
        });
    });
});

// ------------------------------ Shape formula functions ------------------------------

// A new formula can be added by simple creating a new subclass, making a new button, and using the same functions as seen above with new variables.
// This allows for new formulas and features to be added in the future.

// Originally I had planned to make a math review game that the code for would be placed down here however I ran out of time.

//       __    __
//     o-''))_____\\
//     "--__/ * * * )
//     c_c__/-c____/