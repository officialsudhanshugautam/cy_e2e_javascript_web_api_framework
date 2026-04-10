export class homePage {

    weblocators = {

        search_input: '.form-control.input-lg',
        click_search: '.btn.btn-default.btn-lg',
        product: 'img[title="MacBook"]',
        addtocart: 'Add to Cart',
        success_Messaage: 'div.alert.alert-success.alert-dismissible',
    }

    searchProduct(productName) {
        cy.get(this.weblocators.search_input).type(productName)
        cy.get(this.weblocators.click_search).click()
    }

    addToCart() {
        cy.contains(this.weblocators.addtocart).first().click()
    }
    verifySuccessMessage() {
        return cy.get(this.weblocators.success_Messaage)
    }
}

