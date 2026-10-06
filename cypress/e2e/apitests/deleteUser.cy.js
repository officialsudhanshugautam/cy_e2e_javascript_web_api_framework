/// <reference types="Cypress" />

const createUserJSON = require('../../fixtures/createUser.json')

describe('CRUD User API Request', () => {

    before(() => {

        var pattern = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        for (var i = 0; i < 10; i++)
            randomText += pattern.charAt(Math.floor(Math.random() * pattern.length));
        testEmail = randomText + '@sudhanshu.com'

    })

    const accessToken = 'Bearer '+Cypress.env('accessToken');

    let randomText = ""
    let testEmail = ""
    let userId;
    let postPayload;
    let putPayload;

    it('CRUD the User', () => {

        //AAA
        //1. Create the User - POST request
        postPayload = {
            "name": createUserJSON.name,
            "email": testEmail,
            "gender": createUserJSON.gender,
            "status": createUserJSON.status
        }

        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users',
            headers: {
                Authorization: accessToken
            },
            body: postPayload
        }).then((response) => {

            expect(response.status).to.equal(201);
            expect(response.statusText).to.equal('Created');

            expect(response.body).has.property('name', postPayload.name);
            expect(response.body).has.property('email', postPayload.email);
            expect(response.body).has.property('gender', postPayload.gender);
            expect(response.body).has.property('status', postPayload.status);

            userId = response.body.id;

            cy.log('Created User ID: ' + userId);
        }).then((response) => {

            //2. GET the User - GET Request
            cy.request({
                method: 'GET',
                url: `https://gorest.co.in/public/v2/users/${userId}`,
                headers: {
                    Authorization: accessToken
                }
            }).then((response) => {

                expect(response.status).to.equal(200);
                expect(response.statusText).to.equal('OK');

                expect(response.body).has.property('name', postPayload.name);
                expect(response.body).has.property('email', postPayload.email);
                expect(response.body).has.property('gender', postPayload.gender);
                expect(response.body).has.property('status', postPayload.status);
            }).then((response) => {

                //3. Update the Created User - PUT Request
                putPayload = {
                    "name": createUserJSON.name + "Updated",
                }
                cy.request({
                    method: 'PUT',
                    url: `https://gorest.co.in/public/v2/users/${userId}`,
                    headers: {
                        Authorization: accessToken
                    },
                    body: putPayload
                }).then((response) => {

                    expect(response.status).to.equal(200);
                    expect(response.body).has.property('name', putPayload.name);
                })
            })
        }).then((response) => {

            //4. Delete the User - DELETE Request
            cy.request({
                method: 'DELETE',
                url: `https://gorest.co.in/public/v2/users/${userId}`,
                headers: {
                    Authorization: accessToken
                }
            }).then((response) => {

                expect(response.status).to.equal(204);
            })
        }).then((response) => {

            //5. Verify the Deleted User - GET Request
            cy.request({
                method: 'GET',
                url: `https://gorest.co.in/public/v2/users/${userId}`,
                headers: {
                    Authorization: accessToken
                },
                failOnStatusCode: false
            }).then((response) => {

                expect(response.status).to.equal(404);
            })
        })

    })

});