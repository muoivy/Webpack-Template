# Webpack Tempate

## node

```
version : 10.14.0
```

## File Structure

```
root/
├── lib/
│   └── imagemin.js
├── server/
│   └── index.js
├── src/
│   ├── css/
│   │   ├── foundation/
│   │   │   ├── var.styl
│   │   │   ├── mixin.styl
│   │   │   ├── reset.styl
│   │   │   ├── fonts.styl
│   │   │   ├── base.styl
│   │   │   └── index.styl
│   │   ├── layout/
│   │   │   ├── header.styl
│   │   │   ├── main.styl
│   │   │   ├── footer.styl
│   │   │   └── index.styl
│   │   ├── object/
│   │   │   ├── component/
│   │   │   │   └── index.styl
│   │   │   ├── project/
│   │   │   │   └── index.styl
│   │   │   ├── utility/
│   │   │   │   ├── align.styl
│   │   │   │   ├── display.styl
│   │   │   │   ├── margin.styl
│   │   │   │   └── index.styl
│   │   │   └── index.styl
│   │   └── index.styl
│   ├── html/
│   │   ├── _includes/
│   │   │   ├── _template.pug
│   │   │   ├── _header.pug
│   │   │   └── _footer.pug
│   │   ├── index.pug
│   │   └── sub.pug
│   ├── js/
│   │   ├── modules/
│   │   │   └── Common.ts
│   │   └── index.ts
│   └── img/
├── htdocs/
├── .babelrc
├── .commitlintrc.js
├── .editorconfig
├── .eslintrc
├── .gitignore
├── .npmrc
├── .prettierrc
├── package.json
├── package-lock.json
├── README.md
├── supremacy.json
├── tsconfig.json
└── tslint.json
```

## Usage

## Package install

```
npm install
```

## Local build

```
npm run start
```

## Production build

```
npm run publish
```

## Commit Message Format
Enter the commit message in the following format.

```
<type>(<scope>): <subject>

<body>

<footer>
```
`type` and` subject` are required, but `scope`,` body`, and `footer` can be omitted.

#### Type

`type` must be one of the following.

* **build**: Build system or external dependencies changes
* **ci**: CI configurations and scripts changes
* **chore**: Add or change build processes, tools, and libraries used (do not include changes to source code)
* **docs**: Documentation
* **feat**: Feature
* **fix**: Bug fix
* **perf**: Improves performance
* **refactor**: Restructuring existing code, but not bug or feature
* **revert**: Reverts a previous commit
* **style**: Formatting, missing semi colons, etc.
* **test**: Adding missing tests

#### Scope(optional)

`scope` can be anything that identifies the scope of the changes made by the commit.
For example, you can use `*` if the file name or module name you changed or the range of influence is various.

#### Description

`description` gives a summary of the changes made by the commit, both imperative and present.
Do not capitalize the first letter. Also, do not use a trailing dot.

#### Body, Footer(optional)

If the `type`,` scope`, and `description` have insufficient information or cannot be entered due to restrictions, enter the body and footer.
The body should state in more detail why the change was made and what it would do if it were not changed.
The footer mainly contains a reference to the issue.
