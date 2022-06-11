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
        <p><a href="../equipment">Back to Equipment</a></p>
        <p class="top-block"><b><?= $name; ?></b></p>
        <p class="bottom-block"><?= $type; ?></p>
        <p class="top-block">Cost: <?= $cost > 0 ? sprintf("%s gold piece(s)", $cost) : "Not applicable"; ?></p>
        <p class="bottom-block">Weight: <?= $weight > 0 ? sprintf("%s pound(s)", $weight) : "Not applicable"; ?></p>
        <p>Tags: <?= strlen($tags) > 0 ? $tags : "None" ?></p>
    </body>
</html>
