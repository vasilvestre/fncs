// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="Cypress" />

const prepareAndVisitHomepageWithAccount = () => {
    window.localStorage.setItem('auth', 'true')
    window.localStorage.setItem(
        'user',
        JSON.stringify({
            discountCode: '',
            email: 'test@test.me',
        })
    )
    cy.visit('./')
    cy.get('#ticket-list-container').within(() => {
        cy.get('button')
            .eq(1)
            .click()
    })
}
const prepareAndVisitHomepageWithAccountAndDiscountCode = () => {
    window.localStorage.setItem('auth', 'true')
    window.localStorage.setItem(
        'user',
        JSON.stringify({
            discountCode: '0999',
            email: 'test@test.me',
        })
    )
    cy.visit('./')
    cy.get('#ticket-list-container').within(() => {
        cy.get('button')
            .eq(2)
            .click()
    })
}

context('Play around tickets', () => {
    it('list tickets on homepage', function() {
        prepareAndVisitHomepageWithAccount()
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
        prepareAndVisitHomepageWithAccount()
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

    it('account with discount code reduce price', () => {
        prepareAndVisitHomepageWithAccountAndDiscountCode()
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
        cy.contains('10 €')
    })
})
