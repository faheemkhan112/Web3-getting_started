function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great ".concat(magicians[i]);
    }
}
// Array of magician's names
var magicianNames2 = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
// Call the function to make the magicians great
make_great(magicianNames2);
// Call the function to show the modified magician names
show_magicians(magicianNames2);
