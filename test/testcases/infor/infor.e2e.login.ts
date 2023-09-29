import WebControl from '../../pageobjects/base/acn/browser'
import LoginPage from '../../pageobjects/infor/login.page'


describe('Infor login', () => {
    it('Login successfully in Infor site',async () => {
        WebControl.goToUrl('http://play.taas.infor.com');
        await expect(LoginPage.header.findElement()).toBeDisplayed();
        await expect(LoginPage.header.brandImg.findElement()).toBeDisplayed();
        await expect(LoginPage.header.brandLabel.findElement()).toBeDisplayed();
        await expect(LoginPage.header.quote.findElement()).not.toBeDisplayed();
        await Promise.all([
            LoginPage.userTxtbox.enter('infor_taas'),
            LoginPage.passwordTxtbox.enter('infor_taas')
        ]);
        await LoginPage.submitBtn.click();
        await browser.debug();
    })
})