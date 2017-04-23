#!/bin/sh

set -e

[ -z "${FOO}" ] && echo "FOO is required" && exit 1;
[ -z "${BAR}" ] && echo "BAR is required" && exit 1;

# install and link libray
yarn install
yarn link

# install and run app
cd example
yarn install
yarn link next-page-environment
yarn dev
