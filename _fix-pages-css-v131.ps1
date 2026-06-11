Set-Location $PSScriptRoot
$file = '.\assets\css\pages.css'
$abs = (Resolve-Path $file).Path
$content = Get-Content -LiteralPath $abs -Raw -Encoding UTF8
$new = $content -replace 'v1\.3\.5', 'v1.3.1'
$count = ([regex]::Matches($content, 'v1\.3\.5')).Count
Write-Host "before: $count occurrences of v1.3.5"
if ($content -ne $new) {
  Set-Content -LiteralPath $abs -Value $new -Encoding UTF8 -NoNewline
  Write-Host "OK: replaced"
} else {
  Write-Host "MISS: no change"
}
$after = (Get-Content -LiteralPath $abs -Raw -Encoding UTF8)
$countAfter = ([regex]::Matches($after, 'v1\.3\.5')).Count
Write-Host "after: $countAfter occurrences of v1.3.5"
