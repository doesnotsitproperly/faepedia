<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <link rel="shortcut icon" href="../logo.svg">
        <link rel="stylesheet" href="css/style.css">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Cousine">
        <link rel="stylesheet" id="platformStylesheet">
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
