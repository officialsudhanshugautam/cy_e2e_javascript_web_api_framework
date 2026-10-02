// Page Object Model : Page Class : All the available locators and actions
// Created the folder of "pages": for creating respective website page
// Created the class with locators and actions
// Registe page of the website 

export default class RegisterPage {

    // init locators 
    weblocators = {
        // inside object, created the weblocators for Register Page as Object
        firstName: '#input-firstname', // firstname is own created name, reference name
        lastName: '#input-lastname',
        email: '#input-email',
        telephone: '#input-telephone',
        password: '#input-password',
        passwordConfirm: '#input-confirm',
        policyCheckbox: 'input[type="checkbox"]',
        continueButton: '.btn.btn-primary'
    }

    // Methods/ Functions:
    OpenURL() {

        cy.visit(Cypress.env('URL'));
        // Method to open URL of Register Page
    }

    // Actions ***********************
    // create the method, inside method passing the weblocator and the parameter as firstName
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