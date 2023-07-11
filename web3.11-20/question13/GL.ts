const GuestList: string[] = ["Asif", "Jalal", "Ali"];

const InvitationMessage: string = "Dear {name}, you are cordially invited to dinner at my place.";

for (const guest of guestList) {
  const personalizedMessage: string = invitationMessage.replace("{name}", guest);
  console.log(personalizedMessage);
}
