function calculateRates() {
    // grab values from form
    var price1 = document.getElementById("price1").value;
    var price2 = document.getElementById("price2").value;
    var diameter1 = document.getElementById("diameter1").value;
    var diameter2 = document.getElementById("diameter2").value;
    var value1 = diameter1*diameter1/price1;
    var value2 = diameter2*diameter2/price2;
    let difference;
    // calculate percentage difference
    if (value1 > value2) {
        difference = value1/value2;
    }
    else {
        difference = value2/value1;
    }
    //document.write(price1);
    //document.write(price2);
    //document.write(diameter1);
    //document.write(diameter2);
    // display difference
    document.write(difference);
}