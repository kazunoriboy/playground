<?php 

function output(int $arg1, string $arg2)
{
    echo 'First argument is ' . gettype($arg1) . PHP_EOL;
    echo 'Second argument is ' . gettype($arg2) . PHP_EOL;
}

echo '<pre>';

output(1, 'text');
// output('text', 1); // エラーでる
output(arg2: 'text',arg1: 1); // 名前付き引数を使うとエラー出ない。仮引数の変数名を使う

/** 
 * 名前付き引数は、呼び出しの順番が変わってもエラーが出ないことよりも、
 * 呼び出し側で変数の意味がわかるという可読性のメリットが大きそう
 */

// 既存の関数でも使用できるっぽい
$list = [1, 2, 3, 4, 5];
var_dump(in_array(needle: 2, haystack: $list, strict: true));

/**
 * デフォルト値がある関数で前方はデフォルトでOKだけど後ろの引数は指定したいときも便利
 */

function manyArg($arg1 = 0, $arg2 = 0, $arg3 = true)
{
    var_dump($arg1, $arg2, $arg3) . PHP_EOL;
}

manyArg(arg3: false);

/**
 * 変数名を変えると呼び出し側でエラーを出すようになる可能性があるので
 * この機能を使うと変数名のリファクタリングは大変になるかも
 */

