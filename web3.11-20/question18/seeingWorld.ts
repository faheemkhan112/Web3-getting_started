let places: string[] = ["Tokyo", "Hunza Valley", "Naran Kaghan", "New York", "Taj Mahal"];

console.log("Original Order:");
console.log(places);

console.log("\nAlphabetical Order (without modifying the original list):");
console.log([...places].sort());

console.log("\nOriginal Order (unchanged):");
console.log(places);

console.log("\nReverse Alphabetical Order (without modifying the original list):");
console.log([...places].sort().reverse());

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
