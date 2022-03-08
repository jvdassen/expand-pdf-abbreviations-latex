# Expand Abbreviations in PDF files

# Usage
Install dependencies
```
npm i
# Ubuntu: sudo apt install poppler-utils
# Arch Linux: sudo pacman -S poppler

```

Feed a PDF
```
pdftotext /path/to/file.pdf - | grep -wo "[A-Zo-]\+\{2,5\}" | sort | uniq | sort -gr | node abbrToItems.js
```

Feed sum TeX:

```
cat /path/to/*tex | grep -wo "[A-Zo-]\+\{2,5\}" | sort | uniq | sort -gr | node abbrToItems.js
```
