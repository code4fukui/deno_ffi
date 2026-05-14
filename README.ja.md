# deno_ffi

DenoのForeign Function Interface (FFI)を使用して、CやSwiftで書かれたネイティブ関数を呼び出す簡単なデモンストレーションです。

このプロジェクトでは、プラットフォーム固有の共有ライブラリ（`.dylib`、`.so`、`.dll`）をロードし、その中の関数を実行する方法を示しています。

## 仕組み

`example.js` スクリプトは、ヘルパーユーティリティ `dlext.js` を使用して、現在のオペレーティングシステムに適した共有ライブラリの拡張子を判別します。その後、`Deno.dlopen` を使って適切な拡張子を付加した `./libadd` をロードし、ネイティブの `add` 関数を呼び出します。

```javascript
// example.js
import { dlext } from "./dlext.js";

const lib = Deno.dlopen("./libadd" + dlext(), {
  add: { parameters: ["i32", "i32"], result: "i32" },
});

const result = lib.symbols.add(3, 5);
console.log(`Result: ${result}`); // Result: 8
```

## 使い方

1.  このリポジトリをクローンします。
2.  ご使用のオペレーティングシステムに合わせて共有ライブラリをビルドします（以下の手順を参照）。
3.  サンプルスクリプトを実行します:
    ```shell
    deno run --allow-ffi example.js
    ```

## 共有ライブラリのビルド

CまたはSwiftのソースファイルからライブラリをビルドできます。

### macOS

**C言語の場合:**
```shell
gcc -shared -o libadd.dylib -fPIC add.c
```

**Swiftの場合:**
```shell
swiftc -emit-library -o libadd.dylib -module-name add add.swift
```

### Linux

**C言語の場合:**
```shell
gcc -shared -o libadd.so -fPIC add.c
```

### Windows

**C言語の場合（MinGWなどのGCCツールチェーンを使用）:**
```shell
gcc -shared -o add.dll -Wl,--out-implib,libadd.a -fPIC add.c
```
*注: サンプルスクリプトから読み込めるようにするため、ビルド後に `add.dll` を `libadd.dll` にリネームする必要がある場合があります。*

## ライセンス

MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
