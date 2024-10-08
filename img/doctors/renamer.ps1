$files = Get-ChildItem -Filter *.jpg  # Or .png/.jpeg depending on your file type
$i = 1
foreach ($file in $files) {
    $newName = "$i.jpg"               # Change extension if needed
    Rename-Item $file.FullName $newName
    $i++
}