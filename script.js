// Global Variables
let div = document.getElementById("div");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let myData = ["the Crusher", "the Scientist", "the Gay", "the Coder", "the Jester", "Quick-Silver", "the Fatty"];

// Event Stuff
btn1.addEventListener("click", displayName);
btn2.addEventListener("click", displayAll);

function displayName() {
    let FN = document.getElementById("FN").value;
    let LN = document.getElementById("LN").value;
    let randNick = myData[randomInt(0, myData.length)];
    div.innerHTML = `${FN} "${randNick}" ${LN}`;
}

function displayAll() {
    let FN = document.getElementById("FN").value;
    let LN = document.getElementById("LN").value;
    for(x = 0; x < myData.length; x++) {
        let randNick2 = myData[x];
        div.innerHTML += `${FN} "${randNick2}" ${LN} <br><br>`;
    }
}

