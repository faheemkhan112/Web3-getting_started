let Name: string = "John";
let age: number = 25;
let Numbers: number[] = [1, 2, 3, 4, 5];

console.log("Equality test with strings: 'John' == 'John'");
console.log(Name == "John"); // true

console.log("Inequality test with strings: 'John' != 'Mary'");
console.log(Name != "Mary"); // true

console.log("Lower case test: 'John' == 'john'");
console.log(Name.toLowerCase() == "john"); // false

console.log("Numeric equality test: 25 == 25");
console.log(age == 25); // true

console.log("Numeric inequality test: 25 != 30");
console.log(age != 30); // true

console.log("Greater than test: 25 > 20");
console.log(age > 20); // true

console.log("Less than test: 25 < 30");
console.log(age < 30); // true

console.log("Greater than or equal to test: 25 >= 25");
console.log(age >= 25); // true

console.log("Less than or equal to test: 25 <= 30");
console.log(age <= 30); // true

console.log("Logical AND test: true && false");
console.log(true && false); // false

console.log("Logical OR test: true || false");
console.log(true || false); // true

console.log("Array inclusion test: [1, 2, 3, 4, 5] includes 3");
console.log(Numbers.includes(3)); // true

console.log("Array exclusion test: [1, 2, 3, 4, 5] does not include 6");
console.log(!Numbers.includes(6)); // true
