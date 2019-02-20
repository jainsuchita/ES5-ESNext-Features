// String padding
// The purpose of string padding is to add characters to a string, so it reaches a specific length.

// padStart(targetLength[, padString])
// padEnd(targetLength[, padString])

// for example

"test".padStart(4) // "test";
"test".padStart(5) // " test"
"test".padStart(8) // " test"
"test".padStart(8, "abcd") // "abcdtest"

console.log("test".padStart(8, " ")) // "    test"

"test".padEnd(4) // "test";
"test".padEnd(5) // "test "
"test".padEnd(8) // "test    "
"test".padEnd(8, "abcd") // "testabcd"

console.log("test".padEnd(4) + "blah") // testblah
console.log("test".padEnd(8) + "blah") // test    blah

