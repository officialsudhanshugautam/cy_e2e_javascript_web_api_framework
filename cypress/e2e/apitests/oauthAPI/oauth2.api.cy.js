/// <reference types="Cypress" />

describe('Spotify OAuth2.0 APIs', () => {

    let OAuthToken;
    
    before(() => {

        cy.request({
            method: 'POST',
            url: Cypress.env('spotifyUrl'),
            form: true,
            body: {
                grant_type: Cypress.env('grantType'),
                client_id: Cypress.env('clientId'),
                client_secret: Cypress.env('clientSecret'),
            }

        }).then((response) => {

            expect(response.status).to.equal(200);

            OAuthToken = response.body.access_token
            cy.log('Access Token: ' + OAuthToken);

        })

    })

    it('Spotify Album Access via OAuth2.0 Token', () => {

        let baseURL = 'https://api.spotify.com';
        let endPointURL = '/v1/albums/4aawyAB9vmqN3uQ7FjRGTy';

        cy.request({
            method: 'GET',
            url: baseURL + endPointURL,
            headers: {
                Authorization: 'Bearer ' + OAuthToken
            },
            failOnStatusCode: false

        }).then((response) => {

            //Correct code:
            // expect(response.status).to.equal(200);
            // expect(response.statusText).to.equal('OK');

            //Due to requirement of Spotify subscription we shall receive the 403 status code and Forbidden as status text along with below message
            //message: Active premium subscription required for the owner of the app. When the subscription status changes, 
            // it can take a few hours before requests are allowed again. 
            expect(response.status).to.equal(403);
            expect(response.statusText).to.equal('Forbidden');
        })
    })

});