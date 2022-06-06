<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <link rel="shortcut icon" href="../logo.svg">
        <link rel="stylesheet" href="../css/style.css">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Cousine">
        <link rel="stylesheet" id="platformStylesheet">
        <title>Faepedia - <?= $name; ?></title>
    </head>
    <body>
        <script src="../js/format.js" onload="platformFormat('../css')"></script>
        <p><a href="../spells">Back to Spells</a></p>
        <p class="top-block"><b><?= $name; ?></b></p>
        <p class="bottom-block"><?= $level == "Cantrip" ? sprintf("%s cantrip", $school) : sprintf("%s %s spell", $level, $school); ?></p>
        <p class="top-block">Casting Time: <?= $casting_time; ?></p>
        <p class="middle-block">Range / Area: <?= $range_area; ?></p>
        <p class="middle-block">Components: <?= $components; ?></p>
        <p class="bottom-block">Duration: <?= $duration; ?></p>
<?php foreach ($description as $element): ?>
        <?= $element; ?>
        <?= PHP_EOL; ?>
<?php endforeach; ?>
        <p>Classes: <?= $classes; ?></p>
    </body>
</html>
