const { capitalize, hyphenate, ucfirst } = require("./");
const assert = require("assert");

describe("capitalize()", () => {
    it("should produce string as expected", () => {
        assert.equal(capitalize("x-requested-with"), "X-Requested-With");
        assert.equal(capitalize("x-requested-with", true), "XRequestedWith");
        assert.equal(capitalize("test string"), "Test String");
    });
});

describe("hyphenate()", () => {
    it("should produce string as expected", () => {
        assert.equal(hyphenate("XRequestedWith"), "X-Requested-With");
        assert.equal(hyphenate("XRequestedWith", true), "x-requested-with");
    });
});

describe("ucfirst()", () => {
    it("should produce string as expected", () => {
        assert.equal(ucfirst("test string"), "Test string");
    });
});