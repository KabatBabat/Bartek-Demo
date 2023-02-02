/// <reference types="cypress" />

import mainPage from "../../pages/sklepTestPages/mainPage";
import myAccountPage from "../../pages/sklepTestPages/myAccountPage";

const testData = {
  login: 'Lorem ipsum dolor sit amet, consectetur adip',
  password: 'Lorem ipsum dolor sit amet, consectetur adip',
}

describe('template spec', () => {
  before(() => {
    cy.visit('https://skleptest.pl/')
  })

  it('Fail try to login', () => {
    mainPage.goToAccount();
    cy.url()
      .should('include', '/my-account/');
    myAccountPage.enterLoginAndPassword(testData.login, testData.password);
    myAccountPage.elements.incorrectLoginInfo()
      .should('be.visible');

  });
})
