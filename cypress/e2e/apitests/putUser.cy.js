/// <reference types="Cypress" />

const createUserJSON = require('../../fixtures/createUser.json')

describe('PUT User API Request', () => {

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
    let postPayload;
    let putPayload;

    it('PUT - Update User or Create New Entry if not exist', () => {

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
                Authorization: 'Bearer ' + token
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

            //2. Retrieve the Created User - GET Request
            cy.request({
                method: 'GET',
                url: `https://gorest.co.in/public/v2/users/${userId}`,
                headers: {
                    'authorization': 'Bearer bc5104f9db0fa9d35d48813af15fe91ff06ca8682d3f40c5f2e264c321740063'
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
                        'authorization': 'Bearer bc5104f9db0fa9d35d48813af15fe91ff06ca8682d3f40c5f2e264c321740063'
                    },
                    body: putPayload
                }).then((response) => {

                    expect(response.status).to.equal(200);
                    expect(response.statusText).to.equal('OK');

                    expect(response.body).has.property('name', putPayload.name);
                })
            })
        }).then((response) => {

            //4. Verify the Updated User - GET Request
            cy.request({
                method: 'GET',
                url: `https://gorest.co.in/public/v2/users/${userId}`,
                headers: {
                    'authorization': 'Bearer bc5104f9db0fa9d35d48813af15fe91ff06ca8682d3f40c5f2e264c321740063'
                }
            }).then((response) => {

                expect(response.status).to.equal(200);
                expect(response.statusText).to.equal('OK');

                expect(response.body).has.property('name', putPayload.name);
            })
        })

    })

});