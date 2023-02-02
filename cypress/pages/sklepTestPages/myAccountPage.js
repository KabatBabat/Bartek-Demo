/// <reference types="cypress" />

class MyAccountPage {

    elements = {
        myAccountheader: () => cy.get('[class="page-title margin-top"]').contains('My Account'),
        incorrectLoginInfo: () => cy.get('[class="woocommerce"]').contains('ERROR: Invalid username.')
    }

    buttons = {
        loginButton: () => cy.get('[class="woocommerce-Button button"]').contains('Login'),
        registerButton: () => cy.get('[class="woocommerce-Button button"]').contains('register'),
        rememberMeButton: () => cy.get('[class="woocommerce-form__input woocommerce-form__input-checkbox"]'),
        lostPasswordButton: () => cy.get('[class="woocommerce-LostPassword lost_password"]')
    }

    inputs = {
        loginInput: () => cy.xpath('//input[contains(@name, "username")]'),
        loginPasswordInput: () => cy.xpath('(//input[contains(@name, "password")])[1]'),
        emailInput: () => cy.xpath('//input[contains(@name, "email")]'),
        emailPasswordInput: () => cy.xpath('//input[contains(@id, "reg_password")]'),

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
}
export default new MyAccountPage();
