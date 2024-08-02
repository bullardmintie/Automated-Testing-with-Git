//Valid Login
describe('Verify Valid Login', () => {

  it('should login successfully', () => {

const validUsername = 'standard_user'
const validPassword = 'secret_sauce'

function launchApplication() {}
  cy.visit('https://saucedemo.com/');

  cy.get('[data-test="username"]').type(validUsername)
  cy.get('[data-test="password"]').type(validPassword)

function clickLoginButton() {}
  cy.get('[data-test="login-button"]').click()
  cy.get('[data-test="inventory-list"]').should('be.visible')
  
  })
})

//Invalid login
describe('Verify Invalid Login', () => {

  it('should NOT login successfully', () => {

const invalidUsername = 'standarduser'
const invalidPassword = 'secretsauce'

function launchApplication() {}
  cy.visit('https://saucedemo.com/');

  cy.get('[data-test="username"]').type(invalidUsername)
  cy.get('[data-test="password"]').type(invalidPassword)

function clickLoginButton() {}
  cy.get('[data-test="login-button"]').click()
  cy.get('[data-test="error"]').should('be.visible')  
  
  })
})

//Navigating through pages



//Adding items to cart



//Checking out