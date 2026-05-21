// calling a page class
import { registerPage } from "../../pages/registerPage.js"

// initialize
const registerObject = new registerPage() 

// calling a fixture data

import registerData from '../../fixtures/registerData.json';

// describe as block name, given a test suite name, inside it callback function ()=> {}
describe('test automation', ()=> {



    // inside block, create it block for test case
it('register flow', ()=> {

    // calling class

    registerObject.OpenURL()

}) 

});
