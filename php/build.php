#!/usr/bin/env php
<?php

include "shared.php";

function template(string $file, array $args): string {
    extract($args);

    ob_start();
    include $file;
    return ob_get_clean();
}

foreach ($spells as $spell) {
    $output = template(__DIR__ . "/spell.php", $spell);
    $file = dirname(__DIR__) . "/build/spells/" . sprintf("%s.html", to_kebab_case($spell["name"]));
    $f = fopen($file, "x");
    fwrite($f, $output);
    fclose($f);
}

ob_start();
include __DIR__ . "/spells.php";
$output = ob_get_clean();
$file = dirname(__DIR__) . "/build/spells.html";
$f = fopen($file, "x");
fwrite($f, $output);
fclose($f);
