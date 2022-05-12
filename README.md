# THX Docs

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

## Installation

```console
yarn
```

## Local Development

```console
yarn serve
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.


## Content editing

All content is editted using markdown. Find the files in `./src` and make sure to read the [Docusaurus docs](https://docusaurus.io/docs/markdown-features) to be able to use their markdown feature extensiones. 

## Maintenance

Switch to a local branch.

```
# https://dev-www.thx.network/
git checkout develop
```

```
# https://www.thx.network/
git checkout master
```

Pull the latest code for a branch to your local environment.

```
git pull
```

Check if you have made local changes to the code. (red: unstaged changes, green: staged changes)

```
git status
```

Stage all local changes from the folder you are in. Use `git status` to see if you have staged everything you wanted to stage.

```
git add .
```

Create a commit for your staged changes and provide a message

```
git commit -m "changes this and that"
```

Pushes the commit to the remote origin. Both the master and develop branch have CI pipelines and will deploy the changes within ~3min.

```
git push
```

When making changes you should always start with pushing those changes to the develop branch and test them on the staging environment. If all is good you can merge your changes in the develop branch to the master branch to apply them on the production environment.

```
git checkout master
git merge develop
git push
```

> if VI editor pops up after a merge, type `:q` and press `enter`
