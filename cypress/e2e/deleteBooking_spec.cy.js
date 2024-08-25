describe('API Testing with Cypress', () => {
    it('should create a new booking', () => {
        cy.request({
            method: 'DELETE',
            url: 'https://restful-booker.herokuapp.com/booking/1',
            body: {
                lastName: "Kent",
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(403);
            
        });
    });
})