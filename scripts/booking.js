/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified.
// Do any of these variables need to be initialized when the page is loaded?
// When do they need to be reset or updated?

let numDays = [0,0,0,0,0], theRate = 35;

    var monday = document.getElementById("monday");
    var tuesday = document.getElementById("tuesday");
    var wednesday = document.getElementById("wednesday");
    var thursday = document.getElementById("thursday");
    var friday = document.getElementById("friday");

    var full = document.getElementById("full");
    var half = document.getElementById("half");
    var calculatedCost = document.getElementById("calculated-cost");
    var clearBtn = document.getElementById("clear-button");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

monday.addEventListener("click", () => {
     if(numDays[0] != 1) {
        numDays[0] = 1;
    }
    calculate(numDays);
    monday.classList.add("clicked");
})

tuesday.addEventListener("click", () => {
     if(numDays[1] != 1) {
        numDays[1] = 1;
    }
    calculate(numDays);
    tuesday.classList.add("clicked");
})

wednesday.addEventListener("click", () => {
    if(numDays[2] != 1) {
        numDays[2] = 1;
    }
    calculate(numDays);
    wednesday.classList.add("clicked");
})

thursday.addEventListener("click", () => {
     if(numDays[3] != 1) {
        numDays[3] = 1;
    }
    calculate(numDays);
    thursday.classList.add("clicked");
})

friday.addEventListener("click", () => {
    if(numDays[4] != 1) {
        numDays[4] = 1;
    }
    calculate(numDays);
    friday.classList.add("clicked");
})

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clearBtn.addEventListener("click", () => {
            for(var x=0; x<numDays.length; x++) {
                numDays[x] = 0;
            }
            calculatedCost.innerHTML = 0;
            monday.classList.remove("clicked");
            tuesday.classList.remove("clicked");
            wednesday.classList.remove("clicked");
            thursday.classList.remove("clicked");
            friday.classList.remove("clicked");
        })

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.


half.addEventListener("click", () => {
    var daysSelected = 0, sumCost = 0;
    theRate = 20;
    for(let x=0; x<numDays.length; x++) {
        if(numDays[x] != 0) {
            daysSelected += 1;
        }
    }
    sumCost = daysSelected * theRate;
    calculatedCost.innerHTML = sumCost;
    half.classList.add("clicked");
    full.classList.remove("clicked");
})

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

full.addEventListener("click", () => {
    var daysSelected = 0, sumCost = 0;
    theRate = 35;
    for(let x=0; x<numDays.length; x++) {
        if(numDays[x] != 0) {
            daysSelected += 1;
        }
    }
    sumCost = daysSelected * theRate;
    calculatedCost.innerHTML = sumCost;
    full.classList.add("clicked");
    half.classList.remove("clicked");
})

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculate(numDays) {
    let daysSelected = 0;
    for(let x=0; x<numDays.length; x++) {
        if(numDays[x] != 0) {
            daysSelected += 1;
        }
    }
    let sumCost = daysSelected * theRate;
    calculatedCost.innerHTML = sumCost;
}