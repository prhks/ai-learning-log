# TDD Principles Review

## Red-Green-Refactor Cycle

The core TDD workflow:

### 1. Red - Write a Failing Test
- Write a test for the next bit of functionality
- Run the test and watch it fail
- Failure confirms the test is actually testing something

### 2. Green - Make It Pass
- Write the minimum code to make the test pass
- Don't worry about perfection yet
- Focus on making the test green quickly

### 3. Refactor - Improve the Code
- Clean up the code while keeping tests green
- Remove duplication
- Improve naming and structure
- Tests act as a safety net

## Uncle Bob's Three Laws of TDD

1. **Don't write production code** until you have a failing test
2. **Don't write more of a test** than is sufficient to fail
3. **Don't write more production code** than is sufficient to pass the test

## Benefits of TDD

✔ **Better design** - Tests first force you to think about interfaces
✔ **Living documentation** - Tests show how code should be used
✔ **Confidence** - Refactor without fear
✔ **Less debugging** - Catch issues early
✔ **Faster feedback** - Know immediately if something breaks

## TDD Cycle Time

- Each cycle should be **short** (2-10 minutes)
- Small steps reduce cognitive load
- Frequent green bars maintain flow
- Quick iterations enable experimentation

## Key Mindset

> "Test-driven development is a way of managing fear during programming."
> — Kent Beck

- Tests reduce anxiety about changes
- Small steps make complex problems manageable
- Rhythm of Red-Green-Refactor creates focus

## Common Pitfalls

❌ Writing tests after implementation
❌ Testing implementation details instead of behavior
❌ Writing too much code before running tests
❌ Skipping the refactor step
❌ Not running tests frequently enough

## References
- [Uncle Bob's Three Laws of TDD](http://butunclebob.com/ArticleS.UncleBob.TheThreeRulesOfTdd)
- [Martin Fowler on TDD](https://martinfowler.com/bliki/TestDrivenDevelopment.html)
- Kent Beck's "Test-Driven Development By Example"
