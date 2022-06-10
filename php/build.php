#!/usr/bin/env php
<?php

include "shared.php";

function template(string $file, array $args): string {
    extract($args);

    ob_start();
    include $file;
    return ob_get_clean();
}

function remove_non_alpha(string $s): string {
    $new_string = "";
    foreach (str_split($s) as $char) {
        if (ctype_alpha($char)) {
            $new_string .= strtolower($char);
        }
    }
    return $new_string;
}

foreach ($spells as $spell) {
    $output = template(__DIR__ . "/spell.php", $spell);
    $file = dirname(__DIR__) . "/build/spells/" . sprintf("%s.html", to_kebab_case($spell["name"]));
    $f = fopen($file, "x");
    if ($f != false) {
        fwrite($f, $output);
        fclose($f);
    }
}

ob_start();
include __DIR__ . "/spells.php";
$output = ob_get_clean();
$file = dirname(__DIR__) . "/build/spells.html";
$f = fopen($file, "x");
if ($f != false) {
    fwrite($f, $output);
    fclose($f);
}

$spellsJSON = [];
foreach ($spells as $spell) {
    $classes = [];
    foreach (explode(",", $spell["classes"]) as $class) {
        $classes[] = remove_non_alpha($class);
    }

    $spellJSON = [
        "name" => $spell["name"],
        "level" => to_kebab_case($spell["level"]),
        "school" => remove_non_alpha($spell["school"]),
        "classes" => $classes
    ];

    $spellsJSON[] = $spellJSON;
}

$file = dirname(__DIR__) . "/build/spells.json";
$f = fopen($file, "x");
if ($f != false) {
    fwrite($f, json_encode([ "array" => $spellsJSON ], JSON_PRETTY_PRINT) . PHP_EOL);
    fclose($f);
}
