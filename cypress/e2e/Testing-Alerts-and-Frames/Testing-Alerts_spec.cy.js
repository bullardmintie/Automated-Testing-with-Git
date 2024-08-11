//Alerts
describe('choosing alert', () => {

    it('should be able to choose correct alert to use', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
                // returning false here prevents Cypress from
                // failing the test
                return false
              })
function launchApplication() {}
    cy.visit('https://demoqa.com/alerts')

function waitforresponse() {}
    cy.wait(62000)

function alert() {}
    cy.get('.text-center').should('be.visible')
    cy.get('#alertButton').click()
    })
  })


//Timer Alert
describe('choosing timer alert', () => {

    it('should be able to choose correct alert to use for timer alert', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
                // returning false here prevents Cypress from
                // failing the test
                return false
              })
              
function launchApplication() {}
    cy.visit('https://demoqa.com/alerts')

function waitforresponse() {}
    cy.wait(80000)

function alert() {}
    cy.get('.text-center').should('be.visible')
    cy.get('#timerAlertButton').click()
    })
  })


//Confirm Alert
describe('choosing confirm alert', () => {

    it('should be able to choose correct alert to use for confirm alert', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
                // returning false here prevents Cypress from
                // failing the test
                return false
              })

function launchApplication() {}            
        cy.visit('https://demoqa.com/alerts')

function waitforresponse() {}
        cy.wait(95000)

function alert() {}
        cy.get('.text-center').should('be.visible')
        cy.get('#confirmButton').click()
        cy.on('window:confirm', (t) => {
            expect(t).to.equal('Do you confirm action?')
        })
    })
  })


//Prompt Alert
describe('choosing prompt alert', () => {

    it('should be able to choose correct alert to use for prompt alert', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
                // returning false here prevents Cypress from
                // failing the test
                return false
              })

function launchApplication() {}
        cy.visit('https://demoqa.com/alerts')

function waitforresponse() {}
        cy.wait(110000)

function alert() {}
        cy.get('.text-center').should('be.visible')
        cy.get('#promtButton').click()
        cy.on('window:alert', (t) => {
            expect(t).to.contains('Please enter your name')
        })
    })
  })