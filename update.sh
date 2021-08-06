#!/bin/bash 

git config --global status.submoduleSummary true
git pull 
git submodule update --init --remote
git submodule foreach -q --recursive 'git checkout $(git config -f $toplevel/.gitmodules submodule.$name.branch || echo master)'

git pull --recurse-submodules