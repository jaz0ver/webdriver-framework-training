import { config } from "./wdio.conf"
require('dotenv').config()
// import { getLogPathWithTime } from '../main/utilities/common.functions'
const suites = require("../test/testrunner/web.testrunner").suites
// const specs = require("../test/testrunner/web.testrunner").specs

// ==================
// Specify Test Files
// ==================
// Define which test specs should run. The pattern is relative to the directory
// of the configuration file being run.
//
// The specs are defined as an array of spec files (optionally using wildcards
// that will be expanded). The test for each spec file will be run in a separate
// worker process. In order to have a group of spec files run in the same worker
// process simply enclose them in an array within the specs array.
//
// If you are calling `wdio` from an NPM script (see https://docs.npmjs.com/cli/run-script),
// then the current working directory is where your `package.json` resides, so `wdio`
// will be called from there.
//
// config.specs = specs;
config.specs = [
    '../test/testcases/login/test.e2e.login.ts'
];
config.suites = suites;
// ============
// Capabilities
// ============
// Define your capabilities here. WebdriverIO can run multiple capabilities at the same
// time. Depending on the number of capabilities, WebdriverIO launches several test
// sessions. Within your capabilities you can overwrite the spec and exclude options in
// order to group specific specs to a specific capability.
//
// First, you can define how many instances should be started at the same time. Let's
// say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
// set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
// files and you set maxInstances to 10, all spec files will get tested at the same time
// and 30 processes will get spawned. The property handles how many capabilities
// from the same test should run tests.
//
config.maxInstances = 1;
//
// If you have trouble getting all important capabilities together, check out the
// Sauce Labs platform configurator - a great tool to configure your capabilities:
// https://saucelabs.com/platform/platform-configurator
const browser: string = process.env.BROWSER || '';
const chrome = {
    browserName: 'chrome',
    browserVersion: 'latest',
    'bstack:options': {
        os: 'Windows',
        osVersion: '10',
    }
};
const firefox = {
    browserName: 'firefox',
    browserVersion: 'latest',
    'bstack:options': {
        os: 'Windows',
        osVersion: '10',
    }
};
const edge = {
    browserName: 'Edge',
    browserVersion: 'latest',
    'bstack:options': {
        os: 'Windows',
        osVersion: '10',
    }
};
const safari = {
    browserName: 'safari',
    browserVersion: 'latest',
    'bstack:options': {
        os: 'OS X',
        osVersion: 'Big Sur',
    }
};
const chrome_android = {
    browserName: 'chrome',
    'bstack:options': {
        deviceName: 'Samsung Galaxy S20',
    }
};
const safari_iphone = {
    browserName: 'safari',
    'bstack:options': {
        deviceName: 'iPhone 12 Pro',
        osVersion: '17',
    }
};
switch (browser) {
    case "chrome":
        config.capabilities = [chrome];
        break;
    case "firefox":
        config.capabilities = [firefox];
        break;
    case "edge":
        config.capabilities = [edge];
        break;
    case "safari":
        config.capabilities = [safari];
        break;
    case "chrome_android":
        config.capabilities = [chrome_android];
        break;
    case "safari_iphone":
        config.capabilities = [safari_iphone];
        break;
    case "all":
        config.capabilities = [chrome, firefox, edge, safari, chrome_android, safari_iphone];
        break;
    default:
        console.error(`Selected browser, ${browser} was not in the list.`);
        process.exit(1);
};
const commonCapabilities = {
    'bstack:options': {
        buildName: 'browserstack-build-1'
    },
};
//
// Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
config.user = process.env.BROWSERSTACK_USERNAME;
config.key = process.env.BROWSERSTACK_ACCESS_KEY;
config.services = [
    [
        'browserstack',
        {
            testObservability: true,
            testObservabilityOptions: {
                projectName: "Browserstack WDIO - ZEN",
                buildName: "The static build job name goes here e.g. Nightly regression"
            },
            browserstackLocal: true,
            opts: {
                // logFile: `${getLogPathWithTime('browserstack')}local.log`
            }
        }
    ]
];

exports.config = config
// Code to support common capabilities
exports.config.capabilities.forEach(function (caps: { [x: string]: any; }): any {
    // caps['bstack:options'] = { ...caps['bstack:options'], ...commonCapabilities['bstack:options'] };
    (Object.keys(commonCapabilities) as (keyof typeof commonCapabilities)[]).find((key) => {
        caps[key] = { ...caps[key], ...commonCapabilities[key] };
    });
});