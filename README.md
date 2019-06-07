# ExtJs Package Wrapper for GitHub API

[![perry-johnson](https://img.shields.io/badge/perry%20johnson-pja-blue.svg)](https://www.perryjohnson.com)
[![app-type](https://img.shields.io/badge/category-extjs%20package-blue.svg)](https://www.perryjohnson.com)
[![app-lang](https://img.shields.io/badge/language-javascript%20c%23-blue.svg)](https://www.perryjohnson.com)
[![app-publisher](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-app--publisher-e10000.svg)](https://github.com/perryjohnsoninc/app-publisher)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

[![authors](https://img.shields.io/badge/authors-scott%20meesseman-6F02B5.svg?logo=visual%20studio%20code)](https://github.com/perryjohnsoninc)
[![GitHub issues open](https://img.shields.io/github/issues-raw/perryjohnsoninc/extjs%2dpkg%2dgithub.svg?maxAge=259200&logo=github)](https://github.com/perryjohnsoninc/extjs-pkg-github/issues)
[![GitHub issues closed](https://img.shields.io/github/issues-closed-raw/perryjohnsoninc/extjs%2dpkg%2dgithub.svg?maxAge=259200&logo=github)](https://github.com/perryjohnsoninc/extjs-pkg-github/issues)

## Description

> This package provides an ExtJS package wrapper for the GitHub API.

## Install

To install this package, run the following command:

    npm install @perryjohnson/extjs-pkg-github

## Usage

To include the package in an ExtJS application build, be sure to add the package name to the list of required packages in the app.json file:

    "requires": [
         "github",
        ...
    ]

For an open tooling build, also add the node_modules path to the workspace.json packages path array:

     "packages": {
        "dir": "...${package.dir}/node_modules/@perryjohnson/extjs-pkg-github"
    }

Simply use the icons with the default ExtJS syntax:

    require [ 'Ext.ux.GitHub' ],
    ...
    myFunction: function()
    {
        GitHubApi.createRelease(url, tag, assets);
    }
