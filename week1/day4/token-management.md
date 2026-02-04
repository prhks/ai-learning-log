# Token Counting and Cost Management

## Token Basics

### What Are Tokens?
- Tokens are pieces of text used by AI models to process language
- A token can be:
  - A word: "hello" = 1 token
  - Part of a word: "tokenization" = 2-3 tokens
  - A character: punctuation, spaces
  - Special characters: newlines, tabs

### Rough Estimates
- **English**: ~4 characters = 1 token (rough average)
- **Code**: ~3-4 characters = 1 token
- **Other languages**: Often more tokens per word (Chinese, Japanese)
- 100 words ≈ 75-100 tokens
- 1 page of text ≈ 400-500 tokens

### Examples
```
"Hello, world!" = 4 tokens ["Hello", ",", " world", "!"]
"tokenization" = 2 tokens ["token", "ization"]
"API" = 1 token ["API"]
"console.log()" = 5 tokens ["console", ".", "log", "(", ")"]
```

### Input vs. Output Tokens
- **Input tokens**: Your prompt + system messages + conversation history
- **Output tokens**: Claude's response
- Both are counted and billed separately (different prices)
- Input is typically cheaper than output

## Context Window Limits

### Model Limits (as of 2026)
- **Claude Opus 4**: 200K tokens (~150K words, ~500 pages)
- **Claude Sonnet 4**: 200K tokens
- **Claude Haiku 4**: 200K tokens

### What Counts Toward Limit
- System prompt
- All messages in conversation
- Tool definitions
- Images (variable, typically 500-2000 tokens each)
- User input and assistant responses

### Exceeding Limits
- Request fails with error
- Must reduce context or start new conversation
- Use summarization or context pruning

## Pricing Structure

### Current Pricing (2026 rates - verify at anthropic.com/pricing)

**Claude Opus 4** (Most Powerful):
- Input: ~$15 per million tokens ($0.015 per 1K)
- Output: ~$75 per million tokens ($0.075 per 1K)

**Claude Sonnet 4** (Balanced):
- Input: ~$3 per million tokens ($0.003 per 1K)
- Output: ~$15 per million tokens ($0.015 per 1K)

**Claude Haiku 4** (Fastest):
- Input: ~$0.25 per million tokens ($0.00025 per 1K)
- Output: ~$1.25 per million tokens ($0.00125 per 1K)

*Note: Prices change. Always check official pricing.*

### Cost Calculation Formula
```
Total Cost = (Input Tokens × Input Price) + (Output Tokens × Output Price)
```

## Cost Examples

### Example 1: Simple Query (Sonnet)
- Input: 500 tokens (prompt + context)
- Output: 300 tokens (response)
- Cost: (500 × $0.000003) + (300 × $0.000015) = $0.0015 + $0.0045 = $0.006

### Example 2: Code Review (Sonnet)
- Input: 5,000 tokens (code + instructions)
- Output: 1,500 tokens (review feedback)
- Cost: (5,000 × $0.000003) + (1,500 × $0.000015) = $0.015 + $0.0225 = $0.0375

### Example 3: Long Document Analysis (Opus)
- Input: 50,000 tokens (document + prompt)
- Output: 2,000 tokens (summary)
- Cost: (50,000 × $0.000015) + (2,000 × $0.000075) = $0.75 + $0.15 = $0.90

### Example 4: Daily Usage Projection
If you make 100 API calls per day (average 2K input, 500 output each):
- Daily tokens: 100 × (2,000 + 500) = 250,000 tokens
- Monthly: ~7.5 million tokens
- **Haiku**: ~$22/month
- **Sonnet**: ~$135/month
- **Opus**: ~$675/month

## Why Token Management Matters

### Cost Impact
- Production applications can generate millions of tokens
- Inefficient prompts can 10x your costs
- Small optimizations compound over time
- Example: Reducing 1K unnecessary tokens per call × 10K calls/day = $0.45/day (Sonnet) = ~$165/year

