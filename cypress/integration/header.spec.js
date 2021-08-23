context('check header', () => {
    it('visit resume page', () => {
        cy.visit('https://esender.me/')
        cy.get('.navigation-item:last-child')
          .should('contain', 'Résumé')
          .click()
        cy.url().should('eq', 'https://esender.me/resume/')
    })

    it('visit home page', () => {
        cy.visit('https://esender.me/')
        cy.get('.navigation-item:first-child')
          .should('contain', 'Homepage')
          .click()
        cy.url().should('eq', 'https://esender.me/')
    })

    it('visit playground page', () => {
        cy.visit('https://esender.me/')
        cy.get('.navigation-item:nth-child(2)')
          .should('contain', 'Playground')
          .click()
        cy.url().should('eq', 'https://esender.me/playground/')
    })
})

