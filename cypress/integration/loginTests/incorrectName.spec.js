/// <reference types="cypress" />

it.only("positive login test", function() {
    cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login')
    cy.get('#txtUsername').type('Admin1')
    cy.get('#txtPassword').type('admin123')
    cy.get('#btnLogin').click()
    cy.get('#spanMessage').should("have.text", "Invalid credentials")
})