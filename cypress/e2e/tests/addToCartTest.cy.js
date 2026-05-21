import { homePage } from "../../pages/homePage";

const homePageObj = new homePage()

import testData from "../../fixtures/testData.json"

describe('Add to Cart Test', () => {

    // using: before hook step
    before(() => {
        cy.login(testData.login.username, testData.login.password)

    })

    it('Should add a product to the cart and verify the success message', () => {
        
        // calling page class
        homePageObj.searchProduct(testData.product.productName)
        homePageObj.addToCart()

        // assertion
        homePageObj.verifySuccessMessage().should('contain', testData.message.successMessage).and('contain', testData.product.productName)
    })
})

// CICD Pipelines
// run cypress test on CICD using GitHub action
// run customized script on CICD
// run cypress test on multiple browser
// parallel execution

// components: 
// => workflows => Events (Push, Pull request, Schedule) => Jobs = single job or double job

