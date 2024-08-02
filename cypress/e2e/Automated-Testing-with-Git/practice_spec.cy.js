describe('Navigating through pages', () => {

    it('should successfully navigate through pages', () => {
  
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