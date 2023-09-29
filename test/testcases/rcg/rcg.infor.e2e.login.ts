import WebControl from "../../pageobjects/base/acn/browser"
const LoginPage = require("../../pageobjects/rcg/rcg.infor.login.page")

describe('Login to Infor site', () => {
    it('Successfull login',async () => {
        WebControl.goToUrl('http://play.taas.infor.com');
        await expect($(LoginPage.header.selector)).toBeDisplayed();
        await expect($(LoginPage.header.brandImg.selector)).toBeDisplayed();
        await expect($(LoginPage.header.brandLabel.selector)).toBeDisplayed();
        // await (await $(LoginPage.userTxtbox.selector)).setValue('infor_taas');
        // await (await $(LoginPage.passwordTxtbox.selector)).setValue('infor_taas');
        // await (await $(LoginPage.submitBtn.selector)).click();
        await LoginPage.login();
        await browser.debug();
    })
})