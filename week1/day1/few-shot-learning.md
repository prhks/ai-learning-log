# Few-Shot Learning


## What Is Few-Shot Learning?
Few-shot learning means giving the AI **a few examples** before asking it to perform a task.

This helps the model:
- Understand format
- Match tone
- Follow patterns


## Example Task
Convert English requirements into SQL queries.


## Few-Shot Prompt

Example 1  
Input: "Get all users created today"  
Output:  
SELECT * FROM users WHERE created_at = CURRENT_DATE;

Example 2  
Input: "Count orders by status"  
Output:  
SELECT status, COUNT(*) FROM orders GROUP BY status;

Now convert:  
Input: "List top 5 products by sales"


## Why This Works
- The model copies the structure
- Reduces ambiguity
- Improves accuracy


## When to Use Few-Shot
- Formatting tasks
- Code generation
- Classification
- Transformations


## Key Takeaway
Examples are often more powerful than explanations.
