function show_magicians(magicians: string[]) {
    for (let magician of magicians) {
      console.log(magician);
    }
  }
  
  function make_great(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
      magicians[i] = `the Great ${magicians[i]}`;
    }
  }
  
  // Array of magician's names
  let magicianNames2: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
  
  // Call the function to make the magicians great
  make_great(magicianNames2);
  
  // Call the function to show the modified magician names
  show_magicians(magicianNames2);
  