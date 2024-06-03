/// <reference types="cypress" />

import mainPage from "../../pages/sklepTestPages/mainPage";
import myAccountTabsPage from "../../pages/sklepTestPages/myAccountTabsPage";
import { faker } from '@faker-js/faker';
import myAccountPage from "../../pages/sklepTestPages/myAccountPage";

const testData = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    companyName: faker.company.name(),
    addressOne: faker.address.streetAddress(),
    addressTwo: faker.address.buildingNumber(),
    polishPostCode: "26-600",
    town: faker.address.cityName(),
    phone: faker.phone.number('500-###-###'),
    email: faker.internet.email(),
    randomEmail: faker.internet.email(),
    randomPassword: faker.internet.password(12),
}

describe('Skleptest my account test', () => {
    beforeEach(() => {
        cy.visit('https://skleptest.pl/')
    })

    it('WIP random registration and add address info', () => { 
        mainPage.goToAccount();
        myAccountPage.registerAccount(testData.randomEmail, testData.randomPassword);
        myAccountPage.moveMyAccountTab('edit-address');
        myAccountTabsPage.addressesTab.editBillingAddress();
        myAccountTabsPage.addressesTab
            .enterBillingDetails(
                testData.firstName,
                testData.lastName,
                testData.companyName,
                testData.addressOne,
                testData.addressTwo,
                testData.polishPostCode,
                testData.town,
                testData.phone,
                testData.email
                )
    })
})