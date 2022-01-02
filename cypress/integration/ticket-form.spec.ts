const NAME = 'testName'
const EMAIL = 'testEmail@aa.com'
const SUBJECT = 'testSubject'
const MESSAGE = 'testMsg'

const EXPECTED_SUCCESS_MSG = 'Thank you!'
const EXPECTED_FAIL_MSG = 'Error!'

describe('Autentykacja', () => {
    beforeEach(() => {
        cy.visit('')
    })

    it('Successful submission', function () {
        cy.intercept(`${Cypress.env('apiUrl')}/v2/tickets/new`, {
            fixture: 'validResponse.json',
            statusCode: 200,
        })
        cy.fillTicketForm(NAME, EMAIL, SUBJECT, MESSAGE)

        cy.get('#root h1.success')
            .should('be.visible')
            .should('have.text', EXPECTED_SUCCESS_MSG)
    })

    it('Unsuccessful submission', function () {
        cy.intercept(`${Cypress.env('apiUrl')}/v2/tickets/new`, {
            fixture: 'invalidResponse.json',
            statusCode: 500,
        })
        cy.fillTicketForm(NAME, EMAIL, SUBJECT, MESSAGE)

        cy.get('.fail')
            .should('be.visible')
            .should('have.text', EXPECTED_FAIL_MSG)
    })
})