### Latency Impact
- More tokens = longer processing time
- Time to First Token (TTFT) increases with input size
- Output generation time scales with length
- User experience degrades with high latency

### Rate Limiting
- API rate limits often measured in tokens per minute (TPM)
- Large prompts consume rate limit faster
- Can block other requests
- May need higher tier for token-heavy applications

### Context Window Management
- Long conversations eventually hit limits
- Must prune or summarize context
- Strategic token management extends conversation lifespan

## Prompt Caching (Cost Reduction Feature)

### How Prompt Caching Works
- Caches frequently used prompt prefixes
- Subsequent requests reuse cached portions
- Cached tokens cost ~90% less than regular input tokens
- Cache lives for ~5 minutes of inactivity

### What Can Be Cached
- System prompts
- Long documents/context
- Tool definitions
- Code repositories
- Instructions that don't change

### Pricing with Caching
- **Cache Write**: Regular input price (first time)
- **Cache Read**: ~90% discount (subsequent times)
- **Example (Sonnet)**: Cached input ~$0.0003 per 1K vs. $0.003 per 1K

### Cache Optimization
```
Structure prompts to maximize cache hits:

[Cacheable section - stays constant]
- System prompt
- Large documents
- Tool definitions

[Variable section - changes per request]
- User question
- Specific parameters
```

### Example Savings
Without caching:
- 50K token context × 100 requests = 5M tokens × $0.003 = $15

With caching (after first request):
- First: 50K × $0.003 = $0.15
- Next 99: 50K × $0.0003 × 99 = $1.49
- Total: $1.64 (89% savings)

## Batch API (50% Cost Reduction)

### What Is Batch API
- Process requests asynchronously (non-real-time)
- 50% lower pricing than standard API
- Results delivered within 24 hours
- Ideal for non-urgent bulk processing

### Use Cases
- Bulk data analysis
- Overnight report generation
- Large dataset processing
- Training data generation
- Non-interactive tasks

### Pricing
- 50% off both input and output tokens
- **Sonnet Batch**: $0.0015/1K input, $0.0075/1K output
- Trade-off: Cost vs. immediacy

## Token Counting Methods

### Method 1: Anthropic Tokenizer (Web)
- Visit tokenizer tool on Anthropic website
- Paste text to see exact token count
- Visual breakdown of tokenization
- Most accurate for planning

### Method 2: API Response Headers
Every API response includes:
```json
{
  "usage": {
    "input_tokens": 1234,
    "output_tokens": 567
  }
}
```

### Method 3: SDK Built-in Counting
```python
# Python SDK example
from anthropic import Anthropic
client = Anthropic()

# Count tokens before sending
tokens = client.count_tokens("Your text here")
print(f"Token count: {tokens}")
```

### Method 4: Rules of Thumb
Quick mental math:
- 1 page ≈ 400-500 tokens
- 1 word ≈ 1.3 tokens (English)
- 1,000 characters ≈ 250 tokens
- Code file: lines × 10 (rough estimate)

## Model Cost Comparison

### When to Use Each Model

**Use Haiku when:**
- Simple, straightforward tasks
- High volume, low complexity
- Speed is critical
- Cost is primary concern
- Tasks: classification, simple extraction, basic Q&A

**Use Sonnet when:**
- Balanced performance needed (most common choice)
- Moderate complexity tasks
- Good quality/cost ratio
- Tasks: code generation, analysis, content creation, most API uses

**Use Opus when:**
- Complex reasoning required
- Highest quality needed
- Cost less important than accuracy
- Tasks: complex code review, research, creative writing, strategy

### Cost-Performance Matrix
```
Task Complexity → Model Choice → Relative Cost
Simple         → Haiku        → 1x (baseline)
Moderate       → Sonnet       → ~12x
Complex        → Opus         → ~60x

(Costs are relative and vary by input/output ratio)
```

## Optimization Techniques

### High Impact (Easy Wins)

