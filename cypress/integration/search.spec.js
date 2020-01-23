/// <reference types="Cypress" />

context('Navigation', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('input Lille in search engine and verify that Lilliers is first and that 10 elements exists', () => {
        cy.get('#search')
            .click({ force: true })
            .type('Lille')
            .should('have.value', 'Lille')

        cy.contains('Lillers')
            .parent('tr')
            .within(() => {
                cy.get('td')
                    .eq(1)
                    .contains('Lillers')
                cy.get('td')
                    .eq(2)
                    .contains('Pas-de-Calais')
            })

        cy.get('tbody').within(() => {
            cy.get('tr')
                .its('length')
                .should('be.eq', 10)
        })
    })
})
