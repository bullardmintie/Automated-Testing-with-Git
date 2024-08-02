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
  
  

  
  
  })
})

//Invalid login



//Navigating through pages



//Adding items to cart



//Checking out