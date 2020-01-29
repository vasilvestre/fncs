// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="Cypress" />

context('Play around tickets', () => {
    beforeEach(() => {
        cy.visit('./')
        window.localStorage.setItem('auth', 'true')
    })

    it('list tickets on homepage', function() {
        cy.contains('Ticket number')
            .parent('div')
            .parent('div')
            .parent('div')
            .within(() => {
                cy.contains('Departure at')
                cy.contains('Incoming at')
                cy.contains('Train number')
                cy.get('button')
            })
    })

    it('add ticket and find them in user dashboard', () => {
        cy.get('#ticket-list-container').within(() => {
            cy.get('button')
                .eq(0)
                .click()
        })
        cy.get('header').within(() => {
            cy.get('#user-button').click()
        })
        cy.get('#menu-appbar')
            .contains('My tickets')
            .click()
        cy.location().should(loc => {
            expect(loc.pathname).to.eq('/my_tickets')
        })
        cy.contains('Ticket number')
    })
})
