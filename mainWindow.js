function calculateRates() {
    // grab values from form
    var price1 = document.getElementById("price1").value;
    var price2 = document.getElementById("price2").value;
    var diameter1 = document.getElementById("diameter1").value;
    var diameter2 = document.getElementById("diameter2").value;
    var value1 = diameter1*diameter1/price1;
    var value2 = diameter2*diameter2/price2;

    let difference;
    let betterPizza;
    let worsePizza;
    let message;

    // calculate percentage difference
    if (value1 > value2) {
        difference = value1/value2;
        betterPizza = 'Pizza 1';
        worsePizza = 'Pizza 2';
    }
    else {
        difference = value2/value1;
        betterPizza = 'Pizza 2';
        worsePizza = 'Pizza 1';
    }
    // converting difference to a percentage
    difference = difference*100;

    message = betterPizza + " has " + difference + "% more value than " + worsePizza + ". "

    // display difference
    //document.documentElement.innerHTML(message);
    document.write(message);
}