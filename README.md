# deno_ffi

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A simple demonstration of Deno's Foreign Function Interface (FFI) to call native functions written in C and Swift.

This project shows how to load a platform-specific shared library (`.dylib`, `.so`, `.dll`) and execute a function from it.

## How It Works

The `example.js` script uses a helper utility, `dlext.js`, to determine the correct shared library extension for the current operating system. It then uses `Deno.dlopen` to load `./libadd` with the appropriate extension and calls the native `add` function.

```javascript
// example.js
import { dlext } from "./dlext.js";

const lib = Deno.dlopen("./libadd" + dlext(), {
  add: { parameters: ["i32", "i32"], result: "i32" },
});

const result = lib.symbols.add(3, 5);
console.log(`Result: ${result}`); // Result: 8
```

## Usage

1.  Clone this repository.
2.  Build the shared library for your operating system (see instructions below).
3.  Run the example script:
    ```shell
    deno run --allow-ffi example.js
    ```

## Building the Shared Library

You can build the library from either the C or Swift source file.

### macOS

**From C:**
```shell
gcc -shared -o libadd.dylib -fPIC add.c
```

**From Swift:**
```shell
swiftc -emit-library -o libadd.dylib -module-name add add.swift
```

### Linux

**From C:**
```shell
gcc -shared -o libadd.so -fPIC add.c
```

### Windows

**From C (using a GCC toolchain like MinGW):**
```shell
gcc -shared -o add.dll -Wl,--out-implib,libadd.a -fPIC add.c
```
*Note: After building, you may need to rename `add.dll` to `libadd.dll` for the example script to find it.*

## License

MIT License — see [LICENSE](LICENSE).