<?php 

function outputId($arg)
{
    // 文ではなく式なのでreturnの直後に書ける
    return match ($arg) {
        1 => 'arg is integer 1',
        2 => 'arg is integer 2',
    };
}

echo '<pre>';
echo outputId(1) . PHP_EOL; 
echo outputId(2) . PHP_EOL;
// echo outputId('1') . PHP_EOL; // 厳密比較をするので Uncaught UnhandledMatchErrorが発生する

function outputIdWithDefault($arg)
{
    // 文ではなく式なのでreturnの直後に書ける
    return match ($arg) {
        1 => 'arg is integer 1',
        2 => 'arg is integer 2',
        default => 'give me a integer value',
    };
}

echo outputIdWithDefault(1) . PHP_EOL; 
echo outputIdWithDefault(2) . PHP_EOL;
echo outputIdWithDefault('1') . PHP_EOL; // 厳密比較をするので Uncaught UnhandledMatchErrorが発生する
