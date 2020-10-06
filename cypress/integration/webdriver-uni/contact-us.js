/// <reference types='cypress' />
describe('Test Contact Us form via WebdriverUni', () => {
  it('Should be able to submit a successful submission via contact us form', () => {
    cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
    cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
    cy.title().should('eq', 'WebDriver | Contact Us')
    cy.url().should('contain', 'contactus')
    cy.get('[name="first_name"]').type('Joe')
    cy.get('[name="last_name"]').type('Bloggs')
    cy.get('[name="email"]').type('joe_bloggs@google.com')
    cy.get('textarea.feedback-input').type('a comment')
    cy.get('[type="submit"]').click()
    cy.get('h1').should('have.text', 'Thank You for your Message!')
  })

  it('Should not be able to submit a successful submission via contact us form as all fields are required', () => {
    cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
    cy.get('[name="first_name"]').type('Joe')
    cy.get('[name="last_name"]').type('Bloggs')
    cy.get('textarea.feedback-input').type('a comment')
    cy.get('[type="submit"]').click()
    cy.get('body').should('contain', 'Error: all fields are required')
    cy.get('body').should('contain', 'Error: Invalid email address')
  })
})
