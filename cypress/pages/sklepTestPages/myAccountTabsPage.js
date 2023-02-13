/// <reference types="cypress" />

class DashboardTab {
    // elements = {

    // } left if it would be needed
}

class OrdersTab {
    elements = {
        emptyOrderListPlaceholder: () => cy.get('[class="woocommerce-message woocommerce-message--info"]').contains('No order has been made yet.'),
    }

    buttons = {
        goToShopButton: () => cy.get('[class="woocommerce-Button button"]')
    }

    goToShop() {
        this.buttons.goToShopButton().click();
    }
}

class DownloadsTab {
    elements = {
        emptyDownloadListPlaceholder: () => cy.get('[class="woocommerce-Message woocommerce-Message--info woocommerce-info"]').contains('No downloads available yet.'),
    }

    // buttons = {

    // } left if it would be needed
}

class AddressesTab {
    elements = {
        emptyAdressesListPlaceholder: () => cy.contains('[class="woocommerce-MyAccount-content"]', 'The following addresses will be used on the checkout page by default.')
    }

    buttons = {
        editBillingAddressButton: () => cy.get('[class="edit"]').eq(0),
        editShippingAddressButton: () => cy.get('[class="edit"]').eq(1),
        saveBillingAddressButton: () => cy.get('[name="save_address"]')

    }

    inputs = {
        firstNameInput: () => cy.get('[name="billing_first_name"]'),
        lastNameInput: () => cy.get('[name="billing_last_name"]'),
        companyInput: () => cy.get('[name="billing_company"]'),
        address1Input: () => cy.get('[name="billing_address_1"]'),
        address2Input: () => cy.get('[name="billing_address_2"]'),
        postCodeInput: () => cy.get('[name="billing_postcode"]'),
        cityInput: () => cy.get('[name="billing_city"]'),
        phoneInput: () => cy.get('[name="billing_phone"]'),
        emailInput: () => cy.get('[name="billing_email"]'),
    }

    enterBillingDetails(firstName, lastName, company, address1, address2, postCode, city, phone, email) {
        this.inputs.firstNameInput().clear().type(firstName);
        this.inputs.lastNameInput().clear().type(lastName);
        this.inputs.companyInput().clear().type(company);
        this.inputs.address1Input().clear().type(address1);
        this.inputs.address2Input().clear().type(address2);
        this.inputs.postCodeInput().clear().type(postCode);
        this.inputs.cityInput().clear().type(city);
        this.inputs.phoneInput().clear().type(phone);
        this.inputs.emailInput().clear().type(email);
        this.buttons.saveBillingAddressButton().click();
    }

    editBillingAddress() {
        this.buttons.editBillingAddressButton().click();
    }

    editShippingAddress() {
        this.buttons.editShippingAddressButton().click();
    }
}

class LogoutTab {
    buttons = {
        logoutButton: () => cy.xpath('//div[contains(@class, "woocommerce-message")]//a')
    }

    confirmAndLogout() {
        this.buttons.logoutButton().click();
    }
}


export default new class myAccountTabs {
    dashboardTab = new DashboardTab();
    ordersTab = new OrdersTab();
    downloadsTab = new DownloadsTab();
    addressesTab = new AddressesTab();
    logoutTab = new LogoutTab();
}