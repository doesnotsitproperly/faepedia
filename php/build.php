#!/usr/bin/env php
<?php

include "shared.php";

$directory_separator = "";
try {
    $directory_separator = file_get_contents(dirname(__DIR__) . "/directory_separator.txt");
} catch (Exception $_) {
    $directory_separator = file_get_contents(dirname(__DIR__) . "\directory_separator.txt");
}

ob_start();
include __DIR__ . $directory_separator . "equipment.php";
$output = ob_get_clean();
$file = dirname(__DIR__) . $directory_separator . "build" . $directory_separator . "equipment.html";
$f = fopen($file, "x");
fwrite($f, $output);
fclose($f);

ob_start();
include __DIR__ . $directory_separator . "spells.php";
$output = ob_get_clean();
$file = dirname(__DIR__) . $directory_separator . "build" . $directory_separator . "spells.html";
$f = fopen($file, "x");
fwrite($f, $output);
fclose($f);
