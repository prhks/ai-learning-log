# Code Review Prompt Templates

## Template 1: General Code Review

```
You are a senior software engineer performing a thorough code review.

Review the following code and provide:
1. Summary of what the code does
2. Critical issues (bugs, security vulnerabilities)
3. Code quality concerns (readability, maintainability)
4. Best practice violations
5. Suggestions for improvement
6. Positive aspects worth keeping

<code>
<insert code here>
</code>

Format your response with:
- **Critical Issues**: Must be fixed before merging
- **Suggestions**: Nice to have improvements
- **Positive Feedback**: What's done well
```

## Template 2: Security-Focused Review

```
You are a security engineer reviewing code for vulnerabilities.

Analyze this code for security issues:

<code>
<insert code here>
</code>

Check for:
- Input validation and sanitization
- SQL injection vulnerabilities
- XSS vulnerabilities
- Authentication/authorization issues
- Sensitive data exposure
- Insecure dependencies
- OWASP Top 10 vulnerabilities

Rate each finding as: Critical, High, Medium, or Low severity.
```

## Template 3: Performance Review

```
You are a performance engineering specialist.

Review this code for performance issues:

<code>
<insert code here>
</code>

Analyze:
- Algorithm complexity (time and space)
- Database query efficiency
- N+1 query problems
- Memory leaks or excessive allocation
- Caching opportunities
- Bottlenecks and hot paths
- Concurrency issues

Provide specific optimization suggestions with expected impact.
```

## Template 4: Diff/PR Review

```
You are reviewing a pull request for production deployment.

Review these changes:

<original>
<insert original code>
</original>

<updated>
<insert updated code>
</updated>

Evaluate:
1. Do these changes introduce bugs or regressions?
2. Are there better approaches to achieve the same goal?
3. What edge cases need testing?
4. Does this maintain backward compatibility?
5. Is the change scope appropriate?

Provide a recommendation: Approve, Request Changes, or Block.
```

## Template 5: Architecture Review

```
You are a software architect reviewing system design.

Review this code for architectural concerns:

<code>
<insert code here>
</code>

<context>
<insert system context, design goals>
</context>

Evaluate:
- SOLID principles adherence
- Design patterns usage (appropriate/inappropriate)
- Separation of concerns
- Coupling and cohesion
- Scalability considerations
- Maintainability and extensibility
- Technical debt implications
```

## Template 6: Test Review

```
You are a QA engineer reviewing test code.

Review these tests:

<code>
<insert test code>
</code>

<implementation>
<insert implementation code being tested>
</implementation>

Evaluate:
- Test coverage completeness
- Edge cases and boundary conditions
- Test clarity and maintainability
- Appropriate use of mocks/stubs
- Test independence and reliability
- Performance of tests
- Missing negative test cases
```

## Template 7: Structured Review with Context

```
You are a senior software engineer performing a code review.

<project_info>
Language: <language>
Framework: <framework>
Project Type: <web app / API / library / etc>
</project_info>

<coding_standards>
<insert team coding standards or style guide>
</coding_standards>

<code>
<insert code here>
</code>

Review checklist:
- [ ] Follows project coding standards
- [ ] Handles errors appropriately
- [ ] Covers edge cases
- [ ] Has adequate documentation
- [ ] Performs efficiently
- [ ] Is secure
- [ ] Is testable

Provide detailed feedback for each area with specific line references.
```

## Using Agents/Sub-agents for Code Review

### What are Agents in Claude Code?

- **Agents** are specialized sub-processes that can autonomously handle specific tasks
- **Task tool** launches these agents with specific capabilities
- Agents work independently and return results when complete
- Multiple agents can run in parallel for efficiency

### Available Agent Types for Code Review

1. **general-purpose**: Multi-step code analysis and review
2. **Explore**: Fast codebase exploration and pattern finding
3. **Bash**: Command execution for running tests/linters

### Benefits of Using Agents

- **Autonomous operation**: Agents work independently without step-by-step guidance
- **Parallel processing**: Multiple agents can review different aspects simultaneously
- **Deep exploration**: Agents can search, read, and analyze multiple files
- **Comprehensive analysis**: Better for large codebases or complex reviews
- **Background execution**: Long-running reviews don't block other work

### When to Use Agents vs. Direct Prompts

**Use Direct Prompts When:**
- Reviewing a single file or small code snippet
- Quick, focused feedback needed
- Simple, straightforward review
- Immediate, interactive review

**Use Agents When:**
- Reviewing multiple files or entire modules
- Need to explore codebase context
- Complex, multi-step analysis required
- Want comprehensive security/performance audit
- Reviewing unfamiliar codebase structure
- Need to trace dependencies across files

