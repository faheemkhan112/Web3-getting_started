var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var guestList = ["Asif", "Hassan", "Ali"];
var newGuests = ["John", "Emma", "Sarah"];
console.log("Due to the availability of a bigger dinner table, we can invite more people for dinner.");
guestList.unshift.apply(guestList, newGuests.slice(0, 1)); // Add one guest to the beginning
guestList.splice.apply(// Add one guest to the beginning
guestList, __spreadArray([Math.ceil(guestList.length / 2), 0], newGuests.slice(1, 2), false)); // Add one guest to the middle
guestList.push.apply(// Add one guest to the middle
guestList, newGuests.slice(2)); // Add one guest to the end
var invitationMessage = "Dear {name}, you are cordially invited to dinner at my place.";
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var guest = guestList_1[_i];
    var personalizedMessage = invitationMessage.replace("{name}", guest);
    console.log(personalizedMessage);
}
