/// <reference types="cypress" />

// function logout() {
//     cy.get('#welcome').click()
//     cy.get('#welcome-menu > :nth-child(1) > :nth-child(3) > a').click()
// }

it.only("positive login test", function() {
    cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login')
    cy.get('#txtUsername').type('Admin')
    cy.get('#txtPassword').type('admin123')
    cy.get('#btnLogin').click()
    cy.get('#welcome').should("have.text", "Welcome Sujeet")
    cy.clearCookies()
})