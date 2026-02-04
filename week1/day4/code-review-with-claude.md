# Code Review with Claude

## Why Use Claude
- Fast first-pass code review (instant feedback)
- Highlights bugs and edge cases
- Suggests best practices and improvements
- Consistent and objective (no fatigue or bias)
- Available 24/7 for quick reviews
- Catches issues humans might miss
- Frees up developers for higher-level review
- Complements human code review, doesn't replace it

## Review Areas

### Code Quality
- Readability and naming conventions
- Code structure and organization
- Complexity and maintainability
- DRY principle adherence
- Magic numbers and hard-coded values

### Error Handling
- Missing error checks
- Exception handling coverage
- Error message quality
- Graceful degradation
- Recovery strategies

### Edge Cases
- Null/undefined handling
- Empty collections
- Boundary conditions
- Input validation
- Type edge cases

### Performance
- Algorithm efficiency
- Resource usage (memory, CPU)
- Database query optimization
- Caching opportunities
- Potential bottlenecks

### Security
- Input validation and sanitization
- SQL injection vulnerabilities
- XSS vulnerabilities
- Authentication and authorization
- Sensitive data handling
- OWASP Top 10 compliance

### Testing
- Missing test coverage
- Test quality and completeness
- Edge case testing
- Mock usage
- Test maintainability

### Documentation
- Missing or unclear comments
- API documentation
- Function/method docstrings
- Complex logic explanations
- TODO/FIXME notes

### Architecture & Design
- SOLID principles
- Design patterns usage
- Separation of concerns
- Coupling and cohesion
- Code smells and anti-patterns

### Type Safety
- Type annotations (TypeScript, Python)
- Type correctness
- Null safety
- Generic usage

## How to Request a Review

### Basic Review Prompt
```
Review this code for bugs, security issues, and best practices:

<code>
[paste code here]
</code>
```

### Focused Review Prompt
```
Review this code focusing on:
1. Security vulnerabilities
2. Error handling
3. Edge cases

<code>
[paste code here]
</code>
```

### Role-Based Review Prompt
```
You are a senior software engineer performing a production code review.
Focus on security, performance, and maintainability.

<code>
[paste code here]
</code>

Provide:
1. Critical issues that must be fixed
2. Suggestions for improvement
3. Positive aspects of the code
```

### Diff Review Prompt
```
Review these code changes:

<original>
[old code]
</original>

<updated>
[new code]
</updated>

Evaluate:
- Does this change introduce bugs?
- Are there better approaches?
- What edge cases should be tested?
```

## Best Practices

### Preparation
- Provide complete code context (imports, dependencies)
- Include relevant surrounding code
- Specify the language and framework
- Mention any coding standards to follow

### Effective Prompts
- Be specific about what to review
- Ask for prioritized feedback
- Request concrete examples
- Ask for alternative implementations
- Use XML tags to structure complex prompts

### Review Process
- Start with critical files first
- Review diffs for changes, not full files
- Ask follow-up questions on findings
- Request explanations for suggestions
- Have Claude explain why something is an issue

### Integration Tips
- Use before submitting pull requests
- Quick sanity check before committing
- Get second opinion on complex logic
- Review legacy code before refactoring
- Check generated code from tools/AI

## Code Smell Detection

Claude can identify common anti-patterns:
- God objects and classes
- Long methods/functions
- Duplicate code
- Feature envy
- Data clumps
- Primitive obsession
- Switch statement abuse
- Shotgun surgery patterns
- Divergent change

## Multi-File Review

For reviewing across files:
```
Review these related files for consistency and design:

<file name="user.service.ts">
[code]
</file>

<file name="user.controller.ts">
[code]
</file>

<file name="user.model.ts">
[code]
</file>

Check for:
- Consistent error handling
- Proper separation of concerns
- API contract consistency
- Naming consistency
```

## Follow-up Process

After initial review:
1. Ask Claude to explain specific findings
2. Request alternative implementations
3. Ask about trade-offs of suggestions
4. Verify if suggestions apply to your context
5. Request code examples for fixes

Example follow-up:
```
You mentioned the function has high complexity. Can you:
1. Show how to refactor it
2. Explain the benefits
3. Identify potential risks of the refactoring
```

## Integrating into Workflow

### When to Use Claude
- Pre-commit checks
- Before creating pull requests
- Reviewing unfamiliar code
- Learning new codebases
- Quick sanity checks
- Pair programming support

### When to Use Human Review
- Business logic validation
- Architecture decisions
- Domain-specific requirements
- Critical security features
- Production deployment approval
- Complex trade-off decisions

### Workflow Example
1. Write/modify code
2. Self-review
3. Claude review (automated/manual)
4. Fix critical issues
5. Human peer review
6. Address feedback
7. Merge

## Limitations

### Technical Limitations
- Cannot execute code or run tests
- No access to runtime behavior
- Limited by context window size
- Cannot access external dependencies
- No real-time debugging
- Cannot validate against live systems

### Knowledge Limitations
- May not know latest framework versions
- Lacks project-specific conventions
- Cannot understand business context
- May not know company standards
- Limited domain-specific knowledge

### Review Limitations
- Output should always be reviewed by a developer
- Cannot replace human judgment
- May miss context-dependent issues
- Cannot assess performance without profiling
- Cannot validate user experience
- May suggest over-engineering

### Best Used As
- A complement to human review, not a replacement
- First-pass automated check
- Learning and educational tool
- Quick feedback mechanism
- Second opinion provider

## References
- [Claude Prompt Library - Code Review](https://docs.anthropic.com/en/prompt-library/library)
- [Effective Code Reviews](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/code-review)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
