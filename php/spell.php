<!DOCTYPE html>
<html>
    <head>
        <link rel="shortcut icon" href="../logo.svg">
        <link rel="stylesheet" href="../css/style.css">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Cousine">
        <link rel="stylesheet" id="platformStylesheet">
        <meta charset="utf-8">
        <title>Faepedia - <?= $name; ?></title>
    </head>
    <body>
        <script src="../js/format.js" onload="platformFormat('../css')"></script>
        <p><a href="../spells">Back to Spells</a></p>
        <p class="block top"><b><?= $name; ?></b></p>
        <p class="block bottom"><?= $level == "Cantrip" ? $school . " cantrip" : $level . " " . $school . " spell"; ?></p>
        <p class="block top">Casting Time: <?= $casting_time; ?></p>
        <p class="block middle">Range / Area: <?= $range_area; ?></p>
        <p class="block middle">Components: <?= $components; ?></p>
        <p class="block bottom">Duration: <?= $duration; ?></p>
<?php foreach ($description as $element): ?>
        <?= $element; ?>
        <?= PHP_EOL; ?>
<?php endforeach; ?>
        <p>Classes: <?= $classes; ?></p>
    </body>
</html>
