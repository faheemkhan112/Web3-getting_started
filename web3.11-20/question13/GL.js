var guestList = ["Asif", "Jalal", "Ali"];
var invitationMessage = "Dear {name}, you are cordially invited to dinner at my place.";
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var guest = guestList_1[_i];
    var personalizedMessage = invitationMessage.replace("{name}", guest);
    console.log(personalizedMessage);
}
