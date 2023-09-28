module.exports = {
    // Now, if you want to only run a single suite, you can pass the suite name as a CLI argument:
    // npm run wdio:android --suite sample
    // Or, run multiple suites at once:
    // npm run wdio:android --suite sample --suite sample2
    "suites": {
        login: [
            '../test/testcases/Login/test.e2e.login.ts'
        ],
        e2e: [
                '../test/testcases/test.e2e.ts'
        ],
        all: ['../test/testcases/**/*.ts']
    },
    "specs": [
        '../test/testcases/**/*.ts'
    ]
}