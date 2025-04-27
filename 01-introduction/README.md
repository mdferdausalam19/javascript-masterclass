# 01 - Introduction to JavaScript

## Key Concepts Covered

1. **What is JavaScript?**
   - JavaScript is a scripting language that enables dynamic interactions on web pages.
   - It is essential for modern web development alongside HTML and CSS.

2. **The Crucial Process:**
   - Browser downloads HTML and builds the DOM.
   - Browser downloads external scripts.
   - Browser executes scripts (depending on how they are loaded).

3. **Loading JavaScript:**
   - `<script src="..."></script>` inside `<head>` blocks page loading.
   - Placing `<script>` at the end of `<body>` prevents blocking.
   - Using `async` or `defer` attributes in `<script>` optimizes loading.

4. **Script Tag with `async`**
   - Scripts load asynchronously and execute **as soon as they finish downloading**, possibly before the HTML parsing is complete.
   - Useful for independent scripts like analytics.

5. **Script Tag with `defer`**
   - Scripts download during HTML parsing but **execute after the DOM is fully built**.
   - Recommended for most application scripts.

---

## Code Overview

- `index.html` links to `first.js` using `defer` for best loading practice.
- `first.js` logs a message and dynamically updates the DOM content.
