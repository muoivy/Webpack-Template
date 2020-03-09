# Webpack

## node
version : 10.14.0

## Usage

## package install
```
$ npm i
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

* **build**: 
* **ci**: 
* **chore**: 
* **docs**: 
* **feat**: 
* **fix**: 
* **perf**: 
* **refactor**: 
* **revert**: 
* **style**: 
* **test**: 

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