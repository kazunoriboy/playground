<?php 


// mixed 型は何でもOKという型
function returnVal($arg): mixed
{
    echo $arg . PHP_EOL;
    switch ($arg) {
        case 0:
            return 1;
            break;
        case 1:
            return 'aaaa';
            break;
        case 2:
            return [];
            break;
        case 3:
            return true;
            break;
        case 4:
            return null;
            break;
        case 5:
            return new Datetime('now');
            break;
        case 6:
            return 1.1;
            break;
        default:
        return false;
            break; // mixedの場合何もリターンしないとエラーになる
    }
}

echo '<pre>';

for ($i = 0; $i < 8; $i++) {
    returnVal($i);
}


// union 複数の型を指定できる(unionのときだけfalseとnullという型も指定できるようになる)
function devide($num1, $num2): int|float|false
{
    if ($num2 === 0) {
        return false;
    }
    return $num1 / $num2;
}

var_dump(devide(1, 2)) . PHP_EOL;
var_dump(devide(2, 1)) . PHP_EOL;
var_dump(devide(2, 0)) . PHP_EOL;



echo 'aaaaa';