1. **Choose Right Model**
   - Don't use Opus for simple tasks
   - Haiku for 95% cost reduction on simple queries

2. **Set Appropriate max_tokens**
   ```python
   # Bad: wasteful
   max_tokens=4096

   # Good: right-sized
   max_tokens=500  # for summary
   max_tokens=2000  # for code generation
   ```

3. **Use Prompt Caching**
   - Structure prompts with static content first
   - Reuse system prompts across requests

4. **Remove Unnecessary Context**
   - Don't include entire files when snippet suffices
   - Remove redundant instructions
   - Strip unnecessary formatting

5. **Use Batch API**
   - 50% savings for non-urgent tasks

### Medium Impact (Worth Doing)

6. **Compress Context**
   ```
   Bad: "Please analyze this code and tell me..."
   Good: "Analyze for bugs:"
   ```

7. **Structured Output**
   - Request JSON instead of prose when possible
   - JSON is more token-efficient than sentences

8. **Limit Conversation History**
   - Keep only relevant messages
   - Summarize old context
   - Start new conversations when context grows

9. **Optimize System Prompts**
   - Be concise but clear
   - Remove examples if few-shot not needed

10. **Stream Responses**
    - Stop generation early if needed
    - User can interrupt verbose responses
    - Same token count but better UX

### Advanced Techniques

11. **Chunking Strategy**
    ```
    Instead of: One 100K token request
    Use: Five 20K token requests
    Benefits: Parallel processing, partial results
    ```

12. **Smart Summarization**
    - Summarize long conversations periodically
    - Use Haiku for summarization (cheap)
    - Feed summary to next request

13. **RAG Optimization**
    - Retrieve only relevant chunks
    - Rank and filter before including in prompt
    - Don't dump entire knowledge base

14. **Template Reuse**
    - Create standard prompts
    - Vary only parameters
    - Better cache utilization

15. **Response Prefilling**
    - Start assistant response to save output tokens
    ```
    Assistant: Here's the code:
    ```python
    [Claude continues]
    ```

16. **Token-Aware Truncation**
    - Count before sending
    - Intelligently truncate if over limit
    - Prioritize recent/relevant content

## Monitoring & Tracking

### API Response Tracking
Every response includes usage data:
```json
{
  "usage": {
    "input_tokens": 1234,
    "output_tokens": 567,
    "cache_creation_input_tokens": 0,
    "cache_read_input_tokens": 0
  }
}
```

### What to Monitor
- Total tokens per request
- Average tokens per endpoint
- Daily/monthly token usage
- Cost per feature/user
- Cache hit rates
- Most expensive queries

### Setting Up Monitoring
```python
# Example: Log token usage
def track_usage(response):
    usage = response.usage
    log_to_datadog({
        'input_tokens': usage.input_tokens,
        'output_tokens': usage.output_tokens,
        'cost': calculate_cost(usage),
        'timestamp': now(),
        'endpoint': current_endpoint
    })
```

### Dashboards
Track over time:
- Token usage trends
- Cost per day/week/month
- Most expensive operations
- Cache efficiency
- Model distribution

## Budget Management

### Setting Limits

**Account Level:**
- Set monthly spending limits in Anthropic Console
- Email alerts at thresholds (50%, 80%, 100%)
- Hard caps to prevent overruns

**Application Level:**
```python
# Example: Per-user limits
class TokenBudget:
    def check_budget(self, user_id, estimated_tokens):
        used = get_user_usage(user_id, this_month)
        limit = get_user_limit(user_id)
        if used + estimated_tokens > limit:
            raise BudgetExceededError()
```

**Request Level:**
- Estimate tokens before sending
- Reject requests that exceed threshold
- Implement user quotas

### Cost Alerts
```python
# Example: Alert on expensive requests
def check_cost_threshold(tokens, model):
    estimated_cost = calculate_cost(tokens, model)
    if estimated_cost > THRESHOLD:
        alert_team(f"Expensive request: ${estimated_cost}")
