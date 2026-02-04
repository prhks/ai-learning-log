# Claude API Basics

## API Structure
- REST-based API using HTTP requests.
- Endpoint: `https://api.anthropic.com/v1/messages`
- JSON request and response format.
- Requires API key authentication.
- API versioning through headers.

## Authentication
- API key is passed via request headers:
  - `x-api-key`: Your API key
  - `anthropic-version`: API version (e.g., `2023-06-01`)
- Keys should be stored securely (env variables, secrets manager).
- Never commit API keys to version control.

## Available Models
- **Claude Opus**: Most powerful, best for complex tasks
- **Claude Sonnet**: Balanced performance and speed
- **Claude Haiku**: Fastest, best for simple tasks
- Model names: `claude-opus-4`, `claude-sonnet-4`, `claude-haiku-4`
- Choose based on task complexity and latency requirements.

## Making API Calls
### Messages API Structure
- `model`: Claude model name
- `messages`: Array of message objects with `role` and `content`
- `system`: System prompt (optional, sets behavior/context)
- `max_tokens`: Maximum tokens to generate (required)
- `temperature`: Response randomness (0.0-1.0)
- `top_p`: Nucleus sampling parameter
- `top_k`: Top-k sampling parameter
- `stop_sequences`: Custom stop sequences

### Request Example Structure
```json
{
  "model": "claude-sonnet-4",
  "max_tokens": 1024,
  "messages": [
    {"role": "user", "content": "Hello, Claude!"}
  ]
}
```

## Streaming Responses
- Enable real-time token streaming with `stream: true`
- Receive response incrementally as it's generated.
- Useful for better user experience in interactive applications.
- Uses Server-Sent Events (SSE) format.

## Vision API
- Claude can analyze images sent via API.
- Images can be sent as base64-encoded data or URLs.
- Supports common formats: JPEG, PNG, GIF, WebP.
- Include images in message content array.

## Tool Use (Function Calling)
- Define tools/functions Claude can use.
- Claude decides when to call tools based on conversation.
- Supports complex workflows and external integrations.
- Tools defined with name, description, and input schema.

## Token Counting
- Tokens are pieces of text (words, subwords, punctuation).
- Input and output tokens counted separately.
- Affects pricing and rate limits.
- ~4 characters = 1 token (rough estimate).
- Use tokenizer tools for accurate counts.

## Rate Limits & Quotas
- Limits based on tokens per minute (TPM) and requests per minute (RPM).
- Varies by tier and model.
- Returns 429 status code when exceeded.
- Monitor usage via API response headers.

## Error Handling
- **401 Unauthorized**: Invalid API key
- **400 Bad Request**: Invalid request body or parameters
- **429 Too Many Requests**: Rate limit exceeded
- **500 Internal Server Error**: API issue
- **529 Overloaded**: Service temporarily overloaded
- Implement exponential backoff for retries.
- Handle errors gracefully with proper user feedback.

## SDKs
- **Python SDK**: `anthropic` package via pip
- **TypeScript/JavaScript SDK**: `@anthropic-ai/sdk` via npm
- Simplify API calls with type-safe interfaces.
- Handle streaming, errors, and retries automatically.

## Best Practices
- Use system prompts to set consistent behavior.
- Keep prompts clear and specific.
- Handle rate limits with retry logic.
- Monitor token usage to control costs.
- Use appropriate model for task complexity.
- Cache responses when possible.
- Validate input before sending to API.

## API vs Web Interface
- Web UI: experimentation and learning
- API: automation and integration into workflows
- API offers programmatic control and scalability.
- Web UI provides projects and artifacts features.

## References
- [Anthropic API Documentation](https://docs.anthropic.com/en/api)
- [API Reference](https://docs.anthropic.com/en/api/messages)
- [Claude Pricing](https://www.anthropic.com/pricing)
- [Python SDK](https://github.com/anthropics/anthropic-sdk-python)
- [TypeScript SDK](https://github.com/anthropics/anthropic-sdk-typescript)