import registerPage from '../../pages/1_registerPage.js';

// Creating object of Register Page class to access its methods in this test case file
const registerPageObject = new RegisterPage();

import registerData from '../../fixtures/1_registerData.json';

describe('Register Page Test', () => {

    it('should register a new user', () => {

        registerPageObject.OpenURL();

        //cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

        // assertions
        registerPageObject.enterFirstName(registerData.firstName);

        // Calling method to enter First Name, passing value from registerData.json file as parameter
        registerPageObject.enterLastName(registerData.lastName);
        registerPageObject.enterEmail(registerData.email);
        registerPageObject.enterTelephone(registerData.telephone);
        registerPageObject.enterPassword(registerData.password);
        registerPageObject.enterPasswordConfirm(registerData.passwordConfirm);
        registerPageObject.checkPolicyCheckbox();
        //registerPageObject.clickContinueButton(); //enable it if want to register successfuly
    });

});