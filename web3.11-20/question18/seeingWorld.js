var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ["Tokyo", "Hunza Valley", "Naran Kaghan", "New York", "Taj Mahal"];
console.log("Original Order:");
console.log(places);
console.log("\nAlphabetical Order (without modifying the original list):");
console.log(__spreadArray([], places, true).sort());
console.log("\nOriginal Order (unchanged):");
console.log(places);
console.log("\nReverse Alphabetical Order (without modifying the original list):");
console.log(__spreadArray([], places, true).sort().reverse());
console.log("\nOriginal Order (unchanged):");
console.log(places);
console.log("\nReversed Order:");
places.reverse();
console.log(places);
console.log("\nReversed Order Again:");
places.reverse();
console.log(places);
console.log("\nSorted in Alphabetical Order:");
places.sort();
console.log(places);
console.log("\nSorted in Reverse Alphabetical Order:");
places.sort().reverse();
console.log(places);
