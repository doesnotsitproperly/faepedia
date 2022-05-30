<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <link href="css/style.css" rel="stylesheet">
        <link rel="stylesheet" id="platformStylesheet">

        <link href="https://fonts.googleapis.com/css?family=Cousine" rel="stylesheet">

        <link href="logo.svg" rel="shortcut icon">
        <title>Faepedia - Spells</title>
    </head>
    <body>
        <script src="js/format.js" onload="platformFormat('css')"></script>
        <p><a href="./">Back to homepage</a></p>
        <table class="spell-table">
            <thead>
                <tr>
                    <th>Level</th>
                    <th>Name</th>
                    <th>School</th>
                    <th>Casting Time</th>
                    <th>Range / Area</th>
                    <th>Duration</th>
                    <th>Classes</th>
                </tr>
            </thead>
            <tbody>
<?php include "shared.php"; ?>
<?php foreach ($spells as $spell): ?>
                <tr id="<?= to_camel_case($spell["name"]); ?>">
                    <td><?= $spell["level"]; ?></td>
                    <td><b><a href="spells/<?= to_kebab_case($spell["name"]); ?>"><?= $spell["name"]; ?></a></b></td>
                    <td><?= $spell["school"]; ?></td>
                    <td><?= $spell["casting_time"]; ?></td>
                    <td><?= $spell["range_area"]; ?></td>
                    <td><?= $spell["duration"]; ?></td>
                    <td><?= $spell["classes"]; ?></td>
                </tr>
<?php endforeach; ?>
            </tbody>
        </table>
        <script src="js/spells.js"></script>
    </body>
</html>
