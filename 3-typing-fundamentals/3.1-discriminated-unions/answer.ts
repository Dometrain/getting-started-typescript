// Define a Vehicle type using discriminated union.
// The type should have two possible shapes: car or truck.
// The car shape should have a numberOfDoors property.
// The truck shape should have a payloadCapacity property
// Write a function `describeVehicle` that accepts a Vehicle and returns a string describing the vehicle.
// The function should return "A car with X doors." for car shapes,
// "A truck with a payload capacity of Y." for truck shapes
type Vehicle =
  | { kind: "car"; numberOfDoors: number }
  | { kind: "truck"; payloadCapacity: number };

// Function to describe the vehicle
function describeVehicle(vehicle: Vehicle): string {
  switch (vehicle.kind) {
    case "car":
      return `A car with ${vehicle.numberOfDoors} doors.`;
    case "truck":
      return `A truck with a payload capacity of ${vehicle.payloadCapacity}.`;
    default:
      // Exhaustive check
      const _exhaustiveCheck: never = vehicle;
      return _exhaustiveCheck;
  }
}

// Test cases
const car: Vehicle = { kind: "car", numberOfDoors: 4 };
const truck: Vehicle = { kind: "truck", payloadCapacity: 2000 };

console.log(describeVehicle(car)); // Should print the description of the car
console.log(describeVehicle(truck)); // Should print the description of the truck
