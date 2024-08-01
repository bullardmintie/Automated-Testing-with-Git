describe('verify h1 header', () => {

    it('should be visible', () => {

    cy.visit('https://example.cypress.io')
    cy.get('h1').contains('Kitchen Sink')
    })
    
  })

  describe('verify button', () => {

    it('should be visible and click', () => {

      cy.visit('https://example.cypress.io')
      cy.get('.dropdown-toggle').click()
      cy.get(':nth-child(4) > .row > .col-xs-12 > .home-list > :nth-child(1) > :nth-child(1)').click()
      cy.get('button').click
    })
    
  })

  describe('enter email address', () => {

    it('should input email into email address', () => {

      cy.visit('https://example.cypress.io')
      cy.get('.dropdown-toggle').click()
      cy.get('.home-list > :nth-child(3) > :nth-child(1)').click()
      cy.get('#email1').type('bullardmintie@gmail.com')
    })
    
  }) 

  describe('verify drop-down --select a fruit--', () => {

    it('should be visible and click', () => {

      cy.visit('https://example.cypress.io')
      cy.get('.dropdown-toggle').click()
      cy.get('.home-list > :nth-child(3) > :nth-child(1)').click()
      cy.get('.action-select')
    })
    
  })
  