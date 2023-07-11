var guestList1 = ["Asif", "Hassan", "Ali"];
var newGuests1 = ["John", "Emma", "Sarah"];
guestList1 = guestList1.concat(newGuests1);
console.log("Total number of people invited to dinner: ".concat(guestList1.length));
var invitationMessage1 = "Dear {name}, you are cordially invited to dinner at my place.";
for (var _i = 0, guestList1_1 = guestList1; _i < guestList1_1.length; _i++) {
    var guest = guestList1_1[_i];
    var personalizedMessage = invitationMessage1.replace("{name}", guest);
    console.log(personalizedMessage);
}
