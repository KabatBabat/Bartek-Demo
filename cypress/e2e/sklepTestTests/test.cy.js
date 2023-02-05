/// <reference types="cypress" />

import mainPage from "../../pages/sklepTestPages/mainPage";
import myAccountPage from "../../pages/sklepTestPages/myAccountPage";

const testData = {
  login: 'Lorem ipsum dolor sit amet, consectetur adip',
  password: 'Lorem ipsum dolor sit amet, consectetur adip',
  email: 'john@example.com',
  password: 'VfHvGRj8UmbCwp'
}

describe('template spec', () => {
  before(() => {
    cy.visit('https://skleptest.pl/')
  })

  it('Fail try to login and go to forgot password screen', () => {
    mainPage.goToAccount();
    cy.url()
      .should('include', '/my-account/');
    myAccountPage.clickLoginButton();
    myAccountPage.elements.incorrectLoginInfo()
      .should('be.visible').and('contain', 'Username is required.');
    myAccountPage.enterLoginAndPassword(testData.login, testData.password);
    myAccountPage.elements.incorrectLoginInfo()
      .should('be.visible').and('contain', 'Invalid username.');
    myAccountPage.lostPassword();
    cy.url()
      .should('include', '/lost-password/');
    myAccountPage.forgotPasswordInput(testData.login);
    myAccountPage.elements.incorrectLoginInfo()
      .should('be.visible').and('contain', 'Invalid username or email');
  });




})
