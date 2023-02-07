/// <reference types="cypress" />

import mainPage from "../../pages/sklepTestPages/mainPage";
import myAccountPage from "../../pages/sklepTestPages/myAccountPage";
import myAccountTabsPage from "../../pages/sklepTestPages/myAccountTabsPage";
import { faker } from '@faker-js/faker';

const testData = {
  login: 'Lorem ipsum dolor sit amet, consectetur adip',
  passwordFake: 'Lorem ipsum dolor sit amet, consectetur adip',
  email: 'john@example.com',
  password: 'VfHvGRj8UmbCwp',
  randomEmail: faker.internet.email(),
  randomPassword: faker.internet.password(12),
}

describe('Skleptest my account test', () => {
  beforeEach(() => {
    cy.visit('https://skleptest.pl/')
  })

  it('Fail try to login and go to forgot password screen', () => {
    mainPage.goToAccount();
    cy.url()
      .should('include', '/my-account/');
    myAccountPage.clickLoginButton();
    myAccountPage.elements.incorrectLoginInfo()
      .should('be.visible').and('contain', 'Username is required.');
    myAccountPage.enterLoginAndPassword(testData.login, testData.passwordFake);
    myAccountPage.elements.incorrectLoginInfo()
      .should('be.visible').and('contain', 'Invalid username.');
    myAccountPage.lostPassword();
    cy.url()
      .should('include', '/lost-password/');
    myAccountPage.forgotPasswordInput(testData.login);
    myAccountPage.elements.incorrectLoginInfo()
      .should('be.visible').and('contain', 'Invalid username or email');
  });

  it('Successfully login and logout', () => {
    mainPage.goToAccount();
    cy.url()
      .should('include', '/my-account/');
    myAccountPage.enterLoginAndPassword(testData.email, testData.password);
    myAccountPage.elements.accountContent()
      .should('be.visible').and('contain', 'Hello john2');
    myAccountPage.clickButtonFromMyAccountList("customer-logout");
    myAccountTabsPage.logoutTab.confirmAndLogout();
  });

  it.only('WIP random registration and add address info', () => { // tesn test trzeba przenieść do oddzielnego pliku i poprawic beforeEach zeby rejestrownie zaczynało sie przed testem
    mainPage.goToAccount();
    myAccountPage.registerAccount(testData.randomEmail, testData.randomPassword);
    myAccountPage.moveMyAccountTab('edit-address');
    myAccountTabsPage.addressesTab.editBillingAddress();
  })





})
