
// Adult Single: $89
// Child Single: £49

// Adult Weekend: £189
// Child Weekend: £109

function calculatePrice(booking) {
    // Getting data

    // Single Adult 
    var sa = document.getElementById("singleAdult");
    var singleAdult = sa.options[sa.selectedIndex].value;
    singleAdult = parseInt(singleAdult);

    // Single Child
    var sc = document.getElementById("singleChild");
    var singleChild = sc.options[sc.selectedIndex].value;
    singleChild = parseInt(singleChild);

    // Weekend Adult
    var wa = document.getElementById("weekAdult");
    var weekAdult = wa.options[wa.selectedIndex].value;
    weekAdult = parseInt(weekAdult);

    // Weekend Child
    var wc = document.getElementById("weekChild");
    var weekChild = wc.options[wc.selectedIndex].value;
    weekChild = parseInt(weekChild);

    // Calculate total value
    var total = (89 * singleAdult) + (49 * singleChild) + (189 * weekAdult) + (109 * weekChild);

    // Print value
    document.getElementById("totalPrice").value = "£" + String(total);
}

function validateForm() {
    var mainForm = document.forms["mainForm"]
    var bookingForm = mainForm["booking"]
    let name = mainForm["name"].value;
    let email = mainForm["email"].value;
    let phoneNumber = mainForm["phoneNumber"].value;
    let singleAdult = bookingForm["singleAdult"].value;
    let singleChild = bookingForm["singleChild"].value;
    let weekAdult = bookingForm["weekAdult"].value;
    let weekChild = bookingForm["weekChild"].value;
    if (name == "") {
        alert("'"+name+"' isn't a valid name.")
    } else if (email == "") {
        alert("'"+email+"' isn't a valid email.")
    } else if (phoneNumber == "") {
        alert("'"+phoneNumber+"' isn't a valid phone number.")
    } else if (singleAdult == 0 && singleChild == 0 && weekAdult == 0 && weekChild == 0) {
        alert("No tickets selected.")
    }
}