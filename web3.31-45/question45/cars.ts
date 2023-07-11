function store_car_info(manufacturer: string, model: string, ...kwargs: any[]): object {
    let carInfo: object = {
      manufacturer: manufacturer,
      model: model
    };
  
    // Store the additional keyword arguments in the carInfo object
    for (let i = 0; i < kwargs.length; i += 2) {
      let key = kwargs[i];
      let value = kwargs[i + 1];
      carInfo[key] = value;
    }
  
    return carInfo;
  }
  
  // Call the function with the required information and additional name-value pairs
  let car = store_car_info("Toyota", "Camry", "color", "Red", "year", 2022, "features", ["Backup Camera", "Bluetooth"]);
  
  // Print the returned object to verify the stored car information
  console.log(car);
  