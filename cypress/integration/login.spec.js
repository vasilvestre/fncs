// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="Cypress" />

context('Play around login', () => {
    beforeEach(() => {
        cy.visit('./')
    })

    it('redirect from homepage to login if not connected', function() {
        cy.location().should(loc => {
            expect(loc.pathname).to.eq('/sign_in')
        })
    })

    it('login with success', function() {
        cy.get('#email').type('eve.holt@reqres.in')
        cy.get('#password').type('cityslicka{enter}')
        cy.location().should(loc => {
            expect(loc.pathname).to.eq('/')
        })
    })

    it('login with bad login do nothing', function() {
        cy.get('#email').type('fail@reqres.in')
        cy.get('#password').type('noPass{enter}')
        cy.location().should(loc => {
            expect(loc.pathname).to.eq('/sign_in')
        })
    })
})
