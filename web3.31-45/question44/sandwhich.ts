function make_sandwich(items: string[]) {
    console.log("Sandwich Summary:");
    console.log("Bread + " + items.join(" + ") + " + Bread");
    console.log("Enjoy your sandwich!\n");
  }
  
  // Call the function with different number of arguments
  make_sandwich(["Ham", "Cheese"]);
  make_sandwich(["Turkey", "Lettuce", "Tomato"]);
  make_sandwich(["Chicken", "Bacon", "Avocado", "Mayonnaise"]);
  