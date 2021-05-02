<?php 

echo '<pre>';
// 数値と文字列の緩やかな比較の仕様が変わっている
var_dump(0 == 'aaaaa');

var_dump(1 == '1fjoiaje');

// .の優先度が加算などの演算子より低くなった

/**
 * 7だとまず文字列と１つ目の10が結合され、その文字列が0の整数に変換されてから2つ目の10と加算され、結果intの10が出力されていたが、
 * 8だとまず加算されてから前方の文字と結合されるため、「Result: 20」が出力される
 */
var_dump('Result: ' . 10 + 10);

/**
 * エラー制御演算子がfatalを無視できなくなった
 */

echo @$name;
echo @array_shift(1);