# Building A Component Library With React

## 1.	Summary
A component library is a collection of logically group components so that one can explore, select components and helps in maintaining consistent design across projects.

## 2.	How to Create a React Library
You can create a React Library using the create-react-library (https://github.com/transitive-bullshit/create-react-library) CLI which uses Rollup.js and create-react-app.

Rollup.js is a module bundler for JavaScript which compiles small pieces of code into something larger and more complex, such as a library.

### Steps:
1.Install globally

This package requires node >= 10.

`npm install -g create-react-library`

2.Create Library

Fire up the command prompt and use the below commandcd

`npx create-react-library`

```js
Microsoft Windows [Version 10.0.19042.985]

(c) Microsoft Corporation. All rights reserved.

C:\Nag\myDrive\blog\React\NagLib>npx create-react-library
npx: installed 150 in 21.621s
? Package Name nag-rlib
? Package Description Nag React Library
? Author's GitHub Handle nagvbt
? GitHub Repo Path nagvbt/nag-rlib
? License NAG VBT
? Package Manager yarn
? Template default
```

## 3.	Build and Launch the example site
To get started, in one tab, run:

`$ cd nag-rlib && yarn start`

And in another command window, run the create-react-app dev server:

`$ cd nag-rlib\example && yarn start`

## 3.	Create Github Repo and push the code
a.	Open command prompt and Fire up the command

`cd nag-rlib`

Use the below Git Commands to set the email and user name of the github

1.Update email and username using:
```js
	a.git config user.email "nagvbt@gmail.com"
	b.git config user.name "nagvbt"
```

2.Check if they are updated correctly:
```js
	a.git config user.email
	b.git config user.name
```

b. Create a new repository in Github with the same project name say nag-rlib

Create a new repository
…or push an existing repository from the command line
```js
git remote add origin https://github.com/nagvbt/nag-rlib.git
git branch -M main
git push -u origin main
```

Now the code was pushed into the Github - https://github.com/nagvbt/nag-rlib/commit/03e8a144f5afa4edf43b8e47f3dd1facf8d63a6b

