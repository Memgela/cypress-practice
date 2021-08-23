/// <reference types="cypress" />

it.only("positive login test", function() {
    cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login')
    cy.get('#txtUsername').type('Admin')
    cy.get('#txtPassword').type('admin1234')
    cy.get('#btnLogin').click()
    cy.get('#spanMessage').should("have.text", "Invalid credentials")
})