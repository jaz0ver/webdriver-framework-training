// Implemented ACN pageobject
import { Selector } from "webdriverio";
import WebElement from "../base/acn/element";

class LoginNewPage {
    // Selector - Login page > Body
    userTxtbox = new WebElement('#username');
    passwordTxtbox = new WebElement('#password');
    submitBtn = new WebElement('#submit');
    
    // Selector - Login page > Header
    private static Header = class extends WebElement {  
        constructor(selector: Selector) {
            super(selector);
        }
        brandImg = new WebElement('img', this);
        brandLabel = new WebElement('small', this);
        quote = new WebElement('blockquote small cite', this);
    }
    header = new LoginNewPage.Header('.page-header');

    // Funtion - Login page
    public async login(user: string, pw: string) {
        (await this.userTxtbox.findElement()).addValue(user);
        (await this.passwordTxtbox.findElement()).addValue(pw);
        (await this.submitBtn.findElement()).click();
    }
}
export default new LoginNewPage();