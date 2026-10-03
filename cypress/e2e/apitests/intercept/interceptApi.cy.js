/// <reference types = "Cypress" />

describe('Intercept with Cypress', () => {

    it('Intercept Test', () => {

        cy.visit('https://jsonplaceholder.typicode.com/');

        cy.intercept({
            path: '/posts'
        }).as('posts')

        cy.get("table:nth-of-type(1) a[href='/posts']").first().click();
        cy.wait('@posts').then(inter => {
            cy.log(JSON.stringify(inter))
            console.log(JSON.stringify(inter));
            expect(inter.response.body).to.have.length(100);
        })
    })

    it('Mocking with Intercept with Static Response', () => {

        cy.visit('https://jsonplaceholder.typicode.com/');

        cy.intercept('GET', '/posts', { totalpost: 5 }).as('posts');
        cy.get("table:nth-of-type(1) a[href='/posts']").first().click();
        cy.wait('@posts');
    })

    it('Mocking with Intercept from Dynamic Fixtures', () => {

        cy.visit('https://jsonplaceholder.typicode.com/');

        cy.intercept('GET', '/posts', { fixture: 'createUser.json' }).as('posts');
        cy.get("table:nth-of-type(1) a[href='/posts']").first().click();
        cy.wait('@posts');
    })

});