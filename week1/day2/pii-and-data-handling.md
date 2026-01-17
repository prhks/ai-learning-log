# PII and Data Handling in AI Prompts

AI prompts are a form of data sharing and must be treated accordingly.

## What is PII?
Personally Identifiable Information includes:
- Names
- Email addresses
- Phone numbers
- IP addresses
- Credentials

---

## Unsafe Prompt Example
"Debug this production error log containing real customer emails."

## Safe Prompt Example
"Debug this sanitized error log with placeholder data."

---

## Best Practices
- Remove or mask sensitive data
- Use synthetic examples
- Assume prompts may be stored or reviewed

---

## Key Takeaway
Never expose personal or confidential data to AI tools.
