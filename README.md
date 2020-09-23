# EHNV - Styleguide
EHNV Styleguide.

## Prerequisites

First of all, you need to have the following tools installed globally on your environment:

  * node v9
  * yarn
  * gulp

## Typography
The fonts `Proxima` is currently served by Typekit's Antistatique account.

Don't forget to include the fonts:


```html
<link rel="stylesheet" href="https://use.typekit.net/xld7vod.css">
```

## Install

  ````shell
  $ yarn install
  $ yarn build 
  ````

## Development

First you have to launch Gulp to watch your files

  ````shell
  $ gulp serve
  ````

## Deploy
The deployment of branch `dev` and `master` is managed yourself and publish on NPM!


### First time

  ````shell
    # You need to create a new realease using git flow
    $ git flow release start 0.0.1
    # Make some last minutes changes and prepare your realease
    $ git flow release finish -p 0.0.1
    # Publish on NPM your last release
    $ npm publish
  ````
