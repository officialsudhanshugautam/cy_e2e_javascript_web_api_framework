/// <reference types = "Cypress" />

describe('GET User API Request', () => {

    const AUTH_TOKEN = {
        Authorization: 'Bearer ' + Cypress.env('accessToken')
    };

    const BASE_URL = Cypress.env('goRestApiBaseURL');

    let userId;
    let endPointURL;

    //it.only
    it('GET - All Users', () => {

        endPointURL = '/public/v2/users';

        cy.request({
            method: 'GET',
            url: BASE_URL + endPointURL,
            headers: {
                AUTH_TOKEN
            }
        }).then((response) => {

            cy.log(response.status);
            cy.log(response.statusText);

            //assertions
            expect(response.status).to.equal(200);
            expect(response.statusText).to.equal('OK');

            // cy.log(JSON.stringify(response));

            userId = response.body[0].id;

            cy.log('Get User ID: ' + userId);
        })
    })

    it('GET - User by ID', () => {

        cy.request({
            method: 'GET',
            url: BASE_URL + endPointURL +'/' + userId,
            headers: {
                AUTH_TOKEN
            }
        }).then((response) => {
            expect(response.status).to.equal(200);
        })
    })

});