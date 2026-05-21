
    // create the class
class registerPage {         
    // Class for Register Page and its methods to interact with elements on Register Page, 
    // actions to be performed on Register Page

    // create the object
    weblocators = {
        // inside object, created the weblocators for Register Page as Object
        firstName: '#input-firstname', // firstname is own created name
        lastName: '#input-lastname',
        email: '#input-email',
        telephone: '#input-telephone',
        password: '#input-password',
        passwordConfirm: '#input-confirm',
        policyCheckbox: 'input[type="checkbox"]',
        continueButton: '.btn.btn-primary'
    }

    // create the method and calling URL from cypress config file
    OpenURL() {

        cy.visit(Cypress.env("URL"));
           // Method to open URL of Register Page
    }
    // create the method, inside method passing the weblocator and passing the parameter as firstName
    enterFirstName(firstName) { 
        // Method to enter First Name, passing Weblocator and value as parameter
        cy.get(this.weblocators.firstName).type(firstName)

    }
    enterLastName(lastName) {
        cy.get(this.weblocators.lastName).type(lastName)
    }
    enterEmail(email) {
        cy.get(this.weblocators.email).type(email)
    }
    enterTelephone(telephone) {
        cy.get(this.weblocators.telephone).type(telephone)
    }
    enterPassword(password) {
        cy.get(this.weblocators.password).type(password)
    }
    enterPasswordConfirm(passwordConfirm) {
        cy.get(this.weblocators.passwordConfirm).type(passwordConfirm)
    }
    checkPolicyCheckbox() {
        cy.get(this.weblocators.policyCheckbox).check()
    }
    clickContinueButton() {
        cy.get(this.weblocators.continueButton).click()
    }

}

export default registerPage;