<?php 

class student
{
    // 仮引数でアクセス範囲を指定できる(引数で完結するからちょっと違和感ある、、、)
    public function __construct(
        private string $name,
        protected int $age = 123,
        public array $collection = ['aaa', 'bbbb'], // 最後にカンマ入れても大丈夫になった
    ) {
        
    }
}

$stu = new Student('suzuki');

echo '<pre>';
var_dump($stu);
