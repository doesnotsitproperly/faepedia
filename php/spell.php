<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <link href="../css/style.css" rel="stylesheet">
        <link rel="stylesheet" id="platformStylesheet">

        <link href="https://fonts.googleapis.com/css?family=Cousine" rel="stylesheet">

        <link href="../logo.svg" rel="shortcut icon">
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
        <?= $description; ?>
        <?= PHP_EOL; ?>
        <p>Classes: <?= $classes; ?></p>
    </body>
</html>
