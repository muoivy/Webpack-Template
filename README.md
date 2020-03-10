# Webpack Tempate

## node
```
version : 10.14.0
```

## Usage

## Package install
```
npm i
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
