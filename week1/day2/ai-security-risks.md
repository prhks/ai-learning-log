# AI Security Risks in Developer Tools

AI-assisted coding tools introduce new security risks that developers must understand and mitigate.

## 1. Source Code Leakage
Sensitive or proprietary code may be sent to external AI services.

**Example:**  
Pasting internal business logic into an AI prompt.

**Mitigation:**  
Avoid sharing confidential code; use sanitized examples.

---

## 2. Prompt Injection
Carefully crafted inputs can manipulate an AI’s behavior.

**Example:**  
User instructions that override system safeguards.

**Mitigation:**  
Validate inputs and avoid blindly executing AI outputs.

---

## 3. Insecure Code Suggestions
AI may generate code with security flaws.

**Example:**  
Hardcoded credentials or missing input validation.

**Mitigation:**  
Mandatory human review and secure coding practices.

---

## 4. Sensitive Data Disclosure
AI outputs may unintentionally expose secrets or PII.

**Example:**  
Model reproducing API keys from prompts or logs.

**Mitigation:**  
Never include secrets or personal data in prompts.

---

## 5. Overreliance on AI
Blind trust in AI-generated code can introduce bugs or vulnerabilities.

**Example:**  
Deploying AI-written code without understanding it.

**Mitigation:**  
Treat AI as an assistant, not an authority.

---

## Key Takeaway
AI tools expand productivity but also increase the attack surface. Security awareness is essential.
