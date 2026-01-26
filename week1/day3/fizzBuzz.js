function fizzBuzz(number) {
  // Handle FizzBuzz first (multiples of both 3 and 5)
  if (number % 15 === 0) {
    return "FizzBuzz";
  }
  
  // Handle Fizz (multiples of 3)
  if (number % 3 === 0) {
    return "Fizz";
  }
  
  // Handle Buzz (multiples of 5)
  if (number % 5 === 0) {
    return "Buzz";
  }
  
  // Default: return string representation of the number
  return number.toString();
}

// Generate FizzBuzz sequence for a range
function fizzBuzzSequence(start = 1, end = 100) {
  const result = [];
  for (let i = start; i <= end; i++) {
    result.push(fizzBuzz(i));
  }
  return result;
}

// Demonstration function
function demonstrateFizzBuzz() {
  console.log("FizzBuzz Kata Demo:");
  console.log("===================");
  
  // Test individual numbers
  const testCases = [1, 2, 3, 4, 5, 6, 9, 10, 15, 30];
  console.log("\nIndividual test cases:");
  testCases.forEach(num => {
    console.log(`fizzBuzz(${num}) = "${fizzBuzz(num)}"`);
  });
  
  // Show sequence 1-15
  console.log("\nSequence 1-15:");
  const sequence = fizzBuzzSequence(1, 15);
  console.log(sequence.join(", "));
  
  // Show sequence 1-100 (first 20 only for brevity)
  console.log("\nSequence 1-20:");
  const fullSequence = fizzBuzzSequence(1, 20);
  console.log(fullSequence.join(", "));
}

module.exports = { fizzBuzz, fizzBuzzSequence, demonstrateFizzBuzz };
