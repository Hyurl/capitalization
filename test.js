const { capitalize, hyphenate, ucfirst } = require("./");
const assert = require("assert");

assert(capitalize("x-requested-with") === "X-Requested-With");
assert(capitalize("x-requested-with", true) === "XRequestedWith");
assert(hyphenate("XRequestedWith") === "X-Requested-With");
assert(hyphenate("XRequestedWith", true) === "x-requested-with");
assert(ucfirst("test string") === "Test string");
assert(capitalize("test string") === "Test String");

console.log("pass");