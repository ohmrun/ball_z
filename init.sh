#!/bin/bash
#set -e
set -a

git -C "${REPO_PATH}" config -f .gitmodules --get-regexp '^submodule\..*\.path$' |
    while read -r KEY MODULE_PATH
    do
        # If the module's path exists, remove it.
        # This is done b/c the module's path is currently 
        # not a valid git repo and adding the submodule will cause an error.
        [ -d "${MODULE_PATH}" ] && sudo rm -rf "${MODULE_PATH}"

        NAME="$(echo "${KEY}" | sed 's/^submodule\.\(.*\)\.path$/\1/')"

        url_key="$(echo "${KEY}" | sed 's/\.path$/.url/')"
        branch_key="$(echo "${KEY}" | sed 's/\.path$/.branch/')"

        URL="$(git config -f .gitmodules --get "${url_key}")"
        BRANCH="$(git config -f .gitmodules --get "${branch_key}" || echo "master")"

        git -C "${REPO_PATH}" submodule add --force -b "${BRANCH}" --name "${NAME}" "${URL}" "${MODULE_PATH}" || continue
    done

git -C "${REPO_PATH}" submodule update --init --recursive
