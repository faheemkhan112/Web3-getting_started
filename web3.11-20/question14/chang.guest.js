var guestList2 = ["Asif", "Jalal", "Ali"];
var unableToAttend = "Jalal";
var newInvitee = "Hassan";
console.log("".concat(unableToAttend, " is unable to attend the dinner."));
guestList = guestList2.map(function (guest) { return (guest === unableToAttend ? newInvitee : guest); });
var invitationMessage2 = "Dear {name}, you are cordially invited to dinner at my place.";
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var guest = guestList_1[_i];
    var personalizedMessage = invitationMessage2.replace("{name}", guest);
    console.log(personalizedMessage);
}
