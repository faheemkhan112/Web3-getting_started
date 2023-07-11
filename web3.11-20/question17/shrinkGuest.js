var guestList_ = ["John", "Asif", "Hassan", "Ali"];
var maxGuests = 2;
console.log("Due to the unavailability of the new dinner table, we can only invite two people for dinner.");
while (guestList_.length > maxGuests) {
    var removedGuest = guestList_.pop();
    if (removedGuest) {
        console.log("Sorry, ".concat(removedGuest, ", we can't invite you to dinner."));
    }
}
