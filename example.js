import { dlext } from "./dlext.js";

const lib = Deno.dlopen("./libadd" + dlext(), {
  add: { parameters: ["i32", "i32"], result: "i32" },
});

const result = lib.symbols.add(3, 5);
console.log(`Result: ${result}`); // Result: 8
