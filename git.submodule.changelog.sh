#!/bin/bash

git log -p --submodule=log | awk '
/^commit/ { add=1 } # Start of commit message
/^diff --git/ { add=0 } # Start of diff snippet
{ if (add) { buf = buf "\n" $0 } } # Add lines if part of commit message
END { print buf }
'