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

function clickProductsButton() {}
    cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]').click()
    cy.get('[data-test="back-to-products"]').click()
    cy.get('[data-test="item-2-title-link"] > [data-test="inventory-item-name"]').click()

function clickToggleBox() {}
    cy.get('.header_label').click()
    cy.get('[data-test="inventory-sidebar-link"]').scrollIntoView()

    })
  })