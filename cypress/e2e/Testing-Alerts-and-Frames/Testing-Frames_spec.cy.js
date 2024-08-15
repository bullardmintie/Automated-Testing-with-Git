//Single Frame
describe('choosing frame', () => {

        it('should be able to choose correct frame to use', () => {

        Cypress.on('uncaught:exception', (err, runnable) => {
                // returning false here prevents Cypress from
                // failing the test
                return false
              })

function verifyiframe() {}
        cy.visit('https://demoqa.com/frames')

function inspectelements() {}
        cy.get('.text-center').should('be.visible')
        cy.get('#frame1').then(($iframe) => {
                const iframecontent=$iframe.contents().find('This is a sample page')
        })

        cy.get('#frame2').then(($iframe) => {
                const iframecontent=$iframe.contents().find('This is a sample page')
        })
    })
    
  })

//Nested Frame
describe('Nesting Frame Test', () => {

        it('should be able to choose the correct frame to use', () => {
            // Handle any uncaught exceptions
    
            Cypress.on('uncaught:exception', (err, runnable) => {
                // Prevent Cypress from failing the test on exceptions
                return false;
            });
    
            // Visit the URL with frames
            cy.visit('https://demoqa.com/nestedframes');
    
        function verifyNestedProperty() {}
            cy.get('iframe#frame1').then($iframe => {
                const $body = $iframe.contents().find('body');
    
        function verifyInsideIframe() {}
            cy.wrap($body).should('have.property', 'ChildElementCount').and('be.greaterThan', 0)
    
        function verifyInsideIframe() {}
            cy.wrap($body).find('iframe').then($nestedIframe => {
            const $nestedBody = $nestedIframe.contents().find('body')
            cy.wrap($nestedBody).should('have.text', 'some text or element you expect')
            })
            })
      })
    })
