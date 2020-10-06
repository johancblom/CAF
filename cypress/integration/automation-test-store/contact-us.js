/// <reference types='cypress' />
describe('Test Contact Us form via Automation Test Store', () => {
  it('Should be able to submit a successful submission via contact us form', () => {
    cy.visit('https://automationteststore.com')
    // cy.get('.info_links_footer > :nth-child(5) > a').click()
    cy.get('a[href$="contact"]')
      .click()
      .then((button) => {
        cy.log(button.text())
      })
    cy.get('#ContactUsFrm_first_name').type('Joe')
    cy.get('#ContactUsFrm_email').type('joe_bloggs@google.com')
    cy.xpath('//textarea[@id="ContactUsFrm_enquiry"]').type('eqnuiry')
    cy.get('button[title="Submit"]').click()
    cy.get('.mb40 > :nth-child(3)').should(
      'have.text',
      'Your enquiri has been successfully sent to the store owner!',
    )
  })
})
