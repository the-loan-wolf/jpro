#!/bin/bash

# Loop over all files in the current directory
for file in *; do
    # Check if the file name contains '-min' before the period
    if [[ "$file" == *-min.* ]]; then
        # Remove '-min' from the file name
        new_name="${file/-min./.}"
        # Rename the file
        mv "$file" "$new_name"
    fi
done
