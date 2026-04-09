import { homePage } from "../../pages/homePage";
const homePageObj = new homePage()
import testData from "../../fixtures/testData.json"

describe('Add to Cart Test', () => {

    before(() => {
        cy.login(testData.login.username, testData.login.password)

    })

    it('Should add a product to the cart and verify the success message', () => {
        homePageObj.searchProduct(testData.product.productName)
        homePageObj.addToCart()
        homePageObj.verifySuccessMessage().should('contain', testData.message.successMessage).and('contain', testData.product.productName)
    })
})