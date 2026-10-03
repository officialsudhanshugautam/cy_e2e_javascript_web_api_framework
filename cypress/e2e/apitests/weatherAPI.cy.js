/// <reference types="Cypress" />

describe('Check Weather Information', () => {

    const apiKey = Cypress.env('apiKey')
    let latitude = 28.641780;
    let longitude = 77.299079;
    let cityName = 'Scotland' // London | Scotland | Dubai | Turkey | Vietnam | Delhi | Mumbai

    it('Check Weather Information by Latitude & Longitude', () => {

        cy.log(apiKey);

        cy.request({
            method: 'GET',
            url: `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`,
        }).then((response) => {

            latitude = response.body.coord.lat;
            longitude = response.body.coord.lon;

            cy.log('Latitude: ' + longitude);
            cy.log('Latitude: ' + latitude);

            // cy.log(JSON.stringify(response));

            let weather = response.body.weather[0].main;
            let country = response.body.sys.country;
            let locationName = response.body.name;

            cy.log('Weather Conditon: ' + weather);
            cy.log('Country: ' + country);
            cy.log('Location: ' + locationName);

            expect(response.body.coord).has.property('lat', latitude);
            expect(response.body.coord).has.property('lon', longitude);
            expect(response.body.weather[0]).has.property('main', weather);
            expect(response.body.sys).has.property('country', country);
            expect(response.body).has.property('name', locationName);

        })
    })

    it('Check Weather Information by City', () => {

        cy.request({
            method: 'GET',
            url: `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`,
        }).then((response) => {

            latitude = response.body.coord.lat;
            longitude = response.body.coord.lon;

            cy.log('Latitude: ' + longitude);
            cy.log('Latitude: ' + latitude);

            // cy.log(JSON.stringify(response));

            let weather = response.body.weather[0].main;
            let country = response.body.sys.country;
            let cityName = response.body.name;

            cy.log('Weather Conditon: ' + weather);
            cy.log('Country: ' + country);
            cy.log('City: ' + cityName);

            expect(response.body.coord).has.property('lat', latitude);
            expect(response.body.coord).has.property('lon', longitude);
            expect(response.body.weather[0]).has.property('main', weather);
            expect(response.body.sys).has.property('country', country);
            expect(response.body).has.property('name', cityName);

        })
    })
});
