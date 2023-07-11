let guestList1: string[] = ["Asif", "Hassan", "Ali"];
const newGuests1: string[] = ["John", "Emma", "Sarah"];

guestList1 = guestList1.concat(newGuests1);

console.log(`Total number of people invited to dinner: ${guestList1.length}`);

const invitationMessage1: string = "Dear {name}, you are cordially invited to dinner at my place.";

for (const guest of guestList1) {
  const personalizedMessage: string = invitationMessage1.replace("{name}", guest);
  console.log(personalizedMessage);
}
