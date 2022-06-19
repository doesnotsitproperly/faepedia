<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <link rel="shortcut icon" href="logo.svg">
        <link rel="stylesheet" href="css/style.css">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Cousine">
        <link rel="stylesheet" id="platformStylesheet">
        <title>Faepedia - Spells</title>
    </head>
    <body>
        <script src="js/format.js" onload="platformFormat('css')"></script>
        <p><a href="./">Back to homepage</a></p>
        <table>
            <thead>
                <tr>
                    <th>Level</th>
                    <th>Name</th>
                    <th>School</th>
                    <th>Classes</th>
                </tr>
            </thead>
            <tbody>
<?php foreach ($spells as $spell): ?>
                <tr id="<?= $spell["name"]; ?>" class="spell">
                    <td><?= $spell["level"]; ?></td>
                    <td><b><?= $spell["name"]; ?></b></td>
                    <td><?= $spell["school"]; ?></td>
                    <td><?= $spell["classes"]; ?></td>
                </tr>
                <tr id="<?= $spell["name"] . " Details"; ?>">
                    <td colspan="4">
                        <p class="top-block">Casting Time: <?= $spell["casting_time"]; ?></p>
                        <p class="middle-block">Range / Area: <?= $spell["range_area"]; ?></p>
                        <p class="middle-block">Components: <?= $spell["components"]; ?></p>
                        <p class="bottom-block">Duration: <?= $spell["duration"]; ?></p>
<?php foreach ($spell["description"] as $element): ?>
                        <?= $element; ?>
                        <?= PHP_EOL; ?>
<?php endforeach; ?>
                    </td>
                </tr>
<?php endforeach; ?>
            </tbody>
        </table>
        <script src="js/spells.js"></script>
    </body>
</html>
