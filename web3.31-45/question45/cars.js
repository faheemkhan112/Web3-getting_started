function store_car_info(manufacturer, model) {
    var kwargs = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        kwargs[_i - 2] = arguments[_i];
    }
    var carInfo = {
        manufacturer: manufacturer,
        model: model
    };
    // Store the additional keyword arguments in the carInfo object
    for (var i = 0; i < kwargs.length; i += 2) {
        var key = kwargs[i];
        var value = kwargs[i + 1];
        carInfo[key] = value;
    }
    return carInfo;
}
// Call the function with the required information and additional name-value pairs
var car = store_car_info("Toyota", "Camry", "color", "Red", "year", 2022, "features", ["Backup Camera", "Bluetooth"]);
// Print the returned object to verify the stored car information
console.log(car);
