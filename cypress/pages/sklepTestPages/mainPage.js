/// <reference types="cypress" />

class MainShopPage {
    elements = {

    }

    inputs = {
        searchInput: () => cy.get('[class="search-field-top-bar"]'),

    }

    buttons = {
        emailButton: () => cy.get('[class="top-email"]'),
        cartButton: () => cy.get('[class="top-cart"]'),
        acccountButton: () => cy.get('[class="top-account"]'),
        searchInputButton: () => cy.get('[class="search-top-bar-submit"]'),

    }

    goToEmail() {
        this.buttons.emailButton().click();
    }

    goToCart() {
        this.buttons.cartButton().click();
    }

    goToAccount() {
        this.buttons.acccountButton().click();
    }

    enterInputInSearchField(value) {
        this.inputs.searchInput().type(value);
    }

}

export default new MainShopPage;