### Agent-Based Review Examples

#### Example 1: Single Agent General Review

```
I'll use an agent to perform a comprehensive code review of the authentication module.

[Use Task tool with:]
subagent_type: "general-purpose"
prompt: "Perform a comprehensive code review of the authentication module.
Search for all auth-related files, analyze the implementation for security issues,
bugs, and best practices. Provide a detailed report with prioritized findings."
```

#### Example 2: Parallel Multi-Agent Review

```
I'll launch multiple agents in parallel to review different aspects:

[Use Task tool with multiple invocations in one message:]

Agent 1 (Security):
subagent_type: "general-purpose"
prompt: "Review all files in /src for security vulnerabilities.
Focus on input validation, authentication, and OWASP Top 10 issues."

Agent 2 (Testing):
subagent_type: "general-purpose"
prompt: "Analyze test coverage across the codebase.
Identify untested code paths and missing edge case tests."

Agent 3 (Performance):
subagent_type: "general-purpose"
prompt: "Review database queries and API endpoints for performance issues.
Identify N+1 queries, missing indexes, and optimization opportunities."
```

#### Example 3: Explore Agent for Context

```
Before detailed review, explore the codebase structure:

[Use Task tool:]
subagent_type: "Explore"
prompt: "Explore the codebase to understand the architecture.
Find all controllers, services, and models. Map out the application structure."
thoroughness: "medium"

[Then follow up with targeted review based on findings]
```

#### Example 4: Background Agent for Large Codebase

```
For large codebases, run agents in background:

[Use Task tool with:]
subagent_type: "general-purpose"
run_in_background: true
prompt: "Perform a complete security audit of the entire codebase.
Check all files for security issues, generate a comprehensive report."

[Agent runs in background, continue other work]
[Check results later with TaskOutput or Read the output file]
```

### Multi-Agent Review Workflow

**Step 1: Structure Discovery**
```
Agent: Explore
Task: Map out codebase structure, identify critical files
Thoroughness: quick
```

**Step 2: Parallel Specialized Reviews**
```
Agent 1: Security review of identified critical files
Agent 2: Test coverage analysis
Agent 3: Performance bottleneck identification
[All run in parallel]
```

**Step 3: Synthesis**
```
Direct prompt: Combine findings from all agents, prioritize issues
```

### Best Practices for Agent-Based Reviews

**Do:**
- Provide clear, specific prompts to agents
- Use parallel agents for independent tasks
- Let agents explore and search autonomously
- Use background agents for long-running tasks
- Combine agent findings with direct prompts for synthesis

**Don't:**
- Use agents for simple single-file reviews
- Launch too many agents simultaneously (resource intensive)
- Provide vague instructions to agents
- Expect agents to understand implicit context
- Use agents when immediate interactive feedback is needed

### Agent Prompt Template

```
[When launching a code review agent via Task tool:]

description: "Review <component> for <focus areas>"
subagent_type: "general-purpose"
prompt: """
You are a senior software engineer reviewing code.

Task: <specific review task>

Steps:
1. Find all relevant files using Glob/Grep
2. Read and analyze each file
3. Identify issues in categories: bugs, security, performance, quality
4. Generate a prioritized report

Focus areas:
- <area 1>
- <area 2>
- <area 3>

Output format:
## Critical Issues
[List with file:line references]

## Suggestions
[List with file:line references]

## Summary
[Overall assessment]
"""
```

### Integration with CI/CD

Agents can be integrated into development workflows:

1. **Pre-commit hook**: Quick agent review before commit
2. **PR automation**: Agent reviews when PR is created
3. **Scheduled audits**: Background agents run nightly security/performance audits
4. **On-demand**: Developer triggers agent review via CLI

### Example: Complete Agent-Based Review Session

```bash
# Terminal workflow example

# Step 1: Quick exploration
claude "Use an explore agent to understand the /src/payment module structure"

# Step 2: Launch parallel reviews (in one message)
claude "Launch 3 agents in parallel:
1. Security review of payment module
2. Test coverage analysis of payment module
3. Performance review of payment processing"

# Step 3: Review findings and dig deeper
claude "Based on the security findings, do a deeper review of the
authentication flow in payment processing"

# Step 4: Generate report
claude "Synthesize all findings into a prioritized action plan"
```

## References

- [Claude Code Task Tool Documentation](https://docs.anthropic.com/claude/docs/claude-code)
- [Prompt Engineering for Code Review](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/code-review)
- [OWASP Code Review Guide](https://owasp.org/www-project-code-review-guide/)
