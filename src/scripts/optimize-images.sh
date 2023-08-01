 #!/usr/bin/env bash

# Set the directory path to public from the root.
directory="$PWD/public"

# Find all PNG files in the directory and its subdirectories.
find "$directory" -type f -iname "*.png" | while read -r file; do
  # Run pngquant on each file, modifying it in place.
  pngquant "$file" --ext=".png" -f
done
