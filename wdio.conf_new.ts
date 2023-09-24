import {config} from "./wdio.conf"

config.capabilities = [{
    browserName: 'chrome',
    timeouts: { implicit: 0, pageLoad: 300000, script: 30000 }
}]