let guestList: string[] = ["Asif", "Hassan", "Ali"];
const newGuests: string[] = ["John", "Emma", "Sarah"];

console.log("Due to the availability of a bigger dinner table, we can invite more people for dinner.");

guestList.unshift(...newGuests.slice(0, 1)); // Add one guest to the beginning
guestList.splice(Math.ceil(guestList.length / 2), 0, ...newGuests.slice(1, 2)); // Add one guest to the middle
guestList.push(...newGuests.slice(2)); // Add one guest to the end

const invitationMessage: string = "Dear {name}, you are cordially invited to dinner at my place.";

for (const guest of guestList) {
  const personalizedMessage: string = invitationMessage.replace("{name}", guest);
  console.log(personalizedMessage);
}
