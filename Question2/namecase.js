var PersonName = "Eric";
//printing in lowercase
console.log(PersonName.toLowerCase());
//printing in uppercase
console.log(PersonName.toUpperCase());
//printing in titlecase
console.log(toTitleCase(PersonName));
function toTitleCase(name) {
    return name.replace(/\b\w/g, function (char) { return char.toUpperCase(); });
}
