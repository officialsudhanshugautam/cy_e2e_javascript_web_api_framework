/// <reference types = "Cypress" />

describe('GET User API Request', () => {

    let AUTH_TOKEN = {
        Authorization: 'Bearer bc5104f9db0fa9d35d48813af15fe91ff06ca8682d3f40c5f2e264c321740063'
    };

    let userId;

    //it.only
    it('GET - All Users', () => {

        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public/v2/users',
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

            cy.log('Get User ID: ' +userId);
        })
    })

    it('GET - User by ID', () => {

        cy.request({
            method: 'GET',
            url: `https://gorest.co.in/public/v2/users/${userId}`,
            headers: {
                'authorization': 'Bearer bc5104f9db0fa9d35d48813af15fe91ff06ca8682d3f40c5f2e264c321740063'
            }
        }).then((response) => {
            expect(response.status).to.equal(200);
        })
    })

});