const names: string[] = ["Faheem", "Jalal", "Faheem", "Ali"];

const message: string = "Hello, {name}! Hope you're doing well.";

for (const name of names) {
  const personalizedMessage: string = message.replace("{name}", name);
  console.log(personalizedMessage);
}
