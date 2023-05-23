name: build and deploy

on:
  push:
    branches:
      - master
  pull_request:

jobs:
  build-publish:
    runs-on: ubuntu-latest
    steps:
      - name: checkout
        uses: actions/checkout@v3

      - name: setup-node
        uses: actions/setup-node@v3
        with:
          node-version: 14
          cache: yarn

      - name: yarn-install
        run: yarn install --immutable

      - name: build
        run: yarn build

      - name: deploy
        if: ${{ success() && github.event_name == 'push' && github.ref == 'refs/heads/master' }}
        uses: crazy-max/ghaction-github-pages@v3
        with:
          target_branch: deploy
          build_dir: dist
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}