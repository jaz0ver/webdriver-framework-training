export function getReportPathWithTime(fileName: string) {
    const date = new Date();
    const folderDate: string = `${checkTwoDigit(date.getFullYear())}-${checkTwoDigit(date.getMonth()+1)}-${checkTwoDigit(date.getDate())}`;
    const folderTime: string = `${checkTwoDigit(date.getHours())}.${checkTwoDigit(date.getMinutes())}.${checkTwoDigit(date.getSeconds())}`;
    return `./reports/allure/allure-report/${folderDate}/${fileName}/${folderTime}/`
}

function checkTwoDigit(dateTime: number): string {
    return dateTime < 10 ? "0" + dateTime.toString() : dateTime.toString(); 
}