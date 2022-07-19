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
        <p><a href="../equipment">Back to Equipment</a></p>
        <p class="block top"><b><?= $name; ?></b></p>
        <p class="block bottom"><?= $type; ?></p>
        <p class="block top">Cost: <?= $cost > 0 ? pluralize($cost, "gold piece") : "Not applicable"; ?></p>
        <p class="block bottom">Weight: <?= $weight > 0 ? pluralize($weight, "pound") : "Not applicable"; ?></p>
<?php foreach ($description as $element): ?>
        <?= $element; ?>
        <?= PHP_EOL; ?>
<?php endforeach; ?>
        <p>Tags: <?= strlen($tags) > 0 ? $tags : "None" ?></p>
    </body>
</html>
