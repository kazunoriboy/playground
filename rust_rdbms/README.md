# Usage

コンテナ作成
```
docker build -t rust_rdbms ./
docker run -ti -d --name="rust_rdbms" rust_rdbms
docker exec -ti rust_rdbms bash
```

## Rustの使い方
1. `rustc XXX.rs`でコンパイル
2. 出来上がったファイルを実行