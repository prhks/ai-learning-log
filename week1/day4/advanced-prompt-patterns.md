# Advanced Prompt Patterns

## Chain of Thought
- Encourages step-by-step reasoning.
- Useful for complex reasoning, math problems, debugging, and test generation.
- Improves accuracy and makes reasoning transparent.
- Variants:
  - Zero-shot CoT: "Let's think step by step"
  - Explicit CoT: "Explain your reasoning step by step before answering"

Example:
```
Analyze this bug step by step:
1. What is the expected behavior?
2. What is the actual behavior?
3. What could cause this difference?
4. What is the most likely root cause?
```

## XML Tags
- Adds structure to complex prompts.
- Claude is specifically trained to work well with XML tags.
- Improves clarity, consistency, and parsing.
- Helps separate different types of content.
- Can be nested for hierarchical information.

Example:
```xml
<task>Generate unit tests</task>
<language>JavaScript</language>
<framework>Jest</framework>

<code>
function add(a, b) {
  return a + b;
}
</code>

<requirements>
  <coverage>Test edge cases</coverage>
  <style>Use descriptive test names</style>
</requirements>
```

## Role Prompting
- Assigns a professional role or persona to Claude.
- Improves relevance, depth, and tone of responses.
- Be specific about expertise level and context.
- Can combine with other patterns.

Examples:
- "You are a senior software engineer reviewing production code for security vulnerabilities."
- "You are an experienced QA engineer creating comprehensive test plans."
- "You are a technical architect evaluating system design trade-offs."
- "You are a code reviewer focusing on maintainability and best practices."

## Few-Shot Prompting
- Provide examples to guide Claude's responses.
- Shows the desired format, style, or approach.
- Useful for consistent output formatting.
- More examples = better pattern recognition.

Example:
```
Convert these function names to test descriptions:

calculateTotal -> "should calculate the total correctly"
validateEmail -> "should validate email format"
fetchUserData -> "should fetch user data from API"

Now convert: processPayment -> ?
```

## System Prompts
- Set persistent context and behavior at the conversation level.
- Establish rules, constraints, and expectations upfront.
- More powerful than inline instructions.
- Available in API via `system` parameter.

Example:
```
You are a code review assistant. For every code review:
- Focus on bugs, security, and performance
- Provide specific line-by-line feedback
- Suggest concrete improvements
- Be constructive and educational
```

## Prompt Chaining
- Break complex tasks into sequential steps.
- Output of one prompt becomes input for the next.
- Improves accuracy for multi-step workflows.
- Easier to debug and refine.

Example workflow:
1. "Analyze this code and identify all functions"
2. "For each function, generate unit tests"
3. "Review the tests for completeness"

## Constrained Output
- Specify exact format requirements.
- Useful for programmatic processing.
- Common formats: JSON, CSV, markdown tables, code blocks.
- Be explicit about structure.

Example:
```
Return your answer as JSON with this exact structure:
{
  "summary": "brief summary",
  "issues": ["issue1", "issue2"],
  "severity": "low|medium|high"
}
```

## Prefilling Assistant Response
- Start Claude's response to guide its direction.
- Useful for enforcing format or tone.
- Available in API by adding assistant message.

Example:
```
User: "Generate a function to sort an array"
Assistant: "Here's a well-tested sorting function:

```javascript
// [Claude continues from here]
```
```

## Context Stuffing
- Provide relevant documents, code, or data within the prompt.
- Use clear delimiters (XML tags, code blocks).
- Place context before the question.
- Useful for RAG (Retrieval Augmented Generation).

Example:
```
<documentation>
[Paste relevant docs here]
</documentation>

<codebase>
[Paste relevant code here]
</codebase>

Based on the above, how should I implement feature X?
```

## Output Formatting
- Request specific output formats.
- Common formats:
  - JSON for structured data
  - Markdown for documentation
  - Code blocks for code
  - Tables for comparisons
  - Lists for steps/items

Example:
```
Create a comparison table with columns: Feature, Approach A, Approach B, Recommendation
```

## Negative Prompting
- Explicitly state what NOT to do.
- Prevents common unwanted behaviors.
- Useful for constraining responses.

Example:
```
Generate a code review. Do NOT:
- Make style suggestions unless they affect readability
- Suggest adding comments for self-explanatory code
- Recommend over-engineering
```

## Iterative Refinement
- Build on previous responses.
- Ask for specific improvements.
- Gradually refine towards desired output.

Example:
```
1. "Generate a basic implementation"
2. "Now add error handling"
3. "Add input validation"
4. "Optimize for performance"
```

## Multi-Turn Conversations
- Maintain context across multiple messages.
- Reference previous responses.
- Build complex solutions incrementally.
- Use conversation history strategically.

Tips:
- Keep context relevant and focused
- Summarize when conversations get long
- Reference specific earlier points explicitly

## Prompt Templates
- Create reusable patterns with variables.
- Maintain consistency across similar tasks.
- Easier to maintain and update.

Example template:
```
Review this {{LANGUAGE}} code for {{FOCUS_AREA}}:

<code>
{{CODE}}
</code>

Provide feedback on:
- {{CRITERIA_1}}
- {{CRITERIA_2}}
- {{CRITERIA_3}}
```

## Self-Critique Pattern
- Have Claude review its own work.
- Improves quality through reflection.
- Two-step process: generate, then critique.

Example:
```
1. "Generate a solution for X"
2. "Now critique your solution. What could be improved? What edge cases are missing?"
3. "Provide an improved version based on your critique"
```

## References
- [Claude Prompt Library](https://docs.anthropic.com/en/prompt-library/library)
- [Anthropic Prompt Engineering Guide](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview)
- [Prompt Engineering Best Practices](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/be-clear-and-direct)