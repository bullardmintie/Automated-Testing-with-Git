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
describe('Navigating through pages', () => {

  it('should successfully navigate through pages', () => {

const validUsername = 'standard_user'
const validPassword = 'secret_sauce'

function launchApplication() {}
  cy.visit('https://saucedemo.com/');

  cy.get('[data-test="username"]').type(validUsername)
  cy.get('[data-test="password"]').type(validPassword)
  cy.get('[data-test="login-button"]').click()

function verifyInventoryList() {}

  cy.get('[data-test="inventory-list"]').should('be.visible')

function clickProductsButton() {}
  cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]').click()
  cy.get('[data-test="back-to-products"]').click()
  cy.get('[data-test="item-2-title-link"] > [data-test="inventory-item-name"]').click()

function clickHeaderLabel() {}
  cy.get('.header_label').click()

function openDropDownMenu() {}

  cy.get('#react-burger-menu-btn').click()
  cy.get('[data-test="inventory-sidebar-link"]').click()

  })
})

//Adding items to cart



//Checking out