function add(a: number, b: number): number {
  return a + b;
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function addSafe(a: any, b: any): number {
  if (isNumber(a) && isNumber(b)) {
    return a + b;
  } else {
    console.error("Invalid input: Both values must be numbers.");
    return 0; // Or throw an error
  }
}

const result1 = addSafe(5, 10); // Correct
const result2 = addSafe(5, '10'); // Type safe error handling
const result3 = addSafe('5', 10); // Type safe error handling