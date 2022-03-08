param ($path, $oldValue, $newValue)

if ($null -eq $path -or $null -eq $oldValue -or $null -eq $newValue) {
    "Usage: replace.ps1 [Path] [OldValue] [NewValue]"
    Return
}

function ReplaceText {
    param ($f, $old, $new)

    if ([System.IO.Path]::GetFileName($f) -eq "replace.ps1") {
        "Skipping this script's file..."
        Return
    }

    $text = [System.IO.File]::ReadAllText($f)

    "Replacing occurences of ${old} with ${new} in file ${f}"
    $text = $text -replace $old, $new
    [System.IO.File]::WriteAllText($f, $text)
}

function ReplaceTextInDirectory {
    param ($d, $old, $new)

    $files = [System.IO.Directory]::GetFiles($d)
    foreach ($file in $files) {
        ReplaceText $file $old $new
    }

    $directories = [System.IO.Directory]::GetDirectories($d)
    foreach ($directory in $directories) {
        if ($directory -notlike "*.git*") {
            ReplaceTextInDirectory $directory $old $new
        }

        "Skipping .git directory..."
    }
}

if ([System.IO.File]::Exists($path)) {
    "Determined ${path} is a file..."
    ReplaceText $path $oldValue $newValue
} elseif ([System.IO.Directory]::Exists($path)) {
    "Determined ${path} is a directory..."
    ReplaceTextInDirectory $path $oldValue $newValue
}