let guestList2: string[] = ["Asif", "Jalal", "Ali"];
const unableToAttend = "Jalal";
const newInvitee = "Hassan";

console.log(`${unableToAttend} is unable to attend the dinner.`);

guestList = guestList2.map((guest) => (guest === unableToAttend ? newInvitee : guest));

const invitationMessage2: string = "Dear {name}, you are cordially invited to dinner at my place.";

for (const guest of guestList) {
  const personalizedMessage: string = invitationMessage2.replace("{name}", guest);
  console.log(personalizedMessage);
}
