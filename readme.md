# eslint-plugin-byurhan

[![npm version](https://badgen.net/npm/v/eslint-config-byurhan?icon=npm)](https://www.npmjs.com/package/eslint-config-byurhan)
[![license](https://badgen.net/badge/license/MIT/blue)](https://opensource.org/licenses/MIT)

*Personal ESLint/Prettier config plugin for my projects with my preferred code style*

## What it does
- Lints JavaScript based on the latest standards
- Fixes issues and formatting errors with Prettier
- Lints + Fixes React via eslint-config-airbnb
- You can see all the [rules here](./.eslintrc.js). You can always overwrite any of these settings or just fork the entire repo to create your own config.

## Install

1. If you do not already have `package.json` file, create one with `npm init`.

2. Then we need to install the plugin:

```bash
npm install --save-dev eslint-plugin-byurhan
```

3. Create a `.eslintrc` file in the root of your project folder. Your `.eslintrc` file should look like this:

```json
{
  "extends": [
    "byurhan"
  ],
}
```

4. Now you can add the scripts to your `package.json` to lint and fix:

```json
"scripts" {
  "lint": "eslint .",
  "lint:fix": "eslint . --fix"
}
```

5. Now you can run `npm run lint` to lint your code and `npm run lint:fix` to fix all fixable issues.

## Settings/Rules

If you'd like to overwrite eslint or prettier settings, you can add the rules in your `.eslintrc` file. The [ESLint rules](https://eslint.org/docs/rules/) go directly under `"rules"` while [prettier options](https://prettier.io/docs/en/options.html) go under `"prettier/prettier"`. Prettier rules overwrite anything in my config (trailing comma, and single quote), so you'll need to include those as well. 

```json
{
  "extends": [
    "byurhan"
  ],
  "rules": {
    "no-alert": 0,
    "prettier/prettier": [
      "error",
      {
        "jsxBracketSameLine": false,
        "trailingComma": "all",
        "singleQuote": true,
        "printWidth": 80,
        "semi": false
      }
    ]
  }
}
```


## Auto Lint/Fix with VS Code

1. Install the [ESLint package](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) for VS Code

2. Now we need to setup some VS Code settings via Code/File → Preferences → Settings. It's easier to enter these settings from `settings.json` file, so click the {} icon in the top right corner:

```json
{
  // Turn off "formatOnSave" for JS and JSX, we will set eslint to do this
  "[javascript]": {
    "editor.formatOnSave": false
  },
  "[javascriptreact]": {
    "editor.formatOnSave": false
  },
  // Tell the ESLint plugin to run on save
  "eslint.autoFixOnSave": true,
  // Turn off prettier for JS and JSX because we are doing it through eslint already
  "prettier.disableLanguages": ["javascript", "javascriptreact"],
}
```

## License
[MIT](https://opensource.org/licenses/MIT) &copy; [Byurhan Beyzat](https://byurhanbeyzat.com/). <br />
[Buy me a coffee](https://ko-fi.com/X7X38NNC)