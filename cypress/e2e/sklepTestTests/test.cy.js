/// <reference types="cypress" />

import mainPage from "../../pages/sklepTestPages/mainPage";

describe('template spec', () => {
  before(() => {
    cy.visit('https://skleptest.pl/')
  })

  it('Fail try to login', () => {
    mainPage.goToAccount();
    cy.url()
      .should('include', '/my-account/');
    
  });
})
