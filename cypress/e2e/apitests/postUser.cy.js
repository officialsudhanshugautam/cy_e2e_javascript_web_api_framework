/// <reference types="Cypress" />

const createUserJSON = require('../../fixtures/createUser.json')

describe('POST User API Request', () => {

    beforeEach(() => {

        var pattern = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        for (var i = 0; i < 10; i++)
            randomText += pattern.charAt(Math.floor(Math.random() * pattern.length));
        testEmail = randomText + '@sudhanshu.com'

    })

    let token = 'bc5104f9db0fa9d35d48813af15fe91ff06ca8682d3f40c5f2e264c321740063'

    let randomText = ""
    let testEmail = ""
    let userId;

    it('POST - Create User', () => {

        let postPayload = {
            "name": createUserJSON.name,
            "email": testEmail,
            "gender": createUserJSON.gender,
            "status": createUserJSON.status
        }

        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users',
            headers: {
                Authorization: 'Bearer ' + token
            },
            body: postPayload
        }).then((response) => {

            // cy.log(JSON.stringify(response));

            expect(response.status).to.equal(201);
            expect(response.statusText).to.equal('Created');

            expect(response.body).has.property('name', postPayload.name);
            expect(response.body).has.property('email', postPayload.email);
            expect(response.body).has.property('gender', postPayload.gender);
            expect(response.body).has.property('status', postPayload.status);

            userId = response.body.id;

            cy.log('Created User ID: ' + userId);
        })
    })

    it('POST - Create User from Fixture Method', () => {

        cy.fixture('createUser').then((fixturePayload) => {

            let postPayload = {
                "name": fixturePayload.name,
                "email": testEmail,
                "gender": fixturePayload.gender,
                "status": fixturePayload.status
            }

            cy.request({
                method: 'POST',
                url: 'https://gorest.co.in/public/v2/users',
                headers: {
                    Authorization: 'Bearer ' + token
                },
                body: postPayload
            }).then((response) => {

                // cy.log(JSON.stringify(response));

                expect(response.status).to.equal(201);
                expect(response.statusText).to.equal('Created');

                expect(response.body).has.property('name', postPayload.name);
                expect(response.body).has.property('email', postPayload.email);
                expect(response.body).has.property('gender', postPayload.gender);
                expect(response.body).has.property('status', postPayload.status);
            }).then((response) => {

                userId = response.body.id;

                cy.log('Created User ID: ' + userId);

                cy.request({
                    method: 'GET',
                    url: `https://gorest.co.in/public/v2/users/${userId}`,
                    headers: {
                        'authorization': 'Bearer bc5104f9db0fa9d35d48813af15fe91ff06ca8682d3f40c5f2e264c321740063'
                    }
                }).then((response) => {

                    // cy.log(JSON.stringify(response));

                    expect(response.status).to.equal(200);
                    expect(response.statusText).to.equal('OK');

                    expect(response.body).has.property('name', postPayload.name);
                    expect(response.body).has.property('email', postPayload.email);
                    expect(response.body).has.property('gender', postPayload.gender);
                    expect(response.body).has.property('status', postPayload.status);
                })
            })
        })

    })

});