#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

git init
git add .
git -c user.name="SagarGi" -c user.email="sagargurung1001@gmail.com" commit -m "Update the build code"
git branch -M main
git push -f git@github.com:SagarGi/Portfolio.git main:gh-pages

cd -