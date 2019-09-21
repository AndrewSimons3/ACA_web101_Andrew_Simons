#!/usr/bin/env bash
#
# Opens a file in chrome 
#
# How to use:
# sh chromeOpener.sh <name_of_html_file>
# where name_of_html_file is a file name within the project
# this only works if you do not include the extension
#
# Example:
# sh chromeOpener.sh hair 

file_path_with_name=$(find .|grep $1.html)
open -a "Google Chrome" $file_path_with_name

