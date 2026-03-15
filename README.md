# Deno FFI test

A test of FFI (Foreign Function Interface) on Deno.

## Usage

```
deno --allow-ffi example.js
```

## Building

### Mac

In C ([make_c.sh](make_c.sh)):
```
gcc -shared -o libadd.dylib -fPIC add.c
```

In Swift ([make_swift.sh](make_swift.sh)):
```
swiftc -emit-library -o libadd.dylib -module-name add add.swift 
```

### Linux

```
gcc -shared -o libadd.so -fPIC add.c
```

### Windows (todo)

```
gcc -shared -o add.dll -Wl,--out-implib,libmylib.a -fPIC add.c
```

## License

MIT License

Copyright (c) 2025 Taisuke Fukuno