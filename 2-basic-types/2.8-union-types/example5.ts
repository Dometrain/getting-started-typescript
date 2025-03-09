// Read | as "OR"
type Vehicle = { hasWheels: boolean } | { canFly: boolean };

const car: Vehicle = { hasWheels: true };
const airplane: Vehicle = { canFly: true };
const flyingCar: Vehicle = { hasWheels: true, canFly: true };

// Error - Vehicle type specifies that it must have either hasWheels or canFly
// flyingCar.hasWheels = true;
