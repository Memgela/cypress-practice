/// <reference types="cypress" />

it.only("empty username test", function() {
    cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login')
    cy.get('#txtPassword').should('be.empty')
    cy.get('#txtUsername').should('be.empty')
    cy.get('#btnLogin').click()
    cy.get('#spanMessage').should("have.text", "Username cannot be empty")
})