function show_magicians(magicians: string[]) {
    for (let magician of magicians) {
      console.log(magician);
    }
  }
  
  function make_great(magicians: string[]): string[] {
    let modifiedMagicians: string[] = [];
  
    for (let i = 0; i < magicians.length; i++) {
      modifiedMagicians[i] = `the Great ${magicians[i]}`;
    }
  
    return modifiedMagicians;
  }
  
  // Array of magician's names
  let magicianNames: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
  
  // Call the function to make the magicians great and store the modified array
  let greatMagicians: string[] = make_great([...magicianNames]);
  
  // Call the function to show the original magician names
  console.log("Original Magicians:");
  show_magicians(magicianNames);
  
  // Call the function to show the modified magician names
  console.log("Modified Magicians:");
  show_magicians(greatMagicians);
  