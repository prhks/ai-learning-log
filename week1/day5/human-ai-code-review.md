# Code Review: Human + AI Combination

## The Hybrid Approach

Combining human judgment with AI capabilities creates more effective code reviews.

## What Humans Do Best

### 1. Context Understanding
- Business requirements
- Team conventions
- Project history
- Strategic direction

### 2. Subjective Judgment
- Design trade-offs
- Readability for the team
- When rules should be broken
- Architectural fit

### 3. Domain Knowledge
- Industry standards
- Security implications
- Performance requirements
- User experience impact

### 4. Communication
- Coaching and mentoring
- Building team culture
- Conflict resolution
- Knowledge sharing

## What AI Does Best

### 1. Pattern Recognition
- Code smells
- Common bugs
- Security vulnerabilities
- Style inconsistencies

### 2. Comprehensive Checking
- Every line of code
- Every test case
- All edge cases
- Documentation completeness

### 3. Objective Analysis
- Complexity metrics
- Performance analysis
- Test coverage gaps
- Naming consistency

### 4. Speed
- Instant feedback
- Parallel analysis
- Multiple perspectives
- 24/7 availability

## Effective Human + AI Workflow

### Phase 1: AI Pre-Review
**Goal:** Catch obvious issues before human review

```
Review this pull request for:
□ Syntax errors or bugs
□ Security vulnerabilities
□ Code style violations
□ Missing tests
□ Performance issues
□ Documentation gaps

Provide specific line-by-line feedback.

<pull_request>
[code diff]
</pull_request>
```

### Phase 2: Developer Response
- Fix clear issues AI identified
- Question unclear AI feedback
- Add context AI missed

### Phase 3: Human Review
**Focus on what AI can't evaluate:**
- Does this solve the right problem?
- Is the approach appropriate?
- Does it fit the architecture?
- Will the team understand this in 6 months?
- Are there better alternatives?

### Phase 4: Collaborative Discussion
- Developer + Reviewer discuss AI findings
- Decide which suggestions to implement
- Identify patterns for team improvement

## AI Code Review Prompt Template

```
You are an experienced code reviewer. Review this code with focus on:

<review_criteria>
- Correctness and bugs
- Security vulnerabilities
- Performance issues
- Code clarity and maintainability
- Test coverage and quality
- Best practices for [language/framework]
</review_criteria>

<code>
[paste code or diff]
</code>

<context>
[Optional: What this code does, constraints, requirements]
</context>

Provide:
1. Critical issues (must fix)
2. Important suggestions (should fix)
3. Minor improvements (nice to have)
4. Positive feedback (what's done well)

For each item, include:
- Specific location (file:line)
- Clear explanation
- Suggested fix or alternative
```

## Multi-Agent Review Pattern

Use specialized AI agents for different aspects:

### Agent 1: Security Reviewer
```
Review this code for security vulnerabilities:
- Input validation
- SQL injection risks
- XSS vulnerabilities
- Authentication/authorization issues
- Sensitive data exposure
- Dependency vulnerabilities
```

### Agent 2: Performance Reviewer
```
Analyze this code for performance:
- Time complexity
- Space complexity
- Unnecessary operations
- Caching opportunities
- Database query efficiency
```

### Agent 3: Maintainability Reviewer
```
Evaluate code maintainability:
- Readability
- Complexity
- Modularity
- Test quality
- Documentation
```

### Agent 4: Best Practices Reviewer
```
Check adherence to [language/framework] best practices:
- Idiomatic code
- Framework conventions
- Community standards
- Design patterns
```

## Review Categories

### Critical (Must Fix Before Merge)
- **Bugs** that cause incorrect behavior
- **Security vulnerabilities**
- **Breaking changes** not documented
- **Test failures**
- **Data loss risks**

**Human decides:** Severity and priority
**AI helps:** Identify issues

### Important (Should Fix)
- **Code smells** affecting maintainability
- **Missing tests** for edge cases
- **Performance issues** with significant impact
- **Unclear naming** or structure
- **Incomplete documentation**

**Human decides:** Trade-offs and timing
**AI helps:** Spot opportunities

### Minor (Nice to Have)
- **Style inconsistencies**
- **Minor optimizations**
- **Simplification opportunities**
- **Additional documentation**

**Human decides:** What to prioritize
**AI helps:** Suggest improvements

### Positive (Reinforce Good Practices)
- **Well-written tests**
- **Clear abstractions**
- **Good naming**
- **Elegant solutions**

**Human leads:** Mentoring and culture
**AI helps:** Identify examples

## Dos and Don'ts

### ✅ DO:
- Use AI for first-pass review
- Let humans focus on design and context
- Combine AI findings with human judgment
- Document why you accept/reject AI suggestions
- Share interesting AI findings with the team
- Use AI to learn better review techniques

### ❌ DON'T:
- Blindly accept all AI suggestions
- Replace human review entirely with AI
- Use AI as the sole authority
- Ignore context that AI can't understand
- Skip discussion of controversial AI findings
- Let AI dictate team culture or standards

## Review Feedback Template

### For Developer (from AI + Human)
```
## Critical Issues
[Human-validated AI findings + human-discovered issues]

## Suggestions
[Prioritized by human reviewer]

## Questions
[Things requiring discussion/clarification]

## What Worked Well
[Human recognition of good practices]

## Learning Opportunity
[Patterns for team improvement]
```

## Measuring Review Effectiveness

### Metrics to Track
- **Bugs caught in review** vs in production
- **Review time** (AI should reduce this)
- **Review thoroughness** (AI should increase this)
- **Developer satisfaction** with feedback quality
- **False positives** from AI (should decrease with better prompts)

### Retrospective Questions
- Did AI catch issues we would have missed?
- Did AI create noise with irrelevant suggestions?
- Where did human judgment override AI? Why?
- What patterns should we encode in our prompts?

## Building Review Muscle

### Developers
- **Don't skip understanding** AI feedback
- **Ask why** when AI suggestions seem wrong
- **Challenge** AI when it misses context
- **Learn from** patterns AI identifies

### Reviewers
- **Use AI to go deeper**, not faster
- **Explain reasoning** when overriding AI
- **Teach through** AI-identified examples
- **Evolve prompts** based on team needs

## Example: Complete Review Workflow

**1. Developer creates PR**
```bash
git push origin feature/user-authentication
gh pr create --title "Add user authentication" --body "..."
```

**2. Run AI pre-review**
```
[Developer uses AI to self-review before requesting human review]
```

**3. Fix obvious issues**
```
[Developer addresses clear bugs, style issues]
```

**4. Request human review**
```
@reviewer This PR adds user authentication.
AI review suggested X, Y, Z - I've addressed X and Y.
Z seems context-dependent, would like your input.
```

**5. Human reviewer uses AI for depth**
```
[Reviewer uses AI for comprehensive check]
[Focuses human attention on design, trade-offs, context]
```

**6. Collaborative discussion**
```
[Discuss AI findings, make decisions together]
```

**7. Approve and merge**
```
[Both human and AI are satisfied]
```

## Key Principle

> AI makes reviews more thorough and faster. Humans make reviews more thoughtful and contextual. Together, they create better code and better developers.

The goal is **not** to replace human review, but to **elevate** what humans can focus on by automating the mechanical parts.
