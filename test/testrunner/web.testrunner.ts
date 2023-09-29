module.exports = {
    // Now, if you want to only run a single suite, you can pass the suite name as a CLI argument:
    // npm run wdio:android --suite sample
    // Or, run multiple suites at once:
    // npm run wdio:desktop --suite sample --suite sample2
    "suites": {
        wdio_sample: [
            '../test/testcases/wdio.sample/test.e2e.login.ts'
        ],
        infor_login: [
            '../test/testcases/infor/infor.e2e.login.ts'
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