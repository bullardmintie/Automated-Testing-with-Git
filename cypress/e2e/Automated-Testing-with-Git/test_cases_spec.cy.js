//Valid Login
describe('Verify Valid Login', () => {

  it('should login successfully', () => {

const validUsername = 'standard_user'
const validPassword = 'secret_sauce'

function launchApplication() {}
  cy.visit('https://saucedemo.com/');

  cy.get('[data-test="username"]').type(validUsername)
  cy.get('[data-test="password"]').type(validPassword)
  cy.get('[data-test="login-button"]').click()

function verifyInventoryList() {}

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
  cy.get('[data-test="login-button"]').click()

function verifyInventoryList() {}

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
describe('Add Product to Cart Successfully', () => {

  it('should be able to add product to cart successfully', () => {

const validUsername = 'standard_user'
const validPassword = 'secret_sauce'

function launchApplication() {}
  cy.visit('https://saucedemo.com/');

  cy.get('[data-test="username"]').type(validUsername)
  cy.get('[data-test="password"]').type(validPassword)
  cy.get('[data-test="login-button"]').click()

function verifyInventoryList() {}

  cy.get('[data-test="inventory-list"]').should('be.visible')

function verifyAddtoCart() {}
  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
  cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()

function verifyShoppingCart() {}
  cy.get('[data-test="shopping-cart-link"]').click()
  
  })
})

//Checking out
describe('Verify Valid Login', () => {

  it('should login successfully', () => {

const validUsername = 'standard_user'
const validPassword = 'secret_sauce'

function launchApplication() {}
  cy.visit('https://saucedemo.com/');

  cy.get('[data-test="username"]').type(validUsername)
  cy.get('[data-test="password"]').type(validPassword)
  cy.get('[data-test="login-button"]').click()

function verifyInventoryList() {}
  cy.get('[data-test="inventory-list"]').should('be.visible')

function AddtoCart () {}
  cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()

function verifyShoppingCart() {}
  cy.get('[data-test="shopping-cart-link"]').click()

function completeCheckout() {}
  cy.get('[data-test="checkout"]').click()
  cy.get('[data-test="firstName"]').type('John')
  cy.get('[data-test="lastName"]').type('Doe')
  cy.get('[data-test="postalCode"]').type('49337')
  cy.get('[data-test="continue"]').click()
  cy.get('[data-test="payment-info-value"]').should('be.visible')
  cy.get('[data-test="shipping-info-value"]').should('be.visible')
  cy.get('[data-test="finish"]').click()
  cy.get('[data-test="checkout-complete-container"]').should('be.visible')

  })
})
