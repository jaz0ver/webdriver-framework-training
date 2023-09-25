console.log(process.argv);
console.log(process.cwd());
console.log(__dirname);

function reqVariableChecker(variables: string[]) {

    let reqVar: boolean;
    variables.forEach(variable => {
        for (const envVar of process.argv) {
            reqVar = false;
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

let requiredVariables = [
    "env"
]

reqVariableChecker(requiredVariables);
