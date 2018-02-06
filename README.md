# Capitalization

**A tool to capitalize and hyphenate strings.**

## Example

```javascript
const assert = require("assert");
const { capitalize, hyphenate, ucfirst } = require("capitalization");
// This module contains three functions.

assert(capitalize("x-requested-with") === "X-Requested-With");
assert(capitalize("x-requested-with", true) === "XRequestedWith");
assert(hyphenate("XRequestedWith") === "X-Requested-With");
assert(hyphenate("XRequestedWith", true) === "x-requested-with");
assert(ucfirst("test string") === "Test string");
assert(capitalize("test string") === "Test String");

console.log("pass");

// Will output 'pass'.
```