# Tokens and Context Window

## 1. What Are Tokens?
Tokens are the smallest pieces of text an LLM processes.

They can be:
- Whole words (`hello`)
- Parts of words (`learn` + `ing`)
- Symbols or punctuation (`{`, `}`, `:`)

**Important:**  
Tokens ≠ words  
A single word can be multiple tokens.


## 2. Why Tokens Matter
- Models have limits on how many tokens they can process at once
- Prompts that are too long may cause:
  - Truncated input
  - Forgotten instructions
  - Lower quality answers


## 3. What Is a Context Window?
The **context window** is the maximum number of tokens the model can “see” at one time.

It includes:
- Your prompt
- System instructions
- Conversation history
- The model’s response

When the limit is exceeded, **older content is dropped**.


## 4. Example of Context Loss

Prompt:
> “Remember that I want answers in bullet points only.”

After many messages:
- The model starts replying in paragraphs
- Reason: the instruction fell out of context


## 5. How to Work Around Context Limits
- Restate important constraints
- Summarize long conversations
- Use shorter, clearer prompts
- Break tasks into steps


## 6. Key Takeaway
Understanding tokens and context helps you:
- Write better prompts
- Avoid confusing AI behavior
- Design scalable AI workflows