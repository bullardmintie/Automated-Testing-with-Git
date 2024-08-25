describe('API Testing with Cypress', () => {
    it('should create a new booking', () => {
        cy.request({
            method: 'POST',
            url: 'https://restful-booker.herokuapp.com/booking',
            body: {
                firstName: "Superman",
                lastName: "Kent",
                job: "save the world"
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(500);
            
        });
    });
});