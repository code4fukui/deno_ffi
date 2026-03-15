# Deno FFI テスト

Deno上でのFFI (Foreign Function Interface)のテストです。

## デモ
```
deno --allow-ffi example.js
```

## 機能
- C言語やSwiftで書かれた関数をDenoから呼び出すことができます。
- 各OSに合わせた共有ライブラリの形式を自動的に使い分けられます。

## 必要環境
- Deno

## 使い方
1. リポジトリを Clone
2. `make_c.sh` または `make_swift.sh` を実行して共有ライブラリを生成
3. `example.js` を実行

## ライセンス
MIT License