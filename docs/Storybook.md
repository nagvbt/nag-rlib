# Storybook

Storybook makes development faster and easier by isolating components with business logic.

## Install Storybook

Use the Storybook CLI to install it in a single command. Run this inside your existing project’s root directory:

Add Storybook:

`npx sb init`

## Addons

1. By Default you will get two Addons
   a. Essential addons [Refer](https://storybook.js.org/docs/react/essentials/introduction)
   b. addon-links

2. Add Aditional addons [Refer Code](https://github.com/nagvbt/nag-rlib/commit/076bb5062ef90720cf6741b2a257ad244865b883)

| S#  | Addon                                                                                | Command                                       | Description                                           |
| --- | ------------------------------------------------------------------------------------ | --------------------------------------------- | ----------------------------------------------------- |
| 1   | [a11y](https://github.com/storybookjs/storybook/tree/next/addons/a11y)               | yarn add @storybook/addon-a11y --dev          | Test components for user accessibility in Storybook   |
| 2   | [storysource](https://github.com/storybookjs/storybook/tree/next/addons/storysource) | yarn add @storybook/addon-storysource --dev   | View the code of your stories within the Storybook UI |
| 3   | [react-theming](https://github.com/react-theming/storybook-addon)                    | yarn add @react-theming/storybook-addon --dev | Allows to develop themed components in isolation.     |

## References

1. Storybook [documentation](https://storybook.js.org/docs/react/get-started/introduction)

2. Storybook [tutorials](https://storybook.js.org/tutorials/)
