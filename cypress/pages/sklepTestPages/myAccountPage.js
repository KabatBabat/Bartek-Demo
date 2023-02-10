/// <reference types="cypress" />

class MyAccountPage {

    elements = {
        myAccountheader: () => cy.get('[class="page-title margin-top"]'),
        incorrectLoginInfo: () => cy.get('[class="woocommerce-error"]'),
        accountContent: () => cy.get('[class="woocommerce-MyAccount-content"]'),
    }

    buttons = {
        loginButton: () => cy.get('[class="woocommerce-Button button"]').contains('Login'),
        registerButton: () => cy.get('[class="woocommerce-Button button"]').contains('Register'),
        rememberMeButton: () => cy.get('[class="woocommerce-form__input woocommerce-form__input-checkbox"]'),
        lostPasswordButton: () => cy.xpath('//p[contains(@class, "woocommerce-LostPassword")]//a'),
        resetPasswordButton: () => cy.xpath('//input[contains(@value, "Reset password")]'),
        myAccountListButtons: (buttonName) => cy.get(`.woocommerce-MyAccount-navigation-link--${buttonName} > a`),
        confirmLogoutButton: () => cy.xpath('//div[@class="woocommerce-message"]//a'),
    }

    inputs = {
        loginInput: () => cy.xpath('//input[contains(@name, "username")]'),
        loginPasswordInput: () => cy.xpath('(//input[contains(@name, "password")])[1]'),
        emailInput: () => cy.xpath('//input[contains(@id, "reg_email")]'),
        emailPasswordInput: () => cy.xpath('//input[contains(@id, "reg_password")]'),
        forgotPasswordInput: () => cy.xpath('//input[contains(@name, "user_login")]')
    }

    enterLoginAndPassword({email, password}) {
        this.inputs.loginInput().type(email);
        this.inputs.loginPasswordInput().type(password);
        this.buttons.loginButton().click();
    }

    registerAccount(email, password) {
        this.inputs.emailInput().type(email);
        this.inputs.emailPasswordInput().type(password);
        this.buttons.registerButton().click();
    }

    rememberMe() {
        this.buttons.rememberMeButton().click();
    }

    lostPassword() {
        this.buttons.lostPasswordButton().click();
    }

    clickLoginButton() {
        this.buttons.loginButton().click();
    }

    clickRegisterButton() {
        this.buttons.registerButton().click();
    }

    forgotPasswordInput(value) {
        this.inputs.forgotPasswordInput().type(value);
        this.buttons.resetPasswordButton().click();
    }
    
    clickButtonFromMyAccountList(buttonName) {
        this.buttons.myAccountListButtons(buttonName).click();
    }

    moveMyAccountTab(tab) {
        this.buttons.myAccountListButtons(tab).click();
    }
}
export default new MyAccountPage();
