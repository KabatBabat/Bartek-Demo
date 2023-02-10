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