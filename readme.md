# <a name='nav'>Budget application</a>

- [App description](#description)
- [Quick start development](#quickstart)
- [How to use this project](#howto)

---

## <a name='description'>Description</a>

This is a middle level application written by html, css and clean javascript.
This app is a simplified version of Excel, Google Sheets or similarly application.

You can see this app demo version on GitHub Pages [this link](https://voverg.github.io/excel/ 'See the excel app demo')
This ES6 standard project rebuild with webpack and babel to be cross browsers.

This application allows you create, edit and save sheets.

![]()

You can resize columns and rows.

![]()

You can use formula field to calculate expressions.

![]()

You can add styles to text in the selected cell/cells

![]()

-----

[Return to navigation](#nav)

## <a name='quickstart'>Quick start development</a>

To quick start you have to:

1. Clone this repository by written `git clone git@github.com:voverg/excel.git` in your console or terminal
2. Set up **Node.js** and **npm** (sets up automatically with Node.js). You can download it from official web site <https://nodejs.org/> 
3. Open the folder with cloned project template in your console or terminal
4. Write `npm i` in your console and wait for dependences will downloaded
5. That's all. Now you are ready for start use this project
6. Write `npm run start` in your console to run a development poject version. This mode allows reload the app in a browser automatically (webpack-dev-server is used).
7. Write `npm run build` in your console to build a production version of this project. Production version will bundled in a **/docs** folder 

[Return to navigation](#nav) 

## <a name='howto'>How to use</a>

#### File structure

In order to use this start template for correct building, you should keep this file structure in your project:

```
  Project
  |- .gitignore
  |- readme.md
  |- package.json
  |- webpack.config.js
  |- /docs
  |- /src
    |- index.html
    |- index.js
    |- /assets
    |- /components
    |- /core
    |- /img
    |- /scss
      |- style.css
  |- /node_modules
```

A little bit about some folders and files in this structure:

- The  .**gitignore** file contains folder and file names excluded git tracking
- **readme.md** contains description of the app
- **package.json** contains an information about project, including dependences, supported browsers and some scripts
- **webpack.config.js** contains webpack settings
- Into **docs** contains bundled files (index.html, bundle.js, bundle.css and image files). This folder named **docs** for GitHub Pages (GitHub Pages requires to call production folder the same way). 
- **src** folder contains the project sources
- **node_modules** folder will appear after `npm i` command in your console and will contain dependences of the project for development and production

[Return to navigation](#nav)

