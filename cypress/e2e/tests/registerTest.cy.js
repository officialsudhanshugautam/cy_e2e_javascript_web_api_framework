import registerPage from '../../pages/registerPage.js';
// Importing Register Page class from pageObjects folder, using relative path

const registerObject = new registerPage();
// Creating object of Register Page class to access its methods in test case

import registerData from '../../fixtures/registerData.json';

describe('Register Test', () => {
    // Describe block for Register Test by Mocha framework, Test suite as Register Page, () called callback function for test steps    

    // beforeEach(() => {
    //     // Before Each block to execute before each test case, () called callback function for steps to be executed before each test case
    //     registerObjects.OpenURL();
    // });

    // *********** this test case following Encapsulation **********
    // It block for test case, Test case as should register a new user, () called callback function for test steps
    it('should register a new user', () => {
        
        // calling page class,  first calling class as registerObject=registePage, than calling method, fixtures data parameter value

        registerObject.OpenURL();
        
        //cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

        registerObject.enterFirstName(registerData.firstName);

        // Calling method to enter First Name, passing value from registerData.json file as parameter

        registerObject.enterLastName(registerData.lastName);
        registerObject.enterEmail(registerData.email);
        registerObject.enterTelephone(registerData.telephone);
        registerObject.enterPassword(registerData.password);
        registerObject.enterPasswordConfirm(registerData.passwordConfirm);
        registerObject.checkPolicyCheckbox();
        //registerObject.clickContinueButton();
    });
});