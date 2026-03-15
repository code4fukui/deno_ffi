# Deno FFI

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A test of the Foreign Function Interface (FFI) on Deno.

## Usage

```
deno --allow-ffi example.js
```

## Building

### Mac

To build the shared library in C:
```
gcc -shared -o libadd.dylib -fPIC add.c
```

To build the shared library in Swift:
```
swiftc -emit-library -o libadd.dylib -module-name add add.swift 
```

### Linux

To build the shared library in C:
```
gcc -shared -o libadd.so -fPIC add.c
```

### Windows (TODO)

To build the shared library in C:
```
gcc -shared -o add.dll -Wl,--out-implib,libmylib.a -fPIC add.c
```

## License

MIT License

Copyright (c) 2025 Taisuke Fukuno