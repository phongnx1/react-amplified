// describe('My First Test', () => {
//   it('Gets, types and asserts', () => {
//     cy.visit('https://example.cypress.io')

//     cy.contains('type').click()

//     // Should be on a new URL which
//     // includes '/commands/actions'
//     cy.url().should('include', '/commands/actions')

//     // Get an input, type into it
//     cy.get('.action-email').type('fake@email.com')

//     //  Verify that the value has been updated
//     cy.get('.action-email').should('have.value', 'fake@email.com')
//   })
// })

var randNum =  Math.floor(Math.random() * 10) + 1;


describe('My First Test', () => {
  it('Gets, types and asserts', () => {
    cy.visit('http://localhost:3000/')

    // Get an input, type into it
    cy.get('.task-name').type('fake-task-01'+randNum)

    //  Verify that the value has been updated
    cy.get('.task-name').should('have.value', 'fake-task-01'+randNum)

    cy.get('.task-description').type('fake-description-01'+randNum)

    //  Verify that the value has been updated
    cy.get('.task-description').should('have.value', 'fake-description-01'+randNum)

    cy.get('.summit-btn').click()
  })
})


