Note: Installation guide 
https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
1. Install JAVA
2. Download and install VSCode 
3. Download and install Node.js https://nodejs.org/en
    a. Check version run node -v in Terminal
4. Npm install
    a. In Terminal, run npm install -g npm
    b. Check version run npm -v in Terminal
5. Create a folder for your project and open in VSCode


Actual WebDriverIO Installation start here (In project terminal of VSCode)
    https://qavalidation.com/2022/06/getting-started-with-webdriverio-with-typescript.html/
6. npm init
    a. This will create package.json (Similar with maven's POM)

E2E setup for wdio (https://webdriver.io/)
8. npm init wdio@latest ./
    a. Follow the setup in qavalidation site

- @wdio/local-runner@latest
- @wdio/mocha-framework@latest
- @wdio/spec-reporter@latest
- ts-node
- typescript

9. Install Typescript globally
- npm install -g typescript
- npm install -g ts-node
    a. Check version run tsc -v in Terminal

10. Test run - Two ways
    a. All specs: npm run wdio
    b. Specific specs: npx wdio run ./wdio.conf.ts --spec test.e2e.ts

11. Parameterize command line
    a. MAC: npm run wdio Env=qa         Windows: $Env:Env="prod"; npm run wdio
        i. wdio is configured in wdio.conf.ts
        ii. To use the Env, call process.env.Env

12. Run a Typescript file for testing
    a. ts-node <file>

Allure reporting
    https://webdriver.io/docs/allure-reporter
13. Update wdio.conf.ts
14. Install allure-reporting in your project
15. Install alure in command line
16. Run allure command 
    a. allure generate [allure_output_dir]
    b. allure open


EXECUTION:
1. Set desire test in specs of wdio.conf.ts
2. Run the following in terminal
    a. npm run wdio:override env=qa
    b. "browser" is configured in tsconfig.json
3. Follow the instruction in url if you have issues in opening the report 
    https://www.webmo.net/link/help/AccessingLocalFiles.html