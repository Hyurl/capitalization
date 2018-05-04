var capitalization = require("./");
var assert = require("assert");
var capitalize = capitalization.capitalize;
var hyphenate = capitalization.hyphenate;
var camelCase = capitalization.camelCase;
var underline = capitalization.underline;

assert.equal(capitalize("x-requested-with"), "X-Requested-With");
assert.equal(capitalize("x-requested-with", true), "XRequestedWith");
assert.equal(capitalize("test string"), "Test String");
assert.equal(hyphenate("XRequestedWith"), "X-Requested-With");
assert.equal(hyphenate("XRequestedWith", true), "x-requested-with");
assert.equal(camelCase("var_name"), "varName");
assert.equal(camelCase("var_name", true), "VarName");
assert.equal(underline("varName"), "var_name");
assert.equal(underline("varName", true), "var_Name");
assert.equal(underline("VarName", true), "Var_Name");

console.log("All tests passed!");