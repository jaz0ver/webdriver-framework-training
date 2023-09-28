export function getReportPathWithTime(fileName: string) {
    const date = new Date();
    const folderDate: string = `${checkTwoDigit(date.getFullYear())}-${checkTwoDigit(date.getMonth() + 1)}-${checkTwoDigit(date.getDate())}`;
    const folderTime: string = `${checkTwoDigit(date.getHours())}.${checkTwoDigit(date.getMinutes())}.${checkTwoDigit(date.getSeconds())}`;
    return `./reports/allure/allure-report/${folderDate}/${fileName}/${folderTime}/`
}

export function getLogPathWithTime(loggerName: string) {
    const date = new Date();
    const folderDate: string = `${checkTwoDigit(date.getFullYear())}-${checkTwoDigit(date.getMonth() + 1)}-${checkTwoDigit(date.getDate())}`;
    const folderTime: string = `${checkTwoDigit(date.getHours())}.${checkTwoDigit(date.getMinutes())}.${checkTwoDigit(date.getSeconds())}`;
    return `./reports/logs/${loggerName}/${folderDate}/${folderTime}/`
}

function checkTwoDigit(dateTime: number): string {
    return dateTime < 10 ? "0" + dateTime.toString() : dateTime.toString();
}

export function checkReqVariablesCMD(requiredVariables: string[]) {
    // Check required variables are existing 
    requiredVariables.forEach(variable => {
        let reqVar = false;
        for (const envVar of process.argv) {
            envVar.includes(`${variable}=`) ? reqVar = true : reqVar = false;
            if (reqVar) {
                break;
            }
        }
        if (!reqVar) {
            console.log(`${variable.toUpperCase()} was not declared. Please add in the command line, e.g. ${variable}=foo`);
            process.exit(1);
        }
    });
}

export function extractAllVariablesInCMD() {
    // Extract all declared variables
    (process.argv).forEach(variable => {
        if (variable.includes("=")) {
            let key = variable.substring(0, variable.indexOf("="));
            let value = variable.substring(variable.indexOf("=") + 1);
            process.env[key] = value;
        }
    });
}

export function getVariableInCMD(varName: string): string {
    for (const variable of process.argv) {
        if (variable.includes(`${varName}=`)) {
            return variable.substring(variable.indexOf("=") + 1);
        }
    }
    console.error(`Variable ${varName} is not in the command line.`);
    process.exit(1);
}