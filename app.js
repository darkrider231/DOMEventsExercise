// DOM EVENTS EXERCISE

// 1a
const button1 = document.querySelector(`#one`);
// 1b
button1.onclick = () => alert("Cool! You can hear/understand a hummingbird and ants");

// 2a
const h3 = document.querySelector(`h3`);
// 2b
h3.addEventListener(`mouseleave`, () => {
    alert("OH NO! The squirrels are on to you. Now you have to leave this reality and move to a new one");
});

// BONUS
// 3a
const form = document.querySelector(`form`);
// 3b
form.addEventListener(`submit`, f => {
     // Stops the form from submitting (AKA Allows us to access the values in the form)
    f.preventDefault();

    // Uses value from form and displays it as an alert
    const a = form.elements.quote.value;
    alert(a);
});

// 4a
const darkMode = document.querySelector(`dm`);
// 4b
for(dark of darkmode){
    darkmode = dark.document.querySelector(`*`);
};

// 5a
const reality = document.querySelector(`#reality`);
// 5b
reality.addEventListener(`ondblclick`, () => {
    alert("You have successfully moved to another reality");
    if (reality.addEventListener(`click`, () =>{
        alert("OH NO! You can only move to a new another reality a couple times. You are stuck in this reality!");
    if (reality.addEventListener(`click`, r  => {
            r = document.getElementById(`#reality`).disabled;
        }));
    }));
});