describe('API Testing with Cypress', () => {
    it('should update any booking', () => {
        cy.request({
            method: 'PUT',
            url: 'https://restful-booker.herokuapp.com/booking/:id',
            
            body: {
                firstName: "Clark",
                job: "known as Superman"
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(403);
            
        });
    });
})