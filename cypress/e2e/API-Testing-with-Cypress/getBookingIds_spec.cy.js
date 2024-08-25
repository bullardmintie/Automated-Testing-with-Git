describe('API Testing with Cypress', () => {
    it('should return bookings needed', () => {
        cy.request({
            method: 'GET',
            url: 'https://restful-booker.herokuapp.com/booking',

            qs: {
                firstName: ["Nova", "Robert", "Jason"],
                lastName: ["Bullard", "Roper", "Senior"],
            },
        }).then((response) => {
            expect(response.status).to.eq(200);
            
        });
    });
});