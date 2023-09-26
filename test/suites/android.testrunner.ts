module.exports = {
    // Now, if you want to only run a single suite, you can pass the suite name as a CLI argument:
    // npm run wdio:android --suite sample
    // Or, run multiple suites at once:
    // npm run wdio:android --suite sample --suite sample2
    "suites": {
        test: [
                '../test/specs/TestWDIO.ts'
        ],
        e2e: [
                '../test/specs/test.e2e.ts'
        ],
        all: ["../test/specs/**/*.ts"]
    },
    "specs": [
        '../test/specs/test.e2e.ts',
        '../test/specs/TestWDIO.ts'
    ]
}