var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    var modifiedMagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        modifiedMagicians[i] = "the Great ".concat(magicians[i]);
    }
    return modifiedMagicians;
}
// Array of magician's names
var magicianNames = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
// Call the function to make the magicians great and store the modified array
var greatMagicians = make_great(__spreadArray([], magicianNames, true));
// Call the function to show the original magician names
console.log("Original Magicians:");
show_magicians(magicianNames);
// Call the function to show the modified magician names
console.log("Modified Magicians:");
show_magicians(greatMagicians);
