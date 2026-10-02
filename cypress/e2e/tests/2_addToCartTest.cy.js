import { HomePage } from "../../pages/2_homePage";

const homePageObj = new HomePage();

import testData from "../../fixtures/2_testData.json"

describe('Add to Cart Test', () => {

    before(() => {
        cy.login(testData.login.username, testData.login.password)

    })

    it('Should add a product to the cart and verify the success message', () => {

        // calling page class methods
        homePageObj.searchProduct(testData.product.productName);
        homePageObj.addToCart();

        // assertion
        homePageObj.verifySuccessMessage().should('contain', testData.message.successMessage).and('contain', testData.product.productName);
    })

});

