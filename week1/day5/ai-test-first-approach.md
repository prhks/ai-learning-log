# Using AI to Write Tests First

## Test-First with AI Assistance

AI can help generate test cases while maintaining TDD discipline.

## Effective Prompts for Test Generation

### Pattern 1: Behavior-Driven Test Generation
```
Generate Jest tests for a function that [description of behavior].
Focus on behavior, not implementation.
Include edge cases and error conditions.
Use descriptive test names.
```

### Pattern 2: Requirement-to-Test
```
Requirements:
- [Requirement 1]
- [Requirement 2]
- [Requirement 3]

Generate tests that verify these requirements before any implementation exists.
```

### Pattern 3: Example-Driven Test Generation
```
I need tests for a function that validates email addresses.

Valid examples:
- "user@example.com" → true
- "test.user@domain.co.uk" → true

Invalid examples:
- "notanemail" → false
- "@example.com" → false

Generate comprehensive test cases following these examples.
```

## Maintaining TDD Discipline with AI

### ✅ DO:
- Ask AI to generate **tests first**
- Review AI-generated tests before implementing
- Use AI to explore edge cases you might miss
- Let AI suggest test names that describe behavior
- Ask AI to identify missing test scenarios

### ❌ DON'T:
- Ask AI to generate implementation and tests together
- Blindly accept all AI-generated tests
- Skip the Red phase by generating passing code immediately
- Let AI write brittle tests tied to implementation details
- Use AI to generate tests after code is written

## Workflow Example

**Step 1: Define behavior**
```
User request: "Create a function to check if a string is a palindrome"
```

**Step 2: Prompt AI for tests**
```
Generate Jest tests for a palindrome checker function.
- Function name: isPalindrome
- Input: string
- Output: boolean
- Test both positive and negative cases
- Include edge cases (empty string, single character, spaces, case sensitivity)
- Write descriptive test names
- Do NOT provide implementation
```

**Step 3: Review and run tests**
- Ensure tests fail (Red)
- Verify tests cover requirements
- Adjust tests if needed

**Step 4: Implement with AI assistance**
```
Now implement the isPalindrome function to make these tests pass.
Keep it simple - minimum code to pass tests.
```

**Step 5: Refactor**
```
Review this implementation for:
- Readability
- Performance
- Code duplication
Suggest improvements while keeping tests green.
```

## Benefits of AI-Generated Tests

✔ **Discover edge cases** - AI suggests scenarios you might miss
✔ **Faster test writing** - Generate boilerplate quickly
✔ **Better test names** - AI can suggest descriptive names
✔ **Learning tool** - See different testing approaches
✔ **Consistent structure** - Maintain test organization

## Risks to Watch For

⚠ **Over-complicated tests** - AI may generate unnecessary complexity
⚠ **Implementation leakage** - Tests may assume specific implementation
⚠ **Missing critical cases** - AI doesn't know your domain perfectly
⚠ **False confidence** - Passing tests don't guarantee correct behavior

## Key Principle

> AI should help you write better tests faster, not replace your thinking about what needs to be tested.

The developer must still:
- Understand the requirements
- Decide what behavior to test
- Validate that tests are meaningful
- Ensure tests guide good design
