/// <reference types="cypress" />

it.only("empty password test", function() {
    cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login')
    cy.get('#txtUsername').type('Admin')
    cy.get('#txtPassword').should('be.empty')
    cy.get('#btnLogin').click()
    cy.get('#spanMessage').should("have.text", "Password cannot be empty")
})