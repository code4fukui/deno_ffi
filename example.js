export const dlext = () => {
  const os = Deno.build.os;
  // console.log(os)
  if (os === "windows") {
    return ".dll";
  } else if (os === "darwin") { // macOS
    return ".dylib";
  } else { // Linux
    return ".so";
  }
};

const lib = Deno.dlopen("./libadd" + dlext(), {
  add: { parameters: ["i32", "i32"], result: "i32" },
});

const result = lib.symbols.add(3, 5);
console.log(`Result: ${result}`); // Result: 8
