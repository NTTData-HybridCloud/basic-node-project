const test = require("node:test");
const assert = require("node:assert/strict");

const { message } = require("../src/app");

test("should return hello message", () => {
  assert.equal(message(), "Hello world!");
});
