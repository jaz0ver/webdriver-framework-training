const emuPath = process.env.ANDROID_HOME + "/emulator";

export default function setupAndroidEmulator(deviceName: string) {
    const { exec } = require('node:child_process');
    exec('adb devices', (error: Error, stdout: Buffer, stderr: Buffer) => {
        if (error || stderr) {
            console.error(`[setupAndroidEmulator]: Error: ${error}\nStdError: ${stderr}`);
            return;
        }
        if (!stdout.toString().includes("emulator-5554")) {
            checkAndroidEmulator(deviceName);
        } else {
            console.log("An emulator is already running.")
        }
    }); 
}

function checkAndroidEmulator(deviceName: string) {
    const { spawn } = require('child_process');
    const checkEmulator = spawn(`cd ${emuPath} && .\\emulator -list-avds`, {
        shell: true
    });
    checkEmulator.stdout.on('data', (data: string) => {
        if (data.includes(deviceName)) {
            openAndroidEmulator(deviceName);
        } else {
            console.error(`Please create android emulator, ${deviceName}.`);
        }
    });
    checkEmulator.stderr.on('data', (data: string) => {
        console.error(`[checkAndroidEmulator]: Failed\n${data}`);
        process.exit(1);
    });
}

function openAndroidEmulator(deviceName: string) {
    const { spawn } = require('child_process');
    const checkEmulator = spawn(`cd ${emuPath} && .\\emulator -avd ${deviceName}`, {
        shell: true
    });
    checkEmulator.stdout.on('data', (data: any) => {
        console.error(`[openAndroidEmulator]: Opening ${deviceName}\n${data}`);
    });
}

