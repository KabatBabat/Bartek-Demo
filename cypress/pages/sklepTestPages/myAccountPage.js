/// <reference types="cypress" />

class MyAccountPage {

    elements = {
        myAccountheader: () => cy.get('[class="page-title margin-top"]'),
        incorrectLoginInfo: () => cy.get('[class="woocommerce-error"]')
    }

    buttons = {
        loginButton: () => cy.get('[class="woocommerce-Button button"]').contains('Login'),
        registerButton: () => cy.get('[class="woocommerce-Button button"]').contains('register'),
        rememberMeButton: () => cy.get('[class="woocommerce-form__input woocommerce-form__input-checkbox"]'),
        lostPasswordButton: () => cy.xpath('//p[contains(@class, "woocommerce-LostPassword")]//a'),
        resetPasswordButton: () => cy.xpath('//input[contains(@value, "Reset password")]'),
    }

    inputs = {
        loginInput: () => cy.xpath('//input[contains(@name, "username")]'),
        loginPasswordInput: () => cy.xpath('(//input[contains(@name, "password")])[1]'),
        emailInput: () => cy.xpath('//input[contains(@name, "email")]'),
        emailPasswordInput: () => cy.xpath('//input[contains(@id, "reg_password")]'),
        forgotPasswordInput: () => cy.xpath('//input[contains(@name, "user_login")]')
    }

    enterLoginAndPassword(username, password) {
        this.inputs.loginInput().type(username);
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
    
}
export default new MyAccountPage();
