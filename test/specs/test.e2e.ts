import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page'
import SecurePage from '../pageobjects/secure.page'
const allureReporter = require('@wdio/allure-reporter').default

describe('My Login application', () => {
    it('should login with valid credentials', async () => {

        allureReporter.addArgument("Author", "Zenric Navea");
        allureReporter.addFeature("valid Login");
        allureReporter.addDescription("<b>Logging with valid credentials<b>", "hmtl");
        allureReporter.addStep("Open browser");
        allureReporter.addSeverity("normal");
        await LoginPage.open()

        allureReporter.addStep("Enter credentials");
        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        allureReporter.addStep("Verify flash alert");
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!')
    })
    xit('should login with invalid password credentials', async () => {
        allureReporter.addArgument("Author", "Zenric Navea");
        allureReporter.addFeature("invalid Login");
        allureReporter.addDescription("<b>Logging with invalid credentials<b>", "hmtl");
        allureReporter.addStep("Open browser");
        allureReporter.addSeverity("minor");
        await LoginPage.open()

        allureReporter.addStep("Enter credentials");
        await LoginPage.login('tomsmith', 'SuperSecretPassword!123')
        await expect(SecurePage.flashAlert).toBeExisting()
        allureReporter.addStep("Verify flash alert");
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'Your password is invalid!')
    })
    xit('should login with valid username credentials', async () => {
        allureReporter.addArgument("Author", "Zenric Navea");
        allureReporter.addFeature("invalid Login");
        allureReporter.addDescription("<b>Logging with invalid credentials<b>", "hmtl");
        allureReporter.addStep("Open browser");
        allureReporter.addSeverity("minor");
        await LoginPage.open()

        allureReporter.addStep("Enter credentials");
        await LoginPage.login('tomsmith123', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        allureReporter.addStep("Verify flash alert");
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'Your username is invalid!')
    })
    xit('should login with valid both username and password credentials', async () => {
        allureReporter.addArgument("Author", "Zenric Navea");
        allureReporter.addFeature("invalid Login");
        allureReporter.addDescription("<b>Logging with invalid credentials<b>", "hmtl");
        allureReporter.addStep("Open browser");
        allureReporter.addSeverity("minor");
        await LoginPage.open()

        allureReporter.addStep("Enter credentials");
        await LoginPage.login('tomsmith123', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        allureReporter.addStep("Verify flash alert");
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'Your username is invalid2!')
    })
})