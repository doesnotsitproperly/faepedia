<!DOCTYPE html>
<html>
    <head>
        <link rel="shortcut icon" href="logo.svg">
        <link rel="stylesheet" href="css/style.css">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Cousine">
        <link rel="stylesheet" id="platformStylesheet">
        <meta charset="utf-8">
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
                    <td><a href="spells/<?= to_kebab_case($spell["name"]); ?>"><b><?= $spell["name"]; ?></b></a></td>
                    <td><?= $spell["school"]; ?></td>
                    <td><?= $spell["classes"]; ?></td>
                </tr>
<?php endforeach; ?>
            </tbody>
        </table>
        <script src="js/spells.js"></script>
    </body>
</html>
