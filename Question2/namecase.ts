let PersonName :string ="Eric";

//printing in lowercase
console.log(PersonName.toLowerCase());

//printing in uppercase
console.log(PersonName.toUpperCase());

//printing in titlecase
console.log(toTitleCase(PersonName));
function toTitleCase(name: string): string {
    return name.replace(/\b\w/g, (char: string) => char.toUpperCase());
  }