function make_shirt(size: string = "Large", message: string = "I love TypeScript") {
    console.log(`The shirt size is ${size}. The message printed on the shirt is: ${message}`);
  }
  
  // Large shirt with default message
  make_shirt();
  
  // Medium shirt with default message
  make_shirt("Medium");
  
  // Custom-sized shirt with a different message
  make_shirt("Small", "Keep coding!");
  