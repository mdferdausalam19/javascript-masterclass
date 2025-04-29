# 02 - Variables and Data Types in JavaScript

This lesson covers **two essential topics**: how variables work in JavaScript, and the different types of data we can store in them.

The code files (`01-variables.js`, `02-data-types.js`) already include:
- Variable declaration and naming conventions
- Use of `var`, `let`, and `const`
- All primitive and non-primitive data types
- Pass by value vs pass by reference (with examples)

This README focuses on the **under-the-hood concepts** not discussed directly in the code.

---

## ⚙️ How the JavaScript Engine Processes Code

Whenever you run JavaScript, the engine performs the following steps before execution:

1. **Tokenizing (Lexical Analysis):**
   - Breaks your code into meaningful chunks (tokens) like `let`, `=`, `"value"`, `;`.

2. **Parsing:**
   - Converts tokens into a structured tree format known as the **Abstract Syntax Tree (AST)**.

3. **Interpreting:**
   - Reads the AST and executes it line-by-line. In most modern engines, this happens *just-in-time* (JIT).

4. **Code Generation (Optional):**
   - For performance, engines may optimize or compile your JS to machine code (used by engines like V8).

These steps are performed **automatically** and are crucial for understanding how variables, scope, and memory allocation work behind the scenes.

---

## 🧠 Stack vs Heap Memory

Although covered briefly in the code, here's a quick summary to reinforce:

| Memory | Used For                 | Characteristics                          |
|--------|--------------------------|------------------------------------------|
| Stack  | Primitive values         | Fast access, fixed size, copied by value |
| Heap   | Objects, arrays, functions | Flexible size, referenced by address     |

Understanding this helps you know **why reference types affect each other** when assigned.