# nodejs-md5-npm.

## CLI.

### Calculate md5 of file using npm modules.

1. Write a script which will take a file path as argument and calculate md5 hash for its content using npm package what you will chose.
2. Find a package for functionality for subtask 2 that can be used with npm exec command. Write at readme.md example of usage.

### Solution for subtask 1.

I'm installed npm package - "md5-file" by:
```shell
npm i md5-file
```
And then I used this package in my script.

### Solution for subtask 2.

NPM package for "Verify environment" - exec-sh (https://www.npmjs.com/package/exec-sh)
Step 1. Installing package
```Shell
npm i exec-sh
```
Step 2. Re-write a script using shell-exec npm package
```javascript
'use strict'

const execSh = require('exec-sh')

const ENVIRONMENT = [
    {name: 'docker', cmd: 'docker -v'},
    {name: 'git', cmd: 'git --version'},
    {name: 'npm', cmd: 'npm -v'},
    {name: 'nvm', cmd: 'nvm -v'},
    {name: 'node', cmd: 'node -v'},
]


const runShellCommand = (commandInfo, shellCommand) => {
    execSh(shellCommand, true, (err, stdout) => {
        if (err) {
            console.log('Exit code: ', err.code)
        }

        console.log(`Program: ${commandInfo}, version: ${stdout}`)
    })
}

const hasApp = (appInfo) => {
    runShellCommand(appInfo.name, appInfo.cmd)
}

const hasEnvironment = (environment) => {
    environment.forEach(hasApp)
}


hasEnvironment(ENVIRONMENT)
```