```

## Common Mistakes to Avoid

### Mistake 1: Using Opus for Everything
- **Impact**: 60x higher costs than Haiku
- **Fix**: Use Sonnet or Haiku for simple tasks

### Mistake 2: Not Using Prompt Caching
- **Impact**: 10x higher costs for repeated context
- **Fix**: Structure prompts for caching

### Mistake 3: Unbounded max_tokens
- **Impact**: Pay for tokens you don't need
- **Fix**: Set appropriate limits per use case

### Mistake 4: Including Entire Files
- **Impact**: Wastes context, increases cost
- **Fix**: Extract relevant snippets only

### Mistake 5: Ignoring Conversation Length
- **Impact**: Growing cost per message
- **Fix**: Implement conversation pruning/summarization

### Mistake 6: No Usage Monitoring
- **Impact**: Surprise bills, no optimization insight
- **Fix**: Log and track all usage

### Mistake 7: Verbose Prompts
- **Impact**: Unnecessary input tokens
- **Fix**: Be concise, remove redundancy

### Mistake 8: Not Using Batch API
- **Impact**: 2x cost for non-urgent tasks
- **Fix**: Use batch for background jobs

### Mistake 9: Requesting Explanations by Default
- **Impact**: Higher output tokens
- **Fix**: Request code/data only, explanations optional

### Mistake 10: Poor RAG Implementation
- **Impact**: Huge prompts with irrelevant content
- **Fix**: Better retrieval, ranking, filtering

## Cost-Benefit Trade-offs

### When to Optimize
- High-volume production applications
- Tight budget constraints
- Simple, repetitive tasks
- Batch processing scenarios

### When Not to Over-Optimize
- Prototyping and experimentation
- Complex tasks requiring best model
- When developer time costs more than token savings
- User experience would suffer

### The 80/20 Rule
- 20% of requests often account for 80% of costs
- Identify and optimize the expensive queries first
- Use monitoring to find optimization targets

## Tools & Resources

### Token Counting Tools
- **Anthropic Token Counter**: Web-based visual tokenizer
- **tiktoken**: Python library (OpenAI's tokenizer, similar)
- **cl100k_base**: Common tokenizer for estimation
- **SDK built-in methods**: Most accurate

### Monitoring Tools
- **Anthropic Console**: Built-in usage dashboard
- **Custom logging**: Log to Datadog, CloudWatch, etc.
- **Cost tracking services**: Third-party API monitors

### Calculation Tools
- **Spreadsheet templates**: Track costs per feature
- **Cost calculators**: Estimate before building
- **Budget trackers**: Monitor spending trends

### APIs for Tracking
```python
# Python SDK example
response = client.messages.create(
    model="claude-sonnet-4",
    max_tokens=1024,
    messages=[{"role": "user", "content": "Hello"}]
)

# Access usage data
print(f"Input: {response.usage.input_tokens}")
print(f"Output: {response.usage.output_tokens}")
```

## Best Practices Summary

1. ✅ **Choose the right model** for the task complexity
2. ✅ **Use prompt caching** for repeated context
3. ✅ **Set appropriate max_tokens** limits
4. ✅ **Monitor and track** all usage
5. ✅ **Use Batch API** for non-urgent tasks
6. ✅ **Keep prompts concise** and focused
7. ✅ **Implement usage limits** and alerts
8. ✅ **Optimize expensive queries** first (80/20 rule)
9. ✅ **Cache system prompts** and static content
10. ✅ **Review usage regularly** and adjust

## References
- [Anthropic Pricing](https://www.anthropic.com/pricing)
- [Token Counting Guide](https://docs.anthropic.com/en/docs/build-with-claude/token-counting)
- [Prompt Caching Documentation](https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching)
- [Batch API Documentation](https://docs.anthropic.com/en/api/batch-api)
- [Cost Optimization Guide](https://docs.anthropic.com/en/docs/build-with-claude/cost-optimization)
