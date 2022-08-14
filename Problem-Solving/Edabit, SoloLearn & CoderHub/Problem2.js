// Calculate the amount of fuel a train will need to complete a journey,
//     ask the user how many kilometres the journey will bel
// only continue if the user enters a value greater than zero
// set the amount of fuel to a nother 100 times greater than the number of kilometres
// not allow the amount of fuel to be less than 1500
// finally, display the amount of fuel needed
// -----------------------------
//     Create keywords:
// -----------------------------
var amountFuel = 0
let kiloMetres = prompt("How many kiloMetres?");
if (kiloMetres > 0) {
    amountFuel = 100 * kiloMetres;
    if (amountFuel < 1500) {
        amountFuel = 1500;
    }
    console.log(amountFuel);
}



