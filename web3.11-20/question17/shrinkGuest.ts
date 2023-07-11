let guestList_: string[] = ["John", "Asif", "Hassan", "Ali"];
const maxGuests = 2;

console.log("Due to the unavailability of the new dinner table, we can only invite two people for dinner.");

while (guestList_.length > maxGuests) {
  const removedGuest: string | undefined = guestList_.pop();
  if (removedGuest) {
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
  }
}
