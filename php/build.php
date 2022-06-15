#!/usr/bin/env php
<?php

include "shared.php";

$directory_separator = "";
try {
    $directory_separator = file_get_contents(dirname(__DIR__) . "/directory_separator.txt");
} catch (Exception $_) {
    $directory_separator = file_get_contents(dirname(__DIR__) . "\directory_separator.txt");
}

function template(string $file, array $args): string {
    extract($args);

    ob_start();
    include $file;
    return ob_get_clean();
}

// Equipment

ob_start();
include __DIR__ . $directory_separator . "equipment.php";
$output = ob_get_clean();
$file = dirname(__DIR__) . $directory_separator . "build" . $directory_separator . "equipment.html";
$f = fopen($file, "x");
fwrite($f, $output);
fclose($f);

// Spells

foreach ($spells as $spell) {
    $output = template(__DIR__ . $directory_separator . "spell.php", $spell);
    $file = dirname(__DIR__) . $directory_separator . "build" . $directory_separator . "spells" . $directory_separator . to_kebab_case($spell["name"]) . ".html";
    $f = fopen($file, "x");
    fwrite($f, $output);
    fclose($f);
}

ob_start();
include __DIR__ . $directory_separator . "spells.php";
$output = ob_get_clean();
$file = dirname(__DIR__) . $directory_separator . "build" . $directory_separator . "spells.html";
$f = fopen($file, "x");
fwrite($f, $output);
fclose($f);
