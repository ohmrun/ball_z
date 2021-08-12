#!/bin/bash 
git pull 
#!/bin/bash
git submodule foreach -q --recursive 'git pull origin $(git config -f $toplevel/.gitmodules submodule.$name.branch || echo master)'

#git pull --recurse-submodules