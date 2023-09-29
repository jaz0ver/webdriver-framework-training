import { $ } from '@wdio/globals'

module.exports = {
    header: {
        selector: '.page-header',
        brandImg: {
            selector: '.page-header img'
        },
        brandLabel: {
            selector: '.page-header small'
        }
    },
    userTxtbox: {
        selector: '#username'
    },
    passwordTxtbox: {
        selector: '#password'
    },
    submitBtn: {
        selector: '#submit'
    },
    async login () {
        await $(module.exports.userTxtbox.selector).setValue('infor_taas');
        await $(module.exports.passwordTxtbox.selector).setValue('infor_taas');
        await $(module.exports.submitBtn.selector).click();
    }
}

// class LoginPage {
//     login () {
//         $(module.exports.header.selector).click();
//     }
// }