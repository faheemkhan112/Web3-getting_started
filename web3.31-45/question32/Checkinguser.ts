let current_users: string[] = ["john", "alice", "bob", "sarah", "michael"];
let new_users: string[] = ["matt", "ALICE", "johnny", "emma", "sarah"];

for (let new_user of new_users) {
  let usernameTaken: boolean = false;

  for (let current_user of current_users) {
    if (current_user.toLowerCase() === new_user.toLowerCase()) {
      usernameTaken = true;
      break;
    }
  }

  if (usernameTaken) {
    console.log(`Sorry, the username '${new_user}' is already taken. Please enter a new username.`);
  } else {
    console.log(`Congratulations! The username '${new_user}' is available.`);
  }
}
