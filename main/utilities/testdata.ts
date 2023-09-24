import data from "../../main/resources/testdata/testdata.json";
// import env from "../../main/resources/env.json";
// import config from "../../main/resources/config.json";

export default class testdata {

    getEnviroment() {
        return process.env.ENV ? process.env.ENV : "";
    }
    
    getEnviromentDetails() {
        return process.env.ENV_DETAILS;
    }

    getGenericAccount() {
        return data.generic_account;
    }
}