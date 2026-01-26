function add(numbers) {
  // Step 1: Return 0 for empty string
  if (numbers === "") {
    return 0;
  }

  let delimiter = /[,\n]/; // Default delimiters: comma and newline
  let numbersToProcess = numbers;

  // Step 5: Handle custom delimiters
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    const delimiterLine = parts[0].substring(2); // Remove "//"
    
    // Check for multiple character delimiter syntax [delimiter]
    if (delimiterLine.startsWith("[") && delimiterLine.endsWith("]")) {
      const customDelimiter = delimiterLine.slice(1, -1); // Remove brackets
      delimiter = new RegExp(escapeRegExp(customDelimiter), 'g');
    } else {
      // Single character delimiter
      delimiter = new RegExp(escapeRegExp(delimiterLine), 'g');
    }
    
    numbersToProcess = parts[1]; // The actual numbers part
  }

  // Split the numbers using the delimiter
  const numberArray = numbersToProcess.split(delimiter);
  
  // Convert strings to integers and filter out invalid numbers
  const validNumbers = numberArray
    .map(num => parseInt(num.trim(), 10))
    .filter(num => !isNaN(num));

  // Step 6: Check for negative numbers
  const negatives = validNumbers.filter(num => num < 0);
  if (negatives.length > 0) {
    throw new Error(`negatives not allowed: ${negatives.join(", ")}`);
  }

  // Step 7: Ignore numbers greater than 1000
  const filteredNumbers = validNumbers.filter(num => num <= 1000);

  // Step 3: Sum all numbers
  return filteredNumbers.reduce((sum, num) => sum + num, 0);
}

// Helper function to escape special regex characters
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Function to demonstrate usage
function demonstrateStringCalculator() {
  console.log("String Calculator Kata Demo:");
  
  // Test cases
  const testCases = [
    ["", 0],
    ["1", 1],
    ["1,2", 3],
    ["1\n2,3", 6],
    ["//;\n1;2", 3],
    ["//[***]\n1***2***3", 6],
    ["2,1001", 2], // 1001 is ignored
    ["1,2,3,4,5", 15]
  ];

  testCases.forEach(([input, expected]) => {
    try {
      const result = add(input);
      console.log(`add("${input}") = ${result} ${result === expected ? '✓' : '✗'}`);
    } catch (error) {
      console.log(`add("${input}") threw: ${error.message}`);
    }
  });

  // Test negative numbers (should throw)
  try {
    add("1,-2,3");
  } catch (error) {
    console.log(`add("1,-2,3") correctly threw: ${error.message} ✓`);
  }
}

module.exports = { add, demonstrateStringCalculator };