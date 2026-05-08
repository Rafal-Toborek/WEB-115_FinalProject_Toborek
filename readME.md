# Custom Tournament Bracket Builder
**WEB-115 Final Project Proposal**
Student: [Rafal Toborek] | Repo: `WEB-115_FinalProject_Toborek`

---

## Overview


My app will be a 4 function calculator that will also be able to calculate a variaty of calculations. Outside of simple arithmatic I am planning to have built in formulas that the user can use, history that will be stored in local storage for the user to reuse previous values. There will be history for calculations and values from an array that can be reused. If statements will be used to display certain buttons based what part of the menu you are in. There will be a mix of text inputs as well as button pressed inputs on a variaty of menus and types of equations. Furthermore I am planning to make a game that will help practice simple arithmatic based on randomly based questions that run on a timer. DOM create elements will be used to display certain values based on user inputs. I will try to make formulas in classes so that they are as expandable as possible in the future.

---

## Features


Basic 4 function calculator.
Built in functions and specific formulas like being able to calculate certain shapes and certain types of numeric manupulation.
A fighting game that randomly generates different kinds of math problems to attack enemy as enemy slowly drains your health.
History feature that tracks previous values and lets you reuse them. Will be stored in localstorage.


---

## Core Requirements Coverage

| Requirement | Implementation |
|---|---|
| **If Statements & Loops** | Generating the bracket requires looping over contestants to pair them into first-round matches. If statements determine whether a round is complete (all winners chosen) before unlocking the next round, and check edge cases like odd contestant counts or a bye slot. |

If statements will be used to give certain options at different times that make sense. The loops will also be used to run certain arithmatics and to run the functions that allow the user to input multiple times.


| **Event Listeners** | Button clicks and key inputs will be used to prompt the calculator to perform different tasks. |


| **DOM Element Creation** | As the user inputs values they will be displayed using .createElement() and .appendChild(). |


| **Classes & Subclasses** | A main class for formulas will hold simple input and output with subclasses for specific formulas that can have multiple inputs (for example a extra input for height in a 3D shape formula). Each subclass would also be able to have its own math formula built in so that if the dev wants to add more formulas he can do that easily. |



---

## DLC — Additional Topics

### JSON & Local Storage
All history values would be stored in local storage so that if the user leaves and comes back they are able to reuse previous values for calculations.

---

## Tech Stack

- HTML, CSS, Vanilla JavaScript
- `localStorage` for tournament persistence
- VS Code + GitHub

Live Site: https://rafal-toborek.github.io/WEB-115_FinalProject_Toborek/