# ZOMBIES Framework for Test Generation

## What is ZOMBIES?

A mnemonic for ordering test cases from simple to complex, created by James Grenning.

## The ZOMBIES Acronym

### Z - Zero
Test the simplest case: zero, empty, null
- Empty string
- Empty array
- Null input
- Zero count

**Example:**
```javascript
test('returns empty array for empty input', () => {
  expect(processItems([])).toEqual([]);
});
```

### O - One
Test with a single element
- One item in array
- Single character string
- First element only

**Example:**
```javascript
test('returns single item unchanged', () => {
  expect(processItems([1])).toEqual([1]);
});
```

### M - Many (or More)
Test with multiple elements
- Multiple valid inputs
- General case
- Typical usage

**Example:**
```javascript
test('processes multiple items correctly', () => {
  expect(processItems([1, 2, 3])).toEqual([2, 4, 6]);
});
```

### B - Boundary
Test edge cases and boundaries
- Maximum values
- Minimum values
- Just inside/outside valid range
- Off-by-one errors

**Example:**
```javascript
test('handles maximum safe integer', () => {
  expect(processNumber(Number.MAX_SAFE_INTEGER)).toBeDefined();
});
```

### I - Interface
Test through the public interface
- Different ways to call the function
- Different parameter types
- API contracts

**Example:**
```javascript
test('accepts string or number input', () => {
  expect(processInput('5')).toEqual(5);
  expect(processInput(5)).toEqual(5);
});
```

### E - Exceptions
Test error conditions
- Invalid input
- Error handling
- Exceptional circumstances

**Example:**
```javascript
test('throws error for negative input', () => {
  expect(() => processNumber(-1)).toThrow('Input must be positive');
});
```

### S - Simple Scenarios
Test simple, straightforward cases
- Happy path
- Most common usage
- Baseline functionality

**Example:**
```javascript
test('correctly identifies even number', () => {
  expect(isEven(4)).toBe(true);
});
```

## Using ZOMBIES with AI

### Prompt Template
```
Generate tests for [function name] using the ZOMBIES framework:

Function: [description]

Create tests for:
Z - Zero/Empty cases
O - One element
M - Many elements
B - Boundary conditions
I - Interface variations
E - Exception cases
S - Simple scenarios

For each category, provide 2-3 test cases with descriptive names.
```

### Example AI Prompt
```
Generate Jest tests for a function that calculates the sum of an array of numbers.

Use the ZOMBIES framework:
- Z: Empty array
- O: Single number
- M: Multiple numbers
- B: Very large numbers, negative numbers
- I: Different input types (array, single value)
- E: Non-numeric inputs, null/undefined
- S: Standard positive integers

Write clear, descriptive test names and include assertions.
```

## Benefits of ZOMBIES

✔ **Systematic approach** - Don't miss important cases
✔ **Progressive complexity** - Start simple, build up
✔ **Comprehensive coverage** - Hit all major categories
✔ **Communication tool** - Easy to discuss test strategy
✔ **Works with AI** - Clear structure for AI to follow

## ZOMBIES + TDD Workflow

1. **Start with Z** - Write failing test for zero/empty case
2. **Make it pass** - Simplest implementation
3. **Move to O** - Test single element case
4. **Refactor if needed** - Clean up while green
5. **Continue through M, B, I, E, S** - Progressively add complexity
6. **Refactor throughout** - Keep code clean at each step

## When to Use ZOMBIES

✅ **Good for:**
- Functions with clear input/output
- Data processing functions
- Algorithms and calculations
- Validation logic

⚠ **Less useful for:**
- UI components with complex state
- Integration tests
- Tests with many dependencies

## ZOMBIES vs Traditional Approach

**Traditional:** Think of tests randomly, might miss cases
**ZOMBIES:** Systematic checklist ensures coverage

**Traditional:** Hard to know when you're "done" testing
**ZOMBIES:** Clear categories to complete

**Traditional:** Tests may be in random order
**ZOMBIES:** Tests progress from simple to complex

## Example: Complete ZOMBIES Test Suite

```javascript
describe('calculateAverage', () => {
  // Z - Zero
  test('returns 0 for empty array', () => {
    expect(calculateAverage([])).toBe(0);
  });

  // O - One
  test('returns the number itself for single element', () => {
    expect(calculateAverage([5])).toBe(5);
  });

  // M - Many
  test('calculates average of multiple numbers', () => {
    expect(calculateAverage([2, 4, 6])).toBe(4);
  });

  // B - Boundary
  test('handles very large numbers', () => {
    expect(calculateAverage([1e10, 1e10])).toBe(1e10);
  });

  test('handles negative numbers', () => {
    expect(calculateAverage([-5, 5])).toBe(0);
  });

  // I - Interface
  test('accepts array of integers', () => {
    expect(calculateAverage([1, 2, 3])).toBe(2);
  });

  test('accepts array of floats', () => {
    expect(calculateAverage([1.5, 2.5])).toBe(2);
  });

  // E - Exceptions
  test('throws error for non-numeric values', () => {
    expect(() => calculateAverage(['a', 'b'])).toThrow();
  });

  test('throws error for null input', () => {
    expect(() => calculateAverage(null)).toThrow();
  });

  // S - Simple
  test('calculates average of simple positive integers', () => {
    expect(calculateAverage([10, 20, 30])).toBe(20);
  });
});
```

## References
- [ZOMBIES Guide](https://blog.wingman-sw.com/archives/677)
- [James Grenning - ZOMBIES](https://blog.wingman-sw.com/tdd-guided-by-zombies)
