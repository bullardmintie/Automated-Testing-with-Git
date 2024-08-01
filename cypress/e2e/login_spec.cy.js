describe('sucessful login', () => {

    it('should login successful', () => {

const validUsername = 'enterUsername'
const validPassword = 'enterPassword'

function launchApplication() {}
    cy.visit('https://demo.applitools.com/');

    cy.get('#username').type(validPassword)
    cy.get('#password').type(validPassword)

function clickLoginButton() {}
    cy.get('#log-in').click()
    cy.get('.content-box').should('be.visible')
    
    })
})