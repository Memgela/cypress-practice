/// <reference types="cypress" />

function search(searchOption) {
    cy.visit('https://google.com')
    cy.get('#L2AGLb > .jyfHyd').click()
    cy.get('.gLFyf').type(`${searchOption}{enter}`)
}

function searchVideos(searchOption) {
    search(searchOption);
    cy.wait(5000);
    cy.contains("Видео").click()
}

it('should search', function () {
    searchVideos("cats")
})

