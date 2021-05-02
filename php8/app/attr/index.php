<?php 

#[ClassAttribute]
class Human
{
    public function __construct(
        private $name,
    ) {}

    #[MethodAttribute]
    public function intro()
    {
        echo "I'm {$this->name} ..." . PHP_EOL;
    }
}

$takashi = new Human('takashi');

$takashi->intro();

/**
 * まだ使いみちは少ないが、今後このアトリビュートを使って外部ツールにメタデータを渡したり、
 * 挙動を変更するような実装がフレームワーク上で実装される可能性があるらしい、、、
 * ちなみに#でのコメントアウトは使えなくなる
 */
