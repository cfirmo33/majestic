<h1 align="center">
  <img src="./docs/logo.png" alt="logo" width="350px" height="70px" />
  <img src="./docs/majestic.gif" alt="Wiretap" style="margin-top: 15px">
  <h3 align="center">Zero config UI for Jest</h3>
</h1>

## What is Majestic?

Majestic is an electron app for running tests with Jest. Majestic is a tool built for providing great developer experience when you write tests with Jest.

Jest CLI itself is one of the best CLI experience you can get out there today. But Majestic tries to bring that CLI experience in a form of a UI app.

## Features

* Run particular tests with a click
* Watch the whole project, a file or a test
* Update specific snapshots with a click
* Inline coverage reports
* Zero configuration (Sorry, I had to)
* Support for typescript projects
* Support for Create-react-app out of the box
* Quick search to search across all your test (It) statements
* Failure summary shows all test failtures in a single screen. Useful when you have failures across multiple files.
* Locate a specific test in your editor with a click of a button

### 1) Download the app

* [OS X](https://github.com/Raathigesh/majestic/releases/download/v0.1.0/Majestic-0.1.0.dmg)
* [Windows](https://github.com/Raathigesh/majestic/releases/download/v0.1.0/majestic-setup-0.1.0.exe)

### External Jest configuration file

Ok, I lied partially about the zero config part.

Majestic is a zero config tool if you keep all your jest configuration in the `package.json` file.

If you have an external `jest` config file, you should have a `jestConfig` key in the `package.json` pointing to the file as shown below.

```json
{
  "name": "my-awesome-proj",
  "version": "0.1.0",
  "description": "..",
  "jestConfig": "./jest-custom.config.js"
}
```

### Enabling coverage report

Majestic displays coverage reports generated by Jest. So make sure to have HTML coverage report configured so Majestic can display them.

#### Configuring Jest with Html coverage report

It's really simple.

```json
{
  "collectCoverage": true,
  "coverageReporters": ["html"]
}
```

### Configuring coverage in a create-react-app project

```diff
- "test": "react-scripts test --env=jsdom",
+ "test": "react-scripts test --env=jsdom --coverage",
```

## Contribute

Majestic relies on [`jest-editor-support`](https://github.com/facebook/jest/tree/master/packages/jest-editor-support), a module from jest, which allows to execute jest programatically.

```
git clone https://github.com/facebook/jest.git
cd jest
yarn install

# link jest-editor-support
cd packages/jest-editor-support
yarn link
```

Now let's setup majestic.

```
git clone https://github.com/Raathigesh/majestic.git
cd majestic

# this would install and would do a yarn link for jest-editor-support
yarn install

# start the app
yarn dev
```

## Inspiration

This tool is inspired by https://wallabyjs.com/. Check them out.

## Thanks

Thank you [@orta](https://github.com/orta) for building [VSCode Jest](https://github.com/jest-community/vscode-jest) and doing the heavy lifting.

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->

| [<img src="https://avatars2.githubusercontent.com/u/3108160?s=460&v=4" width="100px;"/><br /><sub>Raathigeshan</sub>](https://twitter.com/Raathigesh)<br />💻 📖 💬 👀 🤔 🎨 |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |


<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification.
Contributions of any kind are welcome!

## License

MIT © [Raathigeshan](https://twitter.com/Raathigesh)
