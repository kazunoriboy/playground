<?php 

class Human
{
    public function __construct(
        public $name
    ) {}
}

echo '<pre>';

$tanaka = new Human('tanaka');

echo $tanaka->name;

$suzuki = null;

echo $suzuki?->name; // nullだった場合もエラーを出さない

echo $suzuki->name; // nullなのでエラーが出る

/**
 * nullsafe演算子はエラー制御演算子的な危うさがあるような、、、
 */
