import '@testing-library/cypress/add-commands'

Cypress.Commands.add('fillTicketForm', (name, email, subject, msg) => {
    cy.get('#name').type(name)
    cy.get('#email').type(email)
    cy.get('#subject').type(subject)
    cy.get('#message').type(msg)
    cy.get("button[type='submit']").click()
})
